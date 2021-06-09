
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    token:'VACIO'
  },
  mutations:{
    change(state, token){
       state.token = token
    }
  },
  getters: {
    token:state => state.token
  }
})
