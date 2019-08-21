<template>
  <div class="orderConfirm">
    orderConfirm
    <button @click="goPayment()">go payment</button>
    <button @click="goAddress()">go address</button>
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
  name: "orderConfirm",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goPayment() {
      this.$router.push("/payment");
    },
    goAddress() {
      this.$router.push("/address");
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
    }
  }
};
</script>

<style scoped lang='less'>
</style>
