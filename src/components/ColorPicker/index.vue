<template>
  <div class="color-picker">
    <div class="selector" @click="showSelector">
      <span>{{ colorSelected }}</span>
      <button>{{ colorSelected }}</button>
    </div>
    <div class="palett" v-show="selectorModal">
      <button
        class="color"
        v-for="color in rangeColors"
        :style="backgroundColor(color)"
        @click="selectColor(color)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    rangeColors: {
      default: [
        "#000000",
        "#FFFFFF",
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#00FFFF",
        "#FF00FF",
        "#C0C0C0",
        "#808080",
        "#800000",
        "#808000",
        "#008000",
        "#800080",
        "#008080",
        "#000080",
      ],
    },
  },
  data() {
    return {
      colorSelected: "#1A1A1A",
      selectorModal: false,
    };
  },
  methods: {
    backgroundColor(color) {
      return `background: ${color}`;
    },
    showSelector() {
      this.selectorModal = !this.selectorModal;
    },
    selectColor(color) {
      this.colorSelected = color;
    },
  },
};
</script>

<style scoped></style>
