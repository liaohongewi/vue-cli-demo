<template lang="pug">
    .page-group
        .page.page-index.page-current(style="background: #FFFFFF")
            .popup
                header-nav
                .protocol
                    article.protocol
                        section
                            h2 第一条 服务条款
                            p Demo-liao提供的服务将完全按照其发布的使用协议、服务条款和操作规则严格执行。为获得途牛服务，服务使用人（以下称“会员”）应当同意本协议的全部条款并按照页面上的提示完成全部的注册程序。
                        section
                            h2 第二条 目的
                            p 本协议是以规定用户使用Demo-liao提供的服务时，会员间的权利、义务、服务条款等基本事宜为目的。
                        section
                            h2 第三条 服务内容
                            p Demo-liao的具体内容由本网站根据实际情况提供，本网站保留随时变更、中断或终止部分或全部服务的权利。
                        section
                            h2 第四条 会员的义务
                            p 用户注册成功后，本网站将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。
                        section
                            h2 第五条 免责声明
                            p 本网站禁止制作、复制、发布、传播等具有反动、色情、暴力、淫秽等内容的信息，一经发现，立即删除。若您因此触犯法律，我们对此不承担任何法律责任。
</template>

<script>
import header from '@/components/header-login/header-agreement.vue'
export default {
    components:{
        'header-nav':header
    }
}
</script>
