<template>
<div id="footer">
  <div class="container clearfix">
    <div class="logo"></div>
    <!-- 链接和文本部分 -->
    <div class="info-text">
      <!-- 链接 -->
      <p class="sites">
        <template v-for="(n,index) in nav">
          <a :href="n.sourceUrl" target="_blank">{{n.title}}</a>
          <span v-show="index<nav.length-1" class="sep">|</span>
        </template>
      </p>
      <!-- 文本部分 -->
      <p class="text">
        ©
        <a href="//www.mi.com/">
            mi.com
          </a> 京ICP证110507号
        <a href="http://www.miitbeian.gov.cn/">
             京ICP备10046444号
           </a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134">
             京公网安备11010802020134号
           </a>
        <a href="//c1.mifile.cn/f/i/2013/cn/jingwangwen.jpg">
             京网文[2014]0059-0009号
           </a>
        <br> 违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
      </p>
    </div>
    <!-- 图标部分 -->
    <div class="info-links">
      <a :href="x.sourceUrl" v-for="x in logoNav" target="_blank">
        <img :src="x.imgUrl" alt="">
      </a>
    </div>
  </div>
  <p class="slogan">
    探索黑科技，小米为发烧而生！
  </p>
</div>
</template>
<script>
export default {
  name: "footer",
  data: function data() {
    return {
      nav: [{
          title: '小米商城',
          sourceUrl: '//www.mi.com/index.html'
        },
        {
          title: 'MIUI',
          sourceUrl: 'http://www.miui.com/'
        },
        {
          title: '米聊',
          sourceUrl: 'http://www.miliao.com/'
        },
        {
          title: '多看书城',
          sourceUrl: 'http://www.duokan.com/'
        },
        {
          title: '小米路由器',
          sourceUrl: 'http://www.miwifi.com/'
        },
        {
          title: '视频电话',
          sourceUrl: 'http://call.mi.com/'
        },
        {
          title: '小米天猫店',
          sourceUrl: 'http://xiaomi.tmall.com/'
        },
        {
          title: '小米淘宝直营店',
          sourceUrl: 'http://shop115048570.taobao.com'
        },
        {
          title: '小米网盟',
          sourceUrl: 'http://union.mi.com/'
        },
        {
          title: '小米移动',
          sourceUrl: '//www.mi.com/mimobile/'
        },
        {
          title: '隐私政策',
          sourceUrl: 'http://www.miui.com/res/doc/privacy/cn.html'
        },
        {
          title: 'Select Region',
          sourceUrl: '#J_modal-globalSites'
        }
      ],
      logoNav: [{
          sourceUrl: '//privacy.truste.com/privacy-seal/validation?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8&lang=zh-cn',
          imgUrl: '//c1.mifile.cn/f/i/17/site/truste.png'
        },
        {
          sourceUrl: '//search.szfw.org/cert/l/CX20120926001783002010',
          imgUrl: '//s01.mifile.cn/i/v-logo-2.png'
        },
        {
          sourceUrl: 'https://ss.knet.cn/verifyseal.dll?sn=e12033011010015771301369&ct=df&pa=461082',
          imgUrl: '//s01.mifile.cn/i/v-logo-1.png'
        },
        {
          sourceUrl: 'http://www.315online.com.cn/member/315140007.html',
          imgUrl: '//s01.mifile.cn/i/v-logo-3.png'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@baseColor: #ff6700;
#footer {
    padding: 30px 0;
    font-size: 12px;
    background: #fafafa;
    .container {
        width: 1226px;
        margin: 0 auto;
        .logo {
            width: 57px;
            height: 57px;
            margin-right: 10px;
            background: url('../assets/icon-mi.png') no-repeat center;
            float: left;
        }
        .info-text {
            float: left;
            color: #b0b0b0;
            .sites {
                line-height: 18px;
                a {
                    color: #757575;
                    &:hover {
                        color: @baseColor;
                    }
                }
                .sep {
                    margin: 0 1px;
                }
            }
            .text {
                line-height: 18px;
                a {
                    color: #b0b0b0;
                    &:hover {
                        color: @baseColor;
                    }
                }
            }
        }
        .info-links {
            float: right;
            height: 28px;
            margin: 4px 0 0;
            a {
                img {
                    width: auto;
                    height: 28px;
                    margin-right: 7px;
                }
            }
        }
    }
    // slogan标语
    .slogan {
        width: 290px;
        height: 19px;
        margin: 30px auto 0;
        text-align: center;
        font-family: "楷体";
        font-size: 20px;
        color: #b0b0b0;
    }
}
</style>
