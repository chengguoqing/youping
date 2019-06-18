<!--选择面膜-->
<template>
<div class="xzmian_rt">
    <p  @touchmove.prevent class="sd_kh_deeerrt"></p>
    <section class="denglu_bg pr">
        <p class="cen sdf_fdfr_er">
            <i class="f_act_dcert ser_nk_e"></i>
        </p>

        <ul>
            <li class="pd pt10 pm10 btm" @click="gouxun=idx" v-for="(sd,idx) in df_sdf">
                 <i class="f_p_ert gouxuan_der" :class="gouxun==idx?'act':''"></i>
                <span class="ml10 z3 fz14">{{sd.label}}</span>
            </li>
        </ul>
        
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
            sd_jh_sd: "",
            lis_sdfeer: "",
            goods_id: ""
        },
        data() {
            return {
                gouxun: -1,
                sku_data: ""
            }
        },
        components: {

        },
        methods: {
            async queren_dr() {
                let order_formqueren = {}
                order_formqueren.token = this.token
                if (this.gouxun == -1) {
                    return
                }
                var a = this.df_sdf[this.gouxun]

                var sd_der = {}
                sd_der.attrs = `${this.lis_sdfeer.attr_id}:${a.label}`
                sd_der.goods_id = this.goods_id
                this.sku_data = await this.post_new("product/getattrprices", sd_der)

                console.log(this.sku_data);
                order_formqueren.goods_number = 1
                order_formqueren.step = 1
                order_formqueren.goods_id = this.goods_id
                order_formqueren.goods_attr_id = this.sku_data.id
                order_formqueren.regular_check_time_start = this.sd_jh_sd.regular_check_time_start
                order_formqueren.regular_check_time_end = this.sd_jh_sd.regular_check_time_end
                this.hf('order_formqueren', order_formqueren)

                this.$emit('close_sd')
            },
            sdf_dff(sd) {
                this.df_sdf.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
            },
            async sd_derr(label) {

            }
        },
        mounted() {
            console.log(this.lis_sdfeer);
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

    .sd_kh_deeerrt {
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
        background-position: -11px -913px;
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
        height: 350px;
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

    .gouxuan_der {
        width: 19px;
        height: 19px;
        background-position: -46px -503px;
    }

    .gouxuan_der.act {
        background-position: -10px -503px;
    }

</style>
