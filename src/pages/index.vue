<template>
  <div>
    <el-row :gutter="10">
      <router-link :to="{path: '/pobing'}" active-class="active">
        <el-col :push=4 :span="8">
          <div class="left bg-purple">
               <div class="grid-content"><span>拯救不说话</span></div>
          </div>
        </el-col>
      </router-link>
      <el-col :push=4 :span="8"><div class="right bg-purple"><div class="grid-content"><span>拯救不开心</span></div></div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :push=4 :span="8"><div class="top bg-purple"><div class="grid-content"><span>拯救分享</span></div></div></el-col>
        <el-col :push=4 :span="8"><div class="bottom bg-purple"><div class="grid-content"><span>拯救自我</span></div></div></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  }
}
</script>
