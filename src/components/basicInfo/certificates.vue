<template>
	<div style="overflow:scroll;height:100%">
		<h3 class="form-title">相关证件</h3>
		<Form :label-width="250" class="certificates">
			<FormItem label="是否三证合一">
	            <Checkbox v-model="ifThreeOne"></Checkbox>
	        </FormItem>
			<FormItem label="营业执照注册号或统一社会信用代码" class="col12">
				<Input></Input>
			</FormItem>
			<FormItem label="上传证件图" >
				<div class="upload_ID" >
					<div class="upload_img" style="width:290px;height:215px;line-height:215px;">+ 营业执照<div class="upload_hover" style="line-height:215px"><Icon type="ios-cloud-upload-outline"></Icon></div></div>
					<span>示例</span>
					<img src="./../../assets/imgs/zhizhao.png" height="129" width="174">
				</div>
			</FormItem>
			<FormItem v-if="!ifThreeOne" label="组织机构代码" class="col12">
				<Input></Input>
			</FormItem>
			<FormItem v-if="!ifThreeOne" label="上传证件图" >
				<div class="upload_ID" >
					<div class="upload_img" style="width:290px;height:205px;line-height:205px;">+ 组织机构代码证<div class="upload_hover" style="line-height:205px"><Icon type="ios-cloud-upload-outline"></Icon></div></div>
					<span>示例</span>
					<img src="./../../assets/imgs/zuzhi.jpg" height="123" width="174">
				</div>
			</FormItem>
			<FormItem v-if="!ifThreeOne" label="税务登记号" class="col12">
				<Input></Input>
			</FormItem>
			<FormItem v-if="!ifThreeOne" label="上传证件图" >
				<div class="upload_ID" >
					<div class="upload_img" style="width:290px;height:192px;line-height:192px;">+税务登记证<div class="upload_hover" style="line-height:192px"><Icon type="ios-cloud-upload-outline"></Icon></div></div>
					<span>示例</span>
					<img src="./../../assets/imgs/shuiwu.jpg" height="115" width="174">
				</div>
			</FormItem>
			<FormItem label="" >
			<dl class="note" >
	        	<dt>注：</dt>
	        	<dd>1. 需上传清晰的证件</dd>
	        	<dd>2. 照片不超过5MB，支持格式jpg，jpeg，png</dd>
	        </dl>
	        </FormItem>
		</Form>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				ifThreeOne:false
			}
		}
	}
</script>
<style>
	.certificates .upload_ID{
		width:100%;
		text-align: left;
	}
	.certificates .upload_ID .upload_img{
		display: inline-block;
		margin-right:20px;
	}
	.certificates .upload_ID .upload_img .upload_hover{
		width:100%;
		height:100%;
		text-align: center;
	}
	.certificates .upload_ID img{
		display: inline-block;
		margin-left: 20px;
	}
	.certificates .upload_ID span ,.certificates .upload_ID img{
		vertical-align: middle
	}
</style>