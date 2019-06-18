<!--确认订单优惠券-->
<template>
<div >
<div class="mui-input-row pr bgff btm"   v-for="(sd,idx) in quan_list" @click="sd_dsdf(sd,idx)">
    <label class="sd_jh_dert">
        <span class="jian_dert">{{sd.t_text}}</span>  
        {{sd.name}}
    </label>
				<p class="ov z3 df_kj_dert tr pr20 fz12"> 

           
                    <span class="z9 mt2 f_b fz12" v-if="sd.is_keyong">
                        暂无可用
                    </span>
                    <span v-if="!sd.is_keyong&&sd.xzje<=0" class="red f_b mt2">
                    {{sd.data.length}}张可用 
                    </span>
                      <span v-if="!sd.is_keyong&&sd.xzje>0" class="red f_b mt2">
                  -￥{{sd.xzje}}  
                    </span>
			
<!--
                        <span v-if="sd.xzje>0&&!sd.is_keyong"  class="red f_b mt2">
                          -￥{{sd.xzje}}  
                </span>
-->

				</p>
                <i class="dx icon-right fz14 d_jh_deett"></i>
			</div>
    
    
    

    
        <mt-popup 
  v-model="popupVerisible"
  position="bottom">
    <section class="pr pt10 ">
            <p class="z3 fz16 pd pr">选择优惠券</p>
        <section class="sd_kjh_deert btm mt10">
            <kaquan sd_uius="0" :is_g="true" :coupon_setting="checkout.coupon_setting" :is_dfg="is_dfg" :can_receive_coupon="can_receivee" @coupon_id="coupon_id" @geujin="geujin"></kaquan>


        </section>

   
    </section>
</mt-popup>

    
    
     
</div>
</template>
<script>
    import kaquan from "./kaquan"
    export default {
        props: {
            checkout: ""
        },
        data() {
            return {
                popupVerisible: false,
                is_dfg: 0, //0单选 1多选
                idx_sfd: 0,
                quan_list: [{
                    coupon_id:"",
                    type: 0,
                    t_text: "减",
                    name: "满减券",
                    data: "",
                    is_keyong: 1,
                    xzje: 0
                }, {
                    type: 1,
                      coupon_id:"",
                    t_text: "￥",
                    name: "现金券",
                    data: "",
                    is_keyong: 1,
                    xzje: 0
                }, {
                    type: 2,
                      coupon_id:"",
                    t_text: "免",
                    name: "免单券",
                    is_keyong: 1,
                    data: "",
                    xzje: 0
                }],
                can_receivee: []
            }
        },
        components: {
            kaquan
        },
        methods: {
            sd_dsdf(data, idx) {
                if(data.is_keyong){
                    return
                }
                this.popupVerisible = true
                this.idx_sfd = idx
                if (data.type == 1) {
                    this.is_dfg = 1
                } else {
                    this.is_dfg = 0
                }


                this.can_receivee = data.data
            },
            coupon_id(data) {

            },
            geujin(data) {
                this.popupVerisible = false
                this.quan_list[this.idx_sfd].xzje = data.jiner;
                 this.quan_list[this.idx_sfd].coupon_id=data.sd_ddfg
                if (this.checkout.coupon_setting.is_multi_coupon_type == 1) {
                    if (this.idx_sfd == 2) {
                        this.quan_list.map(a => {
                            a.is_keyong = 1
                        }) 
                    } else {
                        this.quan_list[2].is_keyong = 1
                    }
                }
                if (this.checkout.coupon_setting.is_multi_coupon_type == 0) {
                    this.quan_list.map(a => {
                        a.is_keyong = 1
                    })
                }

                
                this.quan_list[this.idx_sfd].is_keyong = 0
                var sd_dfgf={}
                sd_dfgf.jiner=0
                sd_dfgf.c_id=[]
                this.quan_list.map(a=>{
                    console.log(a.is_keyong);
                    if(a.is_keyong==0&&a.coupon_id){
                        sd_dfgf.jiner+=parseFloat(a.xzje)
                        sd_dfgf.c_id.push(a.coupon_id)
                    }
                })
                
                this.$emit('get_sd',sd_dfgf)
            }
        },
        mounted() {


        },
        watch: {
            checkout: {
                handler: function() {
                    this.quan_list[0].data = this.checkout.can_select_coupon
                    this.quan_list[1].data = this.checkout.cash_coupons
                    this.quan_list[2].data = this.checkout.miandan_coupons

                    this.quan_list[0].data.length > 0 ? this.quan_list[0].is_keyong = 0 : 1
                    this.quan_list[1].data.length > 0 ? this.quan_list[1].is_keyong = 0 : 1
                    this.quan_list[2].data.length > 0 ? this.quan_list[2].is_keyong = 0 : 1
                },
                deep: true
            }
        }
    }

</script>
<style scoped>
    .sd_jh_dert {
        width: 250px !important;
        font-size: 14px;
        background: #fff !important;
        color: #333;
        text-align: left
    }

    .d_jh_deett {
        position: absolute;
        right: 4px;
        top: 10px
    }

    .df_kj_dert {
        line-height: 37px;
    }

    .jian_dert {
        font-size: 12px;
        background: #E75C57;
        color: #fff;
        border-radius: 4px;
        display: inline-block;
        width: 18px;
        height: 18px;
        text-align: center;
        line-height: 18px;
    }

    @media screen and (max-width: 330px) {
        .mui-input-row label {
            padding-left: 10px;
            font-size: 12px;
        }
        .sd_jh_dert {
            width: 210px !important;

        }

    }

</style>
