import Vue from "vue";
import vuetify from '@/plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { makeServer } from "./server";
// import VueEasyLightbox from 'vue-easy-lightbox'

// import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

// if (process.env.NODE_ENV === "development") {
// 	makeServer()
// }

new Vue({
	// VueEasyLightbox,
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");