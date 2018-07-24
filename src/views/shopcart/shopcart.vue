<template lang="pug">
    .page-group
        .page.page-index.page-current
            header-nav
            shopcart-nav
            footer-nav(v-bind:class="{'isshopcart':isNowPage}")
</template>

<script>
import header from '@/components/header-login/header-cart.vue'
import cart from '@/components/shopcart/cart-content.vue'
import footer from '@/components/footer/footer.vue'
export default {
    components:{
       'header-nav':header,
       'shopcart-nav':cart,
       'footer-nav':footer,
    },
    data(){
        return{
            isNowPage:true
        }
    }
}
</script>
 
 