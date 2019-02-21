<!--编辑商品-->
<template>
    <div class="sdf_jhh_Deer">
           <div class=" mui-row pr40 mt10">
            <p class="mui-col-xs-2 tr pr10 tite_er">
                宝贝个数:
            </p>
            <div class="mui-col-xs-10 tie_yte_er pr">
             
                   <select class="sd_kj_ee br aa" v-model="date_e.geshu" >
                          <option value="4">4个</option>
                          <option value="6">6个</option>
                          <option value="8">8个</option>
                          <option value="12">12个</option>
                          <option value="0">全部</option>
                </select>
          <i class="dx icon-down1 down_der_er"></i>
                <p class="sd_jkh_seer">请选择在商城首页展示的商品个数。</p>
        </div>
        </div>
        
        
        
            <div class=" mui-row pr40 mt10">
            <p class="mui-col-xs-2 tr pr10 tite_er">
              分类/组 :
            </p>
            <p class="mui-col-xs-10 tie_yte_er pr">
             
                  <span class="mui-btn bgls" @click="bianji_e=true">选择商品分类/组</span>
        </p>
        </div>
        
        
        
                <div class=" mui-row pr40 mt10">
            <p class="mui-col-xs-2 tr pr10 tite_er">
              排序规则 :
            </p>
            <div class="mui-col-xs-10 tie_yte_er pr">
             
                  <span class="mui-btn mr20 " :class="sd.cls" v-for="(sd,idx) in sd_xd_sdf" @click="sddfd(sd)">{{sd.name}}</span>
                <p class="mt5">
    请选择所展示商品的排序规则。
    </p>
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
    选择商品分类/组
            </p>
            
            <div class="btm sdf_jh_deetr">
    
            <div class="s_jh_xd_sdd">
                 <span :class="sd.cls" v-for="sd in top_tab" @click="sd_jhg(sd)">{{sd.name}}</span>
            </div>
                <p class="qc"></p>
            <div class="br bgff pd pt10 pm10">
    
    
           <sp_fenlei @sd_hg_drt="sd_hg_drt"></sp_fenlei>
                
                
                
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
    import sp_fenlei from '../components/sp_fenlei'
       import draggable from 'vuedraggable'
    export default {
        props: {
            date_e:""
        },
        data() {
            return {
                bianji_e: false,
                sd_jh_der:"",
                sd_xd_sdf:[
                    {
                        name:"销量(高到低)",
                        cls:"bgls"
                    },
                    {
                        name:"价格(高到低)",
                        cls:""
                    }
                ],
                top_tab:[
                    {
                        name:"商品分类",
                        cls:"act"
                    },
                    {
                        name:"商品分组",
                        cls:""
                    }
                ]
            }
        },
        components: {
            sp_fenlei,
            draggable
        },
        methods: {
            sd_hg_drt(data) {
                this.date_e.date_e=data
                console.log(data);
            },
            getdata(evt) {
         
            },
            sddfd(sd){
               
                this.sd_xd_sdf.map(a=>{
                    a.cls=""
                })
                 sd.cls="bgls"
                
            },
            datadragEnd(evt) {
         
            

            },
            delects(idx){
                this.date_e.date_e.splice(idx, 1)
            },
            sd_jhg(sd){
                this.top_tab.map(a=>{
                    a.cls=""
                })
                sd.cls="act"
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .tie_yte_er{
        padding-left: 8px;
    }
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
    .sd_kj_ee.aa{
        margin-bottom: 5px;
    }
    .s_jh_xd_sdd{
        position: relative;
        top: 2px 
    }
    
    .s_jh_xd_sdd span{
        display: block;
        float: left;
        width: 100px;
     
          border: 1px solid #F8FAFB;
        border-bottom: 0px;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        line-height:35px;
        border-radius: 4px;
    }
    .s_jh_xd_sdd span.act{
         background: #fff;
           border: 1px solid #EAEAEA;
        border-bottom: 0px;
    }
    
 
</style>
