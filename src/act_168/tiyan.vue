<!--体验168-->
<template>
<div class="sd_kj_deert">
    <img src="https://mall.cangniaowl.com/static/img/168/tiyan_a.jpg?v=5" class="w100 cz">

    
        <section class="pr">
        <img src="https://mall.cangniaowl.com/static/img/168/tiyan_b.jpg" class="w100 cz">
        <section class="sd_kjh_de">
                
            <section class="dfdf_df_drtrt"  >

                <section class="sd_fenhg_er " v-for="sd in sd_xddf" @click="hf(sd.url)">

                </section>          

                        <p class="qc"></p>
                
            </section>
    
<!--            领取面膜按钮-->

            <section  class="lingqummo" @click="xz_mianmo_is=true" >
                    
            </section>

            
             
        </section> 
    </section>
    
    
    <xz_mianmo v-if="xz_mianmo_is" @close_sd="xz_mianmo_is=false" :df_sdf="df_sdf"></xz_mianmo>
</div>
</template>
<script>
    import xz_mianmo from "../components/act168/xz_mianmo"
    export default {
        data() {
            return {
                xz_mianmo_is: false,
                df_sdf: [{
                    name: "竹炭净肤滋养面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_a.jpg",
                    cls: "",
                    goods_id: "36127",
                    goods_attr_id: "c7010fe1cd5dcbfefdf34a7690e4e57e",
                    goods_number: 1
                }, {
                    name: "水漾植物面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_b.jpg",
                    goods_id: "36127",
                    cls: "",
                    goods_attr_id: "c525b3c321e18995136893e81b4c06c5",
                    goods_number: 1
                }, {
                    name: "维他命C面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_c.jpg",
                    goods_id: "36127",
                    cls: "",
                    goods_attr_id: "c65ffb97f494e3e02050e787e300f6c6",
                    goods_number: 1
                }, {
                    name: "蜗牛原液面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_d.jpg",
                    goods_id: "36127",
                    cls: "",
                    goods_attr_id: "a2ed31252981bfaebe918e3b78ccb77a",
                    goods_number: 1
                }, {
                    name: "多重修复面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_e.jpg",
                    goods_id: "36127",
                    cls: "",
                    goods_attr_id: "4f1722684915aa3a7afdc2eb94f33c08",
                    goods_number: 1
                }, {
                    name: "虾红素嫩肤面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_f.jpg",
                    goods_id: "36127",
                    cls: "",
                    goods_attr_id: "4b394f8c92a3c45aed8b29dfef4707df",
                    goods_number: 1
                }, {
                    name: "玻尿酸面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_g.jpg",
                    goods_id: "36127",
                    cls: "",
                    goods_attr_id: "f99eeaa1acf3fa1b6d663984815a2be0",
                    goods_number: 1
                }, {
                    name: "修复冰膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_h.jpg",
                    goods_id: "36127",
                    cls: "",
                    goods_attr_id: "0ba09b3708ca1638f26a98bd02194d8b",
                    goods_number: 1
                }],
                sd_xddf: [{
                    name: "竹炭净肤滋养面膜",
                    url: "https://api.cangniaowl.com/news.html?id=5bded9d51e64f24fd15fe0d5"
                }, {
                    name: "水漾植物面膜",
                    url: "https://api.cangniaowl.com/news.html?id=5bded9571e64f2718237ebff"
                }, {
                    name: "维C面膜",
                    url: "https://api.cangniaowl.com/news.html?id=5bdebcf01e64f2480d25bcf2"
                }, {
                    name: "蜗牛原液面膜",
                    url: "https://api.cangniaowl.com/news.html?id=5bdec9511e64f26cfe7feae8"
                }, {
                    name: "敏感修复面膜",
                    url: "https://api.cangniaowl.com/news.html?id=5bdebd641e64f212464ed531"
                }, {
                    name: "虾红素抗氧化面膜",
                    url: "https://api.cangniaowl.com/news.html?id=5bdedb191e64f26cfe7feb02"
                }, {
                    name: "玻尿酸面膜",
                    url: "https://api.cangniaowl.com/news.html?id=5bdec9e91e64f2023828fefc"
                }, {
                    name: "修复冰膜",
                    url: "https://api.cangniaowl.com/news.html?id=5bdeda491e64f21bb47529d9"
                }]
            }
        },
        components: {
            xz_mianmo
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_kj_deert {
        position: relative;
        top: 100px;
        margin-top: -100px;
    }

    .sd_kjh_de {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        padding-top: 3.3rem
    }

    .dfdf_df_drtrt {

        width: 21.5rem;
        min-width: 295px;
        margin: auto;
        margin-top: 0px;
    }

    .sd_fenhg_er {
       width: 9rem;
            min-width: 83px;
            float: left;
            margin-right: 0.6rem;
            margin-left: 0.96rem;
            margin-top: 1.2rem;
            height: 11.2rem;
        /*        border: 1px solid #E5E5E5;*/
    }

    /*
    .sd_fenhg_er:nth-child(1) {
        margin-left: 4.4rem;
    }
*/

    .sd_fenhg_er img {
        width: 100%;
        height: 5.3rem;
        min-height: 70px;
    }

    .dsf_hh_cd {
        color: #fff;
        background: linear-gradient(to bottom, #179249, #257F4A);
    }

    .dsf_hh_cd span {
        display: inline-block;
        transform: scale(0.9)
    }

  .lingqummo {
            height: 70px;
            margin-top: 2rem
        }


    .gmnk_btn {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 70px;
    }

    .fg_jh_eert {}

</style>
