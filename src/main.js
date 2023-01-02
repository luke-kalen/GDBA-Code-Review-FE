import Vue from "vue";
import vuetify from '@/plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import i18n from './plugins/vue-i18n'
import './plugins/vue-google-maps'
import './plugins/vue-shortkey'
import './plugins/vue-head'
import './plugins/vue-gtag'
import './plugins/apexcharts'
import './plugins/echarts'
import './plugins/animate'
import './plugins/clipboard'
import './plugins/moment'

import './assets/scss/theme.scss'

import 'animate.css/animate.min.css'
// import { makeServer } from "./server";
// import VueEasyLightbox from 'vue-easy-lightbox'

// import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

// if (process.env.NODE_ENV === "development") {
// 	makeServer()
// }

new Vue({
	// VueEasyLightbox,
	i18n,
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");