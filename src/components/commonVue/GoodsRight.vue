<template>
  <!-- 商品列表组件 -->
<div class="component-right">
  <div class="">
    <ul class="component-right-list">
      <!-- 这里最难的在于布局部分，为什么这么说呢，因为所有商品都是一致的，然后才能拿来遍历，但由于每一栏最后一个商品布局不一致，并且最后都是浏览更多，这块的布局还是非常微妙值得深思的，这是我们做每一个项目都该从项目中汲取的经验 -->
      <!-- 遍历，但不包括最后一个元素，最后一个元素的布局不同，所以给最后一个元素单独提出来 -->
      <li
        class="component-right-list-item"
        v-for="(item,index) in goodsRightData"
        :key="index"
        v-if="index<goodsRightData.length-1">
        <!-- 图片部分 -->
        <div class="figure">
          <a :href="item.sourceUrl" class="figure-link" target="_blank">
            <img :src="item.imgUrl" alt="" class="figure-pic">
          </a>
        </div>
        <!-- 标题部分 -->
        <h3 class="title">
          <a :href="item.sourceUrl" class="title-link" target="_blank">
            {{item.title}}
          </a>
        </h3>
        <!-- 价格部分 -->
        <p class="price">
          <span class="num">
            {{item.price}}元
          </span>
          <!-- 根据discountType字段判断是否是discount,若是就有oldPrice，那么久显示 -->
          <span class="old-price" v-if="item.discountType==='discount'">
            {{item.oldPrice}}元
          </span>
        </p>
        <!-- 评论部分 -->
        <p class="rank">
          {{item.rank}}
        </p>
        <!-- 动态的评论+作者区域 -->
        <div class="review-wrapper" v-show="item.review">
          <a :href="item.sourceUrl" target="_blank">
            <span class="review">{{item.review}}</span>
            <span class="author">{{item.author}}</span>
          </a>
        </div>
        <!-- 新品，折扣，包邮的tips -->
        <div class="flag" :class="item.discountType">
          {{item.discountContent}}
        </div>
      </li>
      <!-- 最有一个商品的布局 -->
      <ul class="component-right-list-item-small">
        <li class="component-right-list-last-item">
          <div class="figure">
            <a :href="lastGoods.sourceUrl" class="figure-link">
              <img :src="lastGoods.imgUrl" :alt="lastGoods.title" class="figure-pic">
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
</div>
</template>
<script>
export default {
  name: "component-right",
  data: function data() {
    return {

    }
  },
  props: {
    goodsRightData: {
      required: true,
    },
    linkActiveUrl: {
      required: true
    },
    linkMoreText: {
      required: true
    }
  },
  computed: {
    lastGoods: function() {
      // goodsRightData是定义的属性，若使用的话，也是使用this调用
      if (this.goodsRightData && this.goodsRightData.length > 0) {
        return this.goodsRightData[this.goodsRightData.length - 1]
      } else {
        return null;
      }
    }
  }
}
</script>
<style lang='less' scoped>
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
        .component-right-list-item-small {
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
</style>
