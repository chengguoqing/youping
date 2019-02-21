<!--用户的头部-->
<template>
	<section class="xiaotop_ose cen pr" :class="is_fems==1?'acv':''">
		<img :src="user_info.header_image" class="yj user_iconsd  ">
		<p class="cf fz16 mt5">
			{{user_info.user_name||"&nbsp;"}}
		</p>
		<p class="cf fz12 mt5" v-if="!num">
			我的ID：{{user_info.user_id}}
		</p>
 
		<p v-else class="mt15 fz26 cf">
			{{num}} <span class="fz14 ml10">{{text}}</span>
		</p>
        
        
        
        		<section class="kh_kihj_qian mui-row" v-if="is_fems==1">
				<section class="mui-col-xs-4 sdf_jh_d_dsr ">
					<p class="cf fz12 ">关联商城</p>
					<p class="cf fz15">
						{{partnercommission.shop_num||0}}
					</p>
				</section>
				<section class="mui-col-xs-4 sdf_jh_d_dsr ">
					<p class="cf fz12 ">分享者累计佣金</p>
					<p class="cf fz15">
						{{partnercommission.money||0}}
					</p>
				</section>

				<section class="mui-col-xs-4 sdf_jh_d_dsr ">
					<p class="cf fz12 ">今日佣金</p>
					<p class="cf fz15">
						{{partnercommission.money_today||0}}
					</p>
				</section>

			</section>
        
        
        
		<bolang></bolang>
	</section>
</template>
<script>
	import bolang from "./bolang.vue"
	export default {
		props: {
			title: "",
			num: "", //数字
			text: "", //后面的名称
            is_fems:"",
            partnercommission:""
		},
		data() {
			return {
				user_info: ""
			}
		},
		components: {
			bolang: bolang
		},
		methods: {

		},
		mounted() {
			this.user_info = JSON.parse(localStorage.user)
		},
	}
</script>
<style scoped>
	.xiaotop_ose {
		background: #0076EF;
		padding-top: 30px;
		padding-bottom: 40px;
	}
    .xiaotop_ose.acv{
            height: 14.4rem;
    }
    
    
    
    
    
    
    .kh_kihj_qian {
        position: absolute;
        left: 0px;
        bottom: 7px;
        width: 100%
    }

    .sdf_jh_d_dsr {
        line-height: 1.4;
        border-right: 1px solid #50AEFA
    }

    .sdf_jh_d_dsr:last-child {
        border: 0px;
    }

   
    
</style>
