<!--悬浮-->
<template>
	<div >

        <section class="pup_df_er  " :class="sd_fdrs?'act':''"  @click="is_jh_sd=false"   ref="picker1"     
                 @mousedown="down" @touchstart="down"
      @mousemove.prevent="move" @touchmove.prevent="move"
      @mouseup="end" @touchend="end">
            <i class="f_a right_sd cz"></i>
            <i class="f_a logo_der cz"></i>
      </section>

        <section  @mousedown="down" @touchstart="down"
      @mousemove.prevent="move" @touchmove.prevent="move"
      @mouseup="end" @touchend="end"  ref="picker2" class="sdf_jh_dff_b" :class="!is_jh_sd?'act':''" >

        <section  class="sdf_jh_dff gd mui-row" :class="!is_jh_sd?'act':''"     >
            <section class="xf_left_e" @click="is_jh_sd=true">
                <i class="f_a right_ddr"></i><span class="sqi_text">收起</span>
            </section>
            <section class="ov jhg_ddfr cen ">
<section class=" mui-row">
       

 
                       <section class="mui-col-xs-3 " @click="hf('')">
                        <p class="sd_jh_tope">
                               <i class="dx  cz icon-dianpu cf fz20 cz"></i>
                        </p>
                    <p class="sqi_text ab">店铺首页</p>
                </section> 

                      <section class="mui-col-xs-3 " @click="hf('order_form')">
                        <p class=" sd_jh_tope">
                               <i class=" icon-fangdajing dx cf fz22"></i>
                        </p>
                    <p class="sqi_text ab">订单查询</p>
                </section>



                      <section class="mui-col-xs-3 " @click="hf('user')">
                        <p class="sd_jh_tope">
                               <i class="f_a  cz sd_jh_drer ac"></i>
                        </p>
                    <p class="sqi_text ab">个人中心</p>
                </section>
    
            <section class="mui-col-xs-3 " @click="hf('footprint')">
                        <p class="sd_jh_tope">
                               <i class="f_a  cz sd_jh_drer ae"></i>
                        </p>
                    <p class="sqi_text ab">最近浏览</p>
                </section>

</section>
                
                <section class=" mui-row btm">
                    
                             <section class="mui-col-xs-3 " @click="hf('https://api.cangniaowl.com/shop/311.html')">
                        <p class="sd_jh_tope">
                               <i class="f_a logo_der cz ab"></i>
                        </p>
                    <p class="sqi_text ab">苍鸟首页</p>
                </section>
                    
                    
                    
                        <section class="mui-col-xs-3 " @click="hf('https://api.cangniaowl.com/shop/311.html/#/bird_nest')">
                        <p class="sd_jh_tope">
<!--                               <i class="dx  cz icon-fengchao cf fz20 cz"></i>-->
                            <img src="https://mall.cangniaowl.com/static/img/niaocao.png" class="niaocao cz">
                        </p>
                    <p class="sqi_text ab">鸟巢</p>
                </section>
                       <section class="mui-col-xs-3 " @click="hf('https://api.cangniaowl.com/shop/311.html/#/user_center')">
                        <p class="sd_jh_tope">
                               <i class="dx  cz icon-gerenzhongxin cf fz20 cz"></i>
                        </p>
                    <p class="sqi_text ab">我的苍鸟</p>
                </section>
                    
                        <section class="mui-col-xs-3 "  @click="kefu_er">
                        <p class="sd_jh_tope">
                              <img src="https://mall.cangniaowl.com/static/img/kefu.png" class="niaocao cz">
                        </p>
                    <p class="sqi_text ab">苍鸟客服</p>
                </section>
                    
                    
                     
                    
                    
                    



          

    </section>
                

                   



            </section>
        </section>
</section>

	</div>
</template>
<script>
    export default {
        props: {

        },
        data() {
            return {
                is_jh_sd: true,
                sd_fdrs: true,

                flags: false,
                position: {
                    x: 0,
                    y: 0
                },
                nx: '',
                ny: '',
                dx: '',
                dy: '',
                xPum: '',
                yPum: '',
                sd_ddfg: 0,
            }
        },
        components: {

        },
        methods: {
            down() {
                this.flags = true;
                var touch;
                if (event.touches) {
                    touch = event.touches[0];
                } else {
                    touch = event;
                }
                this.position.x = touch.clientX;
                this.position.y = touch.clientY;
                this.dx = this.$refs.picker1.offsetLeft;
                this.dy = this.$refs.picker1.offsetTop;
            },
            move() {
                if (this.flags) {
                    var touch;
                    if (event.touches) {
                        touch = event.touches[0];
                    } else {
                        touch = event;
                    }
                    this.nx = touch.clientX - this.position.x;
                    this.ny = touch.clientY - this.position.y;
                    this.xPum = this.dx + this.nx;
                    this.yPum = this.dy + this.ny;

                    if (this.yPum > this.sd_ddfg + 80) {
                        this.yPum = this.sd_ddfg + 80
                    }
                      if (this.yPum <0) {
                        this.yPum = 0
                    }

                    this.$refs.picker1.style.top = this.yPum + "px";
                    this.$refs.picker2.style.top = this.yPum + "px";
                }
            },
            //鼠标释放时候的函数
            end() {
                this.flags = false;
            },
        },
        mounted() {
            this.sd_ddfg = this.$refs.picker1.offsetTop
        },
        watch: {
            is_jh_sd: {
                handler: function() {
                    let th = this
                    if (!this.is_jh_sd) {
                        this.sd_fdrs = this.is_jh_sd
                    } else {
                        setTimeout(function() {
                            th.sd_fdrs = th.is_jh_sd
                        }, 260);
                    }

                },
                deep: true
            }
        }
    }

</script>
<style scoped>
    .pup_df_er {
        position: fixed;
        right: 0px;
        bottom: 130px;
        width: 47px;
        height: 47px;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        text-align: center;
        opacity: 0;
        line-height: 47px;
    }

    .pup_df_er.act {
        transition-timing-function: linear;
        opacity: 1;
    }

    .right_sd {
        width: 11px;
        height: 12px;
        background-position: -168px -97px;
    }

   
    .sdf_jh_dff_b{
         height: 105px;
      
        position: fixed;
        height: 110px;
        min-width: 150px;
        bottom: 97px;
        z-index: 1000;
        overflow: hidden;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        right: 0px;
        right: -250px;
        
    }

    .sdf_jh_dff {
        position: relative;
        right: -250px;
        background: rgba(0, 0, 0, 0.5);
        
/*
        height: 105px;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        height: 110px;
        min-width: 150px;
        bottom: 97px;
        z-index: 1000;
        overflow: hidden;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        right: -250px;
*/
    }

    .sdf_jh_dff.act,.sdf_jh_dff_b.act {
        right: 0px;
    }

    .xf_left_e {
        width: 50px;
        height: 100%;
        line-height: 110px;
        float: left;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
    }

    .right_ddr {
        width: 12px;
        height: 12px;
        background-position: -222px -97px;
    }

    .sqi_text {
        font-size: 12px;
        color: #fcfcfc;
        display: inline-block;
        transform: scale(0.9)
    }

    .sqi_text.ab {
        transform: scale(0.85);
        position: relative;
        bottom: 2px;
    }

    .jhg_ddfr {
        width: 200px;
        padding-top: 3px;
    }

    .sd_jh_tope {
        height: 30px;
        line-height: 30px;
    }

    .sd_jh_drer {
        width: 20px;
        height: 19px;
        position: relative;
        top: 1px;
        background-position: -249px -90px;
    }

    .sd_jh_drer.ab {
        width: 17px;
        height: 20px;
        background-position: -285px -89px;
    }

    .sd_jh_drer.ac {
        width: 20px;
        height: 20px;
        background-position: -324px -89px;
    }

    .sd_jh_drer.ad {
        width: 21px;
        height: 20px;
        background-position: -10px -129px;
    }

    .sd_jh_drer.ae {
        width: 13px;
        height: 24px;
        background-position: -55px -125px;
    }
    .niaocao{
        width: 26px;
    }

</style>
