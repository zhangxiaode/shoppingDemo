<template>
  <div class="comment">
    comment
    <button @click="goBaseInfo()">go baseInfo</button>
    <button @click="goCart()">go cart</button>
    <button @click="goCategory()">go category</button>
    <button @click="goCollection()">go collection</button>
    <button @click="goHome()">go home</button>
    <button @click="goLogin()">go login</button>
    <button @click="goMessage()">go message</button>
    <button @click="goSetting()">go setting</button>
    <button @click="goUser()">go user</button>
    <button @click="goGoodsDetail()">go goodsDetail</button>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goBaseInfo() {
      this.$router.push("/page/user/baseInfo");
    },
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
    goSetting() {
      this.$router.push("/page/user/setting");
    },
    goUser() {
      this.$router.push("/page/user");
    },
    goGoodsDetail() {
      this.$router.push("/page/goodsDetail");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
