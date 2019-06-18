<!--不是会员-->
<template>
<div class="sd_jkh_dertx">

        <section class="sd_jh_ddrxe">
           
            <span class="close_sd yj">
                 <i class="dx dx icon-close1" @click="$emit('close_e')"></i>
            </span>
           
        </section>

</div>
</template>
<script>
    export default {
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
    .sd_jkh_dertx {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }

    .sd_jh_ddrxe {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 100px;
        margin: auto;
        z-index: 100;
        width: 300px;
        height: 333px;
        background: url('/static/img/new168/no_huiyuan.png');
        background-size: 100% 100%;

    }



    .close_sd {
        border: 1px solid #fff;
        color: #fff;
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        position: relative;
        top: 5px;
        text-align: center;
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
        bottom: -120%
    }

</style>
