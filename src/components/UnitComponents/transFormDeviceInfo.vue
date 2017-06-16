<template >
  <div class="transInfo" >
    <Row >
      <Col span="3"><label for="name">名称:</label></Col>
      <Col span="5"><Input v-model="selectedbay.name" type="text" id="name" size="small" /></Col>
      <Col span="3"><label for="pwrRtg">额定容量:</label></Col>
      <Col span="5"><Input v-model="selectedbay.pwrRtg" type="text" id="pwrRtg" size="small"/></Col>
      <Col span="3"><Button size="small"  @click="addTransformerWindings">增绕组</Button></Col>
      <Col span="3"><Button  size="small" @click="delTransformerWindings">删绕组</Button></Col>
    </Row>
    <Row >
      <Col span="4">
          <div  style="width:100%;height:60px;border:1px solid #000;overflow: hidden">
            <ul class="list" style="height:60px;overflow-y:auto;width:130%">
              <li v-for="(el,index) in selectedbay.transformerWindings" :value="el.location" v-text="locationName(el.location)" v-on:click="locationSelected(index)">
              </li>
            </ul>
          </div>
      </Col>

      <Col span="19">

      <Row>
        <Col span="5"><label for="VRtg">额定电压:</label></Col>
        <Col span="5"><Input v-model="transformerWindings.VRtg" type="text" id="VRtg" size="small"/></Col>
        <Col span="5"><label for="ARtg">额定电流:</label></Col>
        <Col span="5"><Input v-model="transformerWindings.ARtg" type="text" id="ARtg" size="small"/></Col>
      </Row>
      <Row>
        <Col span ="5"><label for="location">位置:</label></Col>
        <Col span ="5">
            <Select v-model="transformerWindings.location" type="text" id="location" size="small">
            <Option value=" ">无</Option>
            <Option value="High">高压测</Option>
            <Option value="Medium">中压侧</Option>
            <Option value="Low">低压侧</Option>
            <Option value="Common">公共绕组</Option>
        </Select>
        </Col>
        <Col span="5"><label for="wG">接线组别:</label></Col>
        <Col span="5">
              <Select v-model="transformerWindings.wG" type="text" id="wG" size="small">
                    <Option value="">无</Option>
                    <Option value="y">星型</Option>
                <Option value="yn">星型</Option>
                <Option value="d">星型</Option>
              </Select>
        </Col>
      </Row>

      </Col>
    </Row>
  </div>
</template>
<script>
  import trans from './trans.json'
  import Row from "../../../node_modules/iview/src/components/grid/row";
  import Col from "../../../node_modules/iview/src/components/grid/col";
    export default{
      name: "transInfo",
      data(){
            return {
                locationMap:{
                  High:'高压侧',
                  Medium:'中压侧',
                  Low:'低压侧',
                  Common:'公共绕组'
                },
              defaultTransformerWindings:{
                "ARtg":0,
                "VRtg":0,
                "accBran":[{
                  "bran_idx":1,
                  "chnNos":[],
                  "dir":"POS",
                }],
                "acvChn":{
                  "chnNos":[],
                },
                "bran_num":1,
                "igap":{
                  "zgap_idx":0,
                  "zsgap_idx":0
                },
                "location":"",
                "srcRef":"",
                "wG":""
              },//默认
              transformerWindings:{},
              transformerWindingNumber:-1,//选择transformerWinding的序号
            }
      },
      methods:{
          addTransformerWindings(){
            var newTransformerWindings = JSON.parse(JSON.stringify(this.defaultTransformerWindings));
            this.selectedbay.transformerWindings.push(newTransformerWindings);
            this.transformerWindings=newTransformerWindings
            this.transformerWindingNumber=this.selectedbay.transformerWindings.length-1;
          },
        delTransformerWindings(){
              if(this.selectedbay.transformerWindings.length<=1)
              {
                  this.$Message.error("至少有一个绕组").
                return ;
              }
              let idx = this.transformerWindingNumber;
              if(idx==-1) {
                  idx=this.selectedbay.transformerWindings.length-1;
              }
                this.selectedbay.transformerWindings.splice(idx,1);
        },
        locationSelected(index){//index 数组序号
          this.transformerWindingNumber=index;
          this.transformerWindings=this.selectedbay.transformerWindings[index];
          var anaChnos=[];
          anaChnos.push(...this.transformerWindings.acvChn.chnNos);
          anaChnos.push(...this.transformerWindings.accBran[0].chnNos);
          console.log("number",this.transformerWindingNumber);
          this.$store.commit('anachnos',anaChnos);
          this.$store.commit('transformerWindingNumber',this.transformerWindingNumber);
          this.$store.commit('transformerWindings',this.transformerWindings);
          },
          locationName(location){
            if(location==='')
                return "无"
            else
            return this.locationMap[location]
          }
      },
      computed:{
      },
      components: {Row},
      props:["selectedbay"],

    }
</script>
<style>
  .transInfo .ivu-row{
    margin:5px 5px 5px 5px;
  }
  .transInfo .ivu-col{
    margin-right: 5px;
  }
  .transInfo  label{
    margin-left: 5px;
  }
  .transInfo table{
    height:60px;
  }
  .transInfo table td .selected{
    background-color: #0ff;
  }
  .list li:hover{
    background: #aaa;
  }

</style>
