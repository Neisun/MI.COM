import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './gettters.js'

Vue.use(Vuex);


const state = {
  videoOpt: {
    title: '',
    videoUrl: '',
    imgUrl: '',
    playStatus: false
  }
}

const mutations = {
  playVideo: function(state, data) {
    state.videoOpt.title = data.title
    state.videoOpt.videoUrl = data.videoUrl
    state.videoOpt.imgUrl = data.imgUrl
    state.videoOpt.playStatus = true
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
