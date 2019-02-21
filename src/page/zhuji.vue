<!--我的足迹-->
<template>
	<div>
		<section v-if="true">
			<p class="bgls cf pd pt5 pm5 d_jh_dertx">
				共45条浏览记录
				<span class="fr" @click="popupVisible==false?popupVisible=true:popupVisible=false">
      {{!popupVisible?'编辑':'完成'}}
    </span>
			</p>
			<section class="ds_jh_ser">
				<section class="df_sdrt" v-for="sdf in 1">
					<p class="pd pt7 pm5">
						今天
					</p>

					<section class="dsf_h_row bgff ">

						<ul>
							<li class="pd pt10 pm10 btm mui-row pr" v-for="sd_r in sc_se" @click="hf('xiangqing')">

								<span class="dsf_jhsd yj cz fl mt30 mr10" v-if="popupVisible" :class="sd_r.cls" @click="sd_r.cls=='act'?sd_r.cls='':sd_r.cls='act'">
                          <i class="dx icon-gou fz14"></i>
                    </span>

								<p class="cp_icon_sdf fl ">
									<img src="http://mall.cangniaowl.com/static/img/cp.jpg">
								</p>

								<section class="ov pl10 mui-row pr">

									<p class="dianer z3 sdf_jh_dertx">敏保湿特护霜50g敏保湿特护霜50g 舒缓敏感肌 肤护肤
									</p>
									<p class="fz16 dian red  dsf_jh_dsert">
										￥500.00<br>
										<del class="fz12 z9">1000.00</del>
									</p>

								</section>

							</li>
						</ul>

					</section>

				</section>

			</section>

		</section>

		<kongbai :kb="kb" v-else></kongbai>

		<mt-popup v-model="popupVisible" :position="'bottom'" :modal="false">
			<p class="cen pt10 pm10 btm">
				<a class="mui-btn bgls quxiayu_s" @click="quxiao">删除浏览记录</a>
			</p>
		</mt-popup>

	</div>
</template>
<script>
	import {
		MessageBox
	} from 'mint-ui';
	import kongbai from "../components/kongbai.vue"
	export default {
		data() {
			return {
				popupVisible: false,
				sc_se: [{
						cls: ""
					},
					{
						cls: ""
					}
				],
				kb: {
					icom: "dsf_hss_sd",
					msg: "还未留下任何足迹",
					btn_name: "返回首页",
					btn_url: ""
				}
			}
		},
		components: {
			kongbai: kongbai
		},
		methods: {
			quxiao() {
				MessageBox.confirm('确定要删除浏览记录吗?').then(action => {
					if(action) {

					}
				});
			}
		},
		mounted() {
			this.Title("我的足迹")
		},
	}
</script>
<style scoped>
	.d_jh_dertx {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		z-index: 1000
	}

	.ds_jh_ser {
		padding-top: 32px;
	}

	.pt7 {
		padding-top: 7px;
	}

	.dsf_jh_dsert {
		line-height: 1.1;
		margin-top: 10px;
	}
</style>
