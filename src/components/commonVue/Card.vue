<template>
<div class="card">
  <div class="hot-remark-item">
    <div class="hot-remark-pic">
      <a :href="cardData.sourceUrl" target="_blank">
        <img :src="cardData.imgUrl" :alt="cardData.title">
      </a>
    </div>
    <p class="review">
      <a :href="cardData.sourceUrl">
        {{cardData.review}}
      </a>
    </p>
    <p class="author">
      来自于 {{cardData.author}} 的评价
    </p>
    <div class="info">
      <h3 class="title">
        <a :href="cardData.sourceUrl">
          {{cardData.title}}
        </a>
        </h3>
      <span class="sep">|</span>
      <p class="price">
        <span class="num">
          {{cardData.price}}元
        </span>
      </p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "card",
  data: function data() {
    return {

    }
  },
  props: {
    cardData: {
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
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
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
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
</style>
