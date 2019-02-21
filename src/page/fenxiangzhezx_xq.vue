<!--分享中心详情-->
<template>
<div >

    <section class="pr df_jh_der cen pt30">
        <img :src="$route.query.shop_logo" class="dsf_dfrrtt">
        <p class="cf mt10">{{$route.query.shop_name}}</p>
        <p class="fz12 cf">（ID {{$route.query.shop_id}}）</p>
        
        <bolang></bolang>
    </section>
    <section class="pd pt10">
    
        <ul class="sd_jh_deeer" 
            v-waterfall-lower="loadMore"
  waterfall-disabled="disabled">
            <li class="yj4 bgff pd pt10 pm10" v-for="sd in partnercommissionlist">
        
                    <i class="f_i xd_jh_ddfg fl mt2" :class="sd.status==1||sd.status==0?'':'ab'"></i>
                <section class="ov pl10 mui-row">
            <section class="mui-col-xs-8">
                    <p class="z3 fz14"> 
                        
                        <span v-if="sd.status==1||sd.status==0">
                                获得订单佣金
                        </span>
                        
                        <span v-if="sd.status==2">
                                订单售后扣除佣金
                        </span>
    
                    </p>
                <p class="fz12"> 订单：{{sd.order_sn}}</p>
            </section >
                    <section class="mui-col-xs-4 tr">
     <p class="z3 fz14">    
         <span v-if="sd.status==1||sd.status==0">
                               +
                        </span> 
                  <span v-if="sd.status==2">
                               -
                        </span> 
         {{sd.commission_price}}</p>
                         <p class="fz12 z9" v-html="time_c(sd.add_time)"> </p>
        </section>
   
            </section>
                
                <p class="qc"></p>
    
            </li>

        </ul>
   
    
    	<kongbai :kb="kb" v-if="partnercommissionlist.length<=0"></kongbai>
    </section>

</div>
</template>
<script>
    import bolang from "../components/bolang"
    import kongbai from "../components/kongbai.vue"
    export default {
        data() {
            return {
                partnercommissionlist: [],
                disabled: false,
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "暂无数据",
                    btn_name: "",
                    type: 3,

                },
                current_page: 1 //页码
            }
        },
        components: {
            bolang,
            kongbai
        },
        methods: {
            get_fenxiang() {
                let partnercommissionlist = {},
                    th = this
                partnercommissionlist.token = this.token
                partnercommissionlist.type = this.$route.query.type
                partnercommissionlist.shop_id = this.$route.query.shop_id
                partnercommissionlist.current_page = this.current_page
                this.post("user/partnercommissionlist",
                    partnercommissionlist,
                    function(data) {
                        if (data.data.length < 10) {
                            th.disabled = true;
                        } else {
                            th.disabled = false;
                        }
                        data.data.map(a => {
                            th.partnercommissionlist.push(a)
                        })

                    })
            },
            loadMore() {
                this.disabled = true;

                this.get_fenxiang()
                this.current_page++
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .df_jh_der {
        height: 10rem;
        background: #0076EF;
    }

    .dsf_dfrrtt {
        width: 60px;
        height: 60px;
        border: 1px solid #fff
    }

    .xd_jh_ddfg {
        width: 35px;
        height: 35px;
        background-position: -248px -660px;
    }

    .xd_jh_ddfg.ab {
        background-position: -191px -659px
    }

    .sd_jh_deeer li {
        margin-bottom: 10px;
    }

</style>
