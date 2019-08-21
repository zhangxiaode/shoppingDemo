<template>
  <div class="pageTop">
    <div class="topCont">
      <div class="topLeft">
        <a href="javascript:;" @click="goHome()">首页</a>
        <a href="javascript:;" @click="goMessage()">我的消息</a>
      </div>
      <div class="topRight">
        <a href="javascript:;" @click="goCart()">购物车</a>
        <a href="javascript:;" @click="goOrderList()">我的订单</a>
        <a href="javascript:;" @click="goCollection()">我的收藏</a>
        <a href="javascript:;" @click="goUser()">金风凝香</a>
        <a href="javascript:;" @click="goLogin()">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageTop",
  props: {},
  mounted() {},
  methods: {
    goHome() {
      this.$router.push("/page/home");
    },
    goMessage() {
      this.$router.push("/page/message");
    },
    goCart() {
      this.$router.push("/page/cart");
    },
    goOrderList() {
      this.$router.push("/page/orderList");
    },
    goCollection() {
      this.$router.push("/page/collection");
    },
    goUser() {
      this.$router.push("/page/user");
    },
    goLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.pageTop {
  background: #f5f5f5;
  .topCont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 35px;
    margin: 0 auto;
    a {
      margin: 0 10px;
    }
  }
}
</style>
