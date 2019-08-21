<template>
  <div class="home">
    home
    <button @click="goCart()">go cart</button>
    <button @click="goCategory()">go category</button>
    <button @click="goComment()">go comment</button>
    <button @click="goGoodsList()">go goodsList</button>
    <button @click="goGoodsDetail()">go goodsDetail</button>
    <button @click="goRegister()">go register</button>
    <button @click="goLogin()">go login</button>
    <button @click="goMessage()">go message</button>
    <button @click="goOrderList()">go orderList</button>
    <button @click="goUser()">go user</button>
  </div>
</template>

<script>
export default {
  name: "home",
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
    goComment() {
      this.$router.push("/page/comment");
    },
    goGoodsList() {
      this.$router.push("/page/goodsList");
    },
    goGoodsDetail() {
      this.$router.push("/page/goodsDetail");
    },
    goRegister() {
      this.$router.push("/register");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goMessage() {
      this.$router.push("/page/message");
    },
    goOrderList() {
      this.$router.push("/page/orderList");
    },
    goUser() {
      this.$router.push("/page/user");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
