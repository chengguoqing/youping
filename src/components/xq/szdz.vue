<!--选择地址-->
<template>
<div >
<van-popup v-model="$store.state.is_dizs" position="bottom" >
        <i class="dx icon-close1 close_se" @click="$store.state.is_dizs=false"></i>
        <p class="fz16 cen  pt10 pm10 z3">
            配送至
        </p>
    
        <section class="behg_deer btm">
            
            <section v-if="d_info.express_type==2">
             <section class="pt10">
                 <span class="kuai_ddrt">到店自提</span>
            <p class="pl10 btm z3 pt5 pm5 mt10">
    
自提地址（商家地址）
    </p>
                
            </section>
            
              <ul>
                <li class="pd btm pt10 pm10 pr40 pr " :class="ssd_sd"  @click="sd_Drt_er(d_info.pickup_address)">
                    <i class="f_p map_iconse"></i>
                    <span class="fz14">
                        {{d_info.pickup_address}}
                    </span>
                    <i class="red dx icon-gou df_deert"></i>
                </li>
            </ul>
            
            
            </section>
            
            
            
            <section class="pt10"  v-if="d_info.express_type==2">
                 <span class="kuai_ddrt">快递</span>
            <p class="pl10 btm z3 pt5 pm5 mt10">
    收货地址
    </p>
                
            </section>
            <ul>
                <li class="pd btm pt10 pm10 pr40 pr " v-for="sd in address" :class="sd.cls" @click="sd_Drt(sd)">
                    <i class="f_p map_iconse"></i>
                    <span class="fz14">{{sd.province_name+""+sd.city_name+""+sd.district_name+''+sd.address}}</span>
                    <i class="red dx icon-gou df_deert"></i>
                </li>
            </ul>
        </section> 
    
    <van-button type="danger" class="w100 mt10" @click="hf('add_dizhi')">选择其他地址</van-button>
</van-popup>
    
    
</div> 
</template>
<script>
    export default {
        props: {
            address: "",
            d_info: ""
        },
        data() {
            return {
                ssd_sd:""
            }
        },
        components: {

        },
        methods: {
            sd_Drt(sd) {
                this.address.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.ssd_sd=""
                this.$store.state.is_dizs = false
                let ad_lisd = sd.province_name + "" + sd.city_name + "" + sd.district_name + '' + sd.address,
                    sd_dert = {}
                sd_dert.name = ad_lisd
                sd_dert.id = sd.address_id
                 this.$store.state.pick_up=0
                this.$emit('cs_eer', sd_dert)
            },
            sd_Drt_er(sd) {
                this.address.map(a => {
                    a.cls = ""
                })
                this.ssd_sd="act"
                  this.$store.state.pick_up=1
                this.$store.state.is_dizs = false
                let ad_lisd = sd,
                    sd_dert = {}
                sd_dert.name = ad_lisd
                this.$emit('cs_eer', sd_dert)
            }
        },
        created() {

        },
    }

</script>
<style scoped>
    .close_se {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .behg_deer {
        height: 320px;
        overflow: auto;
    }

    .map_iconse {
        width: 16px;
        height: 17px;
        background-position: -286px -84px
    }

    .df_deert {
        position: absolute;
        right: 10px;
        top: 10px;
        display: none
    }

    .behg_deer li.act .map_iconse {
        background-position: -318px -84px
    }

    .behg_deer li.act {
        color: #E95050
    }

    .behg_deer li.act .df_deert {
        display: block;
    }

    .kuai_ddrt {
        font-size: 12px;
        background: #F95151;
        color: #fff;
        padding: 2px 15px;
        border-radius: 10px;
        margin-left: 10px;
    }

</style>
