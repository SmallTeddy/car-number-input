<template>
  <div class="car-number-input-layout">
    <NumberInput ref="numberInputRef" @input-click="numberInputClick" />
    <AreaKeyboard
      ref="areaKeyboardRef"
      @keydown="areaKeydown"
      @close="closeAreaKeyboard"
    />
    <LetterKeyboard
      ref="letterKeyboardRef"
      @keydown="letterKeydown"
      @close="closeLetterKeyboard"
      @delete="deleteKeydown"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NumberInput from "../number-input/main.vue";
import AreaKeyboard from "../area-keyboard/main.vue";
import LetterKeyboard from "../letter-keyboard/main.vue";

defineOptions({
  name: "car-number-input",
});

const areaKeyboardRef = ref(null);
const letterKeyboardRef = ref(null);
const numberInputRef = ref(null);

const closeAreaKeyboard = () => {
  areaKeyboardRef.value.close();
};

const openAreaKeyboard = () => {
  areaKeyboardRef.value.open();
};

const areaKeydown = (code) => {
  numberInputRef.value.area = code;
  numberInputRef.value.active = "letter";
  numberInputClick("letter");
};

const closeLetterKeyboard = () => {
  letterKeyboardRef.value.close();
};

const openLetterKeyboard = () => {
  letterKeyboardRef.value.open();
};

const letterKeydown = (code) => {
  numberInputRef.value[numberInputRef.value.active] = code;
  switch (numberInputRef.value.active) {
    case "letter":
      numberInputRef.value.active = "num1";
      break;
    case "num1":
      numberInputRef.value.active = "num2";
      break;
    case "num2":
      numberInputRef.value.active = "num3";
      break;
    case "num3":
      numberInputRef.value.active = "num4";
      break;
    case "num4":
      numberInputRef.value.active = "num5";
      break;
    default:
      break;
  }
};

const numberInputClick = (type) => {
  if (type === "area") {
    closeLetterKeyboard();
    openAreaKeyboard();
  } else {
    closeAreaKeyboard();
    openLetterKeyboard();
  }
};

const deleteKeydown = () => {
  numberInputRef.value[numberInputRef.value.active] = "";
};
</script>

<style scoped>
.car-number-input-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
