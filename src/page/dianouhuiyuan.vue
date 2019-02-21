<template>
	<div>

		<section class="pd pt5 pm10 bgff">
			<section class="dsf_jgh_ert mui-row ">
				<img src="http://mall.cangniaowl.com/static/img/head_bg.png" class="heng_bgfs">
				<section class="pr h100 mui-row">

					<section class=" f_j_eretxc cz_w  pt20 cen fl">
						<img :src="user_info.header_image" class="user_iconsd yj ">

					</section>
					<section class="ov  mt20">
						<p class="cf">{{user_info.user_name}}</p>
						<p class="cf fz12 ">
							ID:{{user_info.user_id}}
						</p>
						<p>
							<span class="f_i hiu_sd">
            <span :class="user_info.user_group_name.length>=5?'act':''">{{user_info.user_group_name}}</span>
							</span>

						</p>

					</section>
				</section>

			</section>
		</section>

		<section class="bgff mt10 pd">
			<p class="pt10 z3">
				<i class="dx icon-shezhi z3 mr5"></i> 商城会员说明
			</p>
			<p class="fz13 z3 mt5 pm10">会员可享受对应级别的优惠及参与不定期的优惠返利活动，敬请期待！
			</p>
		</section>

		<section class="bgff mt10 pd pm10">
			<p class="pt10 z3">
				<i class="dx icon-shezhi z3 mr5"></i> 会员等级及优惠规则
			</p>

			<table class="mui-table cen dsf_jh_drtxc mt10">
				<thead class="fz13 bghs">
					<tr>
						<td width="50px">等级</td>
						<td>等级名称</td>
						<td width="60%">会员晋升规则（任意）</td>
					</tr>
				</thead>
				<tbody class="fz12">
					<tr>
						<td>1</td>
						<td>钻石会员</td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>金牌会员</td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>银牌会员</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</section>

<!--
		<section class="bgff mt10 pd">
			<p class="pt10 z3">
				<i class="dx icon-shezhi z3 mr5"></i> 关于会员系统的声明
			</p>
			<p class="fz13 z3 mt5 pm10">遵循国家相关法律法规及腾讯的相关规定，苍鸟提供的分销推广系统最高仅支持1级分销，即推荐者仅可从直接被推荐人的消费行为中获取一定奖励性收入（购买价差额），在合法合规及不违反商业道德的前提下开展社交营销行为。苍鸟对本系统保有最终解释权。

			</p>
		</section>
-->

	</div>
</template>
<script>
	export default {
		data() {
			return {
				user_info: ""
			}
		},
		components: {

		},
		methods: {

		},
		mounted() {
			this.Title("会员等级")

			let th = this
			this.post("user/userinfo", {
				token: this.token
			}, function(data) {
				th.user_info = data

			})
		},
	}
</script>
<style scoped>
	.dsf_jh_drtxc {
		line-height: 30px;
	}

	.dsf_jh_drtxc {
		border-top: 1px solid #f5f5f5;
		border-left: 1px solid #f5f5f5
	}

	.dsf_jh_drtxc td {
		border-bottom: 1px solid #f5f5f5;
		border-right: 1px solid #f5f5f5
	}
</style>
