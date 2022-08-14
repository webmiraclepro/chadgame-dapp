<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-white border-b border-gray-300" v-slot="{ open }">
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-24">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
              <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
             <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'border-sky-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium']" :aria-current="item.current ? 'page' : undefined">
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
            {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

export default {
  name: 'DappHeader', 
  components: {
    Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, BellIcon, MenuIcon, XIcon
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
        { name: 'Total Pot', href: '/dapp/totalpot', current: this.$route.name == 'TotalPot' },
        { name: 'Previous Winners', href: '/dapp/winners', current: this.$route.name == 'Winners' },
        { name: 'Buy New', href: '/dapp/buynew', current: this.$route.name == 'BuyNew' },
        { name: 'Website', href: '/', current: false },
      ];
    }
  }
}

</script>