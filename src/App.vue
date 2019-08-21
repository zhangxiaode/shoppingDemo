<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ajax from "./utils/ajax.js";
export default {
  name: "app",
  components: { },
  mounted() {
    ajax.get("/cms/category/list").then(res => {
      console.log(res);
    });
  },
  methods: {
  }
};
</script>

<style scoped lang='less'>
</style>
