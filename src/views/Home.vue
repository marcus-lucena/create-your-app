<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <InputText />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import InputText from "@/components/InputText";

export default {
  name: "Home",
  components: {
    HelloWorld,
    InputText,
  },
};
</script>
