import Vue from "vue";
import App from "./App.vue";
import { ApmVuePlugin } from '@elastic/apm-rum-vue';  

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

Vue.use(ApmVuePlugin, {
  config: {
    serviceName: 'vue-app',
    serverUrl: 'http://localhost:8200',
    active: true,
    serviceVersion: '1.0',
  }
})