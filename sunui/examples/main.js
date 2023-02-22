import Vue from 'vue'
import App from './App.vue'

import "../components/css/card.scss";

import Card from "../components/lib/card/index.js";

//默认调用demo组建的install方法，然后他会去真正执行Vue。component（）方法
Vue.use(Card);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
