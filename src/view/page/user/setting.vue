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
    <button @click="goSetting()">go setting</button>
    <button @click="goUser()">go user</button>
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
      this.$router.push("/baseInfo");
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
    goSetting() {
      this.$router.push("/setting");
    },
    goUser() {
      this.$router.push("/user");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
