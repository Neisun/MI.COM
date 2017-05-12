<template>
<!-- 每个slide组件的的border-top和字体颜色不同，使用type字段进行区分 -->
<div class="content-wrap" :class="goodsContentSlideData.type">
  <!-- slide组件的头部，头部部分是不变的，不参与轮播，把参与轮播的部分放置到一个容器中 -->
  <h2 class="title" :class="goodsContentSlideData.type">
    {{goodsContentSlideData.title}}
  </h2>
  <!-- slide组件部分 -->
  <!-- 轮播图视图容器，必须给他添加overflow:hidden,不然就漏出来了。。。 -->
  <div class="slide-wrap">
    <!-- 后退按钮 -->
    <span class="slide-prev" @click="slidePrev()">
      <i class="fa fa-chevron-left"></i>
    </span>
    <!-- 前进按钮 -->
    <span class="slide-next" @click="slideNext(goodsContentSlideData.list.length)">
      <i class="fa fa-chevron-right"></i>
    </span>
    <!-- 轮播图容器 -->
    <!-- 这里也是直接采用margin-left调整轮播图，这个方式也是相当不错的选择 -->
    <ul class="sub-content" :style="{'margin-left': currPage * (-296) +'px'}">
      <li class="content-item" v-for="(good,index) in goodsContentSlideData.list" :key="index">
          <!-- 每个轮播图组，前几张的布局都是一致的，根据type来加以区分 -->
          <a :href="good.sourceUrl" target="_blank" v-if="good.type===1">
            <h1 class="subTitle">{{good.title}}</h1>
            <p class="desc">{{good.desc}}</p>
            <p class="price">{{good.price}}</p>
            <img :src="good.imgUrl" :alt="good.title" class="content-img">
          </a>
          <!-- type是2的时候就比较特殊 -->
          <a :href="good.sourceUrl" target="_blank" v-if="good.type===2">
            <h1 class="subTitle">{{good.title}}</h1>
            <p class="desc">{{good.desc1}}</br>{{good.desc2}}</p>
            <p class="price">{{good.price}}</p>
            <a :href="good.sourceUrl">
              <p class="btn-txt" :class="goodsContentSlideData.type">{{good.btnTxt}}</p>
            </a>
            <img :src="good.imgUrl" :alt="good.title" class="content-img">
          </a>
      </li>
    </ul>
    <!-- 按钮组 -->
    <ul class="dot-list">
      <li
        class="dot-item"
        v-for="(n,index) in goodsContentSlideData.list.length"
        :key="index"
        @click="changeSlide(index)">
        <span class="dot" :class="{'active':index===currPage}"></span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {
      currPage: 0
    }
  },
  props: {
    goodsContentSlideData: {
      required: true
    }
  },
  methods: {
    slidePrev: function(index) {
      this.currPage -= 1;
      if (this.currPage === -1) {
        this.currPage = 0;
      }
    },
    slideNext: function(num, index) {
      this.currPage += 1;
      if (this.currPage === num) {
        this.currPage = num - 1;
      }
    },
    changeSlide: function(index) {
      this.currPage = index;
    }
  }
}
</script>
<style lang="less" scoped>
.content-wrap {
    position: relative;
    width: 296px;
    height: auto;
    margin: 0 14px 14px 0;
    padding-top: 45px;
    background: #fff;
    transition: all 0.3s linear;
    &:hover {
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        transform: translate3d(0, -2px, 0);
        .slide-next,
        .slide-prev {
            opacity: 0.5 !important;
        }
    }
    &.book {
        border-top: 1px solid #ffac13;
    }
    &.theme {
        border-top: 1px solid #83c44e;
    }
    &.game {
        border-top: 1px solid #e53935;
    }
    &.app {
        border-top: 1px solid #2196f3;
    }
    .title {
        margin: 0 10px 18px;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        &.book {
            color: #ffac13;
        }
        &.theme {
            color: #83c44e;
        }
        &.game {
            color: #e53935;
        }
        &.app {
            color: #2196f3;
        }
    }
    .slide-wrap {
        width: 296px;
        height: 340px;
        overflow: hidden;
        .slide-next,
        .slide-prev {
            display: block;
            width: 20px;
            height: 46px;
            line-height: 46px;
            font-size: 15px;
            text-align: center;
            margin-top: -24px;
            cursor: pointer;
            z-index: 11;
            background: #b0b0b0;
            color: #fff;
            opacity: 0;
        }
        .slide-prev {
            position: absolute;
            left: 0;
            top: 50%;
            transition: all 0.3s;
            &:hover {
                opacity: 1 !important;
            }
        }
        .slide-next {
            position: absolute;
            top: 50%;
            transition: all 0.3s;
            right: 0;
            &:hover {
                opacity: 1 !important;
            }
        }
        .sub-content {
            width: 1200px;
            height: 340px;
            display: flex;
            justify-content: flex-start;
            flex-flow: row nowrap;
            transition: all 0.5s ease;
            .content-item {
                width: 296px;
                height: 340px;
                .subTitle {
                    margin: 0 0 10px;
                    font-weight: normal;
                    font-size: 20px;
                    text-align: center;
                    color: #333;
                }
                .desc {
                    margin: 0 48px 10px;
                    height: 40px;
                    font-size: 12px;
                    line-height: 20px;
                    text-align: center;
                    overflow: hidden;
                    // _zoom: 1;
                    color: #b0b0b0;
                }
                .price {
                    height: 21px;
                    margin: 0 10px 15px;
                    text-align: center;
                    color: #333;
                    font-size: 14px;
                }
                .content-img {
                    display: block;
                    width: 216px;
                    height: 154px;
                    margin: 0 auto;
                }
                .btn-txt {
                    width: 130px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 12px;
                    text-align: center;
                    margin: 0 auto 14px;
                    background: #fff;
                    cursor: pointer;
                    background: #fff;
                    transition: all 0.3s ease;
                    &.book {
                        color: #ffac13;
                        border: 1px solid #ffac13;
                        &:hover {
                            color: #fff;
                            background: #ffac13;
                        }
                    }
                    &.theme {
                        color: #83c44e;
                        border: 1px solid #83c44e;
                        &:hover {
                            color: #fff;
                            background: #83c44e;
                        }
                    }
                    &.game {
                        color: #e53935;
                        border: 1px solid #e53935;
                        &:hover {
                            color: #fff;
                            background: #e53935;
                        }
                    }
                    &.app {
                        color: #2196f3;
                        border: 1px solid #2196f3;
                        &:hover {
                            color: #fff;
                            background: #2196f3;
                        }
                    }
                }
            }
        }
        .dot-list {
            position: absolute;
            left: 50%;
            bottom: 10px;
            width: 150px;
            margin-left: -75px;
            .dot-item {
                width: 10px;
                height: 10px;
                padding: 10px;
                margin: 0 2px;
                display: inline-block;
                cursor: pointer;
                .dot {
                    display: block;
                    width: 6px;
                    height: 6px;
                    background-color: #b0b0b0;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    &:hover {
                        background: #ff6700;
                    }
                    &.active {
                        background: #fff;
                        border: 2px solid #ff6700;
                    }
                }
            }
        }
    }
}
</style>
