<template>
  <div class="modal-create-app">
    <div class="container-modal">
      <button type="button">X</button>
      <div class="form-container">
        <Title title="Create Your App" fontSize="1.8rem" />
        <InputText label="APP NAME" placeholder="Enter App Display Name" />
        <ImageUpload label="APP ICON" placeholder="Select a File" />
        <ColorPicker label="APP ICON" />
        <SelectComponent label="APP ICON" />
      </div>
      <div class="preview-container">
        <Title
          title="APP'S CARD PREVIEW"
          fontSize="1.8rem"
          :values="[{ name: 'teste', value: 'teste' }]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import InputText from "@/components/InputText";
import ImageUpload from "@/components/ImageUpload";
import ColorPicker from "@/components/ColorPicker";
import SelectComponent from "@/components/SelectComponent";

export default {
  name: "ModalCreateApp",
  components: {
    Title,
    InputText,
    ImageUpload,
    ColorPicker,
    SelectComponent,
  },
};
</script>

<style lang="scss" scoped>
.modal-create-app {
  .container-modal {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas: "form" "preview";

    box-sizing: border-box;

    padding: 5%;

    > button {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 5%;
    }

    .form-container {
      width: 100%;
      min-height: 250px;
      background-color: red;

      grid-area: form;
    }

    .preview-container {
      width: 100%;
      min-height: 250px;
      background-color: blue;

      grid-area: preview;
    }
  }
}

@media (min-width: 700px) {
  .modal-create-app {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.6);

    .container-modal {
      width: 80%;
      height: 80%;
      margin-left: 10%;
      margin-top: 10%;
      grid-template-columns: 50% 50%;
      grid-template-areas: "form preview";

      > button {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 15%;
      }

      .form-container {
        width: 100%;
        min-height: 250px;
        background-color: red;

        grid-area: form;
      }

      .preview-container {
        width: 100%;
        min-height: 250px;
        background-color: blue;

        grid-area: preview;
      }
    }
  }
}
</style>
