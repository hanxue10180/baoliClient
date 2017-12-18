<template>
	<Card style="width:50%;margin:20px;">
		<p slot="title">贸易发起</p>
		<div style="overflow:hidden">
			<Button type="ghost" v-on:click="back">返回</Button>
		</div>
	</Card>
</template>
<script>
	export default{
		methods:{
			back(){
				this.$router.push({
					path:'/content/myPartners'
				})
			}
		}
	}
</script>