<template>
	<div>

		<section class="pd bgff pt20 pm20">

			<section>
				<section class="ov fl dsf_h_dxerttx" :class="ds.cls" v-for="(ds,idx) in d_jh_s" @click="sd_sd(idx)">
					<section class="s_sd_ijuyh_sde">
						<span class="pr">{{ds.name}}</span>
					</section>
				</section>
 
			</section> 
			<p class="qc"></p>
  
			<section class="mui-row dsf_jh_sdrx">
				<p class="mui-col-xs-10 pr pr10">
					<input type="text" :placeholder="'搜索'+(is_detrt==0?'本店':'苍鸟')+'所有商品'" v-model="search_text" class="search_text_we">
					<i class="dx icon-sousuo ss_sd_se"></i>
				</p>
				<p class="ov  h100 tr"> 
					<a class="mui-btn mui-btn-red ss_jh_derrt" @click="search_btn">

						<span>搜索</span>
					</a>
				</p>

			</section>

		</section>
        <section class="sd_jh_der">
		<section class="bgff pl10">

			<section class=" fz12 z6 pr10">
				<span v-if="is_detrt==0">店铺</span> 
                <span v-else>全站</span>
                热搜

<!--				<span class="fr z9"><i class="dx icon-refresh ls fz14"></i> 换一批</span>-->
			</section>

			<section class="mt10">
				<span v-if="is_detrt==0" class="fz12 br z6 bghs  df_jgh_derxc" v-for="(dsf_sd,idx) in fenlei_s" @click="hf('fenlei',{type:idx+1,cat_id:dsf_sd.cat_id})">
        {{dsf_sd.cat_name}}
    </span>

        <span v-if="is_detrt==1" class="fz12 br z6 bghs  df_jgh_derxc" v-for="(dsf_sd,idx) in fenlei_s_b" @click="d_dd_df(dsf_sd.cat_name)">
        {{dsf_sd.cat_name}}
            
        
    </span>

				<p class="qc"></p>
                
      

			</section>
		</section>
            </section>
        
        <section class="deerf_jh_deert">
                  <section v-if="is_detrt==1" class="mt20 sd_sdfwe_r"> 
    <span class="pr">
        <img src="https://mall.cangniaowl.com/static/img/cn_pup.png" class="w100">
        <span class="jinru_seer" @click="hf('https://api.cangniaowl.com/shop/311.html')"></span>
    </span>
        
    </section>
        <section v-if="is_detrt==0">
         </section>   
              </section>
            
<!--
     <advertising :position_id="2" class="mt10"></advertising>
             <showcase :position_id="2" class="mt10"></showcase>
-->
          
	</div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    import advertising from "../components/advertising.vue"
        import showcase from "../components/showcase.vue"
    export default {
        data() {
            return {
                fenlei_s: [],
                fenlei_s_b: [],
                search_text: "", //搜索的关键词
                is_detrt: 0,
                d_jh_s: [{
                        name: "本店",
                        cls: 'act'
                    }
                ]
            }
        },
        components: {
            advertising: advertising,
            showcase
        },
        methods: {
            sd_sd(idx) {
                this.is_detrt = idx
                this.d_jh_s.map(function(a) {
                    a.cls = ""
                })
                this.d_jh_s[idx].cls = "act"
                let th = this
                
                if (idx == 1) {
                    if(th.fenlei_s_b.length<=0){
                    let hotwordselect = {} 
                    hotwordselect.token = this.token
                  
                    this.post("home/hotwordselect", hotwordselect, function(data) {
                        data.map(a => {
                            let asd_et = {}
                            asd_et.cat_name = a.hot_word
                            th.fenlei_s_b.push(asd_et)
                        })
                    })
                        }
                } else {
                     if(th.fenlei_s.length<=0){
                         this.get_fenle()
                     }
                }
            },
            search_btn() { //搜索按钮触发
             
                this.hf("cplist", {
                    keyword: this.search_text,
                    mode: 1
                })

            },
            d_dd_df(search_text) {
                this.hf("cplist", {
                    keyword: search_text,
                    mode: 2
                })
            },
            get_fenle() {
                let category = {},
                    th = this
                category.token = this.token
                // 获取左边列表
                th.fenlei_s = []
                this.post("product/category", category, function(data) {
                    data.map(a => {
                        a.cls = ""
                        th.fenlei_s.push(a)
                    })
                })
            }
        },
        mounted() {
            this.Title("搜索")
            this.get_fenle()


        },
    }

</script>
<style scoped>
    .s_sd_ijuyh_sde {
        float: left;
        width: 90px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
    }

    .s_sd_ijuyh_sde span {
        position: relative;
        left: -10px;
        top: 2px;
        color: #999;
    }

    .s_sd_ijuyh_sde:after {
        content: ' ';
        position: absolute;
        right: 10px;
        top: 0px;
        height: 100%;
        width: 100%;
        background: #EEEEEE;
        border: 1px solid #F0F0F0;
        transform: skewX(35deg);
    }

    .dsf_h_dxerttx {
        position: relative;
        border-left: 1px solid #F0F0F0;
    }

    .dsf_h_dxerttx.act .s_sd_ijuyh_sde:after {
        background: #fff;
    }

    .dsf_h_dxerttx.act .s_sd_ijuyh_sde span {
        color: #333
    }

    .dsf_h_dxerttx:nth-child(2) {
        left: -15px;
    }

    .dsf_jh_se {
        width: 79px;
        line-height: 30px;
        height: 30px;
        text-align: center;
        position: relative;
        float: left;
        font-size: 14px;
        color: #999;
    }
section.ov.fl.dsf_h_dxerttx.act {
    z-index: 10;
}
    .dsf_jh_se:first-child .as_ngs {
        width: 118%!important;
        left: -15px !important;
    }

    .dsf_jh_se .as_ngs {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        border-right: 1px solid #f5f5f5;
        border-top: 1px solid #f5f5f5;
        transform: skewX(45deg);
    }

    .dsf_jh_se.act {
        color: #333;
    }

    .dsf_jh_se.act .as_ngs {
        background: #fff;
    }

    .dsf_jh_sdrx input {
        border: 1px solid #f5f5f5;
        border-radius: 0px;
        height: 32px;
        line-height: 1;
        font-size: 14px;
    }

    .dsf_jh_sdrx a.mui-btn {
        height: 35px;
        padding: 0px;
        line-height: 35px;
    }

    .ss_jh_derrt {
        padding: 0px;
        width: 55px;
        line-height: 32px !important;
        height: 32px !important;
    }

    .ss_sd_se {
        position: absolute;
        left: 5px;
        top: 6px;
        font-size: 14px;
    }

    .df_jgh_derxc {
        /*        padding: 3px 10px 0px 10px;*/
        line-height: 25px;
        padding-left: 8px;
        padding-right: 8px;
        float: left;
        margin-right: 5px;
        margin-bottom: 10px;
    }

    .sd_jh_der {
        min-height: 100px;
    }
    .search_text_we{
        font-size: 12px !important;
       padding-top: 13px;
        line-height: 1 !important;
    }
    
    .search_text_we::-webkit-input-placeholder {
   color:#D2D2D2 !important;
        padding-top: 2px;
}
.search_text_we::-moz-input-placeholder {
      color:#D2D2D2 !important;
    padding-top: 2px;
}
    .sd_sdfwe_r{
        width: 300px;
        margin: auto;
    }
    .jinru_seer{
        position: absolute;
        width: 130px;
        height: 50px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        margin: auto;
    }
    .deerf_jh_deert{
        min-height: 10rem;
    }

</style>
