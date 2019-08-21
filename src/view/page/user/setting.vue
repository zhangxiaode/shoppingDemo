<template>
  <div class="setting">
    setting
    <button @click="goBaseInfo()">go baseInfo</button>
    <button @click="goCart()">go cart</button>
    <button @click="goCategory()">go category</button>
    <button @click="goCollection()">go collection</button>
    <button @click="goHome()">go home</button>
    <button @click="goLogin()">go login</button>
    <button @click="goMessage()">go message</button>
    <button @click="goAddress()">go address</button>
  </div>
</template>

<script>
export default {
  name: "setting",
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
    goAddress() {
      this.$router.push("/page/user/address");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
