<!--订单列表-->
<template>
<div class="sdf_sdfsd" :class="finished?'act':''">
    
<section>
    
  <van-list
  v-model="loading"
  :finished="finished"
  :finished-text="total!=0?'没有更多了':''"
  @load="onLoad"
>
    
    <section class="yj4 bgff sd_jh_xdeer pt10 pm10 mt20 pr" v-for="sd in orderlist_li" @click="hf('order_form_xq',{orderlist_data:sd})">
        <section>
            <img :src="sd.shop_logo" class="yj user_icon_ds br">
            <span class="fz14 ml5 df_jj_der">{{sd.shop_name}}</span>
        </section>
        <section class="z9 fz13 mt5 sdf_kj_dert">
             <span class="sd_kj_la"> 订 单 号：<span class="z3">{{sd.order_sn}}</span></span><br>
             <span class="sd_kj_la"> 支付金额：<span class="z3">{{sd.order_amount}} 元</span></span><br>
             <span class="sd_kj_la"> 下单时间：<span class="z3" v-html="time_d(sd.add_time)"></span></span><br>
        </section>
        <van-icon name="arrow"  class="z9 right_deert"/>
    </section>
    </van-list>
    
    	<kongbai :kb="kb" v-if="total==0"></kongbai>
  </section>
</div>
</template>
<script>
    import kongbai from "../kongbai.vue"
    export default {
        props: {
            pick_status: ""
        },
        data() {
            return {
                loading: false,
                finished: false,
                current_page: "",
                keyword:"",
                orderlist_li: [],
                total: 0,
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "您还没有商品订单，快去逛逛吧",
                    btn_name: "前去逛逛",
                    btn_url: ""
                },
            }
        },
        components: {
            kongbai
        },
        methods: {
            get_list() {
                let orderlist = {},
                    th = this
                orderlist.token = this.token
                orderlist.current_page = this.current_page
                orderlist.pick_status = this.pick_status
                orderlist.keyword=this.keyword
                this.post("user/orderlist", orderlist, function(data) {
                    th.total = data.total
                    data.data.map(a=>{
//                        a.dx_type=1
                        th.orderlist_li.push(a)
                    })
                    if (data.last_page <= th.current_page) {
                        th.loading = true
                        th.finished = true
                    } else {
                        th.loading = false
                    }


                })
            },
            ss_sd(ks){
                this.current_page=1
                this.keyword=ks
                this.orderlist_li=[]
                this.get_list()
            },
            onLoad() {
                this.current_page++;
                setTimeout(a => {
                    this.get_list();
                }, 1000);
            },
        },

        mounted() {
            if(this.pick_status==2){
                  this.get_list();
            }
          
        },
    }

</script>
<style>
    .sdf_sdfsd.act .van-list__loading {
        display: none
    }

</style>
<style scoped>
    .user_icon_ds {
        width: 38px;
        height: 38px;
        margin-top: -20px;
    }

    .df_jj_der {
        margin-top: -5px;
        position: relative;
        top: -4px;
    }

    .sd_kj_la {
        word-spacing: 2.5px;
    }

    .sd_kj_la {
        line-height: 1.8
    }

    .sd_jh_xdeer {
        padding-left: 20px;
        padding-right: 20px;
    }

    .right_deert {
        position: absolute;
        right: 10px;
        top: 50px;
    }

</style>
