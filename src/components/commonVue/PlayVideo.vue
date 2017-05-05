<template>
  <!-- 遮罩层 -->
<div class="video-panel" v-show="this.playConfig.playStatus">
  <!-- 视频主体 -->
  <div class="video-content">
    <!-- 标题部分 -->
    <div class="video-content-hd">
      <h2 class="title">
          {{this.playConfig.title}}
      </h2>
      <i class="fa fa-times close-btn" @click="evtCancel"></i>
    </div>
    <div class="video-content-main" @click="evtControl">
      <video id="video"
        ref="video"
        :src="this.playConfig.videoUrl"
        :poster="this.playConfig.imgUrl"
        preload="preload"
        controls="controls">
      </video>
      <i class="fa fa-play play-btn" :class="{'fa-pause':!playStatus}"></i>
    </div>
  </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "playVideo",
  data: function data() {
    return {
      // panelStatus:false,
      playStatus:true,
    }
  },
  // props: {
  //   playConfig:{
  //     type:Object,
  //     // required:true
  //   }
  // },
  computed:{
    ...mapGetters({
      playConfig:'getVideoOpt',
    })
  },
  methods: {
    evtCancel: function () {
      this.playConfig.playStatus = false;
      this.$refs.video.pause();
      this.playStatus = true;
    },
    evtControl: function () {
      this.playStatus = !this.playStatus;
      if (this.playStatus) {
        // console.log(1);
        this.$refs.video.pause()
      }else if (!this.playStatus) {
        // console.log(2);
        this.$refs.video.play()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.video-panel {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 20;
}
.video-content {
    position: absolute;
    left: 50%;
    margin-left: -440px;
    width: 880px;
    height: 596px;
    background: #f5f5f5;
    top: 10px;
    .video-content-hd {
        position: relative;
        height: 60px;
        .title {
            height: 40px;
            padding: 10px 15px;
            line-height: 40px;
            font-size: 18px;
            font-weight: 400;
            color: #424242;
        }
        .close-btn {
          width: 24px;
          height: 24px;
          display: block;
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 20px;
          font-weight: normal;
          color: #424242;
          background: #f5f5f5;
          text-align: center;
          line-height: 24px;
          border-radius: 15px;
          padding: 3px;
          transition: all .3s ease;
          cursor: pointer;
          &:hover {
            background: #e53935;
            color: #fff;
          }
        }
    }
    .video-content-main {
      position: relative;
      &:hover {
        .play-btn {
          opacity: 1;
        }
      }
      #video {
        width: 880px;
        height: 536px;
      }
      .play-btn {
          border-radius: 50%;
          width: 70px;
          height: 70px;
          padding: 10px 5px 10px 10px;
          font-size: 40px;
          text-align: center;
          line-height: 70px;
          position: absolute;
          left: 50%;
          margin-left: -45px;
          top: 50%;
          margin-top: -42.5px;
          z-index: 25;
          display: block;
          cursor: pointer;
          background: rgba(191, 196, 188, 0.1);
          color: #fff;
          opacity: 0;
          transition: all .3s ease;
        }
    }
}
</style>
