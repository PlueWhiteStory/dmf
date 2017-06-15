<template>
  <Row>
    <label class="item-label" v-text="ckey"></label>
    :
    <label class="item-label" v-text="value"></label>
  </Row>
</template>
<script >
    export default {
        name: 'myLabel',
        data () {
            return {}
        },
      props:['ckey','value']
    }
</script>
<style >
.item-label{
  margin: 0px 5px 0px 5px;
}
</style>
