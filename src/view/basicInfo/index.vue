<template>
	<div class="basicInfo">
		<div style="height:50px;margin-left:50px;">
			<Steps :current="current">
				<Step title="公司信息"></Step>
				<Step title="法定代表人"></Step>
				<Step title="实际控制人"></Step>
				<Step title="相关证件"></Step>
			</Steps>
		</div>
		<div class="current-view">
			<companyInfo v-if="current==0"></companyInfo>
			<legalRepresentative v-if="current==1"></legalRepresentative>
			<actualController v-if="current==2"></actualController>
			<certificates v-if="current==3"></certificates>
		</div>
		<div class="stepbtn" style="height:40px;">
			<Button type="primary" :disabled="current==0" style="float:left" v-on:click="lastStep">上一步</Button>
			<Button type="primary" :disabled="current==3" style="float:right" v-on:click="nextStep">下一步</Button>
		</div>
	</div>
</template>
<script>
	import companyInfo from './../../components/basicInfo/companyInfo.vue'
	import legalRepresentative from './../../components/basicInfo/legalRepresentative.vue'
	import actualController from './../../components/basicInfo/actualController.vue'
	import certificates from './../../components/basicInfo/certificates.vue'
	export default{
		name:'basicInfoRouter' ,
		data(){
			return {
				current:0 //当前阶段
			}
		},
		components:{
			companyInfo,
			legalRepresentative,
			actualController,
			certificates
		},
		methods:{
			lastStep(){
				this.current -=1;
			},
			nextStep(){
				this.current+=1;
			}
		}
	}
</script>
<style>
	.basicInfo{
		padding:20px;
		display: flex;
		height: 100%;
		flex-direction: column;
		box-sizing: border-box;
	}
	.current-view{
		height:700px;
		width:95%;
		margin:0 auto;
		flex:1;
		overflow: hidden;
		background: #fff;
		padding:20px;
		border-radius: 5px;
		margin-bottom: 20px;
		border:1px solid #e4e4e4;
	}
	.basicInfo .ivu-steps .ivu-steps-title,.basicInfo .ivu-steps .ivu-steps-head{
		background:#f9f9f9;
	}
	::-webkit-scrollbar {
	    display: none;
	}
</style>