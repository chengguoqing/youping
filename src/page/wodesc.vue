<!--我的收藏-->
<template>
	<div class="df_hg_drtc">

		<sear_head @sear_text="ss_btndf" :placeholder="'搜索订单编号,商品名称'"></sear_head>

		<section class="sd_jhIs pr" v-if="wodesclist.length>0">
			<section class="dsf_jh_ertxc pd  cen ls fz15">
				全部商品（{{collection.total}}）
				<span class="binhgsdrt fz14 z6" @click="popupVisible==false?popupVisible=true:popupVisible=false">

        {{!popupVisible?'编辑':'完成'}}
 
    </span>
			</section>
			<section class="dsf_h_row bgff mt10" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false">

				<ul class="sd_jh_derter" >
  
					<li class="pd pt10 pm10 bbm mui-row pr" v-for="sd_r in wodesclist">

						<span class="dsf_jhsd yj cz fl mt30" v-if="popupVisible" :class="sd_r.cls" @click="sd_r.cls=='act'?sd_r.cls='':sd_r.cls='act'">
                          <i class="dx icon-gou fz14"></i>
                    </span>

						<p class="cp_icon_sdf fl " @click="hf('commodity_details',{goods_id:sd_r.goods_id})">
							<img :src="sd_r.goods_thumb">
						</p>

						<section class="ov pl10 mui-row pr" @click="hf('commodity_details',{goods_id:sd_r.goods_id})">
							<section class="mui-col-xs-9">
								<p class="dianer z3 sdf_jh_dertx">{{sd_r.goods_name}}</p>
								<!--
                            <p class="fz12 dian">
                                颜色：红色  容量：50ml
                </p>
-->
								<!--
                <p class="mt15">
                    <span class="bgred yj4 cf df_sdfrt fz12">七天退换</span>

                </p>
-->

							</section>
							<section class="ov tr">
								<span class="fz16 red">￥

                <span v-html="price_guo(sd_r.shop_price)"></span>
								</span>

							</section>

						</section>

					</li>
				</ul>


			</section>



            		<section class="qc pt10 pm10 btm fz13 cen" v-if="loading&&wodesclist.length>=10">
				<section v-if="is_down">
					<mt-spinner color="#26a2ff" :size="20" class="f_b cz"></mt-spinner>
					<span class="ml10">加载中...</span>
				</section>
                        		<section v-else>

					<span class="ml10">我是有底线的...</span>
				</section>
			</section>




		</section>

		<section class="sd_jhIs pr " v-else>

			<kongbai :kb="kb"></kongbai>

		</section>
              <section class="mt10">
<!--    	<advertising :position_id="10" class="mt10"></advertising>-->
    </section>
		<mt-popup v-model="popupVisible" :position="'bottom'" :modal="false">
			<p class="cen pt10 pm10 btm">
				<a class="mui-btn bgls quxiayu_s" @click="quxiao">取消收藏</a>
			</p>
		</mt-popup>

	</div>
</template>
<script>
    import {
        MessageBox
    } from 'mint-ui';
    import kongbai from "../components/kongbai.vue"
    import sear_head from "../components/sear_head.vue"
    import advertising from "../components/advertising.vue"

    import suspension from "../components/suspension.vue"
    export default {
        data() {
            return {
                collection: "",
                popupVisible: false,
                wodesclist: [],
                current_page: 1,
                loading: false, //是否下拉 true禁止
                ssding: "", //搜索框的内容
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "没有收藏商品",
                    btn_name: "返回首页",
                    btn_url: ""
                }
            }
        },
        components: {
            kongbai: kongbai,
            sear_head: sear_head,
            advertising: advertising,
            suspension
        },
        methods: {
            quxiao() {
                MessageBox.confirm('确定要取消收藏吗?').then(action => {
                    let sd_drt = [],
                        th = this
                    if (action) {
                      
                        this.wodesclist.map(a => {
                            if (a.cls == "act") {
                                sd_drt.push(a.collect_id)
                            }
                        })
                        let removecollection = {}
                        removecollection.token = this.token
                        removecollection.collect_id = sd_drt.join(",")
                        th.wodesclist=[]
                        this.post("user/removecollection", removecollection, function() {
                               
                            th.getshouc()
                        })

                    }
                    console.log();
                });
            },
            getshouc(keyword) {
                let collection = {},
                    th = this
                collection.token = this.token
                if (keyword) {
                    collection.keyword = keyword
                }


                collection.current_page = this.current_page
                this.post('user/collection', collection, function(data) {
                  
                    data.data.map(a => {
                        a.cls = ""
                        th.wodesclist.push(a)
                    })
                    th.collection = data
                    $(".df_hg_drtc").addClass("show")
                })
            },
            ss_btndf(data) { //搜索按钮触发
                this.getshouc(data)
                this.kb.msg = "没有搜索到相关商品"
            },
            loadMore() {

                this.loading = true;
                this.current_page++
                    this.getshouc()

            },
        },
        mounted() {
            this.getshouc()
            this.Title("我的收藏")
        },
    }

</script>
<style scoped>
    .binhgsdrt {
        position: absolute;
        right: 10px;
        top: 2px;
    }

    .df_hg_drtc {
        display: none
    }

    .sd_jhIs {
        padding-top: 75px;
        min-height: 28rem;
    }

    .dsf_jhsd {
        margin-right: 10px;
    }

    .quxiayu_s {
        padding: 6px 20px;
    }

    .dsf_jh_ertxc {
        top: 44px;
    }
    .sd_jh_derter{
margin-top: 35px;
    }

</style>
