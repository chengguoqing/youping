<!--推广名片-->
<template>
	<div >
        <div v-if="user_info_w" class="s_jh_errtx">
            <img :src="url_e" class="generalize_ewe cz" >
        </div>
       
        <loadin v-else></loadin>
        
        	<dibu :kjh_s="1" ></dibu>
	</div>
</template>
<script>
     import loadin from "../components/loadin.vue"
        import dibu from "../components/dibu.vue"
    export default {
        data() {
            return {
                url_e: "",
                user_info_w:""
            } 
        },
        components: {
            loadin,
            dibu
        },
        methods: {


        },
        mounted() {
            this.url_e = this.$route.query.url_e
            let th = this
            this.post("user/index", {
                token: this.token,
                type:this.$route.query.type//1推广 名片  2.永久
            }, function(data) {
                th.url_e=data.weicard+"?v="+new Date().getTime()
                th.user_info_w=true
            })
            this.Title("推广名片")
        },
    }

</script>
<style scoped>
    .s_jh_errtx{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        overflow: auto
    }
    .generalize_ewe {
        width: 100%;
        height: auto
    }

</style>
