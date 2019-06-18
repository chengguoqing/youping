<template>
<div class="cz_w dfg_jh_deetr"  :style="{'margin-top':date_e.margin_top+'px',height:date_e.height+'px',width:date_e.width+'%','margin-left':date_e.margin_left+'px'}">

    <section class="cz_a" v-if="!date_e.url_sp">
        <img src="https://mall.cangniaowl.com/static/img/zhuangxiu/bofang.png" class="bofangdsr">
    </section>
    
    <video :poster="date_e.pic" preload="auto" :src="date_e.url_sp" ref="ship_e" v-else class="Dsf_derrtt" controls></video>
    

    
</div>
</template>
<script>
    export default {
        props: {
            date_e:""
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
    .dfg_jh_deetr{
        background: #e0e0e0;
        width: 100%;
    }
    .bofangdsr{
        width: 48px;
    }
    .Dsf_derrtt{
        width: 100%;
        height: 100%;
        background: #000
    }

</style>
