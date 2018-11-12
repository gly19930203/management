// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './config/route'
import './assets/iconfont.less'
import './assets/style.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

//global.APP_HOST = 'http://192.168.1.9:8020'//手机扫码功能，微信端路径
//global.IMG_HOST = 'http://192.168.1.9:8006'
axios.defaults.baseURL = 'http://192.168.0.8:8006/back';

 global.APP_HOST = 'http://www.edutage.com.cn/crm/marketing'
 global.IMG_HOST = 'http://crmapi.edutage.com.cn'
// axios.defaults.baseURL = 'http://crmapi.edutage.com.cn/back';
axios.defaults.headers.common['Authorization'] = window.localStorage.Authorization;
axios.defaults.timeout = 10000;
//添加响应拦截器
axios.interceptors.response.use(function(response) {
	return response.data;
}, function(error) {
	var result = {error:true};
	if(error.code == 'ECONNABORTED'){
		result.msg = "请求超时";
	}else if(error.response.status == 400){
		result.msg = error.response.data;
	}else if(error.response.status == 401){
		result.msg = "您没有权限访问";
	}else if(error.response.status == 500){
		result.msg = "服务器错误";
	}else{
		result.msg = "错误";
	}
	return result;
});

//全局路由钩子
// router.beforeEach((to,from,next)=>{
// 	if(to.name == "Login"){
// 		if(window.localStorage.Authorization){
// 			next({
// 				path:'/Index'
// 			});
// 		}else{
// 			next();
// 		}
// 	}else{
// 		if(window.localStorage.Authorization){
// 			next();
// 		}else{
// 			next({
// 				path:'/'
// 			});
// 		}
// 	}
// });
// 深度Copy
Vue.prototype.deepCopy = function (obj){
	if(obj == null){
		return obj;
	}
	if(typeof obj !== 'object'){
		return obj;
	}
	var newobj = {};
	if(Array.isArray(obj)){
	newobj = [];
	}
	for (var attr in obj) {
	// 每个值Copy
	newobj[attr] = this.deepCopy(obj[attr]);
	}
	return newobj;
}


const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        inc:state=>state.count++,
        dec:state=>state.count--
    }
})

/* eslint-disable no-new */
var myvue = new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})


