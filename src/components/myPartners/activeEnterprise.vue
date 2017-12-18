<template>
	<Card style="width:50%;margin:20px;">
		<p slot="title">激活企业</p>
		<div style="overflow:hidden">
			<Form :label-width="80">
		        <FormItem label="激活码">
		            <Input></Input>
		        </FormItem>
		    </Form>
			<Button type="primary" class="pull-right">激活企业</Button>
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