<!--店铺详情-->
<template>
	<div>

		<section class="tioui_sd pl10 mui-row pt10 btm ">
			<section class="mui-col-xs-10">
				<section class="df_jgh_drtx fl">
					<img :src="shopinfo_p.shop_logo" class="br">

				</section>
				<section class="ov">
					<p class="fz12 mb5 ">
						{{shopinfo_p.shop_name}}
					</p>
					<renzheng :shopinfo_p="shopinfo_p"></renzheng>

				</section>

			</section>

		</section>

		<section class=" pt8 pm5 bgff mui-row mt10">

			<section class="mui-col-xs-3 cz_w h100">
				<section class="cz_a d_ih_ertxcr brm" @click="hf('cplist')">
					<p class="z3 fz15">{{shopinfo_p.on_goods_count}}</p>
					<p class="fz12">全部商品</p>
				</section>

			</section>

			<section class="mui-col-xs-3 cz_w h100 brm" @click="hf('cplist',{ty_pe:1})">
				<section class="cz_a d_ih_ertxcr">
					<p class="z3 fz15">{{shopinfo_p.thrity_on_goods_count}}</p>
					<p class="fz12">上新</p>
				</section>

			</section>
			<section class="mui-col-xs-3 cz_w h100 brm"  @click="hf('cplist',{ty_pe:2})">
				<section class="cz_a d_ih_ertxcr">
					<p class="z3 fz15">{{shopinfo_p.activity_goods_num}}</p>
					<p class="fz12">促销</p>
				</section>

			</section>

			<section class="mui-col-xs-3 cz_w h100 " @click="hf('xinxiang')">
				<section class="cz_a d_ih_ertxcr">
					<p class="z3 fz15">{{shopinfo_p.message_count}}</p>
					<p class="fz12">店铺动态</p>
				</section>

			</section>

		</section>

		<section class="btm bgff pd d_jh_ertxc">
			<p class="mui-row fz12">
				描述符合： <span class="red  ml5">{{shopinfo_p.goods_rank_avg}}分</span>
			</p>
			<p class="mui-row fz12">
				物流服务： <span class="red  ml5">{{shopinfo_p.deliver_rank_avg}}分</span>
			</p>
			<p class="mui-row fz12">
				服务态度： <span class="lser  ml5">{{shopinfo_p.services_rank_avg}}分</span>
			</p>

		</section>

		<ul class="mui-table-view mt10">
			<li class="mui-table-view-cell fz13" @click="hf('dianouhuiyuan')">
				店铺会员
				<i class="dx icon-right fz14 fr"></i>
			</li>
		</ul>

		<ul class="mui-table-view mt10">
			<li class="mui-table-view-cell fz13" v-for="as in ash_s">
				{{as.name}}:
				<span class="z9 f_b cz skh_sdsr dian pl10">{{as.mgs}}</span>
				<span class="z9 fz12 df_jh_detc" :class="rzzt==1?'act':''">
                <i class="dx icon-gou1"></i>
                 {{rzzt|zhuang}}
            </span>
			</li>
		</ul>

		<section class="pd mt10 bgff pd pt10 pm10 cen">
			<img :src="shopinfo_p.wei_qr_code" class="qc_eer_ser">
			<p class="fz12">
				<span class="red"> *</span> 请扫码关注商家公众号
			</p>
		</section>

		<section class="pd bgff mt10 ">
			<p class="pt10 pm5">
				销售品牌
			</p>

            <section v-if="cd_sd<=0">
			<p class="cen mt15">
				<img src="http://mall.cangniaowl.com/static/img/accredit.png" class="sd_jh_eerttx">
			</p>
			<p class="cen pm20 mt5">
				暂无销售品牌
			</p>
                </section>
            <section  class="mui-row" v-else>
                <section class="mui-col-xs-4 pd mb10" v-for="sd in shopinfo_p.brand_logo">
                    <section class="sd_jyh_case br">
                        <img :src="sd" class="cz">
                        <i class="f_a r_icon"></i>
                    </section>

                </section>
            </section>
		</section>

	</div>
</template>
<script>
    import renzheng from "../components/renzheng.vue"
    export default {
        data() {
            return {
                shopinfo_p: "",
                cd_sd: 0,

                rzzt: 0,
                ash_s: [{
                        name: "公司名称",
                        mgs: "",
                        cls: ""
                    },
                    {
                        name: "注册资金",
                        mgs: "",
                        cls: ""
                    },
                    {
                        name: "法人信息",
                        mgs: "",
                        cls: ""
                    },
                    {
                        name: "所在地区",
                        mgs: "",
                        cls: ""
                    },
                    {
                        name: "开店时间",
                        mgs: "",
                        cls: "-1"
                    },
                ]
            }
        },
        components: {
            renzheng: renzheng
        },
        methods: {
            sd_ddf(val) {
                let th = this

                th.shopinfo_p = val
                th.ash_s[0].mgs = th.shopinfo_p.company
                th.ash_s[1].mgs = th.shopinfo_p.company_registered_capital
                th.ash_s[2].mgs = th.shopinfo_p.company_boss_info
                th.ash_s[3].mgs = th.shopinfo_p.province_name + " " + th.shopinfo_p.city_name
                th.ash_s[4].mgs = th.shopinfo_p.add_time
                th.rzzt = th.shopinfo_p.company_status
                th.cd_sd = th.shopinfo_p.brand_logo.length
                if (!th.rzzt) {
                    th.rzzt = 0
                }
            }
        },
        computed: {
            getshopinfo() {
                return this.$store.state.shopinfo;
            }
        },
        watch: {
            getshopinfo(val) {
                this.sd_ddf(val)

            }
        },
        mounted() {
            this.Title("店铺信息")
            this.shopinfo_p = this.$store.state.shopinfo

            this.sd_ddf(this.shopinfo_p)
            window.scrollTo(0, 0);
        },

        filters: {
            zhuang(num) {
                return ["未提交", "审核通过", "审核中", "审核不通过"][num]
            }
        }
    }

</script>
<style scoped>
    .df_jgh_drtx {
        margin-top: 0px;
    }

    .tioui_sd {
        height: auto;
    }

    .d_jh_ertxc {
        padding-bottom: 5px;
    }

    .skh_sdsr {
        width: 65%;
        position: relative;
        bottom: 1px
    }

    .df_jh_detc {
        position: absolute;
        right: 10px;
    }

    .df_jh_detc.act {
        color: #0076EF !important;
    }

    .qc_eer_ser {
        width: 180px;
        height: 180px;
    }

    .sd_jh_eerttx {
        width: 80px;
    }

    .sd_jyh_case {
        min-height: 90px;
        height: 6rem;
        text-align: center;
        line-height: 6rem;
        position: relative;
    }

    .sd_jyh_case img {
        max-height: 100%;
        max-width: 100%;
    }

    .sd_jyh_case:after {
        content: ' ';
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #4FADFF, #CEE95B);
    }

    .r_icon {
        width: 17px;
        height: 17px;
        background-position: -116px -93px;
        position: absolute;
        right: 5px;
        top: 5px;
    }

</style>
