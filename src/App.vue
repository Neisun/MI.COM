<template>
<div id="app">
  <!-- 活动组件 -->
  <popular></popular>
  <!-- 工具条组件 -->
  <topbar></topbar>
  <!-- topHeader组件 -->
  <topHeader></topHeader>
  <!-- side+轮播图组件 -->
  <topBanner></topBanner>
  <!-- topSub组件 -->
  <topSub></topSub>
  <!-- 明星产品组件 -->
  <starGoods :title="starGoodsTitle" :starGoods="starGoodsList"></starGoods>
  <!-- 其他的关于产品方面的放在一个组件中 -->
  <goods></goods>
  <infoFooter></infoFooter>
  <miFooter></miFooter>
  <!-- 播放视频的组件 -->
  <playVideo></playVideo>

</div>
</template>
<script>
// 活动组件
import popular from './components/Popular.vue'
import topbar from './components/TopBar.vue'
import topHeader from './components/TopHeader.vue'
import topBanner from './components/TopBanner.vue'
import topSub from './components/TopSub.vue'
import starGoods from './components/StarGoods.vue'
import goods from './components/Goods.vue'
import playVideo from './components/commonVue/PlayVideo.vue'
import infoFooter from './components/InfoFooter.vue'
import miFooter from './components/MiFooter.vue'
export default {
  name: 'app',
  components: {
    popular,
    topbar,
    topHeader,
    topBanner,
    topSub,
    starGoods,
    goods,
    infoFooter,
    miFooter,
    playVideo
  },
  data: function() {
    return {
      starGoodsTitle: '小米明星单品',
      starGoodsList: [{
          name: '小米5s Plus',
          desc: '骁龙821旗舰处理器，轻薄金属机身',
          price: '2299元起',
          sourceUrl: '//item.mi.com/product/10000025.html',
          imgUrl: 'http://i3.mifile.cn/a4/e991f1e2-20d8-40c3-bf1d-012b122c986b'
        },
        {
          name: '红米Note4  4GB+64GB',
          desc: '4月10日-4月30日，领券减100元',
          price: '1399元',
          sourceUrl: '//item.mi.com/buyphone/note4/',
          imgUrl: 'http://i3.mifile.cn/a4/f24c0788-e6c2-4139-8f53-c0d4524eda09'
        },
        {
          name: '小米MIX',
          desc: '6.4英寸全面屏，全陶瓷机身',
          price: '3499元起',
          sourceUrl: '//item.mi.com/product/10000022.html',
          imgUrl: '//i3.mifile.cn/a4/xmad_14926862610682_UhkfS.png'
        },
        {
          name: '小米电视4A 49英寸 标准版',
          desc: '4月26日-5月2日，下单立减200元',
          price: '2599元',
          sourceUrl: '//item.mi.com/buy/mitv4a-49',
          imgUrl: '//i3.mifile.cn/a4/xmad_14926528960147_wJMsC.png'
        },
        {
          name: '小米笔记本',
          desc: '更轻更薄，像杂志一样随身携带',
          price: '3599元起',
          sourceUrl: '//item.mi.com/buymibook/air',
          imgUrl: 'http://i3.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d'
        },
        {
          name: '10000mAh小米移动电源2',
          desc: '双向快充，高密度锂聚合物电芯',
          price: '79元',
          sourceUrl: '//www.mi.com/battery2/',
          imgUrl: '//i3.mifile.cn/a4/xmad_14917453512947_AmXkT.png'
        },
        {
          name: '米家iHealth血压计',
          desc: '爸妈上手就会用的智能血压计',
          price: '399元',
          sourceUrl: '//www.mi.com/ihealth2/',
          imgUrl: 'http://i3.mifile.cn/a4/c8c48bbb-5c57-4fa6-9bea-7abd7f24a13a'
        },
        {
          name: '米家 LED 智能台灯',
          desc: '无可视频闪，亮度色温无级调节',
          price: '169元',
          sourceUrl: '//www.mi.com/mjsmartlamp/',
          imgUrl: 'http://i3.mifile.cn/a4/0906bec7-68ad-41e9-9617-fb6550725a85'
        },
        {
          name: '米家扫地机器人',
          desc: '智能路径规划，扫得干净扫得快',
          price: '1699元',
          sourceUrl: '//www.mi.com/roomrobot/',
          imgUrl: 'http://i3.mifile.cn/a4/848def18-47d9-4ca0-8822-c2ac61b83779'
        },
        {
          name: '小米路由器3',
          desc: '更快更强，不止四天线',
          price: '149元',
          sourceUrl: '//www.mi.com/miwifi3/',
          imgUrl: 'http://i3.mifile.cn/a4/de35852a-1be5-4ef5-846f-dcdd2efcfea6'
        }
      ]
    }
  }
}
</script>

<style>
html,
body {
  width: 100%;
}

#app {
  width: 100%;
}
</style>
