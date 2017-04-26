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
    <!-- <div class="component-left">
      <ul class="component-left-list">
        <li class="component-left-list-item" v-for="(item,index) in match.rightGoods" :key="index">
          <a :href="item.sourceUrl" class="item-link" target="_blank">
            <img :src="item.imgUrl" alt="" class="item-pic">
          </a>
        </li>
      </ul>
    </div> -->
    <goodsLeft :goodsLeftData="componentGoodsData.rightGoods"></goodsLeft>
    <!-- <div class="component-right">
      <div class="">
        <ul class="component-right-list">
          <li class="component-right-list-item" v-for="(item,index) in match.hot" :key="index" v-if="index<match.hot.length-1">
            <div class="figure">
              <a :href="item.sourceUrl" class="figure-link" target="_blank">
                <img :src="item.imgUrl" alt="" class="figure-pic">
              </a>
            </div>
            <h3 class="title">
              <a :href="item.sourceUrl" class="title-link" target="_blank">
                {{item.title}}
              </a>
            </h3>
            <p class="price">
              <span class="num">
                {{item.price}}元
              </span>
              <span class="old-price" v-if="item.discountType==='discount'">
                89元
              </span>
            </p>
            <p class="rank">
              {{item.rank}}
            </p>
            <div class="review-wrapper">
              <a :href="item.sourceUrl" target="_blank">
                <span class="review">{{item.review}}</span>
                <span class="author">{{item.author}}</span>
              </a>
            </div>
            <div class="flag" :class="item.discountType">
              {{item.discountContent}}
            </div>
          </li>
          <ul class="component-right-list-item-small">
            <li class="component-right-list-last-item">
              <div class="figure">
                <a :href="lastGoods.sourceUrl" class="figure-link">
                  <img :src="lastGoods.imgUrl" alt="lastGoods.title" class="figure-pic">
                </a>
              </div>
              <h3 class="title">
                <a :href="lastGoods.sourceUrl" class="title-link">
                  {{lastGoods.title}}
                </a>
              </h3>
              <p class="price">
                <span class="num">
                  {{lastGoods.price}}元
                </span>
                <span class="old-price" v-if="lastGoods.discountType==='discount'">
                  {{lastGoods.oldPrice}}
                </span>
              </p>
            </li>
            <li class="component-right-list-item-more">
              <div class="figure-more">
                <a :href="linkActiveUrl" target="_blank">
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <a :href="linkActiveUrl" class="more-link" target="_blank">浏览更多<small>{{linkMoreText}}</small></a>
            </li>
          </ul>
        </ul>
      </div>
    </div> -->
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
      // match: {
      //   title: '搭配',
      //   nav: [{
      //       name: '热门',
      //       type: 'hot',
      //       linkUrl: '//list.mi.com/dapei'
      //     },
      //     {
      //       name: '耳机音响',
      //       type: 'earphone',
      //       linkUrl: '//list.mi.com/17'
      //     },
      //     {
      //       name: '电源',
      //       type: 'power',
      //       linkUrl: '//list.mi.com/11'
      //
      //     },
      //     {
      //       name: '电池储存卡',
      //       type: 'battery',
      //       linkUrl: '//list.mi.com/135'
      //     }
      //   ],
      //   rightGoods: [{
      //       sourceUrl: '//www.mi.com/mj-powerstrip/',
      //       imgUrl: '//i3.mifile.cn/a4/xmad_14930201530354_orlGH.jpg'
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/battery20000/',
      //       imgUrl: '//i3.mifile.cn/a4/xmad_14897335714698_hsIrY.jpg'
      //     },
      //   ],
      //   hot: [{
      //       sourceUrl: '//item.mi.com/1163900023.html',
      //       imgUrl: '//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150',
      //       title: '小米运动蓝牙耳机',
      //       price: '149',
      //       rank: '5359人评价',
      //       review: '音质确实没有线的好，两个头略大，可以换歌，挺方便',
      //       author: ' 来自于 827707413 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1164900027.html',
      //       imgUrl: '//i2.mifile.cn/a1/pms_1482816047.72829695.jpg?width=150&height=150',
      //       title: '20000mAh小米移动电源2',
      //       price: '149',
      //       rank: '1.1万人评价',
      //       review: '好，充电速度快。',
      //       author: ' 来自于 202089166 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1164900021.html',
      //       imgUrl: '//i2.mifile.cn/a1/pms_1481269289.59498154.jpg?width=150&height=150',
      //       title: '小米移动电源10000mAh高配版',
      //       price: '149',
      //       rank: '5165人评价',
      //       review: '很好、漂亮',
      //       author: ' 来自于 1594430257 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1165100001.html',
      //       imgUrl: '//i2.mifile.cn/a1/pms_1482321199.12589253.jpg?width=150&height=150',
      //       title: '  小米活塞耳机 清新版  ',
      //       price: '29',
      //       rank: '2.9万人评价',
      //       review: '音质清晰，戴着舒适，喜欢！',
      //       author: ' 来自于 831429132 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1165200042.html',
      //       imgUrl: '//i2.mifile.cn/a1/pms_1483066190.58189536.jpg?width=150&height=150',
      //       title: '  小米网络音响  ',
      //       price: '399',
      //       rank: '4610人评价',
      //       review: '颜色是喜庆的中国红，音质好的，连接快。',
      //       author: ' 来自于 128967717 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1163700019.html',
      //       imgUrl: '//i2.mifile.cn/a1/pms_1478248721.42297795.jpg?width=150&height=150',
      //       title: '小米蓝牙耳机青春版',
      //       price: '59',
      //       rank: '2万人评价',
      //       review: '耳机还可以，是自己喜欢的风格。但有一点带上后很松老掉...',
      //       author: ' 来自于 1249120145 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1164300015.html',
      //       imgUrl: '//i2.mifile.cn/a1/pms_1478510064.36397738.jpg?width=150&height=150',
      //       title: '小米圈铁耳机Pro',
      //       price: '149',
      //       rank: '1.4万人评价',
      //       review: '当我评价的时候它已经丢了   被我忘到大板车上了',
      //       author: ' 来自于 250536459 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1154300036.html',
      //       imgUrl: '//i2.mifile.cn/a1/T1F5K_BjVv1RXrhCrK.jpg?width=80&height=80',
      //       title: '小米小钢炮蓝牙音箱2 白色',
      //       price: '129'
      //     },
      //   ],
      //   earphone: [{
      //       sourceUrl: '//www.mi.com/headphone2/',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1482301662.61336109!220x220.jpg',
      //       title: '小米头戴式耳机 轻松版',
      //       price: '199',
      //       rank: '1265人评价',
      //       review: '小米棒棒哒，就是出库的速度能不能快点。',
      //       author: '来自于 May.be" 的评价'
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1161800009.html',
      //       imgUrl: '//i1.mifile.cn/a1/T1SkV_BCd_1RXrhCrK!220x220.jpg',
      //       title: '小米胶囊耳机',
      //       price: '69',
      //       rank: '3.3万人评价',
      //       review: '哎呀，差评差评，双十一物流还那么快，简直控制不住寄几...',
      //       author: ' 来自于 隔夜的温柔 的评价 '
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/earphonepro/',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1478510064.36397738!220x220.jpg',
      //       title: '小米圈铁耳机Pro',
      //       price: '149',
      //       rank: '1.4万人评价',
      //       review: '一杯浊酒一行诗，生不过一人痴；客服妹子，可否同渡余生',
      //       author: ' 来自于 1239747760 的评价 '
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/littleaudio/',
      //       imgUrl: '//i1.mifile.cn/a1/T1LqYgBCWv1RXrhCrK!220x220.jpg',
      //       title: '小米随身蓝牙音箱',
      //       price: '69',
      //       rank: '1.6万人评价',
      //       review: '真的好迷你啊～ 跟一个小豆饼似得。 音质还不错，手感...',
      //       author: ' 来自于 Greenbaby 的评价 '
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/yinxiang/',
      //       imgUrl: '//i1.mifile.cn/a1/T1Tfd_BjAv1RXrhCrK!220x220.jpg',
      //       title: '小米头戴式耳机 轻松版',
      //       price: '129',
      //       rank: '2.4万人评价',
      //       review: '超爱，客服妹子，可以请你跳支舞吗？',
      //       author: ' 来自于 赵至江 的评价 '
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/bluetooth-speaker/',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1490865582.0815024!220x220.jpg',
      //       title: '小米方盒子蓝牙音箱2',
      //       price: '129',
      //       rank: '166人评价',
      //       review: '小米的产品就是好  每次都超乎我的想象音质太棒了',
      //       author: ' 来自于 ♀ヅ微笑ぺ♀℡ 的评价 ',
      //       discountType: 'new',
      //       discountContent: '新品'
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1164900006.html',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1481098202.44798045!220x220.jpg',
      //       title: 'ROIDMI音乐蓝牙车充',
      //       price: '99',
      //       rank: '1029人评价',
      //       review: '很好用',
      //       author: ' 来自于 胡晶晶 的评价 '
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/pocketaudio/',
      //       imgUrl: '//i1.mifile.cn/a1/T1MDK_B_YT1RXrhCrK!220x220.jpg',
      //       title: '小米蓝牙音箱',
      //       price: '199'
      //     }
      //   ],
      //   power: [{
      //       sourceUrl: '//www.mi.com/dianyuan5000/',
      //       imgUrl: '//i3.mifile.cn/a4/T1AcE_Bghv1RXrhCrK.jpg',
      //       title: '移动电源5000mAh',
      //       price: '49',
      //       rank: '10万人评价',
      //       review: '看到客服妹子给别人回复藏头诗，俺也想来一首，用王会娟...',
      //       author: ' 来自于 心想事成 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1153200007.html',
      //       imgUrl: '//i1.mifile.cn/a1/T1atV_BQLT1RXrhCrK!220x220.jpg',
      //       title: 'ZMI移动电源10000mAh',
      //       price: '99',
      //       rank: '4234人评价',
      //       review: '好看，挑了我喜欢的金色，赞，昨天上午下的单，今天一大...',
      //       author: ' 来自于 萍 的评价 '
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/batterytwins/',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1481273468.72564539!220x220.jpg',
      //       title: '小米移动电源10000mAh高配版',
      //       price: '149',
      //       rank: '5172人评价',
      //       review: '不错充电宝很耐用简直神器，喜欢，听说客服美眉很热情真...',
      //       author: ' 来自于 1032709503 的评价 '
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/battery20000/',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1482110626.95581660!220x220.jpg',
      //       title: '20000mAh小米移动电源2',
      //       price: '69',
      //       rank: '1.1万人评价',
      //       review: '品质就不用说了吧我其实是来和客服小帅哥表白的我很...',
      //       author: ' 来自于 其实我爱客服小帅哥 的评价 '
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/battery2/',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1476688190.21955893!220x220.jpg',
      //       title: '10000mAh小米移动电源2',
      //       price: '79',
      //       rank: '3.5万人评价',
      //       review: '手感好，刚到手充电中。具米粉说，买一赠妹子，是不是真...',
      //       author: ' 来自于 飘渺林 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1154500022.html',
      //       imgUrl: '//i3.mifile.cn/a4/T1Ihd_BTCv1RXrhCrK.jpg',
      //       title: '小米插线板 5孔位',
      //       price: '39',
      //       rank: '2.6万人评价',
      //       review: '个人感觉这个小米五孔位插线板值得一买，物有所值。风格...',
      //       author: ' 来自于 chenxiaojunceo 的评价 ',
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1162900044.html',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1469410847.29693876!220x220.jpg',
      //       title: 'USB Type-C充电套装',
      //       price: '15'
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/chaxianban2/',
      //       imgUrl: '//i3.mifile.cn/a4/T13mDQBjCT1RXrhCrK.jpg',
      //       title: '小米智能插线板',
      //       price: '69'
      //     }
      //   ],
      //   battery: [{
      //       sourceUrl: '//item.mi.com/1164900007.html',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1481098212.65597197!220x220.jpg',
      //       title: 'ROIDMI音乐蓝牙车充',
      //       price: '99',
      //       rank: '1029人评价',
      //       review: '特别不错，声音很好听，希望陈芷琪长大了做我老婆，并拥...',
      //       author: ' 来自于 345143458 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1170100002.html',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1484034162.02747540!220x220.jpg',
      //       title: 'ZMI移动电源10000mAh',
      //       price: '49',
      //       rank: '5275人评价',
      //       review: '东西收到了，非常好，对于我们这些经常出去玩的人很方便...',
      //       author: ' 来自于 1209771862 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1154300033.html',
      //       imgUrl: '//i1.mifile.cn/a1/T1xxVTBghv1RXrhCrK!220x220.jpg',
      //       title: '彩虹5号电池（10粒装）',
      //       price: '9.9',
      //       rank: '9.6万人评价',
      //       review: '彩虹是我的微笑，最爱的还是你的打油诗～',
      //       author: ' 来自于 Se plaignent de ne 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1171600025.html',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1492658221.34618453!220x220.jpg',
      //       title: '睿米一分二点烟器',
      //       price: '79',
      //       rank: '10人评价',
      //       review: '质感很好！用一段时间再看看。',
      //       author: ' 来自于 87228056 的评价 ',
      //       discountType: 'new',
      //       discountContent: '新品'
      //     },
      //     {
      //       sourceUrl: '//www.mi.com/chongdianqi4kou/',
      //       imgUrl: '//i1.mifile.cn/a1/T1vFEjBbWT1RXrhCrK!220x220.jpg',
      //       title: '小米USB充电器（4口）',
      //       price: '69',
      //       rank: '1.3万人评价',
      //       review: '体型太大，挡住了我看客服妹子的视线',
      //       author: ' 来自于 骚米 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1171100008.html',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1490163713.86453564!220x220.png',
      //       title: 'SanDisk 16GB存储卡',
      //       price: '98',
      //       rank: '244人评价',
      //       discountType: 'new',
      //       discountContent: '新品'
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1154400043.html',
      //       imgUrl: '//i1.mifile.cn/a1/T142A_BXEv1RXrhCrK!220x220.jpg',
      //       title: '小米车载充电器',
      //       price: '49',
      //       rank: '4.5万人评价',
      //       review: '特意用了半小时才来评价的，充电确实很快，小巧玲珑的很...',
      //       author: ' 来自于 乐乐 的评价 '
      //     },
      //     {
      //       sourceUrl: '//item.mi.com/1171100007.html',
      //       imgUrl: '//i1.mifile.cn/a1/pms_1490165991.05655005!220x220.png',
      //       title: 'SanDisk 16GB存储卡',
      //       price: '49.9'
      //     }
      //   ]
      //
      // }
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
  // computed: {
  //   lastGoods: function() {
  //     if (this.match.hot[this.match.hot.length - 1]) {
  //       return this.match.hot[this.match.hot.length - 1]
  //     } else {
  //       return null;
  //     }
  //   }
  // },
  methods: {
    // evtEnterActive: function(type, text, url) {
    //   this.activeStatus = type
    //   this.linkMoreText = text
    //   this.linkActiveUrl = url
    // }
    changeHeaderLink:function (type, text, url) {
      // console.log(1);
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
