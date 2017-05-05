import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './gettters.js'

Vue.use(Vuex);


const state = {
  videoOpt:{
    title:'',
    videoUrl:'',
    imgUrl:''
  }
}

const mutations = {
  playVideo:function (state,title,videoUrl,imgUrl) {
    this.state.title = title
    this.state.videoUrl = videoUrl
    this.state.imgUrl = imgUrl
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
