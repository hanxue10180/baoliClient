import Vue from 'vue' 
import App from './App'
import router from './router'
import pubObj from './assets/commonJS/index.js'
import iView from 'iview'
import './assets/my-theme/index.less'
import './assets/my-theme/index.css'
Vue.use(iView);
Vue.prototype.pubObj = pubObj ;
new Vue({
	el:'#app',
	router,
	render: h => h(App)
})