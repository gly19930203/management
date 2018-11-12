<template>
    <div class="selectone">
        <button @click="showNotes">提交</button>
        <verify :dialogForm="dialogForm" @getData="getData" ref="verify"></verify>
    </div>
</template>
<script>
import Verify from '../components/verifycode/Verify'
var phoneNumReg = new RegExp(/^1[34578]\d{9}$/);
export default {
    data(){
        return{
            dialogForm:{
                name:null,
                phone:null,
                verification:null
            }
        }
    },
    components:{
        Verify
    },
    methods:{
		getData(value,value2){
            console.log(value)
            console.log(value2)
        },
        showNotes(){
            this.$refs.verify.getVerifyCode();
        }
    }
}
</script>


