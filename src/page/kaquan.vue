<template>
    <div >
         <section  class="youhuiquan">
                <img src="/static/img/youhuiquan.jpg" class="kx">
           
             
     
             
                 <ul class="df_jh_dr pt50 pd pr5 ov" >

			<li class="mui-row pr" v-for="(ss,idx) in  user_Own" :class="ss.tye_ew" >
               
                
                
                
                <span class="dsf_kjj_eet ab">
                            <span class="dian_der_e" v-for="sd in 10"></span>
                    </span>
                
                
				<section class="f_i dsf_jh_dertx cz_w fl">
                     <span class="dsf_kjj_eet">
                            <span class="dian_der_e" v-for="sd in 10"></span>
                    </span>
                    <span class="diy_eertx"></span>
                      <span class="diy_eertx ab"></span>
					<section class="cz_a cf pt10 ">
						<span>￥ <span class="fz40">{{ss.discount_amount}}</span></span>
						<p class="cf fz12">
							{{ss.use_condition}}
						</p>
 
					</section> 
				</section>
				<section class="ov pl5 pr cen" style="z-index:10001">

					<p class="fz16 mt10 z3">
					<p class="fz16 mt10 z3 dian">
                        {{ss.type_name}}
                    </p>
                    <p class="z9 fz12">{{ss.use_scope_text}}</p>
            
					<p class="fz12 fds_jh_derx z9">
						有效期：{{ss.use_date_text}}
					</p>
                    <p class="sd_hjh_der">
                    
                        <button v-if="ss.coupon_id>0" class="df_kj_dert" @click="hf('')">立即使用</button>
                         <button v-else @click="lingqu(ss.type_id)">立即领取</button>
                    </p>

				</section>
				<i class="f_i sdsf_jgh_sd gder"></i>

			</li>
		</ul>
             
        </section>
    </div>
        </template>



<script>
    import kaquan from "../components/kaquan.vue"
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                sd_uius: 0,
                can_receive_coupon: "",
                user_Own: ""
            }
        },
        components: {
            kaquan
        },
        methods: {
            lingqu(i_d) {
                let receive = {},
                    th=this
                receive.token = this.token
                receive.type_id = i_d
                this.post("coupon/receive", receive, function() {
                    Toast({
                        message: '领取成功！',
                        iconClass: 'dx icon-gouxuan fz40'
                    });
                    th.sd_dert()
                })
            },
            sd_dert() {
                let userOwn = {},
                    th = this
                userOwn.token = this.token
                this.post("coupon/quickReceive", userOwn, function(data) {
                    console.log(data);
                    th.user_Own = data

                })
            }
        },
        mounted() {
            this.Title("优惠券")
            this.sd_dert()



        },
    }

</script>

<style>
    .youhuiquan ul.df_jh_dr.pt50.pd.pr5 {
        padding-top: 0px;
    }

</style>


<style scoped>
    .youhuiquan {
        height: 12rem
    }

    .youhuiquan img {
        width: 100%;
        height: 100%;
    }

    .dsf_jh_ertxc {
        top: 0px;
    }

    .df_jh_dr li {
        background: #fff;
        height: 110px;
        margin-top: 10px;
        position: relative;
    }

    .dsf_jh_dertx {
        width: 130px;
        height: 111px;

        background: linear-gradient(to top, #6277D9, #6992D9);
        position: relative;
        left: -6px;
        bottom: 0px;
    }

    .fds_jh_derx {
        line-height: 1.3
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

    .sd_hjh_der {
        border-top: 1px solid #EEEAEB;
        width: 150px;
        margin: auto;
        padding-top: 5px;
        margin-top: 4px;
    }

    .sd_hjh_der button {
        width: 100px;
        padding: 2px 0px;
        background: #6582D9;
        color: #fff;

        border-radius: 20px;
    }

    .dsf_kjj_eet {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 8px;
        overflow: hidden;
    }

    .dsf_kjj_eet.ab {
        left: inherit;
        right: 0px;
    }

    .dian_der_e {
        width: 10px;
        height: 10px;
        background: #EFEFF4;
        display: block;
        border-radius: 50%;
        position: relative;
        left: -5px;
        margin-top: 5px;
    }

    .dsf_kjj_eet.ab .dian_der_e {
        left: inherit;
        right: -4px;
    }

    .diy_eertx {
        background: #EFEFF4;
        position: absolute;
        right: 0px;
        top: -7px;
        right: -7px;
        width: 15px;
        height: 15px;
        border-radius: 50%;

    }

    .diy_eertx.ab {
        top: inherit;
        bottom: -7px;
    }

    .df_kj_dert {
        background: transparent !important;
        color: #6582D9 !important;
        border: 1px solid #6582D9 !important;

    }

    @media screen and (max-width: 340px) {
        .dsf_jh_dertx {
            width: 110px;
        }

    }

    @media screen and (min-width: 400px) {
        .dsf_jh_dertx {
            width: 140px;
            margin-right: 5px;
        }

        .fds_jh_derx {
            line-height: 1.5
        }
    }

</style>
