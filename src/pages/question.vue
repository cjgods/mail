<template>
  <div class="question-form">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

  <el-form-item label="问题类型" prop="delivery">
    <el-switch
      v-model="ruleForm.questionType"
      active-text="隐私"
      inactive-text="普通">
    </el-switch>
  </el-form-item>
  <el-form-item label="问题内容" prop="content">
    <el-input type="textarea" v-model="ruleForm.content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'question',
  data () {
    return {
      ruleForm: {
        questionType: false,
        content: ''
      },
      rules: {
        content: [
          { required: true, message: '请填写问题内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let question = this.ruleForm
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Vue.http.post('/api/updateData', {question})
            .then((res) => {
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              // this.$store.dispatch('fetchDataList')
            }, (err) => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.question-form {
  width: 400px;
  margin: auto;
}
.el-message-box__message{
   font-size: 20px;
}
.el-form-item__label{
  color: #fff
}
.el-switch__label.is-active {
    color: #1a07e2;
}
.el-switch.is-checked .el-switch__core {
    border-color: #086fda;
    background-color: #086fda;
}
.el-form-item__error {
    color: #c50303;
}
</style>
