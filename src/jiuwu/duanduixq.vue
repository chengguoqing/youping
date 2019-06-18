<!--团队信息详情-->
<template>
<div >
    <img src="https://mall.cangniaowl.com/youpinmeijia/tuiduan_a.jpg" class="w100 cz">
       <section class="pr">
         <img src="https://mall.cangniaowl.com/youpinmeijia/tuiduan_b.jpg" class="w100 cz">
           <section class="dd_kjj_derrt">
                    <p class="cen sdf_jh_dert">
                        <img :src="employeeDetail.employee_picture" class="yj user_icon_er">
                    </p>
               <p class="cen fz16 z3 mt5">
    {{employeeDetail.employee_name}}
                </p>
               <section class="ov">
               <van-row gutter="20" class="z6 mt10">
                   <van-col span="12">
                        <p class="fz12 tr z6 pr">
                            {{employeeDetail.employee_job_name}}
                            <span class="sd_deertrtx"></span>
    </p>
                    </van-col>
                   <van-col span="12">
                      <p class="fz12  z6">工龄：{{employeeDetail.employee_entry_year}}年</p>
                </van-col>
               </van-row>
                </section>
            </section>
        </section>
    
    <section class="pr ov w100">
     <img src="https://mall.cangniaowl.com/youpinmeijia/tuiduan_c.jpg" class="w100 cz">
        <section class="sd_jh_Deertt fz12 z6 pt10">
      <section>
    
     <span> 擅长：</span>
            <p class="z6 mt5">{{employeeDetail.good_at_field}}  </p>  
    </section>
            
              <section class="mt10">
    
     <span> 简介：</span>
            <p class="z6 mt5 fz12">{{employeeDetail.brief_introduction}} </p>  
    </section>
            
            
        </section>
    </section>
       

</div>
</template>
<script>
    export default {
        data() {
            return {
                employeeDetail:"",
                
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            let th=this
            this.post("Appointment/employeeDetail", {
                employee_id: this.$route.query.employee_id,
                token: this.token
            }, function(data) {
                th.employeeDetail=data
                console.log(data);
            })
        },
    }

</script>
<style scoped>
    .dd_kjj_derrt {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }

    .user_icon_er {
        width: 84px;
        height: 84px;
        border: 2px solid #fff
    }

    .sdf_jh_dert {
        margin-top: -30px;
    }

    .sd_deertrtx {
        position: absolute;
        right: -10px;
        height: 18px;
        width: 1px;
        background: #e0e0e0
    }

    .sd_jh_Deertt {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        padding-left: 8%;
        padding-right: 8%;
        line-height: 1.9
    }

</style>
