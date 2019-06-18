<!--优惠券-->
<template>
<section>
	<div :class="can_receive_coupon?'ssd_sdd_s':''" class="pr">
        <section class="sd_jjh_deetrt">
        <p v-if="can_receive_coupon&&!is_g" class="pd pt10 fz16 z3" >{{lihg_e}}</p>

    <ul class="df_jh_dr pt50 pd pr5 " v-if="sd_iuys.length>0">

			<li class="mui-row pr  " v-for="(ss,idx) in  sd_iuys" :class="ss.tye_ew" @click="xz_sdf(idx)">
              
				<section class="f_i dsf_jh_dertx cz_w fl">
					<section class="cz_a cf pt10 ">
						<span v-if="ss.coupon_type!=2">￥<span class="fz30">{{ss.discount_amount}}</span></span>
                        	<span v-else> <span class="fz30">免</span></span>
						<p class="cf fz12 mt2">
							{{ss.use_condition}}
						</p>

					</section> 
				</section>
				<section class="ov pl5 pr dsf_jh_deert" style="z-index:10001">
  <i class="f_p_ert dou_roiyhe " v-if="ss.date_time_status==1"></i>
                  <i class="f_p_ert dou_roiyhe ab" v-if="ss.date_time_status==2"></i>
					<p class="fz16 mt15 z3">{{ss.type_name}}</p>
                    
                    <p class="df_deerert">{{ss.use_date_text }}</p>
                    <p class="tr pr10  df_jh_Dert" >
                        <button class="lijiqung_s" v-if="is_lqing&&ss.tye_ew!='ae'" @click="lijilingqu(idx,ss.type_id)">立即领取</button>
                    </p>
                    					<p class="fz12 fds_jh_derx z9 pr" @click="ss.clm?ss.clm=0:ss.clm=1">
						详细信息<i class="f_p_ert down_rted gd" :class="ss.clm==1?'act':''"></i>
					</p>
                    
<!--
					<p class="fz12 fds_jh_derx z9">
						有效期：{{ss.use_date_text}}
					</p>
-->

				</section>
				<i class="f_i sdsf_jgh_sd gder" ></i>

<!--                <img src="http://mall.cangniaowl.com/static/img/gouxuan.png" class="gouxuan" v-if="is_g&&ss.cls">-->
<!--                -->
                <i class="f_p_ert gou_det" :class="ss.yhq_er?'act':''" @click="sd_ddf_s(ss)" v-if="is_g"></i>
                
                <p class="qc"></p>
                   <section class="bgff tl pd pt5 pm5 fz12 z6 fz12" v-if='ss.clm'>
                       <p class="z3 fz12 ">{{ss.use_scope_text}}</p>
          <span class="fdg_h_derr f_b">{{ss.type_details}}</span>  
            </section>
             
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
</section>
        
        
          
        
        
	</div>
       <p class=" pt10 btm fg_jkhj_der pd" v-if="is_g">
            <button class="mui-btn-red w100 fz16 pt10 pm10" @click="huitian_er">确定</button>
        </p>
    </section>
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
            yhuiquna: "",
            is_dfg: 0, //0单选 1多选
            coupon_setting: ""
        },
        data() {
            return {
                sd_iuys: [],
                is_sdf: false,
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
                } else {
                    this.sd_iuys[idx].cls = ""
                    let sd_dert = {}
                    sd_dert.coupon_id = 0
                    sd_dert.discount_amount = 0
                    this.$emit("coupon_id", sd_dert)
                }

            },
            lijilingqu(idx, i_d) { //立即领取按钮触发
                let receive = {},
                    th = this
                receive.token = this.token
                receive.type_id = i_d
                this.sd_iuys[idx].tye_ew = "ae"
                this.post("coupon/receive", receive, function() {
                    th.$emit('huiti')
                })
            },
            sd_ddf_s(ss) {

                if (this.is_dfg == 1) {
                    var sd_sdf = 0
                    this.sd_iuys.map(a => {
                        if (a.yhq_er == 1) {
                            sd_sdf++
                        }
                    })
                    if (sd_sdf >= this.coupon_setting.cash_coupon_max_count) {
                        this.$notify('优惠券最多选择' + this.coupon_setting.cash_coupon_max_count + "张");
                        ss.yhq_er = 0
                    } else {
                        ss.yhq_er ? ss.yhq_er = 0 : ss.yhq_er = 1
                    }

                } else {
                    this.sd_iuys.map(a => {
                        a.yhq_er = 0
                    })
                    ss.yhq_er = 1
                }

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
                        sd_ert.clm = ""
                        sd_ert.type_name = a.type_name //优惠券名称
                        sd_ert.type_desc = a.type_desc //优惠券简介
                        sd_ert.discount_amount = a.discount_amount //优惠金额
                        sd_ert.use_condition = a.use_condition //使用条件
                        sd_ert.use_date_text = a.use_date_text //有效期
                        sd_ert.type_details = a.type_details
                        sd_ert.type_id = a.type_id
                        sd_ert.coupon_id = a.coupon_id
                        sd_ert.use_scope_text = a.use_scope_text
                        sd_ert.coupon_type = a.coupon_type
                        sd_ert.use_scope_text = a.use_scope_text
                        sd_ert.date_time_status = a.date_time_status //1快过期 2新到
                        sd_ert.yhq_er = 0
                        th.sd_iuys.push(sd_ert)
                    })

                } catch (e) {

                }

            },
            huitian_er() {
                let sd_ds = false,
                    jiner = 0, //选择的优惠券金额
                    sd_ddfg=[]
                this.sd_iuys.map(a => {
                    if (a.yhq_er == 1) {
                        sd_ds = true
                        jiner += a.discount_amount
                        sd_ddfg.push(a.coupon_id)
                    }
                })
                if (!sd_ds) {
                    this.$notify('请选择优惠券');
                }
                var sd_df={}
                sd_df.jiner=jiner.toFixed(2)
                sd_df.sd_ddfg=sd_ddfg.join(',')
                this.$emit('geujin', sd_df)
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
   .sd_kjh_deert .ssd_sdd_s {
    overflow: auto;
       max-height: 340px;
}

</style>
<style scoped>
    .sd_jjh_deetrt{
        overflow: hidden
    }
    .df_jh_dr li {
        background: #fff;
        min-height: 110px;
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
        padding: 1px 8px;
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
        position: relative;
        right: -5px;
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

    .df_deerert {
        position: absolute;
        left: 0px;
        top: 45px;
        left: 6px;
    }

    .dsf_jh_deert {
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

    .down_rted {
        width: 13px;
        height: 13px;
        background-position: -303px -391px;
        position: absolute;
        right: 10px;
        top: 5px;
    }

    .down_rted.act {
        transform: rotate(180deg)
    }

    .fdg_h_derr {
        white-space: pre-wrap;
        line-height: 1.5;

    }

    .dou_roiyhe {
        width: 56px;
        height: 49px;
        background-position: -93px -438px;
        position: absolute;
        right: -10px;
        top: -10px;
    }

    .dou_roiyhe.ab {
        background-position: -10px -438px;
    }

    .gou_det {
        width: 21px;
        height: 20px;
        background-position: -254px -467px;
        position: absolute;
        right: 10px;
        top: 40px;
        z-index: 100000
    }

    .gou_det.act {
        background-position: -204px -467px;
    }
    .fg_jkhj_der{
/*
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 100;
        border: 0px !important
*/
    }

</style>
