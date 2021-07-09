<template>
  <div class="image-upload">
    <label>{{ label }}</label>
    <input type="file" accept="image/" @change="upload" draggable="true" />
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  props: {
    label: {
      type: String,
      default: "Add image",
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
