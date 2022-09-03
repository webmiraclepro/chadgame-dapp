<template>
  <div class="py-4">
    <main>
      <div class="max-w-5xl mx-auto sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-0 py-8 sm:px-0">
          <div class="text-center">
            <span class="block my-5 pr-5 text-3xl font-bold text-secondary md:text-5xl sm:text-5xl">Winners</span>
          </div>
          <div class="overflow-hidden my-8 rounded-3xl bg-primary-dark p-2 sm:p-12 mx-2">
            <div v-if="loading" class="winner text-white">
              <font-awesome-icon icon="circle-notch" spin/>
            </div>
            <div v-else class="flow-root">
              <ul role="list" class="-mb-8">
                <li v-for="(event, eventIdx) in history" :key="event.id">
                  <div class="relative pb-8">
                    <span v-if="eventIdx !== history.length - 1" class="absolute top-6 left-6 -ml-px h-full w-0.5 bg-primary" aria-hidden="true" />
                    <div class="relative flex space-x-3">
                      <div>
                        <span :class="[event.iconBackground, 'h-12 w-12 rounded-full flex items-center justify-center']">
                          <component :is="event.icon" class="h-5 w-5 text-secondary" aria-hidden="true" />
                        </span>
                      </div>
                      <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4 flex-wrap">
                        <div class="flex flex-wrap">
                          <p class="text-sm sm:text-xl text-white">
                            <span class="text-sm sm:text-2xl font-bold text-secondary">{{ event.content }}</span> ETH to <a :href="event.href" class="font-medium text-white break-all">{{ event.target }}</a>
                          </p>
                        </div>
                        <div class="text-right text-sm sm:text-xl whitespace-nowrap text-white">
                          <time :datetime="event.datetime">{{ event.date }}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>


<script>
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/vue/solid'

export default {
  name: "Winners",
  components: [CheckIcon, ThumbUpIcon, UserIcon],
  async mounted() {
    const lotteryContract = this.$store.state.lotteryContract;
    this.historyData = await lotteryContract.getPastEvents(
      'WinnerPrized', 
      {
        fromBlock: 0,
        toBlock: 'latest'
      }
    );
    this.loading = false;
    lotteryContract.events.WinnerPrized({
      filter: {
        value: [],
      },
    })
      .on('data', (event) => {
        this.historyData[this.historyData.length] = event;
      })
      .on('changed', (event) => {
        console.log(event);
      })
      .on('error', console.error);
  },
  computed: {
    history() {
      const web3 = this.$store.state.web3;

      return this.historyData.map((item, index) => {
        return {
          id: index,
          content: web3.utils.fromWei(item?.returnValues?.ethReceived),
          target: item?.returnValues?.winner,
          href: '#',
          date: '',
          datetime: '',
          icon: CheckIcon,
          iconBackground: 'bg-primary',
        }
      }).reverse();
    }
  },
  data() {
    return {
      historyData: [],
      loading: true
    }
  }
}
</script>

<style>
  .winner {
    height: 50vh;
  }
</style>