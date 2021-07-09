<template>
  <div class="validate" v-if="show">
    <p :class="{ type }">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Validate",
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "danger",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.validate {
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-wrap: wrap;

  .danger {
    color: red;
  }
  .warning {
    color: orange;
  }
  .default {
    color: #1a1a1a;
  }
}
</style>
