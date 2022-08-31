import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _21921217 = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _388c6a01 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2e6d03f3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0fd6b1ec = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _dd92b5fa = () => interopDefault(import('../pages/Privacy-terms.vue' /* webpackChunkName: "pages/Privacy-terms" */))
const _29ab9d92 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))

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
    component: _21921217,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _388c6a01,
    name: "contact___en"
  }, {
    path: "/es",
    component: _2e6d03f3,
    name: "index___es"
  }, {
    path: "/login",
    component: _0fd6b1ec,
    name: "login___en"
  }, {
    path: "/Privacy-terms",
    component: _dd92b5fa,
    name: "Privacy-terms___en"
  }, {
    path: "/register",
    component: _29ab9d92,
    name: "register___en"
  }, {
    path: "/es/blank-page",
    component: _21921217,
    name: "blank-page___es"
  }, {
    path: "/es/contact",
    component: _388c6a01,
    name: "contact___es"
  }, {
    path: "/es/login",
    component: _0fd6b1ec,
    name: "login___es"
  }, {
    path: "/es/Privacy-terms",
    component: _dd92b5fa,
    name: "Privacy-terms___es"
  }, {
    path: "/es/register",
    component: _29ab9d92,
    name: "register___es"
  }, {
    path: "/",
    component: _2e6d03f3,
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
