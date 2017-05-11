<template>
  <div class="banner" @mouseenter="stopAutoSlide" @mouseleave="continueAutoSlide">
      <!-- 前进与后退按钮 -->
      <a href="javascript:void(0);" class="arrow prev" @click="evtPrev"></a>
      <a href="javascript:void(0);" class="arrow next" @click="evtNext"></a>
      <!-- 按钮组 -->
      <ul class="slider-controler">
        <!--$event，访问原生事件采取的一种措施，详细的在vue官方教程中有详细的说明  -->
        <!-- 因为原本想用jq添加类名和删除类名的老方式去写轮播图 -->
        <li
          class="slider-controler-item"
          v-for="(item,index) in 5"
          :class="{active:currPage===index}"
          @click="evtChange(index,$event)"></li>
      </ul>
      <!-- 轮播图部分 -->
      <ul class="slider-wrap">
        <!-- 每个transition只能对应一个单独的唯一的element,所以要一次对应多个的话，用transition-group -->
        <transition-group
          name="fadeIn"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
          <li
            class="slider-item"
            v-for="(elem,index) in banners"
            :key="index"
            v-show="index===currPage">
            <a :href="elem.sourceUrl" class="slider-link">
              <img :src="elem.imgUrl" alt="" class="slider-pic">
            </a>
          </li>
        </transition-group>
      </ul>
  </div>
</template>
<script>
export default {
  name: "banner",
  data: function data() {
    return {
      currPage:0,
      sliderTimer:null
    }
  },
  // banner的数据来源，由于是topbanner的子组件，所以使用props的方式，让其从父组件中获取
  props: {
    banners:{
      type:Array,
      required:true
    }
  },
  created: function created() {
    //do something after creating vue instance
    this.autoSlide();
  },
  // 代码中关于jq的注释部分是原来书写的方式，后来感觉比较麻烦，pass掉了
  methods: {
    // 后退按钮
    evtPrev:function (event) {
      this.currPage-=1;
      if (this.currPage<0) {
        this.currPage=4;
      }
      // $('.slider-controler-item').removeClass('active').eq(this.currPage).addClass('active');
    },
    // 前进按钮
    evtNext:function (event) {
      this.currPage+=1;
      if (this.currPage>4) {
        this.currPage=0;
      }
      // $('.slider-controler-item').removeClass('active').eq(this.currPage).addClass('active');
    },
    // 下部按钮组
    evtChange:function (index) {
      this.currPage = index;
      // $('.slider-controler-item').removeClass('active').eq(this.currPage).addClass('active');
    },
    // 自动轮播
    autoSlide:function () {
      clearInterval(this.sliderTimer)
      this.sliderTimer = setInterval(this.evtNext,3000)
    },
    // 鼠标引入停止轮播
    stopAutoSlide:function (event) {
      clearInterval(this.sliderTimer);
    },
    // 鼠标移出，继续轮播
    continueAutoSlide:function (event) {
      this.autoSlide()
    }
  }
}
</script>
<style lang="less" scoped>
  .banner{
    width: 1226px;
    height: 460px;
    position: relative;
    z-index: 10;
  }
  .arrow{
    position: absolute;
    width: 41px;
    height: 69px;
    top: 50%;
    margin-top:-34.5px;
    z-index: 999;
  }
  .prev{
    left: 234px;
    background: url('http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png') no-repeat -85px 0;
    &:hover{
      background: url('http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png') no-repeat 0 0;
    }
  }
  .next{
    right: 0;
    background: url('http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png') no-repeat -126px 0;
    &:hover{
      background: url('http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png') no-repeat -43px 0;
    }
  }
  .slider-controler{
    position: absolute;
    right: 30px;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
  }
  .slider-controler-item{
    width: 6px;
    height: 6px;
    margin: 0 5px;
    border: 2px solid #fff;
    border-color: rgba(255,255,255,0.3);
    background: rgba(0,0,0,0.4);
    border-radius: 10px;
    cursor: pointer;
    &:hover{
      background: rgba(255,255,255,0.4);
      border-color: rgba(0,0,0,0.4);
    }
  }
  .slider-wrap{
    width: 1226px;
    height: 460px;
    position: relative;
  }
  .slider-item{
    position: absolute;
    left: 0;
    top: 0;
  }
  .slider-link{
    width: 1226px;
    height: 460px;
  }
  .slider-pic{
    width: 100%;
    height: 100%;
  }
  .active{
    background: rgba(255,255,255,0.4);
    border-color: rgba(0,0,0,0.4);
  }
</style>
