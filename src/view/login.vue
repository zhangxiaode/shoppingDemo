<template>
  <div class="login">
    login
    <button @click="goRegister()">go register</button>
    <button @click="goModifyPwd()">go modifyPwd</button>
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
    goModifyPwd() {
      this.$router.push("/modifyPwd");
    },
    goHome() {
      this.$router.push("/page/home");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
