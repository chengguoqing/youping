<!--编辑商品-->
<template>
    <div class="sdf_jhh_Deer">
                   <div class=" mui-row pr40 mt10">
            <p class="mui-col-xs-2 tr pr10 tite_er">
                选择商品:
            </p>
            <div class="mui-col-xs-10 tie_yte_er">
             <span class="dsf_jh_der" @click="bianji_e=true">
                 <img src="/static/img/addMore.png" >
                   
                </span>
                <draggable v-model="date_e.date_e" :move="getdata" @update="datadragEnd" class="f_b">
                    
                           
                <span class="dsf_jh_der" v-for="(sd,idx) in date_e.date_e">
                 <img :src="sd.goods_thumb" >
                    <span class="fsdg_kjh_dert bgred yj" @click="delects(idx)">
                    <i class="dx icon-close1   cf fz14 "></i>
                    </span>
                </span>
    </draggable>
          
        </div>
        </div>
        
        
        
        <div class=" mui-row pr40 mt10">
            <p class="mui-col-xs-2 tr pr10 tite_er">
                展现方式:
            </p>
            <p class="mui-col-xs-10 tie_yte_er pr">
             
                   <select class="sd_kj_ee br" v-model="date_e.jige">
                          <option value="aa">一行一个</option>
                          <option value="">一行二个</option>
                          <option value="ac">一行三个</option>
                          <option value="ad">一行四个</option>
                </select>
          <i class="dx icon-down1 down_der_er"></i>
        </p>
        </div>
        
        
        <div class="sd_kh_cdeert" v-if="bianji_e">
                <i class="dx icon-close1 close_errt" @click="bianji_e=false"></i>
            <p class="fz24 pt15 cen z3">
    添加商品
            </p>
            
            <div class="btm sdf_jh_deetr">
    
            <div class="br bgff pd pt10 pm10">
    
    
             
                <shangping @sd_hg_drt="sd_hg_drt"></shangping>
                
                
                
            </div>
                
            </div>
            
        </div>
        
        
        
        
    <div class=" mui-row" >
    
    
    
     <div class="mui-col-xs-6   mui-row">
            <p class="mui-col-xs-3 tr  tite_er dsf_jh_deet">
                上距离:
            </p>
            <p class="mui-col-xs-9 pl10">
               
           <mt-range v-model="date_e.margin_top"  :max="200"></mt-range>
        </p>
        </div>
        
        
          <div class=" mui-col-xs-6   mui-row">
             <p class="dsf_jh_deert f_b">
        <input type="text" v-model="date_e.margin_top">
        </p> 
             

        </div>
    
    
    </div>
        
        
    </div>
        </template>
<script>
    import shangping from '../components/shangping'
       import draggable from 'vuedraggable'
    export default {
        props: {
            date_e:""
        },
        data() {
            return {
                bianji_e: false,
                sd_jh_der:""
            }
        },
        components: {
            shangping,
            draggable
        },
        methods: {
            sd_hg_drt(data) {
                this.date_e.date_e.push(data)
                console.log(data);
            },
            getdata(evt) {
         
            },
            datadragEnd(evt) {
         
            

            },
            delects(idx){
                this.date_e.date_e.splice(idx, 1)
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_jh_der {
        display: inline-block;
        position: relative;
    }

    .dsf_jh_der img {
        width: 78px;
        height: 78px;
        margin-left: 5px;
        margin-right: 10px;
        margin-bottom: 10px;
        cursor: move
    }

    .fsdg_kjh_dert {
        position: absolute;
        right: 0px;
        width: 20px;
        height: 20px;
        top: -10px;
        text-align: center;
        line-height: 20px;
        cursor: pointer
    }

    .fsdg_kjh_dert i {
        font-size: 12px;
    }

    .down_der_er {
        position: absolute;
        right: 10px;
        top: 12px
    }

    .sd_kh_cdeert {
        position: fixed;
        width: 860px;
        z-index: 100;
        border-radius: 4px;
        background: #fff;
        left: 0px;
        right: 0px;
        top: 30px;
        margin: auto;
        box-shadow: 0 0px 10px rgba(0, 0, 0, .2);
        padding-top: 10px;
    }

    .close_errt {
        position: absolute;
        cursor: pointer;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }

    .sdf_jh_deetr {
        background: #F8FAFB;
        margin-top: 20px;
        padding: 10px;
        padding: 10px;
    }
    .sdf_jhh_Deer{
   
    }
    .dsf_jh_deert input {
    height: 30px !important;
    font-size: 16px;
        width: 100px;
}
</style>
