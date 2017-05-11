<template>
<!-- 组件比较简单，无需过多讲解 -->
<div class="top-sub clearfix">
  <div class="sub-left">
    <ul class="chanels">
      <li class="chanel">
        <a href="//www.mi.com/compare/" class="chanel-link">
          <i class="fa fa-mobile subicon"></i>
          <p class="text">选购手机</p>
        </a>
      </li>
      <div class="line-vertical"></div>
      <li class="chanel">
        <a href="http://qiye.mi.com/" class="chanel-link">
          <i class="fa fa-gift subicon"></i>
          <p class="text">企业团购</p>
        </a>
      </li>
      <div class="line-vertical"></div>
      <li class="chanel">
        <a href="http://1.hd.mi.com" class="chanel-link">
          <i class="fa fa-money subicon"></i>
          <p class="text">一元活动</p>
        </a>
      </li>
      <div class="line-horizontal"></div>
      <div class="line-horizontal"></div>
      <div class="line-horizontal"></div>
      <li class="chanel">
        <a href="//www.mi.com/mimobile/" class="chanel-link">
          <i class="fa fa-credit-card subicon"></i>
          <p class="text">小米移动</p>
        </a>
      </li>
      <div class="line-vertical"></div>
      <li class="chanel">
        <a href="http://huanxin.mi.com" class="chanel-link">
          <i class="fa fa-recycle subicon"></i>
          <p class="text">以旧换新</p>
        </a>
      </li>
      <div class="line-vertical"></div>
      <li class="chanel">
        <a href="http://recharge.10046.mi.com/" class="chanel-link">
          <i class="fa fa-credit-card-alt subicon"></i>
          <p class="text">话费充值</p>
        </a>
      </li>
    </ul>
  </div>
  <ul class="sub-right">
    <li class="sub-right-item" v-for="(elem,index) in promoList" :key="index">
      <a :href="elem.sourceUrl" class="sub-right-link">
        <img :src="elem.imgUrl" alt="" class="sub-right-pic">
      </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "topSub",
  data: function data() {
    return {
      promoList: [{
          sourceUrl: 'http://1.hd.mi.com/',
          imgUrl: '//i3.mifile.cn/a4/xmad_1487844180216_JVvCK.jpg'
        },
        {
          sourceUrl: '//item.mi.com/buyphone/redmi4x',
          imgUrl: '//i3.mifile.cn/a4/xmad_14893930547143_gxyTV.jpg'
        },
        {
          sourceUrl: '//www.mi.com/mitv3s/48/',
          imgUrl: '//i3.mifile.cn/a4/xmad_1492396565228_dHUtY.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.top-sub {
    width: 1226px;
    margin: 14px auto 0;
}
.sub-left {
    float: left;
    width: 234px;
    height: 170px;
    background: #5f5750;
}
.chanels {
    padding: 3px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row wrap;
    .chanel {
        width: 75px;
        height: 82px;
        cursor: pointer;
        text-align: center;
        .chanel-link {
            display: block;
            .subicon {
                font-size: 20px;
                color: rgba(255,255,255,0.7);
                width: 75px;
                margin-top: 18px;
                margin-bottom: 5px;
            }
            .text {
                font-size: 10px;
                width: 75px;
                font-size: 12px;
                text-align: center;
                text-decoration: none;
                color: rgba(255,255,255,0.7);
            }
            &:hover {
                .subicon,
                .text {
                    color: #fff;
                }
            }
        }
    }
}
.line-vertical {
    width: 1px;
    height: 60px;
    background: rgba(255,255,255,0.1);
}
.line-horizontal {
    height: 1px;
    width: 60px;
    background: rgba(255,255,255,0.1);
    margin: 0 8px;
}
.sub-right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.sub-right-item {
    width: 316px;
    height: 170px;
    margin-left: 15px;
    transition: all 0.5s ease;
    &:hover {
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }
}
.sub-right-pic {
    width: 100%;
    height: 100%;
}
</style>
