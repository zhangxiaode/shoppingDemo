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
      this.$router.push("/cart");
    },
    goCategory() {
      this.$router.push("/category");
    },
    goComment() {
      this.$router.push("/comment");
    },
    goGoodsList() {
      this.$router.push("/goodsList");
    },
    goGoodsDetail() {
      this.$router.push("/goodsDetail");
    },
    goRegister() {
      this.$router.push("/register");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goMessage() {
      this.$router.push("/message");
    },
    goOrderList() {
      this.$router.push("/orderList");
    },
    goUser() {
      this.$router.push("/user");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
