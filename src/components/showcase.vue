<!--橱窗-->
<template>
    <div>
         	<p class="dsf_jgh_e fz16 ab mt0 mb15" v-if="list_data">
                    <span> 猜你喜欢</span>
            </p> 
        <div class="pd">
        		<commodity_list :lt_data="list_data" :mode="mode" :loading="loading" :is_down="is_down" :ad_id="sd_jh_dete.ad_id" :interactive_id="sd_jh_dete.interactive_id" :shop_id="sd_jh_dete.shop_id" :is_ga_d="true"></commodity_list>
            
      	<commodity_list  :lt_data="list_data_er" :mode="mode" :loading="loading" :is_down="is_down"  :ad_id="sd_jh_dete_er.ad_id" :interactive_id="sd_jh_dete_er.interactive_id" :shop_id="sd_jh_dete_er.shop_id" :is_ga_d="true"></commodity_list>
            
            
        </div>
    </div>
        </template>
<script>
    import commodity_list from "./commodity_list.vue"
    export default {
        props: {

            position_id: "",
            goods_id: ""
        },
        data() {
            return {
                mode: "",
                list_data: "",
                list_data_er: "",
                sd_jh_dete: "",
                sd_jh_dete_er: "",
                loading: false, //是否下拉 true禁止
            }
        },
        components: {
            commodity_list
        },
        methods: {
            is_down() {

            },
            getdata(val) {
                let exposure = {},
                    th = this
                exposure.token = this.token
                exposure.position_id = this.position_id,
                    exposure.goods_id = this.goods_id
                if (val.ad_status > 0) {
                    th.post("shopwindow/exposure", exposure, function(data) {
                        console.log(data);
                        try {
                            th.list_data = data[0].goods_data
                            th.sd_jh_dete = data[0]
                        } catch (e) {

                        }
                        try {
                            th.list_data_er = data[1].goods_data
                            th.sd_jh_dete_er = data[1]
                        } catch (e) {

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
                this.getdata(val)


            }
        },
        mounted() {
 this.getdata(this.$store.state.shopinfo)

        },
    }

</script>
<style scoped>


</style>
