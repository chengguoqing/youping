<!--图片组-->
<template>
    <div >
        
               <p class="sdf_jkjh_der" v-if="date_e.date.title">
            <span>{{date_e.date.title}}</span>
        </p> 
  
    <div class="pr sd_jh_drerrt">
        <div class="dsf_jhgrtde">
            <div class="f_b">
     <atom-spinner 
          :animation-duration="1000"
          :size="60"
          :color="'#999'"
            
     />
                </div>
            <p>点击上传图片组</p>
            </div>
         <Layout :chachelis="date_e.date.chachelis" :layout="date_e.date.layout"></Layout>
    </div>
    

    </div>
        </template>
<script>
    import Layout from './Layout.vue'
    import {AtomSpinner} from 'epic-spinners'
    export default {
        props: {
            date_e: ""
        },
        data() {
            return {

            }
        },
        components: {
            Layout,
            AtomSpinner
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style>
    @import "../css/tupianzu.css"

</style>
<style scoped>
    .sd_jh_drerrt{
        height: 375px;
        background: #fff;
    }
    .sdf_h_deert {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;


    }
    .dsf_jhgrtde{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: 45%
    }

</style>
