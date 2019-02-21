<!--售后列表-->
<template>
	<div>
 
        <section  v-if="cou_kist.data.length>0">

		<section class="shhf_sd_row bgff mb10" v-for="(js,idx) in cou_kist.data">

			<p class="pd pt5 pm5 fz13 z3">
				订单编号：{{js.order_info.order_sn}}
				<span class="ls fr">
                         {{js.after_service_log[0].do_type|lei}}</span>
			</p>

			<ul>
				<li class="pd pt10 pm10 btm mui-row pr" v-for="(sd,idx) in js.order_info.goods_list" @click="hf('shouhouxq',{after_service_key:js.after_service_result.after_service_key})">

					<p class="cp_icon_sdf fl ">
						<img :src="sd.goods_thumb">
					</p>

					<section class="ov pl10 mui-row pr">
						<section class="mui-col-xs-9">
							<p class="dianer z3 sdf_jh_dertx">{{sd.goods_name}}
							</p>
							<p class="fz12 dian">
								{{sd.goods_attr}}
							</p>
<!--
							<p class="">
								<span class="bgred yj4 cf df_sdfrt fz12">七天退换</span>

							</p>
-->

						</section>
						<section class="ov tr">
							<span class="fz14">￥{{sd.goods_price}}</span>
							<p class="fz12 dsf_hg_dser">
								x{{sd.goods_number}}
							</p>
						</section>

					</section>

				</li>
			</ul>
			<p class="tr fz12 btm pt5 pm5 pd z3">
				交易金额：￥{{js.order_info.order_amount}}

                <span class="ml10" v-if="js.after_service_log[0].do_type==1||js.after_service_log[0].do_type==2">退款金额：<span class="red">￥{{js.after_service_log[0].refund_price}}</span></span>
			</p>
			<section class="btm mui-row pd pt5 pm5 pr sfd_sd_sd" :class="'a'+js.status_code" @click="hf('shouhouxq',{after_service_key:js.after_service_result.after_service_key})">
				<p class="mui-col-xs-3 brm sd_jh_srx">
					<i class="f_i dsf_jh_giusd"></i>
					<span class="cz">{{js.status_title}}</span>
				</p>
				<p class="mui-col-xs-9 dian fz12 pl10 z3">
					<span class="cz df_jh_xder">{{js.status_text}}</span>
				</p>
				<i class="dx icon-right df_jgh_ertxc"></i>
			</section>


		</section>
            </section>
 	<kongbai v-else :kb="kb" @ziding='$router.back(-1)'></kongbai>
	</div>
</template>
<script>
    import kongbai from "../components/kongbai.vue"
    export default {
        data() {
            return {
                cou_kist: [],
                jh_sdd: [{
                        type: 0,
                        msg: "退款"
                    },
                    { 
                        type: 1,
                        msg: "退货"
                    },
                    {
                        type: 2,
                        msg: "换货"
                    }
                ],
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "没有更多数据了",
                    btn_name: "返回上一页",
                    btn_url: "-1"
                }
            }
        },
        components: {
            kongbai: kongbai
        },
        methods: {

        },
        mounted() {
            this.Title("售后列表")
            let th = this
            this.post("customer/index", {
                token: this.token
            }, function(data) {
                th.cou_kist = data
            })
        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            lei(num) {
                var s_sdd = ['', "退款", "退货", "换货"]
                return s_sdd[num]
            }
        }

    }

</script>
<style scoped>
    .dsf_jh_giusd {
        width: 18px;
        height: 19px;
        background-position: -145px -162px;
    }

    .sd_jh_srx {
        color: #07bb6c
    }

    .df_jh_xder {
        position: relative;
        top: 1px
    }

    .df_jgh_ertxc {
        position: absolute;
        right: 5px;
        top: 7px;
        font-size: 14px;
    }

    .dsf_jh_giusd.ab {
        width: 21px;
        height: 22px;
        background-position: -174px -159px;
    }

    .dsf_jh_giusd.ac {
        width: 21px;
        height: 21px;
        background-position: -209px -159px;
    }

    .sfd_sd_sd.a0 .dsf_jh_giusd {
        width: 21px;
        height: 21px;
        background-position: -209px -159px;
    }

    .sfd_sd_sd.a0 .dsf_jh_giusd {
        width: 21px;
        height: 21px;
        background-position: -209px -159px;
    }

    .sfd_sd_sd.a1 .dsf_jh_giusd {
        width: 21px;
        height: 22px;
        background-position: -174px -159px;
    }

    .sfd_sd_sd.a2 .dsf_jh_giusd {
        width: 18px;
        height: 19px;
        background-position: -145px -162px;
    }
    .sfd_sd_sd.a1 .sd_jh_srx{
        color: #0076EF
    }
       .sfd_sd_sd.a0 .sd_jh_srx{
        color: #F44336!important
    }
       .sfd_sd_sd.a2 .sd_jh_srx{
        color: #07bb6c
    }

</style>
