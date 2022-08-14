<template>
  <div class="py-4 bg-gray-100">
    <header>
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-xl tracking-tight font-bold leading-tight text-sky-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-8 sm:px-0">
          <lottery-timer />
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>

import LotteryTimer from "./LotteryTimer.vue"

export default {
  name: "Dashboard",
  components: { LotteryTimer }
}
</script>