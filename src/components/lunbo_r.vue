<!--轮播图-->
<template>

    <div class="dsf_jjh_deer"  :style="{'margin-top':sd_jh_d.margin_top+'px',height:sd_jh_d.height+'px'}">

       <p class="sdf_jkjh_der" v-if="sd_jh_d.title&&sd_jh_d.title!='top_s'">
            <span>{{sd_jh_d.title}}</span>
        </p> 
 
    <mt-swipe :auto="4000">
      
  <mt-swipe-item v-for="sd in sd_jh_d.date_e">
      <div :style="{background: 'url('+sd.img+') center center no-repeat'}"  class="h100 w100 fg_h_deertt"></div>
    </mt-swipe-item>
</mt-swipe>
        
        
        
    </div>
        </template>
<script>
    export default {
       	props: {
			date_e:""
		},
        
        data() {
            return {
               sd_jh_d:"",
                sd_is:true
            }
        },
        components: {

        },
        methods: {
            
        },
        mounted() {
      if(this.date_e.date){
        this.sd_jh_d=this.date_e.date
      }else{
           this.sd_jh_d=this.date_e
      }

        
        },
    }

</script>
<style scoped>
    .dsf_jjh_deer{
        height: 220px;
    }
    .dsf_jjh_deer img{
        width: 100%;
        height: 100%;
    }
    .fg_h_deertt{
          background-size: 100% !important;
    }
</style>
