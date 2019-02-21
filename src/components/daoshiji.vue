<template>
<div class="dsd_deetrt">
    <span v-if="!sd_ddf"> {{is_drte_er.h}}时{{is_drte_er.m}}分{{is_drte_er.m_b}}</span>
    <span v-if="sd_ddf==1"> <span class="sd_jhg_der">{{is_drte_er.h}}</span> : <span class="sd_jhg_der">{{is_drte_er.m}}</span> : <span class="sd_jhg_der">{{is_drte_er.m_b}}</span></span>
</div>
</template>
<script>
    export default {
        props: {
     
            dapshid: "",
            sd_ddf:""
        },
        data() {
            return {
                is_drte_er: { //礼包下面的倒计时
                    d: 0,
                    h: 0,
                    m: 0,
                    m_b: 0,
                    h_m: 0
                },
            }
        },
        components: {

        },
        methods: {
            GetRTime(daye, call_back, ty) {
                var EndTime = new Date(daye);
                var NowTime = new Date();
                var t = EndTime.getTime() - NowTime.getTime();
                var d = 0;
                var h = 0;
                var m = 0;
                var s = 0;
                if (t >= 0) {
                    d = Math.floor(t / 1000 / 60 / 60 / 24);
                    if (ty) {
                        h = Math.floor(t / 1000 / 60 / 60 % 24);
                    } else {
                        h = Math.floor(t / 1000 / 60 / 60);
                    }

                    m = Math.floor(t / 1000 / 60 % 60);
                    s = Math.floor(t / 1000 % 60);
                }
                d < 10 ? d = (0 + '' + d) : d
                h < 10 ? h = (0 + '' + h) : h
                m < 10 ? m = (0 + '' + m) : m
                s < 10 ? s = (0 + '' + s) : s
                call_back(d, h, m, s)
            }
        },
        mounted() {
            let th=this
            
             this.GetRTime(this.dapshid * 1000, function(d, h, b, c) {
                    th.is_drte_er.d = d
                    th.is_drte_er.h = h
                    th.is_drte_er.m = b
                    th.is_drte_er.m_b = c
             
                })
            
            
            setInterval(po => {
                this.GetRTime(this.dapshid * 1000, function(d, h, b, c) {
                    th.is_drte_er.d = d
                    th.is_drte_er.h = h
                    th.is_drte_er.m = b
                    th.is_drte_er.m_b = c
             
                })
            }, 1000);
        },
    }

</script>
<style scoped>
    .dsd_deetrt {
        display: inline-block
    }
        .sd_jhg_der{
        border-radius: 4px;
        background: #F95151;
        color: #fff;
        padding: 5px 6px;
    }

</style>
