<template>
<div id="topbar">
  <div class="container">
    <ul class="topbar-nav">
      <!-- 使用v-for遍历，vue典型的用法 -->
      <li class="topbar-nav-item" v-for="(item,index) in navs" :key="index">
        <!-- 这个位置比较特殊，有些链接是打开新的页面，有的是在当前页面打开。使用template模板语法区分，通过一个标识，比如name之类的 -->
        <template v-if="item.name==='小米商城'">
            <a :href="item.linkUrl" class="topbar-nav-item-link" target="_self">{{item.name}}</a>
        </template>
        <template v-else>
            <a :href="item.linkUrl" class="topbar-nav-item-link" target="_blank">{{item.name}}</a>
        </template>
        <!-- span标签内容是一个分隔符，最后一个元素是没有分隔符的，所以可以用下标进行区别，让其在小于length-1的时候出现 -->
        <span class="sep" v-show="index<9">|</span>
      </li>
    </ul>
    <!-- 购物车 -->
    <!-- 购物车包含两个效果，鼠标移出和移出 -->
    <div class="topbar-cart" @mouseenter="evtCartEnter" @mouseleave="evtCartOut">
      <!-- 此处技能点：动态添加类名 -->
      <!-- 要想动态的添加类名必须使用:class,然后可以使用对象的形式直接添加写好的类名，例如active，后边的参数是一个布尔值 -->
      <a href="http://static.mi.com/cart/" class="cart-mini" :class="{active:cartStatus}">
        <i class="fa fa-shopping-cart"></i> 购物车
        <!-- 这个位置如果做得详细一些，应该使用vuex,对公共的数据进行管理 -->
        <span>(0)</span>
      </a>
      <!-- 购物车的tips -->
      <!-- 通过鼠标事件触发显示和隐藏 -->
      <!-- 若想添加动画，需要在那个元素外边套上transition,而且能触发动画的只有v-show,hide,v-if,v-else  -->
      <!-- 这里使用了过渡模式，mode，out-in表示先是进行移出的元素效果，接着进入的元素的效果 -->
      <transition name="fade" mode="out-in">
        <div class="cart-list" v-show="cartStatus">
          购物车中还没有商品，赶快选购吧~
        </div>
      </transition>
    </div>
    <div class="userInfo">
      <a href="//order.mi.com/site/login?redirectUrl=http://www.mi.com/" class="topbar-nav-item-link">
          登录
        </a>
      <span class="sep">|</span>
      <a href="https://account.xiaomi.com/pass/register" class="topbar-nav-item-link">
          注册
        </a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "topbar",
  data: function data() {
    return {
      navs: [
        {
          name: '小米商城',
          linkUrl: '//www.mi.com/index.html'
        },
        {
          name: 'MIUI',
          linkUrl: 'http://www.miui.com/'
        },
        {
          name: '米聊',
          linkUrl: 'http://www.miliao.com/'
        },
        {
          name: '游戏',
          linkUrl: 'http://game.xiaomi.com/'
        },
        {
          name: '多看阅读',
          linkUrl: 'http://www.duokan.com/'
        },
        {
          name: '云服务',
          linkUrl: 'https://i.mi.com/'
        },
        {
          name: '金融',
          linkUrl: 'https://jr.mi.com?from=micom'
        },
        {
          name: '小米商城移动版',
          linkUrl: '//www.mi.com/appdownload/'
        },
        {
          name: '问题反馈',
          linkUrl: '//static.mi.com/feedback/'
        },
        {
          name: 'Select Region',
          linkUrl: '#J_modal-globalSites'
        }
      ],
      timer: '',
      cartStatus: false
    }
  },
  methods: {
    // 鼠标移入时候让购物车出现
    evtCartEnter: function() {
      this.cartStatus = true;
      clearTimeout(this.timer)
    },
    // 鼠标移出时候购物车隐藏，并且短暂延迟之后在隐藏
    evtCartOut: function() {
      let _this = this;
      this.timer = setTimeout(function() {
        _this.cartStatus = false;
      }, 300)
    }
  }
}
</script>
<style scoped>
#topbar {
  width: 100%;
  height: 40px;
  background: #333;
}

.container {
  width: 1226px;
  margin: 0 auto;
  height: 40px;
  background: #333;
}

.topbar-nav {
  height: 40px;
  line-height: 40px;
  float: left;
  font-size: 12px;
}

.topbar-nav .topbar-nav-item {
  float: left;
}

.topbar-nav-item-link {
  text-decoration: none;
  color: #b0b0b0;
}

.topbar-nav-item-link:hover {
  color: #fff;
}

.sep {
  margin: 0 0.3em;
}

.topbar-cart {
  position: relative;
  float: right;
  width: 120px;
  background: #424242;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin-left: 15px;
}

.cart-mini {
  display: block;
  width: 120px;
  height: 40px;
  background: #424242;
  color: #b0b0b0;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
}

.active {
  color: #ff6700;
}

.userInfo {
  float: right;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}

.cart-list {
  position: absolute;
  width: 316px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  color: #b0b0b0;
  background: #fff;
  right: 0;
  top: 40px;
  font-size: 12px;
  box-shadow: 0 0 5px #ccc;
  z-index: 10;
}

.fade-enter,
.fade-leave-to {
  height: 0px;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
