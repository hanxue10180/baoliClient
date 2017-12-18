<template>
	<div>
		<h3 class="form-title">实际控制人</h3>
		<Form :label-width="120">
			<FormItem label="实际控制人" class="col12">
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