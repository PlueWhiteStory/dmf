// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview';
import  Vuex from 'vuex'
import  VueResource from 'vue-resource'
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(iView);
Vue.use(Vuex);
Vue.use(VueResource);
const store=new Vuex.Store({
  state:{
    dmf:'',
    tab:'lines',
    anachnos:[],//用于展示模拟量的选择状态
    stachnos:[],//用于开关量的选择状态
    selectedBay:{},//表示选择的设备
    selectedBayNumber:-1,//选择的设别索引,
    transformerWindingNumber:-1,
    transformerWindings:{},

  },
  mutations:{
    anaChnosChange(state,row){
      if(state.selectedBayNumber<=0)//如果没选择线路，则不处理
        return;

      let option={
        delete(arr,idx){//删除指定下标的数据
          arr.splice(idx,1);
        },
        change(arr,idx,newVal){//修改
          arr.splice(idx,1,newVal);
        },
        replace(arr,idx,newArr){//替换
          arr.splice(0,arr.length,...newArr);
        },
        push(arr,val){
          arr.push(val);
        },
        exe(ana,row){
          let  flag=0;//记录使用那种修改方式1.删除2.修改3.替换4.添加
          let  temp= '';
          for(let i=0;i<ana.length;i++) {
            let idx = ana[i];
            if (idx == row.idx_cfg) {//表示存在，执行删除//
              flag = 1;
              temp=i;
              break;
            } else {//
              if (state.dmf.analogChannels[row.idx_cfg - 1].cfgAnalog.ph == 'A'){//表示A项选择
                temp=i;
                flag = 2;
                break;
              } else if (state.dmf.analogChannels[idx - 1].cfgAnalog.ph == state.dmf.analogChannels[row.idx_cfg - 1].cfgAnalog.ph) {//表示相别存在
                temp = i;
                flag = 3;
                break;
              } else {//既不是A,相别也不存在
                flag = 4;
              }
            }
          }
          if(ana.length==0)
            flag=4;
          let newVal= row.idx_cfg;
          switch(flag){
            case 1:{this.delete(ana,temp);break;}
            case 2:{this.replace(ana,temp,[newVal,newVal+1,newVal+2,newVal+3]);break}
            case 3:{this.change(ana,temp,newVal);break}
            case 4:{this.push(ana,newVal);break}
          }
          return ana;
        }
      }

      if(state.tab=='lines'||state.tab=='buses')//线路处理
      {
            let ana= state.dmf[state.tab][state.selectedBayNumber-1].anaChnos;

                ana = option.exe(ana,row);//修改展示数据；
                state.anachnos.splice(0,state.anachnos.length,...ana);
          }else if(state.tab=='transformers'){//变压器处理
                  if(state.transformerWindingNumber<0)// 为选择绕组返回；
                    return ;
                let anaV= state.transformerWindings.acvChn.chnNos;
                let anaA=state.transformerWindings.accBran[0].chnNos;
                let  temp= '';
                if(state.dmf.analogChannels[row.idx_cfg - 1].cfgAnalog.uu == 'V'){
                  anaV = option.exe(anaV,row);//修改展示数据；
                  state.anachnos.splice(0,state.anachnos.length,...anaV);
                  state.anachnos.push(...anaA);
                }
                else if(state.dmf.analogChannels[row.idx_cfg - 1].cfgAnalog.uu == 'A'){
                  anaA = option.exe(anaA,row);//修改展示数据；
                  state.anachnos.splice(0,state.anachnos.length,...anaA);
                  state.anachnos.push(...anaV);

            }

      }


    },
    staChnosChange(state,row){
      if(state.selectedBayNumber<=0)//如果没选择线路，则不处理
        return;
      let staChnos= state.dmf[state.tab][state.selectedBayNumber].staChnos;
      console.log(".star",staChnos);
      let flag=0;//0不存在，1存在
      let temp = 0;
          for(let i=0;i<staChnos.length;i++){
             let idx= staChnos[i];
            if(idx==row.idx_cfg){
              flag=1;
              temp=i;
              break;
            }
          };
          if(flag==0)
            staChnos.push(row.idx_cfg);
          else
            staChnos.splice(temp,1);

          state.stachnos.splice(0,state.stachnos.length,...staChnos);
      console.log(state.stachnos);
    },
    transformerWindings(state,val){
      state.transformerWindings=val;
    },
    transformerWindingNumber(state,val){
      state.transformerWindingNumber=val;
    },
    dmf(state,val){
      console.log("dmf",val);
      state.dmf=val;
    },
    anachnos(state,val){
      state.anachnos=val;
    },
    stachnos(state,val){
      state.stachnos=val;
    },
    selectedBayNumber(state,val){
      state.selectedBayNumber=val;
      if(state.selectedBayNumber<=0)
        state.selectedBay= {}
        else
      state.selectedBay=state.dmf[state.tab][state.selectedBayNumber];
    },

    tab(state,val){
      state.tab=val;
      state.selectedBayNumber=0;
      state.anachnos=[];
      state.stachnos=[];
      state.transformerWindings=[];
      state.transformerWindingNumber=-1;
    },

  },
  getters:{
    dmf:state=>state.dmf,
    anachnos:state=>state.anachnos,
    stachnos:state=>state.stachnos,
    selectedBay:state=>state.selectedBay,

  }

});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
