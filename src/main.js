import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import 'ant-design-vue/dist/antd.less'
Vue.config.productionTip = false;
import Antd from 'ant-design-vue';
import VueParticles from 'vue-particles';
Vue.use(VueParticles);
Vue.use(Antd);
Vue.use(Scale);
import Scale from "./plugins/Scale";
const requireComponent = require.context(
    './components/base',
    false,
    /\.vue$/
)
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = fileName
      // Remove the "./" from the beginning
      .replace(/^\.\//, '')
      // Remove the file extension from the end
      .replace(/\.\w+$/, '')
      // Split up kebabs
      .split('-')
      // Upper case
      .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      // Concatenated
      .join('')
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
// 添加全局方法，命名以global开头
Vue.mixin({
  methods:{
    globalUrl(value){
      return util.baseUrl+value;
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
