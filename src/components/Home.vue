<template>
    <el-container class="home-container">
        <el-header>
            <h1>Management</h1>
            <el-button type="info" @click="logout" id="logout">log out</el-button></el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "Home",
    methods: {
        logout () {
            window.sessionStorage.clear()
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
    .home-container{
        height:100%;
    }
    .el-header {
        background-color: #2e3131;
        display: flex;
        justify-content: space-between;
    }
    #logout {
        margin: 10px;
    }
    .el-aside {
        background-color: #abb7b7;
    }
    .el-main {
        background-color: #e8ecf1;
    }
</style>
