<template>
<div >
    <p class="bg_jh_der" :style="{'background-color':'rgba('+df_dfd_d+',1)'}"></p>
    <section class="pr">
       
         <img :src="img_sdfe" class="w100" ref="fdgfder">  
<canvas ref="myCanvas" class="dsfdsf_derer"></canvas>
        
        <section class="sddf_jkj_det pr">
            <img src="https://mall.cangniaowl.com/static/img/taoka/bi_sdf.png" class="w100 h100">
            <section class="sd_kjj_der">
                    <p class="cen sdf_jjh_der">
                        <img :src="regular.header_image" class="yj user_icong_e">
                    </p>
                <p class="fz16 cen z3">
                    {{regular.user_name}}
                    </p>
                <p class="fz12 z9 cen mt2">
                    {{regular.user_group_name}}
                </p>
                
            <div class="cen dfrtj_der"> 
        <span class="pr" @click="sdf_jh_d">
              <p class="sd_kjj_deer">
                <span>购买本套卡  {{regular.price}}元</span>
            </p>
            
            
                <img src="https://mall.cangniaowl.com/static/img/taoka/anniu_d.png" class="sd_jh_wet">
          
        </span>
    </div>    
                
            </section>
        </section>
        
        <section class="pd sdf_j_der">
        
            <section class="df_jh_deert">
                    <section class="taokai_fuli cen">
                        <div class="sd_jj_dsd pr f_b">
                            <img src="https://mall.cangniaowl.com/static/img/taoka/tou_bud.png">
                            <p class="dsf_kj_dert">
                                <span>套卡福利</span>
                            </p>
                        </div>
                    </section>
                
                <section class="pd"> 
                    <ul>
                        <li v-for="(sd,idx) in regular.gift_bag_intro" class="mt10">
                            <p class="fz16 z3 cen">
                                套卡福利{{idx+1}} 
                            </p>
                            <section class="bh_lis_e pd pt10 pm10 mt10 pr ov">
                                <span class="bainyan_ser"></span>
                                 <span class="bainyan_ser ab"></span>
                                <img :src="sd.img" class="sdfs_jh_der">
                                
                                <section class="ov pl10 sdf_j_right pt10 cz_w">
                                    <p class="fz12 z3 diansan sdf_jh_dert cz_a ">{{sd.text}}</p>
                                </section>
                                
                                
                                <p class="qc"></p>
                            </section>
                        </li>
                    </ul>
                    
                    <section class="cen mt30 pm10 pr">
                     
                            <img src="https://mall.cangniaowl.com/static/img/taoka/fxmp.png" class="fxmp_eert" >
                      <p @click="ycsd_d=true" class="sd_jh_Dertx"></p>
                    </section>
    
                </section>
                
            </section>
    
            
            <section class="df_jh_deert mt20">
    <img :src="regular.apply_bottom_image" class="w100 cz">
            </section>
            
            
            <section class="mt40">
    
           <div class="cen dfrtj_der ab">
        <span class="pr" @click="sdf_jh_d">
              <p class="sd_kjj_deer">
                <span>购买本套卡  {{regular.price}}元</span>
            </p>
            
            
                <img src="https://mall.cangniaowl.com/static/img/taoka/anniu_d.png" class="sd_jh_wet">
          
        </span>
    </div> 
                
                
                
            </section>
            
        </section>
         
        
        
    </section>
    
    
         <fenxiang_pup_er v-if="ycsd_d" :is_sd_fn="ycsd_d" :url="fn_url" msg="长按图片保存或发送给朋友" @ycsd_d="ycsd_d=false"></fenxiang_pup_er>
    
    <loadin v-if="jiazai_d"></loadin>
    
</div>
</template>
<script>
    import fenxiang_pup_er from "../components/a_168"
    import loadin from "../components/loadin"
    export default {
        data() {
            return {
                regular: "",
                df_dfd_d: "",
                ycsd_d: false,
                jiazai_d: true,
                img_sdfe: ""
            }
        },
        components: {
            fenxiang_pup_er,
            loadin
        },
        methods: {
            async get_date() {
                this.regular = await this.post_new("Activity/regular", {
                    _id: this.$route.query._id
                })
                var th = this
                     var canvas = this.$refs.myCanvas
            var img = this.$refs.fdgfder
                this.post("images/base64", {
                    token: th.token,
                    img: th.regular.welfare_first_image
                }, function(data) {
                    th.img_sdfe = data.img_base64
                    th.$refs.fdgfder.onload = a => {
                        try {
                            th.getImageColor(canvas, img)
                        } catch (e) {

                        }

                        th.jiazai_d = false
                    }

                })
            },
            getImageColor(canvas, img) {
                canvas.width = img.width;
                canvas.height = img.height;

                var context = canvas.getContext("2d");

                context.drawImage(img, 0, 0, canvas.width, canvas.height);


                // 获取像素数据
                try {
                    var data = context.getImageData(0, 0, img.width, img.height).data
                    var r = 1,
                        g = 1,
                        b = 1;
                    // 取所有像素的平均值
                    for (var row = 0; row < img.height; row++) {
                        for (var col = 0; col < img.width; col++) {
                            // console.log(data[((img.width * row) + col) * 4])
                            if (row == 0) {
                                r = data[((img.width * row) + col)];
                                g = data[((img.width * row) + col) + 1];
                                b = data[((img.width * row) + col) + 2];
                            } else {
                                r = data[((img.width * row) + col) * 4];
                                g = data[((img.width * row) + col) * 4 + 1];
                                b = data[((img.width * row) + col) * 4 + 2];
                            }
                        }
                    }
                    this.df_dfd_d = r + "," + g + "," + b
                } catch (e) {

                }

            },
            sdf_jh_d() {
                let order_formqueren = {}
                order_formqueren.token = this.token
                order_formqueren.goods_number = 1
                order_formqueren.step = 1
                order_formqueren.goods_id = this.regular.goods_id
                this.hf('order_formqueren', order_formqueren)

            }
        },
        mounted() {
            this.get_date()
       


            //            this.$refs.fdgfder.onload = a => {
            //                this.getImageColor(canvas, img)
            //                this.jiazai_d = false
            //            }

        },
    }

</script>
<style scoped>
    .bg_jh_der {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }

    .sddf_jkj_det {
        width: 88%;
        min-width: 300px;
        margin: auto;
        background: #fff;
        border-radius: 8px;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
        margin-top: 60px;
    }

    .sd_kjj_der {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }

    .user_icong_e {
        width: 75px;
        height: 75px;
        border: 5px solid #fff;
    }

    .sdf_jjh_der {
        margin-top: -35px;
    }

    .sd_jh_wet {
        width: 230px;
    }

    .dfrtj_der {
        position: absolute;
        width: 100%;
        left: 0px;
        bottom: -25px;
    }

    .dfrtj_der.ab {
        position: relative;
        bottom: 0
    }

    .sd_kjj_deer {
        position: absolute;
        left: 0px;

        width: 100%;
        height: 100%;
        text-align: center;
        color: #a54a00;
        font-size: 16px;
        padding-top: 8px;
    }

    .sdf_j_der {
        margin-top: 60px;
    }

    .df_jh_deert {
        border: 1px solid #FCE5B7;
        min-height: 50px;
        border-radius: 4px;
        background: #fff
    }

    .taokai_fuli {
        margin-top: -25px;
    }

    .sd_jj_dsd img {
        width: 200px;
    }

    .dsf_kj_dert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        color: #a54a00;
        font-size: 18px;
        padding-top: 5px;
    }

    .bh_lis_e {
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }

    .sdfs_jh_der {
        width: 60px;
        height: 60px;
        float: left;
        margin-right: 10px;
    }

    .sdf_j_right {
        border-left: 1px solid #EFE0CD;
        height: 60px;
    }

    .sdf_jh_dert.cz_a {
        line-height: 1.3;
        text-align: left
    }

    .bainyan_ser {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #f4f4f4;
        position: absolute;
        left: 76px;
        top: -5px;
        z-index: 100
    }

    .bainyan_ser.ab {
        top: inherit;
        bottom: -5px;
    }

    .fxmp_eert {
        width: 180px;
    }

    .dsfdsf_derer {
        position: fixed;
        left: -600px;
        top: -600px
    }

    .sd_jh_Dertx {
        position: absolute;
        left: 0px;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999
    }

</style>
