<template>
  <div>
  <Table on-row-dblclick="dbclick" class="analogChannels" size="small" border :columns="columns" :data="analogChannels"></Table>
    <analogdetail :show="false" :row-analog="selectRow"></analogdetail>
    </div>
</template>
<script >
  import analogdetail from './analogDetail.vue'
  import mycheckbox from './myCheckBox.vue'
    export default {
        name: 'analogChannelsTable',
        data () {
            return {
                selectRow:[],
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
                          ctype:'anachnos'
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
                    title: '一次额定',
                    key: 'primary',
                    className:''
                  },
                  {
                    title: '二次额定',
                    width:100,
                    key: 'secondary',
                    className:''
                  },
                ]
            }
        },
      methods:{
        dbclick(row){
          this.selectRow=row

        }
      },
      computed:{
        dmf(){
          return this.$store.state.dmf;
        },
        analogChannels(){
          return this.dmf.analogChannels;
        }
      },
      components:{
        analogdetail,
        mycheckbox
      }
    }
</script>
<style >
  .analogChannels  .ivu-table-cell{
    padding-left:0px;
    padding-right:0px;
  }
  .analogChannels .idx-class{
    width:40px;
  }
  .analogChannels .name-class{
    width:200px;
  }
</style>
