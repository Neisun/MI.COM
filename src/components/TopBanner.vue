<template>
<div class="top-banner clearfix">
  <!-- 左边商品导航 -->
  <!-- 有一个移出事件，鼠标移出商品列表隐藏 -->
  <!-- 这个位置的背景颜色是半透明的，给人一种随着轮播图改变，背景颜色发生改变的错觉，其实是轮播图的颜色+背景颜色出现的效果 -->
  <div class="site-category" @mouseleave="evtSideLeave">
    <div class="top-side-left">
      <ul class="side-left">
        <li class="side-item" v-for="(item,index) in sideItems" :key="index" @mouseenter="evtSideEnter(item.type)">
          <a :href="item.linkUrl" class="side-item-link">
            {{item.content}}
            <i class="fa fa-chevron-right iconfont"></i>
          </a>
        </li>
      </ul>
    </div>
    <!-- 商品列表部分 -->
    <transition name="fade">
      <div class="site-category-detail" v-show="goodsStatus">
        <!-- 这个位置的布局很值得思考，因为最多是有6个为一列，超出的会另起一列，所以就只能采取计算属性的方式，去计算一下 -->
        <!-- 此位置遍历的是ul，是整个列，把ul当做一个列 -->
        <ul class="category-items" v-for="(goods,index) in filterCurrGoods" :key="index">
          <li class="category-goods" v-for="(item,index) in goods" :key="index">
            <a :href="item.sourceUrl" class="goods-link">
              <img :src="item.imgUrl" :alt="item.name">
              <p class="text-name">{{item.name}}</p>
            </a>
            <!-- 有的商品会有一些tips，那就是根据字段有无控制其出现与否，这里的字段是buyStatus -->
            <a :href="item.buyUrl" class="goods-buy-link" v-show="item.buyStatus">选购</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
  <!-- 轮播图组件 -->
  <!-- 怎么才能写好一个组件，个人觉得应该在一个组件中把所有布局都写完了，然后在考虑率怎么提出来，提出来之后的数据该如何去传递 -->
  <slider :banners="this.banners"></slider>
</div>
</template>
<script>
import slider from './commonVue/Slide.vue'
export default {
  name: "topBanner",
  components: {
    slider
  },
  data: function data() {
    return {
      // 商品列表的状态
      goodsStatus: false,
      // 当前商品列表
      currGoods: [],
      sideItems: [{
          type: 'phones',
          content: '手机 电话卡',
          linkUrl: '//www.mi.com/buyphone/'
        },
        {
          type: 'computer',
          content: '笔记本 平板',
          linkUrl: '//www.mi.com/mibookair/'
        },
        {
          type: 'box',
          content: '电视 盒子',
          linkUrl: '//www.mi.com/buytv/'
        },
        {
          type: 'router',
          content: '路由器 智能硬件',
          linkUrl: '//www.mi.com/smart/'
        },
        {
          type: 'power',
          content: '移动电源 电池 插线板',
          linkUrl: '//list.mi.com/accessories/tag?id=dianyuancunchu'
        },
        {
          type: 'headset',
          content: '耳机 音响',
          linkUrl: '//list.mi.com/17'
        },
        {
          type: 'foil',
          content: '保护套 贴膜',
          linkUrl: '//list.mi.com/7'
        },
        {
          type: 'line',
          content: '线材 支架 存储卡',
          linkUrl: '//list.mi.com/1'
        },
        {
          type: 'bags',
          content: '箱包 服饰',
          linkUrl: '//list.mi.com/134'
        },
        {
          type: 'rabbit',
          content: '兔米 生活周边',
          linkUrl: '//list.mi.com/20'
        }
      ],
      banners: [{
          sourceUrl: 'http://a.union.mi.com/mua?c=17409.0002',
          imgUrl: '//i3.mifile.cn/a4/xmad_14925951803331_SvsmU.jpg'
        },
        {
          sourceUrl: '//item.mi.com/product/10000029.html',
          imgUrl: '//i3.mifile.cn/a4/xmad_14924228925772_WRpTQ.jpg'
        },
        {
          sourceUrl: '//www.mi.com/buytv/',
          imgUrl: '//i3.mifile.cn/a4/xmad_14917471739205_EgXRY.jpg'
        },
        {
          sourceUrl: '//item.mi.com/product/10000032.html',
          imgUrl: '//i3.mifile.cn/a4/xmad_14924956330586_bdlYL.jpg'
        },
        {
          sourceUrl: '//item.mi.com/buyphone/mi5s',
          imgUrl: '//i3.mifile.cn/a4/xmad_14889651711436_BTJYG.jpg'
        }
      ],
      phones: [{
          sourceUrl: '//www.mi.com/mi5/',
          buyUrl: '//item.mi.com/buyphone/mi5',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/list/mi5bar80.jpg?width=40&height=40',
          name: '小米手机5',
          buyStatus: true
        },
        {
          sourceUrl: '//www.mi.com/mimax/',
          buyUrl: '//item.mi.com/buyphone/mimax',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/maxbar80.jpg?width=40&height=40',
          name: '小米Max',
          buyStatus: true
        },
        {
          sourceUrl: '//www.mi.com/note3/pro/',
          buyUrl: '//item.mi.com/buyphone/note3',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/note3.jpg?width=40&height=40',
          name: '小米Note3',
          buyStatus: true
        },
        {
          sourceUrl: '//www.mi.com/hongmi3s/',
          buyUrl: '//item.mi.com/buyphone/hongmi3s',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/hm3s80x80.jpg?width=40&height=40',
          name: '红米手机3S',
          buyStatus: true
        },
        {
          sourceUrl: '//www.mi.com/redmipro/',
          buyUrl: '//item.mi.com/buyphone/redmipro/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hongmi3.jpg?width=40&height=40',
          name: '红米Pro',
          buyStatus: true
        },
        {
          sourceUrl: '//www.mi.com/hongmi3/',
          buyUrl: '//item.mi.com/buyphone/hongmi3/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/list/mi5bar80.jpg?width=40&height=40',
          name: '红米手机3',
          buyStatus: true
        },
        {
          sourceUrl: '//www.mi.com/hongmi3x/',
          buyUrl: '//item.mi.com/buyphone/hongmi3x',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/3X80.jpg?width=40&height=40',
          name: '红米手机3X',
          buyStatus: true
        },
        {
          sourceUrl: '//heyue.mi.com/',
          buyUrl: '//item.mi.com/buyphone/mi5',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/heyue.jpg?width=40&height=40',
          name: '合约机',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/compare/',
          buyUrl: '//item.mi.com/buyphone/mi5',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/compare.jpg?width=40&height=40',
          name: '对比手机',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mimobile/',
          buyUrl: '//item.mi.com/buyphone/mi5',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/mimobile.jpg?width=40&height=40',
          name: '小米移动 电话卡',
          buyStatus: false
        }
      ],
      computer: [{
          sourceUrl: '//www.mi.com/mibookair/',
          buyUrl: '//item.mi.com/buymibook/air',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=40&height=40',
          name: '小米笔记本Air',
          buyStatus: true
        },
        {
          sourceUrl: '//www.mi.com/mipad2/',
          buyUrl: '//item.mi.com/static/buymipad',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/pad2.png?width=40&height=40',
          name: '小米平板2',
          buyStatus: true
        },
        {
          sourceUrl: '//item.mi.com/1163000011.html',
          buyUrl: '//item.mi.com/buyphone/mi5',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/usbzjqggg80.jpg?width=40&height=40',
          name: 'USB-C转接器',
          buyStatus: false
        },
        {
          sourceUrl: '//item.mi.com/1163100001.html',
          buyUrl: '//item.mi.com/buyphone/mi5',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/neidanbao80.jpg?width=40&height=40',
          name: '小米笔记本内胆包',
          buyStatus: false
        }
      ],
      box: [{
          sourceUrl: '//www.mi.com/mitv3s/43/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/4380side.jpg?width=40&height=40',
          name: '小米电视 43英寸',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mitv3s/48/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/mitv3s48.jpg?width=40&height=40',
          name: '小米电视 48英寸',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mitv3/55/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tv3-55.jpg?width=40&height=40',
          name: '小米电视 55英寸',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mitv3/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tv60.jpg?width=40&height=40',
          name: '小米电视 60英寸',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mitv3s/65/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/6580side.jpg?width=40&height=40',
          name: '小米电视 65英寸',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mitv3/70/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tv70.png?width=40&height=40',
          name: '小米电视 70英寸',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/tvzj/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tvzj.jpg?width=40&height=40',
          name: '小米电视主机',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/hezi3s/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hezizengqiangban80side.jpg?width=40&height=40',
          name: '小米盒子3 增强版',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/hezi3/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hezis.jpg?width=40&height=40',
          name: '小米盒子3',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/hezimini/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hezimini.jpg?width=40&height=40',
          name: '小米盒子 mini',
          buyStatus: false
        },
        {
          sourceUrl: '//item.mi.com/1154100018.html',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/diyinpao.jpg?width=40&height=40',
          name: '小米低音炮',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/shb/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/shb.jpg?width=40&height=40',
          name: '蓝牙手柄',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/tag?id=yinxiang',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/zuheyinxiang80side.jpg?width=40&height=40',
          name: '家庭音响',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/tvboxpj',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/dianshipeijian.jpg?width=40&height=40',
          name: '电视盒子配件',
          buyStatus: false
        }
      ],
      router: [{
          sourceUrl: '//www.mi.com/mivr1c/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/vr8080.jpg?width=40&height=40',
          name: '小米VR眼镜玩具版',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/miuav/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/wurenji80.jpg?width=40&height=40',
          name: '小米无人机',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/miwifi3/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/luyouqi-80.jpg?width=40&height=40',
          name: '小米路由器',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/scooter/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/list/scooter.jpg?width=40&height=40',
          name: '九号平衡车',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/dianfanbao/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao-80.jpg?width=40&height=40',
          name: '米家压力IH电饭煲',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/kettle/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/shuihu80.jpg?width=40&height=40',
          name: '米家恒温电水壶',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mibicycle/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zxc80-80.jpg?width=40&height=40',
          name: '电助力折叠自行车',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/tag?id=shexiangji',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/xiaobai80.jpg?width=40&height=40',
          name: '摄像机',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/tag?id=jinghuaqilvxin',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/jinghuaqilvxin80.jpg?width=40&height=40',
          name: '净化器及滤芯',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/tag?id=water',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jingshuiqiandlvxin-80.jpg?width=40&height=40',
          name: '净水器及滤芯',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/tag?id=xueyaji',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/xueyaji-80.jpg?width=40&height=40',
          name: '血压计',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/tag?id=smartlamp',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhinengdeng-80.jpg?width=40&height=40',
          name: '智能灯',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mitu/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/gushiji80.jpg?width=40&height=40',
          name: '米兔智能故事机',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/smartsuit',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhinengjiatingtaozhuang-80.jpg?width=40&height=40',
          name: '智能家庭组合',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/shouhuan',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/shouhuan280.jpg?width=40&height=40',
          name: '手环及配件',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/scale/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/scale.jpg?width=40&height=40',
          name: '体重秤',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/mituwatch/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/shoubiao3-80.jpg?width=40&height=40',
          name: '米兔儿童电话手表',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/26?cfrom=search',
          imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/znyjdaohang.jpg?width=40&height=40',
          name: '全部智能硬件',
          buyStatus: false
        }
      ],
      power: [{
          sourceUrl: '//www.mi.com/dianyuan/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/dianyuan.jpg?width=40&height=40',
          name: '小米移动电源',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/tag?id=powerstrip',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/powerscript.jpg?width=40&height=40',
          name: '小米插线板',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/13',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/yidongdianyuan.jpg?width=40&height=40',
          name: '品牌移动电源',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/dyfj',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/dianyuanfujian.jpg?width=40&height=40',
          name: '移动电源附件',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/14',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/charger80.jpg?width=40&height=40',
          name: '电池',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/15',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/chongdianqi-80.jpg?width=40&height=40',
          name: '充电器',
          buyStatus: false
        },
        {
          sourceUrl: '//item.mi.com/1154300033.html',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/5Battery1.jpg?width=40&height=40',
          name: '彩虹5号电池',
          buyStatus: false
        },
        {
          sourceUrl: '//item.mi.com/1155000010.html',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/7Battery1.jpg?width=40&height=40',
          name: '彩虹7号电池',
          buyStatus: false
        }
      ],
      headset: [{
          sourceUrl: '//www.mi.com/headphone/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/headphone.jpg?width=40&height=40',
          name: '小米头戴式耳机',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/quantie/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/quantie.jpg?width=40&height=40',
          name: '小米圈铁耳机',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/capsuleearphone/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/jiaonang80.jpg?width=40&height=40',
          name: '小米胶囊耳机',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/huosai2/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jichuban-80.jpg?width=40&height=40',
          name: '小米活塞耳机 基础版',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/bluetooth-headset/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/bluetoothheadset.jpg?width=40&height=40',
          name: '小米蓝牙耳机',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/18',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/pinpai80.jpg?width=40&height=40',
          name: '品牌耳机',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/pocketaudio/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/pocketaudio.png?width=40&height=40',
          name: '小米蓝牙音箱',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/littleaudio/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/suishen-80.jpg?width=40&height=40',
          name: '小米随身蓝牙音箱',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/yinxiang/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/xiaogangpao2-hei-80.jpg?width=40&height=40',
          name: '小钢炮音箱 2',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/speaker/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/qignchungangpao-80.jpg?width=40&height=40',
          name: '小钢炮音箱 青春版',
          buyStatus: false
        },
        {
          sourceUrl: '//item.mi.com/1154400010.html',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/fanghezi.jpg?width=40&height=40',
          name: '小米方盒子音箱',
          buyStatus: false
        },
        {
          sourceUrl: '//item.mi.com/1163100008.html',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/mituyinx80.jpg?width=40&height=40',
          name: '小米米兔音箱',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/radio/',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/radio80side.jpg?width=40&height=40',
          name: '网络收音机',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/accessories/soundbox',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/pinpaiyinxiang.jpg?width=40&height=40',
          name: '品牌音箱',
          buyStatus: false
        }
      ],
      foil: [{
          sourceUrl: '//list.mi.com/9',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tiemo.jpg?width=40&height=40',
          name: '贴膜',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/8',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/baohu.jpg?width=40&height=40',
          name: '保护套/保护壳',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/2',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hougai.jpg?width=40&height=40',
          name: '后盖',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/3',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/tiezhi80.jpg?width=40&height=40',
          name: '背贴',
          buyStatus: false
        }
      ],
      line: [{
          sourceUrl: '//list.mi.com/16',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/xiancai.jpg?width=40&height=40',
          name: '线材',
          buyStatus: false
        },
        {
          sourceUrl: '//search.mi.com/search_%E8%87%AA%E6%8B%8D%E6%9D%86',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/zipaigan.jpg?width=40&height=40',
          name: '自拍杆',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/5',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/zhijia.jpg?width=40&height=40',
          name: '手机支架',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/27',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/cunchu.jpg?width=40&height=40',
          name: '存储卡',
          buyStatus: false
        }
      ],
      bags: [{
          sourceUrl: '//list.mi.com/23',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/xiangbao-80.jpg?width=40&height=40',
          name: '箱包',
          buyStatus: false
        },
        {
          sourceUrl: '//search.mi.com/search_%E6%97%85%E8%A1%8C%E7%AE%B1',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/lvxingxiang.jpg?width=40&height=40',
          name: '90分旅行箱',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/22',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/fuzhuang-80.jpg?width=40&height=40',
          name: '服饰',
          buyStatus: false
        }
      ],
      rabbit: [{
          sourceUrl: 'http://mitu.mi.com/',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/mitu-80.jpg?width=40&height=40',
          name: '米兔玩偶',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/59',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/shubiaodian-80.jpg?width=40&height=40',
          name: '鼠标垫',
          buyStatus: false
        },
        {
          sourceUrl: '//list.mi.com/24',
          imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/zhoubian1.jpg?width=40&height=40',
          name: '生活周边',
          buyStatus: false
        },
        {
          sourceUrl: '//www.mi.com/zazhi/index.html',
          imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zazhi-80-80.jpg?width=40&height=40',
          name: '《小米》杂志',
          buyStatus: false
        }
      ]
    }
  },
  methods: {
    evtSideEnter: function(menuType) {
      this.goodsStatus = true
      this.currGoods = this[menuType];
    },
    evtSideLeave: function() {
      this.goodsStatus = false
    }
  },
  computed: {
    // 这就算是最有技术含量和逻辑能力的部分了
    filterCurrGoods: function() {
      // 先给filerGoods一些空的数组，为什么是5个？因为从图来看最少是3个，所以为了保险起见，整5个
      let filterGoods = [
        [],
        [],
        [],
        [],
        []
      ]
      // forEach函数，ES6中的函数
      // 给数组用的
      // 例子
      // var users = [
      //  {
      //    firstname:'li',
      //    lastname:'lei'
      //  },
      //  {
      //    firstname:'han',
      //    lastname:'meimei'
      //  }
      //
      // ]
      // users.forEach(function (item,index,array) {
      //  item.fullname = item.firstname+item.lastname
      //
      // })
      this.currGoods.forEach(function(item, index) {
        let goodsIndex = Math.floor(index / 6)
        filterGoods[goodsIndex].push(item)
      })
      return filterGoods;
    }
  }
}
</script>
<style lang="less" scoped>
@baseColor: #ff6700;
.top-banner {
    position: relative;
    width: 1226px;
    margin: 0 auto;
    height: auto;
}
.site-category {
    position: absolute;
    left: 0;
    top: 0;
    width: 235px;
    padding: 20px 0;
    background: rgba(0, 0, 0, 0.6);
    height: auto;
    z-index: 11;
}
.side-left {
    margin: 0;
    padding: 0;
    width: 235px;
    height: 420px;
}
.side-item:hover {
    background: @baseColor;
}
.side-item-link {
    display: block;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #fff;
    position: relative;
    padding-left: 30px;
}
.iconfont {
    position: absolute;
    right: 20px;
    top: 10px;
    color: rgba(255,255,255,0.5);
    font-size: 16px;
}
.site-category-detail {
    position: absolute;
    left: 235px;
    top: 0;
    box-shadow: 3px 8px 16px rgba(0,0,0,0.18);
    border: 1px solid #e0e0e0;
    background: #fff;
    width: auto;
    display: flex;
    flex-flow: row nowrap;
    z-index: 11;
}
.category-items {
    width: auto;
    height: 460px;
    margin: 0;
    padding: 0;
    list-style: none;
    background: #fff;
}
.category-goods {
    width: 265px;
    height: 76.6px;
    padding: 0 20px;
    box-sizing: border-box;
    background: #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
}
.goods-link {
    width: 170px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
}
.text-name {
    padding-left: 10px;
    font-size: 14px;
}
.goods-buy-link {
    display: block;
    width: 58px;
    height: 22px;
    line-height: 24px;
    font-size: 12px;
    text-align: center;
    color: @baseColor;
    border: 1px solid @baseColor;
    &:hover {
        background: @baseColor;
        color: #fff;
    }
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    width: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
</style>
