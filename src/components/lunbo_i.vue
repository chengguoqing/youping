<!--轮播图-->
<template>
    <div class="dsf_jjh_deer">
 
    <mt-swipe :auto="4000">
  <mt-swipe-item v-for="sd in date_e.date_e">
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
               
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
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
