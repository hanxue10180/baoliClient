<template>
	<div class="login">
		<video autoplay="autoplay" class="bgvideo" loop >
	    	<source src='./../video/bgvideo.mp4' type="video/mp4">
			<source src="./../video/bgvideo.webm" type="video/webm">
	    </video>
	    <div class="loginLayer">
	    	<div class="loginDiv">
	    		<p style="color:rgba(43, 133, 228,0.5);font-weight:bold;font-size:28px;">欢 迎 使 用 </p>
		    	<Input type="text" placeholder="用户名" style="background-color: rgba(0,0,0,0.2); margin-bottom: 20px; margin-top: 20px;border-radius:25px">
		    		<Icon type="ios-person-outline" slot="prepend"></Icon>
		    	</Input>
		    	<Input type="password" placeholder="密码" style="background-color: rgba(0,0,0,0.2); margin-bottom: 20px;border-radius:25px">
		    		<Icon type="ios-locked-outline" slot="prepend"></Icon>
		    	</Input>
		    	<Button type="primary" shape="circle" style="background: rgba(43, 133, 228,0.7);border: none;font-size: 18px;margin-top:20px;" v-on:click="login" long >登 录</Button>
		    	<p style="text-align:right; text-decoration: underline;margin-top:5px;cursor:pointer;" v-on:click="register">没有账号，立即注册</p>
	    	</div>
	    </div>
	</div>
</template>
<script>
	export default{
		methods:{
			login(){
				this.$router.push({
					path:'/content'
				})
			},
			register(){
				this.$router.push({
					path:'/register'
				})
			}
		}
	}
</script>
<style>
	.login{
		height:100%;
	}
	.login *{
		color:#2d8cf0;
	}
	.login button span{
		color:#fff;
	}
	.bgvideo{
		position: fixed; 
		right: 0; 
		bottom: 0; 
		min-width: 100%; 
		min-height: 100%; 
		width: auto; 
		height: auto; 
		z-index: -100; 
	}
	.loginLayer{
		width:100%;
		height:100%;
		display:flex;
		justify-content:center;
		align-items:center;
		position:absolute;
		z-index:3
	}
	.loginDiv{
		width:500px;
		border-radius:8px;
		text-align: center;
		padding:30px 50px;
		background: rgba(255,255,255,0.4) ;
	}
	.loginLayer .loginDiv button{
    	margin-bottom: 20px;
    	height:40px;
	}
	.loginLayer .loginDiv input{
		background-color: inherit !important;
		border:none !important;
		color:#fff !important;
		height:45px;
		font-size: 20px;
		border-radius:25px
	}
	.loginLayer .loginDiv .ivu-input-group-prepend {
	    background-color: inherit;
	    border: none;
	    color: #fff;
	    height:45px;
		font-size: 20px;
		border-radius:20px
	}

</style>