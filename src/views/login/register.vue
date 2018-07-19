<template lang="pug">
    .page-group
        .page.page-index.page-current
            header-nav
            .content.native-scroll
                .user-form(tyle="padding: 0 1.25rem")
                    from
                        .phone-login
                            ul.form-list
                                li.b-line.flex-box
                                    i.iconfont.icon_mobile
                                    input.form-text.flex-1(type="tel" placeholder="请输入手机号码")
                                li.b-line.flex-box
                                    i.iconfont.icon_password
                                    input.form-text.flex-1.password(type="password" placeholder="请输入密码")
                                li.b-line.flex-box
                                    i.iconfont.icon_code
                                    input.form-text.flex-1(type="number" placeholder="请输入手机验证码")
                                    input.sendBtn.j-sendBtn.noUseful(type="button" unique="1" lesstime="0" value="发送验证码")
                            p.loginWarm 点击登录,即表示您同意
                                router-link.open-popup(to="/login") 用户协议
                            input.userBtn.userBtn-yellow(type="button" value="注册")
</template>

<script>
import header from '@/components/header-login/header-register.vue'

export default {
    components:{
        "header-nav":header
    },
}
</script>
