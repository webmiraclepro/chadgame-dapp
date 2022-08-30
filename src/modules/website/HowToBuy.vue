<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section id="howtobuy">
    <div class="flex flex-col bg-primary space-y-2 lg:space-y-8 py-8 lg:py-36">
      <div class="text-center text-secondary font-bold text-4xl lg:text-6xl ">
        How to buy $CHADGAME
      </div>
      <div class="text-center text-white text-md">
        It only takes a few minutes to get yourself set up
      </div>
      <div class="flex flex-col lg:flex-row justify-center lg:items-start items-center space-x-0 lg:space-x-8">
        <div class="justify-center items-center w-3/4 lg:w-1/6">
          <img class="-mt-2 w-full" src="/imgs/img_step_1.png" />
          <div class="text-center text-secondary font-bold text-3xl lg:text-4xl -mt-16">
            Step 1
          </div>
          <div class="text-center text-white text-md mt-4">
            Download the MetaMask Chrome Extension or mobile app. Set up your account & make sure you’re connected to the Ethereum network.
          </div>
        </div>
        <div class="justify-center w-3/4 lg:w-1/6">
          <img class="-mt-2 w-full" src="/imgs/img_step_2.png" />
          <div class="text-center text-secondary font-bold text-3xl lg:text-4xl -mt-16">
            Step 2
          </div>
          <div class="text-center text-white text-md mt-4">
            Use Coinbase/another exchange to purchase ETH and send it over to your MetaMask Wallet Address. Or if you already have ETH, simply send it to your MetaMask Wallet.
          </div>
        </div>
        <div class="justify-center w-3/4 lg:w-1/6">
          <img class="-mt-2 w-full" src="/imgs/img_step_3.png" />
          <div class="text-center text-secondary font-bold text-3xl lg:text-4xl -mt-16">
            Step 3
          </div>
          <div class="text-center text-white text-md mt-4">
            Head over to the Uniswap Exchange and swap your ETH for $CHADGAME.
          </div>
        </div>
        <div class="justify-center w-3/4 lg:w-1/6">
          <img class="-mt-2 w-full" src="/imgs/img_step_4.png" />
          <div class="text-center text-secondary font-bold text-3xl lg:text-4xl -mt-16">
            Step 4
          </div>
          <div class="text-center text-white text-md mt-4">
            Congratulations! You are now an Official ChadGame Holder. Join our Telegram to stay up to date with the team's announcements & progress.
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
  name: 'HowToBuy',
  components: {
    PrimaryButton, SecondaryButton
  }
}

</script>