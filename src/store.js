import {
  createStore
} from 'vuex'

const store = createStore({
  modules: {
  },
  state() {
    return {
      web3: {},
      ready: false,
      connected_address: "",
      connected_network: "",
    }
  },
  getters: {
    connected(state){
      return (
        parseInt(process.env.VUE_APP_CHAIN) === state.connected_network &&
        state.connected_address
      );
    }
  },
  mutations: {
    updateAddress(state, address) {
      //state.connected_address = address;
      state.connected_address = "0x24bbA3a46A2E0E76055bcaD661B6BEC73587a7bF"
    },
    updateWeb3(state, web3) {
      state.web3 = web3
    },
    setReady(state) {
      setTimeout(() => {
        // Makes the loader smoother
        state.ready = true;
      }, 3000);
    },
    updateNetwork(state, network) {
      state.connected_network = network;
    },
  },
  actions: {
    // async loadWeb3({commit, dispatch}) {
    //   // logout when they change
    //   const web3 = new Web3(window.ethereum)
    //   const network = await web3.eth.getChainId();
    //   const accounts = await web3.eth.getAccounts();

    //   if (network === parseInt(process.env.VUE_APP_CHAIN) && accounts[0]) {
    //     const nativeBalance = await web3.eth.getBalance(accounts[0])
    //     commit('updateBalance', web3.utils.fromWei(nativeBalance));
    //     await dispatch('getTokenContract', web3);
    //     await dispatch('getNftContract', web3);
    //     await dispatch('getChefContract', web3);
    //     await dispatch('getLpContract', web3);
    //   }



    //   commit('updateWeb3', web3);
    //   commit('updateNetwork', network);
    //   commit('updateAddress', accounts[0]);
    //   commit('setReady');
    //   dispatch('setMetagochiTokens', accounts[0]);
    // },

    // async requestNetworkChange({
    //   state
    // }) {
    //   await state.web3.currentProvider.request({
    //     method: "wallet_switchEthereumChain",
    //     params: [{
    //       chainId: process.env.VUE_APP_NETWORK
    //     }]
    //   })
    // },

    // async requestConnectAccount({
    //   state
    // }) {
    //   await state.web3.currentProvider.request({
    //     method: "eth_requestAccounts",
    //   })
    // },

    // async setMetagochiTokens({
    //   commit
    // }, address) {
    //   if (!address) return;

    //   const options = {
    //     address: address,
    //     chain: (process.env.VUE_APP_NETWORK === "0x4") ? 'rinkeby' : 'eth'
    //   }
    //   const balances = await Moralis.Web3API.account.getTokenBalances(options);
    //   const metaBalance = find(balances, {
    //     token_address: process.env.VUE_APP_TOKEN_CONTRACT_ADDRESS.toLowerCase()
    //   });

    //   if (metaBalance) {
    //     const gochis = Moralis.Units.FromWei(metaBalance.balance, metaBalance.decimals);
    //     // trim decinal off so its neater
    //     const balance = gochis.toString().split('.');
    //     commit('updateMetaGochiTokens', balance[0]);
    //   } else {
    //     commit('updateMetaGochiTokens', 0);
    //   }

    //   const lpTokens = find(balances, {
    //     token_address: process.env.VUE_APP_LP_TOKEN_ADDRESS.toLowerCase()
    //   })

    //   if(lpTokens) {
    //     const tokens = Moralis.Units.FromWei(lpTokens.balance, lpTokens.decimals);
    //     // trim decinal off so its neater
    //     const _balance = tokens.toString().split('.');
    //     commit('updateLpTokens', _balance[0]);
    //   }else {
    //     commit('updateLpTokens', 0);
    //   }
    // },

    // async sendTransaction({
    //   state,
    //   commit
    // }, {
    //   contract,
    //   method,
    //   arg1,
    //   arg2,
    //   callback
    // }) {
    
    //   try {
    //     commit('updateTransaction', {
    //       status: 1
    //     });
    //     let transaction;
    //     if (arg2) {
    //       transaction = contract.methods[method](arg1, arg2)
    //     } else if (arg1) {
    //       transaction = contract.methods[method](arg1)
    //     } else {
    //       transaction = contract.methods[method]()
    //     }

    //     const req = await transaction.send({
    //         from: state.connected_address
    //       }).once("transactionHash", (hash) => {
    //         commit('updateTransaction', {
    //           status: 2,
    //           hash
    //         })
    //       })
    //       .once("receipt", (receipt) => {
    //         commit('updateTransaction', {
    //           status: 3
    //         });
    //         setTimeout(() => {
    //           commit('updateConfirmationModal', {
    //             open: true,
    //             hash: receipt.transactionHash
    //           })
    //           commit('updateTransaction', Object.assign({}, DEFAULT_TRANSACTION));
    //           callback && callback(receipt);
    //         }, 2000);
    //       })
    //       .on("error", (error) => {
    //         if (error.code === 4001) {
    //           commit('updateTransaction', Object.assign({}, DEFAULT_TRANSACTION));
    //         } else {
    //           commit('updateTransaction', {
    //             status: 4,
    //           })
    //         }
    //       });

    //   } catch (err) {
    //     if (err.code === 4001) {
    //       commit('updateTransaction', Object.assign({}, DEFAULT_TRANSACTION));
    //     } else {
    //       commit('updateTransaction', {
    //         error: err.message
    //       });
    //     }
    //   }
    // }
  }
});
export default store;