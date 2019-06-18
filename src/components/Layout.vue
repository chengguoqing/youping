<template>
	<div class="chacheli-layout">
 
		<div class="dsf_jh_deer"
			v-for="c in chachelis"
			v-if="!c.available"
			:key="c.id" 
			>
            
         
            <div class="chacheli "  :style="{ top: (c.y * v) + '%', left: (c.x * h) + '%', width: (c.w * h) + '%', height: (c.h * v) + '%'}"   v-if="c.text!='https://mall.cangniaowl.com/static/img/zhuangxiu/Fixed_menu_block_icon_i04.png'">
    <img :src="c.text" class="w100 h100">
    
    </div>
            
            
                 <div class="chacheli " v-else  :style="{ top: (c.y * v) + '%', left: (c.x * h) + '%', width: (c.w * h) + '%', height: (c.h * v) + '%'}"></div>
            
           
<!--
            <div class="chacheli "  :style="{ top: (c.y * v) + '%', left: (c.x * h) + '%', width: (c.w * h) + '%', height: (c.h * v) + '%','background-image': 'url('+c.text+')'}"   v-if="c.text!='https://mall.cangniaowl.com/static/img/zhuangxiu/Fixed_menu_block_icon_i04.png'"></div>
            
            
            <div class="chacheli "  :style="{ top: (c.y * v) + '%', left: (c.x * h) + '%', width: (c.w * h) + '%', height: (c.h * v) + '%'}" v-else></div>
            
-->
            
		
		</div>
	</div>
</template> 

<style lang="scss">
    .chacheli img{
        width: 100%;
        height: 100%
    }
    .chacheli{
        background-size: 100% 100%
/*
         background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
*/
    }
.chacheli-layout {
	height: 100%;
	flex: 1 1 auto;
	position: relative;
	margin: 0;
	overflow: hidden;

	&, * {
		box-sizing: border-box;
	}

    .chacheli {
        position: absolute;

		> * {
			height: 100%;
			display: inline-block;
		}
    }
}
</style>

<script>
export default {
	name: 'chacheli-layout',
	props: [ 'layout', 'chachelis', 'data' ],

	data() {
		return {
			v: 0,
			h: 0
		}
	},

	watch: {
		'layout.cols'() {
			this.calc()
		},
		'layout.rows'() {
			this.calc()
		}
	},

	created() {
		this.calc()
	},

	methods: {
		calc() {
            console.log(this.layout);
			this.v = 100 / this.layout.rows
			this.h = 100 / this.layout.cols
		}
	}
}
</script>
