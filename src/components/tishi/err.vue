<!--错误提示-->
<template>
<div >
<p class="sd_jh_dert" @touchmove.prevent></p>
    <section class="sd_eretrthg yj4" @click="$emit('close')" @touchmove.prevent>
    
        <p class="fz12 z3 sdf_jh_df cen">{{msg}}</p>
    </section>
    
    

</div>
</template>
<script>
    export default {
        props: {
            msg: ""
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
    .sd_eretrthg {
        background: url('https://mall.cangniaowl.com/static/img/gantan.png');
        background-size: 100% 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        margin: auto;
        width: 250px;
        height: 230px;
        z-index: 1000
    }

    .sd_jh_dert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999
    }

    .sdf_jh_df {
        position: absolute;
        left: 0px;
        width: 100%;
       top:58%;
    line-height: 1.4;
    padding-left: 20px;
    padding-right: 20px;
    }

</style>
