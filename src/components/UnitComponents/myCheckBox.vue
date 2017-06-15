<template class="myCheckBox">
  <span class="ivu-checkbox,{ivu-checkbox-checked:true}">
    <span class="ivu-checkbox-inner">
  <input type="checkbox" :value="value" v-model="selected" class="ivu-checkbox-input" @on-change="onchange"/>
    </span>
    </span>
</template>
<script>
  import 'iview/dist/styles/iview.css';
    export default{
        name: "myCheckBox",
        data(){
            return {

            }
        },
      computed:{
            status{
              //const checked = event.target.checked;
            },
            selected(){
                if(this.ctype=="anachnos")
                return this.store.state.anachnos;
                else (this.ctype=="stachnos")
              return this.store.state.stachnos;
            }
        },
        methods: {
            onchange(){
              this.$commit("on-change",row);
            }
        },
props:['value',"row",'store','ctype']
    }
</script>
<style>
    .myCheckBox {
    }
</style>
