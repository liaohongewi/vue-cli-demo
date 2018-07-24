<template lang="pug">
    
    //-购物车--空
    .box_shopCart_kong(v-if="box_shopCart_kong==true")
        img.box_kong_img(src="@/assets/images/img_ShopCart/shoppingcart-gouwuchekong.png")
        p.box_kong_txt 购物车还是空的，您可以再逛逛
        footer-nav(v-bind:class="{'isshopcart':isNowPage}")
    //-购物车--结算
    .mui-content.box_shopCart(v-else)
        .mui-input-group.shopCart_bottom
            .mui-input-row.mui-checkbox.mui-left
                label 全选
                input
            a.box_btn_right 结算(1)
            .box_txt_right
                    p 合计：
                        span ¥
                        i 198
                        span .00
                    h5 不含运费
        .mui-input-group.shopCart_top
            .mui-input-row.mui-checkbox.mui-left
                label
                    img.box_li_img(src="@/assets/images/img_ShopCart/shoppingcart-dianpu.png") 
                    |暴走大蘑菇
                    img.box_navigate_right(src="@/assets/images/img_ShopCart/shoppingcart-dianpujinru.png")
                    a.box_btn_right 编辑
                input.mui-table-view-cell
            ul.mui-table-view.shopCart_in
                li.mui-table-view-cell
                    .mui-input-row.mui-checkbox.mui-left
                        label
                        input
                    img.box_img_info(src="@/assets/images/img_ShopCart/shoppingcart-dianpupic.png")
                    .box_txt_info
                        h3 暴走单身狗
                        p 暴走周边蘑菇秀
                    .box_txt_price
                        p ¥
                            span 198
                            |.00
                        h5 x2
                li.mui-table-view-cell
                    .mui-input-row.mui-checkbox.mui-left
                        label
                        input
                    img.box_img_info(src="@/assets/images/img_ShopCart/shoppingcart-dianpupic.png")
                    .box_txt_info
                        h3 暴走单身狗
                        p 暴走周边蘑菇秀
                    .box_txt_price
                        p ¥
                            span 198
                            |.00
                        h5 x2
</template>
<script>
import footer from '@/components/footer/footer.vue'
export default {
    components:{
       'footer-nav':footer,
    },
    data(){
        return{
            isNowPage:true,
            box_shopCart_kong:false
        }
    }
}
</script>