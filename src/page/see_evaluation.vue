<template>
	<div>

		<section class="bgff">
			<section class="pd  pm5 fz12 z3 dingdn_se">
				订单编号：<span>{{goods_s.order_sn}}</span>
			</section>
			<section v-for="gl in goods_s.goods_list">
				<ul>
					<li class="pd pt10 pm10 btm mui-row pr bghs">

						<p class="cp_icon_sdf fl ">
							<img :src="gl.goods_thumb">
						</p>

						<section class="ov pl10 mui-row pr">
							<section class="mui-col-xs-9">
								<p class="dianer z3 sdf_jh_dertx fz14">{{gl.goods_name}}</p>

							</section>
							<section class="ov tr">
								<span class="fz16">￥
                         <span v-html="price_guo(gl.goods_price)"> </span>

								</span>
								<p class="fz12 dsf_hg_dser">
									x{{gl.goods_number}}
								</p>
							</section>

						</section>

					</li>
				</ul>
				<section class="pd bgff">
					<section class="fz12 pt10">
						商品评价 <span class=" ml5">
                    <i class="dx icon-shoucang fz22 cz ml5" v-for="(df,idx) in 5" :class="idx<gl.comment.comment_rank?'act':''"></i>
                      </span>

						<span class="fz12 z9 fr" v-html="time_c(gl.comment.add_time)"></span>
						<p class="qc"></p>
						<p class="mt10 z3">
							{{gl.comment.content}}
						</p>

						<section class="mt10">

							<p class="pingjia_sd" :style="{backgroundImage: 'url('+simg+') ' }" v-for="simg in gl.comment.images" @click="hf('photo_viewer',{ping:gl.comment.images,ptext:gl.comment.content,comment_rank:gl.comment.comment_rank})">

							</p>
							<p class="qc"></p>
						</section>

						<p class="btm fz12 mt5 pt5 pm5" v-if="gl.comment.reply_count>0">

							<span class="red">店家回复</span>: {{gl.comment.reply_content}}
						</p>

					</section>
				</section>

			</section>

		</section>

		<section class="mt10 pd pt10 pm10 bgff mt10">
			<i class="dx icon-dianpu z6"></i><span class="fz15 ml5 z3">店铺评分</span>
			<section class="btm mt5 ">
				<p class="z3  mt15">
					物流服务
					<span class="ml5">
            <i class="f_i et_sdf cz mr5" v-for="(sd,idx) in 5 " :class="idx<deliver_rank?'act':''" ></i>
    </span>
				</p>

				<p class="z3  mt20">
					服务态度
					<span class="ml5">
            <i class="f_i et_sdf cz mr5" v-for="(sd,idx) in 5 " :class="idx<services_rank?'act':''" ></i>
    </span>
				</p>

			</section>

		</section>
<!--
<advertising :position_id="12" class="mt10"></advertising>
        <showcase :position_id="12" class="mt10"></showcase>
-->
        
	</div>
</template>
<script>
       import advertising from "../components/advertising.vue"
    import showcase from "../components/showcase.vue"
    
	export default {
		data() {
			return {
				goods_s: "",
				order_id: "",
				viewComment: "",
				deliver_rank: 0, //物流评分
				services_rank: 0 //服务态度
			}
		},
		components: {
            advertising:advertising,
            showcase
		},
		methods: {

		},
		mounted() {
			this.order_id = this.$route.query.order_id

			let viewComment = {},
				th = this
			viewComment.token = this.token
			viewComment.order_id = this.order_id
			this.post("user/viewComment", viewComment, function(data) {
				th.goods_s = data
				th.deliver_rank = data.goods_list[0].comment.deliver_rank
				th.services_rank = data.goods_list[0].comment.services_rank
			})

			this.Title("查看评价")
		}
	}
</script>
<style scoped>

</style>
