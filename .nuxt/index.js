import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_163e354e from 'nuxt_plugin_plugin_163e354e' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_bac7cf60 from 'nuxt_plugin_pluginutils_bac7cf60' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_21f7d19b from 'nuxt_plugin_pluginrouting_21f7d19b' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_4e24f7b4 from 'nuxt_plugin_pluginmain_4e24f7b4' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtmq_a9b5e0da from 'nuxt_plugin_nuxtmq_a9b5e0da' // Source: ./nuxt-mq.js (mode: 'all')
import nuxt_plugin_nuxttypeform_57e2b00e from 'nuxt_plugin_nuxttypeform_57e2b00e' // Source: ./nuxt-typeform.js (mode: 'all')
import nuxt_plugin_fontawesome_4ea5a44d from 'nuxt_plugin_fontawesome_4ea5a44d' // Source: ./fontawesome.js (mode: 'all')
import nuxt_plugin_vuefragmentconfig_12a6b83c from 'nuxt_plugin_vuefragmentconfig_12a6b83c' // Source: ../plugins/vue-fragment-config (mode: 'all')
import nuxt_plugin_vuewowconfig_32ee3066 from 'nuxt_plugin_vuewowconfig_32ee3066' // Source: ../plugins/vue-wow-config (mode: 'all')
import nuxt_plugin_vueyoutubeconfig_52b5d649 from 'nuxt_plugin_vueyoutubeconfig_52b5d649' // Source: ../plugins/vue-youtube-config (mode: 'client')
import nuxt_plugin_i18nconfig_ad306bc6 from 'nuxt_plugin_i18nconfig_ad306bc6' // Source: ../plugins/i18n-config.js (mode: 'all')
import nuxt_plugin_carousselconfig_6e4e7344 from 'nuxt_plugin_carousselconfig_6e4e7344' // Source: ../plugins/caroussel-config (mode: 'client')
import nuxt_plugin_countupconfig_ca7ae10a from 'nuxt_plugin_countupconfig_ca7ae10a' // Source: ../plugins/countup-config (mode: 'client')
import nuxt_plugin_vuescrollnav_65918480 from 'nuxt_plugin_vuescrollnav_65918480' // Source: ../plugins/vue-scroll-nav (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"dir":"ltr"},"title":"The Ibiza Web3 ecosystem. $IBZ Utility Token, NFT Marketplace, IbizaPay App","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"The Ibiza Web3 ecosystem. $IBZ Utility Token, NFT Marketplace, IbizaPay App "},{"name":"msapplication-TileColor","content":"#FFFFFF"},{"name":"msapplication-TileImage","content":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"name":"theme-color","content":"#080A3E"},{"property":"author","content":"Ibiza Token"},{"property":"og:site_name","content":"luxi.ux-maestro.com"},{"property":"og:locale","content":"en_US"},{"property":"og:type","content":"website"},{"property":"twitter:site","content":"luxi.ux-maestro.com"},{"property":"twitter:domain","content":"luxi.ux-maestro.com"},{"property":"twitter:creator","content":"luxi"},{"property":"twitter:card","content":"summary"},{"property":"twitter:image:src","content":"\u002Fimages\u002Flogo.png"},{"property":"og:url","content":"ibizatoken.com"},{"property":"og:title","content":""},{"property":"og:description","content":"The Ibiza Web3 ecosystem. $IBZ Utility Token, NFT Marketplace, IbizaPay App "},{"name":"twitter:site","content":"ibizatoken.com"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:image","content":"\u002Fstatic\u002Fimages\u002Fibz-logo.png"},{"property":"og:image","content":"\u002Fstatic\u002Fimages\u002Fibz-logo.png"},{"property":"og:image:width","content":"1200"},{"property":"og:image:height","content":"630"}],"link":[{"rel":"shortcut icon","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"apple-touch-icon","sizes":"57x57","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"apple-touch-icon","sizes":"60x60","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"\u002Ffavicons\u002Fibz-logo-fav2.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicons\u002F\u002Ffavicons\u002Fibz-logo-fav.png"},{"rel":"manifest","href":"\u002Ffavicons\u002Fmanifest.json"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"},{"rel":"stylesheet","href":"https:\u002F\u002Funpkg.com\u002Fionicons@3.0.0\u002Fdist\u002Fcss\u002Fionicons.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fkit.fontawesome.com\u002Fa34eaafd69.js"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_163e354e === 'function') {
    await nuxt_plugin_plugin_163e354e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_bac7cf60 === 'function') {
    await nuxt_plugin_pluginutils_bac7cf60(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_21f7d19b === 'function') {
    await nuxt_plugin_pluginrouting_21f7d19b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_4e24f7b4 === 'function') {
    await nuxt_plugin_pluginmain_4e24f7b4(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtmq_a9b5e0da === 'function') {
    await nuxt_plugin_nuxtmq_a9b5e0da(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxttypeform_57e2b00e === 'function') {
    await nuxt_plugin_nuxttypeform_57e2b00e(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_4ea5a44d === 'function') {
    await nuxt_plugin_fontawesome_4ea5a44d(app.context, inject)
  }

  if (typeof nuxt_plugin_vuefragmentconfig_12a6b83c === 'function') {
    await nuxt_plugin_vuefragmentconfig_12a6b83c(app.context, inject)
  }

  if (typeof nuxt_plugin_vuewowconfig_32ee3066 === 'function') {
    await nuxt_plugin_vuewowconfig_32ee3066(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueyoutubeconfig_52b5d649 === 'function') {
    await nuxt_plugin_vueyoutubeconfig_52b5d649(app.context, inject)
  }

  if (typeof nuxt_plugin_i18nconfig_ad306bc6 === 'function') {
    await nuxt_plugin_i18nconfig_ad306bc6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_carousselconfig_6e4e7344 === 'function') {
    await nuxt_plugin_carousselconfig_6e4e7344(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_countupconfig_ca7ae10a === 'function') {
    await nuxt_plugin_countupconfig_ca7ae10a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollnav_65918480 === 'function') {
    await nuxt_plugin_vuescrollnav_65918480(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
