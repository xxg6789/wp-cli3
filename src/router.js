import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import container from './components/container';
import category from './components/category';
import categorylist from './components/categorylist';
import shopcar from './components/shopcar';
import userhome from './components/userhome';
import view from './components/view';
import error from './components/error';
import login from './components/login';
import reg from './components/reg';

let routes=[
  {path:'/container',component:container},
  {path:'/category',component:category},
  {path:'/categorylist',component:categorylist},
  {path:'/shopcar',component:shopcar},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/userhome',component:userhome},
  {path:'/view',component:view},
  {path:'/',redirect:'/container'},
  {path:'*',component:error},
]

export default new Router({
  routes
})
