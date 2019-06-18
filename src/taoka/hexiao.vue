<!--核销项目-->
<template>
<div >
    <section class="hy_tou_de">
        <van-row gutter="">
            <van-col span="16">
                <p class="fz20 cf mt10">{{servicelist.user_name}}</p>
                <p class="fz14 cf mt10">ID：{{servicelist.user_id}}</p>
                <p class="cf fz12 cf mt10">首次关注时间：{{servicelist.reg_time}}</p>
            </van-col>
            <van-col span="8" class="tr">
                <img :src="servicelist.header_image" class="yj user_icon_de cz">
            </van-col>
        </van-row>
    </section>
    <van-row gutter="" class="sdf_rowwer ov">
        <van-col span="12" v-for="(sd,idx) in tab_qe" class="fz15 pr sdf_sdsdfs" :class="xz_idx==idx?'act':''">
          <section @click="qiehun(idx)">
                 <span class="sd_kjjh_d"> {{sd}}</span>
            <span class="danheetrtx"></span>
            </section>
    
        </van-col>
    </van-row>
    
    
    <section class="pd pt15">
        <section v-if="servicelist.fuwu.length>0">
        <p class="fz16 z3">
            到店服务
        </p>
            
             <section class="yj4 bgff pd pt10 pm10 mt10 jhg_er_bkd" v-for="sd in servicelist.fuwu">
<!--
                <p class="fz12 z3 pm5">
                    {{sd.}}
                </p>
-->
            <img :src="sd.service_image" class="yj4 sd_jh_dert fl">
            <section class="ov pl10">
                    <p class="fz14 z3 mt2">
                       {{sd.service_name}}
                    </p>
                <p class="fz14 z3 mt5" v-if="xz_idx==0">
                  剩余次数 {{sd.service_remain_times}}
                </p>
        
                   <p class="fz14 z3 mt5"  v-if="xz_idx==1">
                  核销 {{sd.times}} 次
                </p>
            </section>
            <p class="qc"></p>
            <p class="tr"  v-if="xz_idx==0&&$route.query.type!=2">
                <span class="hexiao_er f_b" @click="ershow=true;service_id=sd.id;hexis=sd">核销</span>
            </p>
                  
                   <van-row gutter="" class="fz12 z9 mt10" v-if="xz_idx==1">
                <van-col span="12">核销人:{{sd.scaner_user_name}}</van-col>
                <van-col span="12" class="tr">核销时间：<span v-html="time_c(sd.addtime)"></span> </van-col>
            </van-row>
            
        </section>
            
            
            
        </section>
        
            <section v-if="servicelist.lingqu.length>0">
        <p class="fz16 z3 mt10">
        到店领取
         </p>
                
                
                  <section class="yj4 bgff pd pt10 pm10 mt10 jhg_er_bkd" v-for="sd in servicelist.lingqu">
<!--
                <p class="fz12 z3 pm5">
                    {{sd.}}
                </p>
-->
            <img :src="sd.service_image" class="yj4 sd_jh_dert fl">
            <section class="ov pl10">
                    <p class="fz14 z3 mt2">
                       {{sd.service_name}}
                    </p>

                <p class="fz14 z3 mt5"  v-if="xz_idx==1">
                  核销 {{sd.times}} 次
                </p>

        
            </section>
            <p class="qc"></p>
            <p class="tr" v-if="xz_idx==0&&$route.query.type!=2">
                <span class="hexiao_er f_b" @click="ershow=true;service_id=sd.id;hexis=sd">核销</span>
            </p>
            
            <van-row gutter="" class="fz12 z9 mt10" v-if="xz_idx==1">
                <van-col span="12">核销人:{{sd.scaner_user_name}}</van-col>
                <van-col span="12" class="tr">核销时间：<span v-html="time_c(sd.addtime)"></span> </van-col>
            </van-row>
        </section>
            
                
                
                
     </section>
        
        
         
                
   
    </section>
    
    <kongbai :kb="kb" v-if="servicelist.fuwu.length<=0&&servicelist.lingqu.length<=0"></kongbai>
        <van-dialog
      v-model="ershow"
       :showConfirmButton="false"
    >
    
            <p class="cf dsf_jh_derter">
        请确认以下核销内容
            </p>
           <section class="pd sdf_jh_dert">
    
             <section class="jhg_er_bkd sdf_jh_sd pd pt10 pm10 bgff yj4">
<!--
         <p class="fz12 z3 pm5">
                    A12019052311383670220
                </p>
-->
            <img :src="hexis.service_image" class="yj4 sd_jh_dert fl">
            <section class="ov pl10">
                    <p class="fz14 z3 mt2">
                        {{hexis.service_name}}
                    </p>
           
        
                    <p class="fz14 z3 mt5" v-if="xz_idx==0">
                  剩余次数 {{hexis.service_remain_times}}
                </p>
            </section>
            <p class="qc"></p>
    
    </section>
               
               <section class="fz14 z3 mt15">
                核销次数
    
                   <section class="f_b">
                   <input type="number" class="jici_swer" v-model="jici_s" >
        
                    </section>
                   <span class="fz14 ml5">次</span>
                </section>
               
            </section>
            
            
            <van-row gutter="20" class="pd pm20 mt20">
                <van-col span="12">
                    <van-button type="primary" class="sdf_dert ab" @click="ershow=false">取消</van-button>
                
                </van-col>
                <van-col span="12">
                  <van-button type="primary" class="sdf_dert" @click="hexiao">确定</van-button>
                </van-col>
            </van-row>
            
            
      
    </van-dialog>
    
 
</div>
</template>
<script>
    import kongbai from "@/components/kongbai"
    export default {
        data() {
            return {
                xz_idx: 0,
                tab_qe: ['待核销', '已核销'],
                ershow: false,
                jici_s: 1,
                pickup_code: "",
                type: 0,
                servicelist: "",
                service_id: "",
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "暂无数据",
                    type: 3
                },
                hexis:""
            }
        },
        components: {
            kongbai
        },
        methods: {
            async getter() {
                this.servicelist = await this.post_new('user/servicelist', {
                    pickup_code: this.pickup_code,
                    type: this.xz_idx
                })
                if (!this.servicelist) {
                     this.$notify('你没有核销订单的权限！');
                    this.$router.back(-1)
                }
            },
            qiehun(idx) {
                this.xz_idx = idx
                this.getter()
            },
            async hexiao() {
                var hexos = await this.post_new('user/hexiao', {
                    times: this.jici_s,
                    service_id: this.service_id
                })
                this.ershow = false
                this.getter()
            }
        },
        mounted() {
            this.pickup_code = this.$route.query.pickup_code
            this.getter()
        },
    }

</script>
<style>


</style>
<style scoped>
    .hy_tou_de {
        background: #3585FF;
        padding: 20px
    }

    .user_icon_de {
        width: 100px;
        padding: 3px;
        border: 1px solid #fff;
        border-radius: 50%;
    }

    .sdf_rowwer {
        line-height: 50px;
        background: #2170EF;
        color: #fff;
        text-align: center;
        position: sticky;
        left: 0px;
        top: 0
    }

    .danheetrtx {
        width: 14px;
        height: 14px;
        background: #fff;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -10px;
        margin: auto;
        z-index: 1000;
        transform: rotate(45deg);
        display: none
    }

    .sd_kjjh_d {
        opacity: 0.4
    }

    .sdf_sdsdfs.act .sd_kjjh_d {
        opacity: 1
    }

    .sdf_sdsdfs.act .danheetrtx {
        display: block
    }

    .jhg_er_bkd {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.1)
    }

    .sd_jh_dert {
        width: 50px;
        height: 50px;
    }

    .hexiao_er {
        background: #3585FF;
        color: #fff;
        border-radius: 20px;
        width: 70px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        margin-top: -15px;
    }

    .dsf_jh_derter {
        background: #478AFF;
        font-size: 20px;
        height: 100px;
        text-align: center;
        padding-top: 30px;
        border-bottom-right-radius: 200px 15px;
        border-bottom-left-radius: 200px 15px;
    }

    .sdf_jh_dert {
        margin-top: -30px;
    }

    .jici_swer {
        width: 70px;
        height: 35px;
        padding-left: 0px;
        text-indent: 0px;
        text-align: center;
        padding-right: 0px;
        background: #EEEEEE;

    }

    .sdf_dert {
        background: #478AFF;
        width: 100%;
        height: 35px;
        line-height: 35px;
        border-radius: 20px;
        border: 1px solid #478AFF
    }

    .sdf_dert.ab {
        background: transparent;
        color: #478AFF;
    }

</style>
