<template>
  <Table id="statusChannels" size="small" border :columns="columns" :data="statusChannels"></Table>

</template>
<script >
import mycheckbox from './myCheckBox.vue'
    export default {
        name: 'statusChannelsTable',
        data () {
            return {
              columns:[
                {
                  title: 'No',
                  key: 'action',
                  width: 40,
                  align: 'center',
                  render: (h, params) => {
                    return h(mycheckbox,{
                      props: {
                        value:params.index-1,
                        store:this.$store,
                        row:params.row,
                        ctype:'stachnos'
                      }
                    })
                  }
                },
                {
                  title: 'NO',
                  key: 'idx_cfg',
                  className:'idx-class'
                },
                {
                  title: '名称',
                  key: 'name',
                  className:'name-class'
                },
                {
                  title: '类型',
                  key: 'type',
                  className:''
                },
                {
                  title: '标识',
                  key: 'flag',
                  className:''
                },
              ]

            }
        },
      computed:{
        dmf(){
          return this.$store.state.dmf;
        },
        statusChannels(){
          return this.dmf.statusChannels;
        }
      },
      components:{
        mycheckbox
      }
    }
</script>
<style >
  #statusChannels  .ivu-table-cell{
    padding-left:0px;
    padding-right:0px;
  }
  #statusChannels .idx-class{
    width: 40px;
  }
  #statusChannels .name-class{
  }
</style>
