<template>
  <div class="selectBox" @click="focus">
    <span v-show="show&&params.scheduleName===''">&nbsp</span>
    <span  v-show="show&&params.scheduleName!==''" v-text="params.scheduleName" ></span>
  <Select v-show="!show" width="250px"  @on-change="change" v-model="params.scheduleName" @on-blur="inBlur" size="small">
    <Option v-for="item in options" :value="item.name" :key="item.id">{{ item.name }}</Option>
  </Select>
  </div>
</template>
<script >
    export default {
        name: 'deviceSelectbox',
        data () {
            return {
                show:true,
            }
        },mounted(){
      },
        methods:{
            focus(){
                this.show=false;
            },
          inBlur(){
            this.show=true;

          },
            change(){
              this.$emit('change',this.params.scheduleName);
            }
        },
        props:['params','options']
    }
</script>
<style>
</style>
