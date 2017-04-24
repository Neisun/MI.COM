<template>
  <div class="goods">
    <div class="container">
      <goodsHardWare></goodsHardWare>
    </div>
  </div>
</template>
<script>
import goodsHardWare from './commonVue/GoodsHardWare.vue'
export default {
  name: "goods",
  components: {
    goodsHardWare
  },
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .goods{
    width: 100%;
    height: auto;
    background: #f5f5f5;
    padding-top: 60px;
    .container{
      width: 1226px;
      margin: 0 auto;
    }
  }
</style>
