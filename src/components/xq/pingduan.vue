<!--拼团-->
<template>
<div >

    
    <section class="pt10 pm10 pd bgff fz14">
       {{pingduan.length}}人在拼单，可直接参与
        <span class="fr fz12" v-if="pingduan.length>2" @click="$emit('show_e')">查看更多 <i class="dx icon-right fz12 "></i></span>
    </section>
<!--     v-if="idx<=1"-->
<!--     :data="sd.sys_user" :class-option="optionSingleHeightTime_er"-->
     <vue-seamless-scroll   class="seamless-warp as_kj_tope   fz12 " :class-option="optionSingleHeightTime_er">
    
    <van-row class="pd pt10 pm10 btm bgff" v-for="(sd,idx) in pingduan">
        <van-col span="10" class="dian">
            <img :src="sd.header_image" class="yj user_eert br ov cz">
            <span class="fz14 cz ml10  ">{{sd.user_name}}</span>
        </van-col>
        <van-col span="14" class="dsfsrgt_retd tr ">
                <van-button type="danger" class="fr  df_jh_deet" @click="pingtuancall(sd)" v-if="sd.is_a_member==0">去拼团 ></van-button>
            <van-button type="danger" class="fr  df_jh_deet" v-if="sd.is_a_member==1" @click="yaoqing(sd)">邀请好友</van-button>  
            <section class="ov cen fz13 dsf_deett">
                还差<span class="red">{{sd.team_less_num}}</span>人拼成 <br>
                <span class="fz12 z6">剩余：         <daoshiji :dapshid="sd.team_end_time"></daoshiji>   </span>
                </section>
        </van-col>
    </van-row>
    
    </vue-seamless-scroll >
    

    

    
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
                show_ert: true,
                ping_df:0,
                option: {
                    step: 1,
                    limitMoveNum: 5,
                    singleHeight: 30,
                    waitTime: 1000
                }
            }
        },
        computed: {
            optionSingleHeightTime_er() {
                return {
                    singleHeight: 0,
                    waitTime: 2000
                }
            }
        },
        components: {
            daoshiji
        },
        methods: {
            yaoqing(data){
                data.biaoti=this.biaoti
                this.hf('spell_share',{order_id:data.order_id})
//               this.$emit('yaoqing',data) 
            },
            pingtuancall(data){
                this.$emit('pingtuancall',data)
            }
        },
        mounted() {
        },
    }

</script>
<style scoped>
    .as_kj_tope{
        height: 125px;
        overflow: hidden
    }
    .user_eert {
        width: 41px;
        height: 41px;
    }

    .dsf_deett {
        line-height: 1.4
    }

    .df_jh_deet {
        height: 35px;
        line-height: 35px;
        padding-left: 8px;
        padding-right: 8px;
    }

    .dsfsrgt_retd {
        padding-top: 2px;
    }

</style>
