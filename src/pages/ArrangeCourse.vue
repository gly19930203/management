<template>
  <div>
		<el-form class="refresh">
			<el-form-item>
				<el-button size="small" type="primary" icon="el-icon-refresh">刷新</el-button>
				<el-button size="small" type="primary" icon="el-icon-download">导出课表</el-button>
        <el-date-picker v-model="dateSelect" type="date" placeholder="选择日期" size="small" value-format="yyyy-MM-dd" @change="dateChange" style="margin-left:20px"> </el-date-picker>
			</el-form-item>
		</el-form>
   <div class="classroom">
    <ul>  
      <li class="header">A1教室(30座位)</li>  
      <li class="room" @drop='drop($event)' @dragover='allowDrop($event)'></li>
    </ul>  
    <ul>  
      <li class="header">A2教室(40座位)</li>  
      <li class="room" @drop='drop($event)' @dragover='allowDrop($event)'></li>
    </ul>  
    <ul>  
      <li class="header">A3教室</li>  
      <li class="room" @drop='drop($event)' @dragover='allowDrop($event)'></li>
    </ul>  
    <ul>  
      <li class="header">A4教室</li>  
      <li class="room" @drop='drop($event)' @dragover='allowDrop($event)'></li>
    </ul>  
    <ul>  
      <li class="header">A5教室(35座位)</li>  
      <li class="room" @drop='drop($event)' @dragover='allowDrop($event)'></li>
    </ul>
    <ul>  
      <li class="header">A5教室(35座位)</li>  
      <li class="room" @drop='drop($event)' @dragover='allowDrop($event)'></li>
    </ul>
   </div>
   <table class="bordered">
    <tr>  
      <th>学科</th>  
      <th>年级</th>  
      <th>授课老师</th>  
      <th>学生数量</th>  
      <th>上课时间</th>  
      <th>可排拖动</th>  
    </tr>  
    <tr v-for="(item,index) in tableData3" :key="index">   
      <td>{{item.subject}}</td>
      <td>{{item.grade}}</td>
      <td>{{item.teacher}}</td>
      <td>{{item.number}}</td>
      <td>{{item.period}}</td>
      <td class="content"><button class="button" draggable='true' @dragstart='drag($event)'  v-if="item.period">{{item.content}}</button></td>
    </tr>
   </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
let dom = null
export default {
  data () {
    return {
      dateSelect: null,
      tableData:[{A1:"",A2:"",A3:"",A4:""}],
      tableData2:[{B1:"",B2:"",B3:"",B4:""}],
      tableData3:[{subject:"英语",grade:"四年级",teacher:"葛军",number:"35",period:"15：00-17:00",content:"15：00-17:00 四年级 英语"},
      {subject:"奥数",grade:"三年级",teacher:"孙琦",number:"40",period:"7：00-8:00",content:"7：00-8:00 三年级 奥数"},
      {subject:"aa",grade:"三年级",teacher:"孙琦",number:"40",period:"9：00-10:00",content:"9：00-10:00 三年级 aa"},
      {subject:"bb",grade:"三年级",teacher:"孙琦",number:"40",period:""},
      {subject:"cc",grade:"三年级",teacher:"孙琦",number:"40",period:""},
      {subject:"dd",grade:"三年级",teacher:"孙琦",number:"40",period:""},
      {subject:"ee",grade:"三年级",teacher:"孙琦",number:"40",period:""},
      {subject:"ff",grade:"三年级",teacher:"孙琦",number:"40",period:""},
      {subject:"gg",grade:"三年级",teacher:"孙琦",number:"40",period:""},
      {subject:"hh",grade:"三年级",teacher:"孙琦",number:"40",period:"9：00-10:00",content:"9：00-10:00 三年级 hh"}]
    }
  },
  components: {
　　draggable
  },
  mounted() {
    var date = new Date();
    this.dateSelect = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  },
  methods:{
    // 选择日期
    dateChange(value){
      console.log(value)
    },
    drag:function(event){
      // var cells = event.target.cells;
      // dom = document.createElement("button");
      // dom.className = "button";
      // dom.draggable = true;
      // dom.innerHTML = event.target.cells[4].innerText+"&nbsp"+event.target.cells[1].innerText+"&nbsp"+event.target.cells[0].innerText;
      dom = event.currentTarget;
    },
    drop:function(event){
      if(event.toElement.className != "button"){
        event.target.appendChild(dom);
        event.preventDefault();
      }
    },
    allowDrop:function(event){
      event.preventDefault();
    }
    
  }
}
</script>

<style lang="less">
.bordered{  *border-collapse: collapse; /* IE7 and lower */ border-spacing: 0; min-width: 936px;width: 100%; margin-bottom: 15px;border: solid #ccc 1px; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; -webkit-box-shadow: 0 1px 1px #ccc; -moz-box-shadow: 0 1px 1px #ccc; box-shadow: 0 1px 1px #ccc; } 
.bordered tr{ -o-transition: all 0.1s ease-in-out; -webkit-transition: all 0.1s ease-in-out; -moz-transition: all 0.1s ease-in-out; -ms-transition: all 0.1s ease-in-out; transition: all 0.1s ease-in-out;	} 
.bordered td, .bordered th,.classroom li { border-left: 1px solid #ccc; border-top: 1px solid #ccc; padding: 10px; text-align: left; vertical-align: text-top;} 
.bordered td { line-height: 21px;}
.bordered th,.classroom li.header {font-weight: bold; background-color: #dce9f9; background-image: -webkit-gradient(linear, left top, left bottom, from(#ebf3fc), to(#dce9f9)); background-image: -webkit-linear-gradient(top, #ebf3fc, #dce9f9); background-image: -moz-linear-gradient(top, #ebf3fc, #dce9f9); background-image: -ms-linear-gradient(top, #ebf3fc, #dce9f9); background-image: -o-linear-gradient(top, #ebf3fc, #dce9f9); background-image: linear-gradient(top, #ebf3fc, #dce9f9); filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#ebf3fc, endColorstr=#dce9f9); -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#ebf3fc, endColorstr=#dce9f9)"; -webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset; -moz-box-shadow:0 1px 0 rgba(255,255,255,.8) inset; box-shadow: 0 1px 0 rgba(255,255,255,.8) inset; border-top: none; text-shadow: 0 1px 0 rgba(255,255,255,.5); } 
.bordered td:first-child, .bordered th:first-child { border-left: none;} 
.bordered th:first-child { -moz-border-radius: 6px 0 0 0; -webkit-border-radius: 6px 0 0 0; border-radius: 6px 0 0 0; } 
.bordered th:last-child { -moz-border-radius: 0 6px 0 0; -webkit-border-radius: 0 6px 0 0; border-radius: 0 6px 0 0; } 
.bordered tr:last-child td:first-child { -moz-border-radius: 0 0 0 6px; -webkit-border-radius: 0 0 0 6px; border-radius: 0 0 0 6px; } 
.bordered tr:last-child td:last-child { -moz-border-radius: 0 0 6px 0; -webkit-border-radius: 0 0 6px 0; border-radius: 0 0 6px 0; }
.bordered .content{width: 250px;}
.bordered .content .button{margin-bottom: 0;}
.classroom{ min-width: 936px;width: 100%;display: flex;flex-direction: row;justify-content: flex-start;flex-flow: wrap;}
.classroom ul{margin: 0 10px 15px 0;border: 1px solid #ccc;border-radius: 6px;box-shadow: 0 1px 1px #ccc;}
.classroom ul li{width: 240px;border-left: none}
.classroom li.header {border-radius: 6px 6px 0 0 ; }
.classroom li.room{height: 200px;}
.button{background-color: #dce9f9;color: #000;border: 1px solid #dce9f9;border-radius: 4px;cursor: pointer;margin-bottom: 10px;display: block;}
</style>
