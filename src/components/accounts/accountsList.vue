<template>
	<Card style="height:100%">
		<p slot="title">账款列表</p>
		<div slot="extra" >
            <Button v-on:click="toNewPath('accountDetail')">查看</Button>
			<Button>融资</Button>
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
					title:'发票编号',
					key:'invoiceNo'
				},{
					title:'合同金额',
					key:'contractMoney'
				},{
					title:'应收账款',
					key:'accountsReceivable'
				},{
					title:'应付日期',
					key:'dueDate'
				}],
				list:[{
					contractNo:'ajskf929002002',
					invoiceNo:'234349499349934934',
					contractMoney:234822,
					accountsReceivable:3453445,
					creditLine:1203210,
					dueDate:'2017-07-07'
				}]
			}
		},
		methods:{
			toNewPath(path){
				this.$router.push({
					path:'/content/accounts/'+path
				})
			}
		}
	}
</script>