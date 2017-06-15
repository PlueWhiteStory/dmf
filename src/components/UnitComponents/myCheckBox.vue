<template class="myCheckBox">
  <input type="checkbox" :value="value" v-model="selected" @on-change="onchange"></input>
</template>
<script>
    export default{
        name: "myCheckBox",
        data(){
            return {
            }
        },
      computed:{
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
