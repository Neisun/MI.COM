<template>
  <div class="content">
    <div class="content-hd">
      <h2 class="title">内容</h2>
    </div>
    <div class="content-box">
      <ul class="content-list">
        <li class="content-item">
          <h2 class="title">
            图书
          </h2>
          <div class="content-wrapper">
            <ul class="content-item-list">
              <li v-for="n in 3">
                <h4 class="name">
                  <a href="#">
                    哈利·波特与被诅咒的孩子
                  </a>
                </h4>
                <p class="desc">
                  <a href="#">“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！</a>
                </p>
                <p class="price">
                  <a href="#">29.37元</a>
                </p>
                <div class="figure">
                  <a href="#">
                    <img src="http://i3.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757" alt="">
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="wrapper-control">
            <a href="javascript:void(0);" class="fa fa-angle-left control"></a>
            <a href="javascript:void(0);" class="fa fa-angle-right control"></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "content",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .content {
    width: 1226px;
    margin-top: 26px;
    .content-hd {
      height: 58px;
      .title {
        margin: 0;
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
      }
    }
    .content-box {
      .content-list {
        width: 1240px;
        height: 420px;
        margin: 0;
        padding: 0;
        list-style-type: none;
        .content-item {
          position: relative;
          width: 296px;
          height: 374px;
          padding: 45px 0 0;
          border-top: 1px solid #e0e0e0;
          margin-right: 14px;
          margin-bottom: 14px;
          background: #fff;
          -webkit-transition: all .2s linear;
          transition: all .2s linear;
          &:hover {
            .control {
              opacity: 1 !important;
              background-color: rgba(66,66,66,1) !important;
            }
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            transform: translate3d(0, -2px, 0);
          }
          .title {
            margin: 0 10px 18px;
            font-size: 16px;
            font-weight: 400;
            text-align: center;
          }
          .content-wrapper {
            height: 340px;
            overflow: hidden;
            .content-item-list {
              height: 340px;
              margin: 0;
              padding: 0;
              list-style-type: none;
              text-align: center;
              overflow: hidden;
              color: #333;
              display: flex;
              justify-content: flex-start;
              flex-flow: row nowrap;
              li {
                width: 296px;
                height: 340px;
                .name {
                  margin: 0 20px 5px;
                  font-size: 20px;
                  font-weight: 400;
                  line-height: 1.25;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  a {
                    display: block;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    _zoom: 1;
                    outline: none;
                  }
                }
                .desc {
                  margin: 0 48px 10px;
                  height: 40px;
                  font-size: 12px;
                  line-height: 20px;
                  text-align: center;
                  overflow: hidden;
                  a {
                    color: #b0b0b0;
                  }
                }
                .price {
                  height: 21px;
                  margin: 0 10px 15px;
                  text-align: center;
                  color: #333;
                  font-size: 14px;
                }
                .figure {
                  width: 216px;
                  height: 154px;
                  margin: 0 auto;
                  a {
                    display: block;
                    height: 154px;
                    img {
                      width: 216px;
                      height: 154px;
                    }
                  }
                }
              }
            }
          }
          .wrapper-control {
            .control {
              position: absolute;
              top: 50%;
              margin-top: -20px;
              opacity: 0;
              -webkit-transition: all .6s;
              transition: all .6s;
              color: #fafafa;
              width: 20px;
              height: 24px;
              padding: 12px 0;
              font-size: 28px;
              line-height: 24px;
              background-color: rgba(66,66,66,0.2);
              text-align: center;
              &.fa-angle-left {
                left: 0;
              }
              &.fa-angle-right {
                right: 0;
              }
            }
          }
        }
      }
    }
  }
</style>
