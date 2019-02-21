<template>
	<div class="dsf_jh_derx">
		<p class="dsf_jh_dertx">
			<img src="http://mall.cangniaowl.com/static/img/tit.png" class="w100 mt20">
		</p>

		<section class="dsf_jh_detxc">

			<div class="customer_inner_tit bgff"><span>苍鸟消费者保障服务</span></div>
			<ul class="dsf_kjh_ul">
				<li v-for="dsf in test_sd">
					<div class="customer_inner_nav fix">
						<i class="icon"></i>
						<p class="left z3 fz14 b">{{dsf.title}}</p>
						<span class="sd_jh_drtx" :class="dsf.cls||''" @click="dsf.cls=='act'?dsf.cls='':dsf.cls='act'">
                                 <span class="fz12 ls" v-if="!dsf.cls">收起 </span>
						<span class="fz12 ls" v-else>展开 </span>
						<i class="dx icon-up fz12 ls"></i>
						</span>
					</div>
					<section class="  pd pm10 dsf_jh_dertxc" v-html="dsf.text" v-if="!dsf.cls">

					</section>

				</li>
			</ul>

		</section>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				htnl_s: "<p class='red'>dsfds</p>",
				test_sd: [{
					"title": "一、苍鸟简介",
					text: "<p>苍鸟是国内首家公众号商城入驻型平台，创建公众号的互联互通的整体购物环境，为消费者搭建逛街式购物体验的新型购物平台。秉承客户为先的理念，为消费者提供愉悦的购物体验，实现消费者与品牌的“零距离”接触！</p>",
					cls: ""
				}, {
					"title": "二、苍鸟消费者保障服务介绍",
					text: `<p>消费者保障服务是指卖家签署了苍鸟消费者保障服务协议，并向
                                 苍鸟缴纳10000元人民币作为保证金，承诺为消费者提供交易保
                                 障服务。</p><p>买家在苍鸟商家购买宝贝时，如果遇到收到货物存在质量问题或
                                 者网上描述不符或者付款后未收到货物的情况，如果卖家未履行
                                 承诺，买家可以根据本页面及苍鸟规则规定发起维权，经判定维
                                 权成功的，苍鸟将扣划卖家保证金进行先行赔付，以保障买家权
                                 益。</p>`,
					cls: ""
				}, {
					"title": "三、保障期限 ",
					text: "<p>自买家付款之时起至交易成功后三十（30）天内</p>",
					cls: ""
				}, {
					"title": "四、买家可享受的保障权益 ",
					text: `
                             <p style="padding-bottom: 0">与加入苍鸟消费保障服务计划的商家进行交易过程中，遇到如下问题：</p>
                             <ul class="warning">
                                 <li class="fix"><span></span>收到的商品出现质量问题；</li>
                                 <li class="fix"><span></span>收到的商品与网上描述不符；</li>
                                 <li class="fix"><span></span>付款后未收到商品。</li>
                             </ul>
                             <p>若卖家未履行承诺，买家可以根据本页面及苍鸟规则、规定发起
                                 维权，经判定维权成功的，苍鸟将扣划卖家保证金进行先行赔付，
                                 以保障买家权益</p>
                             <p>注：买家不按照苍鸟交易流程而完结的交易不在消费者保障范围
                                 内：</p>
                             <ul class="warning">
                                 <li class="fix"><span></span>未收到货情况下，买家提前确认收货的交易；</li>
                                 <li class="fix"><span></span>未收到货情况下，买家没有及时申请退款的交易；</li>
                                 <li class="fix"><span></span>未验货无误前，买家提前确认收货的交易。</li>
                             </ul>
                      `,
					cls: ""
				}, {
					"title": "五、提出消费者保障先行赔付的条件 ",
					text: `
                             <ul class="warning warning_T">
                                 <li class="fix"><span></span>买家发起的赔付申请的相关商品与收到的商品为同一件；</li>
                                 <li class="fix"><span></span>买家已要求卖家提供退货服务而被卖家拒绝，或无法联系到该
                                     卖家，或卖家中断 其经营、服务；</li>
                                 <li class="fix"><span></span>买家的赔付申请在形式上符合相关法律法规的规定；</li>
                                 <li class="fix"><span></span>赔付申请金额仅以买家实际支付的商品价款加邮费（含维权商
                                     品回邮邮费）为限；</li>
                             </ul>
                       `,
					cls: ""
				}, {
					"title": "六、赔付金额约定 ",
					text: `
                             <p>1.苍鸟实际赔付金额仅以商家缴纳的保证金为限向符合条件的买
                                 家先行赔付。</p>
                             <p>2. 如保证金不足以赔付给买家时，剩余未赔付的部分应由卖家承
                                 担赔付、补偿义务，苍鸟没有使用自有资金向消费者或者任何第
                                 三方支付赔偿金、补偿金或其他任何款项的义务。</p>
                        `,
					cls: ""
				}, {
					"title": "七、下列情况不属于赔付范围：",
					text: `<div class="content" style="display: block;">
                             <ul class="warning warning_T">
                                 <li class="fix"><span></span>达成调解协议并已执行，且无新情况、新理由的。</li>
                                 <li class="fix"><span></span>法院、仲裁机构或其他行政机关已处理的。 </li>
                                 <li class="fix"><span></span>买家知道或应该知道自己的权益受到侵害超过质保期限的。 </li>
                                 <li class="fix"><span></span>买家无法证实自己权益受到侵害的。 </li>
                                 <li class="fix"><span></span>经营者之间购、销活动的纠纷。 </li>
                                 <li class="fix"><span></span>不符合国家法律、法规有关规定的。 </li>
                             </ul>
                         </div>`,
					cls: ""
				}, {
					"title": "八、退款、维权流程 ",
					text: "<img src='http://web.cangniaowl.com/customer/img/flow.png' class='w100'> ",
					cls: ""
				}, {
					"title": "九、免责声明 ",
					text: `
                             <p>1. 苍鸟无法控制交易所涉及的产品和服务的质量、安全或合法性，商品或服务信息的真实性或准确性，以及交易各方履行其在交易协议中各项义务的能力。您应自行谨慎判断确定相关服务及/或信息的真实性、合法性和有效性，并自行承担因此产生的责任与损失，除非苍鸟另有明确规定。若您与卖家交易过程发生消费纠纷或合法权益受到损害时，您可以要求苍鸟平台进行调解，或者要求苍鸟平台提供卖家的联系方式。苍鸟将尽力帮助您获取真实可靠的信息，同时也需要您及时反馈在使用中遇到的问题并对欺诈行为进行举报，以提高苍鸟的服务质量。</p>
                             <p>2. 您了解并同意苍鸟及其关联公司并非司法机构，仅能以普通或
                                 非专业人员的知识水平标准对您提交的证据材料进行鉴别，苍鸟
                                 及其关联公司对交易纠纷的调处完全是基于您的委托，苍鸟及其
                                 关联公司无法保证交易纠纷处理结果符合您的期望，也不对交易
                                 纠纷调处结果及赔付决定承担任何责任。您应保证您提交的证据
                                 材料的真实性、合法性，并承担您或卖家提供的信息、数据不实
                                 的风险和责任。如您因此遭受损失，您同意自行向受益人索赔。</p>
                        `,
					cls: ""
				}, {
					"title": "十、争议解决  ",
					text: `<p>本服务之解释与适用，以及与本服务有关的争议，均应依照中华
                                 人民共和国大陆地区法律予以处理，并以苍鸟所在地人民法院为
                                 第一审管辖法院。</p>`,
					cls: ""
				}, ]
			}
		},
		components: {

		},
		methods: {

		},
		mounted() {
			this.Title("苍鸟消费者保障服务")
		},
	}
</script>
<style scoped>
	.dsf_jh_dertx img {
		width: 100%;
	}

	.dsf_jh_derx {
		background: #F6F6F6
	}

	.customer_inner_nav {
		height: 45px;
		line-height: 45px;
		overflow: hidden;
		position: relative;
	}

	.customer_inner_nav .icon {
		height: 14px;
		width: 3px;
		display: block;
		float: left;
		background-color: #11c2db;
		margin: 16px 8px 0;
	}

	.sd_jh_drtx {
		position: absolute;
		right: 10px;
		top: 0px;
	}

	.sd_jh_drtx.act .dx {
		display: inline-block;
		transform: rotate(180deg)
	}

	.dsf_kjh_ul li {
		background: #fff;
	}

	.dsf_kjh_ul li:nth-of-type(2n) {
		background: #F6F6F6
	}
</style>
