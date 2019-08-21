<template>
  <div class="register">
    register
    <button @click="goLogin()">go login</button>
    <button @click="goModifyPwd()">go modifyPwd</button>
    <button @click="goHome()">go home</button>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goModifyPwd() {
      this.$router.push("/modifyPwd");
    },
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped lang='less'>
</style>
