<template>
  <div id="statusTable">
  		<Table border :columns="columns" :data="grid" size="small"></Table>
  </div>
</template>

<script>
export default {
  name: 'statusTable',
  data(){
  return {
  }
  },
  computed:{
      dmf(){
          return this.$store.state.dmf;
      },
    statusChannels(){
          return this.dmf.statusChannels;
    },
    staChnos(){
      return this.$store.state.stachnos;
    },
  		columns(){
			return  [
					{
						title:'通道编号',
            width:'100',
						key: 'idx_cfg'
					},
					{
						title: '开关量名称',
						key: 'name'
					}
				]
      },
    grid(){
      var  arr=[];
          this.staChnos.forEach(
          idx_cfg=>{
          arr.push({idx_cfg:idx_cfg,name:this.getName(idx_cfg)});
          });
          return arr;
    }


  },
  methods:{
  getName(idx_cfg){
  if(this.statusChannels==undefined)
  return '';
else
  	return this.statusChannels[idx_cfg-1].name;

  }

  },
}
</script>

<style>

</style>
