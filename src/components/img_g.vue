<!--图片-->
<template>
    <div >
        
               <p class="sdf_jkjh_der" v-if="date_e.title">
            <span>{{date_e.title}}</span>
        </p> 
        
        <p  v-for="sd in date_e.date_e" class="fl sdf_h_deert" :style="{'margin-top':sd.margin_top+'%','margin-left':sd.margin_left+'%',width:sd.width+'%'}">
      
       <img :src="sd.img" class="w100  " @click="hf(sd.url)">
        </p>
        
        <p class="qc"></p>
         
    </div>
        </template>
<script>
    export default {
        props: {
            date_e: ""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            console.log(this.date_e);
        },
    }

</script>
<style scoped>
    .sdf_h_deert img{
        vertical-align: bottom 
    }

</style>
