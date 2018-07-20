<template lang="pug">
    .page-group
        .page.page-index.page-current
            header-nav
            message-nav
                
</template>
<script>
import header from '@/components/header-login/header-message.vue'
import message from '@/components/message/message-list.vue'
export default {
    components:{
        'header-nav':header,
        'message-nav':message
    }
}
</script>

