<template>
  <div class="select-component">
    <select
      v-model="valueSelected"
      @select="$emit('select', $event.target.value)"
    >
      <option v-for="item in values" @key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <Validate />
  </div>
</template>

<script>
import Validate from "@/components/Validate";

export default {
  name: "SelectComponent",
  components: {
    Validate,
  },
  props: {
    values: {
      default: [],
    },
  },
  data() {
    return {
      valueSelected: "",
    };
  },
};
</script>

<style scoped></style>
