<template>
  <div id="deviceTable">
    <Table  @on-row-click="click" :columns="columns" :data="oneDevice" border  highlight-row size="small" height="200" ></Table>
</div>
</template>
<script >
  import mapState from 'vuex'
  import deviceselectBox from './deviceSelectbox.vue'
  import inputbox from './InputBox.vue'
    export default {
        name: 'deviceselect',
        data () {
            return {
              scheduleNames:[],
              columns: [
                {
                  title: 'No',
                  key: 'idx',
                  className:'idx-class'
                },
                {
                  title: '设备名称',
                  key: 'action',
                  width: 150,
                  align: 'center',
                  render: (h, params) => {
                      console.log(params);
                    return h(inputbox,{
                      props: {
                        params:params.row,
                      },on:{
                        change:val=>{
                         this.oneDevice[params.row.idx-1].name=val;
                        }
                      }
                    })
                  }
                },
                {
                  title: '调度名称',
                  key: 'action',
                  width: 150,
                  align: 'center',
                  render: (h, params) => {
                      //渲染下拉组件
                    return h(deviceselectBox,{
                        props: {
                          params: params.row,
                          options: this.scheduleNames
                        },
                      on:{//组件值改变后的回掉函数
                        change:val=>{
                          params.row.scheduleName=val;
                          params.row.name=val;
                          this.oneDevice[params.row.idx-1].name=val;
                          this.oneDevice[params.row.idx-1].scheduleName=val;
                        }
                      }
                        })
                  }
              },
              ]

            }
        },
      mounted(){
            //if(this.tableType = "line");根据不同选择请求不同url
        var url ='/static/'+this.ctype+"/device.json";
        console.log('deviceselect/mounted',url);
            this.$http.get(url).then(
                res=>{
                    this.scheduleNames=res.data;
                }
            )
      },
      methods:{
        click(row){
          var anachnos=row.anaChnos;
          this.$store.commit('anachnos',anachnos);
          this.$store.commit('stachnos',row.staChnos)
          this.$store.commit('selectedBay',row);
          this.$store.commit('selectedBayNumber',row.idx);

        }
      },
      computed:{
        dmf(){
          return this.$store.state.dmf;
        },
        oneDevice(){
            return this.dmf[this.ctype];
      }
      },
      props:['ctype'],
      components:{
          selectbox:deviceselectBox,
          inputbox:inputbox
      }
    }
</script>
<style >
  #deviceTable  .ivu-table-cell{
    padding-left:0px;
    padding-right:0px;
  }
  .idx-class{
    width: 10px;
  }
  .idx-class .ivu-table-cell{
    text-align: center;
  }
  .name-class{
width: 250px;
  }
  .schedule-class{
    width: 250px;
  }
  .ivu-table-small td {
    height: 26px;
  }
  .ivu-table-body table{
    width:100% !important;
  }

</style>
