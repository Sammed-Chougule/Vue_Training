import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue"
import Signup from "../views/Signup.vue"
import adminHome from "../views/adminHome.vue"
import adminDashboard from "../views/adminDashboard.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:"/dashboard",
    name:"Dashboard",
    component:Dashboard,
    
  },
  {
    path:"/signup",
    name:"Signup",
    component:Signup,
  },
  {
    path:"/adminHome",
    name:"adminHome",
    component:adminHome,
  },
  {
    path:"/adminDashboard",
    name:"adminDashboard",
    component:adminDashboard,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to,from,next)=>{
//  if(this.$store.getters.getToken) next();
//  else return false;
// })

export default router;
