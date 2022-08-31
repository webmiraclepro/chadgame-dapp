<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section id="dapp">
    <div class="flex flex-col bg-primary lg:flex-row">
      <div class="pt-0 mt-16 lg:mt-32 ml-1 lg:ml-36 lg:pt-36 h-full w-full lg:w-1/2">
        <img src="/imgs/img_prize_back.png" />
      </div>
      <div class="mx-4 lg:mr-48 my-12 lg:my-48">
        <h1 class="text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline">How Does The Prize Draw Work?</span>
        </h1>
        <p class="mx-auto mt-3 text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
          The prize draw pool is generated from the buy & sell tax, 3% of the daily trading volume goes into the prize draw and as long as you hold a million $CHADGAME you will be entered into the prize draw.
          <br /><br />
          The prize draw & winner happens every 24 hours.
          <br /><br />
          Our smart contract and D-app doesn't rely on a human to calculate the entries, pick a winner or send prizes.
          <br /><br />
          Chad Game is fully automated and the first draw will take place 24 hours after launch and every 24 hours after forever! 
          <br /><br />
          Get your Millions of $CHADGAME now to be entered into the daily prize draw for life!
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="">
            <primary-button @click="launchDapp">
              PRIZE DRAW DAPP
            </primary-button>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <secondary-button>
              JOIN TELEGRAM
            </secondary-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import PrimaryButton from '../../components/PrimaryButton.vue'
import SecondaryButton from '../../components/SecondaryButton.vue'

export default {
  name: 'PrizeDraw',
  components: {
    PrimaryButton, SecondaryButton
  },
  methods: {
    launchDapp() {
      this.$router.push({path:'/dapp'})
    }
  }
}

</script>