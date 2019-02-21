<template>
	<div>

		<mt-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</mt-button>
		<mt-datetime-picker ref="picker1" v-model="value" @confirm="handleChange">
		</mt-datetime-picker>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: null
			};
		},

		methods: {
			open(picker) {
				this.$refs[picker].open();
			},
			handleChange(value) {
				console.log(value)
			},

		}
	};
</script>
