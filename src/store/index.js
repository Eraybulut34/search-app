import { createStore } from 'vuex'

export default createStore({
  state: {
    mockData: null,
    data: null
  },
  getters: {
    getMockData: state => state.mockData
  },
  mutations: {
    setMockData(state, payload) {
      state.mockData = payload
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
