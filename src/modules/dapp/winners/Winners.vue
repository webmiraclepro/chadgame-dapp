<template>
  <div class="py-4 bg-gray-100">
    <header>
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl tracking-tight font-bold leading-tight text-sky-900">Previous Winners</h1>
      </div>
    </header>
    <main>
      <div class="max-w-5xl mx-auto sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-0 py-8 sm:px-0">
          <div class="text-center">
            <span class="block my-5 pr-5 text-3xl font-bold text-rose-900 md:text-5xl sm:text-5xl">Winners</span>
          </div>
          <div class="overflow-hidden my-8">
            <div class="px-4 py-5 sm:p-6">
              <div class="flow-root">
                <ul role="list" class="-mb-8">
                  <li v-for="(event, eventIdx) in history" :key="event.id">
                    <div class="relative pb-8">
                      <span v-if="eventIdx !== history.length - 1" class="absolute top-6 left-6 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      <div class="relative flex space-x-3">
                        <div>
                          <span :class="[event.iconBackground, 'h-12 w-12 rounded-full flex items-center justify-center']">
                            <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4 flex-wrap">
                          <div>
                            <p class="text-sm sm:text-xl text-gray-500">
                              <span class="text-sm sm:text-2xl font-bold text-amber-500">{{ event.content }}</span> ETH to <a :href="event.href" class="font-medium text-indigo-900">{{ event.target }}</a>
                            </p>
                          </div>
                          <div class="text-right text-sm sm:text-xl whitespace-nowrap text-gray-500">
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
          iconBackground: 'bg-green-500',
        }
      }).reverse();
    }
  },
  data() {
    return {
      timeline: [{
        id: 1,
        content: '21000',
        target: '0xF815f417f326578D841025fA5e5f968AAD972439',
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
        id: 2,
        content: '1.232100044',
        target: '0xF815f417f326578D841025fA5e5f968AAD972439',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
        id: 3,
        content: '2.2133',
        target: '0xF815f417f326578D841025fA5e5f968AAD972439',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
        id: 4,
        content: '0.2133345345345',
        target: '0xF815f417f326578D841025fA5e5f968AAD972439',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      },
      {
        id: 5,
        content: '2.2104',
        target: '0xF815f417f326578D841025fA5e5f968AAD972439',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
      }],
      historyData: []
    }
  }
}
</script>