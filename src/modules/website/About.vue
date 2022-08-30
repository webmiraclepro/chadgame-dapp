<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section id="about">
    <div class="flex flex-col bg-white lg:flex-row pt-0 lg:pt-36">
      <div class="mx-4 lg:ml-48 my-12 lg:my-48">
        <h1 class="text-4xl tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline">What is Chadgame?</span>
        </h1>
        <p class="mx-auto mt-3 text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
          ChadGame is a project on the Ethereum network that allows holders to enter into a daily prize draw simply by holding 1 Million of the $CHADGAME token.
          <br/><br/>
          Every Million $CHADGAME that you hold will act as an entry to the prize draw, meaning the more Millions you hold, the more chances you have of winning (holding 5 Million $CHADGAME tokens will give 5 entries etc.) 
          <br/><br/>
          ChadGame is designed to be like a no-loss lottery.
          <br/><br/>
          Not only do you have the potential to win the prize draw but also gain value in your tokens as the market cap increases.
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="">
            <primary-button>
              BUY TOKENS
            </primary-button>
          </div>
        </div>
      </div>
      <div class="pt-0 -ml-4 lg:pt-36 h-full w-full lg:w-1/2 mb-8">
        <img src="/imgs/img_about_back.png" />
      </div>
    </div>
  </section>
</template>

<script>

import PrimaryButton from '../../components/PrimaryButton.vue'
export default {
  name: 'About',
  components: {
    PrimaryButton
  }
}

</script>