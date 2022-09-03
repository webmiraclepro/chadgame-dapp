<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover>
    <div class="min-h-full bg-primary-dark">
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-24">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <logo class="w-3/5 mt-2"/>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
             <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'border-secondary text-secondary' : 'border-transparent text-gray-300 hover:border-gray-400 hover:text-gray-400', 'inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium']" :aria-current="item.current ? 'page' : undefined">
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="items-center mt-8 md:hidden">
            <PopoverButton>
              <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21235 24.5392H35.5028V20.7238H6.19L7.21235 24.5392ZM4.43743 14.1831H35.5028V10.3676H3.41508L4.43743 14.1831ZM1.66248 3.82686H35.5028V0.0114136H0.640137L1.66248 3.82686Z" fill="#FFAC3B"/>
              </svg>
            </PopoverButton>
          </div>
        </div>
      </div>
      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary-dark divide-y-2 divide-gray-50">
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                    <svg width="134" height="65" viewBox="0 0 134 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="93.5698" y="30.4263" width="15.6395" height="17.622" fill="#F71D67"/>
                      <path d="M64.7716 8.81567L73.0143 24.1986H56.5289L64.7716 8.81567Z" fill="#F91D68"/>
                      <path d="M45.3463 34.2569L53.9263 49.8018H36.7663L45.3463 34.2569Z" fill="#F91D68"/>
                      <path d="M15.1948 21.6114H27.5845V26.5673H15.1948C11.7618 26.5673 8.83217 25.3671 6.40585 22.9666C4.00535 20.5402 2.80509 17.6106 2.80509 14.1776C2.80509 10.7446 4.00535 7.82787 6.40585 5.42736C8.83217 3.00104 11.7618 1.78788 15.1948 1.78788H27.5845V6.74377H15.1948C13.1299 6.74377 11.3746 7.4665 9.92918 8.91197C8.48371 10.3574 7.76098 12.1126 7.76098 14.1776C7.76098 16.2426 8.48371 17.9978 9.92918 19.4432C11.3746 20.8887 13.1299 21.6114 15.1948 21.6114ZM33.5641 16.6555V26.5673H28.6082V1.78788H33.5641V11.6997H48.4318V1.78788H53.3877V26.5673H48.4318V16.6555H33.5641ZM52.0496 26.5673L64.4393 0.548911L76.829 26.5673H71.2536L64.4393 12.3191L57.625 26.5673H52.0496ZM92.8365 26.5673H75.4909V1.78788H92.8365C96.2695 1.78788 99.1863 3.00104 101.587 5.42736C104.013 7.82787 105.226 10.7446 105.226 14.1776C105.226 17.6106 104.013 20.5402 101.587 22.9666C99.1863 25.3671 96.2695 26.5673 92.8365 26.5673ZM80.4468 21.6114H92.8365C94.9015 21.6114 96.6567 20.8887 98.1022 19.4432C99.5476 17.9978 100.27 16.2426 100.27 14.1776C100.27 12.1126 99.5476 10.3574 98.1022 8.91197C96.6567 7.4665 94.9015 6.74377 92.8365 6.74377H80.4468V21.6114ZM15.1948 27.7879H35.0184L32.5404 32.7438H15.1948C13.1299 32.7438 11.3746 33.4665 9.92918 34.912C8.48371 36.3574 7.76098 38.1126 7.76098 40.1776C7.76098 42.2426 8.48371 43.9978 9.92918 45.4432C11.3746 46.8887 13.1299 47.6114 15.1948 47.6114H27.8556L25.1066 42.6555H15.1948V37.6997H27.5845L42.4522 64.957H37.4963L30.6045 52.5673H15.1948C11.7618 52.5673 8.83217 51.3671 6.40585 48.9666C4.00535 46.5402 2.80509 43.6106 2.80509 40.1776C2.80509 36.7446 4.00535 33.8279 6.40585 31.4274C8.83217 29.001 11.7618 27.7879 15.1948 27.7879ZM34.2998 52.5673L46.6895 26.5489L59.0792 52.5673H53.5038L46.6895 38.3191L39.8751 52.5673H34.2998ZM62.9293 37.6997V62.4791H57.9734V27.7879H62.9293L72.8411 46.3725L82.7529 27.7879H87.7087V52.5673H82.7529V37.6997L75.319 52.5673H70.3631L62.9293 37.6997ZM130.277 42.6555H101.78V37.6997H130.277V42.6555ZM115.409 27.7879V32.7438H95.5855V47.6114H115.409V52.5673H90.6296V27.7879H115.409Z" fill="white"/>
                    </svg>
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="mt-6">
                  <nav class="grid grid-cols-1 gap-7">
                    <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">
                        {{ item.name }}
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5">
                <div class="grid grid-cols-2 gap-4">
                  <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'border-secondary text-secondary' : 'border-transparent text-gray-300 hover:border-gray-400 hover:text-gray-400', 'inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium']" :aria-current="item.current ? 'page' : undefined">
                    {{ item.name }}
                  </router-link>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
    </div>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import Logo from '../../components/Logo.vue';

export default {
  name: 'DappHeader', 
  components: {
    Popover, PopoverButton, PopoverGroup, PopoverPanel, MenuIcon, XIcon, Logo
  },
  data() {
    return {
      open: true, 
    }
  },
  computed: {
    navigation() {
      return [
        { name: 'Dashboard', href: '/dapp', current: this.$route.name == 'Dashboard'},
        { name: 'Total Pot', href: '#', current: this.$route.name == 'TotalPot' },//{ name: 'Total Pot', href: '/dapp/totalpot', current: this.$route.name == 'TotalPot' },
        { name: 'Previous Winners', href: '/dapp/winners', current: this.$route.name == 'Winners' },
        { name: 'Buy New', href: '#', current: this.$route.name == 'BuyNew' },//{ name: 'Buy New', href: '/dapp/buynew', current: this.$route.name == 'BuyNew' },
        { name: 'Website', href: '/', current: false },
      ];
    }
  }
}

</script>