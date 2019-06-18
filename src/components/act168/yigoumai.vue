<!--已购买-->
<template>
<div class="sd_jkh_dertx">
 
        <section class="sd_jh_ddrxe" @click="$emit('close_e')">
 
             
            <span class="close_sd yj">
                 <i class="dx dx icon-close1" @click="$emit('close_e')"></i>
            </span>

            <p class="youxiao_e z9" v-if="group_overdue_time_type==0">有效期为购买日起一年，无需重复购买 </p>
           <p class="youxiao_e z9" v-else>有效期至{{group_overdue_time}}，无需重复购买</p>
        </section>

</div>
</template>
<script>
    export default {
        props: {
            group_overdue_time: "",
            group_overdue_time_type:""
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
        height: 443px;
        background: url('https://mall.cangniaowl.com/static/img/168/yigoumai.jpg?v=6');
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

    .sd_jhj_deetx {
        position: absolute;
        left: 01px;
        bottom: 0px;
        width: 100%;
        min-height: 90px;
    }

    .sd_jh_deert {
        width: 210px;
        height: 40px;
        line-height: 40px;
        background: #fff;
        color: #217542;
        font-size: 16px;
        border-radius: 4px;
        text-align: center;
        margin: auto
    }

    .youxiao_e {
        position: absolute;
        left: 0px;
        width: 100%;
        text-align: center;
        bottom: 22%;
        left: 0px;
        font-size: 13px;
    }

</style>
