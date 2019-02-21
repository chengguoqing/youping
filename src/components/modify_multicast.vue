<!--修改轮播图-->
<template>
<div>
      <draggable v-model="date_e" :move="getdata" @update="datadragEnd">   
    <div  class="sdf_lunbo" v-for="(sd,idx) in date_e">
        
          
                <p class="tr">
<!-- 
                           <i class="dx icon-paixu-sheng sz" @click="sort_up(idx)"></i>
                           <i class="dx icon-paixujiang sz"></i>
-->
                <i class="dx icon-lajixiang sz" @click="del_er(idx)"></i>
                </p>
                
                         <div class=" mui-row pr40">
            <p class="mui-col-xs-2 tr pr10 tite_er">
                添加图片:
            </p>
            <p class="mui-col-xs-10 tie_yte_er">
                <span class="pr sd_jh_ceert" @click="up_img_er(idx)">
     <img :src="sd.img" >

    </span>
         
        </p>
        </div>
                
                             <div class=" mui-row pr40">
            <p class="mui-col-xs-2 tr pr10 tite_er">
                导航链接:
            </p>
        <p class="mui-col-xs-10 tie_yte_er">
           
            <span  v-for="sf in sd.lj_type" class="mr20 sz" @click="sd_drr(sd,sf)">
            <span class="sd_jh_dff f_b cz" :class="sf.cls">
                <i class="dx icon-gouxuan fz14"> </i>
               
            </span> 
                 <span>{{sf.name}}</span>
                </span>
        </p>
        </div>
                
                
                
                
                    <div class=" mui-row pr40 mt10">
            <p class="mui-col-xs-2 tr pr10 tite_er">
                设置链接:
            </p>
            <p class="mui-col-xs-10 tie_yte_er">
               
            <input type="text" placeholder="请输入链接地址" v-if="sd.let_df==1">
                <span class="eibu_deert" v-else>选择内部链接</span>
        </p>
        </div>
        
        <div class="mui-row" v-if="sd_h_s_name!='轮播图'">
        
                 <div class=" mui-col-xs-6   mui-row">
            <p class="mui-col-xs-4 tr  tite_er dsf_jh_deet">
                宽度:
            </p>
            <p class="mui-col-xs-8 pl10">
               
           <mt-range v-model="sd.width" :max="100"></mt-range>
        </p>
        </div>
            
            
            
         <div class=" mui-col-xs-6   mui-row">
             <p class="dsf_jh_deert f_b">
        <input type="text" v-model="sd.width">
        </p> %
             

        </div>
            <p class="qc"></p>
            
            
             <div class=" mui-col-xs-6   mui-row">
            <p class="mui-col-xs-4 tr  tite_er dsf_jh_deet">
                上下距离:
            </p>
            <p class="mui-col-xs-8 pl10">
               
           <mt-range v-model="sd.margin_top" :max="200" :min="-200"></mt-range>
        </p>
        </div>
            
             <div class=" mui-col-xs-6   mui-row">
             <p class="dsf_jh_deert f_b">
        <input type="text" v-model="sd.margin_top">
        </p> 
             

        </div>
            
            
            
            
                  <div class=" mui-col-xs-6   mui-row">
            <p class="mui-col-xs-4 tr  tite_er dsf_jh_deet">
                左右距离:
            </p>
            <p class="mui-col-xs-8 pl10">
               
           <mt-range v-model="sd.margin_left" :max="200" :min="-200"></mt-range>
        </p>
        </div>
            
             <div class=" mui-col-xs-6   mui-row">
             <p class="dsf_jh_deert f_b">
        <input type="text" v-model="sd.margin_left">
        </p> 
             

        </div>
            
            
            
            
            
            
            
        
        </div>
                
                
                
                
        
    </div>
          
          <p class="qc"></p>
    
    </draggable>
    
    <input type="file" @change="previewFile"  id="dsf_ceertt" class="dsf_ceeert">
    
    <p class="cen mt20 pm20" v-if="date_e.length<6">
        <a class="mui-btn fz16 sd_ddrerrty" @click="add_lunb">+{{sd_h_s_name}}</a>
    </p>
    
    <div class=" mui-row"  v-if="margin_top">
          <div class=" mui-col-xs-6   mui-row">
            <p class="mui-col-xs-3 tr  tite_er dsf_jh_deet">
                高度:
            </p>
            <p class="mui-col-xs-9 pl10">
               
           <mt-range v-model="margin_top.height"  :max="1080"></mt-range>
        </p>
        </div>
        
          <div class=" mui-col-xs-6   mui-row">
             <p class="dsf_jh_deert f_b">
        <input type="text" v-model="margin_top.height">
        </p> 
             

        </div>
    
    
     <div class="mui-col-xs-6   mui-row">
            <p class="mui-col-xs-3 tr  tite_er dsf_jh_deet">
                上距离:
            </p>
            <p class="mui-col-xs-9 pl10">
               
           <mt-range v-model="margin_top.margin_top"  :max="200"></mt-range>
        </p>
        </div>
        
        
          <div class=" mui-col-xs-6   mui-row">
             <p class="dsf_jh_deert f_b">
        <input type="text" v-model="margin_top.margin_top">
        </p> 
             

        </div>
    
    
    </div>
    </div>
        </template>
<script>
        import draggable from 'vuedraggable'
    export default {
        props: {
            date_e: "",
            sd_h_s_name:"",
            margin_top:""
        },
        data() {
            return {
                tu_ere_e: "",

                imh_wer: "",
                sd_xiu_e: [{
                        cls: "",
                        type: 0,
                        name: "内部链接"
                    },
                    {
                        cls: "",
                        type: 1,
                        name: "手动修改"
                    }
                ]
            }
        },
        components: {
            draggable
        },
        methods: {
       
            sd_drr(sd, sf) {
                console.log(1);
                sd.lj_type.map(a => {
                    a.cls = ""
                })
                sf.cls = "act"
                sd.let_df = sf.type
            },


            up_img_er(idx) { //上传图片按钮触发
                this.imh_wer = idx
                $(".dsf_ceeert").click()

            },
            previewFile() {

                var th = this
                var file = document.querySelector('#dsf_ceertt').files[0];
                var reader = new FileReader();
                reader.onloadend = function() {
                    let upload = {}
                    upload.shop_id = 238
                    upload.image = reader.result
                    console.log(reader);
                    th.post('images/upload', upload, function(data) {
                        th.date_e[th.imh_wer].img = data.src

                    })

                }
                if (file) {
                    reader.readAsDataURL(file);
                } else {

                }
            },
            del_er(idx) { //删除
                this.date_e.splice(idx, 1);
            },
            add_lunb() { //添加一张轮播图

                let sd_dert={
                    url: "",
                    let_df: 1, //1为手动修改 0内部链接
                    margin_top:0,
                    lj_type: [{
                            cls: "",
                            type: 0,
                            name: "内部链接" 
                        },
                        {
                            cls: "act",
                            type: 1,
                            name: "手动修改"
                        }
                    ],
                    img: "/static/img/f02.jpg"
                }
                if(this.sd_h_s_name=="图片"){
                    sd_dert.height=373
                    sd_dert.width=100
                     sd_dert.margin_left=0
                   sd_dert.img= "/static/img/center_01.jpg"
                            
                }
                this.date_e.push(sd_dert)
            },     getdata(evt) {
                //                console.log(evt.draggedContext.element.id)
            },
            datadragEnd(evt) {
                console.log('拖动前的索引 :' + evt.oldIndex)
                console.log('拖动后的索引 :' + evt.newIndex)
                this.$emit('jp',this.date_e)

            },


        },
        mounted() {

            this.tu_ere_e = "sd_eet" + Math.floor(Math.random() * 100000 + 1)


        },
    }

</script>
<style scoped>
    .sdf_lunbo li {
        padding: 10px;
    }

 


    .sd_jh_ceert {
        display: inline-block;
        width: 70px;
        height: 70px;
    }

    .sd_jh_ceert img {
        width: 100%;
        height: 100%;
    }

    .sd_jh_dff {
        width: 20px;
        height: 20px;
        border: 1px solid #e0e0e0;
        text-align: center;
        line-height: 20px;

    }

    .sd_jh_dff i {
        display: none;
    }

    .sd_jh_dff.act {
        background: #1AB394;
        color: #fff;
        border: 1px solid #1AB394;
    }

    .sd_jh_dff.act i {
        display: inline-block
    }

    .tie_yte_er {
        line-height: 40px;
    }

    .eibu_deert {
        display: block;
        background: #D7EAC5;
        line-height: 40px;
        text-align: center;
        margin-bottom: 15px;
    }

    .dsf_ceeert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: none
    }

    .sd_ddrerrty {
        padding: 10px 30px;
    }
    .dsf_jh_deet{
        position: relative;
        bottom: 5px;
    }
    .dsf_jh_deert{
        width: 80px;
    }
    .dsf_jh_deert input{
        height: 30px;
        font-size: 16px;
    }

</style>
