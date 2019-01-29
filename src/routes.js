import Header from './components/Shared/AppHeader.vue'

const User = resolve=>{
    require.ensure(['./components/User/UsersForm.vue'],()=>{
        resolve(require('./components/User/UsersForm.vue'));
    }, 'user');
}
const Tweets = resolve=>{
    require.ensure(['./components/Quotes/QuoteApp.vue'],()=>{
        resolve(require('./components/Quotes/QuoteApp.vue'));
    }, 'tweets');
}


export const routes = [
    { path: '/', name: 'login', components:{
        default: User,
        'header-bottom':Header
    } }, 
    { path: '/tweets',  components:{
        default: Tweets,
        'header-top':Header
        }
    },
    {path: '*', redirect:{name:'login'}}
];