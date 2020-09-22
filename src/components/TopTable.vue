<template>
    <div class="container">
        <div class="search-container">
            <el-input class="search-input" v-model="search"></el-input>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>date</th>
                        <th>name</th>
                        <th>address</th>
                        <th></th>
                    </tr>
                    <tr v-for="(item, id) in fixData" :key="id">
                        <td><i class="el-icon-arrow-right"></i></td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.address }}</td>
                        <td><i class="el-icon-lock"></i></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, id) in tableData" :key="id">
                        <td><i class="el-icon-arrow-right"></i></td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.address }}</td>
                        <td><i class="el-icon-lock"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pagination-container">

        </div>
    </div>
</template>

<script>
    export default {
        name: "TopTable",
        data () {
            return {
                fixData: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }],
                tableData: [{
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }],
                search: ''
            }
        }
    }
</script>

<style scoped>
.container {
    background-color: #8c939d;
}
</style>
