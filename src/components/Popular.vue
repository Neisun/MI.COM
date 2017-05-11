<!-- 活动组件 -->
<!-- 只是一个背景图，没有什么太多的值得提的地方 -->
<template>
<div id="popular"></div>
</template>
<script>
export default {
  // 这个name就是在vue-devtol中显式的组件的名字，最好起名字，而且名字要和你组件的名字一致，方便找出问题所在。
  name: "popular",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
#popular {
  height: 120px;
  /*这个位置引入背景图其实是直接使用了小米官方的图片地址，如果正常开发应该是放在assets下，然后引入*/
  /*而且因为背景图比较大，也极有可能在引入打包之后路径出现错误*/
  background: url('http://i3.mifile.cn/a4/cms_14920634524371_qZAvP.jpg') no-repeat;
  background-position: center 0;
}
</style>
