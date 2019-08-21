<template>
  <div class="modifyPwd">
    modifyPwd
    <button @click="goRegister()">go register</button>
    <button @click="goLogin()">go login</button>
    <button @click="goHome()">go home</button>
  </div>
</template>

<script>
export default {
  name: "modifyPwd",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    goLogin() {
      this.$router.push("/login");
    },
    goHome() {
      this.$router.push("/page/home");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
