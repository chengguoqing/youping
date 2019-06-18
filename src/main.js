// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import './css/iconfont.css'
import './css/mui.min.css'
import './css/base.css'
import './css/style.css'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import VueResource from 'vue-resource';
import router from './router'
import public_m from './public_m'
import MintUI from 'mint-ui'
import $ from 'jquery'
import VueClipboard from 'vue-clipboard2'
import Navigation from 'vue-navigation'
import store from './store'
import 'vant/lib/index.css';
import Vuex from 'vuex'

import Vant from 'vant';

Vue.use(Vant);

Vue.use(VueClipboard)

Vue.use(MintUI)
Vue.use(public_m)
Vue.use(VueResource)
Vue.use(Navigation, {
    router
})

Vue.use(Vuex)

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
