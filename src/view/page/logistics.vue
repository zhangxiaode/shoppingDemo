<template>
  <div class="logistics">
    logistics
    <button @click="goCart()">go cart</button>
    <button @click="goCategory()">go category</button>
    <button @click="goCollection()">go collection</button>
    <button @click="goHome()">go home</button>
    <button @click="goLogin()">go login</button>
    <button @click="goMessage()">go message</button>
    <button @click="goOrderList()">go orderList</button>
  </div>
</template>

<script>
export default {
  name: "logistics",
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
    goOrderList() {
      this.$router.push("/orderList");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
