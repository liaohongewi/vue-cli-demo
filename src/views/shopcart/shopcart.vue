<template lang="pug">
    .page-group
        .page.page-index.page-current
            header-nav
            shopcart-nav
</template>

<script>
import header from '@/components/header-login/header-cart.vue'
import cart from '@/components/shopcart/cart-content.vue'
export default {
    components:{
       'header-nav':header,
       'shopcart-nav':cart,
    },
    data(){
        return{
            isNowPage:true
        }
    }
}
</script>
 
 