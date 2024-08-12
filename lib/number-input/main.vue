<template>
  <div class="input-layout">
    <div
      class="area-input"
      :class="{ active: active === 'area' }"
      @click="inputClick('area')"
    >
      {{ area }}
    </div>
    <div
      class="letter-input"
      :class="{ active: active === 'letter' }"
      @click="inputClick('letter')"
    >
      {{ letter }}
    </div>
    <span class="split">·</span>
    <div
      class="number-input"
      :class="{ active: active === 'num1' }"
      @click="inputClick('num1')"
    >
      {{ num1 }}
    </div>
    <div
      class="number-input"
      :class="{ active: active === 'num2' }"
      @click="inputClick('num2')"
    >
      {{ num2 }}
    </div>
    <div
      class="number-input"
      :class="{ active: active === 'num3' }"
      @click="inputClick('num3')"
    >
      {{ num3 }}
    </div>
    <div
      class="number-input"
      :class="{ active: active === 'num4' }"
      @click="inputClick('num4')"
    >
      {{ num4 }}
    </div>
    <div
      class="number-input"
      :class="{ active: active === 'num5' }"
      @click="inputClick('num5')"
    >
      {{ num5 }}
    </div>
    <div v-if="!isElectric" class="electric-input" @click="inputClick('electric')">
      <svg viewBox="0 0 1024 1024" width="200" height="200">
        <path
          d="M800 496 528 496 528 223.36 496 223.36 496 496 222.72 496 222.72 528 496 528 496 800.64 528 800.64 528 528 800 528Z"
          fill="#67C23A"
        ></path>
      </svg>
    </div>
    <div
      v-if="isElectric"
      class="electric-input"
      :class="{ active: active === 'electric' }"
      @click="inputClick('electric')"
    >
      {{ electric }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const area = ref("");
const letter = ref("");
const num1 = ref("");
const num2 = ref("");
const num3 = ref("");
const num4 = ref("");
const num5 = ref("");
const isElectric = ref(false);
const electric = ref("");
const active = ref("area");

const emit = defineEmits(["input-click"]);
const inputClick = (type: string) => {
  active.value = type;
  switch (type) {
    case "area":
      emit("input-click", "area");
      break;
    case "letter":
      emit("input-click", "letter");
      break;
    case "electric":
      emit("input-click", "electric");
      isElectric.value = !isElectric.value;
      break;
    default:
      emit("input-click", "num");
      break;
  }
};

defineExpose({
  area,
  letter,
  num1,
  num2,
  num3,
  num4,
  num5,
  electric,
  isElectric,
  active,
});
</script>

<style scoped>
.input-layout {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 10px;
  gap: 4px;
  justify-content: center;
  align-items: center;
}

.area-input,
.letter-input,
.number-input,
.electric-input {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-sizing: border-box;
  width: 11%;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-align: center;
}

.electric-input {
  border: 1px dashed #67c23a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.split {
  font-size: 28px;
  padding: 0 2px;
}

.active {
  border: 2px solid #409eff;
}
</style>
