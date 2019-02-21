<template>
	<div >
<!--        限购或库存不足弹出层-->

        <section class="sad_hj_s cz_w" v-if="is_s">
            <section class="cz_a">
                <section class="pup_tang_s yj4 ov">


                    <section class="pd pt10">
                    <p class="tl fz12 z0 mb10" v-if="type==2">
                        以下<span class="red">{{data_list.length}}</span>款商品库存不足，请返回{{xsd_sd||'购物车'}}修改数量后重新结算。
                    </p>
                      <section class="df_uliys_e tl ">
                        <ul class="sd_jhh_erts">
                            <li v-for="dsf in data_list">
                                <img :src="dsf.goods_thumb" class="sd_y_ertxr fl br">
                                <section class="ov pl10">
                                    <p class="dian z3 mt2">{{dsf.goods_name}}</p>

                                    <p class="fz12 z9 mt2">
                                    {{dsf.goods_attr}}
                                        <span class="fr">x{{dsf.goods_number}}</span>
                                    </p>
                                </section>
                                <p class="qc"> </p>
                            </li>
                        </ul>
                    </section>

                    <p class="tl fz12 z0 " v-if="type==1">
                        该商品限购<span class="red"> {{data_list[0].limit_num}}</span> 件，您可购买
                        <span class="red"> {{data_list[0].can_buy}} </span>件，请返回{{xsd_sd||'购物车'}}修改数量后重新计算。
                    </p>

                    </section>


                    <p class="bgred cf sd_jh_cet mt5" @click="$emit('sd_ert')">
                        返回{{xsd_sd||'购物车'}}
                    </p>





                </section>

        </section>

            </section>

	</div>
</template>
<script>
    export default {
        props: {
            is_s: "",
            type:"",
            data_list:"",
            xsd_sd:""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {},
    }

</script>
<style scoped>
    .sad_hj_s {
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .pup_tang_s {
        background: #fff;
        width: 310px;
        margin: auto;
    }

    .sd_y_ertxr {
        width: 45px;
        height: 45px;
    }

    .sd_jhh_erts {
        max-height: 165px;
        overflow: auto;
    }

    .sd_jhh_erts li {
        margin-bottom: 10px;
    }
    .sd_jh_cet{
        line-height: 38px;
    }

</style>
