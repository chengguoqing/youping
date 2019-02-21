<!--广告-->
<template>
	<div >
<!--
    	<section class="df_jh_edert  cen " v-if="position_id==1||position_id==5">
							<section class="fz12  f_b dsf_jhh_er pr">
								<span class="pr">{{shopinfo_p.company}}</span>
							</section>

						</section>
-->
        <section v-if="exposure.img_url" class="pd"> 
						<p class="dsf_jgh_e fz16 ab mt40 mb15">
							<span> 广告</span>
						</p>
						<p class=" pr fg_jh_deetrt">
                            <span class="pr">
                                <img :src="exposure.img_url" class="w100" @click="dinajis(exposure)">
                                 <span class="sd_jh_deetr">
<!--                                     <img src="/static/img/clj.png" class="cz">-->
                                     <span class="cz mt2 f_b">活动推广</span></span>
                            </span>


						</p>
            </section>
	</div>
</template>
<script>
    export default {
        props: {
            position_id: "",
            goods_id: ""
        },
        data() {
            return {
                exposure: {}, //广告
                shopinfo_p: ""
            }
        },
        components: {

        },
        methods: {
            dinajis(date) { //点击计费
                let click = {}
                click.shop_id = this.shopinfo_p.shop_id
                click.token = this.token
                click.ad_id = date.ad_id
                click.interactive_id = date.interactive_id
                this.post("ad/click", click, function(data) {

                    window.location.href = data.ad_link
                })
            },
            guangg_s(val) {
                let exposure = {},
                    th = this
                th.shopinfo_p = val
                exposure.token = th.token
                exposure.position_id = th.position_id
                exposure.goods_id = th.goods_id
                if (val.ad_status > 0) {
                    th.post("ad/exposure", exposure, function(data) {
                        th.exposure = data
                        if (!th.exposure) {
                            th.exposure = {}
                            th.exposure.img_url = false
                        }
                    })
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
                this.guangg_s(val)
            }
        },
        mounted() {
    this.guangg_s(this.$store.state.shopinfo)
        }



    }

</script>
<style scoped>


</style>
