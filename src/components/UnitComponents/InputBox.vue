<template>
  <div class="inputBox"  @click="focus">
    <span v-show="show&&params.name==''">&nbsp</span>
    <span v-show="show&&params.name!=''" v-text="params.name" ></span>
  <Input v-focus="!show" v-show="!show" v-model="params.name" @on-enter="enterDown($event)" size="small" @on-change="change" @on-blur="inBlur"></Input>
  </div>
</template>
<script >
    export default {
        name: 'InputBox',
        data () {
            return {
                show:true,
            }
        },
      directives: {
        focus: {
          inserted: function (el, {value}) {
            if (value) {
              el.focus();
            }
          }
        }
      },
      methods:{
        focus(){
                this.show=false;
            },
            change(){
             //this.$emit('change',this.params.name);
            },
        inBlur(){
          this.show=true;
          this.$emit('change',this.params.name);
        },
        enterDown(){
          console.log("回车按下");
          this.$emit('change',this.params.name);
        }
      },
      props:['params']

    }
</script>
<style >
  .inputBox span{
    width:100px;
  }

</style>
