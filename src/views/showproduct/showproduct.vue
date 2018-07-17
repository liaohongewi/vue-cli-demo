<template lang="pug">
    .mui-content
        .box_header
            img.box_img_info(src="@/assets/images/img_Commodity/shoppingcart-dianpupic2.png")
            router-link.box_img_right
                img(src="@/assets/images/img_Commodity/commodity_img_right.png")
            .box_info_bottom
                h3 路人甲
                p 随机抽取20名用户立减50
        showdetails-nav
        showshop-nav
        footer-nav
</template>
<script>
import details from '@/components/show/showcontent.vue'
import shop from '@/components/show/showshop.vue'
import footer from '@/components/show/showfooter.vue'
export default {
    components:{
        "showdetails-nav":details,
        "showshop-nav":shop,
        "footer-nav":footer,
    }
}
</script>

