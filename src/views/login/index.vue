<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 m-auto pt-5" >
                    <div class="card mt-5">
                        <div class="card-header text-secondary" >
                            <h3 class="text-center">欢迎来到登录页面</h3>
                        </div>
                        <div class="card-body">
                            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm">
                                <el-form-item prop="username">
                                    <el-input v-model="ruleForm.username" placeholder="请输入用户名" size="medium">
                                    </el-input>
                                </el-form-item>
                                <el-form-item prop="password">
                                    <el-input v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" placeholder="请输入密码" size="medium" type="password" >

                                    </el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" size="medium" class="w-100" @click="submitForm('ruleForm')">
                                        立即登录
                                    </el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm:{
                username:"admin",
                password:"123123"
            },
            rules:{username:[
                { required: true, message: '请输入用户名', trigger: 'blur'} 
            ],password:[
                { required: true, message: '请输入密码', trigger: 'blur'} 
            ]}
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    localStorage.setItem('ms_username',this.ruleForm.username);
                    this.$router.push('/');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style>

</style>