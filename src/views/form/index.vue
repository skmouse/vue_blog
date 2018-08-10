<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="id">
        <el-input v-model="form.id" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="form.create_time" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="form.update_time" disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getName } from '@/api/form'
import { update } from '@/api/form'

export default {
  data() {
    return {
      form: {
        id: '',
        username: '',
        email: '',
        create_time: '',
        update_time: ''
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getName().then(response => {
        this.form = response.data
      })
    },
    onSubmit() {
      update(this.form.id, this.form).then(response => {
        if (response.status === true) {
          this.$message({
            message: '更新成功',
            type: 'success'
          })
          this.form = response.data
        } else {
          this.$message({
            message: '更新成功',
            type: 'success'
          })
        }
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

