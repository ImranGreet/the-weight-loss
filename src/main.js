import { createApp } from "vue";
import "./assets/style.css";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
/*global compoents*/
import GlobalForm from "../src/components/Global/GlobalForm.vue";
/*global components*/

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .component("globalForm", GlobalForm)
  .mount("#app");
