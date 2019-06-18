<template>
<div >
    <p class="ng_dfd_eert"></p>
    <section class="sd_jh_eet yj4 pd pt20 pm10">
        <p class="sd_jh_der">
        <i class="f_act jhg_ckas_e"></i>
        </p>
        <section class="sd_jh_deertt">
        <section class="yj4 bgff pd pt15 pm10 mt10" v-for="(sd,idx) in libao_list">
        
            <section class="lig_dfrrtt">
                礼包{{nusd[idx]}}
            </section>
            
            <section class="box cen mt10">
                <section class="box_a">
                    <img src="https://mall.cangniaowl.com/static/img/168/libao.png" class="libao_der">
                    <p class="fz12">礼包{{sd.id}}</p>
                </section>
                 <section class="box_a cz_w d_deerrtyt">
                     <section class="cz_a">
     <i class="f_act denghao_icon"></i> 
                    </section>
                       
                </section>
                
                 <section class="box_a">
                    <img :src="sd.user1_img" class="libao_der">
                    <p class="fz12">{{sd.user1_name}}</p>
                </section>
                
                
                 <section class="box_a pl10">
                    <img :src="sd.user2_img" class="libao_der">
                    <p class="fz12">{{sd.user2_name}}</p>
                </section>
            
            </section>
            
            <section class="mt10 pr">
                <img :src="sd.img" class="w100 cz">
                <p class="lingqu_er fz12 z6 dian">
                    领取时间:{{sd.date}}
                </p>
            </section>
            
    
        </section>
        </section>
        <i class="f_act close_icon_e" @click="$emit('close_e')"></i>
    </section>
</div>
</template>
<script>
    export default {
        props: {
            libao_list: ""
        },
        data() {
            return {
                nusd: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
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
    .ng_dfd_eert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 999
    }

    .sd_jh_eet {
        width: 21rem;
        min-width: 300px;
        margin: auto;
        background: #217646;
        position: fixed;
        left: 0px;
        right: 0;
        top: -20px;
        bottom: 0;
        margin: auto;
        height: 460px;
        z-index: 1000;
        
    }

    .sd_jh_deertt {
        height: 450px;
        overflow: auto;
    }

    .jhg_ckas_e {
        width: 241px;
        height: 49px;
        background-position: -10px -757px;
    }

    .sd_jh_der {
        position: absolute;
        width: 100%;
        top: -25px;
        text-align: center;
    }

    .lig_dfrrtt {
        width: 190px;
        margin: auto;
        text-align: center;
        color: #217643;
        font-weight: 600;
        position: relative
    }

    .lig_dfrrtt:after {
        content: ' ';
        position: absolute;
        left: 0px;
        width: 50px;
        top: 9px;
        border-top: 1px solid #217643;
    }

    .lig_dfrrtt:before {
        content: ' ';
        position: absolute;
        right: 0px;
        width: 50px;
        top: 9px;
        border-top: 1px solid #217643;
    }

    .libao_der {
        width: 65px;
        height: 65px;
    }

    .d_deerrtyt {
        height: 65px;
    }

    .denghao_icon {
        width: 31px;
        height: 10px;
        background-position: -299px -796px
    }

    .lingqu_er {
        position: absolute;
        left: 53%;
        bottom: -3px;

    }

    .close_icon_e {
        width: 21px;
        height: 21px;
        background-position: -304px -746px;
        position: absolute;
        left: 0;
        right: 0px;
        margin: auto;
        bottom: -40px
    }

</style>
