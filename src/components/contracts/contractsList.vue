<template>
	<Card style="height:100%">
		<p slot="title">合同列表</p>
		<div slot="extra" >
            <Button v-on:click="toNewPath('contractDetail')">查看</Button>
			<Button>贸易发起</Button>
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
					title:'合同编号',
					key:'contractNo'
				},{
					title:'合同金额',
					key:'contractMoney'
				},{
					title:'采购商',
					key:'purchasers'
				},{
					title:'供应商',
					key:'purchasers'
				},{
					title:'应收账款',
					key:'accountsReceivable'
				},{
					title:'应付账款',
					key:'accountsReceivable'
				},{
					title:'状态',
					key:'state'
				}],
				list:[{
					contractNo:'ajskf929002002',
					invoiceNo:'234349499349934934',
					contractMoney:234822,
					accountsReceivable:3453445,
					creditLine:1203210,
					purchasers:'非常有财',
					state:'未提交'
				}]
			}
		},
		methods:{
			toNewPath(path){
				this.$router.push({
					path:'/content/contracts/'+path
				})
			}
		}
	}
</script>