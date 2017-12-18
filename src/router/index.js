import Vue from 'vue'
import Router from 'vue-router'
import login from './../view/login/index.vue'                          /*登录页*/
import register from './../view/register/index.vue'                    /*注册页*/
import content from './../view/content/index.vue'                      /*内容页*/
import homepage from './../view/homepage/index.vue'                    /*主页*/
import basicInfo from './../view/basicInfo/index.vue'                  /*我的信息*/
import editPwd from './../view/editPwd/index.vue'                      /*修改密码*/
import myPartners from './../view/myPartners/index.vue'                /*我的合作伙伴*/
import accounts from './../view/accounts/index.vue'                    /*应收账款/应付账款*/
import contracts from './../view/contracts/index.vue'                  /*销售合同/采购合同*/
Vue.use(Router)
const routes = [{
	path:'/',
	component:login
},{
	path:'/register',
	component:register
},{
	path:'/content',
	component:content,
	children:[{
		path:'',
		component:homepage
	},{
		path:'basicInfo',
		component:basicInfo
	},{
		path:'editPwd',
		component:editPwd
	},{
		path:'myPartners',
		component:myPartners,
		children:[{
			path:'',
			component: resolve => require(['./../components/myPartners/partnersList.vue'], resolve)  /*合作伙伴列表*/
		},{
			path:'invitation',
			component:resolve=>require(['./../components/myPartners/invitation.vue'],resolve) /*发起邀请*/
		},{
			path:'activeEnterprise',
			component:resolve=>require(['./../components/myPartners/activeEnterprise.vue'],resolve) /*激活企业*/
		},{
			path:'tradeInitiation',
			component:resolve=>require(['./../components/myPartners/tradeInitiation.vue'],resolve) /*贸易发起*/
		}]
	},{
		path:'accounts',
		component:accounts,
		children:[{
			path:'',
			component:resolve=>require(['./../components/accounts/accountsList.vue'],resolve)     /*账款列表*/
		},{
			path:'accountDetail',
			component:resolve=>require(['./../components/accounts/accountDetail.vue'],resolve)    /*查看账款详细*/
		}]
	},{
		path:'contracts',
		component:contracts,
		children:[{
			path:'',
			component:resolve=>require(['./../components/contracts/contractsList.vue'],resolve)      /*合同列表*/
		},{
			path:'contractDetail',
			component:resolve=>require(['./../components/contracts/contractDetail.vue'],resolve)     /*合同详细*/
		}]
	}]
}]
const router = new Router({
	routes
})
export default router
