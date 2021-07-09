<template>
  <div class="input-text" :class="classNames">
    <label>{{ label }}</label>
    <input
      type="text"
      :name="name"
      :placeholder="placeholder"
      :alt="alt"
      v-model="valueInput"
      @keyup="validate"
      @input="$emit('value', $event.target.value)"
    />
    <Validate
      :message="validateMessage"
      :show="validateShow"
      :type="validateType"
    />
  </div>
</template>

<script>
import Validate from "@/components/Validate";

export default {
  name: "InputText",
  components: {
    Validate,
  },
  props: {
    classNames: {
      type: String,
      default: "input-group",
    },
    name: {
      type: String,
      default: "none",
    },
    placeholder: {
      type: String,
      default: "Digite aqui o texto",
    },
    alt: {
      type: String,
      default: "Campo de texto",
    },
    validateShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      valueInput: "",
      validateMessage: "Required field",
      validateType: "danger",
    };
  },
};
</script>

<style scoped></style>
