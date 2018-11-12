<template>
     <div class="form1">
            <ul class="content">
                <li>
                    <label>姓名</label>
                    <input type="text" placeholder="请输入您的姓名" v-model="dialogForm.name"/>
                </li>
                <li>
                    <label>手机</label>
                    <input type="number" pattern="[0-9]*" placeholder="请输入您的手机号" v-model="dialogForm.phone"/>
                </li>
                <li class="relative">
                    <label>验证码</label>
                    <input type="number" pattern="[0-9]*" v-model="dialogForm.verification"/>
                    <div class="verify absolute Mini" v-bind:class="verify=='获取验证码'?'btn-yellow':'btn-grey'" @click="getVerifyCode">{{verify}}</div>
                </li>
            </ul>
        </div>
        
</template>
<script>

var phoneNumReg = new RegExp(/^1[34578]\d{9}$/);
export default {
    data(){
        return{
			verify:"获取验证码"
		}
	},
	props:{
		dialogForm:Object
	},
	mounted(){
		
	},
    methods:{
		getVerifyCode(){
			this.$emit("getData",this.verify,this.dialogForm)
			if(!this.dialogForm.phone){
				this.$message.error('手机号不能为空！');
				return;
			}
			if(!(phoneNumReg.test(this.dialogForm.phone))){
				this.$message.error('手机号码格式不正确！');
				return;
			}
			if(this.verify == "获取验证码"){
				var count = 60;
				var timeCount = setInterval(()=>{
					if(count>0){
						this.verify = count +"s";
						count --;
					}else{
						this.verify = "获取验证码";
						clearInterval(timeCount);
					}
				},1000)
			}
		},
    }
}
</script>
<style  lang="less">
.form1{
	width: 750px;
	height: 690px;
	background-size: contain;
}
.form1 ul.content{
	padding-top:23px;
}
ul.content{
	width: 570px;
	margin: 0 auto;
	padding-left: 0;
}
ul.content li{
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	height: 80px;
	line-height: 80px;
}
ul.content li label{
	width: 33%;
	text-align: left;
	padding-left: 30px;
	font-size: 32px;
}
ul.content li input[type=text],ul.content li input[type=number]{
	width: 67%;
	margin: 0;
	padding: 0;
	text-align: left;
    border: 1px solid #cccccc;
    border-radius: 8px;
	height: 50px;
	line-height: 50px;
	align-self: center;
    background: inherit;
    font-size: 26px;
}
input::-webkit-input-placeholder {
	color: #c9c8c8;
}

.verify.absolute.btn-yellow{
	background: yellow;
	background-size: contain;
}
.verify.absolute.btn-grey{
	background: grey;
	background-size: contain;
}
.verify.absolute{
	width: 200px;
	height: 65px;
	line-height: 65px;
	right: -10px;
	top: -5px;
	font-size: 26px;
	text-align: center;
	cursor: pointer;
}
</style>