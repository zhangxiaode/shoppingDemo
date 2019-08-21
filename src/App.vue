<template>
  <div id="app">
    <PageTop />
    <span @click="changeLang()">切换语言</span>
    {{$t("a")}}
    <router-view></router-view>
  </div>
</template>

<script>
import PageTop from "@/components/pageTop.vue";
import ajax from "./utils/ajax.js";
export default {
  name: "app",
  components: { PageTop },
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

<style scoped lang='less'>
</style>
