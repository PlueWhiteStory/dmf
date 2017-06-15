<template>
  <div id="app">
    <Row type="flex" justify="center" align="top" class="code-row-bg">
        <Col span="8"> <left class="left"></left></Col>
        <Col span="8"><center class="center"></center></Col>
        <Col span="8"> <right class="right"></right></Col>
    </Row>
  </div>
</template>

<script>
import right from './components/right.vue'
import left from './components/left.vue'
import center from './components/center.vue'
export default {
  name: 'app',
  mounted(){
      this.$http.get('/static/data2.json').then(
          res=>{
              this.$store.commit('dmf',res.data);
          }
      )


  },
  components:{
  right,
  center,
  left
  }
}
</script>

<style>

.left{
  height:600px;
}
.center{
   height:600px;
}
.right{
   height:600px;
}
.ivu-table-cell{
}
</style>
