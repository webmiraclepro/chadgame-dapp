<template>
  <page-loader>
    <dapp-header />
    <div class="dapp">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <dapp-footer />
    </div>
  </page-loader>
</template>

<script>

import DappHeader from '../modules/dapp/DappHeader.vue';
import DappFooter from '../modules/dapp/DappFooter.vue';
import PageLoader from '../components/PageLoader.vue';

export default {
  name: "Dapp",
  components: {
    DappHeader,
    PageLoader,
    DappFooter
},
  mounted() {
    this.$store.dispatch('loadWeb3');
  }
};
</script>

<style>
  .dapp {
    background: linear-gradient(180deg, #280A49 0%, #360E6F 100%);
  }
</style>