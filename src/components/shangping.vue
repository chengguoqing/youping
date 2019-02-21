<!--商品-->
<template>
    <div >
               <div class=" mui-row pr40 mt10 ">
            <p class="mui-col-xs-1 tr pr10 tite_er">
                关键字:
            </p>
            <p class="mui-col-xs-4 tie_yte_er pr">
                  <input type="text" placeholder="关键字" v-model="keyword">
        </p>
        <p class="mui-col-xs-4 tie_yte_er pr">
                <a class="mui-btn bgls df_jhhert_d" @click="sous_ssd">检索</a>
        </p>
        </div>
                 
        
        
                <table class="mui-table cen fz16 sdf_jh_deert">
                <thead class="bghs">
                    <tr>
                    <td>产品图片</td>
                         <td>产品名称</td>
                         <td>产品状态</td>
<!--                         <td>产品库存</td>-->
                         <td>操作</td>
                </tr>
            </thead>
                    <tbody class="fz14 z6">
            <tr v-for="sd in d_kh_der">
        <td>
            <p class="pt5 pm5">
    <img :src="sd.goods_thumb" class="fengmiane cz">
    </p>
        </td>
    <td>
        <p class="dian z6">{{sd.goods_name}}</p>
    </td>
                   <td>
        上架中
    </td>
<!--
                   <td>
        2752
    </td>
-->
                   <td>
                       {{sd.cls}}
        <a class="mui-btn cas_sd_der cz" @click="sd_jghdd(sd)" v-if="sd.click_count!='act'">添加</a>
                        <a class="mui-btn cas_sd_der cz ab" v-if="sd.click_count=='act'">已添加</a>
    </td>
    </tr>
    </tbody>
        </table>
        
        <div class="mt20 fz12 cen">
    共有{{d_e_err.total}}条
        <ul class="mui-pagination f_b cz ml5">
<!--
					<li class="mui-previous">
						<a href="#">
							«
						</a>
					</li>
-->
					<li  :class="sd.cls" v-for="(sd,idx) in sd_deff" @click="sdf_df(sd)">
                   
						<a href="#">
							{{sd.idx_d}}
						</a>
					</li>
            
            
<!--
					<li class="mui-next mui-disabled">
						<a href="#">
							»
						</a>
					</li>
-->
				</ul>
            
    </div>
        
    </div>
        </template>
<script>
    export default {
        data() {
            return {
                page_sd:1,
                keyword:"",
                d_kh_der: "",
                d_e_err: "",
                sd_deff: []
            }
        },
        components: {

        },
        methods: {
            get_list() {
                let list = {},
                    th = this
                list.shop_id = 230
                list.mode = 1
                list.keyword=this.keyword
                list.current_page= this.page_sd
                this.post("product/list", list, function(data) {
                    th.d_kh_der = data.data
                    th.d_e_err = data
                    if(th.sd_deff.length<=0){
                    for (var i = 1; i <= data.last_page; i++) {
                        let sd_der = {}
                        sd_der.idx_d = i
                        if (i == 1) {
                            sd_der.cls = "mui-active"
                        } else {
                            sd_der.cls = ""
                        }

                        th.sd_deff.push(sd_der)
                    }
                        }
                })
            },
            sd_jghdd(sd){
              sd.click_count="act"  
                this.$emit('sd_hg_drt',sd)
            },
            sdf_df(sd) {
                this.sd_deff.map(a => {
                    a.cls = ""
                })
                sd.cls = "mui-active"
                this.page_sd=sd.idx_d
                this.get_list()
            },
            sous_ssd(){
                 this.page_sd=1
                    this.sd_deff.map(a => {
                    a.cls = ""
                })
                this.sd_deff[0].cls="mui-active"
                
                
                 this.get_list()
            }
        },
        mounted() {
            this.get_list()
        },
    }

</script>
<style scoped>
    .sdf_jh_deert {
        line-height: 40px;
    }

    .fengmiane {
        width: 50px;
    }

    .cas_sd_der {
        border: 1px solid #1AB394;
        color: #1AB394;
        line-height: 1
    }
    .cas_sd_der.ab{
        background: #999;
        color: #fff;
        border: 1px solid #999
    }

    .sdf_jh_deert td {
        border-right: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
    }

       .df_jhhert_d{
        height: 40px;
        padding: 0px;
        line-height: 40px;
        width: 80px;
        font-size: 16px;
    }
    
</style>
