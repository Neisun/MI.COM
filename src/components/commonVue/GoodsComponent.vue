<template>
<div class="goods-component">
  <div class="component-hd">
    <h2 class="title">{{match.title}}</h2>
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-list-item" v-for="(item,index) in match.nav" :key="index" :class="{active:activeStatus===index}" @mouseenter="evtEnterActive(index)">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
  <div class="component-main">
    <div class="component-left">
      <ul class="component-left-list">
        <li class="component-left-list-item" v-for="(item,index) in match.rightGoods" :key="index">
          <a :href="item.sourceUrl" class="item-link" target="_blank">
            <img :src="item.imgUrl" alt="" class="item-pic">
          </a>
        </li>
      </ul>
    </div>
    <div class="component-right">
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
          <ul class="component-left-list-item-small">
            <li class="component-right-list-last-item" v-for="(item,index) in lastGoods" :key="elem.key">
              <div class="figure">
                <a :href="item.sourceUrl" class="figure-link">
                  <img :src="item.imgUrl" alt="item.title" class="figure-pic">
                </a>
              </div>
              <h3 class="title">
                <a :href="item.sourceUrl" class="title-link">
                  {{item.title}}
                </a>
              </h3>
              <p class="price">
                <span class="num">
                  {{item.price}}元
                </span>
                <span class="old-price" v-if="item.discountType==='discount'">
                  {{item.oldPrice}}
                </span>
              </p>
            </li>
            <li class="component-right-list-item-more">
              <div class="figure-more">
                <a href="#">
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <a href="#" class="more-link">浏览更多<small>热门</small></a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "goods-component",
  data: function data() {
    return {
      activeStatus: 0,
      match: {
        title: '搭配',
        nav: [{
            name: '热门',
            type:'hot'
          },
          {
            name: '耳机音响',
            type:'earphone'
          },
          {
            name: '电源',
            type:'power'
          },
          {
            name: '电池储存卡',
            type:'battery'
          }
        ],
        rightGoods: [
          {
            sourceUrl: '//www.mi.com/mj-powerstrip/',
            imgUrl: '//i3.mifile.cn/a4/xmad_14930201530354_orlGH.jpg'
          },
          {
            sourceUrl: '//www.mi.com/battery20000/',
            imgUrl: '//i3.mifile.cn/a4/xmad_14897335714698_hsIrY.jpg'
          },
        ],
        hot: [
          {
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
        ]
      }
    }
  },
  computed:{
    lastGoods:function () {
      if (match.hot[match.hot.length-1]) {
        return match.hot[match.hot.length-1]
      }else {
        return null;
      }
    }
  },
  methods: {
    evtEnterActive: function(key) {
      this.activeStatus = key
    }
  }
}
</script>
<style lang="less" scoped>
.goods-component {
    height: 686px;
    margin-bottom: 8px;
    .component-hd {
        position: relative;
        height: 58px;
        -webkit-font-smoothing: antialiased;
        .title {
            margin: 0;
            font-size: 22px;
            font-weight: 200;
            line-height: 58px;
            color: #333;
        }
        .nav {
            position: absolute;
            top: 0;
            right: 0;
            .nav-list {
                margin: 0;
                padding: 16px 0 0;
                list-style-type: none;
                font-size: 16px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .nav-list-item {
                    margin: 0 0 0 30px;
                    cursor: pointer;
                    color: #424242;
                    padding: 0 0 5px;
                    border-bottom: 2px solid transparent;
                    transition: all 0.3s ease;
                    &.active {
                        color: #ff6700;
                        border-bottom: 2px solid #ff6700;
                    }
                }
            }
        }
    }
    .component-main {
        width: 234px;
        display: flex;
        justify-content: flex-start;
        flex-flow: row nowrap;
        .component-left {
            height: 614px;
            margin: 0;
            padding: 0;
            list-style-type: none;
            .component-left-list {
                margin: 0 0 -14px -14px;
                .component-left-list-item {
                    height: 300px;
                    padding: 0;
                    position: relative;
                    z-index: 1;
                    width: 234px;
                    margin-left: 14px;
                    margin-bottom: 14px;
                    background: #fff;
                    transition: all 0.2s linear;
                    &:hover {
                        box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
                        transform: translateY(-3px);
                    }
                    .item-link {
                        display: block;
                        width: 100%;
                        height: 100%;
                        .item-pic {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        .component-right {
            width: 978px;
            margin-left: 14px;
            .component-right-list {
                height: 614px;
                margin: 0;
                padding: 0;
                list-style-type: none;
                display: flex;
                justify-content: flex-start;
                flex-flow: row wrap;
                width: 992px;
                .component-right-list-item {
                    height: 246px;
                    padding: 34px 0 20px;
                    position: relative;
                    z-index: 1;
                    width: 234px;
                    margin-left: 14px;
                    margin-bottom: 14px;
                    background: #fff;
                    transition: all 0.2s linear;
                    &:hover {
                        box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
                        transform: translateY(-3px);
                        .review-wrapper {
                            height: 76px;
                            opacity: 1;
                        }
                    }
                    .figure {
                        width: 150px;
                        height: 150px;
                        margin: 0 auto 18px;
                        .figure-link {
                            display: block;
                            width: 100%;
                            height: 100%;
                            .figure-pic {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .title {
                        margin: 0 10px;
                        font-size: 14px;
                        font-weight: 400;
                        text-align: center;
                        .title-link {
                            display: block;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                    }
                    .price {
                        margin: 10px;
                        text-align: center;
                        color: #ff6700;
                        font-size: 12px;
                        .old-price {
                            text-decoration: line-through;
                            color: #b0b0b0;
                        }
                    }
                    .rank {
                        margin: 0 10px;
                        font-size: 12px;
                        text-align: center;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        color: #b0b0b0;
                    }
                    .review-wrapper {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        z-index: 3;
                        width: 234px;
                        height: 0;
                        overflow: hidden;
                        font-size: 12px;
                        background: #ff6700;
                        opacity: 0;
                        transition: all 0.2s linear;
                        a {
                            display: block;
                            padding: 8px 30px;
                            outline: 0;
                        }
                        .review {
                            margin-bottom: 5px;
                            color: #fff;
                            display: block;
                            font-size: 12px;
                            line-height: 18px;
                        }
                        .author {
                            display: block;
                            color: rgba(255,255,255,0.6);
                        }
                    }
                    .flag {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        z-index: 2;
                        width: 64px;
                        height: 20px;
                        margin-left: -32px;
                        font-size: 12px;
                        line-height: 20px;
                        text-align: center;
                        color: #fff;
                        &.discount {
                            background-color: #e53935;
                        }
                        &.new {
                            background-color: #83c44e;
                        }
                        &.freePost {
                            background-color: #ffac13;
                        }
                    }
                }
                .component-left-list-item-small {
                    width: 234px;
                    height: 260px;
                    .component-right-list-last-item {
                        width: 234px;
                        height: 143px;
                        position: relative;
                        background: #fff;
                        margin: 0 0 14px 14px;
                        border: 1px solid #fff;
                        box-sizing: border-box;
                        transition: all 0.2s linear;
                        &:hover {
                            box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
                            transform: translateY(-3px);
                        }
                        .figure {
                            position: absolute;
                            right: 20px;
                            top: 32px;
                            width: 80px;
                            height: 80px;
                            .figure-link {
                                display: block;
                                width: 100%;
                                height: 100%;
                                .figure-pic {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .title {
                            margin: 40px 110px 10px 30px;
                            font-size: 12px;
                            font-weight: 400;
                            text-align: left;
                            .title-link {
                                display: block;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                        }
                        .price {
                            margin: 0 110px 0 30px;
                            text-align: left;
                            color: #ff6700;
                            font-size: 14px;
                            .old-price {
                                text-decoration: line-through;
                                color: #b0b0b0;
                            }
                        }
                    }
                    .component-right-list-item-more {
                        width: 234px;
                        height: 143px;
                        position: relative;
                        background: #fff;
                        margin: 0 0 14px 14px;
                        border: 1px solid #fff;
                        box-sizing: border-box;
                        transition: all 0.2s linear;
                        &:hover {
                            box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
                            transform: translateY(-1px);
                        }
                        .figure-more {
                            position: absolute;
                            right: 35px;
                            top: 48px;
                            width: 48px;
                            height: 48px;
                            a {
                                display: block;
                                color: #ff6700;
                                i {
                                    font-size: 48px;
                                    line-height: 48px;
                                }
                            }
                        }
                        .more-link {
                            display: block;
                            margin: 54px 110px 0 30px;
                            font-size: 18px;
                            color: #333;
                            text-align: left;
                            small {
                                display: block;
                                font-size: 12px;
                                color: #757575;
                                text-align: left;
                                margin-top: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
