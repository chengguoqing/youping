<!--名片分享弹窗-->
<template>
    <div >

        
        
        
              <section class="sd_jh_deer show" >
            <section class="sdf_jh_dff cen" :style="{height:heightrf_d+'px'}">
    <img   v-lazy="url" class="w100" @click="$emit('ycsd_d')">
        <div class="sdf_jh_deer">
           
              
        <span class="close_sd yj" @click="$emit('ycsd_d')">
        <i class="dx icon-close1"></i>
    </span>
    </div>
        </section>
        </section>
        
        
        
         
    </div>
        </template>
<script>
    export default {
        props: {
            is_sd_fn: "",
            url: "",
            msg: "",
            heightrf_d:0,
            be_helped_friend_user_id: ""
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
<style>
    .sd_jh_deer img[lazy=loading] {
        width: 100px !important;
        height: 100px;
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto
    }

</style>
<style scoped>
    .pup_deert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000
    }
 
    .sdf_jh_Dertt {
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 290px;
        height: 500px;
        margin: auto;
        background: url(/static/img/tancbei.png);
        background-size: 100% 100%;
        z-index: 100001
    }

    .dsf_jjh_der {
        text-align: center;
        margin-top: 67px;
    }

    .dsf_jjh_der img {
        width: 150px;
        height: 150px;
        vertical-align: bottom
    }

    .zuij_der {
        width: 50px;
        height: 21px;
        background-position: -132px -543px;
    }

    .sdf_kjh_dert {
        position: relative;
        top: 3px;
    }

    .sdjhg_de_er {
        border-top: 1px dashed #E87373;
    }




    .sd_jh_deer {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: none;
        z-index: 10000
    }

    .sdf_jh_dff {
        width: 290px;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 50px;
        margin: auto;
    }

    .sdf_jh_dff img {
    }

    .sdf_jh_deer {
        position: absolute;
        left: 0px;
        bottom: -62px !important;
        width: 100%;
        text-align: center;
    }

    .close_sd {
        border: 1px solid #fff;
        color: #fff;
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        position: relative;
        top: 10px;

    }

    .feng_deer {
        position: absolute;
        right: 10px;
        top: 60px;
        z-index: 1000;
        line-height: 1.2 
    }

    .feng_deer img {
        width: 25px;
        height: 25px;
    }






    @media screen and (max-width: 380px) {
        .sdf_jh_dff {
            width: 240px;
            bottom: 70px;
        }
    }

    @media screen and (min-width: 380px) {
        .sdf_jh_dff {
            width: 300px;
            bottom: 70px;
        }
    }

</style>
