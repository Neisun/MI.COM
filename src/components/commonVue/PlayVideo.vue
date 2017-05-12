<template>
<!-- 此处加动画的原意是，遮罩层和视频盒子用的是一个状态显示条件，如果不给外边遮罩层加动画，遮罩层会迅速的消失，导致视频盒子消失的动画没发显示出来 ，而且此处过渡时间需要比视频盒子动画稍微久一些-->
<transition name="fade">
  <!-- 遮罩层 -->
  <div class="video-panel" v-show="this.playConfig.playStatus">
    <!--直接套用animate.css的样式了，懒得写了  -->
    <transition
      name="slide"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp">
      <!-- 视频主体 -->
      <div class="video-content" v-show="this.playConfig.playStatus">
        <!-- 标题部分 -->
        <div class="video-content-hd">
          <h2 class="title">
            {{this.playConfig.title}}
          </h2>
          <i class="fa fa-times close-btn" @click="evtCancel"></i>
        </div>
        <div class="video-content-main" @click="evtControl">
          <video
            id="video"
            ref="video"
            :src="this.playConfig.videoUrl"
            :poster="this.playConfig.imgUrl"
            preload="preload"
            controls="controls">
        </video>
          <i class="fa fa-play play-btn" :class="{'fa-pause':!playStatus}"></i>
        </div>
      </div>
    </transition>
  </div>
</transition>
</template>
<script>
// 使用vuex中的mapGetters来传入计算属性的值，动态改变视频的内容
import { mapGetters } from 'vuex'
export default {
  name: "playVideo",
  data: function data() {
    return {
      playStatus: true,
    }
  },
  computed: {
    ...mapGetters({
      playConfig: 'getVideoOpt',
    })
  },
  methods: {
    // 关闭按钮，关闭的功能
    evtCancel: function() {
      this.playConfig.playStatus = false;
      // 经过尝试，使用jq和原生获取的节点，无法调用视频的pause功能，具体原因不是很清楚，但很可能与组件的创建和加载过程有直接关系，所以就是用了vue中获取元素的方法，也算是比较方便
      // 此处存在疑问，暂时先这么写吧
      this.$refs.video.pause();
      this.playStatus = true;
    },
    // 视频页面那个显示播放和暂停的功能
    evtControl: function() {
      this.playStatus = !this.playStatus;
      if (this.playStatus) {
        this.$refs.video.pause()
      } else if (!this.playStatus) {
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
    transition: all 0.5s ease;
}
.video-content {
    position: absolute;
    left: 50%;
    margin-left: -440px;
    width: 880px;
    height: 596px;
    background: #f5f5f5;
    top: 10px;
    transition: all 0.3s ease;
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
            transition: all 0.3s ease;
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
            transition: all 0.3s ease;
        }
    }
}
// 遮罩层部分的动画
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave {
    opacity: 1;
}
</style>
