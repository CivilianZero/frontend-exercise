import Vue from "vue";
import Quiz from "./Quiz.vue";
import questions from "./questions";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Quiz, { props: { questions } })
}).$mount("#app");
