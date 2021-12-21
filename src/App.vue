<template>
  <div id="app">
    <router-view></router-view>
</div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
/* 修改全局滚动条样式 */
::-webkit-scrollbar{
  width:10px;
  height:10px;
}
::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:10px;
}
::-webkit-scrollbar-thumb:hover{
  background: #b1b1b1;
}
::-webkit-scrollbar-corner{
  background: #179a16;
}
</style>
