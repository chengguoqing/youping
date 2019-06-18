<template>
<div >
<!--<loadin v-if="sd_sdf==-1"></loadin>-->

      <index_er v-if="template_id>0"></index_er>
      <index_san v-else></index_san>
</div>
</template>
<script> 
        import loadin from "../components/loadin.vue"
    import index_er from "./index_er"
     import index_san from "./index_san"
    export default {
        data() {
            return {
                sd_sdf:-1,
                template_id:""
            }
        },
        components: {
            loadin,
            index_er,
            index_san
        },
        methods: {

        },
        mounted() {
            let th=this
            this.template_id=template_id
        },
    }

</script>
<style scoped>


</style>
