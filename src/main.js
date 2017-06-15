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
    tab:'',
    anachnos:[],
    stachnos:[],
    selectedBay:{},
    selectedBayNumber:-1,
  },
  mutations:{
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
    selectedBay(state,val){
      state.selectedBay=val;
      console.log("selectRow",state.selectedBay);
    },
    selectedBayNumber(state,val){
      state.selectedBayNumber=val;
    },
    tab(state,val){
      state.tab=val;
    },

  },
  getters:{
    dmf:state=>state.dmf,
    anachnos:state=>state.anachnos,
    stachnos:state=>state.stachnos,

  }

});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
