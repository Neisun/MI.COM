<template>
<div class="hot-remark">
  <div class="hot-remark-title">
    <h2 class="title">{{hotRemarkData.title}}</h2>
  </div>
  <div class="hot-remark-main">
    <div class="hot-remark-list">
      <!-- card组件 -->
      <card :cardData="item" v-for="(item,index) in hotRemarkData.hotRemarkList" :key="index"></card>
    </div>
  </div>
</div>
</template>
<script>
import card from '../commonVue/Card.vue'
export default {
  name: "hot-remark",
  components: {
    card
  },
  data: function data() {
    return {
      hotRemarkData: {
        title: '热评产品',
        hotRemarkList: [{
            sourceUrl: '//www.mi.com/littleaudio/',
            imgUrl: 'http://i3.mifile.cn/a4/bae79ac6-60d5-478d-90e7-ff1222764bd1',
            review: '超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是小米出的东西我都喜欢！那倒是因为那一句？？小米为发...',
            title: '小米随身蓝牙音箱',
            author:'随风',
            price: '69'
          },
          {
            sourceUrl: '//www.mi.com/dianfanbao/',
            imgUrl: 'http://i3.mifile.cn/a4/54e35fdd-bc68-4a89-bad7-c9c3bb2fc6fe',
            review: '包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...',
            title: '米家压力IH电饭煲',
            author:'风声鹤唳',
            price: '999'
          },
          {
            sourceUrl: '//www.mi.com/mimax/',
            imgUrl: 'http://i3.mifile.cn/a4/dc2b9fb7-5399-48cc-99d9-edea9fbfb9aa',
            review: '手机好用，反应快，价格适中，会常光顾，赞，五分好评！',
            title: '小米Max全网通版',
            author:'linlin19891117',
            price: '1299'
          },
          {
            sourceUrl: '//item.mi.com/1153700018.html',
            imgUrl: 'http://i3.mifile.cn/a4/62d44838-f464-4c11-887c-9168645ae797',
            review: '这箱子很好，外观漂亮，实用性强。很轻，有点软但不影响它的坚固。',
            title: '90分旅行箱 20寸',
            author:'逆鳞',
            price: '299'
          }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.hot-remark {
    width: 1226px;
    margin-top: 26px;
    .hot-remark-title {
        height: 58px;
        .title {
            margin: 0;
            font-size: 22px;
            font-weight: 200;
            line-height: 58px;
            color: #333;
        }
    }
    .hot-remark-main {
        .hot-remark-list {
            width: 1240px;
            height: 415px;
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            flex-flow: row nowrap;
            .card {
                .hot-remark-item {
                    position: relative;
                    width: 296px;
                    height: 415px;
                    margin-right: 14px;
                    margin-bottom: 14px;
                    background: #fff;
                    -webkit-transition: all 0.2s linear;
                    transition: all 0.2s linear;
                    .hot-remark-pic {
                        width: 296px;
                        height: 220px;
                        margin: 0 0 28px;
                        a {
                            display: block;
                            img {
                                width: 296px;
                                height: 220px;
                            }
                        }
                    }
                    .review {
                        height: 72px;
                        margin: 0 28px 22px;
                        font-size: 14px;
                        line-height: 24px;
                        font-weight: 400;
                        overflow: hidden;
                        a {
                            display: block;
                            color: #333;
                        }
                    }
                    .author {
                        position: relative;
                        height: 18px;
                        margin: 0 28px 8px;
                        padding: 0 10px 0 0;
                        font-size: 12px;
                        color: #b0b0b0;
                    }
                    .info {
                        margin: 0 30px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        .title {
                            display: inline-block;
                            margin: 0;
                            font-size: 14px;
                            font-weight: 400;
                            max-width: 170px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            _zoom: 1;
                            vertical-align: bottom;
                            color: #333;
                            a {
                                color: #333;

                            }
                        }
                        .sep {
                            color: #e0e0e0;
                            margin: 0 0.25em;
                            font-family: sans-serif;
                        }
                        .price {
                            display: inline;
                            margin: 0;
                            color: #ff6700;
                            font-size: 14px;
                            .num {}
                        }
                    }
                }
            }
        }
    }
}
</style>
