import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _519f0a32 = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _1ea33331 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _5d045923 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _26abfc3a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _83046b9a = () => interopDefault(import('..\\pages\\Privacy-terms.vue' /* webpackChunkName: "pages/Privacy-terms" */))
const _066dfa62 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blank-page",
    component: _519f0a32,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _1ea33331,
    name: "contact___en"
  }, {
    path: "/es",
    component: _5d045923,
    name: "index___es"
  }, {
    path: "/login",
    component: _26abfc3a,
    name: "login___en"
  }, {
    path: "/Privacy-terms",
    component: _83046b9a,
    name: "Privacy-terms___en"
  }, {
    path: "/register",
    component: _066dfa62,
    name: "register___en"
  }, {
    path: "/es/blank-page",
    component: _519f0a32,
    name: "blank-page___es"
  }, {
    path: "/es/contact",
    component: _1ea33331,
    name: "contact___es"
  }, {
    path: "/es/login",
    component: _26abfc3a,
    name: "login___es"
  }, {
    path: "/es/Privacy-terms",
    component: _83046b9a,
    name: "Privacy-terms___es"
  }, {
    path: "/es/register",
    component: _066dfa62,
    name: "register___es"
  }, {
    path: "/",
    component: _5d045923,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
