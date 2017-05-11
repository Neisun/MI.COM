<template>
<div class="goods-component">
  <!-- 我把goodsComponent这个组件又分成了三部分，头部部分，左边，右边部分三个组件。 -->
  <!-- GoodsComponentHeader部分组件 -->
  <goodsComponentHeader
    :headerData="componentGoodsData"
    @evtEnterActive="changeHeaderLink"></goodsComponentHeader>
  <div class="component-main">
    <!-- 左边的组件 -->
    <goodsLeft :goodsLeftData="componentGoodsData.leftGoods"></goodsLeft>
    <!-- 右边的组件 -->
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
    .component-main {
        width: 234px;
        display: flex;
        justify-content: flex-start;
        flex-flow: row nowrap;
    }
}
</style>
