import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ajax from './utils/ajax'

import VueI18n from 'vue-i18n'

import './style/reset.less'
import './style/common.less'

Vue.use(VueI18n)

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入

const messages = {
  'zh': { a: '你好' }, // 中文语言包
  'en': { a: 'hello' } // 英文语言包
}

const i18n = new VueI18n({
  locale: 'zh', // set locale 默认显示中文
  messages // set locale messages
})

Vue.config.productionTip = false
Vue.prototype.$ajax = ajax
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
