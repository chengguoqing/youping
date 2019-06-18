<template>
<div >

           <section class="sd_kj_dert cz_w">
    
        <section class="cz_a">
            <section class="bgff dsf_jjh_derty pr yj4">
                
                   <section class="yj sd_jh_closet" @click="$emit('close_e')">
                    <i class="dx icon-close1 fz12 z9"></i>
                </section>
                
                <p class="z3 fz14 pt20">参与{{pingduan_date.user_name}}的拼团</p>
                <p class="fz12">仅剩 <span class="red">{{pingduan_date.team_less_num}}</span> 个名额， <daoshiji :dapshid="pingduan_date.team_end_time"></daoshiji> 结束</p>
                
            <section class="mt15 cen">
                      <section class="f_b user_ddett pr" v-for="sd in pingduan_date.members">
                    <img :src="sd.header_image" class="wenhao yj">
                          <i class="f_p pingzhu_icn" v-if="sd.team_first==1"></i>
                </section>
                
                <section class="f_b user_ddett">
                    <img src="https://mall.cangniaowl.com/static/img/wenhao.png" class="wenhao">
                </section>
            </section>
                
                <p class="pd mt20 pm10">
                    <van-button type="danger" class="w100 sdf_jh_dert" @click="$emit('canyu')">参与拼单</van-button>
                </p>
                
                
    </section>
    </section>
    </section>
    
    

</div>
</template>
<script>
        import daoshiji from "../daoshiji"
    export default {
        props: {
            pingduan_date: ""
        },
        data() {
            return {

            }
        },
        components: {
daoshiji
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_kj_dert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100000;
        background: rgba(0, 0, 0, 0.5)
    }

    .dsf_jjh_derty {
        width: 300px;
        margin: auto;
    }

    .sd_jh_closet {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -10px;
        top: -10px;
        background: #fff;
        border: 1px solid #e0e0e0;
        text-align: center;
        line-height: 28px;
    }

    .user_ddett {
        width: 43px;
        height: 43px;
        border-radius: 50%;
        margin-left: 5px;
        margin-right: 5px;
    }

    .wenhao {
        width: 100%;
        height: 100%
    }

    .pingzhu_icn {
        width: 38px;
        height: 21px;
        background-position: -85px -42px;
        position: absolute;
        left: 0px;
        bottom: -8px;
        left: 0px;
        right: 0px;
        margin: auto;
        transform: scale(0.85)
    }

    .sdf_jh_dert {
        height: 38px;
        line-height: 38px;
    }

</style>
