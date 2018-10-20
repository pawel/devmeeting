import Vue from 'vue';
import DevMeeting from './components/DevMeeting.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(DevMeeting),
}).$mount('#app');
