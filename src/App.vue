<template>
  <el-container>
    <el-header style="height:160px;">
      <div class="header-container">
          <span>电子卖场-Two</span>
      </div>
    </el-header>
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .el-header{
    text-align: center;
    height: 160px;
  }

  .el-main {
    position: absolute;
    top: 160px ;
    left: 0 ;
    bottom: 0;
    width: 100%;
    padding:10px;
  }
  .grid-content{
    padding : 60px;
    font-size : 30px;
  }
  .header-container{
    font-size: 35px;
    margin-top: 50px;
  }
  body{
     color: #FFF;
     background: url(assets/bg.jpg) no-repeat;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .left {
    background: #0AA4DE;
    height: 100%;
  }
  .right {
     background: #385EB9;
     height: 100%;
  }
  .top {
     background: #A54DB4;
     height: 100%;
  }
  .bottom {
     background: #E04E79;
     height: 100%;
  }
  .el-col{
    height: 200px;
    margin-top: 10px;
    text-align: center
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a :hover{
    background: #53c048;
  }
</style>
