<template>
	<footer class="mui-row dsf_d_dibu btm cen"> 
		<section class="mui-col-xs-3" v-for="(du,idx) in dubvu" :class="idx==kjh_s?'act':''" @click="sd_jheertxc(du.href)">
			<p class="sd_jhg_ert pr" :class="idx==2?'kefu':''" >
                
				<i class="dx   z9 cz pr" :class="[du.icon,du.size,idx==2?'sd_jkh_er':'']" v-if="idx!=kjh_s"></i>
                <i class="dx   z3 cz pr" :class="[du.icon_er,du.size,idx==2?'sd_jkh_er':'']" v-if="idx==kjh_s"></i>
			</p>
			<p class="z9 fz12" :class="idx==2?'sd_jkh_er':''">
				{{du.name}}
			</p>
		</section>

	</footer>
 
</template>
<script>
      import base from "../js/base.js"
  import {
        MessageBox
    } from 'mint-ui';
	export default {
		props: {
			kjh_s: "",
			gwcw: ""
		},
		data() {
			return {
				dubvu: [{
					name: "首页",
					icon: "icon-shouye_weixuanzhong",
                    icon_er: "icon-shouye_xuanzhong",
					size: "fz20",
					href: "",
					cls: "act"
				},{
					name: "名片",
					icon: "icon-mingpian_weixuanzhong",
					size: "fz18",
					href: "user?typee=2",
					cls: ""
				}, 
                    {
					name: "购物车",
                         icon_er: "icon-gouwuche_xuanzhong",
					icon: "icon-gouwuche_weixuanzhong",
					size: "fz20",
					href: "gwc",
					cls: ""
				},{
					name: "订单",
                     icon_er: "icon-dingdan_xuanzhong",
					icon: "icon-dingdan_weixuanzhong",
					size: "fz20",
					href: "order_form",
					number: 0,
					cls: ""
				},{
					name: "我的",
					icon: "icon-wode_weixuanzhong",
					size: "fz20",
                     icon_er: "icon-wode_xuanzhong",
					href: "user",
					cls: ""
				} ]
			}
		},
		methods: {
            sd_jheertxc(url){
               
                if(url=="generalize"&&this.$store.state.shopinfo.user_group_id<=0){
                    MessageBox(' ', '推广名片仅限会员可以生成，您目前尚不是会员，无法生成推广名片');
                    return
                }
                console.log(base.kefu);
                this.hf(url)
            }
		},
		created: function() {
			let th = this
			if(this.car_number) {
				th.dubvu[3].number = this.car_number
			} else {
				th.carnumber(function(data) {
					th.dubvu[3].number = data
				})
			}

		},
		watch: {
			gwcw: {
				handler: function() {
					let th = this
					th.carnumber(function(data) {
						th.dubvu[3].number = data
					})
				},
				deep: true
			}
		}
	}
</script>
<style scoped>
	.dsf_d_dibu {
		position: fixed;
		width: 100%;
		left: 0px;
		bottom: 0px;
		z-index: 999;
		background: #fff;
        border-top: 1px solid #EEEEEE
	}

	.sd_jhg_ert {
		line-height: 28px;
		position: relative;
		top: 2px;
	}

	.dsf_d_dibu .mui-col-xs-3 {
	   width: 20%
	}

	.dsf_d_dibu .mui-col-xs-3.act .z9 {
		color: #F44336 !important
	}

	.dsf_d_dibu .mui-col-xs-3.act .dx {
		color: #F44336 !important
	}
</style>
