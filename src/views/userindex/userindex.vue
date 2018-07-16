<template>
    <div>
        <status-nav></status-nav>
        <ul class="UClist-group">
            <li class="UClist">
                <div class="UClist__title">余额</div>
                <div class="UClist__main" style="color: #f3e037;">
                    <span>1000</span><span style="font-size: small;">元</span>
                </div>
            </li>
        </ul>
        <ul class="UClist-group">
            <li class="UClist">我的订单</li>
            <li class="UClist">
                <div class="UClist__title">商城单</div>
                <div class="UClist__helper">
                    <i class="UCicon -router"></i>
                </div>
            </li>
            <li class="UClist">退款/售后</li>
            <li class="UClist">我的评价</li>
        </ul>
        <!-- page AboutUs -->
        <ul class="UClist-group">
            <li class="UClist">
                <div class="UClist__title">当前版本</div>
                <div class="UClist__helper">
                    1.7
                </div>
            </li>
            <li class="UClist">
                <div class="UClist__title">客服电话</div>
                <div class="UClist__helper">
                    400-000-0000
                </div>
            </li>
            <li class="UClist">
                <div class="UClist__title">客服邮箱</div>
                <div class="UClist__helper">
                    308627057@gmail.com
                </div>
            </li>
        </ul>
         <footer-nav></footer-nav>
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
    }
</script>