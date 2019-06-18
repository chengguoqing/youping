<!--分享名片-->
<template>
<div class="sd_deert">

<img :src="fen_url" class="w100 cz">
</div>
</template>
<script>
    export default {
        data() {
            return {
                fen_url: ""
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            this.fen_url = "https://api.cangniaowl.com/v1/huazhuang/visitingCard?token=" + this.token
        },
    }

</script>
<style scoped>

    .sd_deert{
        margin-top: -80px;
    }
    .sd_deert img{
       position: relative;
        top: 80px;
    }
</style>
