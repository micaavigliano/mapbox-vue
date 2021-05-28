import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMapbox from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

Vue.use(VueMapbox);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
