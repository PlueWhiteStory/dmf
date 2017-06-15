<template>
  <div id="right">
<status-channels></status-channels>
  </div>
</template>
<script>
  import statusChannels from './UnitComponents/statusChannelsTable.vue'

  export default {
  name: 'right',
    components:{
       statusChannels
    }
}
</script>

<style>

</style>
