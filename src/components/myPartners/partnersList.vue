<template>
	<Card style="height:100%">
		<p slot="title">合作伙伴</p>
		<div slot="extra" >
            <Button v-on:click="toNewPath('invitation')">发起邀请</Button>
			<Button v-on:click="toNewPath('activeEnterprise')">激活企业</Button>
			<Button v-on:click="toNewPath('tradeInitiation')">贸易发起</Button>
        </div>
		<Table border :columns="columns" :data="list"></Table>
	</Card>
</template>
<script>
	export default{
		data(){
			return {
				columns:[{
					type:'selection',
					width: 60,
                    align: 'center'
				},{
					title:'企业名称',
					key:'companyName'
				},{
					title:'联系人',
					key:'contacts'
				},{
					title:'手机号',
					key:'mobileNumber'
				},{
					title:'邮箱',
					key:'email'
				},{
					title:'授信额度',
					key:'creditLine'
				},{
					title:'融资比例',
					key:'financingRatio'
				},{
					title:'授信期限',
					key:'creditLimit'
				}],
				list:[{
					companyName:'非常有财',
					contacts:'韩雪',
					mobileNumber:'1232333223',
					email:'12300@a.com',
					creditLine:1203210,
					financingRatio:'20%',
					creditLimit:'2018-01-01'
				}]
			}
		},
		methods:{
			toNewPath(newPath){
				this.$router.push({
					path:'/content/myPartners/'+newPath
				})
			}
		}
	}
</script>