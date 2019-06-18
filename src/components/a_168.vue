<!--分享名片-->
<!--名片分享弹窗-->
<template>
    <div >

        
        
         
              <section class="sd_jh_deer show" >
            <section class="sdf_jh_dff cen">
 
                <section class="sd_jh_dertwert cz_w cen w100" v-if="isd_df">
                    <section class="cz_a f_b">
                    <div class="sd_kjj_Dert  ">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
                        <p class="cf mt20">玩命加载...</p>
                    </section>
                    
                    
                </section>
                 <img   :src="lj_sdf" class="w100" ref="ds_jj_drt" >
        <div class="sdf_jh_deer">
            <p class="cf pt20 fz12" v-if="!msg">召集20名好友帮你助力，即可砍至底价<br>
长按图片分享好友</p>
                <p class="cf pt20 fz12" v-if="msg">{{msg}}</p>
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
            msg: "",
            be_helped_friend_user_id: ""
        },
        data() {
            return {
                lj_sdf: "",
                isd_df:true
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            var sd_ddr=api_url.split("/v1")[0]
            this.lj_sdf =sd_ddr+ `/v1/card/activity?token=${this.token}&_id=` + this.$route.query._id
            
            this.$refs.ds_jj_drt.onload= a=>{
                this.isd_df=false
            }

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
        height: 500px;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 50px;
        margin: auto;
    }

    .sdf_jh_dff img {
        height: 100%;
    }

    .sdf_jh_deer {
        position: absolute;
        left: 0px;
        bottom: -77px !important;
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
            width: 300px;
            height: 460px;
            bottom: 70px;
        }
    }

    @media screen and (max-width: 330px) {
        .sdf_jh_dff {
            width: 250px;
            height: 380px;
            bottom: 70px;
        }
        .sdf_jh_deer {
            bottom: -65px !important
        }
    }

    @media screen and (min-width: 380px) {
        .sdf_jh_dff {
            width: 300px;
            height: 502px;
            bottom: 70px;
        }
    }



    .sd_jh_dertwert{
        height: 100%
    }

    .sd_kjj_Dert {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 2em;
        margin: auto
    }

     .sd_kjj_Dert span {
        width: 0.3em;
        height: 1em;
        background-color: #3cefff;
    }

    .sd_kjj_Dert  span:nth-of-type(1) {
        animation: grow 1s -0.45s ease-in-out infinite;
    }

     .sd_kjj_Dert span:nth-of-type(2) {
        animation: grow 1s -0.3s ease-in-out infinite;
    }

    .sd_kjj_Dert  span:nth-of-type(3) {
        animation: grow 1s -0.15s ease-in-out infinite;
    }

    .sd_kjj_Dert  span:nth-of-type(4) {
        animation: grow 1s ease-in-out infinite;
    }

    @keyframes grow {
        0%,
        100% {
            transform: scaleY(1);
        }

        50% {
            transform: scaleY(2);
        }
    }

</style>
