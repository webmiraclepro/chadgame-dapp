<template>
  <div class="py-4">
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