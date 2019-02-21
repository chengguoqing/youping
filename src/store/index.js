import Vue from 'vue'
import vuex from 'vuex'
import VueResource from 'vue-resource';
Vue.use(vuex);
Vue.use(VueResource);
export default new vuex.Store({
    state: {
        shopinfo: "",
        carnumber:0,
        url_er:0,//客服消息条数
        is_dizs:false//是否显示配送地址
    },
    mutations: {
        get_shopinfo(state) {
            let shopinfo = {}
            shopinfo.token = token
            Vue.http.get("https://api.cangniaowl.com/v1/home/shopinfo", {
                params: shopinfo
            }).then((response) => {
                state.shopinfo = response.data;
                resolve(response.data)

            }, (response) => {

            });
        }
    },
    actions: {
        async get_date(state) {
            var await_er = await new Promise((resolve) => {
                let shopinfo = {}
                shopinfo.token = token
              
                if (!state.shopinfo) {
                    Vue.http.get("https://api.cangniaowl.com/v1/home/shopinfo", {
                        params: shopinfo
                    }).then((response) => {
                        state.shopinfo = response.data;
                        resolve(response.data)
                        console.log(state.shopinfo);
                    }, (response) => {

                    });
               
                }
                  
                state.shopinfo=true
            })
            return await_er
        }
    }
})



