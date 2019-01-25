import Vue from 'vue'
import Router from 'vue-router'
import Home from './home';
import Detail from './detail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Home'}
    },
    Home, 
    Detail,
  ]
})