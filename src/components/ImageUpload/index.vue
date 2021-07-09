<template>
  <div class="image-upload">
    <label>{{ label }}</label>
    <input
      type="file"
      accept="image/"
      :name="name"
      @change="upload"
      draggable="true"
      :placeholder="placeholder"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  props: {
    classNames: {
      type: String,
      default: "input-group",
    },
    name: {
      type: String,
      default: "none",
    },
    label: {
      type: String,
      default: "Add image",
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
      preview: null,
      image: null,
    };
  },
  methods: {
    upload(e) {
      const input = e.target;
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style scoped></style>
