<template>
  <div class="goodsList">
    goodsList
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
  name: "goodsList",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goCart() {
      this.$router.push("/page/cart");
    },
    goCategory() {
      this.$router.push("/page/category");
    },
    goCollection() {
      this.$router.push("/page/collection");
    },
    goHome() {
      this.$router.push("/page/home");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goMessage() {
      this.$router.push("/page/message");
    },
    goGoodsDetail() {
      this.$router.push("/page/goodsDetail");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
