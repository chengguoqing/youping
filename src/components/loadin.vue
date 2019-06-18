<!--加载组件-->
<template>
<section class="df_fr_errtt cz_w">
	<section class="load_am_ert cz_a ">

        <img src="https://mall.cangniaowl.com/static_youpin/img/load_gif.gif" class="load_gif_er">
        <section v-if="$store.state.shopinfo.shop_id">

        <p class="cen mt5"  v-if='system_name=="ninehouse"'>
           Nine House
        </p>

        <p class="cen" v-else>
            <img src="https://mall.cangniaowl.com/static_youpin/img/dibu_e.png" class="dibu_e_er">
        </p>

        </section>
	
	</section>
    </section>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .df_fr_errtt {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100000;
        background: #fff
    }

    .load_gif_er {
        width: 64px;
        margin-left: 18px;
    }

    .dibu_e_er {
        width: 60px;
        position: relative;

    }

    .load_am_ert {
        line-height: 0.1;
    }

</style>
