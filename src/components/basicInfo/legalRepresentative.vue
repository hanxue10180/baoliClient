<template>
	<div>
		<h3 class="form-title">法定代表人</h3>
		<Form :label-width="120">
			<FormItem label="法定代表人" class="col12">
				<Input ></Input>
			</FormItem>
			<FormItem label="上传身份证截图" >
				<div >
					<div class="upload_ID" >
						<div class="upload_img">+ 添加人像面
						<div class="upload_hover"><Icon type="ios-cloud-upload-outline"></Icon></div>
						</div>
						<p>示例</p>
						<img src="./../../assets/imgs/timg1.jpg" height="38" width="61">
					</div>
					<div class="upload_ID">
						<div class="upload_img">+ 添加非人像面<div class="upload_hover"><Icon type="ios-cloud-upload-outline"></Icon></div></div>
						<p>示例</p>
						<img src="./../../assets/imgs/timg2.png" height="38" width="61">
					</div>
					<dl class="note" >
			        	<dt>注：</dt>
			        	<dd>1. 需上传清晰的身份证正面、反面共2张照片</dd>
			        	<dd>2. 照片不超过5MB，支持格式jpg，jpeg，png</dd>
			        </dl>
				</div>
			</FormItem>
		</Form>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style>
	.upload_ID{
		width:200px;
		display:inline-block;
		margin-right:30px;
		text-align: center;
		cursor:pointer;
	}
	.upload_ID .upload_img{
		border:1px solid #ddd;
		background-color: #f8f8f8;
		font-size: 14px;
		position: relative;
		z-index:1;
	}
	.upload_ID .upload_img,.upload_ID .upload_img .upload_hover{
		line-height:123px;
		height:123px;
		width:198px;
		text-align: center;
	}
	.upload_ID .upload_img .upload_hover{
		font-size:50px;
		color:#fff;
		display: none;
		position: absolute;
		top:0;
		left:0;
		background-color: rgba(0,0,0,0.3);
		z-index: 300;
		border:2px dotted #ccc;
	}
	.upload_ID .upload_img:hover .upload_hover{
		display: block;
	}
	.upload_ID .upload_img:hover{
		color:rgba(0,0,0,0);
	}
	.upload_ID p{
		text-align: center;
	}
	.note *{
		font-size: 12px;
    	color: #999;
    	height:20px;
    	line-height: 20px;
	}
</style>