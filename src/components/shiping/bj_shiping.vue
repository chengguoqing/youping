<!--编辑视频-->
<template>
<div class="pt20">

     <el-form label-width="90px"  class="demo-ruleForm sdf_jhwerh_Deer">
                <el-form-item label="选择视频："  prop="">
                <section class="cz_w sdf_jj_Dert sz">
                    <section class="cz_a dian" v-if="date_e.filename">
                         <img src="https://mall.cangniaowl.com/static/img/zhuangxiu/bofang.png" class="bofangdsr cz">
                           <span class="ml10">{{date_e.filename}}</span>    
                </section>
                       <section class="cz_a dian" v-else>
                        暂未指定视频
                </section>
    
                </section>
                    <p class="ls sz" @click="bianji_e=true"><ins>指定视频</ins></p>
           </el-form-item>
         
          <el-form-item label="高度:"  prop="" class="mt30">
                      <el-row class="pl10" :gutter="20">
                      <el-col :span="12">  <el-slider v-model="date_e.height" max="1080"></el-slider></el-col>
                      <el-col :span="8"> 
            <el-input  placeholder="" v-model="date_e.height" ></el-input>
            </el-col>
                  </el-row>
    </el-form-item>
            
                 <el-form-item label="宽度:"  prop="">
                      <el-row class="pl10" :gutter="20">
                      <el-col :span="12">  <el-slider v-model="date_e.width"></el-slider></el-col>
                      <el-col :span="8"> 
                          <section class="pr">
          <el-input  placeholder="" v-model="date_e.width"></el-input> <span class="ddsf_dsfdrt">%</span>
                              
                              </section>
            </el-col> 
                  </el-row>
    </el-form-item>
                
                
                 <el-form-item label="上下距离:"  prop="">
                      <el-row class="pl10" :gutter="20">
                      <el-col :span="12">  <el-slider  v-model="date_e.margin_top"></el-slider></el-col>
                      <el-col :span="8"> 
            <el-input  placeholder="" :max="100" :min="-100"  v-model="date_e.margin_top"></el-input>
            </el-col>
                  </el-row>
    </el-form-item>
         
          <el-form-item label="左右距离:"  prop="">
                      <el-row class="pl10" :gutter="20">
                      <el-col :span="12">  <el-slider :max="375" v-model="date_e.margin_left"></el-slider></el-col>
                      <el-col :span="8"> 
            <el-input  placeholder=""    v-model="date_e.margin_left"></el-input>
            </el-col>
                  </el-row>
    </el-form-item>
         
    </el-form>
    
       <el-dialog class="sddf_drrt" title="选择视频" :visible.sync="bianji_e" width="800px">
             <el-form :inline="true"  class="demo-form-inline sdf_jh_sewer">
  <el-form-item label="">
    <el-input v-model="keyword" placeholder="输入视频名称搜索"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="sous_ssd">搜索</el-button>
  </el-form-item>
</el-form>
           
           
               <el-table class="fg_d_Derter "  :data="tableData" style="width: 100%"  border highlight-current-row>
        <el-table-column prop="filename"  label="视频名称" align="center"></el-table-column>
              <el-table-column  label="创建时间" align="center">
    
        	<template slot-scope="scope">
                <span v-html="time_c(scope.row.add_time)"></span>
               
</template>
</el-table-column>

<el-table-column label="操作" align="center">

    <template slot-scope="scope">
<span class="ls sz" @click="tianjia(scope.row)">添加</span>
</template>
</el-table-column>


</el-table>


<div class="block cen mt20">
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="total, prev, pager, next" :total="total">
    </el-pagination>
</div>




</el-dialog>

</div>
</template>
<script>
    export default {
        props: {
            date_e: ""
        },
        data() {
            return {
                bianji_e: false,
                tableData: "",
                page_sd: 1,
                keyword: "",
                d_kh_der: "",
                d_e_err: "",
                sd_deff: [],
                formInline: "",
                total: ""
            }
        },
        components: {

        },
        methods: {
            handleCurrentChange(val) {
                this.page_sd = val
                this.get_list()
            },
            get_list() {
                let list = {},
                    th = this
                list.keyword = this.keyword
                list.page = this.page_sd
                list.ty_p = 1

                //                th.total = data.pager.record_count
                //                th.tableData = data.data_list

                this.post("zhuangxiu/videoList", list, function(data) {
                    th.total = data.pager.record_count
                    th.tableData = data.data_list
                })
            },
            sous_ssd() { //搜索
                this.page_sd = 1
                this.get_list()
            },
            tianjia(sd) {
                this.date_e.url_sp = sd.url
                this.date_e.filename = sd.filename
                this.bianji_e = false
            }
        },
        mounted() {
            this.get_list()
        },
    }

</script>
<style>
    .sdf_jhwerh_Deer .el-form-item {
        margin-bottom: 10px !important;
    }

</style>
<style scoped>
    .ddsf_dsfdrt {
        position: absolute;
        right: -20px;
        top: 0px
    }

    .sdf_jj_Dert {
        width: 250px;
        height: 80px;
        border: 1px solid #e0e0e0;
        background: #fff;
        color: #666;
        padding-bottom: 0px;
        margin-bottom: -5px;
    }

    .bofangdsr {
        width: 40px;
        height: 40px;
    }

</style>
