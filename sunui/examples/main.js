import Vue from 'vue'
import App from './App.vue'


import Card from "../components/lib/card/index.js";
import Button from "../components/lib/button/index.js";
import Link from "../components/lib/link/index.js";

//默认调用demo组建的install方法，然后他会去真正执行Vue。component（）方法
Vue.use(Card);
Vue.use(Button);
Vue.use(Link);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
