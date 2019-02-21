import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import fenlei from '@/page/fenlei'
import user from '@/page/user'
import user_er from '@/page/user_er'

import gwc from '@/page/gwc'
import order_form from '@/page/order_form'
import order_form_xq from '@/page/order_form_xq'
const pingjia = r => require.ensure([], () => r(require('@/page/pingjia.vue')), 'fenli')
import order_formqueren from '@/page/order_formqueren'
const mydizi = r => require.ensure([], () => r(require('@/page/mydizi.vue')), 'fenli')
const add_dizhi = r => require.ensure([], () => r(require('@/page/add_dizhi.vue')), 'fenli')
import syt from '@/page/syt'
import wodesc from '@/page/wodesc'
import xinxiang from '@/page/xinxiang'
import zhuji from '@/page/zhuji'
import shouhoulist from '@/page/shouhoulist'
import shouhouxq from '@/page/shouhouxq'
import commodity_details from '@/page/commodity_details'



import dianpuxinxi from '@/page/dianpuxinxi'

const baoxiangqing = r => require.ensure([], () => r(require('@/page/baoxiangqing.vue')), 'fenli')
const qiyexiangqing = r => require.ensure([], () => r(require('@/page/qiyexiangqing.vue')), 'fenli')
const dianouhuiyuan = r => require.ensure([], () => r(require('@/page/dianouhuiyuan.vue')), 'fenli')
const xiaoxicenter = r => require.ensure([], () => r(require('@/page/xiaoxicenter.vue')), 'fenli')
import wuliuxq from '@/page/wuliuxq'
const gonggaoxq = r => require.ensure([], () => r(require('@/page/gonggaoxq.vue')), 'fenli')
const gerenshezi = r => require.ensure([], () => r(require('@/page/gerenshezi.vue')), 'fenli')
const bangding = r => require.ensure([], () => r(require('@/page/bangding.vue')), 'fenli')
const qrdizi = r => require.ensure([], () => r(require('@/page/qrdizi.vue')), 'fenli')

import myyue from '@/page/myyue'
import yuermingxi from '@/page/yuermingxi'
import chongzhi from '@/page/chongzhi'
import myqianbao from '@/page/myqianbao'
import shourujl from '@/page/shourujl'
import tixianjilu from '@/page/tixianjilu'

import tixianxq from '@/page/tixianxq'
const tixian = r => require.ensure([], () => r(require('@/page/tixian.vue')), 'fenli')

import tixian_ys from '@/page/tixian_ys'
import myjifen from '@/page/myjifen'
import jifenlist from '@/page/jifenlist'
const yhq = r => require.ensure([], () => r(require('@/page/yhq.vue')), 'fenli')
import myhaoyou from '@/page/myhaoyou'
const nykehu = r => require.ensure([], () => r(require('@/page/nykehu.vue')), 'fenli')
import tuihuanhuo from '@/page/tuihuanhuo'
import huanhuo from '@/page/huanhuo'

import cplist from '@/page/cplist'
//const cplist = r => require.ensure([], () => r(require('@/page/cplist.vue')), 'fenli')
const shousuo = r => require.ensure([], () => r(require('@/page/shousuo.vue')), 'fenli')
import footprint from '@/page/footprint'
const photo_viewer = r => require.ensure([], () => r(require('@/page/photo_viewer.vue')), 'fenli')
const nykehu_xq = r => require.ensure([], () => r(require('@/page/nykehu_xq.vue')), 'fenli')
const assessment_details = r => require.ensure([], () => r(require('@/page/assessment_details.vue')), 'fenli')
const see_evaluation = r => require.ensure([], () => r(require('@/page/see_evaluation.vue')), 'fenli')
import pay_success from '@/page/pay_success'
import activity_168 from '@/page/activity_168'
const schedule_act = r => require.ensure([], () => r(require('@/page/schedule_act.vue')), 'fenli')
import generalize from '@/page/generalize'
const message_list = r => require.ensure([], () => r(require('@/page/message_list.vue')), 'fenli')
import test from '@/page/test'
const failure_err = r => require.ensure([], () => r(require('@/page/failure_err.vue')), 'fenli')
import index_er from '@/page/index_er'
import not_member from '@/page/not_member'
import purchase from '@/page/purchase'
import activity_p from '@/page/activity_p'
import bargain_record from '@/page/bargain_record'
import kaquan from '@/page/kaquan'

import cut_price_list from '@/page/cut_price_list'
import cut_price_center from '@/page/cut_price_center'
import negotiate_details from '@/page/negotiate_details'
//const bargain_record = r => require.ensure([], () => r(require('@/page/bargain_record.vue')), 'kanjia')


import pingduan from '@/pingduan/index'
import my_order_in from '@/pingduan/my_order_in'
import friend_shopping from '@/pingduan/friend_shopping'
import spell_share from '@/pingduan/spell_share'


import fenxiangzhezx from '@/page/fenxiangzhezx'
import fenxiangzhezx_xq from '@/page/fenxiangzhezx_xq'

import jiameng from '@/page/jiameng'
import jiamenglist from '@/page/jiamenglist'

import silver_wallet from '@/page/silver_wallet'

Vue.use(Router)
export default new Router({
    //   mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/index',
            name: 'index',
            component: index,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/fenlei',
            name: 'fenlei',
            component: fenlei,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/user',
            name: 'user',
            component: user,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/user_er',
            name: 'user_er',
            component: user_er,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/gwc',
            name: 'gwc',
            component: gwc,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/order_form',
            name: 'order_form',
            component: order_form
    }, {
            path: '/order_form_xq',
            name: 'order_form_xq',
            component: order_form_xq
    }, {
            path: '/pingjia',
            name: 'pingjia',
            component: pingjia
    }, {
            path: '/order_formqueren',
            name: 'order_formqueren',
            component: order_formqueren
    }, {
            path: '/mydizi',
            name: 'mydizi',
            component: mydizi
    }, {
            path: '/add_dizhi',
            name: 'add_dizhi',
            component: add_dizhi
    }, {
            path: '/syt',
            name: 'syt',
            component: syt
    }, {
            path: '/wodesc',
            name: 'wodesc',
            component: wodesc
    }, {
            path: '/xinxiang',
            name: 'xinxiang',
            component: xinxiang
    }, {
            path: '/zhuji',
            name: 'zhuji',
            component: zhuji
    }, {
            path: '/shouhoulist',
            name: 'shouhoulist',
            component: shouhoulist
    }, {
            path: '/shouhouxq',
            name: 'shouhouxq',
            component: shouhouxq
    }, {
            path: '/commodity_details',
            name: 'commodity_details',
            component: commodity_details
    }, {
            path: '/dianpuxinxi',
            name: 'dianpuxinxi',
            component: dianpuxinxi
    }, {
            path: '/baoxiangqing',
            name: 'baoxiangqing',
            component: baoxiangqing
    }, {
            path: '/qiyexiangqing',
            name: 'qiyexiangqing',
            component: qiyexiangqing
    }, {
            path: '/dianouhuiyuan',
            name: 'dianouhuiyuan',
            component: dianouhuiyuan
    }, {
            path: '/xiaoxicenter',
            name: 'xiaoxicenter',
            component: xiaoxicenter
    }, {
            path: '/wuliuxq',
            name: 'wuliuxq',
            component: wuliuxq
    }, {
            path: '/gonggaoxq',
            name: 'gonggaoxq',
            component: gonggaoxq
    }, {
            path: '/gerenshezi',
            name: 'gerenshezi',
            component: gerenshezi
    }, {
            path: '/bangding',
            name: 'bangding',
            component: bangding
    }, {
            path: '/qrdizi',
            name: 'qrdizi',
            component: qrdizi
    }, {
            path: '/myyue',
            name: 'myyue',
            component: myyue
    }, {
            path: '/yuermingxi',
            name: 'yuermingxi',
            component: yuermingxi
    }, {
            path: '/chongzhi',
            name: 'chongzhi',
            component: chongzhi
    }, {
            path: '/myqianbao',
            name: 'myqianbao',
            component: myqianbao
    }, {
            path: '/shourujl',
            name: 'shourujl',
            component: shourujl
    }, {
            path: '/tixianjilu',
            name: 'tixianjilu',
            component: tixianjilu
    }, {
            path: '/tixianxq',
            name: 'tixianxq',
            component: tixianxq
    }, {
            path: '/tixian',
            name: 'tixian',
            component: tixian
    }, {
            path: '/myjifen',
            name: 'myjifen',
            component: myjifen
    }, {
            path: '/jifenlist',
            name: 'jifenlist',
            component: jifenlist
    }, {
            path: '/yhq',
            name: 'yhq',
            component: yhq
    }, {
            path: '/myhaoyou',
            name: 'myhaoyou',
            component: myhaoyou
    }, {
            path: '/nykehu',
            name: 'nykehu',
            component: nykehu
    }, {
            path: '/tuihuanhuo',
            name: 'tuihuanhuo',
            component: tuihuanhuo
    }, {
            path: '/cplist',
            name: 'cplist',
            component: cplist,

    }, {
            path: '/shousuo',
            name: 'shousuo',
            component: shousuo,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/test',
            name: 'test',
            component: test
    }, {
            path: '/footprint',
            name: 'footprint',
            component: footprint
    }, {
            path: '/photo_viewer',
            name: 'photo_viewer',
            component: photo_viewer
    }, {
            path: '/nykehu_xq',
            name: 'nykehu_xq',
            component: nykehu_xq
    }, {
            path: '/assessment_details',
            name: 'assessment_details',
            component: assessment_details
    }, {
            path: '/see_evaluation',
            name: 'see_evaluation',
            component: see_evaluation
    }, {
            path: '/pay_success',
            name: 'pay_success',
            component: pay_success
    }, {
            path: '/activity_168',
            name: 'activity_168',
            component: activity_168
    }, {
            path: '/schedule_act',
            name: 'schedule_act',
            component: schedule_act
    }, {
            path: '/generalize',
            name: 'generalize',
            component: generalize,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/message_list',
            name: 'message_list',
            component: message_list
    }, {
            path: '/failure_err',
            name: 'failure_err',
            component: failure_err
    }, {
            path: '/index_er',
            name: 'index_er',
            component: index_er,
            meta: {
                keepAlive: true // 需要被缓存
            }
    }, {
            path: '/not_member',
            name: 'not_member',
            component: not_member
    }, {
            path: '/purchase',
            name: 'purchase',
            component: purchase
    }, {
            path: '/activity_p',
            name: 'activity_p',
            component: activity_p
    }, {
            path: '/cut_price_list',
            name: 'cut_price_list',
            component: cut_price_list
    }, {
            path: '/cut_price_center',
            name: 'cut_price_center',
            component: cut_price_center
    }, {
            path: '/negotiate_details',
            name: 'negotiate_details',
            component: negotiate_details
    }, {
            path: '/pingduan',
            name: 'pingduan',
            component: pingduan
    }, {
            path: '/my_order_in',
            name: 'my_order_in',
            component: my_order_in
    }, {
            path: '/friend_shopping',
            name: 'friend_shopping',
            component: friend_shopping
    }, {
            path: '/kaquan',
            name: 'kaquan',
            component: kaquan
    }, {
            path: '/spell_share',
            name: 'spell_share',
            component: spell_share
    }, {
            path: '/bargain_record',
            name: 'bargain_record',
            component: bargain_record
            },
        {
            path: '/fenxiangzhezx',
            name: 'fenxiangzhezx',
            component: fenxiangzhezx
        },
        {
            path: '/fenxiangzhezx_xq',
            name: 'fenxiangzhezx_xq',
            component: fenxiangzhezx_xq
        },
        {
            path: '/jiameng',
            name: 'jiameng',
            component: jiameng
        },
        {
            path: '/jiamenglist',
            name: 'jiamenglist',
            component: jiamenglist
        },
        {
            path: '/huanhuo',
            name: 'huanhuo',
            component: huanhuo
        },
        {
            path: '/silver_wallet',
            name: 'silver_wallet',
            component: silver_wallet
        },
        {
            path: '/tixian_ys',
            name: 'tixian_ys',
            component: tixian_ys
        }










  ]
})
//, {
//            path: '/bargain_record',
//            name: 'bargain_record',
//            component: bargain_record
//    }
