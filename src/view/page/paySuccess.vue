<template>
  <div class="paySuccess">
    paySuccess
    <button @click="goCart()">go cart</button>
    <button @click="goCategory()">go category</button>
    <button @click="goCollection()">go collection</button>
    <button @click="goHome()">go home</button>
    <button @click="goLogin()">go login</button>
    <button @click="goMessage()">go message</button>
  </div>
</template>

<script>
export default {
  name: "paySuccess",
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
    }
  }
};
</script>

<style scoped lang='less'>
</style>
