import Vue from 'vue'
import Router from 'vue-router'
import ContactUs from '../components/ContactUs'
import Dashboard from '../components/Dashboard'
import Action from '../components/Action'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Dashboard', component: Dashboard},
    {path: '/contactus', name: 'ContactUs', component: ContactUs},
    {path: '/action', name: 'Action', component: Action},
  ],
  mode: 'history'
})
