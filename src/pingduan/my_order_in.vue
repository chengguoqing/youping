<template>
    <div >
         	<sear_head :placeholder="'搜索订单编号,商品名称'"></sear_head>
        
        <section class="dsf_jh_ertxc pd box cen pr ">
			<p class="box_a z3" v-for="(sw,idx) in ss_jh_w" :class="sw.cls" @click="queghua_s(idx,sw.type)">
				<span class="fz14">{{sw.name}}</span>
			</p>
 
		</section> 
        
        
        <section class="sd_jhIs aa">
        
        <section class="dsf_h_row bgff mt10" v-for="sd in 5">

					<section class="pd  pm5 fz12 z3 dingdn_se">
						订单编号：A12018082213385494885
						<span class="fr ls">待付款</span>
	
					</section>

					<ul>
						<li class="pd pt10 pm10 btm mui-row pr" >

							<p class="cp_icon_sdf fl ">
								<img src="http://images.cangniaowl.com/230/20180620/b0dc4661e85b036b26d8b512f61403e7.jpg?imageView2/1/w/700/h/700/interlace/0/q/80">
							</p>

							<section class="ov pl10 mui-row pr">
								<section class="mui-col-xs-9">
									<p class="dianer z3 sdf_jh_dertx fz14">清爽丝滑组合【植物精华柔肤水*1水润丝滑霜*1天使魔法嫩肤精华液*1】送化妆包</p>

									<p class="fz12 dian">
										11
									</p>
	

								</section>
								<section class="ov tr">
									<span class="fz16">￥
                         <span v-html="price_guo(99)"> </span>

									</span>
									<p class="fz12 dsf_hg_dser">
										x1
									</p>
								</section>

							</section>

						</li>
					</ul>
					<p class="tr fz12 btm pt5 pm5 pd z3">
						共计1件商品 合计：
						<span class="red  fz16">￥ <span v-html="price_guo(98.4)"> </span></span> (含运费 ￥0.00)
					</p>
					<section class="btm  tr df_jgh_wer pd pt5 pm5">
						<span >
                             <a class="mui-btn">取消订单</a>
                         <a class="mui-btn">取消订单</a>
                            <a class="mui-btn ls_bor" >去支付</a>
                    </span>

					

						

					

					


					</section>
            
            <section class="btm fg_jh_fr tr pr5">
                           <section class="wenhao_icon ac">
                    <img src="/static/img/act_top.jpg" class="yj  cz"> 
                    <i class="f_p pingzhu_e"></i>
                </section>
                
                <section class="wenhao_icon ac">
                    <img src="/static/img/act_top.jpg" class="yj  cz"> 
    
                </section>
                  <section class="wenhao_icon ac">
                    <img src="/static/img/act_top.jpg" class="yj  cz"> 
    
                </section>
                
        </section>

				</section>
</section>
        
        
        
        
        
        
    </div>
        </template>
<script>
    import sear_head from "../components/sear_head.vue"
    export default {
        data() {
            return {
                ss_jh_w: [{
                        "name": "全部",
                        cls: "act",
                        type: ""
                    },
                    {
                        "name": "待付款",
                        cls: "",
                        type: 6
                    },
                    {
                        "name": "待发货",
                        cls: "",
                        type: 1
                    },
                    {
                        "name": "待收货",
                        cls: "",
                        type: 2
                    },
                    {
                        "name": "待评价",
                        cls: "",
                        type: 11
                    }
                ]
            }
        },
        components: {
            sear_head
        },
        methods: {
            queghua_s(idx, type) {

                this.ss_jh_w.map(function(a) {
                    a.cls = ""
                })
                this.ss_jh_w[idx].cls = "act"

            },
        },
        mounted() {
            this.Title("拼团订单")
        },
    }

</script>
<style scoped>
   

</style>
