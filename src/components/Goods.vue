<template>
<div class="goods">
  <div class="container">
    <!-- 智能硬件组件 -->
    <goodsHardWare></goodsHardWare>
    <!-- 结构完全相同的，就创建一个goodsComponent组件，遍历一下即可 -->
    <!-- 每一个goodsComponent的主要数据来源是这个遍历的item，里边包含着title，nav，leftgoods的图片，以及每个nav对应的商品列表，这是一个大的数据源 -->
    <goodsComponent v-for="(item,index) in goodsData" :key="index" :componentGoodsData="item"></goodsComponent>
    <!-- 与明星产品组件一样，所以直接使用那个组件，只不过是标题和轮播部分商品列表不一致 -->
    <recommendComponent :title="starGoodsTitle" :starGoods="starGoodsList"></recommendComponent>
    <!-- 热评产品 -->
    <hotRemark></hotRemark>
    <!-- 内容区组件  一个头部+四个轮播部分，每一部分都是一个轮播图，所以把轮播图当单独提出来，当做一个组件 -->
    <goodsContent></goodsContent>
    <!-- 视频组件部分 -->
    <videoComponent></videoComponent>
  </div>
</div>
</template>
<script>
import goodsHardWare from './commonVue/GoodsHardWare.vue'
import goodsComponent from './commonVue/GoodsComponent.vue'
import recommendComponent from '../components/StarGoods.vue'
import hotRemark from './commonVue/HotRemark.vue'
import goodsContent from './commonVue/GoodsContent.vue'
import videoComponent from './commonVue/VideoComponent.vue'
export default {
  name: "goods",
  components: {
    goodsHardWare,
    goodsComponent,
    recommendComponent,
    hotRemark,
    goodsContent,
    videoComponent
  },
  data: function data() {
    return {
      starGoodsTitle: '为你推荐',
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
      ],
      goodsData: {
        match: {
          title: '搭配',
          nav: [{
              name: '热门',
              type: 'hot',
              linkUrl: '//list.mi.com/dapei'
            },
            {
              name: '耳机音响',
              type: 'earphone',
              linkUrl: '//list.mi.com/17'
            },
            {
              name: '电源',
              type: 'power',
              linkUrl: '//list.mi.com/11'

            },
            {
              name: '电池储存卡',
              type: 'battery',
              linkUrl: '//list.mi.com/135'
            }
          ],
          leftGoods: [{
              sourceUrl: '//www.mi.com/mj-powerstrip/',
              imgUrl: '//i3.mifile.cn/a4/xmad_14930201530354_orlGH.jpg'
            },
            {
              sourceUrl: '//www.mi.com/battery20000/',
              imgUrl: '//i3.mifile.cn/a4/xmad_14897335714698_hsIrY.jpg'
            },
          ],
          hot: [{
              sourceUrl: '//item.mi.com/1163900023.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150',
              title: '小米运动蓝牙耳机',
              price: '149',
              rank: '5359人评价',
              review: '音质确实没有线的好，两个头略大，可以换歌，挺方便',
              author: ' 来自于 827707413 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1164900027.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1482816047.72829695.jpg?width=150&height=150',
              title: '20000mAh小米移动电源2',
              price: '149',
              rank: '1.1万人评价',
              review: '好，充电速度快。',
              author: ' 来自于 202089166 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1164900021.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1481269289.59498154.jpg?width=150&height=150',
              title: '小米移动电源10000mAh高配版',
              price: '149',
              rank: '5165人评价',
              review: '很好、漂亮',
              author: ' 来自于 1594430257 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1165100001.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1482321199.12589253.jpg?width=150&height=150',
              title: '  小米活塞耳机 清新版  ',
              price: '29',
              rank: '2.9万人评价',
              review: '音质清晰，戴着舒适，喜欢！',
              author: ' 来自于 831429132 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1165200042.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1483066190.58189536.jpg?width=150&height=150',
              title: '  小米网络音响  ',
              price: '399',
              rank: '4610人评价',
              review: '颜色是喜庆的中国红，音质好的，连接快。',
              author: ' 来自于 128967717 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1163700019.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1478248721.42297795.jpg?width=150&height=150',
              title: '小米蓝牙耳机青春版',
              price: '59',
              rank: '2万人评价',
              review: '耳机还可以，是自己喜欢的风格。但有一点带上后很松老掉...',
              author: ' 来自于 1249120145 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1164300015.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1478510064.36397738.jpg?width=150&height=150',
              title: '小米圈铁耳机Pro',
              price: '149',
              rank: '1.4万人评价',
              review: '当我评价的时候它已经丢了   被我忘到大板车上了',
              author: ' 来自于 250536459 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1154300036.html',
              imgUrl: '//i2.mifile.cn/a1/T1F5K_BjVv1RXrhCrK.jpg?width=80&height=80',
              title: '小米小钢炮蓝牙音箱2 白色',
              price: '129'
            },
          ],
          earphone: [{
              sourceUrl: '//www.mi.com/headphone2/',
              imgUrl: '//i1.mifile.cn/a1/pms_1482301662.61336109!220x220.jpg',
              title: '小米头戴式耳机 轻松版',
              price: '199',
              rank: '1265人评价',
              review: '小米棒棒哒，就是出库的速度能不能快点。',
              author: '来自于 May.be" 的评价'
            },
            {
              sourceUrl: '//item.mi.com/1161800009.html',
              imgUrl: '//i1.mifile.cn/a1/T1SkV_BCd_1RXrhCrK!220x220.jpg',
              title: '小米胶囊耳机',
              price: '69',
              rank: '3.3万人评价',
              review: '哎呀，差评差评，双十一物流还那么快，简直控制不住寄几...',
              author: ' 来自于 隔夜的温柔 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/earphonepro/',
              imgUrl: '//i1.mifile.cn/a1/pms_1478510064.36397738!220x220.jpg',
              title: '小米圈铁耳机Pro',
              price: '149',
              rank: '1.4万人评价',
              review: '一杯浊酒一行诗，生不过一人痴；客服妹子，可否同渡余生',
              author: ' 来自于 1239747760 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/littleaudio/',
              imgUrl: '//i1.mifile.cn/a1/T1LqYgBCWv1RXrhCrK!220x220.jpg',
              title: '小米随身蓝牙音箱',
              price: '69',
              rank: '1.6万人评价',
              review: '真的好迷你啊～ 跟一个小豆饼似得。 音质还不错，手感...',
              author: ' 来自于 Greenbaby 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/yinxiang/',
              imgUrl: '//i1.mifile.cn/a1/T1Tfd_BjAv1RXrhCrK!220x220.jpg',
              title: '小米头戴式耳机 轻松版',
              price: '129',
              rank: '2.4万人评价',
              review: '超爱，客服妹子，可以请你跳支舞吗？',
              author: ' 来自于 赵至江 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/bluetooth-speaker/',
              imgUrl: '//i1.mifile.cn/a1/pms_1490865582.0815024!220x220.jpg',
              title: '小米方盒子蓝牙音箱2',
              price: '129',
              rank: '166人评价',
              review: '小米的产品就是好  每次都超乎我的想象音质太棒了',
              author: ' 来自于 ♀ヅ微笑ぺ♀℡ 的评价 ',
              discountType: 'new',
              discountContent: '新品'
            },
            {
              sourceUrl: '//item.mi.com/1164900006.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1481098202.44798045!220x220.jpg',
              title: 'ROIDMI音乐蓝牙车充',
              price: '99',
              rank: '1029人评价',
              review: '很好用',
              author: ' 来自于 胡晶晶 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/pocketaudio/',
              imgUrl: '//i1.mifile.cn/a1/T1MDK_B_YT1RXrhCrK!220x220.jpg',
              title: '小米蓝牙音箱',
              price: '199'
            }
          ],
          power: [{
              sourceUrl: '//www.mi.com/dianyuan5000/',
              imgUrl: '//i3.mifile.cn/a4/T1AcE_Bghv1RXrhCrK.jpg',
              title: '移动电源5000mAh',
              price: '49',
              rank: '10万人评价',
              review: '看到客服妹子给别人回复藏头诗，俺也想来一首，用王会娟...',
              author: ' 来自于 心想事成 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1153200007.html',
              imgUrl: '//i1.mifile.cn/a1/T1atV_BQLT1RXrhCrK!220x220.jpg',
              title: 'ZMI移动电源10000mAh',
              price: '99',
              rank: '4234人评价',
              review: '好看，挑了我喜欢的金色，赞，昨天上午下的单，今天一大...',
              author: ' 来自于 萍 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/batterytwins/',
              imgUrl: '//i1.mifile.cn/a1/pms_1481273468.72564539!220x220.jpg',
              title: '小米移动电源10000mAh高配版',
              price: '149',
              rank: '5172人评价',
              review: '不错充电宝很耐用简直神器，喜欢，听说客服美眉很热情真...',
              author: ' 来自于 1032709503 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/battery20000/',
              imgUrl: '//i1.mifile.cn/a1/pms_1482110626.95581660!220x220.jpg',
              title: '20000mAh小米移动电源2',
              price: '69',
              rank: '1.1万人评价',
              review: '品质就不用说了吧我其实是来和客服小帅哥表白的我很...',
              author: ' 来自于 其实我爱客服小帅哥 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/battery2/',
              imgUrl: '//i1.mifile.cn/a1/pms_1476688190.21955893!220x220.jpg',
              title: '10000mAh小米移动电源2',
              price: '79',
              rank: '3.5万人评价',
              review: '手感好，刚到手充电中。具米粉说，买一赠妹子，是不是真...',
              author: ' 来自于 飘渺林 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1154500022.html',
              imgUrl: '//i3.mifile.cn/a4/T1Ihd_BTCv1RXrhCrK.jpg',
              title: '小米插线板 5孔位',
              price: '39',
              rank: '2.6万人评价',
              review: '个人感觉这个小米五孔位插线板值得一买，物有所值。风格...',
              author: ' 来自于 chenxiaojunceo 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1162900044.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1469410847.29693876!220x220.jpg',
              title: 'USB Type-C充电套装',
              price: '15'
            },
            {
              sourceUrl: '//www.mi.com/chaxianban2/',
              imgUrl: '//i3.mifile.cn/a4/T13mDQBjCT1RXrhCrK.jpg',
              title: '小米智能插线板',
              price: '69'
            }
          ],
          battery: [{
              sourceUrl: '//item.mi.com/1164900007.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1481098212.65597197!220x220.jpg',
              title: 'ROIDMI音乐蓝牙车充',
              price: '99',
              rank: '1029人评价',
              review: '特别不错，声音很好听，希望陈芷琪长大了做我老婆，并拥...',
              author: ' 来自于 345143458 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1170100002.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1484034162.02747540!220x220.jpg',
              title: 'ZMI移动电源10000mAh',
              price: '49',
              rank: '5275人评价',
              review: '东西收到了，非常好，对于我们这些经常出去玩的人很方便...',
              author: ' 来自于 1209771862 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1154300033.html',
              imgUrl: '//i1.mifile.cn/a1/T1xxVTBghv1RXrhCrK!220x220.jpg',
              title: '彩虹5号电池（10粒装）',
              price: '9.9',
              rank: '9.6万人评价',
              review: '彩虹是我的微笑，最爱的还是你的打油诗～',
              author: ' 来自于 Se plaignent de ne 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1171600025.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1492658221.34618453!220x220.jpg',
              title: '睿米一分二点烟器',
              price: '79',
              rank: '10人评价',
              review: '质感很好！用一段时间再看看。',
              author: ' 来自于 87228056 的评价 ',
              discountType: 'new',
              discountContent: '新品'
            },
            {
              sourceUrl: '//www.mi.com/chongdianqi4kou/',
              imgUrl: '//i1.mifile.cn/a1/T1vFEjBbWT1RXrhCrK!220x220.jpg',
              title: '小米USB充电器（4口）',
              price: '69',
              rank: '1.3万人评价',
              review: '体型太大，挡住了我看客服妹子的视线',
              author: ' 来自于 骚米 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1171100008.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490163713.86453564!220x220.png',
              title: 'SanDisk 16GB存储卡',
              price: '98',
              rank: '244人评价',
              discountType: 'new',
              discountContent: '新品'
            },
            {
              sourceUrl: '//item.mi.com/1154400043.html',
              imgUrl: '//i1.mifile.cn/a1/T142A_BXEv1RXrhCrK!220x220.jpg',
              title: '小米车载充电器',
              price: '49',
              rank: '4.5万人评价',
              review: '特意用了半小时才来评价的，充电确实很快，小巧玲珑的很...',
              author: ' 来自于 乐乐 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1171100007.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490165991.05655005!220x220.png',
              title: 'SanDisk 16GB存储卡',
              price: '49.9'
            }
          ]

        },
        accessories: {
          title: '配件',
          nav: [{
              name: '热门',
              type: 'hot',
              linkUrl: '//list.mi.com/pjrm'
            },
            {
              name: '保护套',
              type: 'protect',
              linkUrl: '//list.mi.com/17'
            },
            {
              name: '贴膜',
              type: 'tiemo',
              linkUrl: '//list.mi.com/9'

            },
            {
              name: '其他配件',
              type: 'others',
              linkUrl: '//list.mi.com/others'
            }
          ],
          leftGoods: [{
              sourceUrl: '//list.mi.com/30',
              imgUrl: 'http://i3.mifile.cn/a4/0ff2c84c-d0e6-4232-b0fb-2cebefd1a207'
            },
            {
              sourceUrl: '//www.mi.com/bluetooth-earphone/',
              imgUrl: '//i3.mifile.cn/a4/xmad_14917439688152_WfFXu.jpg'
            },
          ],
          hot: [{
              sourceUrl: '//item.mi.com/1170500017.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1488522399.17728020.jpg?width=150&height=150',
              title: '红米4X 标准高透贴膜',
              price: '19',
              rank: '2222人评价',
              review: '清晰好用，在小米商城买手机送的！',
              author: ' 来自于 28574471 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1153900007.html',
              imgUrl: '//i2.mifile.cn/a1/T1XybgBjhT1RXrhCrK.jpg?width=150&height=150',
              title: '  小米手机4c 小米4c 智能唤醒翻盖保护套  ',
              price: '29',
              rank: '2.4万人评价',
              review: '还行就是加上运费性价比不高啊',
              author: ' 来自于 49307341 的评价 ',
              discountType: 'discount',
              discountContent: '享6折',
              oldPrice: '49'
            },
            {
              sourceUrl: '//item.mi.com/1164400025.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1487742227.27595029.jpg?width=150&height=150',
              title: '  红米NOTE 4X 红米note4X（3GB+32GB）标准高透贴膜  ',
              price: '19',
              rank: '5448人评价',
              review: '不错，膜沾得很紧，也很透。',
              author: ' 来自于 26790798 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1170500006.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1486980879.11199962.jpg?width=150&height=150',
              title: '红米note4X（3GB+32GB）高透软胶保护套',
              price: '19',
              rank: '2283人评价',
              review: '与手机很贴合，不错，喜欢',
              author: ' 来自于 304220977 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1165000026.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1487839278.99934443.jpg?width=150&height=150',
              title: '小米支架式自拍杆',
              price: '89',
              rank: '1003人评价',
              review: '很喜欢，拍大片就靠它了',
              author: ' 来自于 97167997 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1162800007.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1468287589.40786199.jpg?width=150&height=150',
              title: '米家随身风扇',
              price: '19.9',
              rank: '1.3万人评价',
              review: '好看好用夏天出门神器',
              author: ' 来自于 176303215 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1162000043.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1482221011.26064844.jpg?width=150&height=150',
              title: '  小米指环支架  ',
              price: '19',
              rank: '1万人评价',
              review: '工艺不错，为下一部小米新机准备的。',
              author: ' 来自于 1214812813 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1170500018.html',
              imgUrl: '//i2.mifile.cn/a1/pms_1488522435.98588934.jpg?width=80&height=80',
              title: '红米4X 高透软胶保护套 透明',
              price: '19'
            },
          ],
          protect: [{
              sourceUrl: '//item.mi.com/1170500018.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1488522435.98588934!220x220.jpg',
              title: '红米4X 高透软胶保护套 透明',
              price: '19',
              rank: '412人评价',
              review: '很好看，手感也好',
              author: ' 来自于 人人乐园 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1170500006.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1486980879.11199962!220x220.jpg',
              title: '红米Note 4X 高透软胶保护套 透明',
              price: '19',
              rank: '2281人评价',
              review: '还不错。如果包邮就好了。',
              author: ' 来自于 老刘 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1164600002.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1480580129.24255998!220x220.jpg',
              title: '小米Note  2 高透软胶保护套',
              price: '9.9',
              rank: '1592人评价',
              review: '官方原装的就是好。包得严实。要是能出个钢化膜就好了。...',
              author: ' 来自于 Andriy 的评价 ',
              discountType: 'discount',
              discountContent: '享6折',
              oldPrice: '19'
            },
            {
              sourceUrl: '//item.mi.com/1163900027.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1474888521.26868202!220x220.jpg',
              title: '小米5s Plus 智能翻盖保护套',
              price: '49',
              rank: '2861人评价',
              review: '手机保护套外形很好看，质量不错，就是顺丰快递真快，1...',
              author: ' 来自于 天涯 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1163500014.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1474888072.78155129!220x220.jpg',
              title: '小米5s 智能立显点阵式保护套',
              price: '79',
              rank: '3215人评价',
              review: '中国制造我们不支持靠谁支持！更希望你们走出去赢得更大...',
              author: ' 来自于 1180909633 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1161700021.html',
              imgUrl: '//i1.mifile.cn/a1/T1jWWjBsET1RXrhCrK!220x220.jpg',
              title: '小米Max 超薄肤感软胶保护套',
              price: '29',
              rank: '1.2万人评价',
              review: '等了一个多星期终于收到了',
              author: ' 来自于 oliver 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1163000012.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1478163840.49069197!220x220.jpg',
              title: '红米4高配版 超薄肤感软胶保护套',
              price: '19',
              rank: '692人评价',
              review: '还不错，就是价格高了点',
              author: ' 来自于 1063721202 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1163000019.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1472198624.61936711!220x220.jpg',
              title: '红米Note4 智能显示保护套',
              price: '39'
            }
          ],
          tiemo: [{
              sourceUrl: '//item.mi.com/1164400025.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1487742227.27595029!220x220.jpg',
              title: '红米Note 4X 标准高透贴膜',
              price: '19',
              rank: '5448人评价',
              review: '千元神器挺好用的，外观也时尚！就是送的原装膜孔位对不...',
              author: ' 来自于 咱们会幸福 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1154800022.html',
              imgUrl: '//i1.mifile.cn/a1/T1SSJ_B4E_1RXrhCrK!220x220.jpg',
              title: '小米平板2 标准高透贴膜',
              price: '29',
              rank: '1782人评价',
              review: '完全看不出来有膜的存在',
              author: ' 来自于 刘勇 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1160800006.html',
              imgUrl: '//i1.mifile.cn/a1/T1t2K_B4L_1RXrhCrK!220x220.jpg',
              title: '小米手机5 钢化玻璃贴膜',
              price: '29',
              rank: '4.7万人评价',
              review: '四轴防抖摄像头真不是盖的，如果客服小妹做模特激动手抖...',
              author: ' 来自于 窗外 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1163500025.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1482136335.88325212!220x220.jpg',
              title: '小米5s Plus 标准高透贴膜',
              price: '19',
              rank: '5233人评价',
              review: '同时付款的手机没有到，膜却先到了，客服妹子，你让我贴...',
              author: ' 来自于 李某某 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1163500024.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1482136306.7944683!220x220.jpg',
              title: '小米5s 标准高透贴膜',
              price: '19',
              rank: '5991人评价',
              review: '嗯贴歪了。',
              author: ' 来自于 U宇 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1162900025.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1482136277.01722149!220x220.jpg',
              title: '红米4高配版 标准高透贴膜',
              price: '9.9',
              rank: '2812人评价',
              review: '高大威猛，玉树临风，人见人爱，花见花开的的我拿到此神...',
              author: ' 来自于 看破红尘 的评价 ',
              discountType: 'discount',
              discountContent: '享6折',
              oldPrice: '19.9'
            },
            {
              sourceUrl: '//item.mi.com/1161600029.html',
              imgUrl: '//i1.mifile.cn/a1/T1y7JQBbCT1RXrhCrK!220x220.jpg',
              title: '小米Max 标准高透贴膜',
              price: '19',
              rank: '1.3万人评价',
              review: '手机屏幕都档不完，感觉一元钱一张都贵',
              author: ' 来自于 刘大洪 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1162500021.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1469787992.44385373!220x220.jpg',
              title: '红米Pro 标准高透贴膜',
              price: '9.9'
            }
          ],
          others: [{
              sourceUrl: '//item.mi.com/1164400032.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1478070969.5786053!220x220.jpg',
              title: '小米二合一数据线',
              price: '19',
              rank: '5698人评价',
              review: '品质不错。非常好用。只是感觉线稍微有点短。',
              author: ' 来自于 肖增厚 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1162000043.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1482221011.26064844!220x220.jpg',
              title: '小米指环支架 金色',
              price: '19',
              rank: '1万人评价',
              review: '不错',
              author: ' 来自于 李涵 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1170700024.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1488437436.38237666!220x220.jpg',
              title: '小米USB-C电源适配器（45W）',
              price: '99',
              rank: '161人评价',
              review: '很好…还可以充QC3.0的手机…',
              author: ' 来自于 Carson 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1154200029.html',
              imgUrl: '//i1.mifile.cn/a1/T11oW_B4dv1RXrhCrK!220x220.jpg',
              title: '蓝牙语音体感遥控器',
              price: '99',
              rank: '3462人评价',
              review: '很不错，外观基本没有变化，操作简单易用，还有就是电源...',
              author: ' 来自于 姚霖 的评价 '
            },
            {
              sourceUrl: '//www.mi.com/mouse/',
              imgUrl: '//i1.mifile.cn/a1/pms_1488533926.06453673!220x220.jpg',
              title: '小米便携鼠标',
              price: '99',
              rank: '6856人评价',
              review: '第一次召唤客服妹子了，有点小激动，',
              author: '  来自于 喜欢的人总是万般好 的评价  '
            },
            {
              sourceUrl: '//item.mi.com/1163000011.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1469523170.25518983!220x220.jpg',
              title: 'USB-C至HDMI多功能转接器',
              price: '149',
              rank: '1270人评价',
              review: '暂时只有放在这里堆灰了。',
              author: ' 来自于 Poppy、ing 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1162000038.html',
              imgUrl: '//i1.mifile.cn/a1/T1xLxQBgVT1RXrhCrK!220x220.jpg',
              title: 'USB Type-C 转接头',
              price: '5',
              rank: '6万人评价',
              review: '东西很好，包装也很好，服务态度极好，很满意，客服妹纸...',
              author: ' 来自于 阿弟哟 的评价 '
            },
            {
              sourceUrl: '//item.mi.com/1164700050.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1480066629.77799920!220x220.jpg',
              title: '小米二合一数据线100cm',
              price: '14.9'
            }
          ]

        },
        around: {
          title: '周边',
          nav: [{
              name: '热门',
              type: 'hot',
              linkUrl: '//list.mi.com/zhoubian'
            },
            {
              name: '服装',
              type: 'clothes',
              linkUrl: '//list.mi.com/22'
            },
            {
              name: '米兔',
              type: 'mitu',
              linkUrl: 'http://mitu.mi.com/'

            },
            {
              name: '生活周边',
              type: 'life',
              linkUrl: '//list.mi.com/20'
            },
            {
              name: '箱包',
              type: 'bags',
              linkUrl: '//list.mi.com/23'
            }
          ],
          leftGoods: [{
              sourceUrl: '//item.mi.com/1171700008.html',
              imgUrl: '//i3.mifile.cn/a4/xmad_14931820468436_uZfzY.jpg'
            },
            {
              sourceUrl: '//www.mi.com/ts-sunglasses/',
              imgUrl: '//i3.mifile.cn/a4/xmad_1493109150882_opGFm.jpg'
            },
          ],
          hot: [{
              sourceUrl: '//www.mi.com/mj-smartshoes/',
              imgUrl: '//i1.mifile.cn/a1/pms_1490949492.24196486!220x220.jpg',
              title: '米家运动鞋(智能版) 男款',
              price: '249',
              rank: '3877人评价',
              review: '鞋子超好啊……很轻，穿着很舒服。跑步时减震效果不错，...',
              author: ' 来自于 打呼的蚂蚁 的评价 ',
              discountType: 'new',
              discountContent: '新品'
            },
            {
              sourceUrl: '//item.mi.com/1164700020.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1479972928.16946623!220x220.jpg',
              title: '最生活浴巾·青春系列',
              price: '99',
              rank: '1057人评价',
              review: '狠厚，感觉狠适合小盆友做浴巾',
              author: ' 来自于 迷矢自己 的评价 ',
            },
            {
              sourceUrl: '//www.mi.com/pillowZ1/',
              imgUrl: '//i1.mifile.cn/a1/pms_1472710764.55986027!220x220.jpg',
              title: '8H标准乳胶枕',
              price: '149',
              rank: '5170人评价',
              review: '绝对高级的样子。比想象的要好',
              author: ' 来自于 周忠庆 的评价 ',
              discountType: 'discount',
              discountContent: '享9.4折',
              oldPrice: '159'
            },
            {
              sourceUrl: '//item.mi.com/1170200014.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1486535960.91272690!220x220.jpg',
              title: '小米简约头层小牛皮钱包',
              price: '129',
              rank: '1806人评价',
              review: '小妹钱包交给你保管好吗',
              author: ' 来自于 单身老爸 的评价 ',
            },
            {
              sourceUrl: '//www.mi.com/gelpen/',
              imgUrl: '//i1.mifile.cn/a1/pms_1469410489.30412121!220x220.jpg',
              title: '米家签字笔',
              price: '12.9',
              rank: '3.3万人评价',
              review: '我谦发新歌，字不好看也来凑个热闹',
              author: ' 来自于 ckj © 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1163500007.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1472711253.2453066!220x220.jpg',
              title: '8H护颈乳胶枕',
              price: '239',
              rank: '8695人评价',
              review: '割开，膨的一声。。。涨了！',
              author: ' 来自于 明 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1164700048.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1481178479.88974286!220x220.jpg',
              title: '8H多功能护颈枕U1',
              price: '79',
              rank: '1958人评价',
              review: '不敢开包装了',
              author: ' 来自于 凯. 的评价 ',
            },
            {
              sourceUrl: '//www.mi.com/transformers/',
              imgUrl: '//i1.mifile.cn/a1/pms_1463971828.3961404!220x220.jpg',
              title: '变形金刚特别版声波',
              price: '169'
            },
          ],
          clothes: [{
              sourceUrl: '//item.mi.com/1170800047.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1489482572.28451512!220x220.jpg',
              title: '米兔图案圆领短袖T恤 男款',
              price: '69',
              rank: '916人评价',
              review: '斑点是镜子上的。173，110斤买的L挺宽松的，可以...',
              author: ' 来自于 Johnson 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800050.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1489482713.59884063!220x220.jpg',
              title: 'MI LOGO图案圆领短袖T恤 男款',
              price: '69',
              rank: '720人评价',
              review: '身高177，体重88公斤，看了评价买滴xl，很好大爱...',
              author: ' 来自于 海的世纪 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800052.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1489482769.0537587!220x220.jpg',
              title: 'MIX图案圆领短袖T恤 男款',
              price: '69',
              rank: '363人评价',
              review: '身高168体重60kg，穿m号正好。',
              author: ' 来自于 天空 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800054.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1489482473.58444489!220x220.jpg',
              title: '小米功能短袖Polo衫 男款',
              price: '99',
              rank: '868人评价',
              review: '不错 很喜欢 176 120斤合身，肥瘦可以，长度略...',
              author: ' 来自于 李伟建 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800053.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490079731.77948210!220x220.png',
              title: '小米运动功能圆领短袖T恤 男款',
              price: '69',
              rank: '378人评价',
              review: '品质不错，穿起来很舒服，样子也很喜欢。只是不知道什么...',
              author: ' 来自于 239389295 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800041.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490698921.90768471!220x220.png',
              title: '小米V领短袖T恤 男款',
              price: '49',
              rank: '959人评价',
              review: '半天就到了，穿着很舒服，不错',
              author: ' 来自于 叶俊康 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800072.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490699618.39895727!220x220.png',
              title: '小米短袖T恤 科技艺术',
              price: '49',
              rank: '143人评价',
              review: '没有雷总亲爱信我超想哭的',
              author: ' 来自于 董凯 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800057.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490699313.83423551!220x220.png',
              title: '小米短袖T恤 米兔昆仑游 男款',
              price: '49'
            },
          ],
          mitu: [{
              sourceUrl: '//item.mi.com/1163200035.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1470896116.76978423!220x220.jpg',
              title: '60cm柔软米兔抱枕',
              price: '129',
              rank: '912人评价',
              review: '好可爱的米兔，如果带着米兔和客服妹子约会，能不能成功...',
              author: ' 来自于 黄秦源 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1162300004.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1466499316.73488636!220x220.jpg',
              title: '13cm皮质米兔挂饰',
              price: '49',
              rank: '295人评价',
              review: '东西不错，挺好的。。',
              author: ' 来自于 飞猫 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1162300005.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1468221391.115311!220x220.jpg',
              title: '米兔多功能护颈枕',
              price: '49',
              rank: '2859人评价',
              review: '舍友说我买了个女朋友回来。',
              author: ' 来自于 张利 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1163100008.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1470619266.15986000!220x220.jpg',
              title: '小米米兔音箱',
              price: '99',
              rank: '1623人评价',
              review: '不好意思把你的帽子摘了，我想看看客服妹子的神回复！',
              author: ' 来自于 随遇而安 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800064.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490699512.44292156!220x220.png',
              title: '小米短袖T恤 扑克脸',
              price: '49',
              rank: '261人评价',
              review: '已上身。。还不错的样子。客服姐姐我是不是长得好黑。。...',
              author: ' 来自于 香飘飘 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800069.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490699581.0642639!220x220.png',
              title: '小米短袖T恤 程序艺术',
              price: '49',
              rank: '214人评价',
              review: '穿着很舒服，比照片好看',
              author: ' 来自于 高锐 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800066.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490699545.98792281!220x220.png',
              title: '小米短袖T恤 吃豆人',
              price: '49',
              rank: '198人评价',
              review: '客服妹子你感觉小哥穿的这么样',
              author: ' 来自于 哇塞～姑娘 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1170800044.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1490699260.62076018!220x220.png',
              title: '小米V领短袖T恤 女款',
              price: '49'
            },
          ],
          life: [{
              sourceUrl: '//item.mi.com/1164600021.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1480477598.47892154!220x220.jpg',
              title: '米家中性笔专用笔芯',
              price: '6.9',
              rank: '5346人评价',
              review: '这包装，这质感，也是没SEI了',
              author: ' 来自于 大魏设计 的评价 ',
            },
            {
              sourceUrl: '//www.mi.com/flowermonitor/',
              imgUrl: '//i1.mifile.cn/a1/pms_1465724476.99494960!220x220.jpg',
              title: '花花草草监测仪',
              price: '49',
              rank: '5994人评价',
              review: '挺喜欢的挺满意的，之前养碰碰香老是挂掉，这回看能不能...',
              author: ' 来自于 joni5277 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1162800009.html',
              imgUrl: 'http://i3.mifile.cn/a4/5a28d943-ef5d-4920-a89a-7f1bce6c5b35',
              title: '米家LED随身灯 增强版',
              price: '19.9',
              rank: '3万人评价',
              review: '抠脚大妹，我从小米1用到2s，后来赶上苹果潮！时隔N...',
              author: ' 来自于 啊管 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1162800007.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1468287589.40786199!220x220.jpg',
              title: '米家随身风扇',
              price: '19.9',
              rank: '1.3万人评价',
              review: '客服妹子，来，今晚来我房间，我请你吃面。',
              author: ' 来自于 松大 的评价 ',
            },
            {
              sourceUrl: '//www.mi.com/transformers/',
              imgUrl: '//i1.mifile.cn/a1/pms_1463971828.3961404!220x220.jpg',
              title: '变形金刚特别版声波',
              price: '169',
              rank: '2587人评价',
              review: '绝了，和客服妹纸一样好(✪▽✪)',
              author: ' 来自于 Sounderxu 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1144600004.html',
              imgUrl: '//i3.mifile.cn/a4/T1yo_gBm_v1RXrhCrK.jpg',
              title: '金属鼠标垫 小号',
              price: '49',
              rank: '1.1万人评价',
              review: '万水千山总是情，客服妹子来神评。          ...',
              author: ' 来自于 朱雪怀 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1154900068.html',
              imgUrl: '//i1.mifile.cn/a1/T1eKdgB4xv1RXrhCrK!220x220.jpg',
              title: '小米电源线收纳盒',
              price: '49',
              rank: '3339人评价',
              review: '颜值超高 质量也没得说 米粉节都凑了一套寝室小套装啦',
              author: ' 来自于 panda 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1160400027.html',
              imgUrl: '//i1.mifile.cn/a1/T1fODjBsbT1RXrhCrK!220x220.jpg',
              title: '鼠标垫加大号',
              price: '19'
            },
          ],
          bags: [{
              sourceUrl: '//item.mi.com/1153700020.html',
              imgUrl: '//i3.mifile.cn/a4/T1RRCjBKJv1RXrhCrK.jpg',
              title: '90分旅行箱 20寸',
              price: '299',
              rank: '2.1万人评价',
              review: '美！实在是美！下个月要去泰国了，先买个箱子做准备，有...',
              author: ' 来自于 Bior 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1155100013.html',
              imgUrl: '//i3.mifile.cn/a4/T1TvJ_B_Kv1RXrhCrK.jpg',
              title: '90分旅行箱 24寸',
              price: '349',
              rank: '1.9万人评价',
              review: '质量很好，快递刚刚收到，我儿子马上拆箱子，哇的一声叫...',
              author: ' 来自于 清清饮水店 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1162500018.html',
              imgUrl: '//i1.mifile.cn/a1/pms_1469429887.76894954!220x220.jpg',
              title: '39',
              price: '90分轻户外旅行洗漱包',
              rank: '2749人评价',
              review: '小包包非常实用，内衬底部防水，超爱小米的一切商品，我...',
              author: ' 来自于 恒一广告—宋宝玉 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1153800038.html',
              imgUrl: '//i3.mifile.cn/a4/T1G9Y_BmCv1RXrhCrK.jpg',
              title: '90分便携收纳袋',
              price: '29',
              rank: '3649人评价',
              review: '为什么叫90分呢？是小米谦虚，我觉得应该叫100分！...',
              author: ' 来自于 吕昊 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1161100002.html',
              imgUrl: 'http://i3.mifile.cn/a4/6ddc1df6-ce8e-4cb5-a26a-b5ef80f1adf7',
              title: '小米经典商务双肩包',
              price: '99',
              rank: '1万人评价',
              review: '今天第一次背着它去上班！同事说你背个书包干嘛！我说我...',
              author: ' 来自于 爱在aip哪里 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1154400038.html',
              imgUrl: '//i1.mifile.cn/a1/T1a3DvB7hv1RXrhCrK!220x220.jpg',
              title: '小米极简都市双肩包',
              price: '149',
              rank: '2.2万人评价',
              review: '就是想客服妹子聊聊天，客服妹子文采很棒。能不能作首情...',
              author: ' 来自于 耿安兵 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1161200013.html',
              imgUrl: '//i1.mifile.cn/a1/T1FtKgBvZv1RXrhCrK!220x220.jpg',
              title: '小米多功能都市休闲胸包',
              price: '69',
              rank: '2.4万人评价',
              review: '东西和质量不错，听说买东西客服妹子会出来？',
              author: ' 来自于 Mr.wang 的评价 ',
            },
            {
              sourceUrl: '//item.mi.com/1153300025.html',
              imgUrl: '//i1.mifile.cn/a1/T1tzL_BjYT1RXrhCrK!220x220.jpg',
              title: '学院风简约双肩包',
              price: '59',
            }
          ]

        }
      }
    }
  },
  created: function created() {
    //do something after creating vue instance
    console.log(this.goodsData);

  }
}
</script>
<style lang="less" scoped>
.goods {
    width: 100%;
    height: auto;
    background: #f5f5f5;
    padding-top: 60px;
    .container {
        width: 1226px;
        margin: 0 auto;
    }
}
</style>
