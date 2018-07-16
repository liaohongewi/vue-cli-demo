<template lang="pug">
    nav.bar.bar-tab
        router-link.tab-item(to="/")
            span.icon.iconfont.i-home
            span.tab-label.homefont 首页
        router-link.tab-item(to="/")
            span.icon.iconfont.i-find
            span.tab-label.findfont 分类
        router-link.tab-item(to="/")
            span.icon.iconfont.i-shopcart
            span.tab-label.shopcartfont 购物车
        router-link.tab-item(to="/userindex")
            span.icon.iconfont.i-mine
            span.tab-label.minefont 我的
</template>