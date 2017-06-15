<template>
  <div id="chnosTable">
  		<Table border :columns="columns" :data="grid" size="small"></Table>
  </div>
</template>

<script>
export default {
  name: 'chnosTable',
  data(){
  return {
			phaseA:'',
			phaseB:'',
			phaseC:'',
			phaseN:'',
  }
  },
  mounted(){
    //console.log("chnos/anachnos",this.anachnos);
  },
  computed:{
    dmf(){
      return this.$store.state.dmf;
    },
	  anaChnos(){
      //  console.log("chnos/anachnos",this.$store.state.anachnos);
        return this.$store.state.anachnos;
    },
    analogChannels(){
	    return this.dmf.analogChannels
    },
    headName(){
			if(this.ctype==='A')
			return '电流相别'
			else
			return '电压相别'
	  },
    grid(){
			return [{
						phase: 'A相',
						name: this.getName(this.phaseA),
					},
					{
						phase: 'B相',
						name: this.getName(this.phaseB),
					},
					{
						phase: 'C相',
						name: this.getName(this.phaseC),
					},
					{
						phase: 'N相',
						name: this.getName(this.phaseN),
					}]
	},
		columns(){
			return  [
					{
						title:this.headName,
						width:'100',
						key: 'phase'
					},
					{
						title: '模拟量名称',
						key: 'name'
					}
				]
            }

  },
  methods:{
  getPhase(idx){
  		return this.analogChannels[idx].cfgAnalog.ph;
  },
  getUU(idx){
  		return this.analogChannels[idx].cfgAnalog.uu;
  },
  getName(idx){
  		if(idx===undefined||idx===''||this.analogChannels===undefined)
  		return '';
  		else{
  		var name =this.analogChannels[idx].name;
		return name;
		}
  }
  },
  watch:{
	  anaChnos(val){
	  this.phaseA='';
	  this.phaseN='';
	  this.phaseC='';
	  this.phaseB='';
//      console.log(this.anaChnos);
//      debugger;
     for(var i=0;i<val.length;i++) {
         var idx = val[i] - 1;
    //     console.log(idx,this.getUU(idx),this.ctype,this.getUU(idx) == this.ctype);
         if (this.getUU(idx) == this.ctype) {

           switch (this.getPhase(idx)) {
             case 'A':
               this.phaseA = idx;
               break;
             case 'B':
               this.phaseB = idx;
               break;
             case 'C':
               this.phaseC = idx;
               break;
             case 'N':
               this.phaseN = idx;
               break;
             default :
               break;
           }
         } else {
           continue;
         }
     };
		//	console.log("A",this.phaseA,"b",this.phaseB,'c',this.phaseC,'n',this.phaseN);
		}
  },
  props:['ctype']
}
</script>

<style>

</style>
