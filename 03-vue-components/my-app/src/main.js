import Vue from 'vue';
import VeeValidate from 'vee-validate';
import DevMeeting from './components/DevMeeting.vue';

Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(DevMeeting),
}).$mount('#app');
