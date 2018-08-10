<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="作者">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
<el-form-item label="分类">
   <el-select v-model="form.cate" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  
 <el-form-item>
          <mavon-editor v-model="form.content" vstyle="height: 100%"></mavon-editor>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>

</el-form>

</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { createArticle } from '@/api/article'

export default {
  name: 'createForm',
  components: {
    mavonEditor
  },
  data() {
    return {
      form: {
        username: '',
        content: '',
        cate: ''
      }
    }
  },
  methods: {
    onSubmit() {
      createArticle(this.form).then(response => {
        if (response.status === true) {
          this.$message({
            message: '创建成功',
            type: 'success'
          })
          this.form = response.data
        } else {
          this.$message({
            message: '创建失败',
            type: 'false'
          })
        }
      })
    }
  }
}
</script>
  <style>
    #editor {
        margin: auto;
        width: 80%;
        height: 580px;
    }
    </style>
