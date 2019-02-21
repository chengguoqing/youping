<!--砍价记录-->
<template>
    <div class="sd_jh_de_page" >
        <section class="bgff sd_tope fz16">
            <i class="f_a dsf_ads_s cz"></i> 好物推荐  限时特惠
             <i class="f_a dsf_ads_s ab cz"></i>
    </section>
        <section class="top_tab_er mui-row cen fz15">
            
            <section class="mui-col-xs-6  dsf_hh_cdeer pr" :class="sd.cls" v-for="(sd,idx) in tap_sd" @click="sd_dsff(sd,idx)">
                    {{sd.name}}
                <i class="f_a sd_down_e"></i>
            </section>
            
        </section> 
        
        <ul class="sd_j_deeret mt20">
                <kanjialist v-for="sd in ssd_drt" :de_mo_lis="sd"></kanjialist>
        </ul>
        
        
				<kongbai :kb="kb" v-if="ssd_drt.length<=0"></kongbai>
         
        
    </div>
        </template>
<script>
    import kanjialist from "../components/kanjialist"
    import kongbai from "../components/kongbai.vue"
    export default {
        data() {
            return {
                page_e: 1,
                is_index:0,
                bargainGoodsList: "",
                bargain_overdue: "",
                ssd_drt: "",
                tap_sd: [{
                        name: "活动进行时",
                        cls: "act"
                    },
                    {
                        name: "活动已结束",
                        cls: ""
                    }
                ],
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "暂无记录！",
                    btn_name: "返回上一页",
                    btn_url: ""
                },
            }
        },
        components: {
            kanjialist,
            kongbai
        },
        methods: {
            sd_dsff(sd, idx) {
                this.tap_sd.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.is_index=idx
                if (idx == 0) { //活动进行时
                    this.ssd_drt = this.bargainGoodsList
                } else {
                    this.ssd_drt = this.bargain_overdue
                }
            },

        },
        mounted() {
            this.Title("砍价记录")
            let bargainGoodsList = {},
                th = this
            bargainGoodsList.token = this.token
            bargainGoodsList.page = this.page_e
            this.post("Activitybargain/bargainHistory", bargainGoodsList, function(data) {
                th.bargainGoodsList = data.bargain_doing
                th.bargain_overdue = data.bargain_overdue
                th.ssd_drt = th.bargainGoodsList
            })
        },
    }

</script>
<style>
    .knob-control__text-display {
        fill: #E15652 !important
    }
    .sd_jh_de_page p.cen.mt20.pl20.pr20{
        display: none
    }

</style>
<style scoped>
    @import "../css/kanjia.css";
    .sd_j_deeret {
        padding-left: 5px;
        padding-right: 5px;
    }

</style>
