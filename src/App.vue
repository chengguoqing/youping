<template>
  <div id="app">
      <img src="http://mall.cangniaowl.com/static_youpin/img/you_top.png" class="sd_jkh_dert">

    <section v-if="invalidRoute">
        {{$route}}
        <p class="cen mt50">
            <img src="http://mall.cangniaowl.com/static/img/404.png" class="png_sos">
        </p>

        <p class="mt40 cen z3">
    可怜的页面姑娘不小心迷路了~
        </p>

        <p class="cen mt30">
            <mt-button type="danger" class="fz16 pl30 pr30 huis_sdre" @click="hf('')">带她回首页</mt-button>
        </p>

        <p class="cen mt50">
        <img src="http://mall.cangniaowl.com/static/img/404er.png" class="sos_gn">
    </p>
    </section>


    <section class="h100 pr dsf_deert">
    <keep-alive >     <!--使用keep-alive会将页面缓存-->
        <router-view  v-if="$route.meta.keepAlive" ></router-view>
   </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
<!--
     <router-view v-if="!$route.meta.keepAlive"></router-view>

-->
        </section>
<!--<suspension></suspension>-->
  </div>
</template>

<script>
    import suspension from "./components/suspension.vue"
    export default {
        name: 'app',
        components: {
            suspension
        },
        computed: {
            invalidRoute() {
                if (this.$route.matched.length == 0) { //错误页面就跳转到首页
                    this.hf('')
                }
                return !this.$route.matched || this.$route.matched.length === 0;
            }
        },
        methods: {
            get_idx(call_back) {
                let getunreadmessagenums = {},
                    th = this
                try {
                    getunreadmessagenums.user_id = this.$store.state.shopinfo.user_id
                    getunreadmessagenums.shop_id = this.$store.state.shopinfo.shop_id
                } catch (e) {

                }
                getunreadmessagenums.token = this.token
                getunreadmessagenums.dingshi = true
                this.post("home/getunreadmessagenums", getunreadmessagenums, function(data) {
                    try {
                        if (data.unread_nums > 9) {
                            data.unread_nums += "9+"

                        }
                        th.$store.state.url_er = data.current_shop_chat_url

                        call_back(data)
                    } catch (e) {

                    }
                })
            }
        },

        mounted() {

            var th = this
            let shopinfo = {}
            shopinfo.token = token
            this.ge_t("home/shopinfo", shopinfo, function(datae) {
                th.$store.state.shopinfo = datae.data
                th.shopinfo_p = datae.data
                var sd_us = window.location.href
                let getwxsign = {}
                getwxsign.token = th.token
                getwxsign.url = sd_us
                th.post('home/getwxsign', getwxsign, function(data) {
                    th.wx_config(data)
                    let sd_ert = `https://api.cangniaowl.com/shop/${datae.data.shop_id}.html?shareid=${datae.data.user_id}`
                    console.log(sd_ert);
                    th.fenxiang(datae.data.shop_name, sd_ert, datae.data.shop_logo, datae.data.company_intro)
                })

                th.get_idx(function(data) {

                })
            })

            this.ge_t("user/carnumber", {
                token: this.token
            }, function(datae) {

                th.$store.state.carnumber = datae.data.number
            })






        }
    }

</script>
<style scoped>
    .png_sos {
        width: 157px;
    }

    .huis_sdre {
        height: 40px;
    }

    .sos_gn {
        width: 250px;
    }

    .sd_jkh_dert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
    }

    .dsf_deert {
        background: #F6F6F6;
        min-height: 500px;
        border-top: 1px solid #F6F6F6;
    }

</style>
