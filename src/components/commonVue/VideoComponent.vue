<template>
  <div class="video-wrap">
    <!-- 标题部分 -->
    <div class="video-hd">
      <h2 class="title">{{title}}</h2>
      <div class="more">
        <a href="//www.mi.com/video/">
          查看全部
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="video-content">
      <ul class="video-list">
        <!-- 每个卡片 -->
        <li
          class="video-item"
          v-for="(item,index) in videos"
          :key="index"
          @click="playVideo(item)">
          <!-- 每个卡片的图 -->
          <a href="javascript:void(0);" class="img-wrap">
            <img :src="item.imgUrl" alt="">
            <!-- 播放视频的按钮 -->
            <span class="btn-play">
              <i class="fa fa-play"></i>
            </span>
          </a>
          <!-- 卡片的标题 -->
          <h3 class="title">
            <a href="javascript:void(0);">
              {{item.title}}
            </a>
          </h3>
          <!-- 卡片的描述 -->
          <p class="desc">{{item.desc}}</p>
          <!-- 按钮 -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: "videoComponent",
  data: function data() {
    return {
      title:'视频',
      videos:[
        {
          videoUrl:'http://v.mifile.cn/b2c-mimall-media/dd431020c9e7bb06a89b6959fa91f97d.mp4',
          imgUrl:'//i3.mifile.cn/a4/xmad_1492588199164_Jykpx.jpg',
          title:'听雷总讲述小米7年工艺探索之路',
          desc:'小米6，7年工艺探索的巅峰之作'
        },
        {
          videoUrl:'http://v.mifile.cn/b2c-mimall-media/5b1095e47091cdb14ba54e0a91479f41.mp4',
          imgUrl:'//i3.mifile.cn/a4/xmad_14925882923733_lghaJ.jpg',
          title:'小米6外观设计视频',
          desc:'震惊！小米6竟然如此之美'
        },
        {
          videoUrl:'http://v.mifile.cn/b2c-mimall-media/429ea3f37247648d61705bb3edff93c1.mp4',
          imgUrl:'//i3.mifile.cn/a4/xmad_14933551610667_IPaug.jpg',
          title:'小米MIX 品牌阐述',
          desc:'通往未来世界的门'
        },
        {
          videoUrl:'http://v.mifile.cn/b2c-mimall-media/0f4a667d8fc5ff025cfade287674f030.mp4',
          imgUrl:'//i3.mifile.cn/a4/xmad_14918846745236_hlYCc.jpg',
          title:'小寻儿童电话手表陪伴孩子的一天',
          desc:'孩子的守护小精灵'
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'playVideo'
    ])
  }
}
</script>
<style lang="less" scoped>
@baseColor:#ff6700;
.video-wrap {
  .video-hd {
    height: 58px;
    position: relative;
    .title {
      margin: 0;
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
    .more {
      position: absolute;
      top: 0;
      right: 0;
      a {
        font-size: 16px;
        line-height: 58px;
        color: #424242;
        transition: all 0.3s ease;
        &:hover {
          color:@baseColor;
          i {
            background: @baseColor;
          }
        }
        i {
          width: 12px;
          height: 12px;
          padding: 4px;
          font-size: 14px;
          color: #fff;
          background: #b0b0b0;
          border-radius: 16px;
          text-align: center;
          line-height: 12px;
          margin-left: 8px;
          // 调整一下图标的位置，微调
          vertical-align: 1px;
          transition: all 0.3s ease;
        }
      }
    }
  }
  .video-content {
    .video-list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: row nowrap;
      .video-item {
        width: 296px;
        height: 285px;
        margin-bottom: 14px;
        text-align: center;
        background: #ffffff;
        transition: all .3s ease;
        position: relative;
        margin-right: 14px;
        &:hover {
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          transform: translateY(-2px);
          .btn-play {
            border-color: @baseColor;
            background: @baseColor;
          }
        }
        .img-wrap {
          display: block;
          width: 296px;
          height: 180px;
          margin: 0 0 28px 0;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #333;
          a {
            transition: all .3s ease;
          }
          &:hover {
            a {
              color: @baseColor;
            }
          }
        }
        .desc {
          height: 18px;
          margin: 20px 0 0 0;
          font-size: 12px;
          color: #b0b0b0;
        }
        .btn-play {
          position: absolute;
          left: 10px;
          bottom:10px;
          width: 32px;
          height: 20px;
          border: 2px solid #fff;
          border-radius:12px;
          background: rgba(0,0,0,0.6);
          text-align: center;
          transition: all .3s ease;
          i {
            font-size: 10px;
            color: #fff;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
