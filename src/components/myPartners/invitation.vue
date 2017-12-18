<template>
	<Card style="width:50%;margin:20px;">
		<p slot="title">发起邀请</p>
		<div style="overflow:hidden">
			<Form :label-width="120" >	
				<FormItem label="企业名称" >
					<Input></Input>
				</FormItem>
				<FormItem label="被邀请人" >
					<Input></Input>
				</FormItem>	
				<FormItem label="电子邮箱" >
					<Input></Input>
				</FormItem>		
				<FormItem label="手机号" >
					<Input></Input>
				</FormItem>	
				<FormItem label="邀请人企业名称" >
					<Input ></Input>
				</FormItem>	
				<FormItem label="邀请人" >
					<Input></Input>
				</FormItem>	
			</Form>
			<Button type="ghost" v-on:click="back" >返回</Button>
			<Button type="primary" class="pull-right">发起邀请</Button>
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