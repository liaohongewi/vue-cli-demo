<template lang="pug">
    .page-group
        .page.page-index.page-current
            header-nav
            .content.native-scroll
                .user-form
                    from 
                        .phone-login
                            ul.form-list
                                li.b-line.flex-box
                                    i.iconfont.icon_mobile
                                    input.form-text.flex-1(placeholder="请输入手机号码/用户名" v-model="username") 
                                    i.iconfont.input-clear.j-name-clear(style="padding-right: 0;") 
                                li.b-line.flex-box
                                    i.iconfont.icon_password
                                    input.form-text.password.flex-1(placeholder="请输入密码" v-model="password") 
                                    i.iconfont.input-clear.j-password-clear 
                                    .eyes
                                        i.iconfont.eyes-no
                                        i.iconfont.eyes-yes
                            p.loginWarm 点击登录,即表示您同意
                                router-link(to="/agreement") 用户协议
                            input(type="hidden" name="act" value="dologin")
                            input(type="submit" value="登录" class="userBtn userBtn-red" @click="onSubmit")
                            router-link.getPsw(to="/backpassword") 找回密码
</template>

<script>
import header from '@/components/header-login/header-login.vue'
import Vue from "vue";
import axios from "axios";
import Vueaxios from "vue-axios";
import store from "@/store.js";

Vue.use(Vueaxios, axios);
export default {
    components:{
        "header-nav":header
    },
    data(){
        return{
            user : {username:'',password:''}
        }
    },
    methods:{
        onSubmit(){
            let newUser = {
                username: this.username,
                password: this.password
            }
            console.log(newUser)
            Vue.axios.post("https://easy-mock.com/mock/5b47190524cb747cf8888abb/store/login")
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        //    let LocalAPI =
        //     "https://www.easy-mock.com/mock/5b35d648e0f34d2ce19b965b/example/upload";
        //     this.info = "数据正在上传";
        //     Vue.axios.post(LocalAPI,{
        //         password:"123456",
        //         utoken:"liaohongwei"
        //     }).then(res => {
                
        //     });
        }
    }
}
</script>
