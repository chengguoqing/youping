<!--优惠券-->
<template>
	<div>
		<section class="dsf_jh_ertxc pd box cen pr btm" >
			<p class="box_a z3" v-for="(sw,idx) in ss_jh_w" :class="sw.cls" @click="dsf_sd(idx)">
				<span class="fz15">{{sw.name}}</span>
			</p>

		</section>
        <section class="sd_kjh_dert">
            <kaquan :sd_uius="sd_uius" :can_receive_coupon="user_Own" v-if="user_Own" :status="status"></kaquan>
        </section>


 
        <section  class="ling_det">
            <button @click="popupVerisible=true">领取优惠券</button>
        </section>



        <!--    卡券弹出层-->

    <mt-popup
  v-model="popupVerisible"
  position="bottom">
    <section class="pr pt10 pm10">
            <p class="z3 fz16 cen pr">优惠券 <i class="dx icon-close1  s_jh_derttx" @click="popupVerisible=false"></i></p>
        <section class="sd_kjh_deert btm mt10 ">

              <kaquan :sd_uius="sd_uius" :is_lqing="true"  :can_receive_coupon="can_receive_coupon" :yhuiquna="'没有可领取的优惠券'"></kaquan>



        </section>
    </section>
</mt-popup>





	</div>
</template>
<script>
    import kaquan from "../components/kaquan.vue"
     import suspension from "../components/suspension.vue"
    export default {
        data() {
            return {
                sd_uius: 0,
                status: 0,
                user_Own: "",
                popupVerisible: false,
                can_receive_coupon:"",
                ss_jh_w: [{
                        "name": "可使用",
                        istrue: 0,
                        cls: "act",

                    },
                    {
                        "name": "使用记录",
                        istrue: 1,
                        cls: ""
                    },
                    {
                        "name": "已过期",
                        istrue: 2,
                        cls: ""
                    }
                ],

            }
        },
        components: {
            kaquan,
            suspension
        },
        methods: {
            dsf_sd(idx) {
                this.ss_jh_w.map(function(a) {
                    a.cls = ""
                })
                this.ss_jh_w[idx].cls = "act"
                this.sd_uius = this.ss_jh_w[idx].istrue
                this.status = idx
                this.sd_dert()
            },
            sd_dert() {
                let userOwn = {},
                    th = this
                userOwn.token = this.token
                userOwn.status = this.status
                  userOwn.per_page = 100
                this.post("coupon/userOwn", userOwn, function(data) {
                    th.user_Own = data.data

                })
            }
        },
        mounted() {
            this.Title("优惠券")
            this.sd_dert()
            let receiveCenter = {},
                th=this
            receiveCenter.token = this.token
            this.post("coupon/receiveCenter", receiveCenter, function(data) {
                th.can_receive_coupon=data
                console.log( th.can_receive_coupon);
            })

        },
    }

</script>

<style>
    .sd_kjh_dert .df_jh_dr {
        padding-top: 30px !important
    }

</style>

<style scoped>
    .dsf_jh_ertxc {
        top: 0px;
    }

    .ling_det {
        position: fixed; 
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 100;
        padding: 10px;
        background: #fff;
    }

    .ling_det button {
        background: #0076ef;
        color: #fff;
        border: 0px;
        font-size: 16px;
        width: 100%;
        padding: 0px;
        line-height: 40px;
    }

</style>
