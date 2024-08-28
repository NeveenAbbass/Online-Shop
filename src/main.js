import { createApp } from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// 1- download router library
//2-import create router and history
import { createRouter, createWebHistory } from 'vue-router';

import Store from './store.js'

import SignIn from './components/pages/SignIn.vue';
import OneProduct from './components/pages/OneProduct.vue';
import Error from './components/pages/Error.vue';
import UsersPage from './components/pages/UsersPage.vue';
import CartPage from './components/pages/CartPage.vue';
import OneUser from './components/pages/OneUser.vue';
import AllProducts from './components/pages/AllProducts.vue';
import OneProductAdmin from './components/pages/OneProductAdmin.vue';
import SignUp from './components/pages/SignUp.vue';
import AddItem from './components/pages/AddItem.vue';

//3-create routes array of objects
const routes = [
  {path:"/" , component:SignIn,alias: "/signin"},
  {path:"/signup" , component:SignUp, alias: "/users/update"},
  {path:"/users" , component:UsersPage, alias: "/admin"},
  {path:"/users/:id" , component:OneUser},
  {path:"/products/:id" , component:OneProduct},
  {path:"/productsAdmin/:id" , component:OneProductAdmin},
  {path:"/cart" , component:CartPage},
  {path:"/additem" , component:AddItem},
  {path:"/products" , component:AllProducts},
  //next two lines is modifing and updating, both brings me to the same form, that's why they're taking the same route

  {path:"/:NotFound(.*)*" , component:Error,meta:{
    hideNavBar:true
  }},


]

//4-create router
const router = createRouter({
  history:createWebHistory(),
  routes
  // aken key esmo routes have value routes (di keda syntax sugar in vue)
})


createApp(App).use(router).use(Store).mount('#app')

