<!--团队信息-->
<template>
   <section class="sd_jh_Deertx pd" v-if="date_d">
       <swiper :options="swiperOption_er" class="SDf_dfreyy"  ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(sd,idx) in date_d" class="w100 h100" >
    
        <section @click="hf('duanduixq',{employee_id:sd.employee_id})">
    
    
  
        <img :src="sd.employee_picture" class="w100 h100 yj gd" @click="sd_dertx(idx)">
        <section class="fz12 mt5">
                {{sd.employee_name}} <br>
        </section>
             </section>
    </swiper-slide>
            
           
  </swiper> 
         
        
        </section>
        
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        props: {
            date_d: ""
        },
        data() {
            return {
                swiperOption_er: {
                    activeIndex: 1,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: true,
                    on: {
                        init: function() {


                        },
                    },
                },
                duiana: [{
                    img_f: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_57a0f417426fcca0d21e8c1644363da1.jpg",
                    name: "Rich",
                    biaso: ""
                }, {
                    img_f: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_57a0f417426fcca0d21e8c1644363da1.jpg",
                    name: "Tommy Wu",
                    biaso: "店长"
                }, {
                    img_f: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_57a0f417426fcca0d21e8c1644363da1.jpg",
                    name: "Rich",
                    biaso: ""
                }, {
                    img_f: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_57a0f417426fcca0d21e8c1644363da1.jpg",
                    name: "Rich",
                    biaso: ""
                }, {
                    img_f: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_57a0f417426fcca0d21e8c1644363da1.jpg",
                    name: "Rich",
                    biaso: ""
                }, {
                    img_f: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_57a0f417426fcca0d21e8c1644363da1.jpg",
                    name: "Rich",
                    biaso: ""
                }, {
                    img_f: "https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_57a0f417426fcca0d21e8c1644363da1.jpg",
                    name: "Rich",
                    biaso: ""
                }]
            }
        },
        components: {
            swiper,
            swiperSlide,
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
        },
        methods: {

        },
        mounted() {
            setTimeout(a => {
                this.$refs.mySwiper.swiper.slideTo(1, 1000, false);
            }, 500);

        },
    }

</script>
<style>
    .sd_jh_Deertx .swiper-slide {
        text-align: center
    }

    .sd_jh_Deertx .swiper-slide img {

        width: 5rem !important;
        height: 5rem !important;
        position: relative;
        margin-top: 20px;

    }

    .sd_jh_Deertx .swiper-slide {
        color: #666
    }

    .sd_jh_Deertx .swiper-slide.swiper-slide-active img {

        width: 6.5rem !important;
        height: 6.5rem !important;
        margin-top: 0px;
        margin-left: -5px;

    }

    .sd_jh_Deertx .swiper-slide.swiper-slide-active .fz12 {
        color: #333;
        font-size: 14px !important;
    }

</style>
<style scoped>


</style>
