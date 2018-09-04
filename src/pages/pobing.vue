<template>
  <div class="containr">
    <span>普通版:</span>
    <el-input v-model="input" @change="change" placeholder="请输入你最爱的数字"></el-input>
    <div>
      <span class="msg">{{msg}}</span>
    </div>
    <span>隐私版:</span>
    <el-input v-model="input2" @change="change2" placeholder="请输入你最爱的数字"></el-input>
    <div>
      <span class="msg">{{msg2}}</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'pobing',
  data () {
    return {
      value3: true,
      input: '',
      input2: '',
      msg: '',
      msg2: '',
      array: [],
      array2: []
    }
  },
  methods: {
    change (v) {
      v = v.trim()
      if (v === '520' || v === '1314' || v === '52' || v === '666' || v === '1') {
        this.$alert('这个数字不配你哦，换一个吧，老铁!', '提示', {
          confirmButtonText: '确定',
          customClass: 'test',
          callback: action => {
          }
        })
        return
      }
      let num = Math.floor(Math.random() * this.array.length) // 随机数
      this.msg = this.array[num]// 获取值
      this.array.splice(num, 1)// 删除
      this.input = ' '
      this.msg2 = ' '
    },
    change2 (v) {
      v = v.trim()
      if (v === '520' || v === '1314' || v === '52' || v === '666' || v === '1') {
        this.$alert('这个数字不配你哦，换一个吧，老铁!', '提示', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return
      }
      let num = Math.floor(Math.random() * this.array2.length) // 随机数
      this.msg2 = this.array2[num]// 获取值
      this.array2.splice(num, 1)// 删除
      this.input2 = ' '
      this.msg = ' '
    }
  },
  mounted () {
    // this.$store.dispatch('fetchDataList')
    Vue.http.get('/static/db.json')
      .then((res) => {
        this.array = res.body.getQuestionArray
        this.array2 = res.body.getQuestionArray2
        console.info(this.array)
        console.info(this.array2)
        // commit('updateDataList', res.body)
      }, (err) => {
        console.log(err)
      })

    let list = this.$store.getters.getDataList
    this.array = list.getQuestionArray
    this.array2 = list.getQuestionArray2
  }
}
</script>
<style>
.containr {
  text-align: center;
  font-size: 28px;
}

.msg{
    font-size: 20px;
  }
.el-input {
  width: 300px;
  margin-bottom: 20px;
}
.el-message-box__message{
   font-size: 20px;
}
</style>
