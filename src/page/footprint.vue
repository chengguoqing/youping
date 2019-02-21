<!--我的足迹-->
<template>
	<div id="calendar">

		<section class="daohang_sd pd">
			<i class="dx icon-left" @click="$router.back(-1)"></i>
			<span class="fz16 ml10">我的足迹</span>
			<i class="dx icon-lajixiang lajixiangsd z9 fz18" v-if="is_biani==0" @click="is_biani=1"></i>
			<span class="lajixiangsd z3 fz16" v-else @click="is_biani=0">完成</span>
		</section>

		<section v-if="is_loadin">
			<section v-if="true" class="pt50">
				<section class="rili_sert gd ">
					<div class="month" v-if="sd_h_d==42">
						<ul class="dsf_jh_drertx">
							<li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
							<li class="year-month" @click="pickYear(currentYear,currentMonth)">
								<span class="choose-year"></span>
								<span class="choose-month">{{ currentYear }} {{ currentMonth }}月</span>
							</li>
							<li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
						</ul>
					</div>
					<ul class="weekdays">
						<li>一</li>
						<li>二</li>
						<li>三</li>
						<li>四</li>
						<li>五</li>
						<li style="color:red">六</li>
						<li style="color:red">日</li>
					</ul>
					<section class="pr">
						<ul class="days">
							<li @click="pick(day)" v-for="day in days">
								<!--今天-->
								<span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
								<span v-else>
   <!--今天-->
   <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">
       {{ day.getDate() }}
    </span>
								<span v-else>{{ day.getDate() }}</span>
								</span>
							</li>
						</ul>
						<span class="yj donw_jh_ddr" :class="sd_h_d!=7?'act':''" @click="df_dsdrtxc">
                <i class="dx icon-down"></i>
            </span>
					</section>
				</section>

				<p class="z9 fz12 pt10 pm10 pd " v-if="xuanz_sd">
					{{xuanz_sd}}
				</p>

				<section v-for="(po,idx) in history">

					<p class="z9 fz12 pt10 pm10 pd qc" v-if="po.time_pw&&!xuanz_sd">
						{{po.time_pw}}
					</p>

					<section class="case_row fl bbm" v-if="!xuanz_sd||xuanz_sd==po.time_m" @click="hf('commodity_details',{goods_id:po.goods_id})">
						<p class="fem_jh_sdf">
							<img :src="po.goods_thumb">
						</p>
						<p class="pt10 pm10 red pl5 pr fz16 btm">

							<span class="dsf_jhsd yj cz " :class="po.cls" v-if="is_biani==1" @click.stop="!po.cls?po.cls='act':po.cls=''">
                        <i class="dx icon-gou fz14 "></i>
                    </span> ￥
							<span v-html="price_guo(po.shop_price)"></span>

							<!--
                        <i class="dx icon-gengduo z9 gengduo_icon" @click="sheetVisible=true"></i>

-->
						</p>
					</section>

				</section>

				<!--         底部-->
				<section class="footer_sdd" v-if="is_biani==1">
					<a @click="delect_btn">删除</a>
				</section>

				<mt-actionsheet :actions="actions" v-model="sheetVisible">
				</mt-actionsheet>
			</section>

			<kongbai :kb="kb" v-else></kongbai>
		</section>
		<loadin v-else></loadin>

		<p class="qc"></p>
     
	</div>
</template>
<script>
	import {
		MessageBox
	} from 'mint-ui';
	import {
		Toast
	} from 'mint-ui';
	import kongbai from "../components/kongbai.vue"
	import loadin from "../components/loadin.vue"
     import suspension from "../components/suspension.vue"
	export default {
		data() {
			return {
				is_loadin: "",
				currentDay: 1,
				currentMonth: 1,
				currentYear: 1970,
				currentWeek: 1,
				days: [],
				sd_h_d: 7,
				is_biani: 0, //1是编辑状态
				sheetVisible: false,
				tet_sd: 0,
				xuanz_sd: "", //点击日历获取时间
				actions: [{
					name: "找相似",
					method() {

					}
				}, {
					name: "收藏",
					method() {

					}
				}, {
					name: "删除",
					method() {

					}
				}],
				kb: {
					icom: "dsf_hss_sd",
					msg: "还未留下任何足迹",
					btn_name: "返回首页",
					btn_url: ""
				},
				history: ""
			}
		},
		created: function() {
			this.initData(null, this.sd_h_d);
		},
		methods: {
			df_dsdrtxc() {
				if(this.sd_h_d == 7) {
					this.sd_h_d = 42
					var d = new Date();
					this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1), this.sd_h_d);
				} else {
					this.sd_h_d = 7
					var d = new Date();
					this.initData(null, this.sd_h_d);
				}

				//                    this.initData(null, this.sd_h_d);
			},
			initData: function(cur, ide) {
				var date;
				if(cur) {
					date = new Date(cur);
				} else {
					date = new Date();
				}
				this.currentDay = date.getDate();
				this.currentYear = date.getFullYear();
				this.currentMonth = date.getMonth() + 1;
				this.currentWeek = date.getDay(); // 1...6,0
				if(this.currentWeek == 0) {
					this.currentWeek = 7;
				}
				var str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
				console.log("today:" + str + "," + this.currentWeek);
				this.days.length = 0;
				// 今天是周日，放在第一行第7个位置，前面6个
				for(var i = this.currentWeek - 1; i >= 0; i--) {
					var d = new Date(str);
					d.setDate(d.getDate() - i);
					console.log("y:" + d.getDate());
					this.days.push(d);
				}
				for(var i = 1; i <= ide - this.currentWeek; i++) {
					var d = new Date(str);
					d.setDate(d.getDate() + i);
					this.days.push(d);
				}
			},
			pick: function(date) {

				this.xuanz_sd = (this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()));
				console.log(this.xuanz_sd);
			},
			pickPre: function(year, month) {
				// setDate(0); 上月最后一天
				// setDate(-1); 上月倒数第二天
				// setDate(dx) 参数dx为 上月最后一天的前后dx天
				var d = new Date(this.formatDate(year, month, 1));
				d.setDate(0);
				this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1), this.sd_h_d);
			},
			pickNext: function(year, month) {
				var d = new Date(this.formatDate(year, month, 1));
				d.setDate(35);
				this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1), this.sd_h_d);
			},
			pickYear: function(year, month) {
				alert(year + "," + month);
			},

			// 返回 类似 2016-01-02 格式的字符串
			formatDate: function(year, month, day) {
				var y = year;
				var m = month;
				if(m < 10) m = "0" + m;
				var d = day;
				if(d < 10) d = "0" + d;
				return y + "-" + m + "-" + d
			},
			getzhuji() {
				let history = {},
					th = this
				history.token = this.token
				this.post("user/history", history, function(data) {
					th.is_loadin = true
					data.map((a, b) => {
						let date = new Date(a.browse_time * 1000)
						a.cls = ""
						a.time_m = (th.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()))
					})
					let kjh_sdfr = ""
					data.map((a, b) => {
						a.time_pw = ""
						if(a.time_m != kjh_sdfr) {
							a.time_pw = a.time_m
						}
						kjh_sdfr = a.time_m

					})
					console.log(data);

					th.history = data

				})
			},
			delect_btn() { //删除按钮触发
				Toast("宝贝删除中...")
				let time_sd = [],
					th = this
				this.history.map(a => {
					if(a.cls) {
						time_sd.push(a.browse_time)
					}
				})
				let removehistory = {}
				removehistory.token = this.token
				removehistory.browse_times = time_sd.join(",")
				this.post("user/removehistory", removehistory, function() {
					Toast("宝贝删除成功")
					th.getzhuji()
				})
			}

		},

		components: {
			kongbai: kongbai,
			loadin: loadin,
            suspension
		},

		mounted() {
			this.Title("我的足迹")
			this.getzhuji()

			//            滚动监听
			window.addEventListener('scroll', e => {
				try {
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
					if(scrollTop >= 300) {
						$(".rili_sert").addClass("act")
					} else {
						$(".rili_sert").removeClass("act")
					}

				} catch(e) {

				}
			})
		},
	}
</script>
<style scoped>
	#calendar {
		margin: 0 auto
	}

	.month {
		width: 100%;
		background: #fff;
	}

	.month ul {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}

	.year-month {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.year-month span {
		color: #333 !important;
		font-size: 16px !important;
	}

	.year-month:hover {
		background: rgba(150, 2, 12, 0.1);
	}

	.choose-year {
		padding-left: 20px;
		padding-right: 20px;
	}

	.choose-month {
		text-align: center;
		font-size: 1.5rem;
	}

	.arrow {
		padding: 30px;
	}

	.arrow:hover {
		background: rgba(100, 2, 12, 0.1);
	}

	.month ul li {
		color: white;
		font-size: 16px;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: #333;
		padding: 0px;
	}

	.weekdays {
		margin: 0;
		padding: 10px 0;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		color: #FFFFFF;
		justify-content: space-around;
	}

	.weekdays li {
		display: inline-block;
		width: 13.6%;
		color: #999 !important;
		text-align: center;
		font-size: 14px;
	}

	.days {
		padding: 0;
		background: #FFFFFF;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.days span {
		font-size: 14px !important;
	}

	.days li {
		list-style-type: none;
		display: inline-block;
		width: 14.2%;
		text-align: center;
		padding-bottom: 7px;
		padding-top: 7px;
		font-size: 1rem;
		color: #000;
	}

	.days li .active {
		    padding: 5px 6px;
		border-radius: 50%;
		background: #F2302F;
		color: #fff;
	}

	.days li .other-month {
		padding: 5px;
		color: gainsboro;
	}

	.days li:hover {
		background: #e1e1e1;
	}

	.dsf_jh_drertx {
		width: 160px;
		margin: auto !important;
		padding-top: 10px !important;
		padding-bottom: 10px !important;
	}

	.donw_jh_ddr {
		position: absolute;
		background: #F2302F;
		color: #fff;
		right: 10px;
		bottom: -15px;
		width: 26px;
		height: 26px;
		line-height: 26px;
		text-align: center;
		border: 1px solid #e0e0e0;
	}

	.donw_jh_ddr.act {
		display: inline-block;
		transform: rotate(180deg)
	}

	.case_row {
		width: 33.3%;
		border-right: 1px solid #e0e0e0;
		background: #fff;
	}

	.fem_jh_sdf {
		height: 8rem;
	}

	.fem_jh_sdf img {
		width: 100%;
		height: 100%;
	}

	.gengduo_icon {
		position: absolute;
		right: 10px;
	}

	.rili_sert {
		position: sticky;
		left: 0px;
		top: 45px;
		z-index: 100
	}

	.rili_sert.act {
		top: -800px
	}

	.lajixiangsd {
		position: absolute;
		right: 10px;
	}

	.footer_sdd {
		background: #fff;
		position: fixed;
		left: 0px;
		bottom: 0px;
		height: 45px;
		width: 100%;
		z-index: 100
	}

	.footer_sdd a {
		width: 100px;
		height: 100%;
		position: absolute;
		right: 0px;
		top: 0px;
		background: linear-gradient(to right, #F09435, #EC5F2A);
		color: #fff;
		text-align: center;
		line-height: 45px;
		font-size: 13px;
	}

	.dsf_jhsd {
		width: 14px !important;
		height: 14px !important;
		position: relative;
		bottom: 2px;
	}

	.dsf_jhsd.act {
		background: #F2302F;
		border: 1px solid #F2302F;
	}

	.dsf_jhsd i {
		font-size: 12px !important;
		position: relative;
		top: -4px !important;
		left: -0px !important;
		transform: scale(0.8)
	}
</style>
