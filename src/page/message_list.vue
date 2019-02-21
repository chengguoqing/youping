<!--消息-->
<template>
    <div >
    <section class="pd pt10 pm10">
        <section class="sd_jh_dr mui-row bgff yj4 pt10 pm5">
                <section class="mui-col-xs-4">
                      
                            <span class=" df_jh_err_r yj">
                                <i class="dx icon-wuliu"></i>
                            </span>
                    <p class="fz12 z6 cen mt5">物流</p>
            
                    
                </section>
            
                   <section class="mui-col-xs-4">
                      
                            <span class=" df_jh_err_r yj ab">
                                <i class="dx icon-icon"></i>
                            </span>
                    <p class="fz12 z6 cen mt5">通知</p>
            
                    
                </section>
            
            
                   <section class="mui-col-xs-4">
                      
                            <span class=" df_jh_err_r yj ac">
                                <i class="dx icon-liaotian"></i>
                            </span>
                    <p class="fz12 z6 cen mt5">公告</p>
            
                    
                </section>
    
        </section>
        
        <section class="mt10 yj4 bgff">
            <ul>
                <li class="pd pt10 pm10 bbm" v-for="sd in recent" @click="hf(sd.shop_chat_url)">
                    <span class="pr  fl">
                        <span class="sd_jh_eert"  v-if="sd.user_unread_nums>0">
                            {{sd.user_unread_nums>9?'9+':sd.user_unread_nums}}
    </span>
        <img :src="sd.shop_logo" class="yj4 user_icod cz ">
                    </span>
            
                    
                    <section class="ov pl10">
                    <section class="fz16 z3 mui-row">
                         <p class="mui-col-xs-9 dian z3">{{sd.shop_name}}</p>   
                        
                        
                        <p class="fz12 mui-col-xs-3 tr">{{sd.last_chat_send_time}}</p>
                        
                    </section>
                            <p class="fz14 z9 mt2" v-if='sd.chat_type=="text"' v-html="sd.content">
                            
                        </p>
    
                </section>
                     
                    <p class="qc"></p>
                </li>
        </ul>
    
        </section>
        
        
        <section class="mt10 bgff yj4" v-if="two_weeks_ago.length>0">
            <p class="pd pt10 pm10 z6 fz16">
                <i class="dx icon-time ye fz20 cz"></i>
                两周前的消息
            </p>
            
                  <ul>
               <li class="pd pt10 pm10 btm" v-for="sd in two_weeks_ago" @click="hf(sd.shop_chat_url)">
               <span class="pr  fl">
                        <span class="sd_jh_eert" v-if="sd.user_unread_nums>0">{{sd.user_unread_nums}}</span>
        <img :src="sd.shop_logo" class="yj4 user_icod cz ">
                    </span>
            
                    <section class="ov pl10">
                    <section class="fz16 z3 mui-row">
                         <p class="mui-col-xs-9 dian z3">{{sd.shop_name}}</p>   
                        
                        
                        <p class="fz12 mui-col-xs-3 tr">{{sd.last_chat_send_time}}</p>
                        
                    </section>
                        <p class="fz14 z9 mt2" v-if='sd.chat_type=="text"' v-html="sd.content">
                            
                        </p>
    
                </section>
                     
                    <p class="qc"></p>
                </li>
        </ul>
    
        </section>
        
        
        
    </section> 
        
     	<dibu :kjh_s="2"></dibu>
    </div>
</template>
<script>
    import dibu from "../components/dibu.vue"
    export default {
        data() {
            return {
                ChatHistory: "",
                recent: "",
                two_weeks_ago: ""
            }
        },
        components: {
            dibu
        },
        methods: {

        },
        computed: {
         
        },
        watch: {
         
        },
        mounted() {
            this.Title("消息")
            this.carnumber(function(num) {
                $(".jh_dfd_derrt").text(num)
            })


            let getUserChatHistory = {},
                th = this

            th.shopinfo_p = this.$store.state.shopinfo
            th.sd_eer = this.$store.state.shopinfo
            getUserChatHistory.user_id = th.sd_eer.user_id
            getUserChatHistory.token = th.token
            th.post("home/getUserChatHistory", getUserChatHistory, function(data) {
                th.recent = data.recent
                th.two_weeks_ago = data.two_weeks_ago
            })




        },
    }

</script>
<style scoped>
    .sd_jh_rowe {
        height: 35px;
    }

    .df_jh_err_r {
        height: 38px;
        width: 38px;
        display: block;
        margin: auto;
        background: #45DA81;
        text-align: center;
        line-height: 38px;

    }

    .df_jh_err_r i {
        font-size: 24px;
        position: relative;
        top: 2px;
        color: #fff;
    }

    .df_jh_err_r.ab {
        background: #FFCA56
    }

    .df_jh_err_r.ac {
        background: #AF67FF
    }

    .user_icod {
        width: 45px;
        width: 45px;
        height: 45px;
        border: 1px solid #e0e0e0
    }

    .sd_jh_eert {
        position: absolute;
        right: -7px;
        top: -7px;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        background: #F44336;
        color: #fff;
        border-radius: 50%;
        font-size: 12px;
        border: 1px solid #e0e0e0;
    }

</style>
