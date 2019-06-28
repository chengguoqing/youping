<!--我的会员卡-->

<template>
<div >

   	<section class=" bgff mb10">
				<p class="df_toyute_s pd">
					<i class="f_i ding_s ba"></i>
					<span class="fz14 z3">我的会员卡</span>

				</p>
        
        <section class="btm pd pt10 pm10 sdf_deertx" :class="sd_j_detts?'act':''">
            <section class="pr dfgfg_Dfdr_d act" v-for="(sd,idx) in taoka" @click="sdf_dr_drt(sd,idx)" >
                    <img :src="sd.card_image" class="w100 cz yj4">
                <section class="sd_kj_d_e">
                        <p class="cf fz16">{{sd.activity_name}}</p>
                    <p class="cf dsf_deertx">{{sd.time}}</p>
                </section>
            </section>
            
            <kongbai :kb="kb" v-if="taoka.length<=0"></kongbai>
            
      
    </section>
        
    </section>
    
    
</div>
</template>
<script>
    import kongbai from "@/components/kongbai"
    export default {
        props: {
            taoka: ""
        },
        data() {
            return {
                sd_j_detts:false,
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "暂无数据~",
                    type: 3
                },
            }
        },
        components: {
            kongbai
        },
        methods: {
            sdf_dr_drt(sd, idx) {
                this.sd_j_detts=true
                
                this.hf('act_hy_tk', {
                    _id: sd._id
                })
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .sdf_deertx .mt100 {
        margin-top: 0!important
    }
    .sdf_deertx.act .dfgfg_Dfdr_d{
        margin-top: 20px !important
    }

</style>
<style scoped>
    .df_toyute_s {
        line-height: 35px;
    }

    .ding_s {
        width: 22px;
        height: 22px;
        background-position: -15px -54px;
        position: relative;
        bottom: 1px;
        margin-right: 2px;
    }

    .sd_kj_d_e {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        padding: 10px;
    }

    .dfgfg_Dfdr_d {
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4)
    }

    .dfgfg_Dfdr_d.act {
        margin-top: -27%
    }

    .dfgfg_Dfdr_d.act:nth-child(1) {
        margin-top: 0
    }

    .dsf_deertx {
        position: absolute;
        left: 0px;
        bottom: 10px;
        width: 100%;
        text-align: right;
        padding-right: 10px;
    }

</style>
