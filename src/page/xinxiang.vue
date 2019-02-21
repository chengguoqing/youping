<!--我的信箱-->
<template>
	<div>
              <section  v-if="false">
		<section class="xingx_sd pd mb5" v-for="sd in 4">

			<p class="cen pt10 pm10">
				<span class="yj4 fz12 yhg_ds_err">2017-11-13 14:22:33</span>
			</p>
			<section class="yj4 ov bgff">
				<section class="fd_hjg_ser">

					<section class="pr">
						<img src="http://mall.cangniaowl.com/static/img/xingxiang.jpg">

						<p class="fz14 d_jj_ertx dian">
							公众号互联互通实现资源与流量共享
						</p>
					</section>

				</section>
				<section class="dsf_jh_ewre_d fz14 pd btm mui-row" v-for="sd in 2">

					<p class="dian mui-col-xs-10 z3">公众号互联互通实现资源与流量共享公众号互联互通实现资源与流量共享</p>
					<p class="mui-col-xs-2 tr">
						<img src="http://mall.cangniaowl.com/static/img/xingxiang.jpg " class="g_se_etxc cz">
					</p>

				</section>

			</section>

		</section>
    </section>
        	<kongbai v-else :kb="kb" @ziding='$router.back(-1)'></kongbai>
    
	</div>
</template>
<script>
        import kongbai from "../components/kongbai.vue"
         import suspension from "../components/suspension.vue"
    
	export default {
		data() {
			return {
 kb: {
                    icom: "dsf_hss_sd",
                    msg: "没有更多数据了",
                    btn_name: "返回上一页",
                    btn_url: "-1"
                }
			}
		},
		components: {
            kongbai:kongbai,
            suspension
		},
		methods: {

		},
		mounted() {
			this.Title("我的信箱")
		},
	}
</script>
<style scoped>
	.yhg_ds_err {
		background: rgba(0, 0, 0, 0.3);
		color: #fff;
		padding: 4px 10px;
	}

	.fd_hjg_ser {
		padding: 10px;
	}

	.fd_hjg_ser {
		height: 10.5rem;
		position: relative;
	}

	.fd_hjg_ser img {
		width: 100%;
		height: 100%
	}

	.d_jj_ertx {
		background: rgba(0, 0, 0, 0.5);
		color: #fff;
		position: absolute;
		left: 0px;
		bottom: 5px;
		width: 100%;
		font-size: 14px;
		padding: 5px 10px;
	}

	.dsf_jh_ewre_d {
		line-height: 47px;
		padding-top: 6px;
		padding-bottom: 6px;
	}

	.g_se_etxc {
		width: 47px;
		height: 47px;
	}
</style>
