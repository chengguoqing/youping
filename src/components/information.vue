<!--消息条数显示-->
<template>
    <div >

   
            <a class="ad_hg_sdet" :href="'tel:'+$store.state.shopinfo.company_tel">
            <i class="dx icon-icon-- fz26 z6"></i> 
            
            <span class="yj bgred cf sd_jh_er_er fz12" :class="$store.state.url_er>0||$store.state.url_er=='9+'?'show':''">{{$store.state.url_er}}</span>
        </a>
     
    </div>
</template>
<script>
    export default {
        props: { 
            sd_eer: ""
        }, 
        data() {
            return {
                unread_nums:""
            }
        },
        components: {
 
        }, 
        methods: {
            get_idx() {
                console.log(this.sd_eer);
                let getunreadmessagenums = {},
                    th=this
                getunreadmessagenums.user_id = this.sd_eer.user_id
                getunreadmessagenums.shop_id = this.sd_eer.shop_id
                getunreadmessagenums.token = this.token
                this.post("home/getunreadmessagenums", getunreadmessagenums, function(data) {
                    if(!data){
                        return
                    }
                    if(data.all_shop_unread_nums>9){
                        data.all_shop_unread_nums="9+"
                    }
                    th.unread_nums= data.all_shop_unread_nums
                })
            }
        },
        mounted() {
     
        

        },
    
    }

</script>
<style scoped>
    .ad_hg_sdet {
        position: absolute;
        right: 10px;
        top: 3px;
    }

    .sd_jh_er_er {
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        position: absolute;
        right: -5px;
        top: 3px;
        display: none;
        transform: scale(0.9)
    }

</style>
