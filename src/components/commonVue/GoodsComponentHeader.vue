<template>
  <div class="component-hd">
    <!-- header组件的数据源，源自于goodsComponent中的数据源，而goodsComponent中的数据源来自good.vue中的遍历的item那个大数据源 -->
    <h2 class="title">{{headerData.title}}</h2>
    <div class="nav">
      <ul class="nav-list">
        <li
          class="nav-list-item"
          v-for="(item,index) in headerData.nav"
          :key="index"
          :class="{active:activeType===item.type}" @mouseenter="evtEnterActive(item.type,item.name,item.linkUrl)">
          {{item.name}}
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
      activeType: 'hot',
      linkMoreText: '热门',
      linkActiveUrl: '//list.mi.com/dapei'
    }
  },
  props: {
    headerData:{
      type:Object,
      required:true
    }
  },
  methods: {
    // 这是一个隐藏的比较有趣的功能，当在nav上划过时候，商品列表会跟着变化，还有一个位置也会发生变化，就是商品列表中最后一项，会把浏览更多的文字还有url跟着进行变化
    // 所以这里采用事件监听的方式，把type,text,url传入，然后$emit出去，父组件接收之后做出相应的改变
    evtEnterActive: function(type, text, url) {
      this.activeType = type
      this.linkMoreText = text
      this.linkActiveUrl = url
      this.$emit('evtEnterActive',type,text,url)
    }
  }
}
</script>
<style lang='less' scoped>
  .component-hd {
      position: relative;
      height: 58px;
      -webkit-font-smoothing: antialiased;
      .title {
          margin: 0;
          font-size: 22px;
          font-weight: 200;
          line-height: 58px;
          color: #333;
      }
      .nav {
          position: absolute;
          top: 0;
          right: 0;
          .nav-list {
              margin: 0;
              padding: 16px 0 0;
              list-style-type: none;
              font-size: 16px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .nav-list-item {
                  margin: 0 0 0 30px;
                  cursor: pointer;
                  color: #424242;
                  padding: 0 0 5px;
                  border-bottom: 2px solid transparent;
                  transition: all 0.3s ease;
                  &.active {
                      color: #ff6700;
                      border-bottom: 2px solid #ff6700;
                  }
              }
          }
      }
  }
</style>
