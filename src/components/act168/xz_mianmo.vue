<!--选择面膜-->
<template>
<div class="xzmian_rt">
    <p  @touchmove.prevent class="sd_kh_deeerrt"></p>
    <section class="denglu_bg pr">
        <p class="cen sdf_fdfr_er">
            <i class="f_act ser_nk_e"></i>
        </p>
        <section class="mui-row pd df_jh_vdrt">
            <section class="mui-col-xs-6 pdfd_deert" v-for="sd in df_sdf" @click="sdf_dff(sd)"> 
                <section class="sd_jh_derter yj4 pr">
                    <i class="f_act gousd_derrt " :class="sd.cls"></i>
                    <img :src="sd.img" class="cz">
                    <p class="sd_jh_derrt dian">
                        <span class="cz">{{sd.name}}</span>
                    </p>
                </section>
            </section> 
        </section>
        
        
        <section class="mui-row cen mt10 pm10">
            <section class="mui-col-xs-6 ">
                <i class="f_act kh_qiusddrt" @click="$emit('close_sd')"></i>
            </section>
                   <section class="mui-col-xs-6 ">
                <i class="f_act kh_qiusddrt ab"  @click="queren_dr"></i>
            </section>
    </section>
    </section>

</div>
</template>
<script>
    export default {
        props: {
            df_sdf: "",
            sd_jh_sd:""
        },
        data() {
            return {
                
            }
        },
        components: {

        }, 
        methods: {
            queren_dr() {
                let order_formqueren = {}
                order_formqueren.token = this.token
                this.df_sdf.map(a => {
                    if (a.cls) {
                      
                        order_formqueren.goods_number = 1
                        order_formqueren.step = 1
                        order_formqueren.goods_id = a.goods_id
                        order_formqueren.goods_attr_id = a.goods_attr_id
                        order_formqueren.regular_check_time_start=this.sd_jh_sd.regular_check_time_start
                         order_formqueren.regular_check_time_end=this.sd_jh_sd.regular_check_time_end
                        
                        this.hf('order_formqueren', order_formqueren)
                    }
                })
                this.$emit('close_sd')
            },
            sdf_dff(sd) {
                this.df_sdf.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .xzmian_rt {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        
        z-index: 10000
    }
    .sd_kh_deeerrt{
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }

    .denglu_bg {
        background: #fff;
/*        width: 21.5rem;*/
        width: 90%;
        min-width: 300px;
        margin: auto;
        border: 1px solid #FCE5B7;
        min-height: 200px;
       margin-top: 25%;
        border-radius: 4px;
    }

    .sdf_fdfr_er {
        margin-top: -28px;
    }

    .ser_nk_e {
        width: 256px;
        height: 47px;
        background-position: -8px -1156px;
    }

    .sd_jh_derter {
        overflow: hidden;
        box-shadow: 0 0px 8px rgba(0, 0, 0, .1);
    }

    .sd_jh_derter img {
        width: 100%;
    }

    .sd_jh_derrt {
        color: #a54a00;
        text-align: center;
        font-size: 12px;
        line-height: 25px;
        background: #F9E1B8
    }

    .pdfd_deert {
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 15px;
    }

    .df_jh_vdrt {
        height:350px;
        overflow: auto;
    }

    .gousd_derrt {
        width: 21px;
        height: 21px;
        background-position: -118px -331px;
        position: absolute;
        right: 5px;
        top: 5px;
        z-index: 100
    }

    .gousd_derrt.act {
        background-position: -164px -331px;
    }

    .kh_qiusddrt {
        width: 155px;
        height: 37px;
        background-position: -10px -368px;
    }

    .kh_qiusddrt.ab {
        background-position: -10px -414px
    }

</style>
