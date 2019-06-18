<!--订单信息（自提）-->
<template>
<div >
	<sear_head @sear_text="search_fun" placeholder="请输入电话号码或订单号"></sear_head>
	<section class="dsf_jh_ertxc pd box cen pr ">
			<p class="box_a z3" v-for="(sw,idx) in ss_jh_w" :class="idx_s==idx?'act':''" @click="sddf_dsf(idx)">
				<span class="fz14">{{sw}}</span>
			</p>

		</section>
     
    <section class="pd pt5">
       
        
         <dx_list pick_status="1" v-show="idx_s==0" ref="sd_ddffe"></dx_list>
         <dx_list pick_status="2"  v-show="idx_s==1"></dx_list>
         
    </section>
    
</div>
</template>
<script>
    import sear_head from "../components/sear_head.vue"
    import dx_list from "../components/ziti/dx_list"
    import kongbai from "../components/kongbai.vue"
    export default {
        data() {
            return {
                idx_s: 0,
                ss_jh_w: ['待收货', '已完成'],
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "您还没有商品订单，快去逛逛吧",
                    btn_name: "前去逛逛",
                    btn_url: ""
                },
            }
        },
        components: {
            sear_head,
            dx_list,
            kongbai
        },
        methods: {
            search_fun(e) {
               this.$refs.sd_ddffe.ss_sd(e)
            },
            sddf_dsf(idx){
                this.idx_s=idx
                window.scrollTo(0,0)
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .asd_uy_dftx {
        position: relative;
    }

    .dsf_jh_ertxc {
        position: sticky;
        top: 0
    }

</style>
