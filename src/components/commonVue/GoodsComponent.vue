<template>
<div class="goods-component">
  <!-- <div class="component-hd">
    <h2 class="title">{{match.title}}</h2>
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-list-item" v-for="(item,index) in match.nav" :key="index" :class="{active:activeStatus===item.type}" @mouseenter="evtEnterActive(item.type,item.name,item.linkUrl)">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div> -->
  <!-- GoodsComponentHeader部分组件 -->
  <goodsComponentHeader
    :headerData="componentGoodsData"
    @evtEnterActive="changeHeaderLink"></goodsComponentHeader>
  <div class="component-main">
    <goodsLeft :goodsLeftData="componentGoodsData.leftGoods"></goodsLeft>
    <goodsRight
      :goodsRightData="currData"
      :linkActiveUrl="linkActiveUrl"
      :linkMoreText="linkMoreText"></goodsRight>
  </div>
</div>
</template>
<script>
import goodsComponentHeader from '../commonVue/GoodsComponentHeader.vue'
import goodsLeft from '../commonVue/GoodsLeft.vue'
import goodsRight from '../commonVue/GoodsRight.vue'
export default {
  name: "goods-component",
  components: {
    goodsComponentHeader,
    goodsLeft,
    goodsRight
  },
  data: function data() {
    return {
      activeStatus: 'hot',
      linkMoreText: '热门',
      linkActiveUrl: '//list.mi.com/dapei',
      currData:[],
    }
  },
  props:{
    componentGoodsData:{
      required:true
    }
  },
  created: function created() {
    //do something after creating vue instance
    this.currData = this.componentGoodsData.hot
  },
  methods: {
    changeHeaderLink:function (type, text, url) {
      this.activeStatus = type
      this.linkMoreText = text
      this.linkActiveUrl = url
      this.currData = this.componentGoodsData[type]
    }
  }
}
</script>
<style lang="less" scoped>
.goods-component {
    height: 686px;
    margin-bottom: 8px;
    // 此处是header的样式
    // .component-hd {
    //     position: relative;
    //     height: 58px;
    //     -webkit-font-smoothing: antialiased;
    //     .title {
    //         margin: 0;
    //         font-size: 22px;
    //         font-weight: 200;
    //         line-height: 58px;
    //         color: #333;
    //     }
    //     .nav {
    //         position: absolute;
    //         top: 0;
    //         right: 0;
    //         .nav-list {
    //             margin: 0;
    //             padding: 16px 0 0;
    //             list-style-type: none;
    //             font-size: 16px;
    //             display: flex;
    //             justify-content: flex-start;
    //             align-items: center;
    //             .nav-list-item {
    //                 margin: 0 0 0 30px;
    //                 cursor: pointer;
    //                 color: #424242;
    //                 padding: 0 0 5px;
    //                 border-bottom: 2px solid transparent;
    //                 transition: all 0.3s ease;
    //                 &.active {
    //                     color: #ff6700;
    //                     border-bottom: 2px solid #ff6700;
    //                 }
    //             }
    //         }
    //     }
    // }
    .component-main {
        width: 234px;
        display: flex;
        justify-content: flex-start;
        flex-flow: row nowrap;
        // 左边商品组件的样式
        // .component-left {
        //     height: 614px;
        //     margin: 0;
        //     padding: 0;
        //     list-style-type: none;
        //     .component-left-list {
        //         margin: 0 0 -14px -14px;
        //         .component-left-list-item {
        //             height: 300px;
        //             padding: 0;
        //             position: relative;
        //             z-index: 1;
        //             width: 234px;
        //             margin-left: 14px;
        //             margin-bottom: 14px;
        //             background: #fff;
        //             transition: all 0.2s linear;
        //             &:hover {
        //                 box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
        //                 transform: translateY(-3px);
        //             }
        //             .item-link {
        //                 display: block;
        //                 width: 100%;
        //                 height: 100%;
        //                 .item-pic {
        //                     width: 100%;
        //                     height: 100%;
        //                 }
        //             }
        //         }
        //     }
        // }
        // 右边商品组件的样式
        // .component-right {
        //     width: 978px;
        //     margin-left: 14px;
        //     .component-right-list {
        //         height: 614px;
        //         margin: 0;
        //         padding: 0;
        //         list-style-type: none;
        //         display: flex;
        //         justify-content: flex-start;
        //         flex-flow: row wrap;
        //         width: 992px;
        //         .component-right-list-item {
        //             height: 246px;
        //             padding: 34px 0 20px;
        //             position: relative;
        //             z-index: 1;
        //             width: 234px;
        //             margin-left: 14px;
        //             margin-bottom: 14px;
        //             background: #fff;
        //             transition: all 0.2s linear;
        //             &:hover {
        //                 box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
        //                 transform: translateY(-3px);
        //                 .review-wrapper {
        //                     height: 76px;
        //                     opacity: 1;
        //                 }
        //             }
        //             .figure {
        //                 width: 150px;
        //                 height: 150px;
        //                 margin: 0 auto 18px;
        //                 .figure-link {
        //                     display: block;
        //                     width: 100%;
        //                     height: 100%;
        //                     .figure-pic {
        //                         width: 100%;
        //                         height: 100%;
        //                     }
        //                 }
        //             }
        //             .title {
        //                 margin: 0 10px;
        //                 font-size: 14px;
        //                 font-weight: 400;
        //                 text-align: center;
        //                 .title-link {
        //                     display: block;
        //                     text-overflow: ellipsis;
        //                     white-space: nowrap;
        //                     overflow: hidden;
        //                 }
        //             }
        //             .price {
        //                 margin: 10px;
        //                 text-align: center;
        //                 color: #ff6700;
        //                 font-size: 12px;
        //                 .old-price {
        //                     text-decoration: line-through;
        //                     color: #b0b0b0;
        //                 }
        //             }
        //             .rank {
        //                 margin: 0 10px;
        //                 font-size: 12px;
        //                 text-align: center;
        //                 text-overflow: ellipsis;
        //                 white-space: nowrap;
        //                 overflow: hidden;
        //                 color: #b0b0b0;
        //             }
        //             .review-wrapper {
        //                 position: absolute;
        //                 bottom: 0;
        //                 left: 0;
        //                 z-index: 3;
        //                 width: 234px;
        //                 height: 0;
        //                 overflow: hidden;
        //                 font-size: 12px;
        //                 background: #ff6700;
        //                 opacity: 0;
        //                 transition: all 0.2s linear;
        //                 a {
        //                     display: block;
        //                     padding: 8px 30px;
        //                     outline: 0;
        //                 }
        //                 .review {
        //                     margin-bottom: 5px;
        //                     color: #fff;
        //                     display: block;
        //                     font-size: 12px;
        //                     line-height: 18px;
        //                 }
        //                 .author {
        //                     display: block;
        //                     color: rgba(255,255,255,0.6);
        //                 }
        //             }
        //             .flag {
        //                 position: absolute;
        //                 top: 0;
        //                 left: 50%;
        //                 z-index: 2;
        //                 width: 64px;
        //                 height: 20px;
        //                 margin-left: -32px;
        //                 font-size: 12px;
        //                 line-height: 20px;
        //                 text-align: center;
        //                 color: #fff;
        //                 &.discount {
        //                     background-color: #e53935;
        //                 }
        //                 &.new {
        //                     background-color: #83c44e;
        //                 }
        //                 &.freePost {
        //                     background-color: #ffac13;
        //                 }
        //             }
        //         }
        //         .component-right-list-item-small {
        //             width: 234px;
        //             height: 260px;
        //             .component-right-list-last-item {
        //                 width: 234px;
        //                 height: 143px;
        //                 position: relative;
        //                 background: #fff;
        //                 margin: 0 0 14px 14px;
        //                 border: 1px solid #fff;
        //                 box-sizing: border-box;
        //                 transition: all 0.2s linear;
        //                 &:hover {
        //                     box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
        //                     transform: translateY(-3px);
        //                 }
        //                 .figure {
        //                     position: absolute;
        //                     right: 20px;
        //                     top: 32px;
        //                     width: 80px;
        //                     height: 80px;
        //                     .figure-link {
        //                         display: block;
        //                         width: 100%;
        //                         height: 100%;
        //                         .figure-pic {
        //                             width: 100%;
        //                             height: 100%;
        //                         }
        //                     }
        //                 }
        //                 .title {
        //                     margin: 40px 110px 10px 30px;
        //                     font-size: 12px;
        //                     font-weight: 400;
        //                     text-align: left;
        //                     .title-link {
        //                         display: block;
        //                         text-overflow: ellipsis;
        //                         white-space: nowrap;
        //                         overflow: hidden;
        //                     }
        //                 }
        //                 .price {
        //                     margin: 0 110px 0 30px;
        //                     text-align: left;
        //                     color: #ff6700;
        //                     font-size: 14px;
        //                     .old-price {
        //                         text-decoration: line-through;
        //                         color: #b0b0b0;
        //                     }
        //                 }
        //             }
        //             .component-right-list-item-more {
        //                 width: 234px;
        //                 height: 143px;
        //                 position: relative;
        //                 background: #fff;
        //                 margin: 0 0 14px 14px;
        //                 border: 1px solid #fff;
        //                 box-sizing: border-box;
        //                 transition: all 0.2s linear;
        //                 &:hover {
        //                     box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
        //                     transform: translateY(-1px);
        //                 }
        //                 .figure-more {
        //                     position: absolute;
        //                     right: 35px;
        //                     top: 48px;
        //                     width: 48px;
        //                     height: 48px;
        //                     a {
        //                         display: block;
        //                         color: #ff6700;
        //                         i {
        //                             font-size: 48px;
        //                             line-height: 48px;
        //                         }
        //                     }
        //                 }
        //                 .more-link {
        //                     display: block;
        //                     margin: 54px 110px 0 30px;
        //                     font-size: 18px;
        //                     color: #333;
        //                     text-align: left;
        //                     small {
        //                         display: block;
        //                         font-size: 12px;
        //                         color: #757575;
        //                         text-align: left;
        //                         margin-top: 10px;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
    }
}
</style>
