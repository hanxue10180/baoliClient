<template>
	<div class="list-view">
		<Menu ref="side_menu"  theme="light" style="width:100%" :active-name="secondMenu" @on-select="selectView">
            <MenuItem :name="item.path" v-for="item in list[current]" :path="item.path">
	            <Icon  v-if="item.icon" :type="item.icon" ></Icon>
	            {{item.name}}
	        </MenuItem>
        </Menu>
	</div>
</template>
<script>
	export default{
		props:['current','secondCur'],
		data(){
			return{
				list:{
					accountInfo:[]  //基本信息二级列表
				} ,//列表信息 ，包含名字与链接组件路由地址 ,也可以添加icon
				secondMenu:''
			}
		},
		mounted(){
			this.getList(); //获取二级菜单
			this.getInitSecondMenu(); //获取当前active-name ,并跳转到相应路由
		},
		watch:{
			current(curVal,oldVal){
				this.getInitSecondMenu();
			},
			secondCur(curVal,oldVal){
				this.getInitSecondMenu();
			}
		},
		methods:{
			//二级菜单
			getList(){
				//基本信息列表
				this.list={
					accountInfo:[{
						name:'我的信息',
						path:'basicInfo'
					},{
						name:'修改密码',
						path:'editPwd'
					}],
					partners:[{
						name:'我的合作伙伴',
						path:'myPartners'
					},{
						name:'邀请履历',
						path:'inviteResume'
					}],
					myTrade:[{
						name:'应收/应付账款',
						path:'accounts'
					},{
						name:'销售/采购合同',
						path:"contracts"
					}]
				}
			},
			//点击二级菜单内容区路由跳转
			selectView(name){
				this.secondMenu = name ;
				this.routerPush()
			},
			//获取二级菜单初始active-name
			getInitSecondMenu(){
				if(this.secondCur!=''){
					this.secondMenu = this.secondCur ;
				}
				else if(this.current == 'accountInfo'){
					this.secondMenu = 'basicInfo' ;
				}else if(this.current == 'partners'){
					this.secondMenu = 'myPartners' ;
				}else if(this.current == 'myTrade'){
					this.secondMenu = 'accounts' ;
				}
				this.updateContent();
			},
			updateContent(){
				this.$nextTick(() => {
					this.$refs.side_menu.updateOpened()
					this.$refs.side_menu.updateActiveName()
				})
				this.routerPush();		
			},
			//路由跳转
			routerPush(){
				this.$router.push({
					path:'/content/'+this.secondMenu
				})
			}
		}
	}
</script>
<style>
	.list-view .ivu-menu-vertical .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected{
		background:#fff !important;
	}
	.list-view .ivu-menu-vertical{
		background: inherit !important
	}
	.list-view .ivu-menu-vertical .ivu-menu-item{
		border-bottom: 1px solid #E4E4E4;
		color:#666666;
	}
</style>