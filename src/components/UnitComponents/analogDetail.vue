<template>
  <div>
    <Modal v-model="show" width="800">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>模拟量信息修改</span>
      </p>
  <Form v-model="rowAnalog">
    <Row>
      <Col span="8">
        <my-label ckey="编号" :value="rowAnalog.idx_cfg"></my-label>
      </Col>
      <Col span="8">
        <my-label ckey="名称" :value="rowAnalog.name"></my-label>
      </Col>
      <Col span="8">
        <my-label ckey="变比" :value="presecon"></my-label>
      </Col>

      <Col span="8">
        <Form-item label="一次系数">
          <Input  v-model="rowAnalog.primary" size="small"></Input>
        </Form-item>
      </Col>
      <Col span="8">
        <Form-item label="二次系数">
          <Input v-model="rowAnalog.secondary" size="small"></Input>
        </Form-item>
      </Col>
      <Col span="8">
        <Form-item label="系数标识">
          <Select v-model="rowAnalog.ps" size="small">
            <option value="">无</option>
            <option value="P">一次</option>
            <option value="S">二次</option>
          </Select>
        </Form-item>
      </Col>
    </Row>
    <Row>
  <Col span="8">
      <form-item label="通道类型"></form-item>
      <Select v-model="rowAnalog.type" size="small">
        <option value="">无</option>
        <option value="D">直流</option>
        <option value="A">交流</option>
        <option value="O">其他</option>
      </Select>
   </Col>
  <Col span="8">
      <Form-item label="通道标识" size="small">
        <Select v-model="rowAnalog.flag">
          <option value="">无</option>
          <option value="ACV">电压</option>
          <option value="ACC">电流</option>
          <option value="HF">高频</option>
          <option value="FQ">频率</option>
          <option value="AG">相位</option>
          <option value="AMP">幅值</option>
          <option value="PW">功率</option>
          <option value="ZX">阻抗</option>
          <option value="CONST">常量</option>
        </Select>
      </Form-item>
      </Col>
      <Col span="8">
          <Form-item label="频率">
              <Input v-model="rowAnalog.freq"></Input>
          </Form-item>
      </Col>
</Row>
    <Row>
      <Col span="8">
      <Form-item label="一次最小值">
        <Input v-model="rowAnalog.p_min"></Input>
      </Form-item>
      </Col>
      <Col span="8">
      <Form-item label="一次最大值">
        <Input v-model="rowAnalog.p_min"></Input>
      </Form-item>
      </Col>
      <Col span="8">
      <Form-item label="二次最小值">
        <Input v-model="rowAnalog.s_min"></Input>
      </Form-item>
      </Col>
    </Row>
    <Row>
      <Col span="8">
      <Form-item label="二次最大值">
        <Input v-model="rowAnalog.s_max"></Input>
      </Form-item>
      </Col>
      <Col span="8">
      <Form-item label="斜率">
        <Input v-model="rowAnalog.au"></Input>
      </Form-item>
      </Col>
      <Col span="8">
      <Form-item label="截距">
        <Input v-model="rowAnalog.bu"></Input>
      </Form-item>
      </Col>
    </Row>
    <Row>
      <Col span="8">
      <Form-item label="单位">
        <Select v-model="rowAnalog.sIUnit">
          <option value="">无</option>
                <option value="A">A</option>
                <option value="V">V</option>
                <option value="Hz">Hz</option>
                <option value="Ω">Ω</option>
                <option value="W">W</option>
                <option value="Var">Var</option>
        </Select>
      </Form-item>
      </Col>
      <Col span="8">
      <Form-item label="量级">
        <Select v-model="rowAnalog.multiplier">
          <option value="">无</option>
          <option value="k">k</option>
          <option value="M">M</option>
        </Select>
      </Form-item>
      </Col>

    </Row>
  </Form>
      <div slot="footer">
        <Button type="error" size="large"  @click="">关闭</Button>
      </div>
    </Modal>
  </div>
</template>
<script type="text/ecmascript-6">
  import MyLabel from "./myLabel";
  import FormItem from "../../../node_modules/iview/src/components/form/form-item";
    export default {
         name: 'analogDetail',
        data () {
            return {}
        },
      computed:{
        presecon(){
          if(this.rowAnalog==undefined)
            return '';
          else
            return this.rowAnalog.primary/this.rowAnalog.secondary;
        }
      },
      components: {FormItem, MyLabel},
      props:['rowAnalog','show']
    }
</script>
<style >
</style>
