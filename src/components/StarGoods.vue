<template>
  <div class="star-goods">
    <div class="star-goods-box">
      <div class="star-goods-box-header">
        <h1 class="title">{{title}}</h1>
        <div class="more">
          <a href="javascript:void(0)" class="fa fa-angle-left control prev" :class="{disabled:currPage===0}" @click="slidePrev"></a>
          <a href="javascript:void(0)" class="fa fa-angle-right control next" :class="{disabled:currPage===1}" @click="slideNext"></a>
        </div>
      </div>
      <div class="star-goods-box-banner">
        <div class="star-goods-box-slider-wrapper">
          <ul class="slider-list" :style="{'margin-left':this.currPage*(-1245)+'px'}">
            <li class="slider-item" v-for="(item,index) in starGoods" :key="index" :class="'item'+index">
              <a :href="item.sourceUrl" class="thumb">
                <img :src="item.imgUrl" :alt="item.name">
              </a>
              <h3 class="title">
                <a href="item.sourceUrl">{{item.name}}</a>
              </h3>
              <p class="desc">{{item.desc}}</p>
              <p class="price">{{item.price}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "star-goods",
  data: function data() {
    return {
      currPage:0,
      controlStatus:false,
      sliderTimer:null,
    }
  },
  props: {
    title:{
      type:String,
      required:true
    },
    starGoods:{
      type:Array,
      required:true
    }
  },
  created: function created() {
    //do something after creating vue instance
    this.autoSlide()
  },
  methods: {
    slidePrev: function () {
      this.currPage-=1;
      if (this.currPage===-1) {
        this.currPage=0;
      }
      console.log(this.currPage);
    },
    slideNext:function () {
      this.currPage+=1;
      if (this.currPage===2) {
        this.currPage=1;
      }
      console.log(this.currPage);
    },
    autoSlide:function () {
      clearInterval(this.sliderTimer)
      this.sliderTimer = setInterval(() => {
        this.currPage+=1;
        if (this.currPage===2) {
          this.currPage=0
        }
      },8000)
    }
  }
}
</script>
<style lang="less" scoped>
@baseColor:#ff6700;
.star-goods{
  width: 1226px;
  height: auto;
  margin:0 auto;
  margin-top: 26px;
}
.star-goods-box-header{
  position: relative;
  height: 58px;
  .title{
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .more{
    position: absolute;
    top: 24px;
    right: 0;
    .control{
      width: 24px;
      height: 16px;
      padding: 3px 5px;
      border: 1px solid #e0e0e0;
      font-size: 18px;
      font-weight: bold;
      line-height: 16px;
      text-align: center;
      display: inline-block;
      color: #b0b0b0;
      transition: color .5s;
      &:hover{
        color:@baseColor;
      }
    }
    .next{
      margin-left: -5px;
    }
  }
}
.star-goods-box-banner{
  position: relative;
  width: 1226px;
  overflow: hidden;
  _zoom: 1;
  padding-bottom: 40px;
  .star-goods-box-slider-wrapper{
    height: 340px;
    overflow: hidden;
    .slider-list{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: row nowrap;
      transition: all .5s ease;
      .slider-item{
      height: 300px;
      width: 234px;
      margin-right: 15px;
      padding-top: 39px;
      border-top-width: 1px;
      border-top-style: solid;
      text-align: center;
      background: #fafafa;
      .thumb{
        display: block;
        width: 160px;
        margin: 0 auto 22px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .title{
        width: 234px;
        margin: 0 0 10px 0;
        font-size: 14px;
        font-weight: 400;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .desc{
        width: 234px;
        height: 18px;
        margin: 0 20px 12px;
        font-size: 12px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #b0b0b0;
      }
      .price{
        color: #ff6709;
        font-size: 14px;
        }
      }
      .item0,.item5{
        border-top-color: #ffac13;
      }
      .item1,.item6{
        border-top-color: #83c44e;
      }
      .item2,.item7{
        border-top-color: #2196f3;
      }
      .item3,.item8{
        border-top-color: #e53935;
      }
      .item4,.item9{
        border-top-color: #00c0a5;
      }
    }
  }
}
.active{
  color:@baseColor !important;
}
.disabled{
  color: #e0e0e0 !important;
  cursor: default !important;
}
</style>
