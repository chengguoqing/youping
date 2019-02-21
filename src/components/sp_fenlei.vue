<!--商品分类-->
<template>
    <div >
        <ul class="pd dsf_jh_er">
            <li v-for="sd in ds_jh_sd" @click="sddsff(sd)">
                <span class="sd_jh_dff f_b cz " :class="sd.cls" >
                <i class="dx icon-gouxuan fz14"> </i>
               
            </span> 
                
                <span class="fz16  ml10 cz">{{sd.cat_name}}</span>
    
            </li>
    
        </ul>
          
    </div>
        </template>
<script>
    export default {
        data() {
            return {
                ds_jh_sd:[]
            }
        },
        components: {

        },
        methods: {
            sddsff(sd){
                this.ds_jh_sd.map(a=>{
                    a.cls=""
                })
                let list={},
                    th=this
                list.shop_id = this.shop_id
                list.cat_id=sd.cat_id
                  sd.cls="act"
                this.post("product/list",list,function(datee){
                    console.log(datee.data);
                      th.$emit("sd_hg_drt",datee.data)
                })
              
              
            }
        },
        mounted() {

            let category = {},
                th=this
            category.shop_id = this.shop_id
            category.show_subcat = 1
            this.post("product/category", category, function(data) {
               
                data.map(a=>{
                    a.cls=""
                })
               
                th.ds_jh_sd= data
                
                
            })
        },
    }

</script>
<style scoped>
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

    .dsf_jh_er {
        min-height: 400px;
    }

    .dsf_jh_er li {
        line-height: 40px;
        cursor: pointer
    }

</style>
