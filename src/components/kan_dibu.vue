<template>
	<div class="mui-row dsf_d_dibu btm cen">
        <section class="mui-col-xs-4 pr dsf_jh_deert" v-for="(du,idx) in dubvu" :class="idx==kjh_s?'act':''"  @click="hf(du.href)">
            <section :class="idx==1?'as_ddrt':''" class="bgff pr">
            <p class="sd_jhg_ert pr">

              <i class="f_a dskh_d_errt" :class="du.icon"></i>
            </p>
            <p class="z9 fz12 pr sd_jh_dert">
    {{du.name}}
    </p></section>
            <span  class="sd_kjh_dertr" v-if="idx==1"></span>
        </section>

 




 
	</div>
</template>
<script>
    export default {
        props: {
            kjh_s: "",
            gwcw: ""
        },
        data() {
            return {
                dubvu: [{
                    name: "砍价商品",
                    icon: "",
                    size: "fz20",
                    href: "cut_price_list",
                    cls: "act"
                }, {
                    name: "客服",
                    icon: "ab",
                    size: "fz22",
                    href: this.$store.state.url_er,
                    cls: ""
                }, {
                    name: "我的",
                    icon: "ac",
                    size: "fz22",
                    href: "cut_price_center",
                    number: 0,
                    cls: ""
                } ]
            }
        },
        methods: {

        },
        created: function() {
            let th = this
            if (this.car_number) {
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
        height: 50px;
        bottom: 0px;
        z-index: 1000;
        background: #fff
    }

    .sd_jhg_ert {
        line-height: 30px;
        position: relative;

        padding-bottom: 0px;
    }

    .dsf_d_dibu .mui-col-xs-3 {
        width: 20%;
    }

    .dsf_d_dibu .mui-col-xs-3.act .z9 {
        color: #EE5550 !important
    }
 

    .dskh_d_errt{
        width: 24px;
        height: 27px;
        background-position: -125px -417px;
    }
    .dskh_d_errt.ab{
        width: 29px;
        height: 31px;
        background-position: -214px -415px;
    }
    .dskh_d_errt.ac{
        width: 24px;
        height: 28px;
        background-position: -177px -417px

    }


        .dskh_d_errt.ad{
        width: 22px;
        height: 23px;
        background-position: -154px -314px

    }

            .dskh_d_errt.ae{
        width: 17px;
        height: 19px;
        background-position: -208px -319px

    }
    .sd_kjh_dertr{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        left: 0px;
        right: 0px;
        top: -20px;
        margin: auto;
        border: 1px solid #f5f5f5;
        z-index: 1;
    }
    .as_ddrt .sd_jhg_ert{
        position: relative;
        top: -5px;
    }
    .sd_jh_dert{
        bottom: 3px;
        background: #fff
    }
    .sd_jh_dert{
        line-height: 1.6;
    }
    .dsf_jh_deert{
        padding-top: 3px;
    }
    .dsf_jh_deert.act .dskh_d_errt{
        background-position: -125px -381px;
    }
     .dsf_jh_deert.act .dskh_d_errt.ab{
        background-position: -214px -379px;
    }
      .dsf_jh_deert.act .dskh_d_errt.ac{
        background-position: -177px -379px;
    }
    .dsf_jh_deert.act .sd_jh_dert{
        color: #B61B20 !important
    }
</style>
