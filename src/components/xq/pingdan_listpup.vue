<!--拼单列表弹出层-->
<template>
<div >
    <section class="sd_kj_dert cz_w">
    
        <section class="cz_a">
            <section class="bgff dsf_jjh_derty pr yj4">
                <section class="yj sd_jh_closet" @click="$emit('close_e')">
                    <i class="dx icon-close1 fz12 z9"></i>
                </section>
                 
                    <p class="fz16 z3 pt10 pm10">
                        正在拼单
                    </p>
                
                
                    <van-row class="pd   dsf_dertyt btm bgff" v-for="(sd,idx) in pingduan" >
        <van-col span="18" class="">
            <img :src="sd.header_image" class="yj user_eert br   ">
            <span class="fz14 ssd_drrrt ml10  tl">
                <span class="dian f_b sd_jh_det cz">{{sd.user_name}} </span>  
                <span class="fz12 cz">还差<span class="red">{{sd.team_less_num}}</span>人 </span> <br>
                
                <span class="fz12 z6">剩余：         <daoshiji :dapshid="sd.team_end_time"></daoshiji>   </span>
            </span>
        </van-col>
                        
    <van-col span="6" class=" tr">
                   <van-button type="danger" class="fr  df_jh_deet" @click="pingtuancall(sd)" v-if="sd.is_a_member==0">去拼团 ></van-button>          <van-button type="danger" class="fr  df_jh_deet"  v-if="sd.is_a_member==1" @click="yaoqing(sd)">邀请好友</van-button>            
    </van-col>

    </van-row> 
                
                <section class="z9 fz12 cen  pt10 pm10 btm" v-if="pingduan.length>4">
    仅显示最新发起的5个拼单
        </section>
                
                
                
                
                
            </section>
        </section>
        
        
    </section>

</div>
</template>
<script>
    import daoshiji from "../daoshiji"
    export default {
        props: {
            pingduan: "",
            biaoti:""
        },
        data() {
            return {

            }
        },
        components: {
            daoshiji
        },
        methods: {
            yaoqing(data) {
                  data.biaoti=this.biaoti
                  this.hf('spell_share',{order_id:data.order_id})
//                this.$emit('yaoqing', data)
            },
            pingtuancall(data) {
                this.$emit('close_e')
                this.$emit('pingtuancall', data)
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_kj_dert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100000;
        background: rgba(0, 0, 0, 0.5)
    }

    .dsf_jjh_derty {
        width: 300px;
        margin: auto;
    }

    .user_eert {
        width: 41px;
        height: 41px;
        position: relative;
        top: 5px;
    }

    .dsf_deett {
        line-height: 1.4
    }

    .df_jh_deet {
        height: 28px;
        line-height: 28px;
        padding-left: 8px;
        padding-right: 8px;
        margin-top: 13px;
    }

    .dsfsrgt_retd {
        padding-top: 2px;
    }

    .sd_jh_det {
        max-width: 80px
    }

    .ssd_drrrt {
        display: inline-block;
        text-align: left !important;
        line-height: 1.4;
        width: 130px
    }

    .dsf_dertyt {
        padding-bottom: 5px;
    }

    .sd_jh_closet {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -10px;
        top: -10px;
        background: #fff;
        border: 1px solid #e0e0e0;
        text-align: center;
        line-height: 28px;
    }

</style>
