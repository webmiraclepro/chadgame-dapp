<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section id="foot">
    <div class="bg-white">
      <img class="w-full hidden md:block lg:block" src="/imgs/img_footer.webp" />
      <img class="w-full block md:hidden lg:hidden" src="/imgs/img_footer_sm.webp" />
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex flex-col md:flex-row lg:flex-row space-y-6 lg:space-y-0 space-x-0 md:space-x-4 lg:space-x-6 justify-end -mt-64 md:-mt-36 lg:-mt-24 items-center">
          <div class="flex flex-row space-x-6">
            <telegram-button />
            <twitter-button />
          </div>
          <logo class="-mt-3"/>
          <div class="text-white">
            Copyright. Chadgames 2022
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import TelegramButton from '../../components/Telegrambutton.vue';
import TwitterButton from '../../components/TwitterButton.vue';
import Logo from '../../components/Logo.vue';

export default {
  name: 'Foot',
  components: { TelegramButton, TwitterButton, Logo }
}

</script>