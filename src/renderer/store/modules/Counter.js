const state = {
  main: 0
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
    console.log('state.main-- ' + state.main)
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
    console.log('state.main++ ' + state.main)
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    console.log('2468')
    commit('INCREMENT_MAIN_COUNTER')
  },
  getCounter () {
    return state.main
  }
}

export default {
  state,
  mutations,
  actions
}
