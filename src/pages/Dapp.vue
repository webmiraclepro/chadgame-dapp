<template>
  <dapp-header />
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

import DappHeader from '../modules/dapp/DappHeader.vue'

export default {
  name: "Dapp",
  components: {
    DappHeader
  },
};
</script>
