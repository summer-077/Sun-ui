<template>
  <div id="app">
    <s-card></s-card>
    <s-button type="primary" size="mini">主要</s-button>
    <s-button type="success" size="small">成功</s-button>
    <s-button type="warning" size="medium" >警告</s-button>
    <s-button type="fail" size="medium" >失败</s-button>
     <s-link type="fail">ssss</s-link>
     <s-link type="primary">dasdasd</s-link>
     <s-link type="warning">dasdasd</s-link>
    <s-avatar shape="circle"></s-avatar>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
