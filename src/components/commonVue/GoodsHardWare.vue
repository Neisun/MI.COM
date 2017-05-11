<template>
<div class="hardware">
  <!-- 标题 -->
  <div class="hardware-hd">
    <h2 class="title">智能硬件</h2>
    <div class="more brickNav">
      <a href="//www.mi.com/smart/" target="_blank" class="more-link">
            查看更多
            <i class="fa fa-angle-right iconfont"></i>
          </a>
    </div>
  </div>
  <!-- 商品主体部分 -->
  <div class="goods-content">
    <!-- 左边图片部分，一张图占据半壁江山 -->
    <div class="goods-left">
      <a href="//www.mi.com/water2/" class="goods-left-link" target="_blank">
        <img src="//i3.mifile.cn/a4/xmad_14925012196936_zJvXi.jpg" alt="" class="goods-left-pic">
      </a>
    </div>
    <div class="goods-right-wrap">
      <ul class="goods-right">
        <li class="goods-right-item" v-for="(item,index) in goods" :key="index">
          <div class="goods-right-item-link-wrap">
            <a :href="item.sourceUrl" class="goods-right-item-link" target="_blank">
              <img :src="item.imgUrl" alt="item.title" class="goods-right-item-pic">
            </a>
          </div>
          <h3 class="title">
              <a :href="item.sourceUrl" target="_blank">{{ item.title }}</a>
            </h3>
          <p class="desc">{{ item.desc }}</p>
          <p class="price">
            <span class="num">
                {{ item.price }}元
            </span>
            <!-- 这个位置是如果出现打折，那个字段，就把原价展示出来 -->
            <span class="old-price" v-if="item.discountType==='discount'">
              {{ item.oldPrice }}
            </span>
          </p>
          <!-- 这个位置，是新品，包邮，打折那个tips，背景颜色设置为白色之后，动态的绑定类名 -->
          <div class="flag" :class="item.discountType">
            {{item.discountContent}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "hardware",
  data: function data() {
    return {
      goods: [
        {
          sourceUrl: '//www.mi.com/dianfanbao/',
          imgUrl: '//i1.mifile.cn/a1/T1OVC_ByY_1RXrhCrK!220x220.jpg',
          title: '米家压力IH电饭煲',
          desc: '智能烹饪，灰铸铁粉体涂层内胆',
          price: '999'
        },
        {
          sourceUrl: '//www.mi.com/air2/',
          imgUrl: '//i1.mifile.cn/a1/T1zBYgBCWv1RXrhCrK!220x220.jpg',
          title: '小米空气净化器2',
          desc: '高效除霾，10分钟换新房间空气',
          price: '699'
        },
        {
          sourceUrl: '//www.mi.com/scooter/',
          imgUrl: '//i1.mifile.cn/a1/T1PXhgBbdT1RXrhCrK!220x220.jpg',
          title: '九号平衡车',
          desc: '年轻人的酷玩具，骑行遥控两种玩法',
          price: '1999'
        },
        {
          sourceUrl: '//item.mi.com/1152300006.html',
          imgUrl: '//i1.mifile.cn/a1/T1GxCvBghT1RXrhCrK!220x220.jpg',
          title: 'Yeelight床头灯',
          desc: '触摸式操作，给卧室1600万种颜色',
          price: '229',
          oldPrice: '249元',
          discountType: 'discount',
          discountContent: '享9.2折'
        },
        {
          sourceUrl: '//www.mi.com/mj-panorama-camera/ ',
          imgUrl: '//i1.mifile.cn/a1/pms_1491312153.28261682!220x220.jpg',
          title: '米家全景相机套装',
          desc: '2388万有效像素，IP67级防水防尘',
          price: '1699',
          discountType: 'new',
          discountContent: '新品'
        },
        {
          sourceUrl: '//www.mi.com/miuav/',
          imgUrl: '//i1.mifile.cn/a1/pms_1487824962.01314237!220x220.jpg',
          title: '小米无人机 4K 版',
          desc: '探索触手可及的新视角',
          price: '2999'
        },
        {
          sourceUrl: '//www.mi.com/dianfanbao/',
          imgUrl: '//i1.mifile.cn/a1/pms_1467962689.97551741!220x220.jpg',
          title: '小米手环2',
          desc: 'OLED 显示屏幕，升级计步算法',
          price: '149',
          discountType: 'freePost',
          discountContent: '免邮费'
        },
        {
          sourceUrl: '//www.mi.com/carair/',
          imgUrl: '//i1.mifile.cn/a1/pms_1482392549.50965908!220x220.jpg',
          title: '米家车载空气净化器',
          desc: '双风机循环气流，高效净化车内空气',
          price: '449'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@baseColor: #ff6700;
.hardware {
    height: 686px;
    margin-bottom: 8px;
    .hardware-hd {
        position: relative;
        height: 58px;
    }
    .title {
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
    }
    .more {
        position: absolute;
        top: 0;
        right: 0;
        .more-link {
            font-size: 16px;
            line-height: 58px;
            color: #424242;
            transition: all 0.4s;
            &:hover {
                color: @baseColor;
                .iconfont {
                    background: @baseColor;
                }
            }
            .iconfont {
                text-align: center;
                width: 16px;
                height: 16px;
                padding: 2px;
                font-size: 16px;
                line-height: 16px;
                background: #b0b0b0;
                color: #fff;
                vertical-align: 1px;
                border-radius: 10px;
                transition: all 0.4s;
            }
        }
    }
}
.goods-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
    .goods-left {
        &:hover{
          transform: translateY(-3px);
          box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
        }
        width: 234px;
        height: 614px;
        margin-bottom: 14px;
        background: #fff;
        transition: all .5s ease;
        .goods-left-link {
            display: block;
            height: 100%;
            width: 100%;
            .goods-left-pic {
                width: 100%;
                height: 100%;
            }
        }
    }
    .goods-right-wrap {
        margin-left: 14px;
        .goods-right {
            width: 992px;
            height: 614px;
            display: flex;
            justify-content: flex-start;
            flex-flow: row wrap;
            .goods-right-item {
                &:hover{
                  transform: translateY(-3px);
                  box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
                }
                transition: all .5s ease;
                position: relative;
                z-index: 1;
                height: 260px;
                padding: 20px 0;
                width: 234px;
                margin-left: 14px;
                margin-bottom: 14px;
                background: #fff;
                .goods-right-item-link-wrap {
                    width: 160px;
                    height: 160px;
                    margin: 0 auto 18px;
                    .goods-right-item-link {
                        display: block;
                        width: 100%;
                        height: 100%;
                        .goods-right-item-pic {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .title {
                    text-align: center;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 12px;
                    margin: 0 0 10px;
                    a {
                        color: #333;
                    }
                }
                .desc {
                    text-align: center;
                    height: 18px;
                    font-size: 12px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    color: #b0b0b0;
                    line-height: 18px;
                    margin: 0 10px 10px;
                }
                .price {
                    font-size: 14px;
                    text-align: center;
                    margin: 0 10px 14px;
                    color: #ff6700;
                }
                .old-price {
                    color: #b0b0b0;
                    text-decoration: line-through;
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
                    // tips的样式
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
        }
    }
}
</style>
