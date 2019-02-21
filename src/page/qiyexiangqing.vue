<template>
	<div class="dsf_jh_derx">
		<p class="dsf_jh_dertx bgff ">
			<img src="http://mall.cangniaowl.com/static/img/tit.png">
		</p>
		<section class="dsf_jh_detxc ">

			<section class="bgff pm5">
				<div class="customer_inner_tit "><span>苍鸟消费者保障服务</span></div>
				<section class="sd_jhg_dd_sr pd pt15">
					<p class="fz12">
						苍鸟认证为第三方认证，针对入驻苍鸟公众号平台的商家进行相关经营信息审核，苍鸟为消费者提供跨公众号一站式购物、一站式管理的同时，为确保商家信息的真实性、有效性，对商家提交的相关资料进行验证审核，认证内容包含但不限于：经营主体、法人身份、注册资金、经营地点、商标证书等。

					</p>
					<p class="fz12 mt15">
						苍鸟认证对商家进行实名认证，目的是建立完善可靠的公众号商城信用机制，保护商家自主品牌，维护广大消费者的权益，打击假冒伪劣，给广大消费者提供一个公平、公正的安全绿色购物环境！
					</p>
				</section>
			</section>

			<section class=" pm5 mt10">
				<div class="customer_inner_tit  bgff"><span>店铺类型说明</span></div>
				<section class="article-content">
					<ul>
						<li>
							<img src="http://mall.cangniaowl.com/static/img/bule-half-line.png" class="sd_jh_dertxc">
							<h3><img src="http://mall.cangniaowl.com/static/img/flag.png" alt="">旗舰店铺</h3>
							<p>经苍鸟审核，属厂家直属或自主拥有品牌的官方店铺，仅限品牌的生产者及持有者。店铺名称带有“旗舰店”标识。</p>
						</li>
						<li><img src="http://mall.cangniaowl.com/static/img/bule-half-line.png" class="sd_jh_dertxc">
							<h3><img src="http://mall.cangniaowl.com/static/img/enterprise.png" alt="">企业店铺</h3>
							<p>经苍鸟审核，具有企业资质的店铺。店铺名称带有“企业店铺”标识。</p>
						</li>
						<li><img src="http://mall.cangniaowl.com/static/img/bule-half-line.png" class="sd_jh_dertxc">
							<h3><img src="http://mall.cangniaowl.com/static/img/person.png" alt="">个人店铺</h3>
							<p>尚未开通，敬请期待。</p>
						</li>
					</ul>
				</section>

			</section>

			<section class=" pm5 mt15 bgff">
				<div class="customer_inner_tit  bgff"><span>商标认证</span></div>
				<section class="sd_jhg_dd_sr pd pt15 pl20 pr20">

					<p class="fz12 z6">
						苍鸟对入驻商的品牌进行相关认证, 根据商家商标注册信息进行实际标注：
					</p>
					<p class="no-first-text fz12 z6 mt10"><span></span>®为已经注册并受到商标法保护的商标</p>
					<p class="no-first-text fz12  z6"><span></span> TM为已经在申请中但还没有被授权商标</p>

				</section>
			</section>

			<p class="mui-row cen  mt20">
				<a class="mui-btn  xiangq_bvtnsd " @click="hf('dianpuxinxi')">商家详情</a>
			</p>

			<p class="cen mt40">
				<img src="http://mall.cangniaowl.com/static/img/copy_bottom_bg.png" class="copy_bottom_bg">
			</p>
			<p class="z6 cen fz12">
				苍鸟公众号自媒体电商<br> Copyright2017 All Rights Reserved
			</p>

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
			this.Title("认证详情")
		},
	}
</script>
<style scoped>
	.sd_jhg_dd_sr p {
		text-indent: 2em;
	}

	.article-content {
		padding-left: 37px;
		padding-right: 37px;
		background: none;
	}

	.article-content li {
		border-radius: 5px;
		border: 1px solid #eee;
		margin-top: 19px;
		background: #fff;
		padding-bottom: 5px;
		position: relative;
	}

	.article-content li h3 {
		padding: 0 10px 0 10px;
		height: 30px;
		line-height: 30px;
		position: relative;
		font-size: 15px;
		color: #333;
	}

	.article-content li h3 img {
		width: 18px;
		height: 20px;
		margin-right: 5px;
		vertical-align: middle;
	}

	.article-content li p {
		padding: 0 15px 0 33px;
		text-indent: 0;
		font-size: 12px;
		color: #666;
		line-height: 1.5
	}

	.sd_jh_dertxc {
		width: 4px;
		position: absolute;
		left: 0px;
		top: 0px;
	}

	.no-first-text span {
		display: inline-block;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #666;
		margin-left: 5px;
		margin-right: 15px;
	}

	.xiangq_bvtnsd {
		width: 60%;
		background: #00b7ee;
		color: #fff;
		border: 1px solid #00b7ee;
	}
</style>
