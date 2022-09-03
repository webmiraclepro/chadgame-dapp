<template>
  <div class="flex flex-col md:flex-row lg:flex-row">
    <div class="flex">
      <img class="w-full md:w-3/4 lg:w-3/4" src="/imgs/img_hero_back.png" />
    </div>
    <div class="pt-12 sm:pt-16 ml-0 md:-ml-56 lg:-ml-56">
      <div class="flex justify-center md:justify-start ml-0 sm:ml-8">
        <img src="/imgs/img_vector.png" />
      </div>
      <div class="max-w-4xl mx-auto text-center md:text-start ml-0 sm:ml-8">
        <h2 class="text-3xl tracking-tight font-bold text-secondary sm:text-6xl sm:tracking-tight">Next Quad Game Ends in</h2>
      </div>
      <div class="mt-10 pb-12 sm:pb-16 ml-0 lg:-ml-16 md:-ml-8">
        <div class="relative">
          <div class="absolute inset-0 h-1/2" />
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <dl class="rounded-lg sm:grid sm:grid-cols-3">
                <div class="flex flex-col px-6 text-center py-6 sm:py-0 ">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-white">Hours</dt>
                  <dd class="order-1 text-7xl tracking-tight font-bold text-third">12</dd>
                </div>
                <div class="flex flex-col border-t border-b border-primary px-6 py-6 sm:py-0 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-white">Minutes</dt>
                  <dd class="order-1 text-7xl tracking-tight font-bold text-third">56</dd>
                </div>
                <div class="flex flex-col py-6 sm:py-0 px-6 text-center">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-white">Seconds</dt>
                  <dd class="order-1 text-7xl tracking-tight font-bold text-third">44</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-primary-dark rounded-2xl overflow-hidden shadow-md my-8">
    <div class="px-4 py-5 sm:p-6">
      <div class="text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="font-bold tracking-tight sm:tracking-tight mb-12">
          <span class="block mb-12 text-3xl text-secondary md:text-5xl sm:text-5xl">Current prize draw</span>
          <span class="block text-7xl text-third">$<span class="text-7xl text-white">21,000</span></span>
        </div>
        <div class="mt-8 flex justify-center">
          <primary-button>
            BUY $CHADGAME
          </primary-button>
        </div>
      </div>    
    </div>
  </div>
  
</template>

<script>

import axios from 'axios';
import PrimaryButton from '../../../components/PrimaryButton.vue';

export default {
  name: "LotteryTimer",
  components: {
    PrimaryButton
  },
  async mounted() {
    const result = await axios.get(import.meta.env.VITE_API_URL + '/getLotteryTimeLeft');
    this.leftSecs = result.data.left;
    this.terminated = result.data.terminated;
    this.loading = false;
  },
  data() {
    return {
      leftSecs: 0,
      loading: true,
      terminated: true
    }
  },
  watch: {
    leftSecs: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
              this.leftSecs --;
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  },
  computed: {
    timeLeft() {
      if(this.terminated) {
        return {
          hours: '-',
          mins: '-',
          secs: '-',
        }
      }
      let hours = Math.trunc(this.leftSecs / 3600);
      hours = hours > 9 ? hours : '0' + hours;
      let mins = Math.trunc(this.leftSecs % 3600 / 60);
      mins = mins > 9 ? mins : '0' + mins;
      let secs = this.leftSecs % 3600 % 60;
      secs = secs > 9 ? secs : '0' + secs;
      return {
        hours,
        mins,
        secs
      }
    }
  }
}

</script>