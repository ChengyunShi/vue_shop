<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form ref="loginFormRef" class="login_form" :model="loginForm" :rules="loginRules">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="password" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">Login</el-button>
                    <el-button type="info" @click="resetLoginForm">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                loginRules: {
                    username: [
                        { required: true, message: "Username is required.", trigger: "blur" },
                        { min: 3, max: 10, message: "The length should be between 3 to 10.", trigger: "blur" }
                    ],
                    password: [
                        { required: true, message: "Password is required.", trigger: "blur" },
                        { min: 6, max: 16, message: "The length should be between 8 to 16.", trigger: "blur" }
                    ]
                }
            }
        },
        methods: {
            resetLoginForm () {
                this.$refs.loginFormRef.resetFields()
            },
            login () {
                this.$refs.loginFormRef.validate(async valid => {
                    if (!valid) return;
                    const { data: res } = await this.$http.post('login', this.loginForm);
                    if (res.meta.status !== 200) return this.$message.error('Login Failed !')
                    this.$message.success('Login Success !')

                    // 1. Save token in sessionStorage of client
                    //     1.1 APIs except /login must be accessed after login success
                    //     1.2 token only should be effective while opening the website
                    window.sessionStorage.setItem('token', res.data.token)
                    // 2. Navigate to homepage of backend '/home'
                    await this.$router.push('/home')
                })

            }
        }
    }
</script>

<style scoped>
    .login_container {
        height: 100%;
        background-color: #2b4b6b;
    }
    .login_box {
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
    }
    .avatar_box img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .btns {
        display: flex;
        justify-content: center;
    }
</style>
