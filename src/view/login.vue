<template>
  <div class="login">
    <button @click="goRegister()">go register</button>
    <button @click="goHome()">go home</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
