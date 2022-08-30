<template>
  <div class="bg-gray-100 pt-12 sm:pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight">Next Quad Game Ends in</h2>
      </div>
    </div>
    <div class="mt-10 pb-12 bg-gray-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-white" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Hours</dt>
                <dd class="order-1 text-5xl tracking-tight font-bold text-sky-600">{{ timeLeft.hours }}</dd>
              </div>
              <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Minues</dt>
                <dd class="order-1 text-5xl tracking-tight font-bold text-sky-600">{{ timeLeft.mins }}</dd>
              </div>
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Seconds</dt>
                <dd class="order-1 text-5xl tracking-tight font-bold text-sky-600">{{ timeLeft.secs }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white overflow-hidden shadow-md my-8">
    <div class="px-4 py-5 sm:p-6">
      <div class="text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="font-bold tracking-tight sm:tracking-tight mb-12">
          <span class="block my-5 pr-5 text-3xl text-gray-900 md:text-5xl sm:text-5xl">Current Prize Pot Stands at</span>
          <span class="block px-5 text-7xl text-orange-400">$21000</span>
        </div>
        <div class="mt-8 flex justify-center">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="px-16 inline-flex items-center justify-center px-5 py-3 border border-transparent text-3xl font-medium rounded-full text-white bg-sky-600 hover:bg-sky-700">Buy $QUAD</a>
          </div>
        </div>
      </div>    
    </div>
  </div>
  
</template>

<script>

import axios from 'axios';

export default {
  name: "LotteryTimer",
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