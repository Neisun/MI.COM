<template>
  <!-- 左边组件的数据源，同样是在goods中组件的大数据源的每一个对象item中的leftGoods对象 -->
  <div class="component-left">
    <ul class="component-left-list">
      <li class="component-left-list-item" v-for="(item,index) in goodsLeftData" :key="index">
        <a :href="item.sourceUrl" class="item-link" target="_blank">
          <img :src="item.imgUrl" alt="" class="item-pic">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "componentLeft",
  data: function data() {
    return {

    }
  },
  props: {
    goodsLeftData:{
      required:true
    }
  }
}
</script>
<style lang="less" scoped>
  .component-left {
      height: 614px;
      margin: 0;
      padding: 0;
      list-style-type: none;
      .component-left-list {
          margin: 0 0 -14px -14px;
          .component-left-list-item {
              height: 300px;
              padding: 0;
              position: relative;
              z-index: 1;
              width: 234px;
              margin-left: 14px;
              margin-bottom: 14px;
              background: #fff;
              transition: all 0.2s linear;
              &:hover {
                  box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
                  transform: translateY(-3px);
              }
              .item-link {
                  display: block;
                  width: 100%;
                  height: 100%;
                  .item-pic {
                      width: 100%;
                      height: 100%;
                  }
              }
          }
      }
  }
</style>
