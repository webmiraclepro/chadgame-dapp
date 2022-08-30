import {
  createStore
} from 'vuex'

import Web3 from "web3/dist/web3.min.js";
import chadAbi from "./abis/ChadABI.json";
import lotteryAbi from "./abis/LotteryABI.json"

const store = createStore({
  modules: {
  },
  state() {
    return {
      web3: {},
      ready: false,
      chadContract: false,
      lotteryContract: false
    }
  },
  mutations: {
    updateWeb3(state, web3) {
      state.web3 = web3
    },
    setReady(state) {
      setTimeout(() => {
        // Makes the loader smoother
        state.ready = true;
      }, 3000);
    },
    setChadContract(state, contract) {
      state.chadContract = contract;
    },
    setLotteryContract(state, contract) {
      state.lotteryContract = contract;
    }
  },
  actions: {
    async loadWeb3({commit, dispatch}) {
      // logout when they change
      const web3 = new Web3(`wss://${import.meta.env.VITE_NETWORK}.infura.io/ws/v3/${import.meta.env.VITE_INFURA_API_KEY}`);
      
      await dispatch('getChadContract', web3);
      await dispatch('getLotteryContract', web3);

      commit('updateWeb3', web3);
      commit('setReady');
    },

    async getChadContract({
      commit
    }, web3) {
      const contract = await new web3.eth.Contract(
        chadAbi,
        import.meta.env.VITE_CHAD_CA
      );
      commit('setChadContract', contract);
    },

    async getLotteryContract({
      commit
    }, web3) {
      const contract = await new web3.eth.Contract(
        lotteryAbi,
        import.meta.env.VITE_LOTTERY_CA
      );
      commit('setLotteryContract', contract);
    }
  }
});
export default store;