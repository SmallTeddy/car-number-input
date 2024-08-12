<template>
  <div v-if="showLetterKeyboard" class="letter-keyboard-layout">
    <div class="letter-close">
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
    <div v-for="items in letterItems" class="letter-items">
      <div
        v-for="letter in items"
        :class="`letter-item ${letter === 'Del' ? 'del-item' : ''}`"
        class="letter-item"
      >
        <span v-if="letter !== 'Del'" @click="emit('keydown', letter)">{{ letter }}</span>
        <svg
          v-if="letter === 'Del'"
          @click="emit('delete')"
          viewBox="0 0 1024 1024"
          width="40"
          height="40"
        >
          <path
            d="M874.666667 202.666667H360.533333c-21.333333 0-40.533333 8.533333-55.466666 23.466666l-217.6 234.666667c-25.6 27.733333-25.6 72.533333 0 100.266667l217.6 234.666666c14.933333 14.933333 34.133333 23.466667 55.466666 23.466667H874.666667c40.533333 0 74.666667-34.133333 74.666666-74.666667V277.333333c0-40.533333-34.133333-74.666667-74.666666-74.666666z m10.666666 544c0 6.4-4.266667 10.666667-10.666666 10.666666H360.533333c-2.133333 0-6.4-2.133333-8.533333-4.266666l-217.6-234.666667c-4.266667-4.266667-4.266667-10.666667 0-14.933333l217.6-234.666667c2.133333-2.133333 4.266667-4.266667 8.533333-4.266667H874.666667c6.4 0 10.666667 4.266667 10.666666 10.666667V746.666667z"
            fill="#666666"
            p-id="4275"
          ></path>
          <path
            d="M684.8 403.2c-12.8-12.8-32-12.8-44.8 0l-64 64-61.866667-61.866667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l61.866667 61.866667-61.866667 61.866667c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l61.866666-61.866667L640 618.666667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L620.8 512l61.866667-61.866667c12.8-12.8 12.8-34.133333 2.133333-46.933333z"
            fill="#666666"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";

const letterItems = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M", "Del"],
];

const showLetterKeyboard = ref(false);

const emit = defineEmits(["open", "close", "keydown", "delete"]);
const close = () => {
  showLetterKeyboard.value = false;
};

const open = () => {
  showLetterKeyboard.value = true;
};

defineExpose({
  open,
  close,
});
</script>

<style scoped>
.letter-keyboard-layout {
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  height: 240px;
  border-top: 1px solid #d9d9d9;
}

.letter-close {
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

.letter-items {
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 2px;
}

.letter-item {
  display: flex;
  font-size: 18px;
  width: 9%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

.del-item {
  padding-left: 2px;
  border: none;
}
</style>
