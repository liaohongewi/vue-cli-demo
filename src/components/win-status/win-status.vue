<template lang="pug">
    .UCcenter
        router-link.UCcenter__router(to="/login")
            i.UCicon.-setting
        router-link.UCcenter__avatar(to="/login")
            img.UCavatar(src="@/assets/images/UserCenter/avatar.png")
        router-link.UCcenter__router(to="/login")
            i.UCicon.-email
        router-link.UCcenter__helper(to="/login") 账户管理&ensp;
            i.UCicon.-router
</template>
