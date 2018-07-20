<template lang="pug">
    .page-group
        .page.page-index.page-current
            header-nav
            .content.native-scroll
                account-status
                ul.UClist-group
                    li.UClist
                        .UClist__main
                            i.UCicon.-zijinmingxi(style="margin-right: .5em;")
                            |资金明细
                        .UClist__helper
                            i.UCicon.-router
                    li.UClist
                        .UClist__main
                            i.UCicon.-tixian(style="margin-right: .5em;")
                            |提现
                        .UClist__helper
                            i.UCicon.-router     
                    li.UClist
                        .UClist__main
                            i.UCicon.-chongzhi(style="margin-right: .5em;")
                            |充值
                        .UClist__helper
                            i.UCicon.-router     
                    li.UClist
                        .UClist__main
                            i.UCicon.-tixianmingxi(style="margin-right: .5em;")
                            |提现明细
                        .UClist__helper
                            i.UCicon.-router     
                ul.UClist-group
                    li.UClist
                        .UClist__main
                            i.UCicon.-yinhangka(style="margin-right: .5em;")
                            |我的银行卡
                        .UClist__helper 未绑定
                            i.UCicon.-router
</template>

<script>
import header from '@/components/header-login/header-account.vue'
import account from '@/components/win-status/win-account.vue'
export default {
    components:{
        'header-nav':header,
        'account-status':account
    }
}
</script>
