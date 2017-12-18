<template>
	<Card style="width:550px;margin:20px;overflow:hidden">
        <p slot="title">
            修改密码
        </p>
        <Form :label-width="120">
            <FormItem label="手机号" >
				<span>13752628899</span>
			</FormItem>
			<FormItem label="手机验证码" >
				<Input style="width:55%;margin-right:20px;"></Input>
				<Button type="primary">发送手机验证码</Button>
			</FormItem>
			<FormItem label="新密码" >
				<Input></Input>
			</FormItem>
			<FormItem label="确认密码" >
				<Input></Input>
			</FormItem>
			<Button type="primary" style="width: 200px;margin-left: 150px;">提交</Button>
        </Form>
    </Card>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>