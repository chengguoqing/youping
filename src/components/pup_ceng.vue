<!--砍价弹出层-->
<template>
    <div >
         <section class="bg_psd_err"></section>
        
        <img src="/static/img/jinbi_e.gif" class="dsf_jh_ert" v-if="!sd_derrt"> 
        <section class="sdf_jh_ceett" v-if="sd_derrt">
            <img src="/static/img/kanji_s.png" class="w100">
            <section class="df_jh_cdeert  ">
                <span class="fz30">{{daer_ed.this_bargain_price}}</span>元
                
                <section class="cf fz16 sdf_jh_dert">
                    {{daer_ed.content}}
<!--
                    <span v-if="ty_de==0">
                恭喜你!<br>
                 砍价成功!
                        </span>
                    
                    
                            <span v-if="ty_de==2">
                 亲，你太给力了！<br> 
                 为好友省下不少钱！
                        </span>
--> 
            </section>
            </section>
          

            

            <section class="mui-row sdf_jh_deet" v-if="ty_de==1">
                <section class="mui-col-xs-6 pr10">
                    <a class="mui-btn w100 f_h_deety" @click="$emit('dsd_er')">确定</a>
                </section>
                     <section class="mui-col-xs-6 pl10" @click="$emit('dsd_er_er')">
                    <a class="mui-btn w100 f_h_deety">找人帮砍</a>
                </section>
            </section>
            
                   <section class="mui-row sdf_jh_deet cen" v-if="ty_de!=1">
          
                    <a class="mui-btn  f_h_deety ab" @click="$emit('dsd_er')">太棒了</a>
             
                   
            </section>

            
            
        </section>
    </div>
        </template>
<script>
    export default { 
        props: {
            ty_de: "",
            user_id: ""
        },
        data() {
            return {
                sd_derrt: false,
                daer_ed:""
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

            let bargainAct = {},
                th = this
            bargainAct.token = this.token
            bargainAct.be_helped_friend_user_id = this.user_id
            bargainAct.goods_id = this.$route.query.goods_id
            this.post("Activitybargain/bargainAct", bargainAct, function(data) {
                th.sd_derrt = true
                th.daer_ed=data

            })

        },
    }

</script>
<style scoped>
    .bg_psd_err {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000
    }

    .dsf_jh_ert {
        z-index: 10001;
        width: 200px;
        height: 200px;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        margin: auto;
    }

    .sdf_jh_ceett {
        position: fixed;
        top: 25%;
        right: 0px;
        z-index: 10001;
    }

    .df_jh_cdeert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        padding-top: 4.5rem;
        color: #bb0e09;
        text-align: center;
    }

    .sdf_jh_ceett img.w100 {
        padding-left: 10px;
    }

    .sdf_jh_deet {
        width: 250px;
        margin: auto;
    }

    .f_h_deety {
        border: 0px;
        line-height: 40px;
        padding: 0px;
        font-size: 16px;
        color: #b72724;
        background: linear-gradient(to top, #CAAB7B, #F7EAD4);
    }

    .f_h_deety.ab {
        width: 100px;
    }

    .sdf_jh_dert {
        width: 150px;
        margin: auto;
        margin-top: 90px;
        line-height: 1.4
    }

</style>
