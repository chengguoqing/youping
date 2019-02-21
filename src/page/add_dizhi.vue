<!--添加地址-->
<template>
	<div>

		<section class="pr pd  dsf_jh_derx">

			<label class="sdf_jgh_er fz14 ml5">设为默认地址</label>
			<section class="  sd_sdrtxc">

				<mt-switch v-model="form.is_default"></mt-switch>

			</section> 
		</section>
		<form class="mui-input-group fz14">

			<div class="mui-input-row">
				<label>收货姓名</label>
				<input type="text" class="mui-input-clear fz14" placeholder="请输入收货姓名" v-model="form.consignee">
			</div>
			<div class="mui-input-row">
				<label>联系电话</label>
				<input type="tel" class="mui-input-clear fz14" placeholder="请输入联系电话" v-model="form.mobile">
			</div>
			<div class="mui-input-row" @click="diqu_sd=true">
				<label>收货地址</label>
				<p class="ov z3 dsf_jh_ert">
					{{form.cs}}
					<span class="z9" v-if="!form.cs">请输入收货地址</span>
				</p>

				<i class="dx icon-right dsf_jh_ertx"></i>
			</div>
			<div class="mui-input-row dsf_jh_detc">
				<label>详细地址</label>
				<section class="ov">
					<textarea placeholder="请输入详细地址" rows="4" v-model="form.address"></textarea >
        </section>
    </div>
</form>


        <p class="pd sdf_jh_eetrx" @click="baocun">
              <a class="mui-btn  w100 fz16 l40 bgred cf">保存</a>
        </p>

        <diqu :popupVisible="diqu_sd" @city="city" @close_sele="diqu_sd=false" ></diqu>
	</div>
</template>
<script>
    import diqu from "../components/diqu.vue"
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                diqu_sd: false,
                dsf_jhhas: false, //true为默认地址
                form: {
                    consignee: "", //联系人姓名
                    mobile: "",
                    cs: "",
                    province: "",
                    city: "",
                    district: "",
                    address: "",
                    is_default: false
                }

            }
        },
        components: {
            diqu: diqu
        },
        methods: {
            city(data) {
                this.diqu_sd = false
                this.form.cs = (data[0].name + "-" + data[1].name + "-" + data[2].name);
                this.form.province = data[0].parent_id
                this.form.city = data[1].parent_id
                this.form.district = data[2].parent_id
            },
            baocun() { //保存按钮触发

                if (!this.form.consignee) {
                    Toast('请输入收货人姓名');
                    return
                }

                if (!this.form.mobile) {
                    Toast('请输入收货人联系号码');
                    return
                }
                if (!this.yanza.phone(this.form.mobile)) {
                    Toast('请输入正确手机号');
                    return
                }
                if (!this.form.cs) {
                    Toast('请选择收货地址');
                    return
                }
                if (!this.form.address) {
                    Toast('请输入详细地址');
                    return
                }
                this.form.token = this.token
                let th = this
                this.form.is_default ? this.form.is_default = 1 : this.form.is_default = 0
                this.post("user/saveaddresss", this.form, function(data) {
                   if( th.$route.query.token){
                       localStorage.address_id=data.address_id
                       th.$route.query.address_id=data.address_id
                       th.hf('order_formqueren',th.$route.query)
                   }else{
                        th.$router.back(-1)
                   }
                   
                })



            }
        }, 
        mounted() {
            if (this.$route.query.data) {
                this.form = this.$route.query.data
                this.form.is_default == 1 ? this.form.is_default = true : this.form.is_default = false
                this.form.cs = this.form.province_name + "-" + this.form.city_name + "-" + this.form.district_name


            }

            this.Title("添加地址")
        },
    }

</script>
<style scoped>
    .dsf_jh_detc {
        height: auto;
    }

    .dsf_jh_detc textarea {
        text-indent: 0px;
        margin: 0px;
        padding: 0px;
        padding-top: 9px;
        font-size: 14px;
    }

    .dsf_jh_ertx {
        position: absolute;
        right: 8px;
        top: 10px;
    }

    .sdf_jgh_er {
        width: 30%;
    }

    .dsf_jh_derx {
        line-height: 40px;
        background: #fff
    }

    .sd_sdrtxc {
        position: absolute;
        top: 8px;
        right: 10px;
    }

    .dsf_jh_ert {
        padding-top: 9px;
    }

</style>
