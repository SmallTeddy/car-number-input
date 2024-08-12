<template>
  <div v-if="showAreaKeyboard" class="area-keyboard-layout">
    <div class="area-close">
      <svg
        @click="emit('close')"
        class="close-btn"
        viewBox="0 0 1024 1024"
        width="200"
        height="200"
      >
        <path
          d="M512 466.944l233.472-233.472a31.744 31.744 0 0 1 45.056 45.056L557.056 512l233.472 233.472a31.744 31.744 0 0 1-45.056 45.056L512 557.056l-233.472 233.472a31.744 31.744 0 0 1-45.056-45.056L466.944 512 233.472 278.528a31.744 31.744 0 0 1 45.056-45.056z"
          fill="#5A5A68"
        ></path>
      </svg>
    </div>
    <div v-for="items in areaItems" class="area-items">
      <div v-for="item in items" class="area-item">
        <span @click="emit('keydown', item.cn_name)">{{ item.cn_name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";

const areaItems = [
  [
    { cn_name: "京" },
    { cn_name: "津" },
    { cn_name: "沪" },
    { cn_name: "渝" },
    { cn_name: "苏" },
    { cn_name: "浙" },
    { cn_name: "豫" },
    { cn_name: "粤" },
    { cn_name: "川" },
  ],
  [
    { cn_name: "陕" },
    { cn_name: "冀" },
    { cn_name: "辽" },
    { cn_name: "吉" },
    { cn_name: "皖" },
    { cn_name: "闽" },
    { cn_name: "鄂" },
    { cn_name: "湘" },
    { cn_name: "鲁" },
  ],
  [
    { cn_name: "晋" },
    { cn_name: "黑" },
    { cn_name: "赣" },
    { cn_name: "贵" },
    { cn_name: "甘" },
    { cn_name: "桂" },
    { cn_name: "琼" },
    { cn_name: "云" },
    { cn_name: "青" },
  ],
  [
    { cn_name: "无" },
    { cn_name: "蒙" },
    { cn_name: "藏" },
    { cn_name: "宁" },
    { cn_name: "新" },
    { cn_name: "港" },
    { cn_name: "澳" },
    { cn_name: "使" },
  ],
];

const showAreaKeyboard = ref(true);

const emit = defineEmits(["open", "close", "keydown"]);
const close = () => {
  showAreaKeyboard.value = false;
};

const open = () => {
  showAreaKeyboard.value = true;
};

defineExpose({
  open,
  close,
});
</script>

<style scoped>
.area-keyboard-layout {
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  height: 240px;
  border-top: 1px solid #d9d9d9;
}

.area-close {
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  border: none;
  width: 40px;
  height: 32px;
  font-size: 16px;
  color: red;
  background: #fff;
}

.area-items {
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 2px;
}

.area-item {
  display: flex;
  font-size: 18px;
  width: 11%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
</style>
