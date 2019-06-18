<template>
<div class="sd_jkh_dertx">

        <section class="sd_jh_ddrxe pd">
           <p class="sd_jh_fgtr">
    确认领取本款面膜权限
            </p>
            
            <section class="cen mt20">
                    
                <img src="http://images.cangniaowl.com/238/20180330/d440fcdd9f95b09df4ee92b319c115ee.jpg" class="br case_img">
             <p class="fz12 z3 mt2">竹炭净肤滋养面膜</p>
                
                <section class="fz12 z9 btm pt10 mt15 ">
                    本领取资格一经确定不可更改，请谨慎选择后点击确定
                </section>
                <section class="mt15">
                    <i class="f_act lijiling_er" @click="$emit('close_e')"></i>
                </section>
                
            </section>
            
            
            <span class="close_sd yj">
                 <i class="dx dx icon-close1" @click="$emit('close_e')"></i>
            </span>
           
        </section>

</div>
</template>
<script>
    export default {
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
    .sd_jkh_dertx {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%; 
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }

    .sd_jh_ddrxe {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 100px;
        margin: auto;
        z-index: 100;
        width: 20rem;
        height: 333px;
        background: #fff;
        border: 1px solid #FCE5B7;
        border-radius: 4px;
    }



    .close_sd {
        border: 1px solid #fff;
        color: #fff;
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        position: relative;
        top: 5px;
        text-align: center;
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
        bottom: -120%
    }
    .sd_jh_fgtr{
        font-size: 18px;
        color: #217542;
        text-align: center;
        border-bottom: 1px solid #DFDFDF;
        line-height: 40px;
        margin-top: 10px;
    }
    .case_img{
        width: 108px;
        height: 108px;
    }
    .lijiling_er{
        width: 206px;
        height: 47px;
        background-position: -10px -470px;
    }
</style>
