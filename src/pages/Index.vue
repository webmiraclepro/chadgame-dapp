<template>
  <div class="bg-global">
    <hero />
    <about />
    <prize-draw />
    <tokenomics />
    <how-to-buy />
    <roadmap />
    <foot />
  </div>
</template>

<script>

import Hero from "../modules/website/Hero.vue";
import About from "../modules/website/About.vue";
import PrizeDraw from "../modules/website/PrizeDraw.vue";
import Tokenomics from "../modules/website/Tokenomics.vue";
import HowToBuy from "../modules/website/HowToBuy.vue";
import Roadmap from "../modules/website/Roadmap.vue";
import Foot from "../modules/website/Foot.vue";

export default {
  name: "Index",
  components: {
    Hero,
    About,
    PrizeDraw,
    Tokenomics,
    HowToBuy,
    Roadmap,
    Foot
  }
};
</script>

<style scoped>
  .bg-global {
    background: linear-gradient(180deg, #260A46 0%, #500C9D 100%);
  }
</style>
