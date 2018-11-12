<template>
  <div id="content">
		<el-container v-show="container">
      <el-header>
				<div class="left">
					<span class="logo" v-show="!isCollapse">
						<img src="./assets/logo.png">
					</span>
					<i class="iconfont icon-menu" @click="asideChange"></i>
				</div>
				<div class="right">
					<img src="./assets/headimg.png">
					<p class="name">aaa</p>
          <el-dropdown trigger="click" @command="handleHeadCommand">
						<span class="el-dropdown-link">
						<i class="iconfont icon-tuichu"></i>
					</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="退出登录">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-header>
		  <el-container>
        <el-aside width="auto">
          <el-menu  class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened :default-active="defaultActive" background-color="#364150" text-color="#d3d8e0" active-text-color="#d3d8e0">
            <el-submenu index="1">
              <template slot="title">
                <i class="iconfont icon-menu"></i>
                <span slot="title">排课管理</span>
              </template>
              <el-menu-item-group>
                <router-link :to="{name:'ArrangeCourse'}"><el-menu-item index="1-1">排课</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="iconfont icon-huiyuanguanli"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <router-link :to="{name:'SelectOne'}"><el-menu-item index="2-1">选项1</el-menu-item></router-link>
              </el-menu-item-group>
              <el-menu-item-group>
                <router-link :to="{name:'Count'}"><el-menu-item index="2-2">选项2</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
					<router-view></router-view>
				</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
			container: true,
			isCollapse: false,
      defaultActive: "1-1",
    }
  },
  methods:{
    asideChange() {
      this.isCollapse = !this.isCollapse;
				this.defaultActive = location.href.split("/")[3];
    },
    //操作
    handleHeadCommand(command) {
      
    },
  }
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 235px;
  height: 100%;
}
.el-menu--collapse{
  height: 100%;
}
.el-submenu {
  border-top: 1px solid #4e5d6f;
  .el-menu {
    a{
	    text-decoration: none;
    }
    .el-menu-item.is-active,.el-menu-item:hover{
      background-color: #2a3546 !important;
    }
    .el-menu-item {
      color: #8c96a7 !important;
    }
    .el-menu-item-group__title{
      padding: 0;
    }
  }
  .el-submenu__title {
    .iconfont {
      color: #8c96a7;
      font-size: 24px;
    }
  }
}
.el-submenu.is-active {
  .el-submenu__title {
    background-color: #56b430 !important;
    .iconfont,.el-icon-arrow-down {
      color: #d3d8e0;
    }
  }
}
.el-menu--vertical {
  left: 59px !important;
  .el-menu--popup {
    padding: 0;
    .el-menu-item {
      color: #8c96a7 !important;
    }
    .el-menu-item.is-active,.el-menu-item:hover {
      background-color: #2a3546 !important;
    }
    .el-menu-item-group__title{
      padding: 0;
    }
  }
}
</style>
