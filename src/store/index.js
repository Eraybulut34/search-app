import { createStore } from 'vuex'

export default createStore({
  state: {
    mockData: null,
    data: null
  },
  getters: {
    getMockData: state => state.mockData,
    getData: state => state.data
  },
  
  getData: {
    getData: state => state.data
  },
  mutations: {
    setMockData(state, payload) {
      state.mockData = payload
    },
    setData(state, payload) {
      state.data = payload
    },
    createNewData(state, payload) {
      state.data.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
