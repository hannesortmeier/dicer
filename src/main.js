import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import SvgTransition from 'vue-svg-transition';

Vue.config.productionTip = false
Vue.use(SvgTransition);

new Vue({
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
