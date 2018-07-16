<template lang="pug">
    <div>
        status-nav
        ul.UClist-group
            li.UClist
                .UClist__title 余额
                .UClist__main(style="color: #f3e037;")
                    span 1000
                    span(style="font-size: small;") 元
        ul.UClist-group
            li.UClist 我的订单
            li.UClist
                .UClist__title 商城单
                .UClist__helper
                    i.UCicon.-router
            li.UClist 退款/售后
            li.UClist 我的评价
        <!-- page AboutUs -->
        ul.UClist-group
            li.UClist
                .UClist__title 当前版本
                .UClist__helper 1.7
            li.UClist
                .UClist__title 客服电话
                .UClist__helper 400-000-0000
            li.UClist
                .UClist__title 客服邮箱
                .UClist__helper 308627057@gmail.com
            li.UClist
                .UClist__title 客服电话
                .UClist__helper 400-000-0000
        footer-nav(v-bind:class="{'ismine':isNowPage}")
    </div>
</template>

<script>
    import status from '@/components/win-status/win-status.vue'
    import footer from '@/components/footer/footer.vue'

    export default {      
        components:{
            "status-nav":status,
            "footer-nav":footer,
        },
        data(){
            return{
                isNowPage:true
            }
        }
    }
</script>