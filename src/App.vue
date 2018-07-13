<template>
  <div id="app">
    <myproduct-nav></myproduct-nav>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import myproduct from '@/views/myproduct/myproduct.vue'
import footer from '@/components/footer/footer.vue'
export default {
  components:{
    "myproduct-nav":myproduct,
    "footer-nav":footer,
  }
}
</script>


<style src="@/assets/style/base.scss" lang="scss"></style>
