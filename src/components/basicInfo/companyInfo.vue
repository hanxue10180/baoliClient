<template>
	<div style="height:100%">
		<h3 class="form-title">公司信息</h3>
		<Form :modal="basicInfo" :label-width="120" class="companyForm" >	
			<FormItem label="联系人" class="col12">
				<Input v-model="basicInfo.companyName"></Input>
			</FormItem>
			<FormItem label="邮箱" class="col12">
				<span>239484848@162.com</span>
			</FormItem>
			<FormItem label="企业名称" class="col12">
				<Input v-model="basicInfo.companyName"></Input>
			</FormItem>
			<FormItem label="企业类型" class="col12">
				<Select v-model="basicInfo.companyType">
	                <Option value="1">国有企业</Option>
	                <Option value="2">外资企业</Option>
	                <Option value="3">民营企业</Option>
	            </Select>
			</FormItem>	
			<FormItem label="实缴资本" class="col12">
				<Input v-model="basicInfo.paidInCapital"></Input>
			</FormItem>	
			<FormItem label="所属行业" class="col12">
				<Select v-model="basicInfo.subordinateIndustry">
	                <Option value="1">农业</Option>
	                <Option value="2">林业</Option>
	            </Select>
			</FormItem>		
			<FormItem label="员工人数" class="col12">
				<Input></Input>
			</FormItem>	
			<FormItem label="手机号" class="col12">
				<Input></Input>
			</FormItem>	
			<FormItem label="特殊资质" >
				<Input type="textarea"></Input>
			</FormItem>	
			<FormItem label="注册地址">
				<Input></Input>
			</FormItem>	
			<FormItem label="经营范围" >
				<Input type="textarea" ></Input>
			</FormItem>	
		</Form>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				basicInfo:{
					companyName:'', 
					companyType:'1',
					systemType:'1',
					ifThreeInOne:0,
					legalRepresentative:'',
					legalRepresentativeIDCard:[],
					actualController:'',
					actualControllerIDCard:[],
					logoImg:'',
					paidInCapital:'',
					subordinateIndustry:1,
					businessLicenseRegistrationNo:'',
					organizationCode:'',
					taxRegistrationNumber:'',
					companyQualification:[],
					officeAddress:'',
					specialQualification:'',
					registeredAddress:'',
					registeredCapital:'1',
					registeredCapitalCurrent:'',
					registeredDate:'',
					employeesNumber:'',
					businessScope:'',
					historicalEvolution:'',
					remarks:'',
					affiliatedFactoringEnterpriseId:'',
					projectPersonnelId:''
				}
			}
		}
	}
</script>
<style>
    .companyForm{
		padding-right: 20px;
		height:95%;
		overflow-y: scroll;
	}
	textarea{
		resize: none;
	}
</style>
