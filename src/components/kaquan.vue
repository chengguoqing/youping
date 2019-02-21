<!--优惠券-->
<template>
	<div :class="can_receive_coupon?'ssd_sdd_s':''">
        <p v-if="can_receive_coupon" class="pd pt10 fz16 z3" >{{lihg_e}}</p>

    <ul class="df_jh_dr pt50 pd pr5 " v-if="sd_iuys.length>0">

			<li class="mui-row pr" v-for="(ss,idx) in  sd_iuys" :class="ss.tye_ew" @click="xz_sdf(idx)">
				<section class="f_i dsf_jh_dertx cz_w fl">
					<section class="cz_a cf pt10 ">
						<span>￥ <span class="fz40">{{ss.discount_amount}}</span></span>
						<p class="cf fz12">
							{{ss.use_condition}}
						</p>

					</section> 
				</section>
				<section class="ov pl5 pr dsf_jh_deert" style="z-index:10001">

					<p class="fz16 mt15 z3">{{ss.type_name}}</p>
                    
                    <p class="df_deerert">{{ss.use_scope_text }}</p>
                    <p class="tr pr10  df_jh_Dert" >
                        <button class="lijiqung_s" v-if="is_lqing&&ss.tye_ew!='ae'" @click="lijilingqu(idx,ss.type_id)">立即领取</button>
                    </p>
					<p class="fz12 fds_jh_derx z9">
						有效期：{{ss.use_date_text}}
					</p>

				</section>
				<i class="f_i sdsf_jgh_sd gder"></i>

                <img src="http://mall.cangniaowl.com/static/img/gouxuan.png" class="gouxuan" v-if="is_g&&ss.cls">
			</li>
		</ul>
        <section v-else>

           <section v-if="yhuiquna" class="cen pt40 pm30">
                <p >
                    <img src="http://mall.cangniaowl.com/static/img/yhquan.png" class="piaouqnqe   ">
                </p>
            <p class="cen z9 fz12 mt10">{{yhuiquna}}</p>
            </section>
            <kongbai :kb="kb" v-else></kongbai>
        </section>

	</div>
</template>
<script>
    import kongbai from "./kongbai.vue"
    
    import {
        MessageBox
    } from 'mint-ui';
    export default {
        props: {
            sd_uius: "",
            status: "",
            is_lqing: "", //是否显示领取按钮
            lihg_e: "", //标题
            is_g: "", //是否显示勾选
            can_receive_coupon: "", 
            yhuiquna: ""
        },
        data() {
            return {
                sd_iuys: [],
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "没有更多数据了",
                    btn_name: "返回个人中心",
                    btn_url: "user",
                }
            }
        },
        components: {
            kongbai
        },
        methods: {
            xz_sdf(idx) {
                if (this.sd_iuys[idx].cls != "act") {
                    this.sd_iuys.map(a => {
                        a.cls = ""
                    })
                    this.sd_iuys[idx].cls = "act"
                    let sd_dert = {}
                    sd_dert.coupon_id = this.sd_iuys[idx].coupon_id
                    sd_dert.discount_amount = this.sd_iuys[idx].discount_amount
                    this.$emit("coupon_id", sd_dert)
                }else{
                    this.sd_iuys[idx].cls = ""
                    let sd_dert = {}
                    sd_dert.coupon_id = 0
                    sd_dert.discount_amount =0
                    this.$emit("coupon_id", sd_dert)
                }

            },
            lijilingqu(idx, i_d) { //立即领取按钮触发
                let receive = {}
                receive.token = this.token
                receive.type_id = i_d
                this.sd_iuys[idx].tye_ew = "ae"
                this.post("coupon/receive", receive, function() {
                    //                    MessageBox('提示', "领取成功");
                })
            },
            chush_sd() {
                let th = this
                try {
                    this.can_receive_coupon.map((a, b) => {
                        let sd_ert = {}
                        sd_ert.tye_ew = ""
                        if (this.status == 1) {
                            sd_ert.tye_ew = "ac"
                        }
                        if (this.status == 2) {
                            sd_ert.tye_ew = "ad"
                        }
                        sd_ert.istrue = 0
                        sd_ert.cls = ""
                        if (b == 0) {
                            sd_ert.cls = "act"
                        }
                        sd_ert.type_name = a.type_name //优惠券名称
                        sd_ert.type_desc = a.type_desc //优惠券简介
                        sd_ert.discount_amount = a.discount_amount //优惠金额
                        sd_ert.use_condition = a.use_condition //使用条件
                        sd_ert.use_date_text = a.use_date_text //有效期
                        sd_ert.type_id = a.type_id
                        sd_ert.coupon_id = a.coupon_id
                       sd_ert.use_scope_text= a.use_scope_text
                        th.sd_iuys.push(sd_ert)
                    })

                } catch (e) {

                }

            }
        },
        mounted() {
            this.chush_sd()
        },
        watch: {
            can_receive_coupon: {
                handler: function() {
                    this.sd_iuys = []
                    this.chush_sd()
                },
                deep: true
            },

        }


    }

</script>
<style>
    .ssd_sdd_s p.cen.mt20.pl20.pr20 {
        display: none
    }

    .ssd_sdd_s .dsf_khj_ert .mt100 {
        margin-top: 50px !important
    }

</style>
<style scoped>
    .df_jh_dr li {
        background: #fff;
        height: 110px;
        margin-top: 10px;
        position: relative;
    }

    .dsf_jh_dertx {
        width: 130px;
        height: 111px;
        background-position: -8px -709px;
        position: relative;
        left: -5px;
        bottom: 0px;
    }

    .fds_jh_derx {
        margin-top: 15px;
        line-height: 1.5
    }

    .lijiqung_s {
        border: 1px solid #0076EF;
        color: #0076EF;
        padding: 0px;
        border-radius: 8px;
        padding: 1px 10px;
        font-size: 12px;
    }

    .df_jh_dr li.ab .dsf_jh_dertx {
        background-position: -8px -824px;
    }

    .df_jh_dr li.ac .dsf_jh_dertx,
    .df_jh_dr li.ad .dsf_jh_dertx {
        background-position: -194px -881px;
    }

    .sdsf_jgh_sd {
        width: 76px;
        height: 57px;
        background-position: -273px -792px;
        position: absolute;
        right: 10px;
        top: 25px;
        z-index: 10000;
        opacity: 0;
        transform: scale(1.5);
    }

    .df_jh_dr li.ac .sdsf_jgh_sd {
        opacity: 1;
        transform: scale(1)
    }

    .df_jh_dr li.ad .sdsf_jgh_sd {
        opacity: 1;
        background-position: -273px -716px;
        transform: scale(1)
    }

    .df_jh_dr li.ae .sdsf_jgh_sd {
        opacity: 1;
        background-position: -207px -1052px;
        transform: scale(1)
    }

    .df_jh_Dert {
        height: 25px;
        margin-top: 8px;
        overflow: hidden;
    }

    .gouxuan {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }

    .piaouqnqe {
        width: 100px;
        height: 100px;
    }
    .df_deerert{
        position: absolute;
        left: 0px;
        top: 45px;
        left: 6px;
    }
    .dsf_jh_deert{
        height: 109px;
    }

    @media screen and (max-width: 340px) {
        .dsf_jh_dertx {
            width: 110px;
        }
        .fds_jh_derx {
            transform: scale(0.9);
            position: relative;
            left: -10px;
            white-space: nowrap;
        }
    }

    @media screen and (min-width: 400px) {
        .dsf_jh_dertx {
            width: 140px;
            margin-right: 5px;
        }
        .fds_jh_derx {
            transform: scale(0.9);
            position: relative;
            left: -10px;
            white-space: nowrap;
        }
        .fds_jh_derx {
            line-height: 1.8
        }
    }

</style>
