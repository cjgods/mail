import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: {}
  },
  getters: {
    getDataList: state => { return state.dataList }
  },
  actions: {
    fetchDataList ({commit, state}) {
      Vue.http.get('/api/getData')
        .then((res) => {
          console.info(res.body)
          commit('updateDataList', res.body)
        }, (err) => {
          console.log(err)
        })
    }
  },
  mutations: {
    updateDataList (state, payLoad) {
      state.dataList = payLoad
    }
  }
})
