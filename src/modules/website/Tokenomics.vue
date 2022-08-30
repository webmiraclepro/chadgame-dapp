<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section id="tokenomics">
    <div class="flex flex-col bg-white">
      <div class="flex flex-col lg:flex-row">
        <div class="mx-4 lg:ml-48 mt-12 lg:mt-36 mb-1 lg:mb-12 space-y-2">
          <h1 class="text-4xl tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-12">
            <span class="block xl:inline">Tokenomics</span>
          </h1>
          <p class="mx-auto mt-3 text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl">
            Our $ChadGame token comes with a tokenomics system devised to reward winners of the daily prize draw, create a long lasting stable ecosystem and market our platform effectively. 
          </p>
          <div class="text-secondary font-bold my-4 text-lg">Token supply: 1,000,000,000</div>
          <div class="flex flex-row space-x-1">
            <span class="text-primary font-bold">5%</span>
            <span class="text-gray-600">Private Sale</span>
          </div>
          <div class="flex flex-row space-x-1">
            <span class="text-primary font-bold">5%</span>
            <span class="text-gray-600">Prizes, giveaways, partnerships</span>
          </div>
          <div class="flex flex-row space-x-1">
            <span class="text-primary font-bold">10%</span>
            <span class="text-gray-600">Exchange listings</span>
          </div>
        </div>
        <div class="mx-4 mt-12 lg:mt-48 mb-12 space-y-4 mr-1 lg:mr-24">
          <div class="text-secondary font-bold my-4 text-lg">10% Transaction Tax</div>
          <div class="flex flex-row space-x-1">
            <span class="text-primary font-bold">3% ChadGame Prize Pool</span>
          </div>
          <span class="text-gray-600">3% of every transaction will go into the daily prize  draw for a lucky $ChadGame winner to win.</span>
          <div class="flex flex-row space-x-1">
            <span class="text-primary font-bold">1% Liquidity Pool</span>
          </div>
          <span class="text-gray-600">1% of every transaction will go towards our liquidity pool creating a more stable ecosystem, and allowing for greater project longevity.</span>
          <div class="flex flex-row space-x-1">
            <span class="text-primary font-bold">6% Marketing & Development</span>
          </div>
          <span class="text-gray-600">6% of every transaction will go to the marketing wallet, so we can push the word of $ChadGame further with our extensive marketing contacts.</span>
        </div>
      </div>
      <div class="lg:ml-48 sm:flex sm:justify-center lg:justify-start mb-12 lg:mb-24">
        <div class="">
          <primary-button>
            BUY TOKENS
          </primary-button>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <secondary-button>
            JOIN TELEGRAM
          </secondary-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import PrimaryButton from '../../components/PrimaryButton.vue'
import SecondaryButton from '../../components/SecondaryButton.vue'

export default {
  name: 'Tokenomics',
  components: {
    PrimaryButton, SecondaryButton
  }
}

</script>