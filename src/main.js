import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return { selector: to.hash};
    }
    return {x:0,y:0};
  }
});

router.beforeEach((to,from,next)=> {
  console.log('global beforeEach');
  next();
});


Vue.use(VueResource);

Vue.http.interceptors.push((request, next)=>{
  console.log(request)

  next(response =>{
    response.json = ()=> {return {messages: response.body}}
  });
});


Vue.http.options.root = 'http://localhost:3000/api/v1/'






new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export const eventBus = new Vue();
