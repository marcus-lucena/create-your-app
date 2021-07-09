<template>
  <div class="title">
    <span
      :style="{
        fontSize,
        color,
      }"
      >{{ title }}</span
    >
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#1A1A1A",
    },
    fontSize: {
      type: String,
      default: "1.5rem",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  min-height: 40px;
  display: flex;
}
</style>
