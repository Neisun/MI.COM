<template>
<div class="infoFooter">
  <div class="container">
    <!-- 服务部分 -->
    <div class="footer-service">
      <a :href="n.sourceUrl" class="item" target="_blank" v-for="n in serviceNav">
        <i class="fa icon" :class="'fa-'+n.type"></i> {{n.title}}
      </a>
    </div>
    <!-- 一堆列表部分 -->
    <div class="footer-links">
      <dl class="col-links" v-for="(item,index) in linkNav" :key="index">
        <dt>{{item.title}}</dt>
        <dd v-for="n in item.list">
          <a :href="n.sourceUrl">{{n.title}}</a>
        </dd>
      </dl>
      <div class="col-contact">
        <h2 class="title">400-100-5678</h2>
        <p class="time">周一至周日 8:00-18:00</p>
        <p class="fee">（仅收市话费）</p>
        <a href="//www.mi.com/service/contact" target="_blank">
          <i class="fa fa-commenting"></i> 24小时在线客服
        </a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "infoFooter",
  data: function data() {
    return {
      serviceNav: [{
          sourceUrl: '//www.mi.com/static/fast/',
          title: '预约维修服务',
          type: 'cog'
        },
        {
          sourceUrl: '//www.mi.com/service/exchange#back',
          title: '7天无理由退货',
          type: 'circle'
        },
        {
          sourceUrl: '//www.mi.com/service/exchange#free',
          title: '15天免费换货',
          type: 'circle'
        },
        {
          sourceUrl: '//www.mi.com/service/exchange#mail',
          title: '满150元包邮',
          type: 'gift'
        },
        {
          sourceUrl: '//www.mi.com/static/maintainlocation/',
          title: '520余家售后网点',
          type: 'map-marker'
        }
      ],
      linkNav: {
        help: {
          title: '帮助中心',
          list: [{
              sourceUrl: '//www.mi.com/service/account/register/',
              title: '账户管理'
            },
            {
              sourceUrl: '//www.mi.com/service/buy/buytime/',
              title: '购物指南'
            },
            {
              sourceUrl: '//www.mi.com/service/order/sendprogress/',
              title: '订单操作'
            }
          ]
        },
        service: {
          title: '服务支持',
          list: [{
              sourceUrl: '//www.mi.com/service/exchange',
              title: '售后政策'
            },
            {
              sourceUrl: 'http://fuwu.mi.com/',
              title: '自助服务'
            },
            {
              sourceUrl: 'http://xiazai.mi.com/',
              title: '相关下载'
            }
          ]
        },
        merchants: {
          title: '线下门店',
          list: [{
              sourceUrl: 'href="//www.mi.com/c/xiaomizhijia/"',
              title: '小米之家'
            },
            {
              sourceUrl: '//www.mi.com/static/maintainlocation/',
              title: '服务网点'
            },
            {
              sourceUrl: '//www.mi.com/static/familyLocation/',
              title: '零售网点'
            }
          ]
        },
        about: {
          title: '关于小米',
          list: [{
              sourceUrl: '//www.mi.com/about',
              title: '了解小米'
            },
            {
              sourceUrl: 'http://hr.xiaomi.com/',
              title: '加入小米'
            },
            {
              sourceUrl: '//www.mi.com/about/contact',
              title: '联系我们'
            }
          ]
        },
        mi: {
          title: '关注我们',
          list: [{
              sourceUrl: 'http://weibo.com/xiaomishangcheng',
              title: '新浪微博'
            },
            {
              sourceUrl: 'http://xiaoqu.qq.com/mobile/share/index.html?url=http%3A%2F%2Fxiaoqu.qq.com%2Fmobile%2Fbarindex.html%3Fwebview%3D1%26type%3D%26source%3Dindex%26_lv%3D25741%26sid%3D%26_wv%3D5123%26_bid%3D128%26%23bid%3D10525%26from%3Dwechat',
              title: '小米部落'
            },
            {
              sourceUrl: '#J_modalWeixin',
              title: '官方微信'
            }
          ]
        },
        feature: {
          title: '特色服务',
          list: [{
              sourceUrl: '//order.mi.com/queue/f2code',
              title: 'F 码通道'
            },
            {
              sourceUrl: '//www.mi.com/giftcode/',
              title: '礼物码'
            },
            {
              sourceUrl: '//order.mi.com/misc/checkitem',
              title: '防伪查询'
            }
          ]
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
@baseColor: #ff6700;
.infoFooter {
    .container {
        width: 1226px;
        height: auto;
        margin: 0 auto;
        background: #fff;
        .footer-service {
            padding: 27px 0;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            justify-content: flex-start;
            flex-flow: row nowrap;
            align-items: center;
            .item {
                display: inline-block;
                width: 19.8%;
                height: 25px;
                border-right: 1px solid #e0e0e0;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                color: #616161;
                transition: all 0.3s ease;
                &:hover {
                    color: @baseColor;
                }
                &:last-child {
                    border: none;
                }
                .icon {
                    margin-right: 6px;
                    font-size: 24px;
                    line-height: 24px;
                    vertical-align: -4px;
                }
            }
        }
        .footer-links {
            padding: 40px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-flow: row nowrap;
            .col-links {
                width: 160px;
                height: 112px;
                dt {
                    font-size: 14px;
                    color: #424242;
                    margin: 0 0 26px;
                }
                dd {
                    margin: 16px 0 0;
                    font-size: 12px;
                    a {
                        color: #757575;
                        &:hover {
                            color: @baseColor;
                        }
                    }
                }
            }
            // 采用flex布局不能右浮动，所以分割线没和上边对齐，所以采用margin-left调整
            .col-contact {
                margin-left: 13px;
                width: 251px;
                height: 112px;
                border-left: 1px solid #e0e0e0;
                text-align: center;
                color: #616161;
                .title {
                    font-size: 22px;
                    line-height: 1;
                    color: @baseColor;
                    margin: 0 0 5px;
                }
                .fee,
                .time {
                    font-size: 12px;
                    margin: 0 0 5px;
                }
                .fee {
                    margin: 0 0 16px;
                }
                a {
                    display: block;
                    border: 1px solid @baseColor;
                    width: 118px;
                    height: 28px;
                    font-size: 12px;
                    line-height: 28px;
                    background: #fff;
                    margin: 0 auto;
                    color: @baseColor;
                    transition: all 0.3s ease;
                    &:hover {
                        background: @baseColor;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
