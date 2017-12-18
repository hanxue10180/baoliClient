<template>
	<div class="homepage">
		<Card class="top_note basic">
			<p style="text-align:center">如有任何问题请联系您的专属客服人员:张晓明 手机号:13929999999</p>
		</Card>
		<Row :gutter="48" style="margin-bottom:10px">
			<Col span="6">
				<Card class="card">
			        <div>
						<div class="card_left">
							<img src="./../../assets/imgs/homepage/info.png" height="65" width="65">
						</div>
						<div class="card_right">
							<p class="card_title">信息完善程度</p>
							<p class="card_num">80%</p>
						</div>
			        </div>
			    </Card>
			</Col>
			<Col span="6">
			    <Card class="card" >
			        <div>
			        	<div class="card_left">
							<img src="./../../assets/imgs/homepage/rongzi.png" height="65" width="65">
						</div>
						<div class="card_right">
							<p class="card_title">融资金额</p>
							<p class="card_num">1290万元</p>
						</div>
			        </div>
			    </Card>
		    </Col>
		    <Col span="6">
			    <Card class="card">
			        <div>
			        	<div class="card_left" style="margin-top:13px;">
							<img src="./../../assets/imgs/homepage/xiangmu.png" height="60" width="65">
						</div>
						<div class="card_right">
							<p class="card_title">融资项目</p>
							<p class="card_num">7个</p>
						</div>
			        </div>
			    </Card>
		    </Col>
		    <Col span="6">
			    <Card class="card">
			        <div>
			        	<div class="card_left">
							<img src="./../../assets/imgs/homepage/hezuo.png" height="65" width="65">
						</div>
						<div class="card_right">
							<p class="card_title">合作企业</p>
							<p class="card_num">2个</p>
						</div>
			        </div>
			    </Card>
		    </Col>
	    </Row>
	    <Card class="basic">
			<p slot="title">马上融资</p>
			<Steps :current="current">
		        <Step title="完善资料" ></Step>
		        <Step title="邀请合伙人" ></Step>
		        <Step title="额度申请" ></Step>
		        <Step title="贸易发起" ></Step>
		        <Step title="申请融资" ></Step>
		    </Steps>
	    </Card>
	    <Card class="basic">
	    	<p slot="title">快捷入口</p>
	    	<div class="task">
	    		<div class="task_item">
	    			<Badge count="999">
				        <img src="./../../assets/imgs/homepage/task.png" height="100" width="100" />
				    </Badge>
				    <p>贸易发起</p>
	    		</div>
	    		<div class="task_item">
	    			<Badge count="9">
				        <img src="./../../assets/imgs/homepage/task.png" height="100" width="100" />
				    </Badge>
				    <p>邀请合伙人</p>
	    		</div>
	    		<div class="task_item">
	    			<Badge count="0">
				        <img src="./../../assets/imgs/homepage/task.png" height="100" width="100" />
				    </Badge>
				    <p>企业激活</p>
	    		</div>
	    		<div class="task_item">
	    			<Badge count="1">
				        <img src="./../../assets/imgs/homepage/task.png" height="100" width="100" />
				    </Badge>
				    <p>合同处理</p>
	    		</div>
	    		<div class="task_item">
	    			<Badge count="0">
				        <img src="./../../assets/imgs/homepage/task.png" height="100" width="100" />
				    </Badge>
				    <p>应收处理</p>
	    		</div>
	    		<div class="task_item">
	    			<Badge count="0">
				        <img src="./../../assets/imgs/homepage/task.png" height="100" width="100" />
				    </Badge>
				    <p>应付处理</p>
	    		</div>
	    		<div class="task_item">
	    			<Badge count="5">
				        <img src="./../../assets/imgs/homepage/task.png" height="100" width="100" />
				    </Badge>
				    <p>未激活企业</p>
	    		</div>
	    	</div>
	    </Card>
	    <Card class="basic">
	    	<p slot="title">消息通知</p>
			<div style="padding:10px;">
				<div class="info_icon">
					<span class="noread"><Icon type="android-notifications"></Icon> 未读</span>
					<span class="readed"><Icon  type="android-notifications"></Icon> 已读</span>
				</div>
				<ul class="info_list">
					<li>
						<span class="noread"><Icon  type="android-notifications"></Icon> 您的融资申请[998000939912]后台人员已经受理,请耐心等待审核.如有任何问题业务人员会和您联系 </span>
						<span class="pull-right">2017-10-21</span>
					</li>
					<li>
						<span class="readed"><Icon  type="android-notifications"></Icon> 您的合同[89080938923432]对方已进行修改,请您进行再次确认</span>
						<span class="pull-right">2017-10-21</span>
					</li>
				</ul>
			</div>
	    </Card>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				current:1
			}
		}
	}
</script>
<style>
	.homepage{
		padding:20px 10%;
	}
	.homepage .basic{
		width:100%;
		margin-bottom:15px;
	}
	.homepage .top_note .ivu-card-body{
		padding:0;
		height:30px;
		line-height:30px;
		font-size:12px;
	}
	.card .ivu-card-body>div{
		overflow: hidden;
		height:100%;
	}
	.card .card_left{
		display: inline-block;
		width:auto;
		margin-top: 10px;
	}
	.card .card_right{
		display: inline-block;
		width:auto;
		vertical-align: top;
		margin-left:10px;
	}
	.card{
		height:127px;
		cursor: pointer;
	}
	.card .card_title{
		font-size:18px;
		color:#888;
		margin-top:5px;
	}
	.card .card_num{
		font-size:20px;
		color:#666;
		margin-top:20px;
		font-weight: bold
	}
	.homepage .ivu-steps{
		margin:10px;
	}
	.homepage  .ivu-card-head p {
		font-size: 15px;
	}
	.homepage .ivu-steps .ivu-steps-head-inner>.ivu-steps-icon.ivu-icon{
		font-size: 35px;
	}
	.homepage .ivu-steps .ivu-steps-head-inner>.ivu-steps-icon{
		line-height: 40px;
	}
	.homepage .ivu-steps .ivu-steps-title{
		margin-top: 10px;
		letter-spacing: 5px;
		font-weight: normal;
	}
	.homepage .ivu-steps .ivu-steps-tail{
		top:19px;
	}
	.homepage .ivu-steps .ivu-steps-head-inner{
		width:40px;
		height: 40px;
		line-height: 40px;
		font-size:25px;
	}
	.homepage .task{
		padding-left:20px;
	}
	.homepage .task .task_item{
		display: inline-block;
		width:100px;
		height:auto;
		margin-right:40px;
		cursor: pointer;
	}
	.homepage .task .task_item p{
		text-align: center;
		width:85%;
	}
	.homepage .task .task_item .ivu-badge-count{
		top:0;
		right:20px;
	}
	.noread i{
		color:#2D8CF0;
	}
	.readed i{
		color:#999;
	}
	.homepage .info_icon span{
		font-size: 14px;
		display: inline-block;
		margin-right: 15px;
	}
	.noread i,.readed i{
		font-size:16px;
		margin-right: 5px;
		display: inline-block;
		margin-top: 3px;
	}
	.noread{
		color:#333;
	}
	.reaeded{
		color:#999;
	}
	.noread , .readed{
		display: inline-block;
	}
	.homepage .info_list{
		margin-top:10px;
	}
	.homepage .info_list li{
		height:30px;
		line-height: 30px;
		cursor: pointer;
	}
	.info_list li .pull-right{
		color:#999;
	}
</style>