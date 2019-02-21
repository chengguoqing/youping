<!--分享者中心-->
<template>
	<div>
        <p class="nbghrttddee"></p>
        <section class="pr">
        <user_top is_fems="1" :partnercommission="partnercommission"></user_top>

<section class="pd pt10">
    <section class="mui-row sdf_edeert">
        <section class="mui-col-xs-6 dfs_h_deer cen fz14" :class="sd.cls" v-for="(sd,idx) in sd_ddf" @click="qiehuan(sd,idx)">
                {{sd.name}}
        </section>
    </section>
    
    <section class="bgff pd pt10 pm10 df_jh_deeer ">
        <ul class="dsf_jjh_deer" v-if="shu_sdf>0">
            <li v-for="sd in partnercommission.shop_money_list" @click="hf('fenxiangzhezx_xq',sd)">
                <img :src="sd.shop_logo" class="dsf_jh_ertd fl">
                <section class="ov pl10 mui-row">
                    <section class="mui-col-xs-9">
                        <p class="z9 fz13 mt5">{{sd.shop_name}}</p>
                        <p class="fz12 ">ID  {{sd.shop_id}}</p>
                    </section>
                        <section class="mui-col-xs-3 tr z9 fz12 pt15">
                            ¥
                            <span v-if="is_df==0">{{sd.money}} </span>
                            
                            <span v-if="is_df==1">{{sd.money_today}} </span>
                            <i class="dx icon-right fz12"></i>
    </section>
     
                </section>
                
                
                <p class="qc"></p>
            </li>
        </ul>
<kongbai v-else :kb="kb"></kongbai>
    
    </section>
    
    
    </section>        
	



		<p class="pd baocun_btn">
			<a class="mui-btn bgls w100 fz16" @click="hf('myqianbao')">我的钱包</a>
		</p>
</section>
        
	</div>
</template>
<script>
    import suspension from "../components/suspension.vue"
    import user_top from "../components/user_top"
    import kongbai from "../components/kongbai"
    export default {
        data() {
            return {
                sd_ddf: [{
                    name: "累计佣金",
                    cls: "act"
                }, {
                    name: "今日佣金",
                    cls: ""
                }],
                is_df: 0,
                shu_sdf:0,
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "没有更多数据了",
                    type:3,
                    btn_name: "",
                    btn_url: ""
                },
                partnercommission: []
            }
        },
        components: {
            suspension,
            user_top,
            kongbai
        },
        methods: {
            qiehuan(sd, idx) {
                this.sd_ddf.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.is_df = idx
            },
            get_list() {
                let partnercommission = {},
                    th = this
                partnercommission.token = this.token
                partnercommission.type = this.$route.query.type //	1分享者，2服务商
                this.post("user/partnercommission", partnercommission, function(data) {
                    th.partnercommission = data
                    th.shu_sdf=data.shop_money_list.length
                })
            }
        },
        mounted() {
            this.Title("我的钱包")

            this.get_list()
        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            baoliu(num) {
                return parseFloat(num).toFixed(2)
            }
        }

    }

</script>
<style scoped>
    .dfs_h_deer {
        background: #F0EFF4;
        line-height: 32px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border: 1px solid #fff;
        color: #666
    }

    .dfs_h_deer.act {
        background: #fff;
        color: #0076EF
    }

    .nbghrttddee {
        background: #F0EFF4;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1
    }

    .df_jh_deeer {
        height: 20rem;
        overflow: auto
    }

    .dsf_jh_ertd {
        width: 48px;
        height: 48px;
    }

    .dsf_jjh_deer li {
        background: #E5F1FE;
        border: 1px solid #CBE3FC;
        border-radius: 4px;
        padding-right: 5px;
        margin-bottom: 7px;
    }

    .sdf_edeert {
        border-bottom: 5px solid #fff
    }

</style>
