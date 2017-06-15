<template>
  <div id="bus">
    <deviceTable  ctype="buses"></deviceTable>
    <Row>
      <Col span="4">
      <label for="childName">名称:</label>
      </Col>
      <Col span="8"><Input v-model="selectedBay.name" type="text" id="childName" size="small"/>
      </Col>
      <Col span="4"><label for="TV_seat">TV安装位置</label>
      </Col>
      <Col span="8">
          <Select  id="TV_seat" v-model="selectedBay.VRtgSnd_Pos" size="small">
              <Option value=""></Option>
              <Option value="BUS">母线侧</Option>
              <Option value="LINE">线路侧</Option>
        </Select>
      </Col>
    </Row>
    <chnostable ctype="A"></chnostable>
    <statustable></statustable>
  </div>
</template>
<script>
  import deviceTable from './UnitComponents/deviceselect.vue'
  import chnostable from './UnitComponents/chnostable.vue'
  import statustable from './UnitComponents/statustable.vue'
export default {
  name: 'bus',
  data(){
      return {
          ctype:"buses",
          defaultBus:   {
            "VRtg":0,
            "VRtgSnd":0,
            "VRtgSnd_Pos":"BUS",
            "acvChn":{
              "chnNos":[
              ],
              "ua_idx":0,
              "ub_idx":0,
              "uc_idx":0,
              "ul_idx":0,
              "un_idx":0
            },
            "anaChnos":[],
            "anaChns":[],
            "idx":0,
            "name":"",
            "oldName":"",
            "scheduleName":"",
            "sdBreakerIdxes":[],
            "sdProtectionIdxes":[],
            "srcRef":"1",
            "staChnos":[],
            "staChns":[],
            "type":"母线",
            "typeEnum":{
              "key":0,
              "value":"母线"
            }
          }
      }
  },
  computed:{
      dmf(){
          return this.$store.state.dmf;
      },
    selectedBay(){
      if(this.$store.state.selectedBayNumber<=0||this.$store.state.tab!=this.ctype)
        return this.defaultBus;
      else{
        console.log(this.dmf.buses[this.$store.state.selectedBayNumber-1]);
        return this.dmf.buses[this.$store.state.selectedBayNumber-1];
      }
    }
  },
  components:{
    deviceTable,
    chnostable,
    statustable
  }
}
</script>

<style>

</style>
