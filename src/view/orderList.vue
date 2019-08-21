<template>
  <div class="orderList">
    orderList
    <button @click="goLogistics()">go logistics</button>
    <button @click="goOrderDetail()">go orderDetail</button>
    <button @click="goCart()">go cart</button>
    <button @click="goCategory()">go category</button>
    <button @click="goCollection()">go collection</button>
    <button @click="goHome()">go home</button>
    <button @click="goLogin()">go login</button>
    <button @click="goMessage()">go message</button>
    <button @click="goGoodsDetail()">go goodsDetail</button>
  </div>
</template>

<script>
export default {
  name: "orderList",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goLogistics() {
      this.$router.push("/logistics");
    },
    goOrderDetail() {
      this.$router.push("/orderDetail");
    },
    goCart() {
      this.$router.push("/cart");
    },
    goCategory() {
      this.$router.push("/category");
    },
    goCollection() {
      this.$router.push("/collection");
    },
    goHome() {
      this.$router.push("/home");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goMessage() {
      this.$router.push("/message");
    },
    goGoodsDetail() {
      this.$router.push("/goodsDetail");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
