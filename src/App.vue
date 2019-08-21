<template>
  <div id="app">
    <span @click="changeLang()">切换语言</span>
    {{$t("a")}}
    <router-view></router-view>
  </div>
</template>

<script>
import ajax from "./utils/ajax.js";
export default {
  name: "app",
  components: {},
  mounted() {
    ajax.get("/cms/category/list").then(res => {
      console.log(res);
    });
  },
  methods: {
    changeLang() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "zh";
      } else {
        this.$i18n.locale = "en";
      }
      console.log(this.$t("a"));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
