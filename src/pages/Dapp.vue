<template>
  <page-loader>
    <dapp-header />
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </page-loader>
</template>

<script>

import DappHeader from '../modules/dapp/DappHeader.vue'
import PageLoader from '../components/PageLoader.vue';

export default {
  name: "Dapp",
  components: {
    DappHeader,
    PageLoader,
},
  mounted() {
    this.$store.dispatch('loadWeb3');
  }
};
</script>
