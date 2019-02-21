<!--选择地址-->
<template>
<div >
<van-popup v-model="$store.state.is_dizs" position="bottom" >
        <i class="dx icon-close1 close_se" @click="$store.state.is_dizs=false"></i>
        <p class="fz16 cen  pt10 pm10 z3">
            配送至
        </p>
    
        <section class="behg_deer">
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
            address: ""
        },
        data() {
            return {
                
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
                
                this.$store.state.is_dizs=false
                let ad_lisd=sd.province_name+""+sd.city_name+""+sd.district_name+''+sd.address,
                    sd_dert={}
                sd_dert.name=ad_lisd
                sd_dert.id=sd.address_id
                this.$emit('cs_eer',sd_dert)
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

</style>
