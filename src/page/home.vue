<template>
  <div class="home">
    <template>
      <el-table :data="tableData" border style="width: 180">
        <el-table-column prop="date" label="计划数" width="180">
          <template is="el-table-column" class="tem-table-column">
            <el-table :data="tableData" border style="width: 100%" class="son-table">
              <el-table-column prop="date1" label="2018" class="tem-table-column-column"></el-table-column>
              <el-table-column prop="date2" label="2019" class="tem-table-column-column"></el-table-column>
              <el-table-column prop="date3" label="2020" class="tem-table-column-column"></el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      tableData: [
        {
          date1: '420',
          date2: '430',
          date3: '440',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date1: '420',
          date2: '430',
          date3: '440',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date1: '420',
          date2: '430',
          date3: '440',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date1: '420',
          date2: '430',
          date3: '440',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .son-table {
   padding: 0 !important;
   margin: 0 !important;
   border:none !important;
  }
  .tem-table-column {
    padding: 0 !important;
    margin: 0 !important;
    border:none !important;
  }
  .tem-table-column-column {
    padding: 0 !important;
    margin: 0 !important;
    border:none !important;
    width: 33.3%
  } */
  .el-table__header-wrapper {
    width: 100% !important;
  }
  .el-table_3_column_7  {
    width: 60px !important;
  }
</style>
