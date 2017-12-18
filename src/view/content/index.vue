<template>
	<div>
		<Menu mode="horizontal"	:theme="theme1" :active-name="current" @on-select="selectView">
			<MenuItem name="homepage"><Icon type="ios-home"></Icon>首页</MenuItem>
			<MenuItem name="accountInfo"><Icon type="ios-paper"></Icon>账户信息</MenuItem>
			<MenuItem name="partners"><Icon type="ios-people"></Icon>合作伙伴</MenuItem>
			<MenuItem name="myTrade"><Icon type="chatbubbles"></Icon>我的贸易</MenuItem>
			<Submenu name="4" class="menu-right">
				<template slot="title">
	                <img src="./../../assets/imgs/head.png" height="130" width="128" class="admin-pic" /> 1289721723@qq.com
	            </template>
                <MenuItem name="basicInfo">我的信息</MenuItem>
                <MenuItem name="editPwd">修改密码</MenuItem>
			</Submenu>
		</Menu>
		<div class="content" v-bind:style="'height:'+cHeight+'px'" >
			<div class="list-view" v-if="current!='homepage'">
				<listView :current="current" :secondCur="secondCur" ref="list_view"></listView>
			</div>
			<div class="content-view">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	import listView from './../../components/listView/listView.vue'
	export default{
		name:'app',
		data(){
			return{
				theme1:'primary',
				cHeight:document.body.clientHeight - 70 ,
				current:'homepage',
				secondCur:''
			}
		},
		components:{
			listView
		},
		mounted(){
			this.$router.push({
				path:'/content'
			})
		},
		methods:{
			selectView(name){
				if(name=='homepage'){
					this.current = 'homepage'
					this.$router.push({
						path:'/content'
					})
				}
				if(name=="basicInfo" ||　name=='editPwd'){
					this.current = 'accountInfo';
					this.secondCur = name ;
				}else {
					this.current = name ;
					this.secondCur = '' ;
				}
			}
		}
	}
</script>
<style>
	html,body{
		height:100%;
	}
	.ivu-menu-horizontal{
		padding-left:150px !important;
	}
	/* .ivu-menu>.ivu-menu-item-selected,.ivu-menu>.ivu-menu-item-active{
		background-color: #000 !important;
	} */
	.ivu-menu-horizontal>.ivu-menu-item ,.ivu-menu-horizontal>.ivu-menu-submenu{
		height: 100%;
		vertical-align: middle !important;
	}
	.admin-pic{
		border: 2px solid rgba(255, 255, 255, 0.8);
    	display: inline-block;
    	height: 30px;
    	width: 30px;
    	border-radius:50%;
    	margin-top: 12px;
    	float:left;
    	margin-right:7px;
	}
	.menu-right{
		float: right !important;
		margin-right:20px;
	}
	.content{
		background-color: #eee;
		display:flex;
	}
	.list-view, .content-view{
		height: 100%;
	}
	.list-view{
		width:150px;
		background-color: #EAEDF1;
	}
	.content-view{
		background-color:#F9F9F9;
		box-sizing: border-box;
		width:700px;
		flex:1;
	}
	.pull-left{
		float:left;
	}
	.pull-right{
		float: right;
	}
</style>