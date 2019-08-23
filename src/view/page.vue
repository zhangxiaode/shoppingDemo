<template>
  <div class="page">
    <div class="wrap">
      <div class="box" v-for="(item,index) in colors" :key="index" :style="{'background':item}"></div>
    </div>
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
  computed: {
    colors() {
      var arr = [];
      for (let i = 0; i <= 255; i += 51) {
        for (let j = 0; j <= 255; j += 51) {
          for (let k = 0; k <= 255; k += 51) {
            arr.push(
              "#" +
                (i < 16 ? "0" + i.toString(16) : i.toString(16)) +
                (j < 16 ? "0" + j.toString(16) : j.toString(16)) +
                (k < 16 ? "0" + k.toString(16) : k.toString(16))
            );
          }
        }
      }
      return arr;
    }
  },
  components: { PageTop },
  mounted() {
    console.log(this.colors);
  },
  methods: {}
};
</script>

<style scoped lang='less'>
.wrap {
  width: 500px;
  margin: 50px auto;
}
.box {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
}
</style>
