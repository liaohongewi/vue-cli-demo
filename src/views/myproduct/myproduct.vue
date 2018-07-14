<template>
    <div>
        <header-search></header-search>
        <div class="content infinite-scroll infinite-scroll-bottom infinite-index-bottom native-scroll">
            <banner-nav></banner-nav>
            <column-nav></column-nav>
            <product-nav></product-nav>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import search from '@/components/header-search/header-search.vue'
    import banner from '@/components/banner/banner.vue'
    import column from '@/components/column/column.vue'
    import product from '@/components/product/product.vue'
    import footer from '@/components/footer/footer.vue'
    import Vue from 'vue'
    import axios from 'axios'
    import Vueaxios from 'vue-axios'
    import store from '@/store.js'

    Vue.use(Vueaxios, axios)
    export default {      
        components:{
            "header-search":search,
            "banner-nav":banner,
            "column-nav":column,
            "product-nav":product,
            "footer-nav":footer,
        },
    }
</script>

<style>
    .m-index-banner {
        padding-bottom: 0;
        background: #fff;
        position: relative;
        width: 100%;
        overflow: hidden;
    }
</style>
