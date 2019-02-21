<template>

	<div>

		<sear_head @sear_text="search_key" :placeholder="'搜索苍鸟更多商品，聆听品牌直接声音'"></sear_head>


		<section class="dsf_kjj_sd">
			<gengduo v-if="gengduo"></gengduo>

			<cplist_l :keyword="keyword" :mode="mode" :cat_id="cat_id" :sd_dertt="sd_dertt" :ty_pe="ty_pe" :group_id="group_id"></cplist_l>
		</section>

<!--
          <advertising :position_id="3" class="mt10"></advertising>
         <showcase :position_id="3"></showcase>
-->
         

	</div>    
 
</template> 
<script>
	import gengduo from "../components/gengduo.vue"
	import cplist_l from "../components/cplist_l.vue"
	import sear_head from "../components/sear_head.vue"
     import advertising from "../components/advertising.vue"
        import suspension from "../components/suspension.vue"
      import showcase from "../components/showcase.vue"
     
	export default {
		data() {
			return {
				gengduo: false,
				keyword: "",
				cat_id: "",
                ty_pe:0,
				mode: "",
                group_id:"",
                sd_dertt:false
			}
		},
		components: {
			gengduo: gengduo,
			cplist_l: cplist_l,
			sear_head: sear_head,
            advertising:advertising,
            suspension,
            showcase 
		},
		methods: {
			search_key(data) { //搜索
				this.keyword = data
                this.sd_dertt=true
			}
		},
		mounted() {
			this.keyword = this.$route.query.keyword || ''
			this.cat_id = this.$route.query.cat_id || ''
			this.mode = this.$route.query.mode
            this.ty_pe=this.$route.query.ty_pe
            this.group_id=this.$route.query.group_id
       
            if(this.mode==2){
                
                  this.Title("产品列表--苍鸟联盟","苍鸟联盟")
            }else{
                this.Title("产品列表")
            }
			
		},
        beforeRouteLeave(to, from, next) {
            // 设置下一个路由的 meta
             if (to.path == "/commodity_details") {
                  to.meta.keepAlive = false
             }

            next();
        }
	}
</script>
<style scoped>
    

    
    
    
    
	.dsf_kjj_sd {
		padding-top: 44px;
        min-height: 28rem;
	}

	.asd_uy_dftx {
		z-index: 9999
	}

	.sd_jh_derxc {
		line-height: 1;
		right: -20px;
		top: -11px;
		position: absolute;
		display: inline-block;
	}

	.sd_jh_derxc i {
		font-size: 15px;
		color: #666
	}

	.sd_jh_derxc i.aa {
		display: inline-block;
		transform: rotate(180deg);
		position: relative;
		top: 5px;
		left: 0.8px;
	}

	.dsf_jh_sdsd .mui-col-xs-3.red i.aa {
		color: #F44336!important;
	}

	.dsf_jh_sdsd .mui-col-xs-3.red .sd_jh_derxc.act i.ab {
		color: #F44336!important;
	}

	.dsf_jh_sdsd .mui-col-xs-3.red .sd_jh_derxc.act i.aa {
		color: #666!important;
	}
</style>
