<template>
  <div id="transform">
    <deviceTable  ctype="transformers"></deviceTable>
    <transinfo :selectedbay="selectedBay"></transinfo>
    <chnostable ctype="V"></chnostable>
    <chnostable ctype="A"></chnostable>
    <statustable></statustable>
  </div>
</template>

<script>
  import deviceTable from './UnitComponents/deviceselect.vue'
  import chnostable from './UnitComponents/chnostable.vue'
  import statustable from './UnitComponents/statustable.vue'
  import transinfo from './UnitComponents/transFormDeviceInfo.vue'
export default {
  name: 'transform',
  data(){
      return{
          ctype:"transformers",
        defaltTransform:{
          "anaChnos":undefined,
          "anaChns":undefined,
          "idx":-1,
          "name":"",
          "oldName":"",
          "pwrRtg":0,
          "scheduleName":"",
          "sdBreakerIdxes":undefined,
          "sdProtectionIdxes":undefined,
          "showAccBranIndex":0,
          "showWindingIndex":0,
          "srcRef":"1",
          "staChnos":undefined,
          "staChns":undefined,
          "transformerWindings":undefined,
          "type":"变压器",
          "typeEnum":''
        }
      }
  },
  computed:{
    dmf(){
        return this.$store.state.dmf;
    },
    selectedBay(){
      if(this.$store.state.selectedBayNumber<=0||this.$store.state.tab!=this.ctype)
        return this.defaltTransform;
      else{
        return this.dmf.transformers[this.$store.state.selectedBayNumber-1];
      }
    }
  },

  components:{
    deviceTable,
    chnostable,
    statustable,
    transinfo
  }
}
</script>

<style>

</style>
