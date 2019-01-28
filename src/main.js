import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';


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
  render: h => h(App)
})

export const eventBus = new Vue();
