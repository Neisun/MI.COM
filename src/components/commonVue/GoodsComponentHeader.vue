<template>
  <div class="component-hd">
    <h2 class="title">{{headerData.title}}</h2>
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-list-item" v-for="(item,index) in headerData.nav" :key="index" :class="{active:activeStatus===item.type}" @mouseenter="evtEnterActive(item.type,item.name,item.linkUrl)">
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
      activeStatus: 'hot',
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
    evtEnterActive: function(type, text, url) {
      this.activeStatus = type
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
