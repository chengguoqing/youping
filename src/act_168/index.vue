<template>
<div class=" fg_jh_eert">
  
    <section class="pr">

<section v-if="ity==1">
    <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_01.jpg" class="w100 cz sdf_dert">
     <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_02.jpg" class="w100 cz sdf_dert">
    <section class="pr">
         <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_03.jpg" class="w100 cz sdf_dert">
        <section class="sd_kj_dert">
                <p class="cen sdf_j_Deerrt">
                    <img :src="regular.header_image" class="user_icon yj">
                </p>
            <p class="sd_jhh_der cen mt5">
                   <span class="fz12">{{regular.user_name }}</span><br>
                <span> {{regular.user_group_name}}</span>
            </p>
        </section>
    </section>
    <section class="pr">
        <p  @click="hf('purchase',{ity:ity})" class="goumai_we"><span>购买年卡999</span></p>
    <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_04.jpg" class="w100 cz ">
    </section>
       
        <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_05.jpg" class="w100 cz ">
     <section class="pr">
           <p  @click="ycsd_d=true" class="goumai_we"><span>分享名片</span></p>
       <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_06.jpg" class="w100 cz " >
    </section>
    
    <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_07.jpg" class="w100 cz " >
    
        <van-row class="sd_jh_dertx">
        <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_08.jpg" class="w100 cz"  @click="hf('commodity_details',{goods_id:38270})">
        </van-col>
                    <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_10.jpg" class="w100 cz"     @click="hf('commodity_details',{goods_id:38270})">
        </van-col>
             <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_11.jpg" class="w100 cz"     @click="hf('commodity_details',{goods_id:38270})">
        </van-col>
             <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_13.jpg" class="w100 cz"     @click="hf('commodity_details',{goods_id:38270})">
        </van-col>
        
    </van-row> 
    
            <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_15.jpg" class="w100 cz " @click="hf('act_hy',{act_id:act_id,ity:ity})">
       <img src="https://mall.cangniaowl.com/youpinmeijia/DTBjpg_16.jpg" class="w100 cz " @click="hf('purchase',{ity:ity})">
    </section>

<section v-if="ity==2">
    <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_01.jpg" class="w100 cz sdf_dert">
     <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_02.jpg" class="w100 cz sdf_dert">
    <section class="pr">
         <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_03.jpg" class="w100 cz sdf_dert">
        <section class="sd_kj_dert">
                <p class="cen sdf_j_Deerrt">
                    <img :src="regular.header_image" class="user_icon yj">
                </p>
            <p class="sd_jhh_der cen mt5 ab">
                   <span class="fz12 ">{{regular.user_name }}</span><br>
                <span> {{regular.user_group_name}}</span>
            </p>
        </section>
    </section>
    <section class="pr">
        <p  @click="hf('purchase',{ity:ity})" class="goumai_we"><span>购买年卡999</span></p>
    <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_04.jpg" class="w100 cz ">
    </section>
       
        <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_05.jpg" class="w100 cz ">
     <section class="pr">
           <p  @click="ycsd_d=true" class="goumai_we"><span>分享名片</span></p>
       <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_06.jpg" class="w100 cz " >
    </section>
    
    <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_07.jpg" class="w100 cz " >
    
        <van-row class="sd_jh_dertx">
        <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_08.jpg" class="w100 cz"    @click="hf('commodity_details',{goods_id:38262})">
        </van-col>
                    <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_09.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:38262})">
        </van-col>
             <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_10.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:38262})">
        </van-col>
             <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_12.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:38262})">
        </van-col>
        
    </van-row> 
    
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_13.jpg" class="w100 cz " @click="hf('act_hy',{act_id:act_id,ity:ity})">
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_er_14.jpg" class="w100 cz " @click="hf('purchase',{ity:ity})">
    </section>


<section v-if="ity==3">
    <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_01.png" class="w100 cz sdf_dert">
     <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_02.jpg" class="w100 cz sdf_dert">
    <section class="pr">
         <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_03.jpg" class="w100 cz sdf_dert">
        <section class="sd_kj_dert">
                <p class="cen sdf_j_Deerrt">
                    <img :src="regular.header_image" class="user_icon yj">
                </p>
            <p class="sd_jhh_der cen mt5 ac">
                   <span class="fz12 ">{{regular.user_name }}</span><br>
                <span> {{regular.user_group_name}}</span>
            </p>
        </section>
    </section>
    <section class="pr">
        <p  @click="hf('purchase',{ity:ity})" class="goumai_we"><span>购买年卡999</span></p>
    <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_04.jpg" class="w100 cz ">
    </section>
       
        <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_05.jpg" class="w100 cz ">
     <section class="pr">
           <p  @click="ycsd_d=true" class="goumai_we"><span>分享名片</span></p>
       <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_06.jpg" class="w100 cz " >
    </section>
    
    <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_07.jpg" class="w100 cz " >
    
        <van-row class="sd_jh_dertx">
        <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_08.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:38273})">
        </van-col>
                    <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_09.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:38273})">
        </van-col>
             <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_10.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:38273})">
        </van-col>
             <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_11.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:38273})">
        </van-col>
        
    </van-row> 
    
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_12.jpg" class="w100 cz " @click="hf('act_hy',{act_id:act_id,ity:ity})">
            <img src="https://mall.cangniaowl.com/youpinmeijia/images_san_13.jpg" class="w100 cz " @click="hf('purchase',{ity:ity})">
    </section>


<section v-if="ity==4">
    <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_01.jpg" class="w100 cz sdf_dert">
     <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_02.jpg" class="w100 cz sdf_dert">
    <section class="pr">
         <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_03.jpg" class="w100 cz sdf_dert">
        <section class="sd_kj_dert">
                <p class="cen sdf_j_Deerrt">
                    <img :src="regular.header_image" class="user_icon yj">
                </p>
            <p class="sd_jhh_der cen mt5 ac">
                   <span class="fz12 ">{{regular.user_name }}</span><br>
                <span> {{regular.user_group_name}}</span>
            </p>
        </section>
    </section>
    <section class="pr">
        <p  @click="hf('purchase',{ity:ity})" class="goumai_we"><span>购买年卡999</span></p>
    <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_04.jpg" class="w100 cz ">
    </section>
       
        <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_05.jpg" class="w100 cz ">
     <section class="pr">
           <p  @click="ycsd_d=true" class="goumai_we"><span>分享名片</span></p>
       <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_06.jpg" class="w100 cz " >
    </section>
    
    <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_07.jpg" class="w100 cz " >
    
        <van-row class="sd_jh_dertx">
        <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_08.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:14})">
        </van-col>
                    <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_09.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:14})">
        </van-col>
             <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_10.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:14})">
        </van-col>
             <van-col span="12" >
            <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_12.jpg" class="w100 cz"   @click="hf('commodity_details',{goods_id:14})">
        </van-col>
        
    </van-row> 
    
            <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_14.jpg" class="w100 cz " @click="hf('act_hy',{act_id:act_id,ity:ity})">
            <img src="https://mall.cangniaowl.com/youpinmeijia/jiuwu_15.jpg" class="w100 cz " @click="hf('purchase',{ity:ity})">
    </section>


        
    </section>

    <bushihuiyan v-if="ishuiyuan" @close_e="ishuiyuan=false"></bushihuiyan>
    <linqu v-if="lingqu" @close_e="lingqu=false"></linqu>
    <loadin v-if="sd_ddf_d"></loadin>

     <fenxiang_pup_er v-if="ycsd_d" :is_sd_fn="ycsd_d" :url="api_url+'/card/activity?token='+token+'&_id='+act_id" msg="长按图片保存或发送给朋友" @ycsd_d="ycsd_d=false"></fenxiang_pup_er>
</div>
</template>
<script>
    import xz_mianmo from "../components/act168/xz_mianmo"
    import bushihuiyan from "../components/act168/bushihuiyan"
    import linqu from "../components/act168/linqu"
    import loadin from "../components/loadin.vue"
    import yigoumai from "../components/act168/yigoumai"
    import fenxiang_pup_er from "../components/tuiguangfenxiang"
    export default {
        data() {
            return {
                ity: 0, //1 DTB品牌  2玛娜品牌 3影度品牌 4九屋
                fn_url: "",
                ycsd_d: false,
                sd_jh_deret: false, //领取面膜弹出层
                ishuiyuan: false, //不是会员弹出层
                lingqu: false, //领取面膜
                isgoumai: false,
                act_id: "",
                regular: "",
                sd_ddf_d: true,
                isactive: "",
                group_overdue_time: "",
                group_overdue_time_type: "",
                sd_xddf: [{
                    name: "竹炭净肤滋养面膜",
                    fm: "https://mall.cangniaowl.com/static/img/168/jhpo_b.jpg?v=198874",
                    url: "https://api.cangniaowl.com/news.html?id=5bded9d51e64f24fd15fe0d5"
                }, {
                    name: "水漾植物面膜",
                    fm: "https://mall.cangniaowl.com/static/img/168/jhpo_c.jpg?v=198",
                    url: "https://api.cangniaowl.com/news.html?id=5bded9571e64f2718237ebff"
                }, {
                    name: "维C面膜",
                    fm: "https://mall.cangniaowl.com/static/img/168/jhpo_d.jpg?v=198",
                    url: "https://api.cangniaowl.com/news.html?id=5bdebcf01e64f2480d25bcf2"
                }, {
                    name: "蜗牛原液面膜",
                    fm: "https://mall.cangniaowl.com/static/img/168/jhpo_e.jpg?v=198",
                    url: "https://api.cangniaowl.com/news.html?id=5bdec9511e64f26cfe7feae8"
                }, {
                    name: "敏感修复面膜",
                    fm: "https://mall.cangniaowl.com/static/img/168/jhpo_f.jpg?v=198",
                    url: "https://api.cangniaowl.com/news.html?id=5bdebd641e64f212464ed531"
                }, {
                    name: "虾红素抗氧化面膜",
                    fm: "https://mall.cangniaowl.com/static/img/168/jhpo_g.jpg?v=198",
                    url: "https://api.cangniaowl.com/news.html?id=5bdedb191e64f26cfe7feb02"
                }, {
                    name: "玻尿酸面膜",
                    fm: "https://mall.cangniaowl.com/static/img/168/jhpo_h.jpg?v=198",
                    url: "https://api.cangniaowl.com/news.html?id=5bdec9e91e64f2023828fefc"
                }, {
                    name: "修复冰膜",
                    fm: "https://mall.cangniaowl.com/static/img/168/jhpo_i.jpg?v=198",
                    url: "https://api.cangniaowl.com/news.html?id=5bdeda491e64f21bb47529d9"
                }]
            }
        },
        components: {
            xz_mianmo,
            bushihuiyan,
            linqu,
            loadin,
            yigoumai,
            fenxiang_pup_er
        },
        methods: {
            goumai() {
                if (this.isactive == 1) {
                    this.isgoumai = true
                } else {
                    this.hf('purchase',{ity:ity})
                }

            }
        },
        mounted() {
            this.ity = this.$route.query.ity
//            this.Title("DTB品牌")

            this.fn_url = "https://api.cangniaowl.com/v1/huazhuang/visitingCard?token=" + this.token
            if (this.$route.query.act_id) {
                this.act_id = this.$route.query.act_id
            }
            window.scrollTo(0, 0)

            let regular = {},
                th = this
            regular.token = this.token
            regular._id = this.act_id
            this.post("activity/regular", regular, function(data) {
                th.sd_ddf_d = false
                th.regular = data
                th.regular_detail = data.regular_detail
//                th.fenxiang('安茹魔力会员', 'https://api.cangniaowl.com/shop/230.html?router=act_168&act_id=5a5582ff1e64f258fe40b383&VNK=fd82cc58&shareid=' + data.user_id + '#/act_168?act_id=5a5582ff1e64f258fe40b383&VNK=fd82cc58', 'https://mall.cangniaowl.com/static/img/jinzhun/anrufx.jpg', '全年8款面膜免费领')

            })
            this.post("huazhuang/isbuy", {
                token: this.token
            }, function(data) {
                th.sd_ddf_d = false
                th.isactive = data.isactive
                th.group_overdue_time_type = data.group_overdue_time
                th.group_overdue_time = th.time_c(data.group_overdue_time)

            })


        },
    }

</script>
<style scoped>
    .sdf_dert {
        margin-top: -1px
    }

    .sdf_df_bgf {
        width: 19.5rem;
        height: 10rem;
        min-width: 290px;
        min-height: 150px;
        margin: auto;
        background: url('https://mall.cangniaowl.com/static/img/168/kapian.png');
        background-size: 100% 100%
    }

    .bg_kapian {
        background: url('https://mall.cangniaowl.com/static/img/168/x_sdfd_b.jpg');
        background-size: 100% 100%
    }




    i.f_act.gm_nk_er {}

    .sd_jh_dert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: #014A2D
    }









    .gm_nk_er {
        width: 231px;
        height: 49px;
        background-position: -25px -35px;
    }

    .sd_kjh_de {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        padding-top: 3rem
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
        height: 11.3rem;

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

    }

    .gmnk_btn {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 70px;
    }

    .fg_jh_eert {
        margin-top: -80px;
        position: relative;
        top: 80px;
    }

    .fenkh_eeert {
        height: 50px;
        position: absolute;
        left: 0px;
        bottom: 16px;
        width: 100%;
    }

    .sd_jh_dertx img {
        height: 12.7rem;
    }

    .sd_kj_dert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }

    .sdf_j_Deerrt {
        margin-top: -40px;
    }

    .sdf_j_Deerrt img {
        width: 80px;
        height: 80px;
        border: 6px solid #fff
    }

    .sd_jhh_der span {
        color: #657f9f !important;
    }
    .sd_jhh_der.ab span{
        color: #fff !important;
      text-shadow:0px 0px 4px #000;
    }
    .sd_jhh_der.ac span{
        color: #074025 !important
    }

    .goumai_we {
        position: absolute;
        height: 50px;
        width: 100%;
    }

    .goumai_we span {
        display: none
    }

</style>
