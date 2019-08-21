<template>
  <div class="page">
    <PageTop />
    <router-view></router-view>
  </div>
</template>

<script>
import PageTop from "@/components/pageTop.vue";
export default {
  name: "page",
  data() {
    return {};
  },
  components: { PageTop },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
</style>
