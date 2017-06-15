<template>
  <div id="line">
<deviceTable  ctype="lines"></deviceTable>
    <div  class="lineDetail">
      <table>
        <colgroup>
          <col width="50"></col>
          <col width="200"></col>
          <col width="50"></col>
          <col width="200"></col>
        </colgroup>
        <tr>
          <td><label for="name">名称:</label></td>
          <td><Input v-model="selectedBay.name" type="text" id="name" size="small"/></td>
          <td><label for="generatrixName">母线名称</label></td>
            <td>
                <Select  id="generatrixName" v-model="selectedBay.bus_ID" size="small">
                      <Option value="0">无</Option>
                      <Option  v-for="(el,index) in dmf.buses" :value="el.idx" v-text="el.name" :key="el.idx">{{el.name}}</Option>
              </Select>
          </td>
        </tr>
        <tr>
          <td><label for="resistance">正序抗阻</label></td>
          <td>
            <InputNumber id="resistance" v-model="selectedBay.rx.r1" type="text" size="small" style="width:73px"/>+j
            <InputNumber  v-model="selectedBay.rx.x1" type="text" size="small" style="width:73px"/>Ω/km
          </td>
          <td><label for="zeroResistance">零序抗阻</label></td>
            <td>
              <InputNumber v-model="selectedBay.rx.r0"  id="zeroResistance" type="text" size="small" style="width:73px"/>+j
               <InputNumber v-model="selectedBay.rx.x0"type="text" size="small" style="width:73px"/>Ω/km
            </td>
        </tr>
        <tr>
          <td><label for="wiring">接线方式</label></td>
          <td>
            <Select   id="wiring" v-model="selectedBay.bran_num" size="small">
              <Option value="1">普通线路或3/2接线和电流</Option>
              <Option value="2">3/2接线和电流</Option>
            </Select >
          </td>
          <td><label  for="lineLenght">线路长度</label></td>
          <td><InputNumber v-model="selectedBay.LinLen" type="text" id="lineLenght" width="90" size="small"/>km</td>
        </tr>
        <tr>
            <td><label for="direction">电流方向</label></td>
          <td>
            <Select  id="direction" v-model="selectedBay.accBrans[0].dir" width="80" size="small">
            <Option value="POS">正向</Option>
            <Option value="NEG">反向</Option>
            <Option value="ENUMERATED">方向不清</Option>
          </Select >
          </td>
          <td> <label for="lineValue">互感线号</label> </td>
          <td>
              <Select id="lineValue" v-model="selectedBay.mr.idx" size="small">
                <Option value="0">无</Option>
              <Option v-for="(el,index) in dmf.lines" :value="el.idx" v-text="el.name" :key="el.idx"></Option>
            </Select >
          </td>
        </tr>
        <tr >
          <td colspan="4">
            <Row>
          <Col span="5">
            <label style="width:120px" for="common" text-align="right">零序互感抗阻</label>
          </Col>
          <Col span="10">
            <InputNumber  v-model="selectedBay.mr.mr0" id="common" type="text" size="small" style="width: 73px"/>+j
            <InputNumber  v-model="selectedBay.mr.mx0" type="text" size="small"  style="width: 73px"/>Ω/km
          </Col>
          </Row>
          </td>
        </tr>
      </table>


    </div>
    <chnostable ctype="A"></chnostable>
    <statustable></statustable>
  </div>
</template>

<script>
  import deviceTable from './UnitComponents/deviceselect.vue'
import myLabel from './UnitComponents/myLabel.vue'
  import anachonstable from './UnitComponents/chnostable.vue'
  import statustable from './UnitComponents/statustable.vue'
  import chnostable from "./UnitComponents/chnostable";
  import mapState from 'vuex'

  export default {
    name: 'Line',
    data () {
      return {
        ctype:'lines',
        defaultline: {"ARtg":0,
        "ARtgSnd":0,
        "LinLen":0,
        "VRtg":0,
        "accBrans":[
        {
          "bran_idx":1,
          "dir":"POS"
        }
      ],
        "bran_num":1,
        "bus_ID":0,
        "cg":{
        "c0":0,
          "c1":0,
          "g0":0,
          "g1":0
      },
      "idx":1,
        "mr":{
        "idx":0,
          "mr0":0,
          "mx0":0
      },
      "name":"",
            "oldName":"",
        "rx":{
        "r0":0,
          "r1":0,
          "x0":0,
          "x1":0
      },
      "scheduleName":"",
        "selected":false,
        "showBranNum":1,
        "srcRef":"1",
        "ta_p":0,
        "ta_s":0,
        "tv_p":0,
        "tv_s":0,
        "type":"",
        "typeEnum":{
        "key":1,
          "value":""
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
                return this.defaultline;
            else{
                console.log(this.dmf.lines[this.$store.state.selectedBayNumber-1]);
                return this.dmf.lines[this.$store.state.selectedBayNumber-1];
          }
      }
    },
    methods:{


    },
    components:{
      statustable,
      chnostable,
      deviceTable,
      myLabel
    }
  }
</script>

<style>
  .lineDetail tr{
    margin:15px 10px 15px 15px;
  }
.line {
	height:400px
}

</style>
