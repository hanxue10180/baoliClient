<template>
	<div>
		<Button v-on:click="back">返回</Button>
	</div>
</template>
<script>
	export default{
		methods:{
			back(){
				this.$router.push({
					path:'/content/accounts'
				})
			}
		}
	}
</script>