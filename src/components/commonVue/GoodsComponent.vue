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
        <li class="component-left-list-item">
          <a href="#" class="item-link">
            <img src="//i3.mifile.cn/a4/xmad_14930201530354_orlGH.jpg" alt="" class="item-pic">
          </a>
        </li>
        <li class="component-left-list-item">
          <a href="#" class="item-link">
            <img src="//i3.mifile.cn/a4/xmad_14930201530354_orlGH.jpg" alt="" class="item-pic">
          </a>
        </li>
      </ul>
    </div>
    <div class="component-right">
      <div class="">
        <ul class="component-right-list">
          <li class="component-right-list-item">
            <div class="figure">
              <a href="#" class="figure-link">
                <img src="//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150" alt="" class="figure-pic">
              </a>
            </div>
            <h3 class="title">
              <a href="#" class="title-link">
                小米运动蓝牙耳机
              </a>
            </h3>
            <p class="price">
              <span class="num">
                149元
              </span>
              <span class="old-price">
                89元
              </span>
            </p>
            <p class="rank">
              5364人评价
            </p>
            <div class="review-wrapper">
              <a href="#">
                <span class="review">音质确实没有线的好，两个头略大，可以换歌，挺方便</span>
                <span class="author">来自于 827707413 的评价</span>
              </a>
            </div>
            <div class="flag discount">
              免运费
            </div>
          </li>
          <li class="component-right-list-item">
            <div class="figure">
              <a href="#" class="figure-link">
                <img src="//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150" alt="" class="figure-pic">
              </a>
            </div>
            <h3 class="title">
              <a href="#" class="title-link">
                小米运动蓝牙耳机
              </a>
            </h3>
            <p class="price">
              <span class="num">
                149元
              </span>
              <span class="old-price">
                89元
              </span>
            </p>
            <p class="rank">
              5364人评价
            </p>
            <div class="review-wrapper">
              <a href="#">
                <span class="review">音质确实没有线的好，两个头略大，可以换歌，挺方便</span>
                <span class="author">来自于 827707413 的评价</span>
              </a>
            </div>
            <div class="flag discount">
              免运费
            </div>
          </li>
          <li class="component-right-list-item">
            <div class="figure">
              <a href="#" class="figure-link">
                <img src="//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150" alt="" class="figure-pic">
              </a>
            </div>
            <h3 class="title">
              <a href="#" class="title-link">
                小米运动蓝牙耳机
              </a>
            </h3>
            <p class="price">
              <span class="num">
                149元
              </span>
              <span class="old-price">
                89元
              </span>
            </p>
            <p class="rank">
              5364人评价
            </p>
            <div class="review-wrapper">
              <a href="#">
                <span class="review">音质确实没有线的好，两个头略大，可以换歌，挺方便</span>
                <span class="author">来自于 827707413 的评价</span>
              </a>
            </div>
            <div class="flag discount">
              免运费
            </div>
          </li>
          <li class="component-right-list-item">
            <div class="figure">
              <a href="#" class="figure-link">
                <img src="//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150" alt="" class="figure-pic">
              </a>
            </div>
            <h3 class="title">
              <a href="#" class="title-link">
                小米运动蓝牙耳机
              </a>
            </h3>
            <p class="price">
              <span class="num">
                149元
              </span>
              <span class="old-price">
                89元
              </span>
            </p>
            <p class="rank">
              5364人评价
            </p>
            <div class="review-wrapper">
              <a href="#">
                <span class="review">音质确实没有线的好，两个头略大，可以换歌，挺方便</span>
                <span class="author">来自于 827707413 的评价</span>
              </a>
            </div>
            <div class="flag discount">
              免运费
            </div>
          </li>
          <li class="component-right-list-item">
            <div class="figure">
              <a href="#" class="figure-link">
                <img src="//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150" alt="" class="figure-pic">
              </a>
            </div>
            <h3 class="title">
              <a href="#" class="title-link">
                小米运动蓝牙耳机
              </a>
            </h3>
            <p class="price">
              <span class="num">
                149元
              </span>
              <span class="old-price">
                89元
              </span>
            </p>
            <p class="rank">
              5364人评价
            </p>
            <div class="review-wrapper">
              <a href="#">
                <span class="review">音质确实没有线的好，两个头略大，可以换歌，挺方便</span>
                <span class="author">来自于 827707413 的评价</span>
              </a>
            </div>
            <div class="flag discount">
              免运费
            </div>
          </li>
          <li class="component-right-list-item">
            <div class="figure">
              <a href="#" class="figure-link">
                <img src="//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150" alt="" class="figure-pic">
              </a>
            </div>
            <h3 class="title">
              <a href="#" class="title-link">
                小米运动蓝牙耳机
              </a>
            </h3>
            <p class="price">
              <span class="num">
                149元
              </span>
              <span class="old-price">
                89元
              </span>
            </p>
            <p class="rank">
              5364人评价
            </p>
            <div class="review-wrapper">
              <a href="#">
                <span class="review">音质确实没有线的好，两个头略大，可以换歌，挺方便</span>
                <span class="author">来自于 827707413 的评价</span>
              </a>
            </div>
            <div class="flag discount">
              免运费
            </div>
          </li>
          <li class="component-right-list-item">
            <div class="figure">
              <a href="#" class="figure-link">
                <img src="//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150" alt="" class="figure-pic">
              </a>
            </div>
            <h3 class="title">
              <a href="#" class="title-link">
                小米运动蓝牙耳机
              </a>
            </h3>
            <p class="price">
              <span class="num">
                149元
              </span>
              <span class="old-price">
                89元
              </span>
            </p>
            <p class="rank">
              5364人评价
            </p>
            <div class="review-wrapper">
              <a href="#">
                <span class="review">音质确实没有线的好，两个头略大，可以换歌，挺方便</span>
                <span class="author">来自于 827707413 的评价</span>
              </a>
            </div>
            <div class="flag discount">
              免运费
            </div>
          </li>
          <ul class="goods-right-small">
            <li class="last-good">
              <div class="figure">
                <a href="#" class="figure-link">
                  <img src="//i2.mifile.cn/a1/pms_1476674302.67179007.jpg?width=150&height=150" alt="" class="figure-pic">
                </a>
              </div>
              <h3 class="title">
                <a href="#" class="title-link">
                  小米运动蓝牙耳机
                </a>
              </h3>
              <p class="price">
                <span class="num">
                  149元
                </span>
                <span class="old-price">
                  89元
                </span>
              </p>
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
            name: '热门'
          },
          {
            name: '耳机音响'
          },
          {
            name: '电源'
          },
          {
            name: '电池储存卡'
          }
        ],
        hot:[

        ]
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
                    transition: all .3s ease;
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
            .component-left-list{
              margin: 0 0 -14px -14px;
              .component-left-list-item{
                height: 300px;
                padding: 0;
                position: relative;
                z-index: 1;
                width: 234px;
                margin-left: 14px;
                margin-bottom: 14px;
                background: #fff;
                transition: all .2s linear;
                &:hover{
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
              transition: all .2s linear;
              &:hover {
                box-shadow: 5px 5px 20px #ccc,-5px -5px 20px #ccc;
                transform: translateY(-3px);
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
                // opacity: 0;
                transition: all .2s linear;
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
            .goods-right-small {
              width: 234px;
              height: 260px;
              .last-good {
                  width: 234px;
                  height: 143px;
                  position: relative;
                  background: #fff;
                  margin: 0 0 14px 14px ;
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

                  }
              }
            }
          }
        }
    }
}
</style>
