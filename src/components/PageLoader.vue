<template>
  <transition name="fade" appear mode="out-in">
    <div v-if="progress < 100" class="loader-container justify-center flex items-center">
      <div>
        <h1 class="text-center mt-8 font-display">{{progress}}%</h1>
      </div>
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
    this.interval = window.setInterval( () => {
    if ( this.progress >= 95) {
        // When progress completes, we have to clear the interval
        window.clearInterval(this.interval);
    }
    else {
        this.progress = this.progress + 2;          
    }
    }, 150);

    try{  
        this.$store.dispatch('loadWeb3');
    } catch (e) {
      console.error('Error, load Web3: ', e)
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
  background: #EB4F81;
  min-width: 100%;
  min-height: 100vh;
  position: fixed;
  top:0;
  left: 0;
}
.bouncing-logo-loader {

  width: 350px;


}
h1 {
  color: white;
  font-size: 38px;
  letter-spacing: 1.2px;
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