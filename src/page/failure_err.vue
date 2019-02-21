<template>
    <div class="sd_jh_deertt">
            <p>
                <img src="https://mall.cangniaowl.com/static/img/lianjie.jpg">
            </p>
        
        <p class="fz22 z3 mt20">
                网络链接失败
        </p>
        
        <p class="fz16 mt10">
    请检查连接状况
        </p>
        
        <p class="mt60">
    <a class="bgred cf dsf_jh_eertxc" @click="$router.back(-1)">我知道了</a>
            
    </p>
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
          this.Title("苍鸟")
           },
       }
        
        </script>
        <style scoped>
            .sd_jh_deertt{
                background: #fff;
                text-align: center;
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
            }
            .sd_jh_deertt img{
                width: 140px;
            }
        
            .dsf_jh_eertxc{
                display: inline-block;
                width: 105px;
                line-height: 35px;
                font-size: 16px;
                border-radius: 40px;
            }
        </style>