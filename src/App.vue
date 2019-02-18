<template>
  <div id="app">
    <headerbar v-show="bheaderbar"></headerbar>
    
    <router-view/>
    <footerlist v-show="bfooterlist"></footerlist>
    
  </div>
</template>

<script>

import footerlist from './components/footerlist';

import headerbar from './components/headerbar';

import {mapGetters} from 'vuex';
import * as types from './store/types'

export default {
  components:{footerlist,headerbar},
  computed: mapGetters([
    'bheaderbar','bfooterlist'
  ]),
  watch: {
    $route:{
      handler:function(to){
        let path=to.path;
        if(/container/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/category|userhome|categorylist/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/shopcar/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
      }
    }

  }

}
</script>


