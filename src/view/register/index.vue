<template>
	<div class="register">
		<video autoplay="autoplay" class="bgvideo" loop >
	    	<source src='./../video/bgvideo.mp4' type="video/mp4">
			<source src="./../video/bgvideo.webm" type="video/webm">
	    </video>
	    <div class="loginLayer">
	    	<div class="loginDiv">
	    		<p style="color:rgba(140, 7, 118,0.5);font-weight:bold;font-size:28px;">欢迎加入我们 </p>
		    	<Input type="text" placeholder="邮箱" style="background-color: rgba(0,0,0,0.2); margin-bottom: 20px; margin-top: 20px;border-radius:25px">
		    		<Icon type="ios-email-outline" slot="prepend"></Icon>
		    	</Input>
		    	<Input type="password" placeholder="密码" style="background-color: rgba(0,0,0,0.2); margin-bottom: 20px;border-radius:25px">
		    		<Icon type="ios-locked-outline" slot="prepend"></Icon>
		    	</Input>
		    	<Input type="password" placeholder="确认密码" style="background-color: rgba(0,0,0,0.2); margin-bottom: 20px;border-radius:25px">
		    		<Icon type="ios-locked-outline" slot="prepend"></Icon>
		    	</Input>
		    	<Input placeholder="邀请码" style="background-color: rgba(0,0,0,0.2); margin-bottom: 20px;border-radius:25px">
		    		<Icon type="ios-people-outline" slot="prepend"></Icon>
		    	</Input>
				<Input placeholder="验证码" style="background-color: rgba(0,0,0,0.2); margin-bottom: 20px;border-radius:25px;width:60%">
		    		<Icon type="happy-outline" slot="prepend"></Icon>
		    	</Input>
		    	<RadioGroup v-model="ctype" size="large">
			        <Radio label="我是采购商">
			            <Icon type="android-contact"></Icon>
			            <span>我是采购商</span>
			        </Radio>
			        <Radio label="我是供应商" >
			            <Icon type="android-contact"></Icon>
			            <span>我是供应商</span>
			        </Radio>
			    </RadioGroup>
		    	<Button type="primary" shape="circle" style="background:rgba(140, 7, 118,0.7);border: none;font-size: 18px;margin-top:20px;color:#fff" v-on:click="register" long >立 即 注 册</Button>
		    	<p style="text-align:right; text-decoration: underline;margin-top:5px;cursor:pointer;" v-on:click="login">已有账号，点击登录</p>
	    	</div>
	    </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				ctype:'我是采购商'
			}
		},
		methods:{
			register(){
				this.$router.push({
					path:'/content'
				})
			},
			login(){
				this.$router.push({
					path:'/'
				})
			}
		}
	}
</script>
<style lange="less">
	.register{
		height:100%;
	}
	.register *{
		color:#8c0776;
	}
	.register button span{
		color:#fff;
	}
	.register .ivu-radio-inner:after {
		background-color: #8c0776;
	}
	.register .ivu-radio-checked .ivu-radio-inner {
	    border-color: #8c0776;
	}
	.register .ivu-radio-checked:hover .ivu-radio-inner {
	    border-color: #8c0776;
	}
</style>