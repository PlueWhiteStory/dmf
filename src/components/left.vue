<template>
  <div id="app">
    <Tabs size="small" @on-click="clickTab">
      <Tab-pane label="线路" name ="lines" ><aline ></aline></Tab-pane>
      <Tab-pane label="母线" name ="buses" ><bus></bus></Tab-pane>
      <Tab-pane label="主变" name ="transformers" ><transform></transform>
      </Tab-pane>
    </Tabs>
  </div>
</template>

<script>
  import aline from  '@/components/line.vue'
  import bus from '@/components/bus.vue'
  import transform from '@/components/transformer.vue'
  export default {
    name: 'center',
    methods:{
        clickTab(tab){
          this.$store.commit("tab",tab);
          this.$store.commit("selectedBay",{});
          this.$store.commit("selectedBayNumber",0);
          this.$store.commit("anachnos",[]);
          this.$store.commit("stachnos",[]);
        }
    },
    components:{
      aline,
      bus,
      transform
    }
  }
</script>

<style>

</style>
