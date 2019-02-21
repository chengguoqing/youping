<!--加盟商中心-->
<template>
<div >
    <section class="user_top_e pd">
            <section class="pt20">
                <i class="f_p shezhi_d" @click="hf('gerenshezi')"></i>
            </section>
          <section class="pd  mt10">
                    <section class="yj4 bgff jh_jh_drt cen">
                   <img :src="user_info.header_image"  class="yj user_icon_e  "> 
                        <section class="sd_jh_deertrt">
                        <p class="fz12 z3 b">{{user_info.user_name}}</p>
                      <p><img src="https://mall.cangniaowl.com/static_youpin/img/jiamengicon.png" class="jiamengicon"> </p>
                        </section>
                        
                        
  <van-row class="pt10 pm10" v-if="is_sdff">
      <van-col span="6" class="dsf_fdert">
          <p class="ye fz16">{{sd.total_fans}}</p> 
          <p class="fz12 sdf_deer "><span>已关注粉丝</span></p>
    </van-col>
           <van-col span="6" class="dsf_fdert">
          <p class="ye fz16">{{sd.new_subscribe_fans}}</p>
          <p class="fz12 sdf_deer "><span>今日新关注</span></p>
    </van-col>
            <van-col span="6" class="dsf_fdert">
          <p class="ye fz16">{{sd.user_nums}}</p>
          <p class="fz12 sdf_deer "><span>用户数</span></p>
    </van-col>
            <van-col span="6" class="dsf_fdert">
          <p class="ye fz16">{{sd.vip_user_numbs}}</p>
          <p class="fz12 sdf_deer "><span>会员数</span></p>
    </van-col>
  </van-row>
                        
                          <van-row class="pt10 pm10" v-else>

            <van-col span="12" class="dsf_fdert">
          <p class="ye fz16">{{sd.user_nums}}</p>
          <p class="fz12 sdf_deer "><span>用户数</span></p>
    </van-col>
            <van-col span="12" class="dsf_fdert">
          <p class="ye fz16">{{sd.vip_user_numbs}}</p>
          <p class="fz12 sdf_deer "><span>会员数</span></p>
    </van-col>
  </van-row>
                        
                        
                        
                        
                </section>
    </section>
        
    </section>
    
    <section class="pd">
        <section class="mt30 yj4 bgff pd pt10">
                <img src="https://mall.cangniaowl.com/static_youpin/img/baobiao.png" class="baobiap cz">
            <span class="fz12 z3">经营中心</span>
            <section class="btm mt5 pt10">
    
                <section class="yj4 br sdf_deert ov">
                    <p v-for="sd in sd_derf" :class="sd.cls" @click="clisjdf(sd)">{{sd.name}}</p>
                    <section class="qc"></section>
                </section>
                
    <van-row class="cen pt10 pm20" gutter="20"  v-if="is_sdff">
        <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.order_count}}</p>
                <p class="z9 fz12 mt2">付款订单数</p>
            </section>
        </van-col>
       <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.sales_volume}}</p>
                <p class="z9 fz12 mt2">销售金额</p>
            </section>
        </van-col>
        <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.join_in_earnings}}</p>
                <p class="z9 fz12 mt2">加盟商收入</p>
            </section>
        </van-col>
        <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.total_commission_amount}}</p>
                <p class="z9 fz12 mt2">分佣金额</p>
            </section>
        </van-col>
        <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.user_recharge}}</p>
                <p class="z9 fz12 mt2">用户充值金额</p>
            </section>
        </van-col>
        <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.after_serviceing_nums}}</p>
                <p class="z9 fz12 mt2">售后订单</p>
            </section>
        </van-col>
    </van-row>
                
           
                
                
                    <van-row class="cen pt10 pm20" gutter="20"  v-else>
        <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.order_count}}</p>
                <p class="z9 fz12 mt2">付款订单数</p>
            </section>
        </van-col>
       <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.sales_volume}}</p>
                <p class="z9 fz12 mt2">销售金额</p>
            </section>
        </van-col>
        <van-col span="12">
            <section class="yj4 sdf_jh_derf pr" @click="jiameng_d">
                <i class="dx icon-right right_e ye"></i>
                    <p class="fz20 ye">{{sd.join_in_earnings}}</p>
                <p class="z9 fz12 mt2">加盟商收入</p>
            </section>
        </van-col>
        <van-col span="12">
            <section class="yj4 sdf_jh_derf">
                    <p class="fz20 ye">{{sd.total_commission_amount}}</p>
                <p class="z9 fz12 mt2">分佣金额</p>
            </section>
        </van-col>
      
    </van-row>
         
                
                
                
    </section>
            
        </section>
    </section>

</div>
</template>
<script>
    export default {
        data() {
            return {
                user_info: "",
                date: "day",
                is_sdff: false, //true=公众号加盟商 false=虚拟加盟商
                sd_derf: [{
                    name: "今天",
                    zhi: "day",
                    cls: "act"
                }, {
                    name: "昨天",
                    zhi: "yesterday",
                    cls: ""
                }, {
                    name: "本周",
                    zhi: "week",
                    cls: ""
                }, {
                    name: "本月",
                    zhi: "month",
                    cls: ""
                }, {
                    name: "累计",
                    zhi: "all",
                    cls: ""
                }],
                sd: ""
            }
        },
        components: {

        },
        methods: {
            clisjdf(sd) {
                this.sd_derf.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.date=sd.zhi
                  this.getdata()
            },
            getdata() {
                let alliance = {},
                    th = this
                alliance.token = this.token
                alliance.date = this.date
                this.post('user/alliance', alliance, function(data) {
                    th.sd = data
                    if (data.type == 0) {
                        th.is_sdff = true
                    } else {
                        th.is_sdff = false
                    }
                })
            },
            jiameng_d(){
                let sd_dff={}
                sd_dff.shop_id= this.$store.state.shopinfo.shop_id
                sd_dff.shop_name= this.user_info.user_name
                sd_dff.shop_logo= this.user_info.header_image
                sd_dff.type=3
              
                this.hf('fenxiangzhezx_xq',sd_dff)
            }
        },
        mounted() {
            this.getdata()
      
            this.user_info = JSON.parse(localStorage.user)
        },
    }

</script>
<style scoped>
    .user_top_e {
        height: 175px;
        background: linear-gradient(to right, #5195E8, #7A7BEE);
    }

    .shezhi_d {
        width: 20px;
        height: 21px;
        background-position: -172px -125px;
    }

    .user_icon_e {
        width: 60px;
        height: 60px;
        background: #fff;
        border: 2px solid #fff;
        background: #C8D4FF;
        margin-top: -30px;

    }

    .jiamengicon {
        width: 70px;
    }

    .ye {
        color: #FF6600 !important
    }

    .sdf_deer span {
        display: inline-block;
        transform: scale(0.85)
    }

    .dsf_fdert {
        line-height: 1.4
    }

    .baobiap {
        width: 18px;
    }

    .sdf_deert p {
        width: 20%;
        float: left;
        text-align: center;
        line-height: 30px;
        border-left: 1px solid #EAEAEA
    }

    .sdf_deert p:first-child {
        border: 0px;
    }

    .sdf_deert p.act {
        background: #6886EB;
        color: #fff
    }

    .sdf_jh_derf {
        padding-top: 10px;
        margin-top: 10px;
        padding-bottom: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    }

    .right_e {
        position: absolute;
        right: 5px;
        top: 18px;
    }

</style>
