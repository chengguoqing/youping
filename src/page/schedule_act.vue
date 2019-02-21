<!--进度详情-->
<template>
	<div v-html="afterservicedetail">

	</div>
</template>
<script>
    export default {
        data() {
            return {
                afterservicedetail: ""
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            this.Title("苍鸟")
            let afterservicedetail = {},
                th = this
            afterservicedetail.token = this.token
            afterservicedetail.after_service_key = this.$route.query.after_service_key
            this.post("customer/afterservicedetail", afterservicedetail, function(data) {
                th.afterservicedetail = data
            })
        },
    }

</script>
<style>
    .schedule-details-item {
        padding: 12px;
        background: #fff;
        margin-bottom: 6px;
    }

    .schedule-details-title {
        margin-bottom: 10px;
    }

    .schedule-details-title .schedule-details-img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: pink;
        float: left;
        margin-right: 7px;
        overflow: hidden;
    }

    .schedule-details-title .schedule-details-img img {
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .schedule-details-title .schedule-details-name p {
        font-size: 12px;
        color: #3a3a3a;
        margin-bottom: 5px;
    }

    .schedule-details-title .schedule-details-name span {
        font-size: 10px;
        color: #999;
    }

    .schedule-details-item .schedule-details-status {
        font-size: 12px;
        margin-bottom: 10px;
    }

    schedule-details.css:42 .edit-status {
        color: #333;
    }

    .schedule-details-info p {
        font-size: 10px;
        color: #999;
        margin-bottom: 6px;
    }

</style>
<style scoped>


</style>
