<template lang="pug">
    .page-group
        .page.page-index.page-current
            header-nav
            .content.native-scroll
                ul.UClist-group
                    li.UClist
                        .UClist__title 头像
                        .UClist__helper
                            img.UCavatar.-small(src="@/assets/images/UserCenter/avatar.png")
                            i.UCicon.-router
                    li.UClist
                        .UClist__title 会员名
                        .UClist__helper 富贵
                            i.UCicon.-router
                    li.UClist
                        .UClist__title 绑定手机
                        .UClist__helper 157****5511
                            i.UCicon.-router
                    li.UClist
                        .UClist__title 修改密码
                        .UClist__helper ******
                            i.UCicon.-router
                footer-nav             
</template>
<script>
import header from '@/components/header-login/header-setting.vue'
import footer from '@/components/footer/footer-logout.vue'
export default {
    components:{
        'header-nav':header,
        'footer-nav':footer
    }
}
</script>

