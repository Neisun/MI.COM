<template>
<div id="top-header">
  <div class="container">
    <!-- 小米logo -->
    <a href="//www.mi.com/index.html" class="icon-mi"></a>
    <!-- 活动gif -->
    <a href="#" class="pic-gif"></a>
    <!-- 商品nav -->
    <div class="header-navs">
      <ul class="navs">
        <!-- v-fo遍历数据，拿到每一项的name和url -->
        <li v-for="item in navs">
          <!-- 有些链接在本页打开，有些链接在新的页面打开，而区分的关键点在于是否有type这个字段 -->
          <!-- 有type字段的模板 -->
          <!-- 包含两个鼠标事件，鼠标移入和移出的事件 -->
          <!-- 移入事件，鼠标移入商品列表出现，并且移动到不同的导航，商品会发生相应的变化，这个事件需要将type当做形参进行传递,改变储存当前商品列表那个数组 -->
          <template v-if="item.type">
            <a href="javascript:void(0)"
               class="nav-item"
               @mouseenter="evtHeaderEnter(item.type)"
               @mouseleave="evtHeaderLeave">
               {{item.name}}
            </a>
          </template>
          <!-- 没有type字段的模板，样式都是一致的 -->
          <template v-else>
            <a
              :href="item.sourceUrl"
              class="nav-item"
              target="_blank">
              {{item.name}}
            </a>
          </template>
        </li>
      </ul>
    </div>
    <!-- 搜索部分 -->
    <div class="header-search">
      <form class="search-form" action="" method="">
        <!-- 这个位置最值得关注的是样式的动态改变 -->
        <!-- 1.鼠标移入，一个样式 -->
        <!-- 2.移出，一个样式 -->
        <!-- 3.获取焦点样式 -->
        <!-- 4.失去焦点样式 -->
        <input
          type="text"
          name=""
          value=""
          class="search-text"
          :class="{active:keyWordStatus}"
          @focus="evtInpFocus"
          @blur="evtInpBlur">
        <label class="search-btn" :class="{active:keyWordStatus}">
          <i class="search-icon"></i>
        </label>
        <div class="search-hot-words" v-show="hotWordStatus">
          <a href="//www.mi.com/redmi4x/" class="words">红米 4X</a>
          <a href="//item.mi.com/product/10000021.html" class="words">小米Note2</a>
        </div>
        <div class="keyword-list" v-show="keyWordStatus">
          <ul class="result-list">
            <a href="javascript:void(0);" v-for="item in keyWordLists">
              <li class="list-item">
                <span class="item-name">{{item.name}}</span>
                <span class="item-price">约有{{item.number}}件</span>
              </li>
            </a>
          </ul>
        </div>
      </form>
    </div>
  </div>
  <!-- 商品列表 -->
  <transition name="fade">
    <div
      class="header-menu"
      v-show="headerStatus"
      @mouseenter="evtHeaderEnter()"
      @mouseleave="evtHeaderLeave()">
      <ul class="menus clearfix">
        <li class="menus-item" v-for="(item,index) in currentSales" :key='index'>
          <a :href="item.sourcePath" class="menus-item-pic-link">
            <img :src="item.imgUrl" alt="" class="menus-item-pic">
          </a>
          <p class="menus-item-title">
            <a :href="item.sourcePath" class="menus-item-title-link">
              {{item.name}}
            </a>
          </p>
          <p class="menus-item-price">{{item.price}}</p>
        </li>
      </ul>
    </div>
  </transition>
</div>
</template>
<script>
export default {
  name: "topHeader",
  data: function data() {
    return {
      // 搜索栏中热搜词的显示状态
      hotWordStatus: true,
      // 计时器
      timer: null,
      // 搜索的关键词，获取焦点时候发送请求获得，填入到该空数组中
      keyWordLists: [],
      // 搜索关键词状态
      keyWordStatus: false,
      // 商品列表状态
      headerStatus: false,
      // 当前商品列表，给了一个默认的值
      currentSales: this.xiaomi,
      anotherTimer: null,
      navs: [{
          name: '小米手机',
          type: 'xiaomi'
        },
        {
          name: '红米',
          type: 'red'
        },
        {
          name: '平板 · 笔记本',
          type: 'flats'
        },
        {
          name: '电视',
          type: 'tv'
        },
        {
          name: '盒子 · 影音',
          type: 'box'
        },
        {
          name: '路由器',
          type: 'router'
        },
        {
          name: '智能硬件',
          type: 'hardware'
        },
        {
          name: '服务',
          sourceUrl: '//www.mi.com/service/'
        },
        {
          name: '社区',
          sourceUrl: 'http://www.xiaomi.cn'
        }
      ],
      xiaomi: [{
          name: '小米Max',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/maxdingbu!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1299元起'
        },
        {
          name: '小米手机5',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mi5!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1499元起'
        },
        {
          name: '小米手机4c',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1099元'
        }
      ],
      red: [{
          name: '红米pro',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1499元起'
        },
        {
          name: '红米note3',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/hongmi3s!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '899元起'
        },
        {
          name: '红米手机3S',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/note3!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '699元起'
        },
        {
          name: '红米手机3',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hongmi3!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '699元起'
        },
        {
          name: '红米手机3X',
          imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/320-220!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '799元'
        }
      ],
      flats: [{
          name: '小米平板2 16GB',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '999元'
        },
        {
          name: '小米平板2 64GB',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1299元'
        },
        {
          name: '小米平板2 64GB Windows版',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64-win!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '1299元'
        },
        {
          name: '小米笔记本Air 12.5',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '3499元'
        },
        {
          name: '小米笔记本Air 13.3',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben320!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '4999元'
        }
      ],
      tv: [{
          name: '小米电视3S 43英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3s/43/',
          price: '1499元'
        },
        {
          name: '小米电视3S 48英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3s48!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3s/48/',
          price: '1999元'
        },
        {
          name: '小米电视3 55英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv355!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3/55/',
          price: '3299元起'
        },
        {
          name: '小米电视3 60英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3/60/',
          price: '3499元'
        },
        {
          name: '小米电视3S 65英寸 曲面',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-65!160x110.jpg',
          sourcePath: 'http://www.mi.com/mimax/',
          price: '8999元'
        },
        {
          name: '小米电视3 70英寸',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv70!160x110.jpg',
          sourcePath: 'http://www.mi.com/mitv3/70/',
          price: '8999元'
        }
      ],
      box: [{
          name: '小米盒子mini版',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezimini.png',
          sourcePath: 'http://www.mi.com/hezimini/',
          price: '179元'
        },
        {
          name: '小米盒子3',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3.png',
          sourcePath: 'http://www.mi.com/hezi3/',
          price: '249元'
        },
        {
          name: '小米盒子3 增强版',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3s!160x110.jpg',
          sourcePath: 'http://www.mi.com/hezi3s/',
          price: '399元'
        },
        {
          name: '小米电视主机',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhuji!160x110.jpg',
          sourcePath: 'http://www.mi.com/tvzj/',
          price: '999元'
        },
        {
          name: '小米家庭音响 金属版',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jinshuban!160x110.jpg',
          sourcePath: 'http://item.mi.com/1160800073.html',
          price: '899元'
        },
        {
          name: '小米家庭音响 标准版',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/putonban!160x110.jpg',
          sourcePath: 'http://item.mi.com/1160800074.html',
          price: '699元'
        }
      ],
      router: [{
          name: '小米路由器 HD',
          imgUrl: '//c1.mifile.cn/f/i/g/2015/cn-index/lyqhd.png 2x',
          sourcePath: '//www.mi.com/miwifihd/',
          price: '1299元'
        },
        {
          name: '小米路由器 Pro',
          imgUrl: '//c1.mifile.cn/f/i/g/2015/cn-index/pro320x220.png 2x',
          sourcePath: '//www.mi.com/miwifihd/',
          price: '499元'
        },
        {
          name: '小米路由器 3',
          imgUrl: '//c1.mifile.cn/f/i/g/2015/cn-index/lyq31.png 2x',
          sourcePath: '//www.mi.com/miwifi3/',
          price: '149元'
        },
        {
          name: '小米路由器 3C',
          imgUrl: '//c1.mifile.cn/f/i/g/2015/cn-index/lyq3c1.png 2x',
          sourcePath: '//www.mi.com/miwifi3c/',
          price: '99元'
        },
        {
          name: '小米WiFi电力猫',
          imgUrl: '//c1.mifile.cn/f/i/g/2015/cn-index/dlm01.png 2x',
          sourcePath: '//www.mi.com/plc/',
          price: '249元'
        },
        {
          name: '小米WiFi放大器 2',
          imgUrl: '//c1.mifile.cn/f/i/g/2015/cn-index/fdq2!160x110.jpg',
          sourcePath: '//item.mi.com/1164700010.html',
          price: '49元'
        }
      ],
      hardware: [{
          name: '九号平衡车',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/scooter!160x110.jpg',
          sourcePath: 'http://www.mi.com/scooter/',
          price: '1999元'
        },
        {
          name: '小米净水器',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/water2!160x110.jpg',
          sourcePath: 'http://www.mi.com/water/',
          price: '1299元起'
        },
        {
          name: '米家压力IH电饭煲',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao!160x110.jpg',
          sourcePath: 'http://www.mi.com/dianfanbao/',
          price: '999元'
        },
        {
          name: '小米空气净化器 2',
          imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/air2!160x110.jpg',
          sourcePath: 'http://www.mi.com/air2/',
          price: '649元'
        },
        {
          name: '智能摄像机',
          imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/zhinengyingjian!160x110.jpg',
          sourcePath: 'http://list.mi.com/accessories/tag?id=shexiangji',
          price: '149元起'
        }
      ]
    }
  },
  methods: {
    // 可以优化，将其存入到sstorage中，每次请求之前做一次对比，如果storage中存在，就不用请求，减轻服务器的压力。
    evtInpFocus: function() {
      this.hotWordStatus = false;
      this.keyWordStatus = true;
      clearTimeout(this.timer);
        // 获取焦点时候请求热搜词列表
        this.$http({
          url: './static/result.json',
          method: 'get'
        }).then((res) => {
          this.keyWordLists = res.body.results;
        }).catch((err) => {
          console.log(err);
        })
    },
    evtInpBlur: function() {
      this.keyWordStatus = false;
      this.timer = setTimeout(() => {
        this.hotWordStatus = true;
      }, 200)
    },
    evtHeaderEnter: function(menuType) {
      clearTimeout(this.anotherTimer)
      if (menuType) {
        this.currentSales = this[menuType];
      }
      this.headerStatus = true;
    },
    evtHeaderLeave: function() {
      this.anotherTimer = setTimeout(() => {
        this.headerStatus = false;
      }, 300)
    }
  }
}
</script>
<style lang="less" scoped>
@color: #ff6700;
#top-header {
    width: 100%;
    height: 100px;
    position: relative;
}
.container {
    position: relative;
    width: 1226px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.icon-mi {
    display: inline-block;
    width: 55px;
    height: 55px;
    background: url('../assets/icon-mi.png') no-repeat;
    background-size: 100% 100%;
}
.pic-gif {
    display: inline-block;
    width: 163px;
    height: 66px;
    background: url('../assets/win.gif') no-repeat;
    background-size: 100% 100%;
    margin-left: 10px;
}
.navs {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.nav-item {
    padding: 26px 10px 38px;
    text-decoration: none;
    color: #333;
    font-size: 16px;
    &:hover {
        color: @color;
    }
}
.header-search {
    width: 296px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.search-form {
    width: 296px;
    height: 50px;
    margin-top: 26px;
    position: relative;
    .search-text {
        position: absolute;
        left: 0;
        top: 0;
        width: 223px;
        height: 48px;
        border: 1px solid #e0e0e0;
        outline: 0;
        font-size: 14px;
        padding: 0 10px;
        line-height: 48px;
        transition: all 0.3s ease;
    }
    .search-btn {
        position: absolute;
        width: 51px;
        height: 48px;
        border: 1px solid #e0e0e0;
        outline: 0;
        right: 0;
        top: 0;
        padding: 0;
        border-left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s ease;
        .search-icon {
            display: block;
            width: 20px;
            height: 20px;
            background: url('../assets/icon-search.png') no-repeat;
            background-size: 100% 100%;
            transition: all 0.5s ease;
        }
        &:hover {
            background: @color;
            .search-icon {
                background: url('../assets/icon-search-white.png') no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    // 使用less语法，在hover的时候可以动态改变样式
    &:hover {
        .search-btn,
        .search-text {
            border-color: #b0b0b0;
        }
    }
}
.search-hot-words {
    position: absolute;
    top: 16px;
    right: 75px;
    z-index: 2;
    .words {
        padding: 2px;
        background: #eee;
        color: #757575;
        font-size: 12px;
        text-decoration: none;
        transition: all 0.5s ease;
        &:hover {
            color: #fff;
            background: @color;
        }
    }
}
.keyword-list {
    position: absolute;
    width: 243px;
    left: 0;
    top: 50px;
    border: 1px solid @color;
    border-top: 0;
    font-size: 10px;
    z-index: 12;
    a {
        text-decoration: none;
        display: block;
        color: #424242;
        background: #fff;
        &:hover {
            background: #fafafa;
        }
    }
    .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        .item-price {
            color: #b0b0b0;
        }
    }
}
//  获取焦点时候，input border变色的状态
.active {
    border-color: @color !important;
}
.header-menu {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 5px #ccc;
    z-index: 12;
}
.menus {
    list-style: none;
    margin: 0;
    padding: 30px 0 30px 10px;
}
.menus-item {
    float: left;
}
.menus-item-pic-link {
    display: block;
    padding: 0 30px;
    border-right: 1px solid #ccc;
}
.menus-item-pic {
    width: 100%;
    width: 160px;
    height: 110px;
}
.menus-item-title {
    width: 100%;
    height: 16px;
    margin-top: 16px;
    font-size: 12px;
    text-align: center;
    .menus-item-title-link {
        text-decoration: none;
        color: #000;
    }
}
.menus-item-price {
    width: 100%;
    height: 14px;
    margin-top: 10px;
    font-size: 10px;
    text-align: center;
    color: @color;
}
.menus-item:last-child .menus-item-pic-link {
    border-right: 0;
}
// 动画类名
.fade-enter,
.fade-leave-to {
    opacity: 0;
    height: 0;
}
.fade-enter-to,
.fade-leave {
    height: 230px;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
</style>
