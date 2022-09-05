<template>
  <transition name="fade" appear mode="out-in">
    <div v-if="progress < 100" class="loader-container justify-center flex flex-col items-center">
      <img src="/imgs/img_vector.webp" />
      <div class="w-36 bg-primary-dark rounded-full h-2.5 mb-4 -ml-6 -mt-4">
        <div class="bg-third h-2.5 rounded-full" :style="'width:' + progress + '%'"></div>
      </div>
      <!-- <div>
        <div class="text-center text-3xl text-third -ml-3 -mt-5 font-display">{{progress}}%</div>
      </div> -->
    </div>
    <div v-else-if="progress === 100">
      <slot  />
    </div>
  </transition>
  <NoMetaMask v-if="noMetaMask"/>
</template>

<script>
export default {
  name: "PageLoading",
  data(){
    return{
      progress:0,
      interval: null,
    }
  },
 
  computed:{
    ready(){
      return this.$store.state.ready;
    }
  },
  async mounted(){
    this.interval = window.setInterval(() => {
      if ( this.progress >= 95) {
          // When progress completes, we have to clear the interval
          window.clearInterval(this.interval);
      }
      else {
          this.progress = this.progress + 2;          
      }
    }, 150);
    if(this.ready) {
      this.progress = 100;
    } else {
      try {
        this.$store.dispatch('loadWeb3');
      } catch (e) {
        console.error('Error, load Web3: ', e)
      }
    }
  },
  watch:{
    ready(newVal){
      if(newVal){
        this.progress = 100;
      }
    }
  }
}
</script>

<style scoped>

.loader-container {
  /*background-image: linear-gradient(200deg, #EB4F81 0%, #EB4F69 100%);*/
  background: linear-gradient(180deg, #280A49 0%, #360E6F 100%);
  min-width: 100%;
  min-height: 100vh;
  position: fixed;
  top:0;
  left: 0;
}
.bouncing-logo-loader {

  width: 350px;


}

@keyframes spin {
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}
</style>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>