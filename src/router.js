import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login"
import Home from "@/components/Home";

Vue.use(Router)

const router = new Router({
    routes: [
        {   path: '/', redirect: '/login'   },
        {   path: '/login', component: Login   },
        {   path: '/home', component: Home  }
    ]
})

//Navigation Guards
router.beforeEach((to, from, next) => {
    // to: Route: the target Route Object being navigated to
    // from: Route: the current route being navigated away from
    // next: Function: this function must be called to resolve the hook
    // next() next(false) next('/') next({ path: '/' }) next(error)
    if (to.path === '/login') return next()

    // acquire token
    const token = window.sessionStorage.getItem('token')
    if (!token) return next('/login')
    next()
})

export default router
