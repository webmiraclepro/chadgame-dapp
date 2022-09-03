<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <header>
      <Popover class="relative">
        <div class="flex justify-between items-center w-full mx-auto px-6 py-12 sm:px-6 md:justify-start md:space-x-10 lg:px-24">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">ChadGame</span>
              <logo />
            </a>
          </div>
          <!-- <div class="-mr-2 -my-2 md:hidden">
            <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div> -->
          <!-- <PopoverGroup as="nav" class="hidden md:flex space-x-10">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-xl font-medium text-secondary hover:text-white">
              {{ item.name }}
            </a>
          </PopoverGroup> -->
          <div class="hidden md:flex items-center justify-end space-x-4 md:flex-1 lg:w-0 z-10">
            <telegram-button />
            <twitter-button />
          </div>
          <PopoverButton class="md:hidden">
            <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21235 24.5392H35.5028V20.7238H6.19L7.21235 24.5392ZM4.43743 14.1831H35.5028V10.3676H3.41508L4.43743 14.1831ZM1.66248 3.82686H35.5028V0.0114136H0.640137L1.66248 3.82686Z" fill="#FFAC3B"/>
            </svg>
          </PopoverButton>
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
                <div class="flex mt-6 justify-center">
                  <div class="flex flex-row w-56 rounded-full text-xl bg-white px-6 py-1 font-bold text-secondary bg-white hover:cursor-pointer hover:text-secondary-light" @click="launchDapp">
                      LAUNCH DAPP
                      <div class="mt-1.5 ml-4">
                          <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.63881 16.188L10.3572 8.72863L2.63881 1.26921C2.42844 1.06656 2.14618 0.955788 1.85413 0.961252C1.56209 0.966717 1.28417 1.08797 1.08153 1.29835C0.878882 1.50872 0.768108 1.79097 0.773573 2.08302C0.779037 2.37507 0.900293 2.65298 1.11067 2.85563L7.19087 8.72863L1.11066 14.6081C0.900293 14.8107 0.779037 15.0887 0.773572 15.3807C0.768108 15.6728 0.878882 15.955 1.08153 16.1654C1.28417 16.3758 1.56209 16.497 1.85413 16.5025C2.14618 16.5079 2.42844 16.3972 2.63881 16.1945L2.63881 16.188Z" fill="#FFAC3C"/>
                          </svg>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </header>

    <main>
      <div class="mx-auto w-full max-full px-6 lg:px-24 pt-16 sm:pb-20 text-center lg:py-48 lg:text-left">
        <div class="lg:w-1/2 xl:pr-16">
          <h1 class="text-4xl font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">THE ULTIMATE</span>
            {{ ' ' }}
            <span class="block text-white xl:inline">"IN IT TO WIN IT" PRIZE DRAW TOKEN ON THE ETHEREUM NETWORK!</span>
          </h1>
          <p class="mx-auto mt-3 max-w-md text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">What if you could buy a ticket to a prize draw ONE time and be entered to win every day for life!? Well, now you can with Chadgame.</p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
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
      </div>
      <div class="relative pt-0 lg:pt-12 z-1 h-full w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img src="/imgs/img_hero_back.png" />
      </div>
      <div class="flex flex-col md:flex-row lg:flex-row justify-center items-center space-y-12 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-8 lg:space-x-8 h-auto md:h-24 lg:h-24 mb-12 md:mb-0 lg:mb-0">
        <info-card btnText="Roadmap" backImg="/imgs/img_info_back_1.png" />
        <info-card btnText="Whitepaper" backImg="/imgs/img_info_back_2.png" />
        <info-card btnText="Buy tokens" backImg="/imgs/img_info_back_3.png" />
      </div>
    </main>
  </div>
</template>
<div>
  
</div>
<script>

import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {  
  MenuIcon,
  XIcon,
} from '@heroicons/vue/outline'

import PrimaryButton from '../../components/PrimaryButton.vue'
import SecondaryButton from '../../components/SecondaryButton.vue'
import InfoCard from '../../components/InfoCard.vue'
import TelegramButton from '../../components/Telegrambutton.vue';
import TwitterButton from '../../components/TwitterButton.vue';
import Logo from '../../components/Logo.vue';


export default {
  name: 'Hero',
  components: {
    Popover, PopoverButton, PopoverGroup, PopoverPanel, MenuIcon, XIcon, PrimaryButton, SecondaryButton, InfoCard, TelegramButton, TwitterButton, Logo
  },
  data(){
    return {
      navigation: [
        { name: 'About', href: '#about' },
        { name: 'How does it work', href: '#' },
        { name: 'Tokenomics', href: '#' },
        { name: 'How to buy', href: '#' },
        { name: 'Roadmap', href: '#' },
      ]
    }
  },
  methods: {
    launchDapp() {
      this.$router.push({path:'/dapp'})
    }
  }
}
</script>