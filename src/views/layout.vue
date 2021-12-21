<template>
    <div>
        <el-container style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;overflow: hidden;">
            <el-header class="d-flex align-items-center" style="background: #545c64;">
                <a class="h5 text-light mb-0 mr-auto">{{$conf.logo}}</a>
                <el-menu :default-active="activeIndex"  mode="horizontal" router   background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
                     <el-menu-item index="/index/index">首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">产品页</template>
                            <el-menu-item index="/product/product">产品一</el-menu-item>
                            <el-menu-item index="2-2">产品二</el-menu-item>
                            <el-menu-item index="2-3">产品三</el-menu-item>
                        </el-submenu>
                    <el-menu-item index="/Journalism/Journalism">新闻页</el-menu-item>
                    <el-menu-item index="/About/About" >关于我们</el-menu-item>
                    <el-menu-item index="/message/message">留言</el-menu-item>
                    <el-submenu index="6">
                        <template slot="title" >
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            {{username}}</template>
                        <el-menu-item index="6-1" divided @click="exit">退出</el-menu-item>
                    </el-submenu>
                    
                </el-menu>
            </el-header>
            <router-view></router-view>
        </el-container>
        
    </div>
</template>

<script>
import common from "@/common/mixins/common.js"
export default {
    mixins:[common],
    data() {
        return {
            activeIndex: '1',
        }
    },
    created() {
        this.navBar = this.$conf.navBar
    },
    methods: {

        exit(index){
            localStorage.removeItem('ms_username');
            this.$router.push('/login');
        },  
    },
    computed:{
        username(){
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
};
</script>

<style>
.el-header {
    background-color: #b3c0d1;
    color: #333;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
}

 .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

</style>
