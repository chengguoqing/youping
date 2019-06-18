<template>
<div  class="sd_jh_deet">
<p class="sdf_ng_detr" @click="$emit('close_e')"></p>
<section class="pr fenxiang_xer pr">
    <img src="https://mall.cangniaowl.com/static/img/fenxiang_xer.png">
    <p class="cen cf fz12 df_jh_deerrt">
        凑满{{renshu}}人，商家才会发货哦
    </p>
</section>

</div>
</template>
<script>
    export default {
        props: {
            renshu: ""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .fenxiang_xer {
        width: 300px;
        margin: auto;
    }

    .fenxiang_xer img {
        width: 100%
    }

    .sdf_ng_detr {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .sd_jh_deet {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100000
    }

    .df_jh_deerrt {
        position: absolute;
        left: 0px;
        bottom: 25px;
        width: 100%;
    }

</style>
