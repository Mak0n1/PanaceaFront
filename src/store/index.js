import { createStore } from 'vuex'
import axios from "axios"
import VuexPersistence from 'vuex-persist'
import createPersistedState from 'vuex-persistedstate';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user'],
})
export default createStore({
  state: {
    playersUs: [],
    playersEu: [],
    stats: [],
    promo: [],
    items: [],
    live_items: [],
    subscriptions: [],
    allpromo: [],
    purchhistory: [],
    products: [],
    JWT: "",
    user: {
      name: '',
      auth: false,
      balance: "",
      img: "",
      level: 1,
      SteamId: ""
    },
    server: {
      UsOnline: 57,
      MaxUsOnline: 127,
      EuOnline: 10,
      MaxEuOnline: 80
    }
  },
  getters: {
    PLAYERSUS(state){
      return state.playersUs
    },
    PLAYERSEU(state){
      return state.playersEu
    },
    USER(state){
      return state.user
    },
    SERVER(state){
      return state.server
    },
    STATS(state){
      return state.stats
    },
    PROMO(state){
      return state.promo
    },
    ITEMS(state){
      return state.items
    },
    LIVE_ITEMS(state){
      return state.live_items
    },
    SUBSCRIPTIONS(state){
      return state.subscriptions
    },
    ALLPROMO(state){
      return state.allpromo
    },
    PURCHHISTORY(state){
      return state.purchhistory
    },
    PRODUCTS(state){
      return state.products
    },
    JWT(state){
      return state.JWT
    }
  },
  mutations: {
    SET_NEW_USER_DATE: (state, date) => {
      state.user.auth = date['auth']
      state.user.name = date['name']
      state.user.balance = date['balance']
      state.user.img = date['img']
      state.user.SteamId = date['SteamId']
    },
    SET_USER_LOGGED_IN(state, auth) {
      state.user.auth = auth;
    },
    SET_USPLAYERS_TO_STATE: (state, playersUs) => {
      state.playersUs = playersUs
    },
    SET_EUPLAYERS_TO_STATE: (state, playersEu) => {
      state.playersEu = playersEu
    },
    SET_STATS_TO_STATE: (state, stats) => {
      state.stats = stats
    },
    SET_PROMO_TO_STATE: (state, promo) =>{
      state.promo = promo
    },
    SET_ITEMS_TO_STATE: (state, items) =>{
     state.items = items 
    },
    SET_LIVE_ITEMS_TO_STATE: (state, live_items) => {
      state.live_items = live_items
    },
    SET_SUBSCRIPTIONS_TO_STATE: (state, subscriptions) => {
      state.subscriptions = subscriptions
    },
    SET_ALLPROMO_TO_STATE: (state, allpromo) => {
      state.allpromo = allpromo
    },
    SET_PURCHHISTORY_TO_STATE: (state, purchhistory) => {
      state.purchhistory = purchhistory
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_JWT: (state, jwtToken) => {
      state.JWT = jwtToken;
    },
  },
  actions: {
    async fetchToken({ commit }) {
      const urlParams = new URLSearchParams(window.location.search);
      const jwtToken = urlParams.get('jwt');

      if (jwtToken || this.JWT === "") {
        try {

          const response = await axios.post('https://raw.githubusercontent.com/sedm1/Panacea/main/json/user.json', {}, {
            headers: {
              'X-Token': jwtToken,
              'Content-Type': 'application/json'
            }
          });
          console.log(response.data);
          // if (response.data.user.auth === true) {
            commit('SET_JWT', jwtToken);
            commit('SET_NEW_USER_DATE', response.data.user);
            window.location = '/'
          // }
        } catch (error) {
          console.error('Ошибка при проверке JWT токена:', error);
        }
      }
    },
    async GET_PLAYERS_US({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/PlayersUs.json - для гит
        const UsPlayers = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/PlayersUs.json", {
          method: "GET"
        })
        commit("SET_USPLAYERS_TO_STATE", UsPlayers.data)
        return UsPlayers.data
      } catch (error) {
        console.log("Ошибка при получении игроков us" + error)
        return error
      }
    },
    async GET_PLAYERS_EU({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/PlayersEu.json - для гита
        const EuPlayers = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/PlayersEu.json", {
          method: "GET"
        })
        commit("SET_EUPLAYERS_TO_STATE", EuPlayers.data)
        return EuPlayers.data
      } catch (error) {
        console.log("Ошибка при получении игроков Eu" + error)
        return error
      }
    },
    async GET_STATS({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Stats.json - для гит
        const Stats = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Stats.json", {
          method: "GET"
        })
        commit("SET_STATS_TO_STATE", Stats.data)
        return Stats.data
      } catch (error) {
        console.log("Ошибка при получении статов" + error)
        return error
      }
    },
    async GET_PROMO({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Purchase.json
        const Promo = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Purchase.json", {
          method: "GET"
        })
        commit("SET_PROMO_TO_STATE", Promo.data)
        return Promo.data
      } catch (error) {
        console.log("Ошибка при получении промокодов" + error)
        return error
      }
    },

    async GET_ITEMS({ commit }) {
      function getRarityClass(rarity) {
        switch (rarity) {
          case 1:
            return 'silver';
          case 2:
            return 'blue';
          case 3:
            return 'purple';
          case 4:
            return 'red';
        }
      }
      try {
        // console.log(this.state.JWT);
        const Items = await axios.post("https://api.panaceadayz.us/v1/Player.RouletteItems", {}, {
          headers: {
            'X-Token': this.state.JWT,
            'Content-Type': 'application/json'
          }
        });
        // console.log(Items.data);
        const itemsWithRarityClass = Items.data.map(item => ({
          ...item,
          rarityClass: getRarityClass(item.rare),
        }));
        commit("SET_ITEMS_TO_STATE", itemsWithRarityClass);
        return itemsWithRarityClass;
      } catch (error) {
        console.error("Ошибка при получении Товаров: " + error);
        return error;
      }
    },

    async GET_LIVE_ITEMS({commit}){
      function getRarityClass(rarity) {
        switch (rarity) {
          case 1:
            return 'silver';
          case 2:
            return 'blue';
          case 3:
            return 'purple';
          case 4:
            return 'red';
        }
      }
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/LiveDrops.json
        const Live_items = await axios("https://api.panaceadayz.us/v1/Player.RouletteLast", {
          method: "GET"
        })
        // console.log(Live_items)
        const itemsWithRarityClass = Live_items.data.map(item => ({
          ...item,
          rarityClass: getRarityClass(item.rare),
        }));
        commit("SET_LIVE_ITEMS_TO_STATE", itemsWithRarityClass)
        return itemsWithRarityClass
      } catch (error) {
        console.log("Ошибка при получении Живых Товаров" + error)
        return error
      }
    },
    async GET_SUBSCRIPTIONS({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Subscriptions.json
        const Subscriptions = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Subscriptions.json", {
          method: "GET"
        })
        commit("SET_SUBSCRIPTIONS_TO_STATE", Subscriptions.data)
        return Subscriptions.data
      } catch (error) {
        console.log("Ошибка при получении Подписки" + error)
        return error
      }
    },
    async GET_ALLPROMO({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Promocodes.json
        const Allpromo = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Promocodes.json", {
          method: "GET"
        })
        commit("SET_ALLPROMO_TO_STATE", Allpromo.data)
        return Allpromo.data
      } catch (error) {
        console.log("Ошибка при получении всех промокодов" + error)
        return error
      }
    },
    async GET_PURCHHISTORY({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/PurchHistory.json
        const PurchHistory = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/PurchHistory.json", {
          method: "GET"
        })
        commit("SET_PURCHHISTORY_TO_STATE", PurchHistory.data)
        return PurchHistory.data
      } catch (error) {
        console.log("Ошибка при получении всех промокодов" + error)
        return error
      }
    },
    async GET_PRODUCTS({commit}){
      try {
        //https://raw.githubusercontent.com/sedm1/Panacea/main/json/Products.json
        const Products = await axios("https://raw.githubusercontent.com/sedm1/Panacea/main/json/Products.json", {
          method: "GET"
        })
        commit("SET_PRODUCTS_TO_STATE", Products.data)
        return Products.data
      } catch (error) {
        console.log("Ошибка при получении всех промокодов" + error)
        return error
      }
    },
    // async SET_NEW_USER({commit}){
    //   try{
    //     const UserDate = await axios(`https://raw.githubusercontent.com/sedm1/Panacea/main/json/Purchase.json`, {
    //       method: "GET"
    //     })
    //     commit("SET_NEW_USER_DATE", UserDate.data)
    //     return UserDate.data
    //   } catch(error){
    //     return error
    //   }
    // },
    async LogOut({commit}){

      // console.log("ААА" + commit)
      commit("SET_NEW_USER_DATE", {
        "auth": false,
        "name": "",
        "img": "",
        "SteamId": "",
        "balance": ""
      });
    },
  },
  plugins: [vuexLocal.plugin, createPersistedState()]
})