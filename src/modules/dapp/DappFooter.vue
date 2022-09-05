<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row lg:flex-row justify-between items-center py-8 space-y-4 md:space-y-0 lg:space-y-0">
      <div class="flex justify-center">
        <logo class="w-3/5 -mt-4"/>
      </div>
      <div class="flex flex-row space-x-4">
        <telegram-button />
        <twitter-button />
      </div>
      <div class="text-white">
        Copyright. Chadgames 2022
      </div>
    </div>
  </div>
</template>

<script>

import Logo from "../../components/Logo.vue";
import TelegramButton from "../../components/Telegrambutton.vue";
import TwitterButton from "../../components/TwitterButton.vue"

export default {
  name: 'DappFooter', 
  components: {
    Logo, TelegramButton, TwitterButton
  }
}

</script>