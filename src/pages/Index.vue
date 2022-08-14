<template>
  <hero />
  <about />
</template>

<script>

import Hero from "../modules/website/Hero.vue";
import About from "../modules/website/About.vue";

export default {
  name: "Index",
  components: {
    Hero,
    About
  }
};
</script>
