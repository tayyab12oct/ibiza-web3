exports.ids = [5];
exports.modules = Array(230).concat([
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Title; });

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=template&id=7b4345c0&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "title",
    class: _vm.align
  }, [_vm._ssrNode("<h4 data-v-7b4345c0>", "</h4>", [_vm._t("default")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=template&id=7b4345c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=script&lang=js&
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
});
// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Title/Title.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(250)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Title_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7b4345c0",
  "03f79d61"
  
)

/* harmony default export */ var Title = (component.exports);
// CONCATENATED MODULE: ./components/Title/index.js


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* unused harmony export VCardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(245);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VProgressLinear/VProgressLinear.sass
var VProgressLinear = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
 // Components

 // Directives

 // Mixins




 // Utilities



const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], Object(positionable["b" /* factory */])(['absolute', 'fixed', 'top', 'bottom']), proxyable["a" /* default */], themeable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VProgressLinear_VProgressLinear = (baseMixins.extend({
  name: 'v-progress-linear',
  directives: {
    intersect: intersect["a" /* default */]
  },
  props: {
    active: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: null
    },
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: 'primary'
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    query: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    stream: Boolean,
    striped: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },

  data() {
    return {
      internalLazyValue: this.value || 0,
      isVisible: true
    };
  },

  computed: {
    __cachedBackground() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor || this.color, {
        staticClass: 'v-progress-linear__background',
        style: this.backgroundStyle
      }));
    },

    __cachedBar() {
      return this.$createElement(this.computedTransition, [this.__cachedBarType]);
    },

    __cachedBarType() {
      return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate;
    },

    __cachedBuffer() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__buffer',
        style: this.styles
      });
    },

    __cachedDeterminate() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: `v-progress-linear__determinate`,
        style: {
          width: Object(helpers["g" /* convertToUnit */])(this.normalizedValue, '%')
        }
      }));
    },

    __cachedIndeterminate() {
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          'v-progress-linear__indeterminate--active': this.active
        }
      }, [this.genProgressBar('long'), this.genProgressBar('short')]);
    },

    __cachedStream() {
      if (!this.stream) return null;
      return this.$createElement('div', this.setTextColor(this.color, {
        staticClass: 'v-progress-linear__stream',
        style: {
          width: Object(helpers["g" /* convertToUnit */])(100 - this.normalizedBuffer, '%')
        }
      }));
    },

    backgroundStyle() {
      const backgroundOpacity = this.backgroundOpacity == null ? this.backgroundColor ? 1 : 0.3 : parseFloat(this.backgroundOpacity);
      return {
        opacity: backgroundOpacity,
        [this.isReversed ? 'right' : 'left']: Object(helpers["g" /* convertToUnit */])(this.normalizedValue, '%'),
        width: Object(helpers["g" /* convertToUnit */])(Math.max(0, this.normalizedBuffer - this.normalizedValue), '%')
      };
    },

    classes() {
      return {
        'v-progress-linear--absolute': this.absolute,
        'v-progress-linear--fixed': this.fixed,
        'v-progress-linear--query': this.query,
        'v-progress-linear--reactive': this.reactive,
        'v-progress-linear--reverse': this.isReversed,
        'v-progress-linear--rounded': this.rounded,
        'v-progress-linear--striped': this.striped,
        'v-progress-linear--visible': this.isVisible,
        ...this.themeClasses
      };
    },

    computedTransition() {
      return this.indeterminate ? transitions["c" /* VFadeTransition */] : transitions["d" /* VSlideXTransition */];
    },

    isReversed() {
      return this.$vuetify.rtl !== this.reverse;
    },

    normalizedBuffer() {
      return this.normalize(this.bufferValue);
    },

    normalizedValue() {
      return this.normalize(this.internalLazyValue);
    },

    reactive() {
      return Boolean(this.$listeners.change);
    },

    styles() {
      const styles = {};

      if (!this.active) {
        styles.height = 0;
      }

      if (!this.indeterminate && parseFloat(this.normalizedBuffer) !== 100) {
        styles.width = Object(helpers["g" /* convertToUnit */])(this.normalizedBuffer, '%');
      }

      return styles;
    }

  },
  methods: {
    genContent() {
      const slot = Object(helpers["m" /* getSlot */])(this, 'default', {
        value: this.internalLazyValue
      });
      if (!slot) return null;
      return this.$createElement('div', {
        staticClass: 'v-progress-linear__content'
      }, slot);
    },

    genListeners() {
      const listeners = this.$listeners;

      if (this.reactive) {
        listeners.click = this.onClick;
      }

      return listeners;
    },

    genProgressBar(name) {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-progress-linear__indeterminate',
        class: {
          [name]: true
        }
      }));
    },

    onClick(e) {
      if (!this.reactive) return;
      const {
        width
      } = this.$el.getBoundingClientRect();
      this.internalValue = e.offsetX / width * 100;
    },

    onObserve(entries, observer, isIntersecting) {
      this.isVisible = isIntersecting;
    },

    normalize(value) {
      if (value < 0) return 0;
      if (value > 100) return 100;
      return parseFloat(value);
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-progress-linear',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': this.normalizedBuffer,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: 'intersect',
        value: this.onObserve
      }],
      style: {
        bottom: this.bottom ? 0 : undefined,
        height: this.active ? Object(helpers["g" /* convertToUnit */])(this.height) : 0,
        top: this.top ? 0 : undefined
      },
      on: this.genListeners()
    };
    return h('div', data, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/index.js


/* harmony default export */ var components_VProgressLinear = (VProgressLinear_VProgressLinear);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js


/**
 * Loadable
 *
 * @mixin
 *
 * Used to add linear progress bar to components
 * Can use a default bar with a specific color
 * or designate a custom progress linear bar
 */

/* @vue/component */

/* harmony default export */ var loadable = __webpack_exports__["a"] = (external_vue_default.a.extend().extend({
  name: 'loadable',
  props: {
    loading: {
      type: [Boolean, String],
      default: false
    },
    loaderHeight: {
      type: [Number, String],
      default: 2
    }
  },
  methods: {
    genProgress() {
      if (this.loading === false) return null;
      return this.$slots.progress || this.$createElement(components_VProgressLinear, {
        props: {
          absolute: true,
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          height: this.loaderHeight,
          indeterminate: true
        }
      });
    }

  }
}));

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("63c9496b", content, true)

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(247);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4ea614cc", content, true, context)
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e23b7040", content, true)

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("cf87dc84", content, true)

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("4f4f805e", content, true)

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.42)}.theme--light.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.87)}.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat}.theme--light.v-text-field--filled>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.12)}.theme--light.v-text-field--solo>.v-input__control>.v-input__slot{background:#fff}.theme--light.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#424242}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:#fff}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:hsla(0,0%,100%,.7)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.38)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:rgba(0,0,0,.86)}.theme--light.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.26)}.theme--dark.v-text-field>.v-input__control>.v-input__slot:before{border-color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:#fff}.theme--dark.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat}.theme--dark.v-text-field--filled>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.08)}.theme--dark.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo>.v-input__control>.v-input__slot{background:#1e1e1e}.theme--dark.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#fff}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:rgba(0,0,0,.87)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:rgba(0,0,0,.6)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.24)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:#fff}.theme--dark.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.16)}.v-text-field{padding-top:12px;margin-top:4px}.v-text-field__prefix,.v-text-field__suffix{line-height:20px}.v-text-field input{flex:1 1 auto;line-height:20px;padding:8px 0;max-width:100%;min-width:0;width:100%}.v-text-field .v-input__control,.v-text-field .v-input__slot,.v-text-field fieldset{border-radius:inherit}.v-text-field.v-input--has-state .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-messages,.v-text-field .v-input__control,.v-text-field fieldset{color:currentColor}.v-text-field.v-input--dense{padding-top:0}.v-text-field.v-input--dense .v-label{top:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,.v-text-field.v-input--dense:not(.v-text-field--outlined) input{padding:4px 0 2px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix{padding-right:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix{padding-left:4px}.v-text-field.v-input--dense[type=text]::-ms-clear{display:none}.v-text-field.v-input--dense .v-input__append-inner,.v-text-field.v-input--dense .v-input__prepend-inner{margin-top:0}.v-text-field .v-input__append-inner,.v-text-field .v-input__prepend-inner{align-self:flex-start;display:inline-flex;margin-top:4px;line-height:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-text-field .v-input__prepend-inner{margin-right:auto;padding-right:4px}.v-application--is-ltr .v-text-field .v-input__append-inner,.v-application--is-rtl .v-text-field .v-input__prepend-inner{margin-left:auto;padding-left:4px}.v-application--is-rtl .v-text-field .v-input__append-inner{margin-right:auto;padding-right:4px}.v-text-field .v-counter{white-space:nowrap}.v-application--is-ltr .v-text-field .v-counter{margin-left:8px}.v-application--is-rtl .v-text-field .v-counter{margin-right:8px}.v-text-field .v-label{max-width:90%;overflow:hidden;text-overflow:ellipsis;top:6px;white-space:nowrap;pointer-events:none}.v-application--is-ltr .v-text-field .v-label{transform-origin:top left}.v-application--is-rtl .v-text-field .v-label{transform-origin:top right}.v-text-field .v-label--active{max-width:133%;transform:translateY(-18px) scale(.75);pointer-events:auto}.v-text-field>.v-input__control>.v-input__slot{cursor:text}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{bottom:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-text-field>.v-input__control>.v-input__slot:before{border-color:inherit;border-style:solid;border-width:thin 0 0}.v-text-field>.v-input__control>.v-input__slot:after{background-color:currentColor;border-color:currentcolor;border-style:solid;border-width:thin 0;transform:scaleX(0)}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.v-text-field__prefix,.v-text-field__suffix{align-self:center;cursor:default;transition:color .3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-text-field__prefix{text-align:right;padding-right:4px}.v-application--is-rtl .v-text-field__prefix{text-align:left;padding-left:4px}.v-text-field__suffix{white-space:nowrap}.v-application--is-ltr .v-text-field__suffix{padding-left:4px}.v-application--is-rtl .v-text-field__suffix{padding-right:4px}.v-application--is-ltr .v-text-field--reverse .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__prefix{text-align:right;padding-right:4px;padding-left:0}.v-application--is-ltr .v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__suffix{padding-left:4px;padding-right:0}.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot{display:flex;flex:1 1 auto;position:relative}.v-text-field:not(.v-text-field--is-booted) .v-label,.v-text-field:not(.v-text-field--is-booted) legend{transition:none}.v-text-field--filled,.v-text-field--full-width,.v-text-field--outlined{position:relative}.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width>.v-input__control>.v-input__slot,.v-text-field--outlined>.v-input__control>.v-input__slot{align-items:stretch;min-height:56px}.v-text-field--filled.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense>.v-input__control>.v-input__slot{min-height:52px}.v-text-field--filled.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot{min-height:40px}.v-text-field--outlined{border-radius:4px}.v-text-field--enclosed .v-input__append-inner,.v-text-field--enclosed .v-input__append-outer,.v-text-field--enclosed .v-input__prepend-inner,.v-text-field--enclosed .v-input__prepend-outer,.v-text-field--full-width .v-input__append-inner,.v-text-field--full-width .v-input__append-outer,.v-text-field--full-width .v-input__prepend-inner,.v-text-field--full-width .v-input__prepend-outer{margin-top:17px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer{margin-top:14px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer{margin-top:9px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer{margin-top:8px}.v-text-field--filled .v-label,.v-text-field--full-width .v-label{top:18px}.v-text-field--filled .v-label--active,.v-text-field--full-width .v-label--active{transform:translateY(-6px) scale(.75)}.v-text-field--filled.v-input--dense .v-label,.v-text-field--full-width.v-input--dense .v-label{top:17px}.v-text-field--filled.v-input--dense .v-label--active,.v-text-field--full-width.v-input--dense .v-label--active{transform:translateY(-10px) scale(.75)}.v-text-field--filled.v-input--dense.v-text-field--single-line .v-label,.v-text-field--full-width.v-input--dense.v-text-field--single-line .v-label{top:11px}.v-text-field--filled{border-radius:4px 4px 0 0}.v-text-field--filled:not(.v-text-field--single-line) input{margin-top:22px}.v-text-field--filled.v-input--dense:not(.v-text-field--single-line).v-text-field--outlined input{margin-top:0}.v-text-field--filled .v-text-field__prefix,.v-text-field--filled .v-text-field__suffix{max-height:32px;margin-top:20px}.v-text-field--full-width{border-radius:0}.v-text-field--outlined .v-text-field__slot,.v-text-field--single-line .v-text-field__slot{align-items:center}.v-text-field.v-text-field--enclosed{margin:0;padding:0}.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__suffix{margin-top:0}.v-text-field.v-text-field--enclosed:not(.v-text-field--filled) .v-progress-linear__background{display:none}.v-text-field.v-text-field--enclosed .v-text-field__details,.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)>.v-input__control>.v-input__slot{padding:0 12px}.v-text-field.v-text-field--enclosed .v-text-field__details{padding-top:0;margin-bottom:8px}.v-application--is-ltr .v-text-field--reverse input{text-align:right}.v-application--is-rtl .v-text-field--reverse input{text-align:left}.v-application--is-ltr .v-text-field--reverse .v-label{transform-origin:top right}.v-application--is-rtl .v-text-field--reverse .v-label{transform-origin:top left}.v-text-field--reverse .v-text-field__slot,.v-text-field--reverse>.v-input__control>.v-input__slot{flex-direction:row-reverse}.v-text-field--outlined>.v-input__control>.v-input__slot:after,.v-text-field--outlined>.v-input__control>.v-input__slot:before,.v-text-field--rounded>.v-input__control>.v-input__slot:after,.v-text-field--rounded>.v-input__control>.v-input__slot:before,.v-text-field--solo>.v-input__control>.v-input__slot:after,.v-text-field--solo>.v-input__control>.v-input__slot:before{display:none}.v-text-field--outlined,.v-text-field--solo{border-radius:4px}.v-text-field--outlined{margin-bottom:16px;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outlined .v-label{top:18px}.v-text-field--outlined .v-label--active{transform:translateY(-24px) scale(.75)}.v-text-field--outlined.v-input--dense .v-label{top:10px}.v-text-field--outlined.v-input--dense .v-label--active{transform:translateY(-16px) scale(.75)}.v-text-field--outlined fieldset{border-collapse:collapse;border:1px solid;bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:-5px;transition-duration:.15s;transition-property:color;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-text-field--outlined fieldset{padding-left:8px}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse fieldset,.v-application--is-rtl .v-text-field--outlined fieldset{padding-right:8px}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse fieldset{padding-left:8px}.v-text-field--outlined legend{line-height:11px;padding:0;transition:width .3s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-text-field--outlined legend{text-align:left}.v-application--is-rtl .v-text-field--outlined legend{text-align:right}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse legend{margin-left:auto}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse legend{margin-right:auto}.v-application--is-ltr .v-text-field--outlined.v-text-field--rounded legend{margin-left:12px}.v-application--is-rtl .v-text-field--outlined.v-text-field--rounded legend{margin-right:12px}.v-text-field--outlined>.v-input__control>.v-input__slot{background:transparent}.v-text-field--outlined .v-text-field__prefix{max-height:32px}.v-text-field--outlined .v-input__append-outer,.v-text-field--outlined .v-input__prepend-outer{margin-top:18px}.v-text-field--outlined.v-input--has-state fieldset,.v-text-field--outlined.v-input--is-focused fieldset{border:2px solid}.v-text-field--rounded{border-radius:28px}.v-text-field--rounded>.v-input__control>.v-input__slot{padding:0 24px}.v-text-field--shaped{border-radius:16px 16px 0 0}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 9px)}.v-text-field.v-text-field--solo .v-input__control{min-height:48px;padding:0}.v-text-field.v-text-field--solo .v-input__control input{caret-color:auto}.v-text-field.v-text-field--solo.v-input--dense>.v-input__control{min-height:38px}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-text-field.v-text-field--solo .v-input__append-inner,.v-text-field.v-text-field--solo .v-input__prepend-inner{align-self:center;margin-top:0}.v-text-field.v-text-field--solo .v-input__append-outer,.v-text-field.v-text-field--solo .v-input__prepend-outer{margin-top:12px}.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer,.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer{margin-top:7px}.v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after{transform:scaleX(1)}.v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:currentColor}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("3dc908a0", content, true)

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-counter{color:rgba(0,0,0,.6)}.theme--dark.v-counter{color:hsla(0,0%,100%,.7)}.v-counter{flex:0 1 auto;font-size:12px;min-height:12px;line-height:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5eaa42e4", content, true, context)
};

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(232);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_004b7178_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-004b7178]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-004b7178]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-004b7178]{font-size:28px;line-height:44px}}.use-text-title2[data-v-004b7178]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-004b7178]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-004b7178]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-004b7178]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-004b7178]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-004b7178]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-004b7178]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-004b7178]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-004b7178]{font-size:16px;line-height:24px}}.use-text-caption[data-v-004b7178],.use-text-paragraph[data-v-004b7178]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-004b7178]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-004b7178]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-004b7178]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-004b7178]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-004b7178]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-004b7178]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-004b7178]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-004b7178]{display:none}}.notification[data-v-004b7178]{width:95%;margin:0 auto}@media(min-width:1280px){.notification[data-v-004b7178]{width:80%}}.notification[data-v-004b7178] .v-snack__wrapper{width:100%;margin-bottom:16px;max-width:none;font-size:16px;color:var(--v-primarydark-base);background:var(--v-primarylight-base)}@media(min-width:600px){.notification[data-v-004b7178] .v-snack__wrapper{padding:4px 16px}}.notification[data-v-004b7178] .v-snack__wrapper>div:first-child{display:flex;align-items:center}@media(min-width:600px){.notification[data-v-004b7178] .v-snack__wrapper>div:first-child .action{flex:1}[dir=ltr] .notification[data-v-004b7178] .v-snack__wrapper>div:first-child .action{margin-right:16px}[dir=rtl] .notification[data-v-004b7178] .v-snack__wrapper>div:first-child .action{margin-left:16px}}@media(max-width:599px){.notification[data-v-004b7178] .v-snack__wrapper>div:first-child .action{text-align:center}}.notification .button.v-btn[data-v-004b7178]{width:100%;box-shadow:none}@media(min-width:600px){.notification .button.v-btn[data-v-004b7178]{width:150px}}@media(max-width:599px){.notification .button.v-btn[data-v-004b7178]{margin:16px 0}}@media(max-width:599px){.action[data-v-004b7178]{width:100%;padding:0;margin:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 248 */,
/* 249 */,
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7b4345c0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-7b4345c0]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-7b4345c0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-7b4345c0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-7b4345c0]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-7b4345c0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-7b4345c0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-7b4345c0]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-7b4345c0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-7b4345c0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-7b4345c0]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-7b4345c0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-7b4345c0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-7b4345c0],.use-text-paragraph[data-v-7b4345c0]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-7b4345c0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-7b4345c0]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-7b4345c0]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-7b4345c0]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-7b4345c0]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-7b4345c0]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-7b4345c0]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-7b4345c0]{display:none}}[dir=ltr] .left[data-v-7b4345c0]{text-align:left}[dir=rtl] .left[data-v-7b4345c0]{text-align:right}[dir=ltr] .left[data-v-7b4345c0]:after{left:0}[dir=rtl] .left[data-v-7b4345c0]:after{right:0}[dir=ltr] .right[data-v-7b4345c0]{text-align:right}[dir=rtl] .right[data-v-7b4345c0]{text-align:left}[dir=ltr] .right[data-v-7b4345c0]:after{right:0}[dir=rtl] .right[data-v-7b4345c0]:after{left:0}.center[data-v-7b4345c0]{text-align:center}[dir=ltr] .center[data-v-7b4345c0]:after{left:50%}[dir=rtl] .center[data-v-7b4345c0]:after{right:50%}[dir=ltr] .center[data-v-7b4345c0]:after{margin-left:-35px}[dir=rtl] .center[data-v-7b4345c0]:after{margin-right:-35px}.title[data-v-7b4345c0]{display:block;position:relative;margin-bottom:40px;font-family:\"kanit\",sans-serif!important}.title h4[data-v-7b4345c0]{font-size:48px;line-height:56px;font-weight:var(--font-medium);letter-spacing:1px}.theme--dark .title h4[data-v-7b4345c0]{text-shadow:0 0 15px #0ff8ff}.theme--light .title h4[data-v-7b4345c0]{text-shadow:unset}@media(max-width:1279px){.title h4[data-v-7b4345c0]{font-size:32px;line-height:48px}}@media(max-width:599px){.title h4[data-v-7b4345c0]{font-size:28px;line-height:44px}}.title[data-v-7b4345c0]:after{content:\"\";width:70px;height:12px;bottom:-32px;border-radius:12px;background:transparent;position:absolute}.theme--light .title strong[data-v-7b4345c0]{color:#080a3e}.theme--dark .title strong[data-v-7b4345c0]{color:#fff}.title-secondary[data-v-7b4345c0]{display:block;position:relative;margin-bottom:96px;text-transform:capitalize}@media(max-width:599px){.title-secondary[data-v-7b4345c0]{margin-bottom:80px}}.title-secondary h3[data-v-7b4345c0]{font-size:48px;line-height:56px;font-weight:var(--font-bold);letter-spacing:1px}.theme--light .title-secondary h3[data-v-7b4345c0]{color:#080a3e}.theme--dark .title-secondary h3[data-v-7b4345c0]{color:#fff}@media(max-width:1279px){.title-secondary h3[data-v-7b4345c0]{font-size:32px;line-height:48px}}@media(max-width:599px){.title-secondary h3[data-v-7b4345c0]{font-size:28px;line-height:44px}}.title-secondary[data-v-7b4345c0]:after{content:\"\";width:70px;height:12px;bottom:-32px;border-radius:12px;background:var(--v-primary-base);position:absolute}.theme--light .title-secondary strong[data-v-7b4345c0]{color:#080a3e}.theme--dark .title-secondary strong[data-v-7b4345c0]{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification; });

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(229);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(257);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=template&id=004b7178&scoped=true&



var Notificationvue_type_template_id_004b7178_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(VSnackbar["a" /* default */], {
    staticClass: "notification",
    attrs: {
      "timeout": -1
    },
    model: {
      value: _vm.snackbar,
      callback: function ($$v) {
        _vm.snackbar = $$v;
      },
      expression: "snackbar"
    }
  }, [_c('div', {
    staticClass: "action"
  }, [_vm._v("\n    " + _vm._s(_vm.$t('common.notif_msg')) + "\n  ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "button",
    attrs: {
      "color": "secondary"
    },
    on: {
      "click": function ($event) {
        _vm.snackbar = false;
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$t('common.accept')) + "\n  ")])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=template&id=004b7178&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=script&lang=js&
/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  data() {
    return {
      snackbar: true
    };
  }

});
// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var Notification_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Notification/Notification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(246)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Notification_Notificationvue_type_script_lang_js_,
  Notificationvue_type_template_id_004b7178_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "004b7178",
  "0667cc4f"
  
)

/* harmony default export */ var Notification = (component.exports);
// CONCATENATED MODULE: ./components/Notification/index.js


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTextField/VTextField.sass
var VTextField = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCounter/VCounter.sass
var VCounter = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCounter/VCounter.js
// Styles
 // Mixins



/* @vue/component */

/* harmony default export */ var VCounter_VCounter = (Object(mixins["a" /* default */])(themeable["a" /* default */]).extend({
  name: 'v-counter',
  functional: true,
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    max: [Number, String]
  },

  render(h, ctx) {
    const {
      props
    } = ctx;
    const max = parseInt(props.max, 10);
    const value = parseInt(props.value, 10);
    const content = max ? `${value} / ${max}` : String(props.value);
    const isGreater = max && value > max;
    return h('div', {
      staticClass: 'v-counter',
      class: {
        'error--text': isGreater,
        ...Object(themeable["b" /* functionalThemeClasses */])(ctx)
      }
    }, content);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCounter/index.js


/* harmony default export */ var components_VCounter = (VCounter_VCounter);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js + 1 modules
var VLabel = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js + 19 modules
var console = __webpack_require__(6);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/intersectable/index.js
// Directives
 // Utilities

 // Types


function intersectable(options) {
  return external_vue_default.a.extend({
    name: 'intersectable',
    data: () => ({
      isIntersecting: false
    }),

    mounted() {
      intersect["a" /* default */].inserted(this.$el, {
        name: 'intersect',
        value: this.onObserve
      }, this.$vnode);
    },

    destroyed() {
      intersect["a" /* default */].unbind(this.$el, {
        name: 'intersect',
        value: this.onObserve
      }, this.$vnode);
    },

    methods: {
      onObserve(entries, observer, isIntersecting) {
        this.isIntersecting = isIntersecting;
        if (!isIntersecting) return;

        for (let i = 0, length = options.onVisible.length; i < length; i++) {
          const callback = this[options.onVisible[i]];

          if (typeof callback === 'function') {
            callback();
            continue;
          }

          Object(console["c" /* consoleWarn */])(options.onVisible[i] + ' method is not available on the instance but referenced in intersectable mixin options');
        }
      }

    }
  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js + 2 modules
var loadable = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/validatable/index.js
var validatable = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dom.js
var dom = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
// Styles
 // Extensions

 // Components


 // Mixins



 // Directives


 // Utilities



 // Types


const baseMixins = Object(mixins["a" /* default */])(VInput["a" /* default */], intersectable({
  onVisible: ['onResize', 'tryAutofocus']
}), loadable["a" /* default */]);
const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
/* @vue/component */

/* harmony default export */ var VTextField_VTextField = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-text-field',
  directives: {
    resize: resize["a" /* default */],
    ripple: ripple["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    appendOuterIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    clearIcon: {
      type: String,
      default: '$clear'
    },
    counter: [Boolean, Number, String],
    counterValue: Function,
    filled: Boolean,
    flat: Boolean,
    fullWidth: Boolean,
    label: String,
    outlined: Boolean,
    placeholder: String,
    prefix: String,
    prependInnerIcon: String,
    persistentPlaceholder: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    singleLine: Boolean,
    solo: Boolean,
    soloInverted: Boolean,
    suffix: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: () => ({
    badInput: false,
    labelWidth: 0,
    prefixWidth: 0,
    prependWidth: 0,
    initialValue: null,
    isBooted: false,
    isClearing: false
  }),
  computed: {
    classes() {
      return { ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-text-field': true,
        'v-text-field--full-width': this.fullWidth,
        'v-text-field--prefix': this.prefix,
        'v-text-field--single-line': this.isSingle,
        'v-text-field--solo': this.isSolo,
        'v-text-field--solo-inverted': this.soloInverted,
        'v-text-field--solo-flat': this.flat,
        'v-text-field--filled': this.filled,
        'v-text-field--is-booted': this.isBooted,
        'v-text-field--enclosed': this.isEnclosed,
        'v-text-field--reverse': this.reverse,
        'v-text-field--outlined': this.outlined,
        'v-text-field--placeholder': this.placeholder,
        'v-text-field--rounded': this.rounded,
        'v-text-field--shaped': this.shaped
      };
    },

    computedColor() {
      const computedColor = validatable["a" /* default */].options.computed.computedColor.call(this);
      if (!this.soloInverted || !this.isFocused) return computedColor;
      return this.color || 'primary';
    },

    computedCounterValue() {
      if (typeof this.counterValue === 'function') {
        return this.counterValue(this.internalValue);
      }

      return [...(this.internalValue || '').toString()].length;
    },

    hasCounter() {
      return this.counter !== false && this.counter != null;
    },

    hasDetails() {
      return VInput["a" /* default */].options.computed.hasDetails.call(this) || this.hasCounter;
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('input', this.lazyValue);
      }

    },

    isDirty() {
      var _a;

      return ((_a = this.lazyValue) === null || _a === void 0 ? void 0 : _a.toString().length) > 0 || this.badInput;
    },

    isEnclosed() {
      return this.filled || this.isSolo || this.outlined;
    },

    isLabelActive() {
      return this.isDirty || dirtyTypes.includes(this.type);
    },

    isSingle() {
      return this.isSolo || this.singleLine || this.fullWidth || // https://material.io/components/text-fields/#filled-text-field
      this.filled && !this.hasLabel;
    },

    isSolo() {
      return this.solo || this.soloInverted;
    },

    labelPosition() {
      let offset = this.prefix && !this.labelValue ? this.prefixWidth : 0;
      if (this.labelValue && this.prependWidth) offset -= this.prependWidth;
      return this.$vuetify.rtl === this.reverse ? {
        left: offset,
        right: 'auto'
      } : {
        left: 'auto',
        right: offset
      };
    },

    showLabel() {
      return this.hasLabel && !(this.isSingle && this.labelValue);
    },

    labelValue() {
      return this.isFocused || this.isLabelActive || this.persistentPlaceholder;
    }

  },
  watch: {
    // labelValue: 'setLabelWidth', // moved to mounted, see #11533
    outlined: 'setLabelWidth',

    label() {
      this.$nextTick(this.setLabelWidth);
    },

    prefix() {
      this.$nextTick(this.setPrefixWidth);
    },

    isFocused: 'updateValue',

    value(val) {
      this.lazyValue = val;
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('box')) {
      Object(console["a" /* breaking */])('box', 'filled', this);
    }
    /* istanbul ignore next */


    if (this.$attrs.hasOwnProperty('browser-autocomplete')) {
      Object(console["a" /* breaking */])('browser-autocomplete', 'autocomplete', this);
    }
    /* istanbul ignore if */


    if (this.shaped && !(this.filled || this.outlined || this.isSolo)) {
      Object(console["c" /* consoleWarn */])('shaped should be used with either filled or outlined', this);
    }
  },

  mounted() {
    // #11533
    this.$watch(() => this.labelValue, this.setLabelWidth);
    this.autofocus && this.tryAutofocus();
    requestAnimationFrame(() => {
      this.isBooted = true;
      requestAnimationFrame(() => {
        if (!this.isIntersecting) {
          this.onResize();
        }
      });
    });
  },

  methods: {
    /** @public */
    focus() {
      this.onFocus();
    },

    /** @public */
    blur(e) {
      // https://github.com/vuetifyjs/vuetify/issues/5913
      // Safari tab order gets broken if called synchronous
      window.requestAnimationFrame(() => {
        this.$refs.input && this.$refs.input.blur();
      });
    },

    clearableCallback() {
      this.$refs.input && this.$refs.input.focus();
      this.$nextTick(() => this.internalValue = null);
    },

    genAppendSlot() {
      const slot = [];

      if (this.$slots['append-outer']) {
        slot.push(this.$slots['append-outer']);
      } else if (this.appendOuterIcon) {
        slot.push(this.genIcon('appendOuter'));
      }

      return this.genSlot('append', 'outer', slot);
    },

    genPrependInnerSlot() {
      const slot = [];

      if (this.$slots['prepend-inner']) {
        slot.push(this.$slots['prepend-inner']);
      } else if (this.prependInnerIcon) {
        slot.push(this.genIcon('prependInner'));
      }

      return this.genSlot('prepend', 'inner', slot);
    },

    genIconSlot() {
      const slot = [];

      if (this.$slots.append) {
        slot.push(this.$slots.append);
      } else if (this.appendIcon) {
        slot.push(this.genIcon('append'));
      }

      return this.genSlot('append', 'inner', slot);
    },

    genInputSlot() {
      const input = VInput["a" /* default */].options.methods.genInputSlot.call(this);
      const prepend = this.genPrependInnerSlot();

      if (prepend) {
        input.children = input.children || [];
        input.children.unshift(prepend);
      }

      return input;
    },

    genClearIcon() {
      if (!this.clearable) return null; // if the text field has no content then don't display the clear icon.
      // We add an empty div because other controls depend on a ref to append inner

      if (!this.isDirty) {
        return this.genSlot('append', 'inner', [this.$createElement('div')]);
      }

      return this.genSlot('append', 'inner', [this.genIcon('clear', this.clearableCallback)]);
    },

    genCounter() {
      var _a, _b, _c;

      if (!this.hasCounter) return null;
      const max = this.counter === true ? this.attrs$.maxlength : this.counter;
      const props = {
        dark: this.dark,
        light: this.light,
        max,
        value: this.computedCounterValue
      };
      return (_c = (_b = (_a = this.$scopedSlots).counter) === null || _b === void 0 ? void 0 : _b.call(_a, {
        props
      })) !== null && _c !== void 0 ? _c : this.$createElement(components_VCounter, {
        props
      });
    },

    genControl() {
      return VInput["a" /* default */].options.methods.genControl.call(this);
    },

    genDefaultSlot() {
      return [this.genFieldset(), this.genTextFieldSlot(), this.genClearIcon(), this.genIconSlot(), this.genProgress()];
    },

    genFieldset() {
      if (!this.outlined) return null;
      return this.$createElement('fieldset', {
        attrs: {
          'aria-hidden': true
        }
      }, [this.genLegend()]);
    },

    genLabel() {
      if (!this.showLabel) return null;
      const data = {
        props: {
          absolute: true,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: !this.isSingle && (this.isFocused || !!this.validationState),
          for: this.computedId,
          left: this.labelPosition.left,
          light: this.light,
          right: this.labelPosition.right,
          value: this.labelValue
        }
      };
      return this.$createElement(VLabel["a" /* default */], data, this.$slots.label || this.label);
    },

    genLegend() {
      const width = !this.singleLine && (this.labelValue || this.isDirty) ? this.labelWidth : 0;
      const span = this.$createElement('span', {
        domProps: {
          innerHTML: '&#8203;'
        },
        staticClass: 'notranslate'
      });
      return this.$createElement('legend', {
        style: {
          width: !this.isSingle ? Object(helpers["g" /* convertToUnit */])(width) : undefined
        }
      }, [span]);
    },

    genInput() {
      const listeners = Object.assign({}, this.listeners$);
      delete listeners.change; // Change should not be bound externally

      const {
        title,
        ...inputAttrs
      } = this.attrs$;
      return this.$createElement('input', {
        style: {},
        domProps: {
          value: this.type === 'number' && Object.is(this.lazyValue, -0) ? '-0' : this.lazyValue
        },
        attrs: { ...inputAttrs,
          autofocus: this.autofocus,
          disabled: this.isDisabled,
          id: this.computedId,
          placeholder: this.persistentPlaceholder || this.isFocused || !this.hasLabel ? this.placeholder : undefined,
          readonly: this.isReadonly,
          type: this.type
        },
        on: Object.assign(listeners, {
          blur: this.onBlur,
          input: this.onInput,
          focus: this.onFocus,
          keydown: this.onKeyDown
        }),
        ref: 'input',
        directives: [{
          name: 'resize',
          modifiers: {
            quiet: true
          },
          value: this.onResize
        }]
      });
    },

    genMessages() {
      if (!this.showDetails) return null;
      const messagesNode = VInput["a" /* default */].options.methods.genMessages.call(this);
      const counterNode = this.genCounter();
      return this.$createElement('div', {
        staticClass: 'v-text-field__details'
      }, [messagesNode, counterNode]);
    },

    genTextFieldSlot() {
      return this.$createElement('div', {
        staticClass: 'v-text-field__slot'
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, this.genInput(), this.suffix ? this.genAffix('suffix') : null]);
    },

    genAffix(type) {
      return this.$createElement('div', {
        class: `v-text-field__${type}`,
        ref: type
      }, this[type]);
    },

    onBlur(e) {
      this.isFocused = false;
      e && this.$nextTick(() => this.$emit('blur', e));
    },

    onClick() {
      if (this.isFocused || this.isDisabled || !this.$refs.input) return;
      this.$refs.input.focus();
    },

    onFocus(e) {
      if (!this.$refs.input) return;
      const root = Object(dom["a" /* attachedRoot */])(this.$el);
      if (!root) return;

      if (root.activeElement !== this.$refs.input) {
        return this.$refs.input.focus();
      }

      if (!this.isFocused) {
        this.isFocused = true;
        e && this.$emit('focus', e);
      }
    },

    onInput(e) {
      const target = e.target;
      this.internalValue = target.value;
      this.badInput = target.validity && target.validity.badInput;
    },

    onKeyDown(e) {
      if (e.keyCode === helpers["q" /* keyCodes */].enter && this.lazyValue !== this.initialValue) {
        this.initialValue = this.lazyValue;
        this.$emit('change', this.initialValue);
      }

      this.$emit('keydown', e);
    },

    onMouseDown(e) {
      // Prevent input from being blurred
      if (e.target !== this.$refs.input) {
        e.preventDefault();
        e.stopPropagation();
      }

      VInput["a" /* default */].options.methods.onMouseDown.call(this, e);
    },

    onMouseUp(e) {
      if (this.hasMouseDown) this.focus();
      VInput["a" /* default */].options.methods.onMouseUp.call(this, e);
    },

    setLabelWidth() {
      if (!this.outlined) return;
      this.labelWidth = this.$refs.label ? Math.min(this.$refs.label.scrollWidth * 0.75 + 6, this.$el.offsetWidth - 24) : 0;
    },

    setPrefixWidth() {
      if (!this.$refs.prefix) return;
      this.prefixWidth = this.$refs.prefix.offsetWidth;
    },

    setPrependWidth() {
      if (!this.outlined || !this.$refs['prepend-inner']) return;
      this.prependWidth = this.$refs['prepend-inner'].offsetWidth;
    },

    tryAutofocus() {
      if (!this.autofocus || typeof document === 'undefined' || !this.$refs.input) return false;
      const root = Object(dom["a" /* attachedRoot */])(this.$el);
      if (!root || root.activeElement === this.$refs.input) return false;
      this.$refs.input.focus();
      return true;
    },

    updateValue(val) {
      // Sets validationState from validatable
      this.hasColor = val;

      if (val) {
        this.initialValue = this.lazyValue;
      } else if (this.initialValue !== this.lazyValue) {
        this.$emit('change', this.lazyValue);
      }
    },

    onResize() {
      this.setLabelWidth();
      this.setPrefixWidth();
      this.setPrependWidth();
    }

  }
}));

/***/ }),
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },

    styles() {
      if (this.absolute || !this.app) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application;
      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(bottom + footer + insetFooter),
        paddingLeft: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(left),
        paddingRight: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "m"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "m"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        style: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          pointerenter: () => window.clearTimeout(this.activeTimeout),
          pointerleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));

/***/ }),
/* 258 */,
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
// Mixins



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__[/* provide */ "b"])('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));

/***/ }),
/* 260 */,
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4b0daf2a", content, true, context)
};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3adee837", content, true, context)
};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(306);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("19b0235a", content, true, context)
};

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4619c07b", content, true, context)
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("01883246", content, true, context)
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("58a776e6", content, true, context)
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5e7a7a2e", content, true, context)
};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(316);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0f044a09", content, true, context)
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3b8aa260", content, true, context)
};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(320);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("58c6b6e8", content, true, context)
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(322);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("24716ede", content, true, context)
};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53a70eee", content, true, context)
};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("57565890", content, true, context)
};

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1a807fa3", content, true, context)
};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6a157a88", content, true, context)
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ec20337c", content, true, context)
};

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("97d5653c", content, true, context)
};

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(336);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("77d81460", content, true, context)
};

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("73d4a866", content, true, context)
};

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6199d21e", content, true, context)
};

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(342);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f175b32a", content, true, context)
};

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2746532e", content, true, context)
};

/***/ }),
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(298);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("dc0628f2", content, true)

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_98ecdb9c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_98ecdb9c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_98ecdb9c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_98ecdb9c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_98ecdb9c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-98ecdb9c]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-98ecdb9c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-98ecdb9c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-98ecdb9c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-98ecdb9c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-98ecdb9c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-98ecdb9c]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-98ecdb9c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-98ecdb9c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-98ecdb9c]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-98ecdb9c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-98ecdb9c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-98ecdb9c],.use-text-paragraph[data-v-98ecdb9c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-98ecdb9c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-98ecdb9c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-98ecdb9c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-98ecdb9c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-98ecdb9c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-98ecdb9c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-98ecdb9c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-98ecdb9c]{display:none}}.fab.v-btn[data-v-98ecdb9c]{transform:scale(.5);transition:all .5s ease;opacity:0;background:var(--v-primarylight-base)!important;position:absolute;bottom:0;right:0;font-weight:var(--font-bold)}.fab.v-btn .icon[data-v-98ecdb9c]{color:var(--v-primarydark-base);font-size:40px}.page-nav[data-v-98ecdb9c]{z-index:200;position:fixed;bottom:40px;right:40px;width:56px}.page-nav nav[data-v-98ecdb9c]{height:0;overflow:hidden;transition:height .5s ease;transition-delay:.5s}.page-nav.show .fab[data-v-98ecdb9c]{opacity:1;transform:scale(1)}.page-nav .section-nav section[data-v-98ecdb9c]{margin:0 0 76px 22px;padding:0;position:relative}.page-nav .section-nav a[data-v-98ecdb9c]{margin-bottom:24px;opacity:0;position:relative;width:12px;height:12px;border-radius:50%;background:hsla(0,0%,100%,.3);border:1px solid var(--v-primarydark-base);display:block;transition:all .4s ease;color:transparent}.theme--light .page-nav .section-nav a[data-v-98ecdb9c]{border-color:rgba(0,0,0,.38)}.theme--dark .page-nav .section-nav a[data-v-98ecdb9c]{border-color:hsla(0,0%,100%,.5)}.page-nav .section-nav a.active[data-v-98ecdb9c]{background:var(--v-primarydark-base);border:1px solid var(--v-primarylight-base)}.page-nav:hover nav[data-v-98ecdb9c]{transition-delay:0s;height:100%}.page-nav:hover .section-nav a[data-v-98ecdb9c]{opacity:1;top:0!important}.tooltip[data-v-98ecdb9c]{text-transform:capitalize;font-size:14px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2065bca8", content, true)

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_7ea7f274_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(262);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_7ea7f274_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_7ea7f274_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_7ea7f274_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_7ea7f274_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-7ea7f274]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-7ea7f274]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-7ea7f274]{font-size:28px;line-height:44px}}.use-text-title2[data-v-7ea7f274]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-7ea7f274]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-7ea7f274]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-7ea7f274]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-7ea7f274]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-7ea7f274]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-7ea7f274]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-7ea7f274]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-7ea7f274]{font-size:16px;line-height:24px}}.use-text-caption[data-v-7ea7f274],.use-text-paragraph[data-v-7ea7f274]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-7ea7f274]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-7ea7f274]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-7ea7f274]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-7ea7f274]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-7ea7f274]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-7ea7f274]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-7ea7f274]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-7ea7f274]{display:none}}@-webkit-keyframes move_wave-7ea7f274{0%{background-position:0 0;transform:scaleX(2)}50%{background-position:50% -50%;transform:scale(2.3,1.2)}to{background-position:100% 0;transform:scaleX(2)}}@keyframes move_wave-7ea7f274{0%{background-position:0 0;transform:scaleX(2)}50%{background-position:50% -50%;transform:scale(2.3,1.2)}to{background-position:100% 0;transform:scaleX(2)}}iframe>.ytp-chrome-top[data-v-7ea7f274],iframe>.ytp-show-cards-title[data-v-7ea7f274]{display:none}.root[data-v-7ea7f274]{background:linear-gradient(-45deg,var(--v-primary-base) 20%,var(--v-primarydark-base) 70%);position:relative;padding:200px 0 120px}@media(min-width:1280px){.root[data-v-7ea7f274]{height:780px;padding:240px 0 40px}}@media(max-width:599px){.root[data-v-7ea7f274]{padding:200px 0 80px;position:relative}}.decoration[data-v-7ea7f274]{position:absolute;width:100%;height:100%;border:0;top:0;overflow:hidden}[dir=ltr] .decoration[data-v-7ea7f274]{left:0}[dir=rtl] .decoration[data-v-7ea7f274]{right:0}.decoration svg[data-v-7ea7f274]{fill:#080a3e;opacity:.15;position:fixed;top:0}video[data-v-7ea7f274]{-o-object-fit:cover;object-fit:cover;width:100vw;height:100vh;position:fixed;top:0;left:0}.left-deco[data-v-7ea7f274]{left:0;right:auto;width:1200px;height:1500px;transform:scale(.5);transform-origin:top left}.right-deco[data-v-7ea7f274]{left:auto;right:0;height:1500px;transform:scale(.5);transform-origin:top right}.slider-wrap[data-v-7ea7f274]{position:relative;z-index:3;display:flex;justify-content:center}.text-center[data-v-7ea7f274]{max-width:920px;margin-bottom:16px}@media(max-width:959px){.text-center[data-v-7ea7f274]{text-align:left}.theme--dark .text-center[data-v-7ea7f274],.theme--light .text-center[data-v-7ea7f274]{color:var(--v-primary-base)}}@media(min-width:1280px){[dir=ltr] .text-center h3[data-v-7ea7f274]{padding-right:40px}[dir=rtl] .text-center h3[data-v-7ea7f274]{padding-left:40px}}.text-center h3 strong[data-v-7ea7f274]{font-weight:var(--font-bold)}.text-center p[data-v-7ea7f274]{margin:48px 0}.btn-area[data-v-7ea7f274]{display:flex}@media(max-width:959px){.btn-area[data-v-7ea7f274]{justify-content:center}}@media(max-width:599px){.btn-area[data-v-7ea7f274]{flex-direction:column-reverse}.btn-area>*[data-v-7ea7f274]{margin-bottom:32px;height:56px}}.play-btn[data-v-7ea7f274]{text-transform:uppercase;color:#fff;display:flex;align-items:center;font-size:16px;font-weight:var(--font-regular);background:none;padding-left:0!important;padding-right:0!important}@media(min-width:600px){[dir=ltr] .play-btn[data-v-7ea7f274]{margin-right:32px}[dir=rtl] .play-btn[data-v-7ea7f274]{margin-left:32px}}.play-btn .icon[data-v-7ea7f274]{border-radius:50%;transition:all .3s ease-out;width:40px;height:40px;text-align:center;line-height:47px;vertical-align:middle;border:1px solid #ff0076;background:var(--v-primary-base)}[dir=ltr] .play-btn .icon[data-v-7ea7f274]{margin-right:8px}[dir=rtl] .play-btn .icon[data-v-7ea7f274]{margin-left:8px}.play-btn i[data-v-7ea7f274]{color:#fff;line-height:22px;font-size:24px}[dir=ltr] .play-btn i[data-v-7ea7f274]{margin-left:4px}[dir=rtl] .play-btn i[data-v-7ea7f274]{margin-right:4px}.play-btn:hover .icon[data-v-7ea7f274]{background:var(--v-primarydark-base)}[dir=ltr] .play-btn:hover .icon[data-v-7ea7f274]{left:0}[dir=rtl] .play-btn:hover .icon[data-v-7ea7f274]{right:0}@media(max-width:959px){.illustration[data-v-7ea7f274]{display:none}}.illustration img[data-v-7ea7f274]{display:block}@media(min-width:960px){.illustration img[data-v-7ea7f274]{max-width:400px}}@media(min-width:1280px){.illustration img[data-v-7ea7f274]{max-width:380px}}.wave[data-v-7ea7f274]{transform:translateZ(0)}.deco[data-v-7ea7f274]{position:absolute;height:110px;bottom:-15px;width:100%}[dir=ltr] .deco[data-v-7ea7f274]{left:0}[dir=rtl] .deco[data-v-7ea7f274]{right:0}@media(min-width:600px){.deco[data-v-7ea7f274]{bottom:-20}}@media(min-width:1280px){.deco[data-v-7ea7f274]{bottom:-10}}.deco .wave[data-v-7ea7f274]{position:absolute;height:125%;width:100%;bottom:0;transform:scale(5.2,6)}[dir=ltr] .deco .wave[data-v-7ea7f274]{left:0}[dir=rtl] .deco .wave[data-v-7ea7f274]{right:0}.theme--dark .deco .wave[data-v-7ea7f274]{background-image:url(/images/saas/deco-wave-dark.png)}.theme--light .deco .wave[data-v-7ea7f274]{background-image:url(/images/saas/deco-wave-light.png)}@media(max-width:1919px){.deco .wave[data-v-7ea7f274]{width:140%}}@media(max-width:599px){.deco .wave[data-v-7ea7f274]{transform:scale(6,5)}}.wave-one[data-v-7ea7f274]{background-size:50% 100px;-webkit-animation:25s linear infinite;animation:25s linear infinite;-webkit-animation-name:move_wave-7ea7f274;animation-name:move_wave-7ea7f274}.wave-one[data-v-7ea7f274],.wave-two[data-v-7ea7f274]{opacity:.2;background-position:0 0}.wave-two[data-v-7ea7f274]{background-size:50% 120px;-webkit-animation:20s linear infinite;animation:20s linear infinite;-webkit-animation-name:move_wave-7ea7f274;animation-name:move_wave-7ea7f274}.wave-cover[data-v-7ea7f274]{background-size:51% 100px;background-position:600px 0;transform:scaleX(2)}@media(max-width:1279px){.wave-cover[data-v-7ea7f274]{background-size:51% 70px;background-position:397px 10px}}@media(max-width:599px){.wave-cover[data-v-7ea7f274]{background-position:bottom}}.video-popup[data-v-7ea7f274]{max-width:none;width:690px}.video-popup h2[data-v-7ea7f274]{display:flex;width:100%;justify-content:space-between;align-items:center}@media(max-width:1279px){.video-popup[data-v-7ea7f274]{width:100%}.video-popup>*[data-v-7ea7f274]{padding:8px}.video-popup[data-v-7ea7f274] iframe{width:100%}}.deco-inner[data-v-7ea7f274]{position:absolute;top:0;width:100%;height:100%}[dir=ltr] .deco-inner[data-v-7ea7f274]{left:0}[dir=rtl] .deco-inner[data-v-7ea7f274]{right:0}.hide[data-v-7ea7f274]{visibility:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_096a6704_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_096a6704_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_096a6704_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_096a6704_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_096a6704_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-initialized .slick-slide[data-v-096a6704]{width:auto!important}.use-text-title[data-v-096a6704]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-096a6704]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-096a6704]{font-size:28px;line-height:44px}}.use-text-title2[data-v-096a6704]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-096a6704]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-096a6704]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-096a6704]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-096a6704]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-096a6704]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-096a6704]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-096a6704]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-096a6704]{font-size:16px;line-height:24px}}.use-text-caption[data-v-096a6704],.use-text-paragraph[data-v-096a6704]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-096a6704]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-096a6704]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-096a6704]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-096a6704]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-096a6704]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-096a6704]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-096a6704]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-096a6704]{display:none}}.root[data-v-096a6704]{display:block;text-align:center;margin-bottom:40px}#main-wrap .root .container[data-v-096a6704]{max-width:100%;width:100%}@media(max-width:599px){.root[data-v-096a6704]{margin-bottom:80px}}.root .carousel-wrap[data-v-096a6704]{position:relative}.slider[data-v-096a6704]{width:auto!important}.nav[data-v-096a6704]{width:100px;height:40px;text-align:center;line-height:30px;position:absolute;top:calc(50% - 20px);z-index:90;box-shadow:0 0 20px 2px rgba(0,0,0,.2)}.theme--light .nav[data-v-096a6704]{background-color:#faf9f9}.theme--dark .nav[data-v-096a6704]{background-color:#00032a}.nav[data-v-096a6704]:hover{background:var(--v-primarylight-base)}.nav i[data-v-096a6704]{vertical-align:middle}.theme--light .nav i[data-v-096a6704]{color:#080a3e}.theme--dark .nav i[data-v-096a6704]{color:#fff}@media(max-width:1279px){.nav[data-v-096a6704]{display:none}}.prev[data-v-096a6704]{left:-40px}.next[data-v-096a6704]{right:-40px}img[data-v-096a6704]{height:54px;margin:96px;filter:grayscale(10) contrast(.5) brightness(1);transition:all .3s ease-out}img[data-v-096a6704]:hover{filter:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_691f9ac3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_691f9ac3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_691f9ac3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_691f9ac3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_691f9ac3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-691f9ac3]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-691f9ac3]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-691f9ac3]{font-size:28px;line-height:44px}}.use-text-title2[data-v-691f9ac3]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-691f9ac3]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-691f9ac3]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-691f9ac3]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-691f9ac3]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-691f9ac3]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-691f9ac3]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-691f9ac3]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-691f9ac3]{font-size:16px;line-height:24px}}.use-text-caption[data-v-691f9ac3],.use-text-paragraph[data-v-691f9ac3]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-691f9ac3]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-691f9ac3]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-691f9ac3]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-691f9ac3]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-691f9ac3]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-691f9ac3]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-691f9ac3]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-691f9ac3]{display:none}}.parallax-wrap[data-v-691f9ac3]{position:absolute;width:100%;height:100%;top:0;z-index:0;transform:scale(.8)}[dir=ltr] .parallax-wrap[data-v-691f9ac3]{left:0}[dir=rtl] .parallax-wrap[data-v-691f9ac3]{right:0}.parallax-wrap.dots-wrap[data-v-691f9ac3]{z-index:40}@media(max-width:1279px){.parallax-wrap[data-v-691f9ac3]{display:none}}.inner-parallax[data-v-691f9ac3]{height:800px}.inner-parallax[data-v-691f9ac3],.inner-parallax>div[data-v-691f9ac3]{width:100%;position:absolute;display:block}.inner-parallax>div[data-v-691f9ac3]{height:500px}.inner-parallax.large[data-v-691f9ac3]{top:600px}.inner-parallax.medium[data-v-691f9ac3]{top:200px}.inner-parallax .Masthead[data-v-691f9ac3]{overflow:visible}.inner-parallax .figure>div[data-v-691f9ac3]{display:block;position:absolute;top:200px;width:100%;height:700px}.inner-parallax .figure>div svg[data-v-691f9ac3]{position:absolute}.plus[data-v-691f9ac3]{fill:#eca426;top:100px;width:100px;height:100px;transform:scale(.5)}[dir=ltr] .plus[data-v-691f9ac3]{left:20px}[dir=rtl] .plus[data-v-691f9ac3]{right:20px}.circle[data-v-691f9ac3]{fill:#080a3e;top:20px;width:120px;height:120px;transform:scale(.5)}[dir=ltr] .circle[data-v-691f9ac3]{right:70px}[dir=rtl] .circle[data-v-691f9ac3]{left:70px}.zigzag[data-v-691f9ac3]{fill:var(--v-primary-base);bottom:300px;width:250px;height:75px;transform:scale(.5)}[dir=ltr] .zigzag[data-v-691f9ac3]{left:0}[dir=rtl] .zigzag[data-v-691f9ac3]{right:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_4989517f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_4989517f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_4989517f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_4989517f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_4989517f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-4989517f]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-4989517f]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4989517f]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4989517f]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4989517f]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4989517f]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4989517f]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-4989517f]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4989517f]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4989517f]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4989517f]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4989517f]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4989517f],.use-text-paragraph[data-v-4989517f]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4989517f]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4989517f]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4989517f]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4989517f]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4989517f]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4989517f]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4989517f]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4989517f]{display:none}}.parallax-wrap[data-v-4989517f]{position:absolute;width:100%;height:100%;top:0;z-index:0;transform:scale(.8)}[dir=ltr] .parallax-wrap[data-v-4989517f]{left:0}[dir=rtl] .parallax-wrap[data-v-4989517f]{right:0}.parallax-wrap.dots-wrap[data-v-4989517f]{z-index:40}@media(max-width:1279px){.parallax-wrap[data-v-4989517f]{display:none}}.inner-parallax[data-v-4989517f]{height:800px}.inner-parallax[data-v-4989517f],.inner-parallax>div[data-v-4989517f]{width:100%;position:absolute;display:block}.inner-parallax>div[data-v-4989517f]{height:500px}.inner-parallax.large[data-v-4989517f]{top:600px}.inner-parallax.medium[data-v-4989517f]{top:200px}.inner-parallax .Masthead[data-v-4989517f]{overflow:visible}.inner-parallax .figure>div[data-v-4989517f]{display:block;position:absolute;top:200px;width:100%;height:700px}.inner-parallax .figure>div svg[data-v-4989517f]{position:absolute}.plus[data-v-4989517f]{fill:#eca426;top:100px;width:100px;height:100px;transform:scale(.5)}[dir=ltr] .plus[data-v-4989517f]{left:20px}[dir=rtl] .plus[data-v-4989517f]{right:20px}.circle[data-v-4989517f]{fill:#080a3e;top:20px;width:120px;height:120px;transform:scale(.5)}[dir=ltr] .circle[data-v-4989517f]{right:70px}[dir=rtl] .circle[data-v-4989517f]{left:70px}.zigzag[data-v-4989517f]{fill:var(--v-primary-base);bottom:300px;width:250px;height:75px;transform:scale(.5)}[dir=ltr] .zigzag[data-v-4989517f]{left:0}[dir=rtl] .zigzag[data-v-4989517f]{right:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature3_vue_vue_type_style_index_0_id_03669d12_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature3_vue_vue_type_style_index_0_id_03669d12_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature3_vue_vue_type_style_index_0_id_03669d12_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature3_vue_vue_type_style_index_0_id_03669d12_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature3_vue_vue_type_style_index_0_id_03669d12_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-03669d12]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-03669d12]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-03669d12]{font-size:28px;line-height:44px}}.use-text-title2[data-v-03669d12]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-03669d12]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-03669d12]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-03669d12]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-03669d12]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-03669d12]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-03669d12]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-03669d12]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-03669d12]{font-size:16px;line-height:24px}}.use-text-caption[data-v-03669d12],.use-text-paragraph[data-v-03669d12]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-03669d12]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-03669d12]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-03669d12]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-03669d12]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-03669d12]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-03669d12]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-03669d12]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-03669d12]{display:none}}.root[data-v-03669d12]{position:relative}.decoration[data-v-03669d12]{position:absolute;width:1280px;height:100%;top:100px}[dir=ltr] .decoration[data-v-03669d12]{left:-10px}[dir=rtl] .decoration[data-v-03669d12]{right:-10px}.decoration svg[data-v-03669d12]{width:100%;height:1700px;opacity:.2;transform:scale(1.3)}.theme--light .decoration svg[data-v-03669d12]{fill:var(--v-primarylight-base)}.theme--dark .decoration svg[data-v-03669d12]{fill:var(--v-primarydark-base)}@media only screen and (min-width:1400px){.decoration svg[data-v-03669d12]{transform:scaleX(6)}}@media(min-width:1920px){.decoration svg[data-v-03669d12]{display:flex}}@media(max-width:599px){.decoration svg[data-v-03669d12]{transform:scale(.5);transform-origin:center left}}.item[data-v-03669d12]{position:relative;min-height:320px;margin-bottom:160px}.item .desc[data-v-03669d12]{position:relative;z-index:60}.item.last[data-v-03669d12]{margin-bottom:80px}@media(max-width:1279px){.item[data-v-03669d12]{margin-bottom:120px}}@media(max-width:959px){.item[data-v-03669d12]{text-align:center}}.item h6[data-v-03669d12]{margin-bottom:40px}.item .parallax-wrap .Masthead[data-v-03669d12]{overflow:visible;min-height:80vh}@media(max-width:599px){.item .parallax-wrap .Masthead[data-v-03669d12]{min-height:45vh}}@media(min-width:960px){.item .parallax-wrap[data-v-03669d12]{position:absolute;top:0;left:0;width:100%;height:100%}}@media(max-width:959px){.item .parallax-wrap[data-v-03669d12]{margin:24px 0}}@media(max-width:599px){.item .parallax-wrap[data-v-03669d12]{margin:0}}.item .parallax-wrap .viewport[data-v-03669d12]{perspective:1000px}.item .figure[data-v-03669d12]{transform-style:preserve-3d;overflow:hidden;border-radius:12px;background:transparent;padding:24px 8px 8px;margin:24px}.item .figure img[data-v-03669d12]{width:100%}.screen[data-v-03669d12]{position:relative}.screen img[data-v-03669d12]{width:90%;display:block}.graphic[data-v-03669d12]{position:relative}.graphic img[data-v-03669d12]{width:120%;display:block}.tabs[data-v-03669d12]{position:relative;z-index:55;margin-top:-40px}.tabs .v-tabs-slider-wrapper .v-tabs-slider[data-v-03669d12]{background-color:var(--v-primarylight-base)!important}@media(max-width:959px){.tabs section[data-v-03669d12]{margin:24px 0}}@media(max-width:599px){.tabs[data-v-03669d12] .v-slide-group__prev.v-slide-group__prev--disabled{display:none!important}}@media(max-width:599px){.tabs[data-v-03669d12] .v-slide-group__wrapper{overflow:auto}}.tab-content[data-v-03669d12]{position:relative}@media(min-width:960px){.tab-content[data-v-03669d12]{padding:64px 32px 0}}.tab-content section[data-v-03669d12]{position:relative}.tab-content section div[data-v-03669d12]{overflow:visible}.tab-label[data-v-03669d12]{font-size:18px;font-weight:var(--font-medium);letter-spacing:0;padding:0 40px;border-bottom:1px solid}.theme--light .tab-label[data-v-03669d12]{border-color:rgba(0,0,0,.38)}.theme--dark .tab-label[data-v-03669d12]{border-color:hsla(0,0%,100%,.5)}@media(max-width:599px){.tab-label[data-v-03669d12]{font-size:14px}}.theme--light .tab-label.selected[data-v-03669d12]{color:var(--v-primary-base)}.theme--dark .tab-label[data-v-03669d12],.theme--dark .tab-label.selected[data-v-03669d12]{color:var(--v-primarylight-base)}.illustration-left[data-v-03669d12]{position:relative;z-index:1;max-height:600px;height:100%}@media(min-width:960px){.illustration-left[data-v-03669d12]{top:-220px}}@media(min-width:960px){.illustration-left .screen[data-v-03669d12]{margin-top:280px}.v-application--is-ltr .illustration-left .screen[data-v-03669d12],.v-application--is-rtl .illustration-left .screen[data-v-03669d12]{transform:rotateY(0deg)}}.illustration-left .graphic[data-v-03669d12]{top:200px;width:360px}[dir=ltr] .illustration-left .graphic[data-v-03669d12]{left:70px}[dir=rtl] .illustration-left .graphic[data-v-03669d12]{right:70px}@media(min-width:960px){.v-application--is-ltr .illustration-left .graphic[data-v-03669d12],.v-application--is-rtl .illustration-left .graphic[data-v-03669d12]{transform:rotateY(0deg) rotateX(0deg) rotate(0deg)}}.illustration-right[data-v-03669d12]{position:relative;z-index:2;top:0}@media(min-width:960px){.illustration-right[data-v-03669d12]{top:-400px}}@media(min-width:960px){.illustration-right .screen[data-v-03669d12]{top:40px;margin-top:400px}[dir=ltr] .illustration-right .screen[data-v-03669d12]{left:-20px}[dir=rtl] .illustration-right .screen[data-v-03669d12]{right:-20px}.v-application--is-ltr .illustration-right .screen[data-v-03669d12],.v-application--is-rtl .illustration-right .screen[data-v-03669d12]{transform:rotateY(0deg)}}.illustration-right .graphic[data-v-03669d12]{top:400px;width:400px}[dir=ltr] .illustration-right .graphic[data-v-03669d12]{right:-60px}[dir=rtl] .illustration-right .graphic[data-v-03669d12]{left:-60px}@media screen and (min-width:1400px){.illustration-right .graphic[data-v-03669d12]{top:200px}}@media(min-width:960px){.illustration-right .graphic[data-v-03669d12]{transform-style:preserve-3d}.v-application--is-ltr .illustration-right .graphic[data-v-03669d12],.v-application--is-rtl .illustration-right .graphic[data-v-03669d12]{transform:rotateY(0deg) rotateX(0deg) rotate(0deg)}}.illustration-center[data-v-03669d12]{perspective:1000px}.illustration-center .figure.screen[data-v-03669d12]{display:block;text-align:center;max-width:500px;margin:50px auto 0;transform:rotateY(0) rotateX(0deg) rotate(0deg)}.illustration-center .figure.screen img[data-v-03669d12]{margin:0 auto;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_08be2e9c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_08be2e9c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_08be2e9c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_08be2e9c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_08be2e9c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-08be2e9c]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-08be2e9c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-08be2e9c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-08be2e9c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-08be2e9c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-08be2e9c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-08be2e9c]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-08be2e9c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-08be2e9c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-08be2e9c]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-08be2e9c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-08be2e9c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-08be2e9c],.use-text-paragraph[data-v-08be2e9c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-08be2e9c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-08be2e9c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-08be2e9c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-08be2e9c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-08be2e9c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-08be2e9c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-08be2e9c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-08be2e9c]{display:none}}.root[data-v-08be2e9c]{position:relative}.decoration[data-v-08be2e9c]{position:absolute;width:1280px;height:100%;top:100px}[dir=ltr] .decoration[data-v-08be2e9c]{left:-10px}[dir=rtl] .decoration[data-v-08be2e9c]{right:-10px}.decoration svg[data-v-08be2e9c]{width:100%;height:1700px;opacity:.2;transform:scale(1.3)}.theme--light .decoration svg[data-v-08be2e9c]{fill:var(--v-primarylight-base)}.theme--dark .decoration svg[data-v-08be2e9c]{fill:var(--v-primarydark-base)}@media only screen and (min-width:1400px){.decoration svg[data-v-08be2e9c]{transform:scaleX(2.5)}}@media(min-width:1920px){.decoration svg[data-v-08be2e9c]{display:none}}@media(max-width:599px){.decoration svg[data-v-08be2e9c]{transform:scale(.5);transform-origin:center left}}.item[data-v-08be2e9c]{position:relative;min-height:320px;margin-bottom:160px}.item .desc[data-v-08be2e9c]{position:relative;z-index:60}.item.last[data-v-08be2e9c]{margin-bottom:80px}@media(max-width:1279px){.item[data-v-08be2e9c]{margin-bottom:120px}}@media(max-width:959px){.item[data-v-08be2e9c]{text-align:center}}.item h6[data-v-08be2e9c]{margin-bottom:40px}.item .parallax-wrap .Masthead[data-v-08be2e9c]{overflow:visible;min-height:80vh}@media(max-width:599px){.item .parallax-wrap .Masthead[data-v-08be2e9c]{min-height:47vh}}@media(min-width:960px){.item .parallax-wrap[data-v-08be2e9c]{position:absolute;top:0;left:0;width:100%;height:100%}}@media(max-width:959px){.item .parallax-wrap[data-v-08be2e9c]{margin:24px 0}}@media(max-width:599px){.item .parallax-wrap[data-v-08be2e9c]{margin:0}}.item .parallax-wrap .viewport[data-v-08be2e9c]{perspective:1000px}.item .figure[data-v-08be2e9c]{transform-style:preserve-3d;overflow:hidden;border-radius:12px;background:transparent;padding:24px 8px 8px;margin:24px}.item .figure img[data-v-08be2e9c]{width:100%}.screen[data-v-08be2e9c]{position:relative}.screen img[data-v-08be2e9c]{width:90%;display:block}.graphic[data-v-08be2e9c]{position:relative}.graphic img[data-v-08be2e9c]{width:100%;display:block}.tabs[data-v-08be2e9c]{position:relative;z-index:55;margin-top:-40px}.tabs .v-tabs-slider-wrapper .v-tabs-slider[data-v-08be2e9c]{background-color:var(--v-primarylight-base)!important}@media(max-width:959px){.tabs section[data-v-08be2e9c]{margin:24px 0}}@media(max-width:599px){.tabs[data-v-08be2e9c] .v-slide-group__prev.v-slide-group__prev--disabled{display:none!important}}@media(max-width:599px){.tabs[data-v-08be2e9c] .v-slide-group__wrapper{overflow:auto}}.tab-content[data-v-08be2e9c]{position:relative}@media(min-width:960px){.tab-content[data-v-08be2e9c]{padding:64px 32px 0}}.tab-content section[data-v-08be2e9c]{position:relative}.tab-content section div[data-v-08be2e9c]{overflow:visible}.tab-label[data-v-08be2e9c]{font-size:18px;font-weight:var(--font-medium);letter-spacing:0;padding:0 40px;border-bottom:1px solid}.theme--light .tab-label[data-v-08be2e9c]{border-color:rgba(0,0,0,.38)}.theme--dark .tab-label[data-v-08be2e9c]{border-color:hsla(0,0%,100%,.5)}@media(max-width:599px){.tab-label[data-v-08be2e9c]{font-size:14px}}.theme--light .tab-label.selected[data-v-08be2e9c]{color:var(--v-primary-base)}.theme--dark .tab-label[data-v-08be2e9c],.theme--dark .tab-label.selected[data-v-08be2e9c]{color:var(--v-primarylight-base)}.illustration-left[data-v-08be2e9c]{position:relative;z-index:1;max-height:600px;height:100%}@media(min-width:960px){.illustration-left[data-v-08be2e9c]{top:-120px}}@media(min-width:960px){.illustration-left .screen[data-v-08be2e9c]{margin-top:250px}.v-application--is-ltr .illustration-left .screen[data-v-08be2e9c],.v-application--is-rtl .illustration-left .screen[data-v-08be2e9c]{transform:rotateY(0deg)}}.illustration-left .graphic[data-v-08be2e9c]{top:200px;width:360px}[dir=ltr] .illustration-left .graphic[data-v-08be2e9c]{left:70px}[dir=rtl] .illustration-left .graphic[data-v-08be2e9c]{right:70px}@media(min-width:960px){.v-application--is-ltr .illustration-left .graphic[data-v-08be2e9c],.v-application--is-rtl .illustration-left .graphic[data-v-08be2e9c]{transform:rotateY(0deg) rotateX(0deg) rotate(0deg)}}.illustration-right[data-v-08be2e9c]{position:relative;z-index:2;top:0}@media(min-width:960px){.illustration-right[data-v-08be2e9c]{top:-250px}}@media(min-width:960px){.illustration-right .screen[data-v-08be2e9c]{margin-top:63%}[dir=ltr] .illustration-right .screen[data-v-08be2e9c]{left:0}[dir=rtl] .illustration-right .screen[data-v-08be2e9c]{right:0}.v-application--is-ltr .illustration-right .screen[data-v-08be2e9c],.v-application--is-rtl .illustration-right .screen[data-v-08be2e9c]{transform:rotateY(0deg)}}.illustration-right .graphic[data-v-08be2e9c]{top:400px;width:500px}[dir=ltr] .illustration-right .graphic[data-v-08be2e9c]{right:-60px}[dir=rtl] .illustration-right .graphic[data-v-08be2e9c]{left:-60px}@media screen and (min-width:1400px){.illustration-right .graphic[data-v-08be2e9c]{top:10px}}@media(min-width:960px){.illustration-right .graphic[data-v-08be2e9c]{transform-style:preserve-3d}.v-application--is-ltr .illustration-right .graphic[data-v-08be2e9c],.v-application--is-rtl .illustration-right .graphic[data-v-08be2e9c]{transform:rotateY(0deg) rotateX(0deg) rotate(0deg)}}.illustration-center[data-v-08be2e9c]{perspective:1000px}.illustration-center .figure.screen[data-v-08be2e9c]{display:block;text-align:center;max-width:500px;margin:50px auto 0;transform:rotateY(0) rotateX(0deg) rotate(0deg)}.illustration-center .figure.screen img[data-v-08be2e9c]{margin:0 auto;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_4cd44019_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(268);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_4cd44019_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_4cd44019_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_4cd44019_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_4cd44019_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-4cd44019]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-4cd44019]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4cd44019]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4cd44019]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4cd44019]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4cd44019]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4cd44019]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-4cd44019]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4cd44019]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4cd44019]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4cd44019]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4cd44019]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4cd44019],.use-text-paragraph[data-v-4cd44019]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4cd44019]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4cd44019]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4cd44019]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4cd44019]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4cd44019]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4cd44019]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4cd44019]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4cd44019]{display:none}}.root[data-v-4cd44019]{position:relative}@media(min-width:600px){.root[data-v-4cd44019]{padding-bottom:64px}}@media(max-width:959px){.theme--dark .root[data-v-4cd44019]{background:linear-gradient(-45deg,var(--v-primary-base) 20%,var(--v-primarydark-base) 70%)}.theme--light .root[data-v-4cd44019]{background:#f3f3f3}}@media(max-width:599px){.root[data-v-4cd44019]{padding-bottom:80px}}.slider-wrap[data-v-4cd44019]{position:relative;left:0}.decoration[data-v-4cd44019]{position:absolute;bottom:-380px;width:950px;height:600px;align-items:center;align-content:center}[dir=ltr] .decoration[data-v-4cd44019]{left:-50px}[dir=rtl] .decoration[data-v-4cd44019]{right:-50px}@media(max-width:1279px){[dir=ltr] .decoration[data-v-4cd44019]{left:-320px}[dir=rtl] .decoration[data-v-4cd44019]{right:-320px}}.decoration svg[data-v-4cd44019]{transform:scale(1.6);width:100%;height:100%}.theme--dark .decoration svg[data-v-4cd44019]{fill:var(--v-primary-base)}.theme--light .decoration svg[data-v-4cd44019]{fill:#f3f3f3}.testi-title[data-v-4cd44019]{position:relative;margin:0 24px 64px;padding-top:56px;text-align:center!important;color:#fff}.testi-title strong[data-v-4cd44019]{font-weight:var(--font-bold)}.theme--dark .testi-title[data-v-4cd44019]{text-shadow:0 0 15px #0ff8ff}.theme--light .testi-title[data-v-4cd44019]{text-shadow:unset;color:var(--v-primary-base)}.sliderWrap[data-v-4cd44019]{position:relative}.v-icon.icon[data-v-4cd44019]{font-size:140px;position:absolute;color:#080a3e;opacity:.3;top:200px}@media(min-width:600px){[dir=ltr] .v-icon.icon[data-v-4cd44019]{left:240px}[dir=rtl] .v-icon.icon[data-v-4cd44019]{right:240px}}@media(min-width:1280px){.carousel[data-v-4cd44019]{margin:0 16px}}.carousel .slick-active p[data-v-4cd44019]{opacity:1;transition:all .5s cubic-bezier(.45,.05,.55,.95);transform:translateZ(0)}.item[data-v-4cd44019]{position:relative}.theme--dark .inner[data-v-4cd44019]{color:#fff}.theme--light .inner[data-v-4cd44019]{color:var(--v-primary-base)}.v-application--is-rtl .inner[data-v-4cd44019]{direction:rtl}@media(min-width:600px){.inner[data-v-4cd44019]{display:flex}}.inner p[data-v-4cd44019]{opacity:0;flex:1;transform:translate3d(-10%,0,0);margin-top:40px}@media(min-width:1280px){.inner p[data-v-4cd44019]{margin-top:80px}}@media(min-width:600px){.inner p[data-v-4cd44019]{width:100%}}@media(max-width:599px){.inner p[data-v-4cd44019]{text-align:center;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:75px;overflow:hidden;text-overflow:ellipsis}}.profile[data-v-4cd44019]{text-align:left;padding:77px 24px 16px!important}@media(min-width:1280px){.profile[data-v-4cd44019]{padding:16px 24px}}@media(max-width:599px){.profile[data-v-4cd44019]{text-align:center}}.avatar[data-v-4cd44019]{width:85px!important;height:85px!important;margin:0 auto 24px;display:none}.name[data-v-4cd44019]{font-size:18px;font-weight:var(--font-medium)}.name span[data-v-4cd44019]{margin-top:4px;font-size:14px;display:block}.v-btn[data-v-4cd44019]{font-weight:600}.v-btn:not(.v-btn--round).v-size--large[data-v-4cd44019]{font-size:.9375rem;padding:7px 36px;border:1px solid #ff0076!important;margin-top:40px;background-color:#080a3e}.logo-wrap[data-v-4cd44019]{position:relative;z-index:42;text-align:center}.figure-btn[data-v-4cd44019]{display:inline-table;padding:24px;line-height:150px;text-align:center;vertical-align:middle;width:16%;height:150px}.figure-btn button[data-v-4cd44019]{height:auto!important;padding:6px 8px!important;border-radius:36px}.figure-btn button[data-v-4cd44019] .v-btn__content{display:block;width:100%;height:100%}@media(max-width:1279px){.figure-btn[data-v-4cd44019]{padding:16px}}.figure-btn img[data-v-4cd44019]{transition:all .3s ease-out;display:block;width:100%;filter:grayscale(7) contrast(.5) brightness(1.2)}.figure-btn .active img[data-v-4cd44019],.figure-btn:hover img[data-v-4cd44019]{filter:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_e2151f4a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-e2151f4a]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-e2151f4a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-e2151f4a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-e2151f4a]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-e2151f4a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-e2151f4a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-e2151f4a]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-e2151f4a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-e2151f4a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-e2151f4a]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-e2151f4a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-e2151f4a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-e2151f4a],.use-text-paragraph[data-v-e2151f4a]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-e2151f4a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-e2151f4a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-e2151f4a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-e2151f4a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-e2151f4a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-e2151f4a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-e2151f4a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-e2151f4a]{display:none}}.pricing[data-v-e2151f4a]{position:relative;border-radius:40px!important;overflow:hidden;text-align:center;z-index:2;border:1px solid transparent;max-width:300px;margin-bottom:24px}.pricing ul[data-v-e2151f4a]{padding:0 16px;margin-bottom:24px;list-style:none}.pricing ul li[data-v-e2151f4a]{list-style:none;font-size:16px;text-align:center;padding:8px;border-bottom:2px dashed}.theme--light .pricing ul li[data-v-e2151f4a]{border-color:rgba(0,0,0,.12)}.theme--dark .pricing ul li[data-v-e2151f4a]{border-color:hsla(0,0%,100%,.12)}.pricing ul li[data-v-e2151f4a]:last-child{border-bottom:none}.pricing[data-v-e2151f4a]:hover{border:1px solid var(--v-primary-base)}.theme--light .pricing[data-v-e2151f4a]:hover{box-shadow:0 0 20px 5px var(--v-primarylight-base)}.theme--dark .pricing[data-v-e2151f4a]:hover{box-shadow:0 0 20px 5px #00032a}.title-card[data-v-e2151f4a]{padding:40px 0 16px;text-transform:uppercase;font-size:24px;position:relative}.theme--light .title-card[data-v-e2151f4a]{color:var(--v-primarydark-base)}.theme--dark .title-card[data-v-e2151f4a]{color:var(--v-primarylight-base)}.title-card p[data-v-e2151f4a]{font-weight:var(--font-medium);font-size:16px}.title-card h4[data-v-e2151f4a]{font-weight:var(--font-bold);text-transform:none;margin-top:16px}.theme--light .title-card h4[data-v-e2151f4a]{color:var(--v-primary-base)}.theme--dark .title-card h4[data-v-e2151f4a]{color:hsla(0,0%,100%,.7)}.btn-area[data-v-e2151f4a]{padding:16px;position:relative}.theme--light .btn-area[data-v-e2151f4a]{color:var(--v-primary-base)}.theme--dark .btn-area[data-v-e2151f4a]{color:hsla(0,0%,100%,.7)}.theme--light .btn-area[data-v-e2151f4a]{position:relative}.theme--light .btn-area[data-v-e2151f4a]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.12);opacity:.04}.theme--dark .btn-area[data-v-e2151f4a]{position:relative}.theme--dark .btn-area[data-v-e2151f4a]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:hsla(0,0%,100%,.12);opacity:.04}.btn-area .button[data-v-e2151f4a]{margin-top:16px}.btn-area .desc[data-v-e2151f4a]{font-size:14px}.theme--light .basic .title-card[data-v-e2151f4a]{color:var(--v-secondarydark-base)}.theme--dark .basic .title-card[data-v-e2151f4a]{color:#f3f3f3}.basic .btn-area[data-v-e2151f4a]{position:relative}.basic .btn-area[data-v-e2151f4a]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#080a3e;opacity:.3}.basic[data-v-e2151f4a]:hover{border-color:#080a3e}.value[data-v-e2151f4a]{z-index:20;border:1px solid var(--v-primary-base)}.value .title-card[data-v-e2151f4a]{padding-bottom:0;margin-bottom:64px;color:#fff;height:90px;padding-top:40px}.value .title-card h4[data-v-e2151f4a]{position:relative;color:#fff}.value .title-card p[data-v-e2151f4a]{position:relative}.value .title-card[data-v-e2151f4a]:before{content:\"\";width:160%;position:absolute;border-radius:50%;bottom:-60px;height:400px;left:-30%;background:linear-gradient(-185deg,var(--v-primary-base) 60%,var(--v-primarydark-base))}.value ul[data-v-e2151f4a]{padding-top:16px}.theme--light .value[data-v-e2151f4a]:hover{box-shadow:0 0 20px 5px var(--v-primarylight-base)}.theme--dark .value[data-v-e2151f4a]:hover{box-shadow:0 0 20px 5px #00032a}.news[data-v-e2151f4a]{display:flex}.v-application--is-rtl .news[data-v-e2151f4a]{direction:rtl}@media(max-width:599px){.news[data-v-e2151f4a]{flex-direction:column}}.news p[data-v-e2151f4a]{margin-bottom:0}.news figure[data-v-e2151f4a]{overflow:hidden;border-radius:8px;margin:0;width:400px;height:280px}[dir=ltr] .news figure[data-v-e2151f4a]{margin-right:8px}[dir=rtl] .news figure[data-v-e2151f4a]{margin-left:8px}@media(max-width:599px){.news figure[data-v-e2151f4a]{width:auto;height:auto;max-height:200px;margin:16px 8px}}.news figure img[data-v-e2151f4a]{max-height:100%;border-radius:20px}[dir=ltr] .news figure img[data-v-e2151f4a]{margin-left:50%}[dir=rtl] .news figure img[data-v-e2151f4a]{margin-right:50%}.v-application--is-rtl .news figure img[data-v-e2151f4a]{transform:translateX(50%)}.v-application--is-ltr .news figure img[data-v-e2151f4a]{transform:translateX(-50%)}@media(max-width:599px){.news figure img[data-v-e2151f4a]{width:100%;height:auto}}.desc[data-v-e2151f4a]{flex:1}.text[data-v-e2151f4a]{max-width:500px;padding:0 15% 0 12px}.type[data-v-e2151f4a]{font-weight:var(--font-bold);text-transform:uppercase}.theme--light .type[data-v-e2151f4a]{color:var(--v-primary-base)}.theme--dark .type[data-v-e2151f4a]{color:hsla(0,0%,100%,.7)}.btn[data-v-e2151f4a]{margin-top:16px}[dir=ltr] .btn[data-v-e2151f4a]{margin-left:8px}[dir=rtl] .btn[data-v-e2151f4a]{margin-right:8px}.theme--light .btn[data-v-e2151f4a]{color:var(--v-primary-base)}.theme--dark .btn[data-v-e2151f4a]{color:var(--v-primarylight-base)}p.blog_details[data-v-e2151f4a]{margin-top:30px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;width:80%;font-size:.7rem!important;font-weight:400;letter-spacing:.0333333333em!important;line-height:1.25rem;font-family:\"Roboto\",sans-serif!important}.blog-readmore[data-v-e2151f4a]{margin-top:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_c97a74ea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_c97a74ea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_c97a74ea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_c97a74ea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPlan_vue_vue_type_style_index_0_id_c97a74ea_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-c97a74ea]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-c97a74ea]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-c97a74ea]{font-size:28px;line-height:44px}}.use-text-title2[data-v-c97a74ea]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-c97a74ea]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-c97a74ea]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-c97a74ea]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-c97a74ea]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-c97a74ea]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-c97a74ea]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-c97a74ea]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-c97a74ea]{font-size:16px;line-height:24px}}.use-text-caption[data-v-c97a74ea],.use-text-paragraph[data-v-c97a74ea]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-c97a74ea]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-c97a74ea]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-c97a74ea]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-c97a74ea]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-c97a74ea]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-c97a74ea]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-c97a74ea]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-c97a74ea]{display:none}}.root[data-v-c97a74ea]{position:relative;z-index:55}.subtitle[data-v-c97a74ea]{margin-bottom:40px}.decoration[data-v-c97a74ea]{position:absolute;width:1280px;height:960px}.decoration svg[data-v-c97a74ea]{width:1280px;height:100%;opacity:.2}.theme--light .decoration svg[data-v-c97a74ea]{fill:var(--v-primarylight-base)}.theme--dark .decoration svg[data-v-c97a74ea]{fill:var(--v-primarydark-base)}@media(min-width:1280px){.decoration svg[data-v-c97a74ea]{transform:scaleX(1.7)}}@media(min-width:1920px){.decoration svg[data-v-c97a74ea]{display:none}}@media(max-width:599px){.decoration svg[data-v-c97a74ea]{transform:scale(.5);transform-origin:center left}}.item[data-v-c97a74ea]:hover{z-index:56!important}.pricing-wrap>section[data-v-c97a74ea]{align-items:center;margin-top:24px;display:flex}@media(max-width:959px){.pricing-wrap>section[data-v-c97a74ea]{flex-wrap:wrap;justify-content:space-around}}@media(min-width:1280px){.pricing-wrap>section[data-v-c97a74ea]{padding:0 40px}}.pricing-wrap>section>*[data-v-c97a74ea]{margin:0 -8px}.pricing-wrap>section[data-v-c97a74ea]>:first-child,.pricing-wrap>section[data-v-c97a74ea]>:last-child{z-index:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_61e032e8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_61e032e8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_61e032e8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_61e032e8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_61e032e8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-61e032e8]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-61e032e8]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-61e032e8]{font-size:28px;line-height:44px}}.use-text-title2[data-v-61e032e8]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-61e032e8]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-61e032e8]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-61e032e8]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-61e032e8]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-61e032e8]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-61e032e8]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-61e032e8]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-61e032e8]{font-size:16px;line-height:24px}}.use-text-caption[data-v-61e032e8],.use-text-paragraph[data-v-61e032e8]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-61e032e8]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-61e032e8]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-61e032e8]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-61e032e8]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-61e032e8]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-61e032e8]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-61e032e8]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-61e032e8]{display:none}}.root[data-v-61e032e8]{z-index:56}.root[data-v-61e032e8],.text[data-v-61e032e8]{position:relative}.text[data-v-61e032e8]{z-index:20}.illustration[data-v-61e032e8]{position:relative;margin:48px 48px 0}.illustration>div[data-v-61e032e8]{top:-400px}.illustration img[data-v-61e032e8]{display:block;width:auto}.accordion[data-v-61e032e8]{position:relative}.item[data-v-61e032e8],.paper[data-v-61e032e8]{margin-bottom:24px}.paper[data-v-61e032e8]{border-radius:12px!important;overflow:hidden}.theme--dark .paper[data-v-61e032e8]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414;background-color:#080a3e!important}.theme--light .paper[data-v-61e032e8]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06);background-color:#f3f3f3!important}.heading[data-v-61e032e8]{font-weight:var(--font-medium);padding:8px 16px 8px 0;font-size:18px;line-height:1.5;margin-bottom:0}.theme--dark .heading[data-v-61e032e8]{color:#fff}.theme--light .heading[data-v-61e032e8]{color:var(--v-primary-base)!important}@media(max-width:599px){.heading[data-v-61e032e8]{font-size:16px}}.content .icon[data-v-61e032e8]{position:absolute;top:20px}[dir=ltr] .content .icon[data-v-61e032e8]{right:16px}[dir=rtl] .content .icon[data-v-61e032e8]{left:16px}.expanded[data-v-61e032e8]{background:#080a3e!important}.expanded .heading[data-v-61e032e8]{color:#fff;padding-top:0;padding-bottom:0}.expanded[data-v-61e032e8] .v-icon{color:#fff!important;transform:rotate(180deg)}.detail[data-v-61e032e8]{padding-top:24px;border-radius:0 0 12px 12px}.theme--light .detail[data-v-61e032e8]{background-color:#faf9f9}.theme--dark .detail[data-v-61e032e8]{background-color:#00032a}.detail p[data-v-61e032e8]{font-size:18px}@media(max-width:599px){.detail p[data-v-61e032e8]{font-size:16px}}.theme--light .icon[data-v-61e032e8]{color:var(--v-primary-base)}.theme--dark .icon[data-v-61e032e8]{color:var(--v-primarylight-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_189c1842_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_189c1842_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_189c1842_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_189c1842_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_189c1842_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-189c1842]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-189c1842]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-189c1842]{font-size:28px;line-height:44px}}.use-text-title2[data-v-189c1842]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-189c1842]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-189c1842]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-189c1842]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-189c1842]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-189c1842]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-189c1842]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-189c1842]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-189c1842]{font-size:16px;line-height:24px}}.use-text-caption[data-v-189c1842],.use-text-paragraph[data-v-189c1842]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-189c1842]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-189c1842]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-189c1842]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-189c1842]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-189c1842]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-189c1842]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-189c1842]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-189c1842]{display:none}}.pricing[data-v-189c1842]{position:relative;border-radius:40px!important;overflow:hidden;text-align:center;z-index:2;border:1px solid transparent;max-width:300px;margin-bottom:24px}.pricing ul[data-v-189c1842]{padding:0 16px;margin-bottom:24px;list-style:none}.pricing ul li[data-v-189c1842]{list-style:none;font-size:16px;text-align:center;padding:8px;border-bottom:2px dashed}.theme--light .pricing ul li[data-v-189c1842]{border-color:rgba(0,0,0,.12)}.theme--dark .pricing ul li[data-v-189c1842]{border-color:hsla(0,0%,100%,.12)}.pricing ul li[data-v-189c1842]:last-child{border-bottom:none}.pricing[data-v-189c1842]:hover{border:1px solid var(--v-primary-base)}.theme--light .pricing[data-v-189c1842]:hover{box-shadow:0 0 20px 5px var(--v-primarylight-base)}.theme--dark .pricing[data-v-189c1842]:hover{box-shadow:0 0 20px 5px #00032a}.title-card[data-v-189c1842]{padding:40px 0 16px;text-transform:uppercase;font-size:24px;position:relative}.theme--light .title-card[data-v-189c1842]{color:var(--v-primarydark-base)}.theme--dark .title-card[data-v-189c1842]{color:var(--v-primarylight-base)}.title-card p[data-v-189c1842]{font-weight:var(--font-medium);font-size:16px}.title-card h4[data-v-189c1842]{font-weight:var(--font-bold);text-transform:none;margin-top:16px}.theme--light .title-card h4[data-v-189c1842]{color:var(--v-primary-base)}.theme--dark .title-card h4[data-v-189c1842]{color:hsla(0,0%,100%,.7)}.btn-area[data-v-189c1842]{padding:16px;position:relative}.theme--light .btn-area[data-v-189c1842]{color:var(--v-primary-base)}.theme--dark .btn-area[data-v-189c1842]{color:hsla(0,0%,100%,.7)}.theme--light .btn-area[data-v-189c1842]{position:relative}.theme--light .btn-area[data-v-189c1842]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.12);opacity:.04}.theme--dark .btn-area[data-v-189c1842]{position:relative}.theme--dark .btn-area[data-v-189c1842]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:hsla(0,0%,100%,.12);opacity:.04}.btn-area .button[data-v-189c1842]{margin-top:16px}.btn-area .desc[data-v-189c1842]{font-size:14px}.theme--light .basic .title-card[data-v-189c1842]{color:var(--v-secondarydark-base)}.theme--dark .basic .title-card[data-v-189c1842]{color:#f3f3f3}.basic .btn-area[data-v-189c1842]{position:relative}.basic .btn-area[data-v-189c1842]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#080a3e;opacity:.3}.basic[data-v-189c1842]:hover{border-color:#080a3e}.value[data-v-189c1842]{z-index:20;border:1px solid var(--v-primary-base)}.value .title-card[data-v-189c1842]{padding-bottom:0;margin-bottom:64px;color:#fff;height:90px;padding-top:40px}.value .title-card h4[data-v-189c1842]{position:relative;color:#fff}.value .title-card p[data-v-189c1842]{position:relative}.value .title-card[data-v-189c1842]:before{content:\"\";width:160%;position:absolute;border-radius:50%;bottom:-60px;height:400px;left:-30%;background:linear-gradient(-185deg,var(--v-primary-base) 60%,var(--v-primarydark-base))}.value ul[data-v-189c1842]{padding-top:16px}.theme--light .value[data-v-189c1842]:hover{box-shadow:0 0 20px 5px var(--v-primarylight-base)}.theme--dark .value[data-v-189c1842]:hover{box-shadow:0 0 20px 5px #00032a}.news[data-v-189c1842]{display:flex}.v-application--is-rtl .news[data-v-189c1842]{direction:rtl}@media(max-width:599px){.news[data-v-189c1842]{flex-direction:column}}.news p[data-v-189c1842]{margin-bottom:0}.news figure[data-v-189c1842]{overflow:hidden;border-radius:8px;margin:0;width:400px;height:280px}[dir=ltr] .news figure[data-v-189c1842]{margin-right:8px}[dir=rtl] .news figure[data-v-189c1842]{margin-left:8px}@media(max-width:599px){.news figure[data-v-189c1842]{width:auto;height:auto;max-height:200px;margin:16px 8px}}.news figure img[data-v-189c1842]{max-height:100%;border-radius:20px}[dir=ltr] .news figure img[data-v-189c1842]{margin-left:50%}[dir=rtl] .news figure img[data-v-189c1842]{margin-right:50%}.v-application--is-rtl .news figure img[data-v-189c1842]{transform:translateX(50%)}.v-application--is-ltr .news figure img[data-v-189c1842]{transform:translateX(-50%)}@media(max-width:599px){.news figure img[data-v-189c1842]{width:100%;height:auto}}.desc[data-v-189c1842]{flex:1}.text[data-v-189c1842]{max-width:500px;padding:0 15% 0 12px}.type[data-v-189c1842]{font-weight:var(--font-bold);text-transform:uppercase}.theme--light .type[data-v-189c1842]{color:var(--v-primary-base)}.theme--dark .type[data-v-189c1842]{color:hsla(0,0%,100%,.7)}.btn[data-v-189c1842]{margin-top:16px}[dir=ltr] .btn[data-v-189c1842]{margin-left:8px}[dir=rtl] .btn[data-v-189c1842]{margin-right:8px}.theme--light .btn[data-v-189c1842]{color:var(--v-primary-base)}.theme--dark .btn[data-v-189c1842]{color:var(--v-primarylight-base)}p.blog_details[data-v-189c1842]{margin-top:30px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;width:80%;font-size:.7rem!important;font-weight:400;letter-spacing:.0333333333em!important;line-height:1.25rem;font-family:\"Roboto\",sans-serif!important}.blog-readmore[data-v-189c1842]{margin-top:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_3be1b36c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_3be1b36c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_3be1b36c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_3be1b36c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_3be1b36c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-3be1b36c]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-3be1b36c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-3be1b36c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-3be1b36c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-3be1b36c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-3be1b36c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-3be1b36c]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-3be1b36c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-3be1b36c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-3be1b36c]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-3be1b36c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-3be1b36c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-3be1b36c],.use-text-paragraph[data-v-3be1b36c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-3be1b36c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-3be1b36c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-3be1b36c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-3be1b36c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-3be1b36c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-3be1b36c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-3be1b36c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-3be1b36c]{display:none}}.root[data-v-3be1b36c]{position:relative;z-index:56;max-width:925px;margin:0 auto}.desc[data-v-3be1b36c]{margin-bottom:48px}.carousel[data-v-3be1b36c] .slick-dots{bottom:-56px}.carousel[data-v-3be1b36c] .slick-dots li{width:15px;height:10px;border:1px solid;border-radius:15px;opacity:.7;transition:all .5s ease-out}.theme--light .carousel[data-v-3be1b36c] .slick-dots li{border-color:rgba(0,0,0,.38)}.theme--dark .carousel[data-v-3be1b36c] .slick-dots li{border-color:hsla(0,0%,100%,.5)}.carousel[data-v-3be1b36c] .slick-dots li.slick-active{width:30px}.theme--light .carousel[data-v-3be1b36c] .slick-dots li.slick-active{background:var(--v-primary-base)}.theme--dark .carousel[data-v-3be1b36c] .slick-dots li.slick-active{background:var(--v-primarylight-base)}.theme--light .carousel[data-v-3be1b36c] .slick-dots li.slick-active{border-color:var(--v-primary-base)}.theme--dark .carousel[data-v-3be1b36c] .slick-dots li.slick-active{border-color:var(--v-primarylight-base)}.carousel[data-v-3be1b36c] .slick-dots li button:before{display:none}.item[data-v-3be1b36c]{padding:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_5dbfadaa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_5dbfadaa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_5dbfadaa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_5dbfadaa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_5dbfadaa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-5dbfadaa]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-5dbfadaa]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5dbfadaa]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5dbfadaa]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-5dbfadaa]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5dbfadaa]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5dbfadaa]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-5dbfadaa]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5dbfadaa]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5dbfadaa]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5dbfadaa]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5dbfadaa]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5dbfadaa],.use-text-paragraph[data-v-5dbfadaa]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5dbfadaa]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5dbfadaa]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5dbfadaa]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5dbfadaa]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5dbfadaa]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5dbfadaa]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5dbfadaa]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5dbfadaa]{display:none}}.link[data-v-5dbfadaa]{margin:8px 12px}.footer[data-v-5dbfadaa]{margin-top:64px;padding-top:24px;padding-bottom:64px;color:#fff;position:relative;z-index:100}.footer ul[data-v-5dbfadaa]{margin:0;padding:0}.footer ul li[data-v-5dbfadaa]{list-style:none;line-height:32px}.footer ul li a[data-v-5dbfadaa]{text-decoration:none;font-size:14px;color:#fff}.footer ul li a[data-v-5dbfadaa]:hover{color:var(--v-primarylight-base)}.footer p[data-v-5dbfadaa]{color:#fff}@media(max-width:959px){.footer p[data-v-5dbfadaa]{padding:0 24px}}.footer .accordion-root[data-v-5dbfadaa]{margin:16px auto 0}.footer-desc[data-v-5dbfadaa]{display:block;font-size:14px;margin-bottom:16px}.theme--light .footer.invert p[data-v-5dbfadaa]{color:#080a3e}.theme--dark .footer.invert p[data-v-5dbfadaa]{color:#fff}.theme--light .footer.invert li a[data-v-5dbfadaa]{color:#080a3e}.theme--dark .footer.invert li a[data-v-5dbfadaa]{color:#fff}.footer.invert .logo h6[data-v-5dbfadaa],.theme--light .footer.invert .title-nav[data-v-5dbfadaa]{color:var(--v-primarydark-base)}.theme--dark .footer.invert .title-nav[data-v-5dbfadaa]{color:var(--v-primarylight-base)}.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-icon,.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-select__selection,.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-select__selections{color:#080a3e}.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-icon,.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-select__selection,.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-select__selections{color:#fff}.market-buttons[data-v-5dbfadaa]{margin-left:auto;margin-right:auto;justify-content:center}.market-buttons .market-coin[data-v-5dbfadaa]{height:80px!important;padding:20px 0!important;margin:2%;border-radius:50px;justify-content:center}.market-buttons .market-coin a[data-v-5dbfadaa]{display:flex;justify-content:center}.market-buttons .market-coin a img[data-v-5dbfadaa]{width:15%;height:15%}.market-buttons .market-coin a p[data-v-5dbfadaa]{align-self:center;color:#fff;text-decoration:none;margin:0 10px!important;font-weight:var(--font-medium);padding:8px 16px 8px 0;font-size:18px;line-height:1.5;margin-bottom:0}.title-nav[data-v-5dbfadaa]{color:#fff;font-size:14px;text-transform:uppercase;font-weight:var(--font-bold)}.logo[data-v-5dbfadaa],.title-nav[data-v-5dbfadaa]{margin-bottom:24px}.logo[data-v-5dbfadaa]{text-align:center}.logo img[data-v-5dbfadaa]{width:64px}.logo h6[data-v-5dbfadaa]{color:#fff}.socmed[data-v-5dbfadaa]{display:flex;justify-content:center;margin-bottom:32px}.socmed button[data-v-5dbfadaa]{margin:8px;color:#fff!important;background:var(--v-primary-base);width:36px;height:36px}.socmed .icon[data-v-5dbfadaa]{font-size:24px}.icon+div[data-v-5dbfadaa]{background:none!important;padding:12px 12px 12px 32px;width:calc(100% - 32px)}.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa]{width:200px;display:inherit;margin:16px auto 0}.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-input__slot{min-height:43px}.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-input__append-inner,.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-input__prepend-inner{margin-top:10px}.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-icon,.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-select__selections{padding:0;color:var(--v-primarylight-base)}.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] fieldset{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06);border-color:var(--v-primarylight-darken3)!important}.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] fieldset legend{top:5px;position:relative}.select-lang.v-text-field.v-text-field--enclosed[data-v-5dbfadaa] .v-select__selection{color:#fff}@media(max-width:1279px){.site-map-item[data-v-5dbfadaa]{padding-bottom:0!important;padding-top:0!important}}.accordion-root[data-v-5dbfadaa]{background:none;box-shadow:none;max-width:480px}#main-wrap .accordion-content.v-expansion-panel[data-v-5dbfadaa]{background-color:transparent}#main-wrap .accordion-content.v-expansion-panel[data-v-5dbfadaa]:after,#main-wrap .accordion-content.v-expansion-panel[data-v-5dbfadaa]:before{display:none}.accordion-icon[data-v-5dbfadaa]{padding:0}.footer-deco[data-v-5dbfadaa]{position:relative;z-index:80;top:0;background:linear-gradient(-45deg,var(--v-primarydark-base) 30%,var(--v-primary-base) 90%);padding-top:50px}@media(max-width:1279px){.footer-deco[data-v-5dbfadaa]{padding-top:240px}}@media(max-width:599px){.footer-deco[data-v-5dbfadaa]{padding-top:160px}}.footer-deco[data-v-5dbfadaa]:before{background-repeat:no-repeat;background-position:0 0;background-size:100% auto;top:-3px;content:\"\";width:100%;height:680px;position:absolute;z-index:-1}.theme--light .footer-deco[data-v-5dbfadaa]:before{background-image:url(/images/saas/footer-deco-light.png)}.theme--dark .footer-deco[data-v-5dbfadaa]:before{background-image:url(/images/saas/footer-deco-dark.png)}[dir=ltr] .footer-deco[data-v-5dbfadaa]:before{left:0}[dir=rtl] .footer-deco[data-v-5dbfadaa]:before{right:0}.decoration[data-v-5dbfadaa]{position:absolute;width:100%;height:100%;top:0;overflow:hidden;clip:rect(0,auto,auto,0)}[dir=ltr] .decoration[data-v-5dbfadaa]{left:0}[dir=rtl] .decoration[data-v-5dbfadaa]{right:0}.decoration svg[data-v-5dbfadaa]{position:fixed;top:40px}.left-deco[data-v-5dbfadaa]{left:0;right:auto;width:1200px;height:1500px;transform:scale(.5);transform-origin:top left}.right-deco[data-v-5dbfadaa]{left:auto;right:0;height:1500px;transform:scale(.5);transform-origin:top right}.action[data-v-5dbfadaa]{text-align:center;padding:0 16px}.action h4[data-v-5dbfadaa]{font-weight:var(--font-bold);color:#fff;margin-bottom:48px}@media(max-width:599px){.action h4[data-v-5dbfadaa]{font-size:28px;line-height:44px}}.theme--dark .action h4[data-v-5dbfadaa]{color:var(--v-primarylight-base)!important}.theme--light .action h4[data-v-5dbfadaa]{color:#080a3e!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_style_index_0_id_2ffb0764_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(275);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_style_index_0_id_2ffb0764_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_style_index_0_id_2ffb0764_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_style_index_0_id_2ffb0764_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_style_index_0_id_2ffb0764_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-2ffb0764]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-2ffb0764]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-2ffb0764]{font-size:28px;line-height:44px}}.use-text-title2[data-v-2ffb0764]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-2ffb0764]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-2ffb0764]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-2ffb0764]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-2ffb0764]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-2ffb0764]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-2ffb0764]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-2ffb0764]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-2ffb0764]{font-size:16px;line-height:24px}}.use-text-caption[data-v-2ffb0764],.use-text-paragraph[data-v-2ffb0764]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-2ffb0764]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-2ffb0764]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-2ffb0764]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-2ffb0764]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-2ffb0764]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-2ffb0764]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-2ffb0764]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-2ffb0764]{display:none}}.card[data-v-2ffb0764]{padding:24px}.card-pricing[data-v-2ffb0764]{display:flex;justify-content:center;align-items:baseline;margin-bottom:16px}.name[data-v-2ffb0764]{display:flex;margin-top:8px;align-items:center}.name span[data-v-2ffb0764]{display:inline-block;z-index:999999999999;position:relative}[dir=ltr] .name span[data-v-2ffb0764]{margin-left:8px}[dir=rtl] .name span[data-v-2ffb0764]{margin-right:8px}.avatar[data-v-2ffb0764]{width:30px;height:30px}.price-card[data-v-2ffb0764]{text-align:center}.theme--light .price-card h2[data-v-2ffb0764]{color:#080a3e}.theme--dark .price-card h2[data-v-2ffb0764]{color:#fff}.theme--light .price-card h6[data-v-2ffb0764]{color:var(--v-primary-base)}.theme--dark .price-card h6[data-v-2ffb0764]{color:hsla(0,0%,100%,.7)}.theme--light .price-card ul li[data-v-2ffb0764]{color:var(--v-primary-base)}.theme--dark .price-card ul li[data-v-2ffb0764]{color:hsla(0,0%,100%,.7)}.price-header[data-v-2ffb0764]{display:block;padding:16px;position:relative}.theme--light .price-header[data-v-2ffb0764]{background-color:#eee}.theme--dark .price-header[data-v-2ffb0764]{background-color:#424242}.price-header .icon[data-v-2ffb0764]{position:absolute;top:8px}[dir=ltr] .price-header .icon[data-v-2ffb0764]{right:8px}[dir=rtl] .price-header .icon[data-v-2ffb0764]{left:8px}.theme--light .price-header .icon[data-v-2ffb0764]{color:#080a3e}.theme--dark .price-header .icon[data-v-2ffb0764]{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_802c99e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_802c99e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_802c99e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_802c99e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_802c99e4_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-802c99e4]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-802c99e4]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-802c99e4]{font-size:28px;line-height:44px}}.use-text-title2[data-v-802c99e4]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-802c99e4]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-802c99e4]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-802c99e4]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-802c99e4]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-802c99e4]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-802c99e4]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-802c99e4]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-802c99e4]{font-size:16px;line-height:24px}}.use-text-caption[data-v-802c99e4],.use-text-paragraph[data-v-802c99e4]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-802c99e4]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-802c99e4]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-802c99e4]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-802c99e4]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-802c99e4]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-802c99e4]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-802c99e4]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-802c99e4]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature4_vue_vue_type_style_index_0_id_f922a3e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature4_vue_vue_type_style_index_0_id_f922a3e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature4_vue_vue_type_style_index_0_id_f922a3e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature4_vue_vue_type_style_index_0_id_f922a3e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature4_vue_vue_type_style_index_0_id_f922a3e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-f922a3e4]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-f922a3e4]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-f922a3e4]{font-size:28px;line-height:44px}}.use-text-title2[data-v-f922a3e4]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-f922a3e4]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-f922a3e4]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-f922a3e4]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-f922a3e4]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-f922a3e4]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-f922a3e4]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-f922a3e4]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-f922a3e4]{font-size:16px;line-height:24px}}.use-text-caption[data-v-f922a3e4],.use-text-paragraph[data-v-f922a3e4]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-f922a3e4]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-f922a3e4]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-f922a3e4]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-f922a3e4]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-f922a3e4]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-f922a3e4]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-f922a3e4]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-f922a3e4]{display:none}}.root[data-v-f922a3e4]{position:relative}.decoration[data-v-f922a3e4]{position:absolute;width:1280px;height:100%;top:100px}[dir=ltr] .decoration[data-v-f922a3e4]{left:-10px}[dir=rtl] .decoration[data-v-f922a3e4]{right:-10px}.decoration svg[data-v-f922a3e4]{width:100%;height:1700px;opacity:.2;transform:scale(1.3)}.theme--light .decoration svg[data-v-f922a3e4]{fill:var(--v-primarylight-base)}.theme--dark .decoration svg[data-v-f922a3e4]{fill:var(--v-primarydark-base)}@media only screen and (min-width:1400px){.decoration svg[data-v-f922a3e4]{transform:scaleX(2.5)}}@media(min-width:1920px){.decoration svg[data-v-f922a3e4]{display:none}}@media(max-width:599px){.decoration svg[data-v-f922a3e4]{transform:scale(.5);transform-origin:center left}}.item[data-v-f922a3e4]{position:relative;min-height:320px;margin-bottom:160px}.item .desc[data-v-f922a3e4]{position:relative;z-index:60}.item.last[data-v-f922a3e4]{margin-bottom:80px}@media(max-width:1279px){.item[data-v-f922a3e4]{margin-bottom:120px}}@media(max-width:959px){.item[data-v-f922a3e4]{text-align:center}}.item h6[data-v-f922a3e4]{margin-bottom:40px}.item .parallax-wrap .Masthead[data-v-f922a3e4]{overflow:visible;min-height:80vh}@media(max-width:599px){.item .parallax-wrap .Masthead[data-v-f922a3e4]{min-height:40vh}}@media(min-width:960px){.item .parallax-wrap[data-v-f922a3e4]{position:absolute;top:0;left:0;width:100%;height:100%}}@media(max-width:959px){.item .parallax-wrap[data-v-f922a3e4]{margin:24px 0}}@media(max-width:599px){.item .parallax-wrap[data-v-f922a3e4]{margin:0}}.item .parallax-wrap .viewport[data-v-f922a3e4]{perspective:1000px}.item .figure[data-v-f922a3e4]{transform-style:preserve-3d;overflow:hidden;border-radius:12px;background:transparent;padding:24px 8px 8px;margin:24px}.item .figure img[data-v-f922a3e4]{width:100%}.screen[data-v-f922a3e4]{position:relative;top:80px!important}.screen img[data-v-f922a3e4]{width:90%;display:block}@media(max-width:599px){.screen img[data-v-f922a3e4]{position:relative;top:-5vh}}.graphic[data-v-f922a3e4]{position:relative}.graphic img[data-v-f922a3e4]{width:100%;display:block}.tabs[data-v-f922a3e4]{position:relative;z-index:55;margin-top:-40px}.tabs .v-tabs-slider-wrapper .v-tabs-slider[data-v-f922a3e4]{background-color:var(--v-primarylight-base)!important}@media(max-width:959px){.tabs section[data-v-f922a3e4]{margin:24px 0}}@media(max-width:599px){.tabs[data-v-f922a3e4] .v-slide-group__prev.v-slide-group__prev--disabled{display:none!important}}@media(max-width:599px){.tabs[data-v-f922a3e4] .v-slide-group__wrapper{overflow:auto}}.tab-content[data-v-f922a3e4]{position:relative}@media(min-width:960px){.tab-content[data-v-f922a3e4]{padding:64px 32px 0}}.tab-content section[data-v-f922a3e4]{position:relative}.tab-content section div[data-v-f922a3e4]{overflow:visible}.tab-label[data-v-f922a3e4]{font-size:18px;font-weight:var(--font-medium);letter-spacing:0;padding:0 40px;border-bottom:1px solid}.theme--light .tab-label[data-v-f922a3e4]{border-color:rgba(0,0,0,.38)}.theme--dark .tab-label[data-v-f922a3e4]{border-color:hsla(0,0%,100%,.5)}@media(max-width:599px){.tab-label[data-v-f922a3e4]{font-size:14px}}.theme--light .tab-label.selected[data-v-f922a3e4]{color:var(--v-primary-base)}.theme--dark .tab-label[data-v-f922a3e4],.theme--dark .tab-label.selected[data-v-f922a3e4]{color:var(--v-primarylight-base)}.illustration-left[data-v-f922a3e4]{position:relative;z-index:1;max-height:600px;height:100%}@media(min-width:960px){.illustration-left[data-v-f922a3e4]{top:-120px}}@media(min-width:960px){.illustration-left .screen[data-v-f922a3e4]{margin-top:250px}.v-application--is-ltr .illustration-left .screen[data-v-f922a3e4],.v-application--is-rtl .illustration-left .screen[data-v-f922a3e4]{transform:rotateY(0deg)}}.illustration-left .graphic[data-v-f922a3e4]{top:200px;width:360px}[dir=ltr] .illustration-left .graphic[data-v-f922a3e4]{left:70px}[dir=rtl] .illustration-left .graphic[data-v-f922a3e4]{right:70px}@media(min-width:960px){.v-application--is-ltr .illustration-left .graphic[data-v-f922a3e4],.v-application--is-rtl .illustration-left .graphic[data-v-f922a3e4]{transform:rotateY(0deg) rotateX(0deg) rotate(0deg)}}.illustration-right[data-v-f922a3e4]{position:relative;z-index:2;top:0}@media(min-width:960px){.illustration-right[data-v-f922a3e4]{top:-200px}}@media(min-width:960px){.illustration-right .screen[data-v-f922a3e4]{top:40px;margin-top:65%}[dir=ltr] .illustration-right .screen[data-v-f922a3e4]{left:-20px}[dir=rtl] .illustration-right .screen[data-v-f922a3e4]{right:-20px}.v-application--is-ltr .illustration-right .screen[data-v-f922a3e4],.v-application--is-rtl .illustration-right .screen[data-v-f922a3e4]{transform:rotateY(0deg)}}.illustration-right .graphic[data-v-f922a3e4]{top:400px;width:400px}[dir=ltr] .illustration-right .graphic[data-v-f922a3e4]{right:-60px}[dir=rtl] .illustration-right .graphic[data-v-f922a3e4]{left:-60px}@media screen and (min-width:1400px){.illustration-right .graphic[data-v-f922a3e4]{top:-20px}}@media(min-width:960px){.illustration-right .graphic[data-v-f922a3e4]{transform-style:preserve-3d}.v-application--is-ltr .illustration-right .graphic[data-v-f922a3e4],.v-application--is-rtl .illustration-right .graphic[data-v-f922a3e4]{transform:rotateY(0deg) rotateX(0deg) rotate(0deg)}}.illustration-center[data-v-f922a3e4]{perspective:1000px}.illustration-center .figure.screen[data-v-f922a3e4]{display:block;text-align:center;max-width:500px;margin:50px auto 0;transform:rotateY(0) rotateX(0deg) rotate(0deg)}.illustration-center .figure.screen img[data-v-f922a3e4]{margin:0 auto;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefit_vue_vue_type_style_index_0_id_186502de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefit_vue_vue_type_style_index_0_id_186502de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefit_vue_vue_type_style_index_0_id_186502de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefit_vue_vue_type_style_index_0_id_186502de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefit_vue_vue_type_style_index_0_id_186502de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-186502de]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-186502de]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-186502de]{font-size:28px;line-height:44px}}.use-text-title2[data-v-186502de]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-186502de]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-186502de]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-186502de]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-186502de]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-186502de]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-186502de]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-186502de]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-186502de]{font-size:16px;line-height:24px}}.use-text-caption[data-v-186502de],.use-text-paragraph[data-v-186502de]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-186502de]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-186502de]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-186502de]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-186502de]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-186502de]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-186502de]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-186502de]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-186502de]{display:none}}.root[data-v-186502de]{position:relative}.decoration[data-v-186502de]{position:absolute;width:1280px;height:100%;top:100px}[dir=ltr] .decoration[data-v-186502de]{left:-10px}[dir=rtl] .decoration[data-v-186502de]{right:-10px}.decoration svg[data-v-186502de]{width:100%;height:1700px;opacity:.2;transform:scale(1.3)}.theme--light .decoration svg[data-v-186502de]{fill:var(--v-primarylight-base)}.theme--dark .decoration svg[data-v-186502de]{fill:var(--v-primarydark-base)}@media only screen and (min-width:1400px){.decoration svg[data-v-186502de]{transform:scaleX(2.5)}}@media(min-width:1920px){.decoration svg[data-v-186502de]{display:none}}@media(max-width:599px){.decoration svg[data-v-186502de]{transform:scale(.5);transform-origin:center left}}.item[data-v-186502de]{position:relative;min-height:320px;margin-bottom:160px}.item .desc[data-v-186502de]{position:relative;z-index:60}.item.last[data-v-186502de]{margin-bottom:80px}@media(max-width:1279px){.item[data-v-186502de]{margin-bottom:120px}}@media(max-width:959px){.item[data-v-186502de]{text-align:center}}.item h6[data-v-186502de]{margin-bottom:40px}.item .parallax-wrap .Masthead[data-v-186502de]{overflow:visible;min-height:80vh}@media(max-width:599px){.item .parallax-wrap .Masthead[data-v-186502de]{min-height:40vh}}@media(min-width:960px){.item .parallax-wrap[data-v-186502de]{position:absolute;top:0;left:0;width:100%;height:100%}}@media(max-width:959px){.item .parallax-wrap[data-v-186502de]{margin:24px 0}}@media(max-width:599px){.item .parallax-wrap[data-v-186502de]{margin:0}}.item .parallax-wrap .viewport[data-v-186502de]{perspective:1000px}.item .figure[data-v-186502de]{transform-style:preserve-3d;overflow:hidden;border-radius:12px;background:transparent;padding:24px 8px 8px;margin:24px}.item .figure img[data-v-186502de]{width:100%}@media(max-width:959px){.item .patch[data-v-186502de]{margin:12px 80px}}.item .patch img[data-v-186502de]{width:70%}@media(max-width:959px){.item .patch img[data-v-186502de]{width:80%}}.screen[data-v-186502de]{position:relative}.screen img[data-v-186502de]{width:70%;display:block}.graphic[data-v-186502de]{position:relative}.graphic img[data-v-186502de]{width:120%;display:block}.tabs[data-v-186502de]{position:relative;z-index:55;margin-top:-40px}.tabs .v-tabs-slider-wrapper .v-tabs-slider[data-v-186502de]{background-color:var(--v-primarylight-base)!important}@media(max-width:959px){.tabs section[data-v-186502de]{margin:24px 0}}@media(max-width:599px){.tabs[data-v-186502de] .v-slide-group__prev.v-slide-group__prev--disabled{display:none!important}}@media(max-width:599px){.tabs[data-v-186502de] .v-slide-group__wrapper{overflow:auto}}.tab-content[data-v-186502de]{position:relative}@media(min-width:960px){.tab-content[data-v-186502de]{padding:64px 32px 0}}.tab-content section[data-v-186502de]{position:relative}.tab-content section div[data-v-186502de]{overflow:visible}.tab-label[data-v-186502de]{font-size:18px;font-weight:var(--font-medium);letter-spacing:0;padding:0 40px;border-bottom:1px solid}.theme--light .tab-label[data-v-186502de]{border-color:rgba(0,0,0,.38)}.theme--dark .tab-label[data-v-186502de]{border-color:hsla(0,0%,100%,.5)}@media(max-width:599px){.tab-label[data-v-186502de]{font-size:14px}}.theme--light .tab-label.selected[data-v-186502de]{color:var(--v-primary-base)}.theme--dark .tab-label[data-v-186502de],.theme--dark .tab-label.selected[data-v-186502de]{color:var(--v-primarylight-base)}.illustration-left[data-v-186502de]{position:relative;z-index:1;max-height:600px;height:100%}@media(min-width:1920px){.illustration-left[data-v-186502de]{top:200px}}@media(min-width:960px){.illustration-left .screen[data-v-186502de]{margin-top:0}.v-application--is-ltr .illustration-left .screen[data-v-186502de],.v-application--is-rtl .illustration-left .screen[data-v-186502de]{transform:rotateY(0deg)}}.illustration-left .graphic[data-v-186502de]{top:200px;width:360px}[dir=ltr] .illustration-left .graphic[data-v-186502de]{left:70px}[dir=rtl] .illustration-left .graphic[data-v-186502de]{right:70px}@media(min-width:960px){.v-application--is-ltr .illustration-left .graphic[data-v-186502de],.v-application--is-rtl .illustration-left .graphic[data-v-186502de]{transform:rotateY(0deg) rotateX(0deg) rotate(0deg)}}.illustration-right[data-v-186502de]{position:relative;z-index:2;top:0}@media(min-width:960px){.illustration-right[data-v-186502de]{top:-100px}}@media(min-width:960px){.illustration-right .screen[data-v-186502de]{top:40px;margin-top:400px}[dir=ltr] .illustration-right .screen[data-v-186502de]{left:-20px}[dir=rtl] .illustration-right .screen[data-v-186502de]{right:-20px}.v-application--is-ltr .illustration-right .screen[data-v-186502de],.v-application--is-rtl .illustration-right .screen[data-v-186502de]{transform:rotateY(0deg)}}.illustration-right .graphic[data-v-186502de]{top:400px;width:400px}[dir=ltr] .illustration-right .graphic[data-v-186502de]{right:-60px}[dir=rtl] .illustration-right .graphic[data-v-186502de]{left:-60px}@media screen and (min-width:1400px){.illustration-right .graphic[data-v-186502de]{top:200px}}@media(min-width:960px){.illustration-right .graphic[data-v-186502de]{transform-style:preserve-3d}.v-application--is-ltr .illustration-right .graphic[data-v-186502de],.v-application--is-rtl .illustration-right .graphic[data-v-186502de]{transform:rotateY(0deg) rotateX(0deg) rotate(0deg)}}.illustration-center[data-v-186502de]{perspective:1000px}.illustration-center .figure.screen[data-v-186502de]{display:block;text-align:center;max-width:500px;margin:50px auto 0;transform:rotateY(0) rotateX(0deg) rotate(0deg)}.illustration-center .figure.screen img[data-v-186502de]{margin:0 auto;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_3a415baa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(279);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_3a415baa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_3a415baa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_3a415baa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeForm_vue_vue_type_style_index_0_id_3a415baa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-3a415baa]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-3a415baa]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-3a415baa]{font-size:28px;line-height:44px}}.use-text-title2[data-v-3a415baa]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-3a415baa]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-3a415baa]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-3a415baa]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-3a415baa]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-3a415baa]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-3a415baa]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-3a415baa]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-3a415baa]{font-size:16px;line-height:24px}}.use-text-caption[data-v-3a415baa],.use-text-paragraph[data-v-3a415baa]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-3a415baa]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-3a415baa]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-3a415baa]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-3a415baa]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-3a415baa]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-3a415baa]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-3a415baa]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-3a415baa]{display:none}}.root[data-v-3a415baa]{position:relative;text-align:center}.root p[data-v-3a415baa]{color:#fff}.subscribe-title[data-v-3a415baa]{position:relative;margin:0 24px 64px;padding-top:56px}.theme--dark .subscribe-title[data-v-3a415baa]{color:#fff}.theme--light .subscribe-title[data-v-3a415baa]{color:var(--v-primary-base)}.subscribe-title strong[data-v-3a415baa]{font-weight:var(--font-bold)}.form[data-v-3a415baa]{position:relative;margin-top:16px}.mail-button[data-v-3a415baa]{height:80px!important;padding:20px 0!important;margin:2%;border-radius:50px;justify-content:center}.mail-button a[data-v-3a415baa]{display:flex;justify-content:center}.mail-button a p[data-v-3a415baa]{align-self:center;color:#fff;text-decoration:none;margin:0 10px!important;font-weight:var(--font-medium);padding:8px 16px 8px 0;font-size:18px;line-height:1.5;margin-bottom:0}[data-v-3a415baa] .field.v-text-field--solo>.v-input__control>.v-input__slot{color:#fff;width:100%;background-color:#080a3e;box-shadow:0 10px 15px -5px rgba(62,57,107,.07);border-radius:10px}[dir=ltr][data-v-3a415baa] .field.v-text-field--solo>.v-input__control>.v-input__slot{padding-right:240px}[dir=rtl][data-v-3a415baa] .field.v-text-field--solo>.v-input__control>.v-input__slot{padding-left:240px}[data-v-3a415baa] .field.v-text-field--solo>.v-input__control>.v-input__slot input::-webkit-input-placeholder{color:hsla(0,0%,100%,.5)}[data-v-3a415baa] .field.v-text-field--solo>.v-input__control>.v-input__slot input::-moz-placeholder{color:hsla(0,0%,100%,.5)}[data-v-3a415baa] .field.v-text-field--solo>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}[data-v-3a415baa] .field.v-text-field--solo>.v-input__control>.v-input__slot input:-moz-placeholder{color:hsla(0,0%,100%,.5)}.button[data-v-3a415baa]{position:absolute;top:8px}[dir=ltr] .button[data-v-3a415baa]{right:8px}[dir=rtl] .button[data-v-3a415baa]{left:8px}@media(max-width:959px){.button[data-v-3a415baa]{padding:4px 24px;min-width:0;width:auto}}@media(max-width:599px){.button[data-v-3a415baa]{padding:4px 8px}}.button svg[data-v-3a415baa]{fill:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreFeature_vue_vue_type_style_index_0_id_61e9d644_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreFeature_vue_vue_type_style_index_0_id_61e9d644_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreFeature_vue_vue_type_style_index_0_id_61e9d644_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreFeature_vue_vue_type_style_index_0_id_61e9d644_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreFeature_vue_vue_type_style_index_0_id_61e9d644_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-61e9d644]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-61e9d644]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-61e9d644]{font-size:28px;line-height:44px}}.use-text-title2[data-v-61e9d644]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-61e9d644]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-61e9d644]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-61e9d644]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-61e9d644]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-61e9d644]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-61e9d644]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-61e9d644]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-61e9d644]{font-size:16px;line-height:24px}}.use-text-caption[data-v-61e9d644],.use-text-paragraph[data-v-61e9d644]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-61e9d644]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-61e9d644]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-61e9d644]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-61e9d644]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-61e9d644]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-61e9d644]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-61e9d644]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-61e9d644]{display:none}}.main-feature[data-v-61e9d644]{position:relative;display:block}@media(min-width:1280px){.main-feature[data-v-61e9d644]{padding-bottom:64px}}.video[data-v-61e9d644]{overflow:hidden;position:relative;margin:48px 0 16px}.video figure[data-v-61e9d644]{margin:0;background:#000}.video figure img[data-v-61e9d644]{opacity:.62;min-height:100%;width:100%}.video-popup[data-v-61e9d644]{max-width:none}@media(min-width:600px){.video-popup[data-v-61e9d644]{width:690px}}.video-popup[data-v-61e9d644] iframe{width:100%}.feature-wrap[data-v-61e9d644]{position:relative}.play-btn[data-v-61e9d644]{position:absolute;width:150px;height:150px;top:50%;border-radius:50%;transform:translate(-50%,-50%)}[dir=ltr] .play-btn[data-v-61e9d644]{left:50%}[dir=rtl] .play-btn[data-v-61e9d644]{right:50%}.play-btn span[data-v-61e9d644]:before{font-size:130px;background:linear-gradient(120deg,#f3f3f3,var(--v-primarylight-base));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.close-btn[data-v-61e9d644]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-61e9d644]{right:4px}[dir=rtl] .close-btn[data-v-61e9d644]{left:4px}.deco[data-v-61e9d644]{position:absolute;top:80px;width:400px}[dir=ltr] .deco[data-v-61e9d644]{left:80px}[dir=rtl] .deco[data-v-61e9d644]{right:80px}.deco svg[data-v-61e9d644]{transform-origin:top left}.counter[data-v-61e9d644]{display:flex}@media(min-width:1280px){.counter[data-v-61e9d644]{justify-content:flex-end}}@media(min-width:600px){[dir=ltr] .counter[data-v-61e9d644]{padding-right:64px}[dir=rtl] .counter[data-v-61e9d644]{padding-left:64px}}@media(max-width:599px){.counter>*[data-v-61e9d644]{width:50%;padding:4px}}@media(min-width:600px){.lower[data-v-61e9d644]{margin-top:160px}}@media(min-width:600px){.higher[data-v-61e9d644]{margin-top:80px}}.paper[data-v-61e9d644]{position:relative;height:174px;padding:16px;margin:8px 0}@media(min-width:600px){.paper[data-v-61e9d644]{padding:8px 24px;margin:32px 32px 0 0;width:174px}}.paper span[data-v-61e9d644]{color:var(--v-primary-base);font-size:48px}.paper h6[data-v-61e9d644]{font-weight:var(--font-bold)}.paper p[data-v-61e9d644]{font-size:18px}@media(max-width:599px){.paper p[data-v-61e9d644]{font-size:16px}}.more-feature[data-v-61e9d644]{position:relative}.more-feature figure[data-v-61e9d644]{margin:0}.chart-deco[data-v-61e9d644]{width:100%;height:420px;bottom:0;position:absolute;background-size:cover}.item[data-v-61e9d644]{position:relative;padding-top:80px}.item .desc[data-v-61e9d644]{z-index:60}.item .desc[data-v-61e9d644],.text[data-v-61e9d644]{position:relative}.text>span[data-v-61e9d644]{position:absolute;color:rgba(0,0,0,.54);top:-10px;font-size:38px;z-index:2}[dir=ltr] .text>span[data-v-61e9d644]{left:7px}[dir=rtl] .text>span[data-v-61e9d644]{right:7px}.illustration img[data-v-61e9d644]{width:80%;display:block;margin:0 auto}[dir=ltr] .text-center span[data-v-61e9d644]{left:calc(50% - 7px)}[dir=rtl] .text-center span[data-v-61e9d644]{right:calc(50% - 7px)}.progress-wrap[data-v-61e9d644]{padding:0}@media(min-width:600px){.progress-wrap[data-v-61e9d644]{padding:0 48px}}.progress-wrap li[data-v-61e9d644]{margin-bottom:24px;list-style:none}@media(min-width:600px){.progress-wrap li[data-v-61e9d644]{display:flex}}.progress-wrap li h5[data-v-61e9d644]{font-weight:var(--font-bold)}.coin[data-v-61e9d644]{display:flex;align-items:center;width:120px;padding-top:8px}[dir=ltr] .coin .logo[data-v-61e9d644]{margin-right:16px}[dir=rtl] .coin .logo[data-v-61e9d644]{margin-left:16px}@media(max-width:599px){.coin .logo[data-v-61e9d644]{width:20px!important;height:20px!important;min-width:0!important}[dir=ltr] .coin .logo[data-v-61e9d644]{margin-right:8px}[dir=rtl] .coin .logo[data-v-61e9d644]{margin-left:8px}}.progress[data-v-61e9d644]{flex:1}@media(min-width:600px){.progress[data-v-61e9d644]{margin-top:8px}[dir=ltr] .progress[data-v-61e9d644]{padding-left:48px}[dir=rtl] .progress[data-v-61e9d644]{padding-right:48px}}.unit[data-v-61e9d644]{display:flex;justify-content:space-between}@media(max-width:599px){.unit h6[data-v-61e9d644]{font-size:14px!important;line-height:26px}}.unit h6 span[data-v-61e9d644]{font-size:16px 14px!important}@media(max-width:599px){.unit h6 span[data-v-61e9d644]{font-size:14px}}.track[data-v-61e9d644]{border-radius:10px;height:8px!important}.theme--light .track[data-v-61e9d644]{background:rgba(0,0,0,.12)}.theme--dark .track[data-v-61e9d644]{background:hsla(0,0%,100%,.12)}.headline .title-main[data-v-61e9d644]{font-size:1.25rem;font-weight:500;line-height:2rem;letter-spacing:.0125em;width:100%;display:flex;justify-content:space-between}.figure[data-v-61e9d644]{display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:12px;background:transparent;padding:24px 8px 8px;margin:auto 0}.figure img[data-v-61e9d644]{width:60%}@media(max-width:599px){.figure img[data-v-61e9d644]{width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_9dfcebd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_9dfcebd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_9dfcebd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_9dfcebd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_9dfcebd0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-9dfcebd0]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-9dfcebd0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-9dfcebd0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-9dfcebd0]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-9dfcebd0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-9dfcebd0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-9dfcebd0]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-9dfcebd0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-9dfcebd0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-9dfcebd0]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-9dfcebd0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-9dfcebd0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-9dfcebd0],.use-text-paragraph[data-v-9dfcebd0]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-9dfcebd0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-9dfcebd0]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-9dfcebd0]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-9dfcebd0]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-9dfcebd0]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-9dfcebd0]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-9dfcebd0]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-9dfcebd0]{display:none}}.main-feature[data-v-9dfcebd0]{position:relative;display:block}@media(min-width:1280px){.main-feature[data-v-9dfcebd0]{padding-bottom:64px}}.video[data-v-9dfcebd0]{overflow:hidden;position:relative;margin:48px 0 16px}.video figure[data-v-9dfcebd0]{margin:0;background:#000}.video figure img[data-v-9dfcebd0]{opacity:.62;min-height:100%;width:100%}.video-popup[data-v-9dfcebd0]{max-width:none}@media(min-width:600px){.video-popup[data-v-9dfcebd0]{width:690px}}.video-popup[data-v-9dfcebd0] iframe{width:100%}.feature-wrap[data-v-9dfcebd0]{position:relative}.play-btn[data-v-9dfcebd0]{position:absolute;width:150px;height:150px;top:50%;border-radius:50%;transform:translate(-50%,-50%)}[dir=ltr] .play-btn[data-v-9dfcebd0]{left:50%}[dir=rtl] .play-btn[data-v-9dfcebd0]{right:50%}.play-btn span[data-v-9dfcebd0]:before{font-size:130px;background:linear-gradient(120deg,#f3f3f3,var(--v-primarylight-base));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.close-btn[data-v-9dfcebd0]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-9dfcebd0]{right:4px}[dir=rtl] .close-btn[data-v-9dfcebd0]{left:4px}.deco[data-v-9dfcebd0]{position:absolute;top:80px;width:400px}[dir=ltr] .deco[data-v-9dfcebd0]{left:80px}[dir=rtl] .deco[data-v-9dfcebd0]{right:80px}.deco svg[data-v-9dfcebd0]{transform-origin:top left}.counter[data-v-9dfcebd0]{display:flex}@media(min-width:1280px){.counter[data-v-9dfcebd0]{justify-content:flex-end}}@media(min-width:600px){[dir=ltr] .counter[data-v-9dfcebd0]{padding-right:64px}[dir=rtl] .counter[data-v-9dfcebd0]{padding-left:64px}}@media(max-width:599px){.counter>*[data-v-9dfcebd0]{width:50%;padding:4px}}@media(min-width:600px){.lower[data-v-9dfcebd0]{margin-top:160px}}@media(min-width:600px){.higher[data-v-9dfcebd0]{margin-top:80px}}.paper[data-v-9dfcebd0]{position:relative;height:174px;padding:16px;margin:8px 0}@media(min-width:600px){.paper[data-v-9dfcebd0]{padding:8px 24px;margin:32px 32px 0 0;width:174px}}.paper span[data-v-9dfcebd0]{color:var(--v-primary-base);font-size:48px}.paper h6[data-v-9dfcebd0]{font-weight:var(--font-bold)}.paper p[data-v-9dfcebd0]{font-size:18px}@media(max-width:599px){.paper p[data-v-9dfcebd0]{font-size:16px}}.more-feature[data-v-9dfcebd0]{position:relative}.more-feature figure[data-v-9dfcebd0]{margin:0}.chart-deco[data-v-9dfcebd0]{width:100%;height:420px;bottom:0;position:absolute;background-size:cover}.item[data-v-9dfcebd0]{position:relative;padding-top:80px}.item .desc[data-v-9dfcebd0]{z-index:60}.item .desc[data-v-9dfcebd0],.text[data-v-9dfcebd0]{position:relative}.text>span[data-v-9dfcebd0]{position:absolute;color:rgba(0,0,0,.54);top:-10px;font-size:38px;z-index:2}[dir=ltr] .text>span[data-v-9dfcebd0]{left:7px}[dir=rtl] .text>span[data-v-9dfcebd0]{right:7px}.illustration img[data-v-9dfcebd0]{width:80%;display:block;margin:0 auto}[dir=ltr] .text-center span[data-v-9dfcebd0]{left:calc(50% - 7px)}[dir=rtl] .text-center span[data-v-9dfcebd0]{right:calc(50% - 7px)}.progress-wrap[data-v-9dfcebd0]{padding:0}@media(min-width:600px){.progress-wrap[data-v-9dfcebd0]{padding:0 48px}}.progress-wrap li[data-v-9dfcebd0]{margin-bottom:24px;list-style:none}@media(min-width:600px){.progress-wrap li[data-v-9dfcebd0]{display:flex}}.progress-wrap li h5[data-v-9dfcebd0]{font-weight:var(--font-bold)}.coin[data-v-9dfcebd0]{display:flex;align-items:center;width:120px;padding-top:8px}[dir=ltr] .coin .logo[data-v-9dfcebd0]{margin-right:16px}[dir=rtl] .coin .logo[data-v-9dfcebd0]{margin-left:16px}@media(max-width:599px){.coin .logo[data-v-9dfcebd0]{width:20px!important;height:20px!important;min-width:0!important}[dir=ltr] .coin .logo[data-v-9dfcebd0]{margin-right:8px}[dir=rtl] .coin .logo[data-v-9dfcebd0]{margin-left:8px}}.progress[data-v-9dfcebd0]{flex:1}@media(min-width:600px){.progress[data-v-9dfcebd0]{margin-top:8px}[dir=ltr] .progress[data-v-9dfcebd0]{padding-left:48px}[dir=rtl] .progress[data-v-9dfcebd0]{padding-right:48px}}.unit[data-v-9dfcebd0]{display:flex;justify-content:space-between}@media(max-width:599px){.unit h6[data-v-9dfcebd0]{font-size:14px!important;line-height:26px}}.unit h6 span[data-v-9dfcebd0]{font-size:16px 14px!important}@media(max-width:599px){.unit h6 span[data-v-9dfcebd0]{font-size:14px}}.track[data-v-9dfcebd0]{border-radius:10px;height:8px!important}.theme--light .track[data-v-9dfcebd0]{background:rgba(0,0,0,.12)}.theme--dark .track[data-v-9dfcebd0]{background:hsla(0,0%,100%,.12)}.headline .title-main[data-v-9dfcebd0]{font-size:1.25rem;font-weight:500;line-height:2rem;letter-spacing:.0125em;width:100%;display:flex;justify-content:space-between}.figure[data-v-9dfcebd0]{display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:12px;background:transparent;padding:24px 8px 8px;margin:auto 0}.figure img[data-v-9dfcebd0]{width:60%}@media(max-width:599px){.figure img[data-v-9dfcebd0]{width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebec6a6_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebec6a6_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebec6a6_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebec6a6_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ebec6a6_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-2ebec6a6]{font-weight:var(--font-medium);font-size:80px;line-height:100px}@media(max-width:1279px){.use-text-title[data-v-2ebec6a6]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-2ebec6a6]{font-size:28px;line-height:44px}}.use-text-title2[data-v-2ebec6a6]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-2ebec6a6]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-2ebec6a6]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-2ebec6a6]{font-weight:var(--font-medium);font-size:17px;line-height:30px}@media(max-width:1279px){.use-text-subtitle[data-v-2ebec6a6]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-2ebec6a6]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-2ebec6a6]{font-weight:var(--font-regular);font-size:15px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-2ebec6a6]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-2ebec6a6]{font-size:16px;line-height:24px}}.use-text-caption[data-v-2ebec6a6],.use-text-paragraph[data-v-2ebec6a6]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-2ebec6a6]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-2ebec6a6]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-2ebec6a6]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-2ebec6a6]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-2ebec6a6]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-2ebec6a6]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-2ebec6a6]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-2ebec6a6]{display:none}}.main-wrap[data-v-2ebec6a6]{position:relative;width:100%;overflow:hidden}.theme--dark .main-wrap[data-v-2ebec6a6]{background-color:#00032a}.theme--light .main-wrap[data-v-2ebec6a6]{background-color:#faf9f9}.space-bottom[data-v-2ebec6a6]{margin-bottom:160px}@media(max-width:959px){.space-bottom[data-v-2ebec6a6]{margin-bottom:120px}}@media(min-width:960px){.space-bottom-testi[data-v-2ebec6a6]{margin-bottom:80px}}.space-bottom-short[data-v-2ebec6a6]{margin-bottom:80px}.space-top[data-v-2ebec6a6]{margin-top:160px}@media(max-width:959px){.space-top[data-v-2ebec6a6]{margin-top:120px}}.space-top-short[data-v-2ebec6a6]{margin-top:80px}.container-wrap[data-v-2ebec6a6]{margin-top:-40px}.container-wrap>section[data-v-2ebec6a6]{position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2ebec6a6&scoped=true&
var lib_vue_loader_options_pagesvue_type_template_id_2ebec6a6_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"main-wrap\" data-v-2ebec6a6>", "</div>", [_c('main-header'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container-wrap\" data-v-2ebec6a6>", "</div>", [_vm._ssrNode("<section id=\"home\" data-v-2ebec6a6>", "</section>", [_c('banner')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section data-v-2ebec6a6>", "</section>", [_c('company-logo')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section" + _vm._ssrClass(null, !_vm.isMobile && 'space-top-short') + " data-v-2ebec6a6>", "</section>", [_c('counter')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"feature-3\"" + _vm._ssrClass(null, _vm.isMobile ? 'space-top-short' : 'space-top') + " data-v-2ebec6a6>", "</section>", [_c('feature-3')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"feature\"" + _vm._ssrClass(null, _vm.isMobile ? 'space-top-short' : 'space-top') + " data-v-2ebec6a6>", "</section>", [_c('feature')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"benefit\" class=\"space-top-short space-bottom-short\" data-v-2ebec6a6>", "</section>", [_c('benefit')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"feature-4\"" + _vm._ssrClass(null, _vm.isMobile ? 'space-top-short' : 'space-top') + " data-v-2ebec6a6>", "</section>", [_c('feature-4')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"blog\"" + _vm._ssrClass(null, _vm.isMobile ? 'space-top-short' : 'space-top') + " data-v-2ebec6a6>", "</section>", [_c('news-event')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"testimonials\" data-v-2ebec6a6>", "</section>", [_c('testimonials')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section" + _vm._ssrClass(null, _vm.space - _vm.top - _vm.short) + " data-v-2ebec6a6>", "</section>", [_c('Roadmap')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"faq\" class=\"space-top\" data-v-2ebec6a6>", "</section>", [_c('faq')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"space-top-short\" data-v-2ebec6a6>", "</section>", [_c('subscribe')], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section id=\"footer\" class=\"space-top-short\" data-v-2ebec6a6>", "</section>", [_c('footer-with-deco')], 1), _vm._ssrNode(" "), _c('hidden', {
    attrs: {
      "point": "mdDown"
    }
  }, [_c('page-nav')], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2ebec6a6&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 34 modules
var Header = __webpack_require__(74);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(229);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTooltip/VTooltip.sass
var VTooltip = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/activatable/index.js
var activatable = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/menuable/index.js
var menuable = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js + 19 modules
var util_console = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
 // Mixins





 // Helpers




/* @vue/component */

/* harmony default export */ var VTooltip_VTooltip = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], dependent["a" /* default */], menuable["a" /* default */]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;

      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },

    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;

      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }

      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      if (this.attach === false) top += this.pageYOffset;
      return `${this.calcYOverflow(top)}px`;
    },

    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },

    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },

    offsetY() {
      return this.top || this.bottom;
    },

    offsetX() {
      return this.left || this.right;
    },

    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(helpers["g" /* convertToUnit */])(this.maxWidth),
        minWidth: Object(helpers["g" /* convertToUnit */])(this.minWidth),
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },

  mounted() {
    if (Object(helpers["n" /* getSlotType */])(this, 'activator', true) === 'v-slot') {
      Object(util_console["b" /* consoleError */])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },

    deactivate() {
      this.runDelay('close');
    },

    genActivatorListeners() {
      const listeners = activatable["a" /* default */].options.methods.genActivatorListeners.call(this);

      if (this.openOnFocus) {
        listeners.focus = e => {
          this.getActivator(e);
          this.runDelay('open');
        };

        listeners.blur = e => {
          this.getActivator(e);
          this.runDelay('close');
        };
      }

      listeners.keydown = e => {
        if (e.keyCode === helpers["q" /* keyCodes */].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };

      return listeners;
    },

    genActivatorAttributes() {
      return {
        'aria-haspopup': true,
        'aria-expanded': String(this.isActive)
      };
    },

    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },

    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=template&id=98ecdb9c&scoped=true&





var PageNavvue_type_template_id_98ecdb9c_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    directives: [{
      def: directives_scroll["b" /* default */],
      name: "scroll",
      rawName: "v-scroll",
      value: _vm.handleScroll,
      expression: "handleScroll"
    }],
    staticClass: "page-nav",
    class: {
      show: _vm.show
    }
  }, [_vm._ssrNode("<nav class=\"section-nav\" data-v-98ecdb9c>", "</nav>", [_c('scrollactive', {
    attrs: {
      "offset": _vm.navOffset,
      "active-class": "active",
      "tag": "section"
    }
  }, _vm._l(_vm.menuList, function (item, index) {
    return _c('a', {
      key: index,
      staticClass: "anchor-link scrollactive-item",
      style: {
        top: 50 * (_vm.menu.length - item.id) + 'px'
      },
      attrs: {
        "href": item.url
      },
      on: {
        "click": function ($event) {
          return _vm.setOffset(item.offset);
        }
      }
    }, [_c(VTooltip_VTooltip, {
      staticClass: "tooltip-wrap",
      attrs: {
        "nudge-top": 18,
        "color": "primarydark",
        "left": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function ({
          on
        }) {
          return [_c('span', _vm._g({}, on), [_vm._v(_vm._s(_vm.$t('saasLanding.header_' + item.name)))])];
        }
      }], null, true)
    }, [_vm._v(" "), _c('span', {
      staticClass: "tooltip"
    }, [_vm._v(_vm._s(_vm.$t('saasLanding.header_' + item.name)))])])], 1);
  }), 0)], 1), _vm._ssrNode(" "), _c(VTooltip_VTooltip, {
    attrs: {
      "nudge-top": 25,
      "color": "primarydark",
      "left": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function ({
        on
      }) {
        return [_c('scrollactive', {
          attrs: {
            "tag": "div"
          }
        }, [_c(VBtn["a" /* default */], _vm._g({
          staticClass: "fab anchor-link scrollactive-item",
          attrs: {
            "fab": "",
            "href": "#home"
          }
        }, on), [_c(VIcon["a" /* default */], {
          staticClass: "icon",
          attrs: {
            "dark": ""
          }
        }, [_vm._v("mdi-arrow-up")])], 1)], 1)];
      }
    }])
  }, [_vm._v(" "), _c('span', {
    staticClass: "tooltip"
  }, [_vm._v("To Top")])])], 2);
};

var PageNavvue_type_template_id_98ecdb9c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=template&id=98ecdb9c&scoped=true&

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=script&lang=js&

let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

/* harmony default export */ var PageNavvue_type_script_lang_js_ = ({
  data: () => ({
    menu: menu["a" /* default */],
    navOffset: 20,
    show: false,
    menuList: [createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1]), createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3]), createData(menu["a" /* default */][4], '#' + menu["a" /* default */][4]), createData(menu["a" /* default */][5], '#' + menu["a" /* default */][5]), createData(menu["a" /* default */][6], '#' + menu["a" /* default */][6], -40)]
  }),
  methods: {
    handleScroll: function () {
      if (window.scrollY > 500) {
        return this.show = true;
      }

      return this.show = false;
    },
    setOffset: function (offset) {
      this.navOffset = offset;
    }
  }
});
// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var PageNav_PageNavvue_type_script_lang_js_ = (PageNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/PageNav/PageNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(299)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PageNav_PageNavvue_type_script_lang_js_,
  PageNavvue_type_template_id_98ecdb9c_scoped_true_render,
  PageNavvue_type_template_id_98ecdb9c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "98ecdb9c",
  "4aae32ce"
  
)

/* harmony default export */ var PageNav = (component.exports);
// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDialog/VDialog.sass
var VDialog = __webpack_require__(301);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js
var VThemeProvider = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/detachable/index.js
var detachable = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/overlayable/index.js + 2 modules
var overlayable = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/returnable/index.js
var returnable = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/stackable/index.js
var stackable = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
// Styles
 // Components

 // Mixins






 // Directives

 // Helpers




const baseMixins = Object(mixins["a" /* default */])(dependent["a" /* default */], detachable["a" /* default */], overlayable["a" /* default */], returnable["a" /* default */], stackable["a" /* default */], activatable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VDialog_VDialog = (baseMixins.extend({
  name: 'v-dialog',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  props: {
    dark: Boolean,
    disabled: Boolean,
    fullscreen: Boolean,
    light: Boolean,
    maxWidth: [String, Number],
    noClickAnimation: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    persistent: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    width: [String, Number]
  },

  data() {
    return {
      activatedBy: null,
      animate: false,
      animateTimeout: -1,
      stackMinZIndex: 200,
      previousActiveElement: null
    };
  },

  computed: {
    classes() {
      return {
        [`v-dialog ${this.contentClass}`.trim()]: true,
        'v-dialog--active': this.isActive,
        'v-dialog--persistent': this.persistent,
        'v-dialog--fullscreen': this.fullscreen,
        'v-dialog--scrollable': this.scrollable,
        'v-dialog--animated': this.animate
      };
    },

    contentClasses() {
      return {
        'v-dialog__content': true,
        'v-dialog__content--active': this.isActive
      };
    },

    hasActivator() {
      return Boolean(!!this.$slots.activator || !!this.$scopedSlots.activator);
    }

  },
  watch: {
    isActive(val) {
      var _a;

      if (val) {
        this.show();
        this.hideScroll();
      } else {
        this.removeOverlay();
        this.unbind();
        (_a = this.previousActiveElement) === null || _a === void 0 ? void 0 : _a.focus();
      }
    },

    fullscreen(val) {
      if (!this.isActive) return;

      if (val) {
        this.hideScroll();
        this.removeOverlay(false);
      } else {
        this.showScroll();
        this.genOverlay();
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(util_console["e" /* removed */])('full-width', this);
    }
  },

  beforeMount() {
    this.$nextTick(() => {
      this.isBooted = this.isActive;
      this.isActive && this.show();
    });
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') this.unbind();
  },

  methods: {
    animateClick() {
      this.animate = false; // Needed for when clicking very fast
      // outside of the dialog

      this.$nextTick(() => {
        this.animate = true;
        window.clearTimeout(this.animateTimeout);
        this.animateTimeout = window.setTimeout(() => this.animate = false, 150);
      });
    },

    closeConditional(e) {
      const target = e.target; // Ignore the click if the dialog is closed or destroyed,
      // if it was on an element inside the content,
      // if it was dragged onto the overlay (#6969),
      // or if this isn't the topmost dialog (#9907)

      return !(this._isDestroyed || !this.isActive || this.$refs.content.contains(target) || this.overlay && target && !this.overlay.$el.contains(target)) && this.activeZIndex >= this.getMaxZIndex();
    },

    hideScroll() {
      if (this.fullscreen) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        overlayable["a" /* default */].options.methods.hideScroll.call(this);
      }
    },

    show() {
      !this.fullscreen && !this.hideOverlay && this.genOverlay(); // Double nextTick to wait for lazy content to be generated

      this.$nextTick(() => {
        this.$nextTick(() => {
          var _a, _b;

          if (!((_a = this.$refs.dialog) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement))) {
            this.previousActiveElement = document.activeElement;
            (_b = this.$refs.dialog) === null || _b === void 0 ? void 0 : _b.focus();
          }

          this.bind();
        });
      });
    },

    bind() {
      window.addEventListener('focusin', this.onFocusin);
    },

    unbind() {
      window.removeEventListener('focusin', this.onFocusin);
    },

    onClickOutside(e) {
      this.$emit('click:outside', e);

      if (this.persistent) {
        this.noClickAnimation || this.animateClick();
      } else {
        this.isActive = false;
      }
    },

    onKeydown(e) {
      if (e.keyCode === helpers["q" /* keyCodes */].esc && !this.getOpenDependents().length) {
        if (!this.persistent) {
          this.isActive = false;
          const activator = this.getActivator();
          this.$nextTick(() => activator && activator.focus());
        } else if (!this.noClickAnimation) {
          this.animateClick();
        }
      }

      this.$emit('keydown', e);
    },

    // On focus change, wrap focus to stay inside the dialog
    // https://github.com/vuetifyjs/vuetify/issues/6892
    onFocusin(e) {
      if (!e || !this.retainFocus) return;
      const target = e.target;

      if (!!target && this.$refs.dialog && // It isn't the document or the dialog body
      ![document, this.$refs.dialog].includes(target) && // It isn't inside the dialog body
      !this.$refs.dialog.contains(target) && // We're the topmost dialog
      this.activeZIndex >= this.getMaxZIndex() && // It isn't inside a dependent element (like a menu)
      !this.getOpenDependentElements().some(el => el.contains(target)) // So we must have focused something outside the dialog and its children
      ) {
        // Find and focus the first available element inside the dialog
        const focusable = this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const el = [...focusable].find(el => !el.hasAttribute('disabled'));
        el && el.focus();
      }
    },

    genContent() {
      return this.showLazyContent(() => [this.$createElement(VThemeProvider["a" /* default */], {
        props: {
          root: true,
          light: this.light,
          dark: this.dark
        }
      }, [this.$createElement('div', {
        class: this.contentClasses,
        attrs: {
          role: 'dialog',
          'aria-modal': this.hideOverlay ? undefined : 'true',
          ...this.getScopeIdAttrs()
        },
        on: {
          keydown: this.onKeydown
        },
        style: {
          zIndex: this.activeZIndex
        },
        ref: 'content'
      }, [this.genTransition()])])]);
    },

    genTransition() {
      const content = this.genInnerContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          appear: true
        }
      }, [content]);
    },

    genInnerContent() {
      const data = {
        class: this.classes,
        attrs: {
          tabindex: this.isActive ? 0 : undefined
        },
        ref: 'dialog',
        directives: [{
          name: 'click-outside',
          value: {
            handler: this.onClickOutside,
            closeConditional: this.closeConditional,
            include: this.getOpenDependentElements
          }
        }, {
          name: 'show',
          value: this.isActive
        }],
        style: {
          transformOrigin: this.origin
        }
      };

      if (!this.fullscreen) {
        data.style = { ...data.style,
          maxWidth: Object(helpers["g" /* convertToUnit */])(this.maxWidth),
          width: Object(helpers["g" /* convertToUnit */])(this.width)
        };
      }

      return this.$createElement('div', data, this.getContentSlot());
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-dialog__container',
      class: {
        'v-dialog__container--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      }
    }, [this.genActivator(), this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=template&id=7ea7f274&scoped=true&







var Bannervue_type_template_id_7ea7f274_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_c(VDialog_VDialog, {
    attrs: {
      "max-width": "690"
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "video-popup"
  }, [_c(components_VCard["c" /* VCardTitle */], {
    staticClass: "headline"
  }, [_c('h2', {
    staticClass: "title"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('saasLanding.banner_title')) + "\n          "), _c(VBtn["a" /* default */], {
    attrs: {
      "icon": ""
    },
    on: {
      "click": function ($event) {
        return _vm.handleVideoClose();
      }
    }
  }, [_c(VIcon["a" /* default */], [_vm._v("mdi-close")])], 1)], 1)]), _vm._v(" "), _vm.yt.use ? _c('div', {
    staticClass: "text-center"
  }, [_c('youtube', {
    ref: "youtube",
    attrs: {
      "video-id": _vm.videoId,
      "player-vars": _vm.playerVars,
      "width": 640,
      "height": 360
    }
  })], 1) : _vm._e()], 1)], 1), _vm._ssrNode(" <div class=\"decoration\" data-v-7ea7f274><iframe frameborder=\"0\" allowfullscreen=\"allowfullscreen\" allow=\"autoplay; loop;\" title width=\"2612\" height=\"1469.25\" src=\"https://www.youtube.com/embed/mKqg-xtk5qE?playlist=mKqg-xtk5qE&autoplay=1&loop=1&controls=0&rel=0&mute=1&origin=http%3A%2F%2Fveluxi.ux-maestro.com&enablejsapi=1&widgetid=1\" id=\"widget1\" data-v-7ea7f274>…</iframe></div> "), _c(VContainer["a" /* default */], {
    class: {
      fixed: _vm.isDesktop
    }
  }, [_c('div', {
    staticClass: "slider-wrap"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('h3', {
    staticClass: "use-text-title"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('saasLanding.banner_title')) + " ")])]), _vm._v(" "), _c('p', {
    staticClass: "use-text-subtitle"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('saasLanding.banner_subtitle')) + "\n        ")])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"deco\" data-v-7ea7f274>", "</div>", [_c('hidden', {
    attrs: {
      "point": "mdDown"
    }
  }, [_c('div', {
    staticClass: "deco-inner",
    class: {
      hide: _vm.hide
    }
  }, [_c('div', {
    staticClass: "wave wave-one"
  }), _vm._v(" "), _c('div', {
    staticClass: "wave wave-two"
  })])]), _vm._ssrNode(" <div class=\"wave wave-cover\" data-v-7ea7f274></div>")], 2)], 2);
};

var Bannervue_type_template_id_7ea7f274_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=template&id=7ea7f274&scoped=true&

// CONCATENATED MODULE: ./youtube.js
const useYoutube = {
  use: true
};
/* harmony default export */ var youtube = (useYoutube);
// CONCATENATED MODULE: ./static/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', ''],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  saas: ['/images/saas/ibz-island-shape-2.png', '/images/saas/ibizapay-bg.png', 'https://via.placeholder.com/1000x625/e6f8ff/757575', '/images/saas/ibz-card.png', '/images/saas/podenks-nft-3.gif', '/images/saas/marketplace.mp4', '/images/saas/las_dalias_clip_collection_2.gif', '/images/saas/ibz-logo-big.png', '/images/saas/ibizapay-image.png', '/images/saas/utility-token-image.png', '/images/saas/ibiza-nxt-logo.png', '/images/saas/marketplace.image.png', '/images/saas/ibz-roadmap-2022.png']
};
/* harmony default export */ var images_imgAPI = (imgAPI);
// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=script&lang=js&




/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },

  data() {
    return {
      videoId: 'mKqg-xtk5qE',
      hide: false,
      link: text_link["a" /* default */],
      imgAPI: images_imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        loop: 1,
        autoplay: 0,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 0,
        origin: 'https://localhost:8008'
      },
      yt: youtube
    };
  },

  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false;
      }

      this.dialog = true;
      setTimeout(() => {
        this.player = this.$refs.youtube.player;
        this.player.playVideo();
      }, 100);
    },

    handleVideoClose() {
      this.dialog = false;
      this.player.pauseVideo();
    }

  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Banner/Banner.vue



function Banner_injectStyles (context) {
  
  var style0 = __webpack_require__(303)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Banner_component = Object(componentNormalizer["a" /* default */])(
  Banner_Bannervue_type_script_lang_js_,
  Bannervue_type_template_id_7ea7f274_scoped_true_render,
  Bannervue_type_template_id_7ea7f274_scoped_true_staticRenderFns,
  false,
  Banner_injectStyles,
  "7ea7f274",
  "2424f02f"
  
)

/* harmony default export */ var Banner = (Banner_component.exports);
// CONCATENATED MODULE: ./components/Banner/index.js

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo/CompanyLogo.vue?vue&type=template&id=096a6704&scoped=true&


var CompanyLogovue_type_template_id_096a6704_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_c(VContainer["a" /* default */], [_c('div', {
    staticClass: "carousel-wrap"
  }, [_c('div', [_c('slick', {
    ref: "slider",
    attrs: {
      "options": _vm.slickOptions
    }
  }, _vm._l(_vm.logos, function (item) {
    return _c('div', {
      key: item,
      staticClass: "item"
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })])]);
  }), 0)], 1)])])], 1);
};

var CompanyLogovue_type_template_id_096a6704_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue?vue&type=template&id=096a6704&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo/CompanyLogo.vue?vue&type=script&lang=js&
/* harmony default export */ var CompanyLogovue_type_script_lang_js_ = ({
  components: {
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 227, 7))
  },

  data() {
    return {
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            autoplaySpeed: 3000
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      },

      mounted() {
        this.loaded = true;
      },

      methods: {
        slickNext() {
          this.$refs.slider.next();
        },

        slickPrev() {
          this.$refs.slider.prev();
        }

      },
      logos: [{
        url: 'https://polygon.technology/',
        img: '/images/logos/architect.png'
      }, {
        url: 'https://transak.com/',
        img: '/images/logos/cloud.png'
      }, {
        url: 'https://www.yomi.digital/',
        img: '/images/logos/coin.png'
      }, {
        url: 'https://mego.cx/',
        img: '/images/logos/mobile.png'
      }, {
        url: 'https://beincrypto.com/',
        img: '/images/logos/beincrypto.png'
      }, {
        url: 'https://www.conselldeivissa.es/es/el-consell',
        img: '/images/logos/consell-2.png'
      }, {
        url: 'https://www.eivissacultural.es/',
        img: '/images/logos/eivicult.png'
      }, {
        url: 'https://www.eivissacultural.es/',
        img: '/images/logos/sanostra.png'
      }, {
        url: 'https://pimeef.com/',
        img: '/images/logos/PIMEF_01.png'
      }, {
        url: 'https://lasdalias.es/',
        img: '/images/logos/LAS_DALIAS.png'
      }, {
        url: 'https://www.atzaro.com/agroturismo-ibiza/',
        img: '/images/logos/ATZARO_01.png'
      }, {
        url: 'https://ibizabotanicobiotecnologico.com/?fbclid=IwAR2B_JuFDtTkYXNFaTLZ-i2YgZcekyQnEVX9_Onl_RLVSiQ6baneyYvkDFY',
        img: '/images/logos/ibb.png'
      }, {
        url: 'https://www.exclusivasmiro.es/',
        img: '/images/logos/MIRO_02.png'
      }, {
        url: 'https://vettoniaseguridad.com/',
        img: '/images/logos/VETTONIA_LOWQ.png'
      }, {
        url: 'http://emasbpaisajismo.es/',
        img: '/images/logos/EB_02.png'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var CompanyLogo_CompanyLogovue_type_script_lang_js_ = (CompanyLogovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue



function CompanyLogo_injectStyles (context) {
  
  var style0 = __webpack_require__(305)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CompanyLogo_component = Object(componentNormalizer["a" /* default */])(
  CompanyLogo_CompanyLogovue_type_script_lang_js_,
  CompanyLogovue_type_template_id_096a6704_scoped_true_render,
  CompanyLogovue_type_template_id_096a6704_scoped_true_staticRenderFns,
  false,
  CompanyLogo_injectStyles,
  "096a6704",
  "5a8d0181"
  
)

/* harmony default export */ var CompanyLogo = (CompanyLogo_component.exports);
// CONCATENATED MODULE: ./components/CompanyLogo/index.js

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(220);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature3/Feature3.vue?vue&type=template&id=03669d12&scoped=true&





var Feature3vue_type_template_id_03669d12_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_vm._ssrNode("<div class=\"decoration\" data-v-03669d12><svg version=\"1.0\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1281 1569\" xml:space=\"preserve\" class=\"wave\" style=\"enable-background:new 0 0 1281 1569;\" data-v-03669d12><style type=\"text/css\" data-v-03669d12>\n        \t.st0{fill:rgba(144, 255, 255, 0.5);}\n        </style> <g data-v-03669d12><path d=\"M858.2,1534.6c-62.1,0-128.4-20.4-201.5-61.9c-75.3-42.8-149-102.3-220.2-159.9\n        \t\tc-133.2-107.7-258.9-209.3-377.6-188.6C-8.4,1136-68,1186.1-123.3,1277.3c-29.1,48-63.8,84.7-103.2,109.3\n        \t\tc-37,23.1-79.2,35.9-125.1,38.1c-99.7,4.8-221-39.8-360.4-132.5c-111.5-74.1-234.8-178.9-366.5-311.6\n        \t\tc-224.2-225.9-397.4-457.3-399.1-459.6l1.4-1.1c1.7,2.3,174.8,233.6,399,459.4c131.6,132.6,254.9,237.4,366.2,311.4\n        \t\tc139.1,92.5,260,137,359.4,132.2c94.4-4.5,170.7-53.8,226.9-146.5c55.6-91.7,115.6-142.1,183.4-153.9\n        \t\tc119.5-20.9,245.5,81.1,379,189c144.2,116.6,293.3,237.1,450.9,219.7c91.8-10.1,176.7-65.8,259.5-170.1\n        \t\tc120.2-151.4,242.6-257.7,374-324.8c117.1-59.8,242.8-89,383.7-89c7.2,0,14.5,0.1,21.8,0.2c133,2.8,280.8,30.3,465.1,86.5\n        \t\tc169.5,51.7,358.3,124.6,553.1,201l-0.7,1.7c-419.5-164.6-738-281.6-1017.6-287.4c-306.2-6.4-546.2,120.9-778.1,412.9\n        \t\tc-42.7,53.8-87.1,95.5-131.8,123.8c-41.5,26.3-84.9,42.1-128.9,47C878.6,1534.1,868.4,1534.6,858.2,1534.6z\" class=\"st0\" data-v-03669d12></path> <path d=\"M865.7,1494.7c-26.1,0-52.9-3.6-80.5-10.7c-117.5-30.3-229.7-120-338.3-206.9\n        \t\tC314.3,1171.1,189,1070.8,69,1091.1c-68.7,11.6-130.1,61.8-187.7,153.5c-30.3,48.3-66.3,85.2-107,109.7\n        \t\tc-38.2,23-81.4,35.6-128.5,37.5c-100.2,4-221-40.1-359.1-131.1c-110.4-72.8-232.2-175.5-361.8-305.4\n        \t\tc-220.7-221.1-389.9-447.2-391.6-449.5l1.4-1.1c1.7,2.3,170.9,228.3,391.5,449.3c129.5,129.8,251.1,232.4,361.5,305.1\n        \t\tC-574.4,1350-454,1394-354.2,1390c96.7-3.9,175.4-53.1,234-146.4c57.9-92.1,119.7-142.6,188.9-154.3\n        \t\tc120.8-20.4,246.4,80.1,379.4,186.4c108.4,86.7,220.5,176.4,337.6,206.5c132.5,34.1,252.3-15.5,366.1-151.7\n        \t\tc121.7-145.6,244.7-248.4,376.1-314.3c124-62.1,256.3-91.5,404.5-89.9c69.6,0.8,142,8.2,221.4,22.8\n        \t\tc73.6,13.5,151.7,32.8,238.7,59.1c174.5,52.7,364.1,127.7,543.1,200.8l-0.7,1.7c-359.7-147-707-279.2-1002.5-282.6\n        \t\tc-4,0-8.1-0.1-12.1-0.1c-297.2,0-534.2,124.8-767.1,403.6c-31,37.1-62.9,68.2-94.8,92.5c-30.3,23.1-61.6,40.7-92.9,52.3\n        \t\tC932.8,1488.7,899.8,1494.7,865.7,1494.7z\" class=\"st0\" data-v-03669d12></path> <path d=\"M873.6,1454.9c-26.9,0-54.4-3.7-82.7-11.1c-116.1-30.3-226.6-117.7-333.4-202.3\n        \t\tc-132.1-104.6-256.9-203.4-378.2-183.5c-70.3,11.5-133.5,61.9-193.4,154c-31.6,48.7-68.9,85.7-110.8,110.2\n        \t\tc-39.3,23-83.7,35.4-131.9,36.9c-100.5,3.2-220.9-40.4-357.7-129.8c-109.4-71.4-229.5-172.1-356.9-299.1\n        \t\tc-217-216.3-382.4-437.2-384.1-439.4l1.4-1.1c1.6,2.2,167,223,383.9,439.2c127.4,127,247.4,227.5,356.6,298.9\n        \t\tc136.5,89.1,256.5,132.7,356.6,129.5c99.1-3.2,180.2-52.4,241.3-146.3c60.2-92.5,123.8-143.2,194.6-154.7\n        \t\tc122.1-20,247.2,79,379.6,183.9c106.7,84.5,217,171.8,332.8,202c130.9,34.1,250-12.3,364.1-141.8\n        \t\tc123.2-139.9,246.9-239.2,378.2-303.7c124.5-61.2,256-91,401.9-91c0.5,0,1,0,1.5,0c133,0.2,281.8,25.4,454.9,77.2\n        \t\tc143.9,43,308.3,104.9,533.1,200.6l-0.7,1.7c-390.8-166.4-708.2-277.3-987.4-277.7c-0.5,0-1,0-1.4,0\n        \t\tc-294.4,0-541.9,125.2-778.8,394.1c-31.1,35.3-63,64.8-94.8,87.8c-30.2,21.8-61.4,38.4-92.5,49.2\n        \t\tC938,1449.4,906.3,1454.9,873.6,1454.9z\" class=\"st0\" data-v-03669d12></path> <path d=\"M881.7,1415.1c-27.7,0-55.9-3.9-85.1-11.6C681.9,1373.2,573.1,1288,468,1205.7\n        \t\tc-131.5-103-255.7-200.4-378.3-181c-71.8,11.4-137,61.9-199.2,154.5c-33,49-71.6,86.3-114.8,110.7c-40.5,22.9-86.1,35.1-135.4,36.3\n        \t\tc-100.9,2.5-220.7-40.7-356.1-128.4c-108.3-70.1-226.7-168.6-352-292.9c-213.4-211.5-374.9-427.1-376.5-429.2l1.4-1.1\n        \t\tc1.6,2.2,163.1,217.6,376.3,429c125.2,124.1,243.6,222.6,351.7,292.6c135.1,87.5,254.6,130.6,355.1,128.1\n        \t\tc101.5-2.5,185.2-51.7,248.8-146.2c62.6-93,128.1-143.8,200.4-155.2c123.3-19.5,247.8,78,379.7,181.3\n        \t\tc105,82.3,213.6,167.3,327.9,197.5c129.3,34.1,247.8-9,362.2-131.9c124.8-134.1,249.2-230,380.3-293.2\n        \t\tc125.9-60.7,257.5-90.8,402.3-92c133.7-1.1,280.9,22.6,449.9,72.5c146,43.2,312.3,106.9,523.1,200.4l-0.7,1.6\n        \t\tc-379.4-168.3-689-272.6-964.5-272.6c-286.7,0-536.3,113-789.1,384.5c-31.2,33.5-63.1,61.5-94.8,83.1\n        \t\tc-30.2,20.6-61.2,36.1-92.2,46.2C943.4,1410.2,912.9,1415.1,881.7,1415.1z\" class=\"st0\" data-v-03669d12></path> <path d=\"M890.1,1375.3c-28.6,0-57.7-4-87.8-12.1C689,1332.9,582,1250,478.6,1169.8\n        \t\tc-130.9-101.5-254.5-197.3-378.3-178.4c-73.4,11.2-140.5,61.9-205.2,155c-34.4,49.4-74.4,86.8-119,111.2\n        \t\tc-41.8,22.9-88.5,34.9-139,35.7c-101.2,1.7-220.4-41.1-354.4-127.1c-107.1-68.8-223.9-165.2-347.1-286.6\n        \t\tc-209.7-206.7-367.3-417-368.9-419.1l1.4-1.1c1.6,2.1,159.1,212.3,368.7,418.9c123.1,121.3,239.8,217.7,346.8,286.4\n        \t\tc133.7,85.8,252.6,128.5,353.4,126.8c104-1.7,190.3-50.9,256.6-146.2c65-93.5,132.6-144.4,206.4-155.7\n        \t\tc124.5-19,248.4,77,379.6,178.7c103.3,80.1,210.1,162.9,323.1,193.1c127.7,34.2,245.6-5.7,360.2-122.1\n        \t\tc223.7-226.9,448.7-346.3,702.2-371c-243.9,24.2-469.8,137.8-700.9,372.3c-61.7,62.6-122.7,102.4-186.6,121.6\n        \t\tC948.8,1371,919.8,1375.3,890.1,1375.3z M2903.8,1133.4c-293.1-135.5-548.1-229.8-781.9-259.8c84.4,10.7,173.7,29.9,269.5,57.9\n        \t\tc148.6,43.4,311.6,107.1,513.2,200.2L2903.8,1133.4z\" class=\"st0\" data-v-03669d12></path> <path d=\"M898.8,1335.7c-29.5,0-59.6-4.2-90.7-12.7c-112-30.4-217.2-111.1-318.9-189.1\n        \t\tC359,1034.1,236,939.7,111.1,958.2c-75,11.1-144.1,61.9-211.4,155.5c-35.8,49.8-77.3,87.4-123.3,111.8c-43,22.8-91,34.6-142.8,35.1\n        \t\tc-101.5,0.9-220-41.4-352.6-125.7c-106-67.4-221.1-161.8-342-280.3c-206-201.9-359.7-406.9-361.2-408.9l1.4-1.1\n        \t\tc1.5,2,155.2,207,361.1,408.8c120.9,118.5,235.9,212.7,341.7,280.1c132.2,84.2,250.5,126.4,351.6,125.5\n        \t\tc106.6-1,195.6-50.1,264.6-146.1c67.6-94,137.1-145.1,212.6-156.3c125.6-18.5,248.9,76,379.4,176.1\n        \t\tc101.6,77.9,206.6,158.5,318.3,188.8c126.2,34.3,243.4-2.5,358.2-112.3c128.3-122.7,254.1-211.7,384.5-272\n        \t\tc128.1-59.3,259-90.1,400.1-94.2c135.1-3.9,278.9,16.7,439.7,63.2c147.9,42.7,312.5,108.2,503.2,200l-0.8,1.6\n        \t\tc-664.2-320-1184.6-414.5-1725.5,102.7c-61.8,59.1-122.7,96.4-186.2,114C954.4,1331.9,926.9,1335.7,898.8,1335.7z\" class=\"st0\" data-v-03669d12></path> <path d=\"M907.8,1296.2c-30.6,0-61.8-4.4-93.9-13.3c-110.7-30.5-214.1-109-314.1-184.9C370.3,999.7,248,906.9,122,924.8\n        \t\tc-76.6,10.9-147.8,62-217.7,156.2c-37.3,50.2-80.3,88-127.7,112.4c-44.3,22.7-93.6,34.3-146.6,34.4c-0.2,0-0.3,0-0.5,0\n        \t\tc-101.5,0-219.2-41.8-350.1-124.4c-104.8-66.1-218.1-158.3-336.9-274.1c-202.2-197.1-352.1-396.8-353.5-398.8l1.4-1.1\n        \t\tc1.5,2,151.2,201.6,353.4,398.6c118.7,115.7,232,207.8,336.6,273.8c130.5,82.4,248,124.1,349.1,124.1c0.2,0,0.3,0,0.5,0\n        \t\tc109.2-0.2,201-49.3,272.9-146C-26.9,985.3,44.7,934,121.8,923.1c126.7-18,249.3,75,379.1,173.5c99.9,75.8,203.2,154.2,313.5,184.6\n        \t\tc124.6,34.4,241.1,0.8,356.2-102.6c130.3-117.1,256.7-202.6,386.5-261.5c129.3-58.6,259.8-89.8,399.1-95.3\n        \t\tc135.7-5.4,277.8,13.8,434.6,58.5c148.5,42.4,309.9,107.7,493.2,199.8l-0.8,1.6C2542,910.5,2256,824,1998.7,824\n        \t\tc-300.5,0-561.9,117.8-826.9,356c-61.9,55.6-122.7,90.4-185.8,106.4C960.1,1293,934.2,1296.2,907.8,1296.2z\" class=\"st0\" data-v-03669d12></path> <path d=\"M917.2,1256.9c-31.8,0-64.1-4.7-97.5-14c-109.3-30.6-211-107-309.3-180.8c-101.7-76.3-197.7-148.5-296.4-167.8\n        \t\tc-111-21.7-208,27.2-305.2,154c-38.8,50.6-83.3,88.6-132.3,113c-45.7,22.7-96.3,34-150.5,33.7c-101.7-0.6-218.9-42-348.5-123\n        \t\tC-826,1007.1-937.6,916.9-1054.2,804c-198.4-192.3-344.4-386.7-345.8-388.7l1.4-1.1c1.5,1.9,147.3,196.3,345.7,388.5\n        \t\tc116.5,112.9,228,202.9,331.4,267.6c129.2,80.8,246.2,122.1,347.5,122.8c111.9,0.7,206.6-48.4,281.4-145.9\n        \t\tc51.5-67.2,102.7-112,156.4-136.9c48.1-22.3,97.4-28.1,150.6-17.7c99.1,19.4,195.3,91.6,297.1,168.1\n        \t\tc98.2,73.7,199.7,150,308.7,180.5c123.1,34.5,238.9,4.1,354.1-92.9c132.5-111.6,259.6-193.6,388.6-250.9\n        \t\tc130.6-58,260.8-89.5,398-96.4c136.2-6.8,276.6,10.8,429.5,53.8c148.6,41.8,306.6,107.1,483.2,199.6l-0.8,1.6\n        \t\tC2552,888,2274.3,803.3,2018.1,803.3c-298.4,0-567.7,114.8-842.6,346.3c-62,52.2-122.6,84.6-185.3,98.9\n        \t\tC966,1254.1,941.8,1256.9,917.2,1256.9z\" class=\"st0\" data-v-03669d12></path> <path d=\"M927,1217.6c-33.1,0-66.7-4.9-101.4-14.8c-108-30.8-207.9-105-304.5-176.8\n        \t\tc-101.5-75.4-197.4-146.7-296.8-165.4c-111.9-21-210.7,28.2-310.9,154.9c-40.4,51.1-86.5,89.3-137,113.6\n        \t\tc-47,22.6-99,33.7-154.6,32.9c-101.8-1.4-218.2-42.3-346.2-121.7c-102.3-63.4-212.1-151.4-326.5-261.6\n        \t\tc-194.6-187.5-336.7-376.6-338.1-378.5l1.4-1.1c1.4,1.9,143.4,191,337.9,378.3c179.5,172.9,441.6,379.6,671.4,382.7\n        \t\tc114.7,1.6,212.4-47.5,290.2-145.8c53.1-67.2,105.5-112,160.2-137.1c49-22.5,98.9-28.5,152.5-18.4\n        \t\tc99.8,18.8,195.9,90.1,297.5,165.7c96.5,71.7,196.3,145.8,303.9,176.5c121.6,34.7,236.7,7.4,352-83.2\n        \t\tc134.9-106.1,262.7-184.7,390.7-240.4c132.1-57.4,261.9-89.3,396.9-97.5c136.6-8.3,275.4,7.8,424.4,49.2\n        \t\tc148.1,41.2,302.9,106.4,473.3,199.4l-0.9,1.6c-658.2-359.5-1145.9-333.7-1683.3,89.1c-62,48.8-122.4,78.7-184.7,91.5\n        \t\tC972.1,1215.3,949.7,1217.6,927,1217.6z\" class=\"st0\" data-v-03669d12></path> <path d=\"M937.3,1178.5c-34.6,0-69.5-5.2-105.6-15.7c-106.6-30.9-204.8-103.1-299.7-172.9\n        \t\tC430.6,915.4,334.8,845.1,234.7,827C122,806.7,21.4,856.2-81.9,982.8c-42.1,51.6-89.8,90-141.9,114.2\n        \t\tc-48.5,22.5-101.8,33.4-158.7,32.2c-101.8-2.2-217.4-42.6-343.7-120.3c-101-62.1-209.1-148-321.1-255.3\n        \t\tc-190.8-182.7-328.9-366.6-330.3-368.4l1.4-1.1c1.4,1.8,139.4,185.6,330.1,368.2c175.9,168.4,433.9,370.2,663.7,375.1\n        \t\tc117.6,2.5,218.3-46.5,299.2-145.7c54.8-67.1,108.4-112,164-137.3c49.9-22.6,100.3-28.9,154.3-19.2\n        \t\tc100.5,18.1,196.4,88.6,298,163.3c192.3,141.4,391.2,287.6,648.9,98.9c137.7-100.8,266.2-176,392.8-229.8\n        \t\tc133.6-56.8,263.1-89,395.8-98.6c137-9.8,274.1,4.7,419.3,44.5c147.3,40.3,298.9,105.5,463.3,199.2l-0.9,1.6\n        \t\tc-620.6-353.7-1104.2-329.2-1669.3,84.5c-62,45.4-122.3,72.9-184.1,84.1C978.3,1176.7,957.9,1178.5,937.3,1178.5z\" class=\"st0\" data-v-03669d12></path> <path d=\"M948,1139.6c-36.2,0-72.7-5.5-110.4-16.7c-105.3-31.1-201.7-101.2-294.9-169.1\n        \t\tC441.5,880.2,346,810.7,245.1,793.3c-113.5-19.6-216,30.2-322.5,156.8c-43.8,52.1-93.3,90.7-147,114.9\n        \t\tc-49.9,22.5-104.7,33-162.9,31.3c-101.7-2.9-216.5-42.9-341.1-118.9c-99.7-60.8-205.9-144.6-315.7-249.1\n        \t\tc-186.9-177.9-321.2-356.5-322.5-358.3l1.4-1.1c1.3,1.8,135.5,180.3,322.3,358.1c172.3,164,426,360.9,655.6,367.5\n        \t\tc120.5,3.4,224.3-45.5,308.5-145.6c56.4-67.1,111.4-112,167.9-137.5c50.7-22.8,101.8-29.3,156.2-19.9\n        \t\tc101.3,17.5,197,87.1,298.4,160.9c188.9,137.4,384.2,279.5,641.9,104.6c290.3-197,541.2-298.3,789.6-318.9\n        \t\tc67.3-5.6,135.7-5.2,203.5,1.2c69.2,6.5,140.1,19.5,210.8,38.6c71.9,19.4,146.1,45.8,220.6,78.4c75.4,33,153.7,73.6,232.8,120.7\n        \t\tl-0.9,1.5c-270.8-161.1-519.6-242.3-768-242.3c-285.2,0-569.8,106.8-887.3,322.2c-62,42.1-122.1,67.2-183.5,76.8\n        \t\tC984.8,1138.2,966.5,1139.6,948,1139.6z\" class=\"st0\" data-v-03669d12></path> <path d=\"M959.4,1100.9c-38,0-76.2-5.9-115.7-17.8c-103.9-31.3-198.6-99.5-290.1-165.3c-101-72.7-196.4-141.4-298-158.2\n        \t\tC141.3,740.7,37,790.8-72.8,917.4c-45.6,52.6-96.8,91.5-152.3,115.6c-51.4,22.4-107.7,32.7-167.3,30.5\n        \t\tc-101.5-3.7-215.4-43.2-338.3-117.5c-98.3-59.4-202.7-141.1-310.2-242.8c-183-173.1-313.4-346.5-314.7-348.2l1.4-1.1\n        \t\tc1.3,1.7,131.6,175,314.5,348c168.7,159.6,418,351.6,647.3,359.8c123.5,4.4,230.6-44.5,318.2-145.5\n        \t\tC-16,849.1,40.3,804.1,97.8,778.5c51.6-23,103.3-29.7,158.1-20.7c102,16.8,197.6,85.6,298.8,158.5\n        \t\tc185.5,133.5,377.3,271.5,634.8,110.4c145.3-90.9,275.2-159.2,397-208.7c137.3-55.8,266-88.7,393.7-100.7\n        \t\tc137.6-12.9,271.4-1.4,409.2,35.2c70.9,18.8,143.7,44.8,216.2,77.2c74.1,33.1,150.5,74,227.1,121.6l-0.9,1.5\n        \t\tc-633.3-393.5-1114.1-254.4-1641.2,75.4c-62,38.8-121.8,61.6-182.8,69.5C991.5,1099.8,975.5,1100.9,959.4,1100.9z\" class=\"st0\" data-v-03669d12></path> <path d=\"M971.4,1062.3c-40,0-80.1-6.3-121.5-19.1c-102.6-31.6-195.5-97.7-285.3-161.7\n        \t\tc-100.9-71.8-196.1-139.7-298.4-155.8C151.1,707.6,44.9,758.1-68.2,884.6c-47.4,53.1-100.5,92.2-157.7,116.4\n        \t\tc-53,22.3-110.7,32.3-171.8,29.6c-101.3-4.4-214.2-43.4-335.4-116.1c-96.9-58.1-199.4-137.7-304.6-236.5\n        \t\tc-179.1-168.3-305.6-336.4-306.8-338.1l1.4-1.1c1.3,1.7,127.7,169.7,306.6,337.9c165.1,155.2,410,342.2,638.8,352.1\n        \t\tc126.6,5.5,237-43.4,328.1-145.4c59.9-67,117.5-112.2,176-138c52.5-23.1,104.8-30.2,159.9-21.5c102.7,16.2,198.1,84.2,299.1,156.1\n        \t\tc182.1,129.7,370.3,263.8,627.7,116.1c153.1-87.9,279.9-150.8,399-198.1c139.4-55.4,267.9-88.7,392.6-101.8\n        \t\tc137.8-14.5,270-4.6,404.1,30.5c70,18.3,141.2,43.9,211.9,76.1c72.6,33.1,147.1,74.3,221.5,122.6l-1,1.5\n        \t\tc-254.1-165-486.5-235.1-714.3-235.1c-298.9,0-590,120.6-912.9,305.9c-62,35.6-121.5,56-182.1,62.4\n        \t\tC998.5,1061.6,984.9,1062.3,971.4,1062.3z\" class=\"st0\" data-v-03669d12></path> <path d=\"M984.1,1024.1c-42.3,0-84.5-6.8-128.1-20.5c-101.3-31.8-192.4-96.1-280.5-158.2\n        \t\tc-100.7-71-195.8-138-298.7-153.5c-115.8-17.4-224,33.5-340.4,160c-49.4,53.6-104.3,93-163.4,117.1\n        \t\tc-54.5,22.2-113.9,31.9-176.3,28.7c-101-5.1-212.8-43.7-332.2-114.6c-95.5-56.7-196-134.2-298.9-230.3\n        \t\tc-175.1-163.5-297.7-326.4-299-328l1.4-1.1c1.2,1.6,123.8,164.4,298.8,327.8c161.4,150.8,401.8,332.9,630,344.4\n        \t\tc129.8,6.5,243.6-42.3,338.3-145.3c61.7-67,120.6-112.2,180.1-138.2c53.4-23.3,106.4-30.6,161.8-22.3\n        \t\tc103.4,15.5,198.6,82.7,299.5,153.8c178.7,126,363.5,256.3,620.4,121.9c110.4-57.7,255.7-131.2,401.1-187.6\n        \t\tc141.9-55,270-88.7,391.5-102.9c138-16.1,268.5-7.7,399,25.8c68.9,17.7,138.8,42.9,207.6,74.9c71.2,33.1,143.8,74.7,215.8,123.6\n        \t\tl-1,1.5c-245.3-166.5-471.9-231.8-690.2-231.8c-314,0-611.1,135-922.9,298c-61.9,32.3-121.1,50.4-181.2,55.3\n        \t\tC1005.8,1023.6,994.9,1024.1,984.1,1024.1z\" class=\"st0\" data-v-03669d12></path> <path d=\"M997.7,986c-44.9,0-89.4-7.3-135.4-22c-99.9-32.1-189.3-94.5-275.7-154.8C486.1,739.1,391.2,672.8,287.6,658\n        \t\tC171,641.4,60.9,692.6-59,819.2c-51.4,54.2-108.3,93.9-169.2,117.9c-56.2,22.1-117.1,31.5-181,27.8\n        \t\tc-100.6-5.8-211.3-43.9-328.8-113.1c-94-55.4-192.6-130.8-293.1-224c-171.1-158.7-289.9-316.4-291.1-318l1.4-1.1\n        \t\tc1.2,1.6,119.9,159.1,290.9,317.8C-872.2,772.8-636.4,950-409.1,963.1c133,7.7,250.3-41.2,348.8-145.1\n        \t\tc63.5-67,123.8-112.3,184.3-138.6c54.3-23.5,107.9-31.1,163.7-23.1c104.1,14.8,199.2,81.2,299.8,151.5\n        \t\tc175.4,122.4,356.7,248.9,613.2,127.7c136.5-64.5,270-126.6,403.2-177c144.8-54.8,272.5-88.8,390.4-104\n        \t\tc138.1-17.8,267-10.9,393.9,21.1c67.9,17.1,136.3,41.9,203.3,73.8c69.7,33.1,140.4,75,210.2,124.5l-1,1.5\n        \t\tc-234.1-166.2-453.2-229.1-664.8-229.1c-319.1,0-621.4,142.9-934.3,290.8c-61.7,29.2-120.7,45-180.4,48.3\n        \t\tC1013.4,985.8,1005.5,986,997.7,986z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1012.4,948.3c-47.8,0-94.9-7.8-143.6-23.8c-98.6-32.4-186.2-92.9-270.9-151.5\n        \t\tc-100.3-69.3-195.1-134.8-299.4-148.9C181.1,608.2,69.1,659.8-54.4,786.4c-53.4,54.8-112.4,94.8-175.3,118.7\n        \t\tc-57.9,22-120.4,31.1-185.8,26.8c-100.2-6.5-209.6-44-325.3-111.6c-92.5-54-189.1-127.3-287.3-217.7\n        \t\tc-167.1-154-282-306.4-283.1-308l1.4-1.1c1.1,1.5,116,153.9,282.9,307.7c154,141.9,385.1,314.2,611.4,328.9\n        \t\tc136.3,8.8,257.3-40,359.7-145C9.7,718.1,71.4,672.7,133,646.3c55.3-23.7,109.5-31.6,165.7-24c104.8,14.2,199.7,79.8,300.2,149.2\n        \t\tc172,118.9,349.9,241.8,605.8,133.5c25.2-10.7,50.5-21.5,75-31.9c261.5-111.4,508.4-216.6,754.5-244c131.4-14.7,253-6.3,371.7,25.4\n        \t\tc63.8,17.1,127.8,41.5,190.3,72.5c65.1,32.3,130.8,73,195.4,121l-1.1,1.4c-528.7-392.7-983.5-199-1510.1,25.3\n        \t\tc-24.5,10.4-49.9,21.2-75,31.9c-61.6,26.1-120.3,39.6-179.4,41.4C1021.4,948.2,1016.9,948.3,1012.4,948.3z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1028.2,910.9c-51.2,0-101.2-8.5-153-25.9c-97.2-32.7-183.1-91.5-266.2-148.3\n        \t\tc-100.1-68.5-194.7-133.3-299.7-146.7C191.4,575,77.3,627-49.8,753.7c-55.6,55.4-116.7,95.6-181.6,119.5\n        \t\tc-59.6,21.9-123.7,30.6-190.7,25.8c-99.6-7.2-207.8-44.2-321.5-110.1c-90.9-52.7-185.6-123.8-281.3-211.5\n        \t\tc-163-149.2-274.1-296.5-275.2-298l1.4-1.1c1.1,1.5,112.1,148.6,275,297.7C-873.3,713.8-647,881.1-421.9,897.3\n        \t\tc139.6,10,264.4-38.7,370.8-144.8c67.3-67.1,130.4-112.6,193-139.3c56.2-23.9,111.1-32.1,167.6-24.9\n        \t\tc105.5,13.5,200.2,78.3,300.5,147c168.7,115.5,343.2,234.9,598.3,139.3c60-22.5,119.6-45.8,177.2-68.3\n        \t\tc242.8-94.9,472.2-184.5,700.2-203.5c121.9-10.1,234.1,0.5,343.2,32.5c58.7,17.2,117.3,41.2,174.3,71.1\n        \t\tc59.5,31.2,119.3,70.2,177.9,115.7l-1.1,1.4c-479.4-373-903.2-207.4-1393.9-15.7c-57.6,22.5-117.2,45.8-177.2,68.3\n        \t\tc-61.4,23-119.7,34.3-178.4,34.6C1029.8,910.9,1029,910.9,1028.2,910.9z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1045.5,874c-3.3,0-6.7,0-10-0.1c-51.5-1.1-101.8-10.2-153.6-28.1c-95.9-33-180-90.1-261.4-145.2\n        \t\tc-100-67.8-194.4-131.8-300.1-144.5C201.8,541.8,85.7,594.2-45.2,721c-57.9,56.1-121.1,96.6-188.1,120.4\n        \t\tc-61.3,21.8-127.2,30.2-195.7,24.8c-99-7.8-205.9-44.3-317.5-108.5c-89.3-51.3-181.9-120.4-275.2-205.2\n        \t\tc-158.9-144.5-266.1-286.6-267.2-288l1.4-1.1c1.1,1.4,108.3,143.4,267,287.8c146.5,133.2,368,295.6,591.7,313.2\n        \t\tc143,11.3,271.7-37.4,382.3-144.7C22.8,652.6,87.4,606.9,151.1,580c57.2-24.2,112.7-32.6,169.5-25.7\n        \t\tc106.1,12.8,200.7,76.9,300.9,144.8C786.9,811.3,958,927.3,1212.2,844.2c89.3-29.2,176.8-61.1,261.5-92\n        \t\tc227.4-83,442.2-161.4,654.8-174.2c113.7-6.9,218,5.3,318.8,37.4c112,35.6,217.9,94.9,323.7,181.1l-1.1,1.4\n        \t\tc-437.8-357-835.3-211.9-1295.5-44c-84.6,30.9-172.1,62.8-261.5,92C1155.1,864.8,1100.3,874,1045.5,874z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1063.3,837.4c-7.7,0-15.4-0.2-23-0.5c-51-2.4-100.7-12.3-151.8-30.3c-94.5-33.3-176.9-88.7-256.6-142.3\n        \t\tc-99.8-67.1-194-130.4-300.4-142.4C212.4,508.4,94.1,561.3-40.6,688.3c-60.2,56.7-125.7,97.5-194.8,121.3\n        \t\tc-63.2,21.7-130.7,29.7-200.8,23.7c-98.3-8.4-203.7-44.4-313.3-106.8c-87.7-50-178.2-116.9-269.1-199\n        \t\tc-154.7-139.7-258.2-276.7-259.2-278.1l1.4-1.1c1,1.4,104.4,138.2,259,277.8C-874.7,655-658,812.5-436,831.5\n        \t\tC-289.5,844-156.9,795.4-41.8,687c71.3-67.2,137.4-113.1,202.1-140.2c58.2-24.4,114.3-33.1,171.5-26.7\n        \t\tc106.8,12.1,201.2,75.5,301.2,142.7c162.2,109.1,330,221.8,583,151c114.4-32,225-70.3,331.9-107.3\n        \t\tc214.3-74.2,416.8-144.3,616-152.8c106.6-4.5,203.9,8.8,297.6,40.7c104.1,35.5,202,93.1,299.2,176.3l-1.2,1.4\n        \t\tc-402.1-344-777-214.2-1211-63.9c-107,37-217.6,75.3-332,107.4C1164.5,830.1,1113.1,837.4,1063.3,837.4z\" class=\"st0\" data-v-03669d12></path> <path d=\"M-394,802.7c-16.4,0-33-0.8-49.7-2.3c-97.5-9-201.4-44.4-308.9-105.1c-86-48.6-174.4-113.4-262.8-192.7\n        \t\tc-150.6-135-250.2-266.9-251.2-268.2l1.4-1.1c1,1.3,100.6,133.1,251,268c138.8,124.4,350.5,277,570.7,297.4\n        \t\tc150,13.9,286.7-34.7,406.3-144.4c73.4-67.3,141-113.3,206.8-140.7c59.2-24.7,115.9-33.7,173.4-27.6\n        \t\tc107.5,11.4,201.7,74.2,301.5,140.7C796.2,727.7,968,842.2,1219.7,783.4c136-31.8,265.9-75.1,391.6-116.9\n        \t\tc203.1-67.6,394.9-131.5,582.4-136.8c100.3-2.8,191.5,11.3,279,43c97.2,35.3,188,91.6,277.7,172.2l-1.2,1.3\n        \t\tc-177.7-159.6-351.8-215.6-530.1-215.6c-194,0-392.9,66.3-607.2,137.6c-125.7,41.9-255.7,85.2-391.7,117\n        \t\tc-112.9,26.4-219.1,20.6-324.8-17.6c-93.2-33.7-173.8-87.5-251.8-139.4C543.9,561.7,449.8,499,342.8,487.7\n        \t\tC223.1,475,102.7,528.4-36,655.5c-62.6,57.4-130.5,98.5-201.8,122.2C-287.6,794.3-340,802.7-394,802.7z\" class=\"st0\" data-v-03669d12></path> <path d=\"M-396.9,770.2c-18.1,0-36.4-0.9-54.8-2.7c-96.6-9.6-198.9-44.4-304.2-103.4c-84.2-47.2-170.5-110-256.5-186.5\n        \t\tc-146.3-130.3-242.3-257.1-243.2-258.3l1.4-1.1c1,1.3,96.8,127.9,243,258.1C-876.2,596.3-669.6,744-451.5,765.6\n        \t\tc153.6,15.2,294.5-33.3,418.9-144.2C43,554.1,112.2,507.9,179,480.2c60.2-24.9,117.6-34.3,175.4-28.6\n        \t\tc108.1,10.6,202.2,72.9,301.9,138.8c148.6,98.3,317.1,209.7,567.3,162.6c155-29.2,301.3-76.6,442.7-122.5\n        \t\tc193.2-62.7,375.8-121.8,552.8-124.7c94.7-1.5,180.5,13.1,262.4,44.6c91,35,175.6,90.2,258.7,168.6l-1.2,1.3\n        \t\tc-343.6-324.3-681.2-214.9-1072-88.1c-141.5,45.9-287.9,93.3-443,122.5c-39.8,7.5-78.7,11.2-117,11.2\n        \t\tc-69.7,0-137.3-12.4-204.5-37.4c-91.8-34.1-170.7-86.3-247.1-136.7C555.8,526.2,461.9,464,354.2,453.4\n        \t\tc-120.3-11.8-242.8,42-385.6,169.4c-65.2,58.1-135.5,99.6-209,123.2C-290.5,762.1-343,770.2-396.9,770.2z\" class=\"st0\" data-v-03669d12></path> <path d=\"M-399.9,737.7c-19.8,0-39.8-1.1-60-3.2c-95.5-10.1-196.2-44.3-299.3-101.6c-82.4-45.8-166.5-106.5-250-180.2\n        \t\tc-142.1-125.6-234.3-247.3-235.2-248.6l1.4-1.1c0.9,1.2,93,122.8,235,248.3c131,115.8,332.5,258.5,548.3,281.4\n        \t\tc157.2,16.6,302.5-31.8,431.8-144c77.8-67.5,148.6-113.9,216.5-141.9c61.3-25.2,119.3-34.9,177.4-29.6\n        \t\tc108.8,9.9,202.8,71.6,302.3,137c145.6,95.6,310.7,203.9,559.2,168.4c171.8-24.6,332.1-75.7,487.1-125.1\n        \t\tc184.5-58.8,358.7-114.4,526.4-115.4c89.7-0.5,170.6,14.4,247.5,45.7c85.4,34.7,164.4,88.9,241.6,165.6l-1.3,1.3\n        \t\tc-158.2-157.1-317.1-211.1-482.5-211.1c-168.2,0-343.2,55.8-531.1,115.7c-155,49.4-315.4,100.6-487.3,125.2\n        \t\tc-32.5,4.7-64.4,7-95.8,7c-76.2,0-149.6-13.7-222.3-41.5c-90.4-34.5-167.6-85.1-242.3-134.2c-200-131.3-372.7-244.6-694,34.3\n        \t\tc-67.8,58.9-140.6,100.6-216.5,124.2C-293.6,729.9-346.1,737.7-399.9,737.7z\" class=\"st0\" data-v-03669d12></path> <path d=\"M-403.2,705.3c-21.6,0-43.4-1.2-65.4-3.7C-563,691-662,657.4-762.7,601.8c-80.6-44.4-162.5-103-243.5-174\n        \t\tC-1144,306.9-1232.5,190.2-1233.4,189l1.4-1.1c0.9,1.2,89.2,117.8,227,238.6C-877.9,538-681.7,675.8-468.4,699.8\n        \t\tc160.9,18.1,310.6-30.3,445-143.8c80.1-67.7,152.6-114.3,221.5-142.5c62.3-25.5,121-35.5,179.4-30.6\n        \t\tc109.4,9.2,203.3,70.5,302.7,135.3c142.7,93,304.3,198.5,550.9,174.1c187-18.5,359.2-73,525.8-125.8\n        \t\tc176-55.7,342.4-108.3,501-108.3c0.5,0,1,0,1.5,0c85,0.2,161.6,15.4,233.9,46.4c80.3,34.5,154.3,87.8,226.1,163l-1.3,1.2\n        \t\tc-296.9-310.6-604.5-213.3-960.7-100.6C1590.8,621,1418.4,675.5,1231.3,694c-110.4,10.9-213.3-3-314.5-42.6\n        \t\tc-89-34.9-164.5-84.1-237.5-131.7C580,455,486.3,393.9,377.4,384.7c-121.1-10.2-248.1,44.7-399.6,172.7\n        \t\tc-70.6,59.6-146,101.7-224.3,125.2C-297,697.7-349.5,705.3-403.2,705.3z\" class=\"st0\" data-v-03669d12></path> <path d=\"M-406.7,672.9c-23.4,0-47.1-1.4-70.9-4.2c-93.2-11.1-190.3-44-288.7-97.8c-78.7-43-158.4-99.5-236.8-167.8\n        \t\tc-133.5-116.2-218.3-228-219.1-229.1l1.4-1.1c0.8,1.1,85.5,112.8,218.9,228.9c123.1,107.1,314,240.1,524.5,265.1\n        \t\tc164.6,19.6,318.9-28.8,458.6-143.6C137.7,394.5,267.4,339,389.3,348.4c110,8.5,203.8,69.3,303.1,133.8\n        \t\tc139.7,90.6,298.1,193.3,542.5,179.7c200.7-11.1,383.4-68.9,560.1-124.8c167.2-52.9,325.3-102.9,474.8-102.9c2,0,4,0,6,0\n        \t\tc80.8,0.7,153.3,16.1,221.5,46.9c75.7,34.2,145,86.8,212,160.7l-1.3,1.2c-140.1-154.7-285-207.1-438.1-207.1\n        \t\tc-149.1,0-306,49.6-474.3,102.9c-176.8,55.9-359.6,113.8-560.5,124.9c-14.8,0.8-29.3,1.2-43.5,1.2c-220.6,0-368.6-96-500.1-181.2\n        \t\tc-99.1-64.3-192.8-125-302.3-133.5c-121.4-9.4-250.7,46.1-406.8,174.5C-91.1,585-169.2,627.5-250,650.9\n        \t\tC-300.7,665.5-353.2,672.9-406.7,672.9z\" class=\"st0\" data-v-03669d12></path> <path d=\"M-410.4,640.6c-25.3,0-50.8-1.6-76.5-4.8c-91.8-11.5-187.1-43.7-283-95.8c-76.8-41.6-154.2-96-230-161.5\n        \t\tc-129.2-111.6-210.3-218.4-211.1-219.5l1.4-1.1c0.8,1.1,81.8,107.8,210.9,219.3C-879.7,479.9-694.2,608-486.7,634\n        \t\tc168.4,21.1,327.4-27.2,472.5-143.5c161.2-129.1,293.2-185.3,415.4-176.7c50.5,3.6,99.9,17.7,155.4,44.6\n        \t\tc49.4,24,97.4,54.9,148.2,87.7c136.8,88.3,291.9,188.4,533.9,185.3c213.3-2.7,405.1-63.8,590.6-122.8\n        \t\tc327.9-104.3,611-194.4,869.7,107.3l-1.4,1.2c-257.9-300.8-540.6-210.9-867.8-106.7c-91.1,29-185.3,59-283.6,82.1\n        \t\tc-111.4,26.2-212,39.6-307.5,40.8c-3.6,0-7.3,0.1-10.9,0.1c-236.3,0-389-98.6-524-185.7c-99.1-63.9-192.6-124.3-302.8-132.1\n        \t\tC279.4,307,147.8,363-13,491.9C-136.4,590.7-269.8,640.6-410.4,640.6z\" class=\"st0\" data-v-03669d12></path> <path d=\"M-414.4,608.3c-27.2,0-54.6-1.8-82.3-5.5c-90.4-11.9-183.6-43.4-277.1-93.7c-74.8-40.2-149.8-92.5-223.2-155.3\n        \t\tc-124.8-107-202.3-208.9-203.1-210l1.4-1.1c0.8,1,78.1,102.8,202.8,209.7C-880.7,451-700.7,574.2-496.4,601\n        \t\tc172.2,22.7,336-25.6,486.9-143.3C156.6,328.1,291,271.3,413.3,279.1c50.8,3.2,100.3,17.1,155.7,43.7\n        \t\tc49.4,23.7,97.5,54.7,148.5,87.4c134,86.2,285.8,183.8,525,190.9c224.9,6.6,433.7-60.6,617.9-119.9\n        \t\tc156.8-50.5,304.9-98.2,442.2-95.4c73.3,1.5,138.5,17,199.3,47.4c67.3,33.7,128.4,85.1,186.7,157l-1.4,1.1\n        \t\tc-240.6-297-512.1-209.6-826.4-108.4c-94.6,30.5-192.5,62-295.4,85.2c-116.7,26.4-222.4,37.7-323.1,34.8\n        \t\tc-239.7-7.1-391.8-104.9-526-191.1C513.1,281,352.4,177.6-8.4,459.2C-135.5,558.3-271.8,608.3-414.4,608.3z\" class=\"st0\" data-v-03669d12></path> <path d=\"M-418.6,576c-29.2,0-58.6-2-88.2-6.1c-88.8-12.2-180-43.1-270.9-91.6c-72.7-38.8-145.5-89-216.2-149.1\n        \t\tc-120.5-102.4-194.3-199.5-195.1-200.5l1.4-1.1c0.7,1,74.5,97.9,194.8,200.2c111,94.4,285.5,212.6,486.2,240.3\n        \t\tC-330.6,592.4-161.8,544.2-4.9,425c90.3-68.6,169.8-116.3,243.1-145.8c66.8-26.9,128.1-38.3,187.4-34.9\n        \t\tc111.7,6.3,201.1,63.7,304.7,130.2c131.1,84.1,279.8,179.5,516,196.3c235.7,16.7,451.9-54,642.6-116.3\n        \t\tc151.1-49.4,293.9-96.1,424.9-93c69.9,1.7,131.8,17.2,189.3,47.5c63.6,33.5,121,84.3,175.4,155.5l-1.4,1.1\n        \t\tc-224.4-293.6-485.4-208.3-787.6-109.4c-97.7,32-198.8,65-305.8,88.3c-121.6,26.4-231.9,35.6-337.4,28.1\n        \t\tC1009.4,555.7,860.6,460.2,729.3,376c-103.4-66.3-192.6-123.6-303.8-129.9c-121.9-6.9-258.3,50.4-429.3,180.3\n        \t\tC-134.7,525.9-273.9,576-418.6,576z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1357.1,548c-36.4,0-72.1-2-107.3-5.9c-104.1-11.7-200.1-37.9-293.7-80.2c-81.8-37-148.9-80-213.8-121.6\n        \t\tC638.9,274,549.5,216.8,437.8,211.2C316,205.1,177.1,263.1,0.7,393.7c-141.4,104.7-291.3,155.1-445.7,149.8\n        \t\tc-123.5-4.2-250-43.9-376.1-117.8c-112.1-65.8-203.2-147.1-259.8-203.8c-61.3-61.4-96.6-107.8-97-108.3l1.4-1.1\n        \t\tc0.3,0.5,35.6,46.8,96.9,108.1c56.5,56.6,147.5,137.8,259.4,203.5c197.7,116,500.4,204.6,819.8-31.9c93.1-69,174.6-117,248.9-146.7\n        \t\tc68-27.3,130-39.1,189.3-36.1c112.2,5.6,201.7,63,305.4,129.4c128.3,82.2,273.8,175.5,506.8,201.6\n        \t\tc245.9,27.5,468.5-46.8,664.9-112.3c145.8-48.7,283.6-94.6,408.6-91.1c138.8,3.9,248.3,68,344.5,201.7l-1.5,1\n        \t\tc-95.9-133.3-204.9-197.1-343.1-201c-124.7-3.5-262.3,42.4-408,91c-100.4,33.5-204.2,68.1-315,91.4\n        \t\tC1514.9,539.1,1434.4,548,1357.1,548z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1392.8,522.1c-45.5,0-91.9-3.2-139.2-10.4c-102.4-15.6-196.9-44-288.9-86.9c-80.3-37.5-148.8-81.3-209.2-120\n        \t\tC652,238.4,562.5,181,450.3,176.2c-121.6-5.3-263,53.5-445,184.8c-143.6,103.6-294.6,154.3-448.8,150.6\n        \t\tc-123.3-2.9-249-40.5-373.4-111.5c-110.7-63.2-199.9-141.8-255.3-196.6c-60-59.4-94.2-104.4-94.6-104.9l1.4-1.1\n        \t\tc0.3,0.4,34.5,45.4,94.5,104.7c55.3,54.7,144.4,133.2,254.9,196.3c195.1,111.4,495.8,195.1,820.2-39\n        \t\tc96.1-69.3,179.4-117.7,254.8-147.8c69.3-27.7,131.8-39.9,191.3-37.3c112.7,4.9,202.3,62.3,306.1,128.9\n        \t\tC882.1,383.8,1024.5,475,1253.9,510c255.5,38.9,483.9-39.1,685.4-107.9c140.8-48.1,273.8-93.5,393.2-89.8\n        \t\tc132.3,4.1,235.7,67.9,325.5,200.5l-1.5,1c-89.4-132.2-192.3-195.6-324-199.8c-4.6-0.1-9.2-0.2-13.8-0.2\n        \t\tc-115.5,0-243.5,43.7-378.7,89.9C1775.4,459.9,1593.1,522.1,1392.8,522.1z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1425.4,497.2c-54.6,0-110.6-4.8-168.1-15.8c-100.6-19.3-193.4-49.9-283.8-93.3\n        \t\tc-78.8-37.9-145.6-80.8-204.5-118.6C665.3,202.7,575.6,145.2,463,141c-122.8-4.5-262.5,53.3-453.1,187.2\n        \t\tC-135.9,430.8-287.9,481.7-442,479.6c-123.2-1.7-247.9-37.1-370.7-105.2c-109.2-60.6-196.6-136.5-250.7-189.5\n        \t\tc-58.6-57.4-91.9-101-92.2-101.5l1.4-1.1c0.3,0.4,33.5,44,92.1,101.3c54,52.9,141.3,128.6,250.4,189.2\n        \t\tc192.5,106.9,491.1,185.6,820.6-46.1c99.2-69.7,184.5-118.4,260.9-148.9c70.5-28.1,133.7-40.8,193.3-38.6\n        \t\tc113.1,4.1,203,61.8,307,128.6c122.9,78.9,262.1,168.4,487.6,211.7c264.6,50.8,498.1-31,704.2-103.2\n        \t\tc136-47.7,264.5-92.7,378.5-88.8c126.2,4.3,223.8,67.7,307.3,199.5l-1.5,1c-83.2-131.2-180.3-194.4-305.9-198.6\n        \t\tc-113.7-3.9-242,41.1-377.8,88.7C1800.9,434.7,1622.5,497.2,1425.4,497.2z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1454.5,472.8c-66.2,0-130.4-7.3-193.5-21.9c-98.7-22.8-189.7-55.3-278.4-99.3\n        \t\tc-77.2-38.4-142.4-80.3-199.8-117.4c-108.4-69.9-194-125.1-307-128.4c-122.2-3.6-264.5,54.9-461.3,189.7\n        \t\tc-148.1,101.5-301.2,152.7-455,152.2c-123.1-0.4-246.9-33.7-368-99c-107.7-58.1-193.3-131.2-246.2-182.3\n        \t\tc-57.3-55.4-89.5-97.6-89.8-98.1l1.4-1.1c0.3,0.4,32.5,42.6,89.7,97.9c52.8,51,138.3,124.1,245.8,182\n        \t\tC-617.7,449.5-321.1,523.3,13.5,294c102.4-70.2,189.8-119.3,267.2-150.1c71.8-28.6,135.6-41.7,195.2-39.9\n        \t\tc52.1,1.6,101.8,14.2,156.6,39.9c49.4,23.2,98.9,55.1,151.4,88.9C898,306.4,1040.1,398,1261.4,449.2\n        \t\tc273.3,63.2,511.4-22.6,721.5-98.3c67.4-24.3,131-47.2,191.7-63.7c68.1-18.5,123-26.2,172.7-24.4c120.3,4.4,212.4,67.5,290,198.5\n        \t\tl-1.5,0.9c-77.2-130.4-168.9-193.2-288.5-197.6c-108.5-4-226.8,38.6-363.8,88c-106.4,38.4-216.4,78-336.7,101.1\n        \t\tC1580.3,466.4,1516.5,472.8,1454.5,472.8z\" class=\"st0\" data-v-03669d12></path> <path d=\"M1481.6,449.1c-74.4,0-146.2-9.5-216.9-28.6c-217-58.6-356.1-148.8-467.9-221.3\n        \t\tc-216-140-346.4-224.6-777.7,63.5c-150.3,100.4-304.4,151.9-458.1,153c-123,0.9-245.9-30.3-365.3-92.7\n        \t\tc-106.3-55.5-190.1-125.9-241.7-175.2c-55.9-53.4-87.1-94.2-87.4-94.6l1.4-1.1c0.3,0.4,31.4,41.2,87.3,94.5\n        \t\tc51.5,49.2,135.2,119.5,241.3,174.9c187.3,97.8,481.9,166.7,821.5-60.2c432.3-288.7,563-204,779.7-63.5\n        \t\tc111.7,72.4,250.7,162.5,467.4,221.1c281.7,76,523.8-13.9,737.5-93.3c132.5-49.2,247-91.8,350.9-87.7\n        \t\tc114.6,4.5,201.5,67.3,273.4,197.6l-1.6,0.9c-155.8-282.4-361.6-206-622.1-109.2c-102.8,38.2-219.4,81.5-342.4,104.6\n        \t\tC1599.2,443.4,1539.7,449.1,1481.6,449.1z\" class=\"st0\" data-v-03669d12></path></g></svg></div> "), _c(VContainer["a" /* default */], {
    class: {
      fixed: _vm.isDesktop
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('u-animate-container', [_c(VRow["a" /* default */], {
    class: [_vm.isMobile ? 'column' : 'row']
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "illustration-left"
  }, [_vm.loaded ? _c('section', {
    staticClass: "parallax-wrap"
  }, [_c('parallax', {
    attrs: {
      "speed-factor": _vm.isMobile ? 0 : 0.15,
      "section-height": _vm.isMobile ? 0 : 100,
      "direction": "up"
    }
  }, [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "figure screen"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgAPI.saas[7],
      "alt": "screen"
    }
  })])])])], 1) : _vm._e(), _vm._v(" "), _vm.loaded && !_vm.isMobile ? _c('section', {
    staticClass: "parallax-wrap"
  }, [_c('parallax', {
    attrs: {
      "speed-factor": _vm.isMobile ? 0 : 0.15,
      "section-height": 100,
      "direction": "down"
    }
  }, [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "figure graphic"
  })])])], 1) : _vm._e(), _vm._v(" "), _c('parallax-medium')], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "md": "6",
      "cols": "12"
    }
  }, [_c('u-animate', {
    attrs: {
      "offset": -100,
      "name": "fadeInLeftShort",
      "delay": "0.5s",
      "duration": "0.5s"
    }
  }, [_c('div', {
    staticClass: "desc"
  }, [_c('title-main', {
    attrs: {
      "align": _vm.isMobile ? 'center' : 'left'
    }
  }, [_c('span', [_vm._v("\n                      " + _vm._s(_vm.$t('saasLanding.feature_title1')) + "\n                      "), _c('strong', [_vm._v("\n                        " + _vm._s(_vm.$t('saasLanding.feature_titlestrong1')) + "\n                      ")])])]), _vm._v(" "), _c('h6', {
    staticClass: "use-text-subtitle2",
    class: [_vm.isMobile ? 'text-center' : 'text-left']
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('saasLanding.feature_desc1')) + "\n                  ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "btn",
    attrs: {
      "color": "primary",
      "large": "",
      "href": "https://app.ibizatoken.com/swap"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('saasLanding.see_detail')) + "\n                  ")])], 1)])], 1)], 1)], 1)], 1)])], 2);
};

var Feature3vue_type_template_id_03669d12_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Feature3/Feature3.vue?vue&type=template&id=03669d12&scoped=true&

// EXTERNAL MODULE: external "vue-parallaxy"
var external_vue_parallaxy_ = __webpack_require__(207);
var external_vue_parallaxy_default = /*#__PURE__*/__webpack_require__.n(external_vue_parallaxy_);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Medium.vue?vue&type=template&id=691f9ac3&scoped=true&
var Mediumvue_type_template_id_691f9ac3_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div");
};

var Mediumvue_type_template_id_691f9ac3_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Parallax/Medium.vue?vue&type=template&id=691f9ac3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Medium.vue?vue&type=script&lang=js&

/* harmony default export */ var Mediumvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Medium.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Mediumvue_type_script_lang_js_ = (Mediumvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/Medium.vue



function Medium_injectStyles (context) {
  
  var style0 = __webpack_require__(307)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Medium_component = Object(componentNormalizer["a" /* default */])(
  Parallax_Mediumvue_type_script_lang_js_,
  Mediumvue_type_template_id_691f9ac3_scoped_true_render,
  Mediumvue_type_template_id_691f9ac3_scoped_true_staticRenderFns,
  false,
  Medium_injectStyles,
  "691f9ac3",
  "f1c5baa6"
  
)

/* harmony default export */ var Medium = (Medium_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Large.vue?vue&type=template&id=4989517f&scoped=true&
var Largevue_type_template_id_4989517f_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div");
};

var Largevue_type_template_id_4989517f_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Parallax/Large.vue?vue&type=template&id=4989517f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Large.vue?vue&type=script&lang=js&

/* harmony default export */ var Largevue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Large.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Largevue_type_script_lang_js_ = (Largevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/Large.vue



function Large_injectStyles (context) {
  
  var style0 = __webpack_require__(309)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Large_component = Object(componentNormalizer["a" /* default */])(
  Parallax_Largevue_type_script_lang_js_,
  Largevue_type_template_id_4989517f_scoped_true_render,
  Largevue_type_template_id_4989517f_scoped_true_staticRenderFns,
  false,
  Large_injectStyles,
  "4989517f",
  "f10e5d9a"
  
)

/* harmony default export */ var Large = (Large_component.exports);
// EXTERNAL MODULE: ./components/Title/index.js + 5 modules
var Title = __webpack_require__(230);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature3/Feature3.vue?vue&type=script&lang=js&





/* harmony default export */ var Feature3vue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a,
    ParallaxMedium: Medium,
    ParallaxLarge: Large,
    'title-main': Title["a" /* default */]
  },

  data() {
    return {
      tab: null,
      imgAPI: images_imgAPI,
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Feature3/Feature3.vue?vue&type=script&lang=js&
 /* harmony default export */ var Feature3_Feature3vue_type_script_lang_js_ = (Feature3vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Feature3/Feature3.vue



function Feature3_injectStyles (context) {
  
  var style0 = __webpack_require__(311)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Feature3_component = Object(componentNormalizer["a" /* default */])(
  Feature3_Feature3vue_type_script_lang_js_,
  Feature3vue_type_template_id_03669d12_scoped_true_render,
  Feature3vue_type_template_id_03669d12_scoped_true_staticRenderFns,
  false,
  Feature3_injectStyles,
  "03669d12",
  "cf85eae2"
  
)

/* harmony default export */ var Feature3 = (Feature3_component.exports);
// CONCATENATED MODULE: ./components/Feature3/index.js

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature/Feature.vue?vue&type=template&id=08be2e9c&scoped=true&





var Featurevue_type_template_id_08be2e9c_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_vm._ssrNode("<div class=\"decoration\" data-v-08be2e9c><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1319.89 550.65\" class=\"wave\" data-v-08be2e9c><defs data-v-08be2e9c><style data-v-08be2e9c>\n              .i {\n                fill: none;\n                stroke: #90ffff;\n                stroke-miterlimit: 10;\n                stroke-width: 0.56px;\n              }\n            </style></defs><g id=\"a\" data-v-08be2e9c></g> <g id=\"b\" data-v-08be2e9c><g data-v-08be2e9c><path d=\"M144.35,454.47c130.97,126,331.01,113.88,488.17,7.2,157.16-106.68,362.22,66.68,430.28-18.04s-24.08-157.78,257.09-77.03\" class=\"i\" data-v-08be2e9c></path><path d=\"M1318.78,361.91c-275.66-79.16-188.67-9.54-257.37,74.31-14.09,17.25-33.85,23.72-57.65,24.4-92.46,2.66-245.33-85.67-370.11-4.53-88.59,57.61-192.15,85.88-289.17,78.02-75.61-6.08-147.01-32.75-202.88-86.5\" class=\"i\" data-v-08be2e9c></path><path d=\"M1317.67,357.23c-270.15-77.57-188.29-11.4-257.66,71.58-14.15,17.04-33.83,23.48-57.39,24.59-92.3,4.37-243.04-80.49-367.86-2.88-88.38,54.95-193.07,81.4-291.14,73.62-77.3-6.05-150.03-30.72-204.79-83.4\" class=\"i\" data-v-08be2e9c></path><path d=\"M1316.56,352.55c-264.63-75.99-188.12-13.43-257.94,68.85-14.26,16.8-33.81,23.24-57.13,24.79-92.17,6.1-240.73-75.32-365.61-1.24-88.16,52.3-193.98,76.93-293.11,69.22-78.98-6.01-153.06-28.69-206.69-80.29\" class=\"i\" data-v-08be2e9c></path><path d=\"M1315.46,347.87c-259.12-74.41-187.81-15.34-258.22,66.12-14.33,16.58-33.79,23.02-56.87,24.98-92.06,7.84-238.4-70.15-363.36,.4-87.92,49.64-194.9,72.45-295.09,64.82-80.67-5.98-156.08-26.66-208.6-77.18\" class=\"i\" data-v-08be2e9c></path><path d=\"M1314.35,343.19c-253.61-72.83-187.5-17.26-258.5,63.39-14.4,16.36-33.78,22.79-56.6,25.18-91.96,9.6-236.04-64.99-361.1,2.04-87.66,46.98-195.81,67.98-297.06,60.42-82.36-5.95-159.11-24.62-210.51-74.07\" class=\"i\" data-v-08be2e9c></path><path d=\"M1313.24,338.51c-248.09-71.24-187.18-19.17-258.78,60.66-14.48,16.14-33.78,22.58-56.34,25.37-91.88,11.37-233.64-59.83-358.85,3.68-87.39,44.33-196.73,63.5-299.03,56.02-84.05-5.91-162.13-22.59-212.42-70.97\" class=\"i\" data-v-08be2e9c></path><path d=\"M1312.13,333.83c-242.58-69.66-186.86-21.08-259.06,57.93-14.55,15.92-33.77,22.37-56.08,25.56-91.81,13.16-231.22-54.68-356.6,5.32-87.09,41.68-197.64,59.03-301,51.62-85.74-5.88-165.16-20.56-214.32-67.86\" class=\"i\" data-v-08be2e9c></path><path d=\"M1311.02,329.15c-237.07-68.08-186.54-22.99-259.34,55.2-14.62,15.71-33.77,22.16-55.82,25.76-91.76,14.96-228.77-49.52-354.35,6.96-86.77,39.03-198.55,54.56-302.97,47.22-87.43-5.85-168.18-18.53-216.23-64.75\" class=\"i\" data-v-08be2e9c></path><path d=\"M1309.91,324.47c-231.56-66.49-186.21-24.9-259.62,52.47-14.7,15.49-33.77,21.97-55.56,25.95-91.72,16.78-226.29-44.36-352.1,8.61-86.44,36.39-199.47,50.08-304.94,42.82-89.11-5.81-171.21-16.49-218.14-61.64\" class=\"i\" data-v-08be2e9c></path><path d=\"M1308.81,319.79c-226.04-64.91-185.88-26.81-259.9,49.74-14.77,15.27-33.77,21.78-55.29,26.15-91.7,18.63-223.77-39.2-349.85,10.25-86.08,33.76-200.38,45.61-306.91,38.41-90.8-5.78-174.23-14.46-220.05-58.54\" class=\"i\" data-v-08be2e9c></path><path d=\"M1307.7,315.1c-220.53-63.33-185.55-28.71-260.18,47.01-14.84,15.05-33.77,21.59-55.03,26.34-91.68,20.49-221.22-34.03-347.6,11.89-85.7,31.14-201.3,41.13-308.88,34.01-92.49-5.75-177.26-12.43-221.95-55.43\" class=\"i\" data-v-08be2e9c></path><path d=\"M1306.59,310.42c-215.02-61.74-185.21-30.62-260.46,44.28-14.91,14.84-33.78,21.41-54.77,26.54-91.68,22.37-218.64-28.84-345.35,13.53-85.3,28.53-202.2,36.43-310.86,29.61-94.17-5.91-180.28-10.4-223.86-52.32\" class=\"i\" data-v-08be2e9c></path><path d=\"M1305.48,305.74c-209.5-60.16-184.87-32.52-260.74,41.56-14.97,14.62-33.78,21.24-54.51,26.73-91.68,24.28-216.03-23.65-343.1,15.17-84.88,25.93-203.11,31.95-312.83,25.21-95.85-5.88-183.31-8.36-225.77-49.21\" class=\"i\" data-v-08be2e9c></path><path d=\"M1304.37,301.06c-203.99-58.58-184.53-34.42-261.03,38.83-15.04,14.4-33.79,21.08-54.24,26.92-91.69,26.21-213.39-18.44-340.85,16.81-84.43,23.35-204.03,27.47-314.8,20.81-97.54-5.86-186.33-6.33-227.68-46.11\" class=\"i\" data-v-08be2e9c></path><path d=\"M1303.26,296.38c-198.48-56.99-184.18-36.32-261.31,36.1-15.11,14.19-33.79,20.92-53.98,27.12-91.7,28.16-210.71-13.21-338.59,18.46-83.97,20.79-204.94,22.99-316.77,16.41-99.23-5.83-189.36-4.3-229.58-43\" class=\"i\" data-v-08be2e9c></path><path d=\"M1302.16,291.7c-192.96-55.41-183.84-38.22-261.59,33.37-15.18,13.97-33.8,20.77-53.72,27.31-91.72,30.14-208.01-7.96-336.34,20.1-83.49,18.25-205.86,18.51-318.74,12.01-100.92-5.81-192.38-2.27-231.49-39.89\" class=\"i\" data-v-08be2e9c></path><path d=\"M1301.05,287.02c-187.45-53.83-183.48-40.11-261.87,30.64-15.24,13.76-33.81,20.62-53.46,27.51-91.73,32.14-205.28-2.68-334.09,21.74-82.99,15.73-206.77,14.03-320.71,7.61-102.61-5.78-195.41-.23-233.4-36.79\" class=\"i\" data-v-08be2e9c></path><path d=\"M1299.94,282.34c-181.94-52.24-183.13-42.01-262.15,27.91-15.31,13.54-33.81,20.48-53.19,27.7-91.75,34.16-202.52,2.63-331.84,23.38-82.47,13.23-207.69,9.55-322.68,3.21-104.3-5.75-198.43,1.8-235.31-33.68\" class=\"i\" data-v-08be2e9c></path><path d=\"M1298.83,277.66c-176.42-50.66-182.77-43.9-262.43,25.18-15.37,13.33-33.82,20.35-52.93,27.89-91.76,36.21-199.74,7.97-329.59,25.02-81.94,10.76-208.6,5.08-324.65-1.19-105.98-5.72-201.46,3.83-237.21-30.57\" class=\"i\" data-v-08be2e9c></path><path d=\"M1297.72,272.98c-170.91-49.08-182.41-45.78-262.71,22.45-15.44,13.12-33.82,20.22-52.67,28.09-91.77,38.29-196.93,13.34-327.34,26.66-81.4,8.31-209.52,.6-326.63-5.59-107.67-5.69-204.48,5.86-239.12-27.46\" class=\"i\" data-v-08be2e9c></path><path d=\"M1296.61,268.3c-165.4-47.49-182.04-47.67-262.99,19.72-15.5,12.9-33.82,20.1-52.41,28.28-91.78,40.39-194.11,18.75-325.09,28.31-80.85,5.9-210.43-3.87-328.6-9.99-109.36-5.66-207.51,7.9-241.03-24.36\" class=\"i\" data-v-08be2e9c></path><path d=\"M1295.51,263.61c-159.88-45.91-181.67-49.55-263.27,16.99-15.56,12.69-33.82,19.99-52.15,28.48-91.77,42.52-191.28,24.21-322.84,29.95-80.28,3.5-211.35-8.35-330.57-14.39-111.05-5.63-210.53,9.93-242.94-21.25\" class=\"i\" data-v-08be2e9c></path><path d=\"M1294.4,258.93c-154.37-44.33-181.3-51.43-263.55,14.26-15.62,12.48-33.82,19.88-51.88,28.67-91.76,44.67-188.43,29.7-320.59,31.59-79.71,1.14-212.26-12.82-332.54-18.79-112.74-5.59-213.56,11.96-244.84-18.14\" class=\"i\" data-v-08be2e9c></path><path d=\"M1293.29,254.25c-148.86-42.75-180.93-53.31-263.83,11.54-15.69,12.27-33.81,19.77-51.62,28.87-91.73,46.85-185.58,35.24-318.34,33.23-79.14-1.2-213.18-17.29-334.51-23.19-114.43-5.56-216.58,13.99-246.75-15.03\" class=\"i\" data-v-08be2e9c></path><path d=\"M1292.18,249.57c-143.34-41.16-180.55-55.18-264.11,8.81-15.75,12.06-33.81,19.67-51.36,29.06-91.7,49.05-182.72,40.82-316.08,34.87-78.56-3.51-214.09-21.76-336.48-27.59-116.12-5.52-219.61,16.02-248.66-11.93\" class=\"i\" data-v-08be2e9c></path><path d=\"M1291.07,244.89c-137.83-39.58-180.17-57.05-264.4,6.08-15.81,11.85-33.8,19.57-51.1,29.25-91.65,51.27-179.86,46.45-313.83,36.51-77.99-5.79-215.01-26.24-338.45-31.99-117.8-5.49-222.63,18.06-250.57-8.82\" class=\"i\" data-v-08be2e9c></path><path d=\"M1289.97,240.21c-132.32-38-179.79-58.92-264.68,3.35-15.87,11.64-33.78,19.48-50.83,29.45-91.58,53.52-177.01,52.13-311.58,38.15-77.42-8.04-215.93-30.46-340.42-36.39-119.5-5.22-225.65,20.09-252.47-5.71\" class=\"i\" data-v-08be2e9c></path><path d=\"M1288.86,235.53c-126.8-36.41-179.41-60.78-264.96,.62-15.93,11.43-33.77,19.39-50.57,29.64-91.49,55.79-174.17,57.85-309.33,39.8-76.85-10.27-216.85-34.93-342.4-40.79-121.19-5.18-228.68,22.12-254.38-2.6\" class=\"i\" data-v-08be2e9c></path><path d=\"M1287.75,230.85c-121.29-34.83-179.02-62.64-265.24-2.11-15.99,11.22-33.75,19.31-50.31,29.84-91.39,58.09-171.35,63.62-307.08,41.44-76.29-12.47-217.76-39.41-344.37-45.19-122.88-5.15-231.7,24.15-256.29,.5\" class=\"i\" data-v-08be2e9c></path><path d=\"M1286.64,226.17c-115.78-33.25-178.63-64.49-265.52-4.84-16.05,11.02-33.73,19.23-50.05,30.03-91.27,60.4-168.54,69.44-304.83,43.08-75.74-14.65-218.68-43.88-346.34-49.59-124.57-5.12-234.73,26.19-258.19,3.61\" class=\"i\" data-v-08be2e9c></path><path d=\"M1285.53,221.49c-110.26-31.66-178.24-66.35-265.8-7.57-16.1,10.81-33.7,19.15-49.78,30.22-91.13,62.74-165.75,75.3-302.58,44.72-75.2-16.81-219.59-48.36-348.31-53.99-126.26-5.09-237.75,28.22-260.1,6.72\" class=\"i\" data-v-08be2e9c></path><path d=\"M1284.42,216.81c-104.75-30.08-177.84-68.19-266.08-10.3-16.16,10.6-33.67,19.08-49.52,30.42-90.96,65.1-162.98,81.2-300.33,46.36-74.68-18.94-220.5-52.83-350.28-58.39-127.94-5.05-240.78,30.25-262.01,9.83\" class=\"i\" data-v-08be2e9c></path><path d=\"M1283.32,212.12c-99.24-28.5-177.45-70.04-266.36-13.03-16.22,10.4-33.64,19-49.26,30.61-90.78,67.47-160.25,87.15-298.08,48-74.17-21.06-221.42-57.31-352.25-62.79-129.63-5.02-243.8,32.28-263.92,12.93\" class=\"i\" data-v-08be2e9c></path><path d=\"M1282.21,207.44c-93.72-26.91-177.05-71.88-266.64-15.76-16.28,10.2-33.61,18.93-49,30.81-90.57,69.86-157.54,93.13-295.83,49.65-73.67-23.17-222.33-61.78-354.22-67.19-131.32-4.99-246.83,34.32-265.82,16.04\" class=\"i\" data-v-08be2e9c></path><path d=\"M1281.1,202.76c-88.21-25.33-176.65-73.71-266.92-18.49-16.33,9.99-33.57,18.86-48.74,31-90.33,72.27-154.86,99.14-293.57,51.29-73.2-25.25-223.25-66.26-356.2-71.59-133.01-4.95-249.85,36.35-267.73,19.15\" class=\"i\" data-v-08be2e9c></path><path d=\"M1279.99,198.08c-82.7-23.75-176.25-75.54-267.2-21.21-16.39,9.79-33.52,18.8-48.47,31.19-90.07,74.7-152.22,105.19-291.32,52.93-72.74-27.33-224.16-70.73-358.17-75.99-134.7-4.92-252.88,38.38-269.64,22.26\" class=\"i\" data-v-08be2e9c></path><path d=\"M1278.88,193.4c-77.19-22.16-175.84-77.37-267.48-23.94-16.45,9.59-33.48,18.73-48.21,31.39-89.79,77.14-149.62,111.27-289.07,54.57-72.3-29.39-225.08-75.21-360.14-80.39-136.39-4.89-255.9,40.41-271.55,25.36\" class=\"i\" data-v-08be2e9c></path><path d=\"M1277.77,188.72c-71.67-20.58-175.44-79.19-267.77-26.67-16.5,9.39-33.43,18.66-47.95,31.58-89.48,79.59-147.05,117.37-286.82,56.21-71.87-31.45-225.99-79.68-362.11-84.79-138.07-4.85-258.93,42.45-273.45,28.47\" class=\"i\" data-v-08be2e9c></path><path d=\"M1276.67,184.04c-66.16-19-175.03-81-268.05-29.4-16.56,9.19-33.37,18.6-47.69,31.78-89.14,82.05-144.52,123.5-284.57,57.85-71.47-33.5-226.91-84.15-364.08-89.19-139.76-4.82-261.95,44.48-275.36,31.58\" class=\"i\" data-v-08be2e9c></path><path d=\"M1275.56,179.36c-60.65-17.41-174.62-82.81-268.33-32.13-16.62,8.99-33.31,18.54-47.42,31.97-88.78,84.53-142.03,129.64-282.32,59.5-71.09-35.54-227.82-88.63-366.05-93.59-141.45-4.79-264.98,46.51-277.27,34.69\" class=\"i\" data-v-08be2e9c></path><path d=\"M1274.45,174.68c-55.13-15.83-174.21-84.62-268.61-34.86-16.67,8.79-33.25,18.47-47.16,32.17-88.39,87.02-139.57,135.8-280.07,61.14-70.73-37.58-228.74-93.1-368.02-97.99-143.14-4.75-268,48.54-279.18,37.79\" class=\"i\" data-v-08be2e9c></path><path d=\"M1273.34,170c-49.62-14.25-173.8-86.42-268.89-37.59-16.73,8.59-33.19,18.41-46.9,32.36-87.97,89.51-137.15,141.97-277.82,62.78-70.38-39.62-229.65-97.58-369.99-102.39-144.83-4.72-271.03,50.58-281.08,40.9\" class=\"i\" data-v-08be2e9c></path><path d=\"M1272.23,165.32c-44.11-12.67-173.39-88.22-269.17-40.32-16.78,8.39-33.12,18.35-46.64,32.55-87.53,92.01-134.77,148.15-275.57,64.42-70.05-41.66-230.57-102.05-371.97-106.79-146.52-4.69-274.05,52.61-282.99,44.01\" class=\"i\" data-v-08be2e9c></path><path d=\"M1271.12,160.63c-38.59-11.08-172.98-90.01-269.45-43.05-16.84,8.2-33.05,18.28-46.38,32.75-87.07,94.52-132.42,154.34-273.32,66.06-69.75-43.7-231.48-106.53-373.94-111.19C159.84,100.55,30.97,159.85,23.15,152.32\" class=\"i\" data-v-08be2e9c></path><path d=\"M1270.02,155.95c-33.08-9.5-172.57-91.8-269.73-45.78-16.89,8-32.98,18.22-46.11,32.94-86.57,97.03-130.11,160.53-271.07,67.7-69.45-45.74-232.39-111-375.91-115.59C157.31,90.61,27.1,151.91,20.39,145.46\" class=\"i\" data-v-08be2e9c></path><path d=\"M1268.91,151.27c-27.57-7.92-172.16-93.58-270.01-48.51-16.95,7.81-32.9,18.15-45.85,33.14-86.06,99.55-127.83,166.73-268.81,69.34-69.18-47.79-233.31-115.48-377.88-119.99C154.77,80.67,23.22,143.97,17.64,138.59\" class=\"i\" data-v-08be2e9c></path><path d=\"M1267.8,146.59c-22.05-6.33-171.74-95.36-270.29-51.23-17,7.61-32.82,18.09-45.59,33.33-85.52,102.06-125.59,172.92-266.56,70.99-68.92-49.83-234.22-119.95-379.85-124.39C152.24,70.73,19.35,136.02,14.88,131.72\" class=\"i\" data-v-08be2e9c></path><path d=\"M1266.69,141.91c-16.54-4.75-171.33-97.13-270.57-53.96-17.06,7.42-32.73,18.02-45.33,33.52-84.95,104.59-123.37,179.11-264.31,72.63-68.68-51.89-235.14-124.42-381.82-128.79C149.7,60.79,15.48,128.08,12.13,124.86\" class=\"i\" data-v-08be2e9c></path><path d=\"M1265.58,137.23c-11.03-3.17-170.83-98.7-270.85-56.69-17.1,7.26-32.65,17.95-45.06,33.72-84.36,107.11-121.18,185.3-262.06,74.27-68.45-53.94-236.05-128.9-383.79-133.19C147.16,50.85,11.61,120.14,9.37,117.99\" class=\"i\" data-v-08be2e9c></path><path d=\"M1264.47,132.55c-5.51-1.58-170.46-100.56-271.14-59.42-17.16,7.05-32.56,17.88-44.8,33.91-83.75,109.63-119.01,191.48-259.81,75.91-68.24-56.01-236.97-133.37-385.76-137.59C144.63,40.9,7.74,112.2,6.62,111.12\" class=\"i\" data-v-08be2e9c></path><path d=\"M1263.37,127.87s-232.84-140.19-315.96-28.04c-83.12,112.15-116.88,197.65-257.56,77.55-68.03-58.08-237.88-137.85-387.74-141.99C142.09,30.96,3.86,104.26,3.86,104.26\" class=\"i\" data-v-08be2e9c></path></g></g><g id=\"c\" data-v-08be2e9c></g><g id=\"d\" data-v-08be2e9c></g><g id=\"e\" data-v-08be2e9c></g><g id=\"f\" data-v-08be2e9c></g><g id=\"g\" data-v-08be2e9c></g><g id=\"h\" data-v-08be2e9c></g></svg></div> "), _c(VContainer["a" /* default */], {
    class: {
      fixed: _vm.isDesktop
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c(VRow["a" /* default */], {
    class: [_vm.isMobile ? 'column-reverse' : 'row']
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "md": "6",
      "cols": "12"
    }
  }, [_c('u-animate-container', [_c('u-animate', {
    attrs: {
      "offset": 10,
      "name": "fadeInRightShort",
      "delay": "0.5s",
      "duration": "0.5s"
    }
  }, [_c('div', {
    staticClass: "desc"
  }, [_c('title-main', {
    attrs: {
      "align": _vm.isMobile ? 'center' : 'right'
    }
  }, [_c('span', [_vm._v("\n                      " + _vm._s(_vm.$t('saasLanding.feature_title1')) + "\n                      "), _c('strong', [_vm._v("\n                        " + _vm._s(_vm.$t('saasLanding.feature_titlestrong2')) + "\n                      ")])])]), _vm._v(" "), _c('h6', {
    staticClass: "use-text-subtitle2",
    class: [_vm.isMobile ? 'text-center' : 'text-right']
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('saasLanding.feature_desc2')) + "\n                  ")]), _vm._v(" "), _c('div', {
    class: [_vm.isMobile ? 'text-center' : 'text-right']
  }, [_c(VBtn["a" /* default */], {
    staticClass: "btn",
    attrs: {
      "color": "primary",
      "large": "",
      "href": "https://nft.ibizatoken.com/"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('saasLanding.see_detail3')) + "\n                    ")])], 1)], 1)])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "md": "6",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "illustration-right"
  }, [_vm.loaded ? _c('section', {
    staticClass: "parallax-wrap"
  }, [_c('parallax', {
    attrs: {
      "speed-factor": _vm.isMobile ? 0 : 0.15,
      "section-height": _vm.isMobile ? 0 : 300,
      "direction": "up"
    }
  }, [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "figure screen"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgAPI.saas[9],
      "alt": "illustration"
    }
  })])])])], 1) : _vm._e(), _vm._v(" "), _vm.loaded && !_vm.isMobile ? _c('section', {
    staticClass: "parallax-wrap"
  }, [_c('parallax', {
    attrs: {
      "speed-factor": _vm.isMobile ? 0 : 0.15,
      "section-height": 100,
      "direction": "down"
    }
  }, [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "graphic"
  })])])], 1) : _vm._e(), _vm._v(" "), _c('parallax-medium')], 1)])], 1)], 1)])], 2);
};

var Featurevue_type_template_id_08be2e9c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Feature/Feature.vue?vue&type=template&id=08be2e9c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature/Feature.vue?vue&type=script&lang=js&





/* harmony default export */ var Featurevue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a,
    ParallaxMedium: Medium,
    ParallaxLarge: Large,
    'title-main': Title["a" /* default */]
  },

  data() {
    return {
      tab: null,
      imgAPI: images_imgAPI,
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Feature/Feature.vue?vue&type=script&lang=js&
 /* harmony default export */ var Feature_Featurevue_type_script_lang_js_ = (Featurevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Feature/Feature.vue



function Feature_injectStyles (context) {
  
  var style0 = __webpack_require__(313)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Feature_component = Object(componentNormalizer["a" /* default */])(
  Feature_Featurevue_type_script_lang_js_,
  Featurevue_type_template_id_08be2e9c_scoped_true_render,
  Featurevue_type_template_id_08be2e9c_scoped_true_staticRenderFns,
  false,
  Feature_injectStyles,
  "08be2e9c",
  "4d7d8f46"
  
)

/* harmony default export */ var Feature = (Feature_component.exports);
// CONCATENATED MODULE: ./components/Feature/index.js

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=template&id=4cd44019&scoped=true&







var Testimonialsvue_type_template_id_4cd44019_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_c(VContainer["a" /* default */], {
    class: {
      fixed: _vm.isDesktop
    }
  }, [_c(VRow["a" /* default */], {
    staticClass: "spacing6",
    staticStyle: {
      "justify-content": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "px-6",
    attrs: {
      "md": "7",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "slider-wrap"
  }, [_c('hidden', {
    attrs: {
      "point": "smDown"
    }
  }, [_c('div', {
    staticClass: "decoration"
  }, [_c('svg', {
    attrs: {
      "version": "1.1"
    }
  }, [_c('defs', [_c('linearGradient', {
    attrs: {
      "x1": "78.2441494%",
      "y1": "65.8737759%",
      "x2": "10.5892887%",
      "y2": "33.8596367%",
      "id": "linearGradient-1"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": _vm.$vuetify.theme.themes.light.primarydark,
      "offset": "0%"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "stop-color": _vm.$vuetify.theme.themes.light.primary,
      "offset": "100%"
    }
  })], 1)], 1), _vm._v(" "), _c('g', [_c('rect', {
    attrs: {
      "width": "850",
      "height": "400",
      "viewBox": "0 0 954 618",
      "rx": "30",
      "ry": "30"
    }
  })])])])]), _vm._v(" "), _c('h4', {
    staticClass: "testi-title use-text-title2",
    class: [_vm.isMobile ? 'text-center' : 'text-left']
  }, [_vm._v("\n            " + _vm._s(_vm.$t('saasLanding.testi_title')) + "\n            "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("\n              " + _vm._s(_vm.$t('saasLanding.testi_titlestrong')) + "\n            ")])]), _vm._v(" "), _c(VIcon["a" /* default */], {
    staticClass: "icon"
  }, [_vm._v("mdi-format-quote-close")]), _vm._v(" "), _vm.loaded ? _c('div', {
    staticClass: "carousel"
  }, [_c('slick', {
    ref: "slider",
    attrs: {
      "options": _vm.slickOptions
    },
    on: {
      "afterChange": _vm.handleAfterChange
    }
  }, _vm._l(_vm.testiContent, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "inner"
    }, [_c('div', {
      staticClass: "profile"
    }, [_c(VAvatar["a" /* default */], {
      staticClass: "avatar"
    }, [_c('img', {
      attrs: {
        "src": item.avatar,
        "alt": item.name
      }
    })]), _vm._v(" "), _c('h6', {
      staticClass: "name"
    }, [_vm._v("\n                      " + _vm._s(item.name) + "\n                      "), _c('span', [_vm._v("\n                        " + _vm._s(item.title) + "\n                      ")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
      staticClass: "testi-btn",
      attrs: {
        "color": "primary",
        "large": "",
        "href": item.link
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.$t('saasLanding.see_detail2')) + "\n                    ")])], 1), _vm._v(" "), _c('p', {
      staticClass: "use-text-paragraph"
    }, [_vm._v("\n                    " + _vm._s(item.text) + "\n                  ")])])]);
  }), 0)], 1) : _vm._e()], 1)])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "spacing6",
    staticStyle: {
      "justify-content": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "use-hidden-sm-down px-6",
    attrs: {
      "md": "10",
      "cols": "12"
    }
  }, [_c('hidden', {
    attrs: {
      "point": "smDown"
    }
  }, [_c('div', {
    staticClass: "logo-wrap"
  }, _vm._l(_vm.testiContent, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "figure-btn"
    }, [_c(VBtn["a" /* default */], {
      class: {
        active: _vm.currentSlide === index
      },
      attrs: {
        "text": ""
      },
      on: {
        "click": function ($event) {
          return _vm.gotoSlide(index);
        }
      }
    }, [_c('img', {
      key: index,
      attrs: {
        "src": item.logo,
        "alt": 'logo' + index
      }
    })])], 1);
  }), 0)])], 1)], 1)], 1)], 1);
};

var Testimonialsvue_type_template_id_4cd44019_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=template&id=4cd44019&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colors.js
var colors = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&




const palette = {
  deepBlue: {
    primary: '#080A3E',
    // primary main
    primarylight: colors["a" /* default */].indigo.lighten5,
    // primary light
    primarydark: colors["a" /* default */].indigo.darken3,
    // primary dark
    secondary: '#001C7D',
    // secondary main
    secondarylight: colors["a" /* default */].lightBlue.lighten5,
    // secondary light
    secondarydark: '#11309a',
    // secondary dark
    anchor: colors["a" /* default */].indigo.base // link

  }
};
const theme = { ...palette.deepBlue
};
const testiData = [{
  text: 'Ibiza Token brings to the island the first NFT platform aimed to democratize art through a decentralized system.',
  name: 'Diario de Ibiza',
  logo: '/images/logos/diario-de-ibiza-logo.png',
  link: 'https://www.diariodeibiza.es/buscador?text=ibiza+token'
}, {
  text: 'In Spain, Ibiza Token announced the launch of an NFT platform with the aim of supporting content creators and businesses in Ibiza.',
  name: 'Cointelegraph',
  logo: '/images/logos/cointelegraph-logo.png'
}, {
  text: 'The conference Ibiza NXT lands in Ibiza to introduce blockchain technology.',
  name: 'Periodico de Ibiza',
  //  title: 'Graphic Designer',
  logo: '/images/logos/periodico-de-ibiza-logo.png',
  link: 'https://www.periodicodeibiza.es/search.html?what=noticias&terms=ibiza%20token&page=1'
}, {
  text: 'Las Dalias presents his first NFT collection “El Viaje/The trip “which will be available on the Ibiza Token Marketplace.',
  name: 'Noudiari',
  //title: 'CEO Software House',
  logo: '/images/logos/noudiari-logo.png',
  link: 'https://www.noudiari.es/?s=ibiza+token'
}, {
  text: 'As Spain is one of the countries in Europe that has made the most progress in blockchain technology, Ibiza wants to be a benchmark with Ibiza Token" whose objective is above all to make the local art of the island visible.',
  name: 'Dirigentes Digital',
  //  title: 'Senior Graphic Designer',
  logo: '/images/logos/dirigentes-logo.png',
  link: 'https://dirigentesdigital.com/tecnologia/nft-solamente-una-moda-de-gente-con-demasiado-dinero'
}, {
  text: 'Ibiza Token presents itselfas a space where artists directly connect with buyers through NFTs.',
  name: 'Cadena Ser',
  //  title: 'Senior Graphic Designer',
  logo: '/images/logos/ser.png',
  link: 'https://cadenaser.com/audio/1636634889_242783/'
}];
/* harmony default export */ var Testimonialsvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 227, 7))
  },

  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiData,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        pauseOnHover: false
      }
    };
  },

  mounted() {
    this.loaded = true;
    this.$vuetify.theme.themes = {
      light: { ...theme
      },
      dark: { ...theme
      }
    };
  },

  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide;
    },

    gotoSlide(index) {
      this.$refs.slider.goTo(index);
    }

  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var Testimonials_Testimonialsvue_type_script_lang_js_ = (Testimonialsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue



function Testimonials_injectStyles (context) {
  
  var style0 = __webpack_require__(315)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Testimonials_component = Object(componentNormalizer["a" /* default */])(
  Testimonials_Testimonialsvue_type_script_lang_js_,
  Testimonialsvue_type_template_id_4cd44019_scoped_true_render,
  Testimonialsvue_type_template_id_4cd44019_scoped_true_staticRenderFns,
  false,
  Testimonials_injectStyles,
  "4cd44019",
  "4a888aef"
  
)

/* harmony default export */ var Testimonials = (Testimonials_component.exports);
// CONCATENATED MODULE: ./components/Testimonials/index.js

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/PricingPlan/PricingPlan.vue?vue&type=template&id=c97a74ea&scoped=true&


var PricingPlanvue_type_template_id_c97a74ea_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_vm._ssrNode("<div class=\"decoration\" data-v-c97a74ea><svg fill=\"#cccccc\" data-v-c97a74ea><use xlink:href=\"/images/saas/deco-med-bg.svg#main\" data-v-c97a74ea></use></svg></div> "), _c(VContainer["a" /* default */], {
    class: {
      fixed: _vm.isDesktop
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('title-main', {
    attrs: {
      "align": "center"
    }
  }, [_c('strong', [_vm._v("\n          " + _vm._s(_vm.$t('saasLanding.pricing_title')) + "\n        ")])])], 1), _vm._v(" "), _c('p', {
    staticClass: "subtitle use-text-subtitle2 text-center"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('saasLanding.pricing_subtitle')) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "pricing-wrap"
  }, [_c('u-animate-container', [_c('u-animate', {
    staticClass: "item",
    attrs: {
      "offset": -10,
      "name": "fadeInUpShort",
      "delay": "0.2s",
      "duration": "0.4s"
    }
  }, [_c('pricing-card', {
    attrs: {
      "price": 0,
      "feature-list": _vm.feature.basic,
      "title": "Basic",
      "desc": "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
      "type": "basic"
    }
  })], 1), _vm._v(" "), _c('u-animate', {
    staticClass: "item",
    attrs: {
      "offset": -10,
      "name": "fadeInUpShort",
      "delay": "0.4s",
      "duration": "0.4s"
    }
  }, [_c('pricing-card', {
    attrs: {
      "price": 24,
      "feature-list": _vm.feature.best,
      "title": "Best Value",
      "desc": "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
      "type": "value"
    }
  })], 1), _vm._v(" "), _c('u-animate', {
    staticClass: "item",
    attrs: {
      "offset": -10,
      "name": "fadeInUpShort",
      "delay": "0.6s",
      "duration": "0.4s"
    }
  }, [_c('pricing-card', {
    attrs: {
      "price": 54,
      "feature-list": _vm.feature.pro,
      "title": "Pro",
      "desc": "Interdum et malesuada fames ac ante ipsum primis in faucibus. "
    }
  })], 1), _vm._v(" "), _c('u-animate', {
    staticClass: "item",
    attrs: {
      "offset": -10,
      "name": "fadeInUpShort",
      "delay": "0.8s",
      "duration": "0.4s"
    }
  }, [_c('pricing-card', {
    attrs: {
      "price": 99,
      "feature-list": _vm.feature.enterprise,
      "title": "Enterprise",
      "desc": " Interdum et malesuada fames ac ante ipsum primis in faucibus. "
    }
  })], 1)], 1)], 1)])], 2);
};

var PricingPlanvue_type_template_id_c97a74ea_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.vue?vue&type=template&id=c97a74ea&scoped=true&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Pricing.vue?vue&type=template&id=e2151f4a&scoped=true&



var Pricingvue_type_template_id_e2151f4a_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(VCard["a" /* default */], {
    staticClass: "pricing",
    class: _vm.type
  }, [_c('div', {
    staticClass: "title-card"
  }, [_c('p', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('h4', {
    staticClass: "display-1"
  }, [_vm.price > 0 ? _c('span', [_vm._v("$")]) : _vm._e(), _vm._v(_vm._s(_vm.calculatePrice) + "\n    ")])]), _vm._v(" "), _c('ul', _vm._l(_vm.featureList, function (item, index) {
    return _c('li', {
      key: index
    }, [_vm._v("\n      " + _vm._s(item) + "\n    ")]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "btn-area"
  }, [_c('p', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.desc))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "button",
    attrs: {
      "color": _vm.type === 'basic' ? 'secondary' : 'primary',
      "large": ""
    }
  }, [_vm._v("\n      Choose Plan\n    ")])], 1)]);
};

var Pricingvue_type_template_id_e2151f4a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Cards/Pricing.vue?vue&type=template&id=e2151f4a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Pricing.vue?vue&type=script&lang=js&
/* harmony default export */ var Pricingvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    featureList: {
      type: Array,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    calculatePrice() {
      return this.price > 0 ? this.price : 'Free';
    }

  }
});
// CONCATENATED MODULE: ./components/Cards/Pricing.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Pricingvue_type_script_lang_js_ = (Pricingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/Pricing.vue



function Pricing_injectStyles (context) {
  
  var style0 = __webpack_require__(317)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Pricing_component = Object(componentNormalizer["a" /* default */])(
  Cards_Pricingvue_type_script_lang_js_,
  Pricingvue_type_template_id_e2151f4a_scoped_true_render,
  Pricingvue_type_template_id_e2151f4a_scoped_true_staticRenderFns,
  false,
  Pricing_injectStyles,
  "e2151f4a",
  "4236e81a"
  
)

/* harmony default export */ var Pricing = (Pricing_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PricingPlan/PricingPlan.vue?vue&type=script&lang=js&


const featureList = {
  basic: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Quisque ut metus'],
  best: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Quisque ut metus', 'Vivamus sit amet', 'Cras convallis lacus orci'],
  pro: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Nulla lobortis nunc', 'Vitae scelerisque', 'Duis sed augue'],
  enterprise: ['Nam sollicitudin dignissim', 'Pellentesque ac bibendum ', 'Vestibulum consequat', 'Donec commodo', 'Duis tristique metus']
};
/* harmony default export */ var PricingPlanvue_type_script_lang_js_ = ({
  components: {
    'title-main': Title["a" /* default */],
    PricingCard: Pricing
  },

  data() {
    return {
      feature: featureList
    };
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.vue?vue&type=script&lang=js&
 /* harmony default export */ var PricingPlan_PricingPlanvue_type_script_lang_js_ = (PricingPlanvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.vue



function PricingPlan_injectStyles (context) {
  
  var style0 = __webpack_require__(319)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PricingPlan_component = Object(componentNormalizer["a" /* default */])(
  PricingPlan_PricingPlanvue_type_script_lang_js_,
  PricingPlanvue_type_template_id_c97a74ea_scoped_true_render,
  PricingPlanvue_type_template_id_c97a74ea_scoped_true_staticRenderFns,
  false,
  PricingPlan_injectStyles,
  "c97a74ea",
  "6d28d08f"
  
)

/* harmony default export */ var PricingPlan = (PricingPlan_component.exports);
// CONCATENATED MODULE: ./components/PricingPlan/index.js

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(222);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Faq/Faq.vue?vue&type=template&id=61e032e8&scoped=true&








var Faqvue_type_template_id_61e032e8_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_c(VContainer["a" /* default */], {
    staticClass: "fixed-width"
  }, [_c(VRow["a" /* default */], {
    staticClass: "spacing6"
  }, [_c(VCol["a" /* default */], {
    staticClass: "pa-6",
    attrs: {
      "md": "6"
    }
  }, [_c('hidden', {
    attrs: {
      "point": "smUp"
    }
  }, [_c('title-main', {
    attrs: {
      "align": _vm.isMobile ? 'center' : 'left'
    }
  }, [_c('strong', [_vm._v("\n            FAQ\n          ")])]), _vm._v(" "), _c('p', {
    staticClass: "text use-text-subtitle2",
    class: [_vm.isMobile ? 'text-center' : 'text-left']
  }, [_vm._v("\n          " + _vm._s(_vm.$t('saasLanding.faq_subtitle')) + "\n        ")])], 1), _vm._v(" "), _c('hidden', {
    attrs: {
      "point": "smDown"
    }
  }, [_c('div', {
    staticClass: "illustration"
  }, [_c('parallax-medium'), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/images/saas/ibz-faq.png",
      "alt": "illustration"
    }
  })], 1)])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "pa-6",
    attrs: {
      "md": "6",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "accordion"
  }, [_c(VExpansionPanels["a" /* default */], {
    attrs: {
      "active-class": "expanded"
    },
    model: {
      value: _vm.panel,
      callback: function ($$v) {
        _vm.panel = $$v;
      },
      expression: "panel"
    }
  }, [_c(VExpansionPanel["a" /* default */], {
    staticClass: "paper"
  }, [_c(VExpansionPanelHeader["a" /* default */], {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_question')) + "\n                ")])]), _vm._v(" "), _c(VExpansionPanelContent["a" /* default */], {
    staticClass: "detail"
  }, [_c('p', [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_answer')) + "\n                ")])])], 1), _vm._v(" "), _c(VExpansionPanel["a" /* default */], {
    staticClass: "paper"
  }, [_c(VExpansionPanelHeader["a" /* default */], {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_question1')) + "\n                ")])]), _vm._v(" "), _c(VExpansionPanelContent["a" /* default */], {
    staticClass: "detail"
  }, [_c('p', [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_answer1')) + "\n                ")])])], 1), _vm._v(" "), _c(VExpansionPanel["a" /* default */], {
    staticClass: "paper"
  }, [_c(VExpansionPanelHeader["a" /* default */], {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_question2')) + "\n                ")])]), _vm._v(" "), _c(VExpansionPanelContent["a" /* default */], {
    staticClass: "detail"
  }, [_c('p', [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_answer2')) + "\n                ")])])], 1), _vm._v(" "), _c(VExpansionPanel["a" /* default */], {
    staticClass: "paper"
  }, [_c(VExpansionPanelHeader["a" /* default */], {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_question3')) + "\n                ")])]), _vm._v(" "), _c(VExpansionPanelContent["a" /* default */], {
    staticClass: "detail"
  }, [_c('p', [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_answer3')) + "\n                ")])])], 1), _vm._v(" "), _c(VExpansionPanel["a" /* default */], {
    staticClass: "paper"
  }, [_c(VExpansionPanelHeader["a" /* default */], {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_question4')) + "\n                ")])]), _vm._v(" "), _c(VExpansionPanelContent["a" /* default */], {
    staticClass: "detail"
  }, [_c('p', [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.faq_answer4')) + "\n                ")])])], 1)], 1)], 1)])], 1)], 1)], 1);
};

var Faqvue_type_template_id_61e032e8_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Faq/Faq.vue?vue&type=template&id=61e032e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Faq/Faq.vue?vue&type=script&lang=js&



/* harmony default export */ var Faqvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    ParallaxMedium: Medium,
    'title-main': Title["a" /* default */]
  },

  data() {
    return {
      panel: 0 //faqData: faqData

    };
  },

  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Faq/Faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Faq_Faqvue_type_script_lang_js_ = (Faqvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Faq/Faq.vue



function Faq_injectStyles (context) {
  
  var style0 = __webpack_require__(321)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Faq_component = Object(componentNormalizer["a" /* default */])(
  Faq_Faqvue_type_script_lang_js_,
  Faqvue_type_template_id_61e032e8_scoped_true_render,
  Faqvue_type_template_id_61e032e8_scoped_true_staticRenderFns,
  false,
  Faq_injectStyles,
  "61e032e8",
  "773c6c1d"
  
)

/* harmony default export */ var Faq = (Faq_component.exports);
// CONCATENATED MODULE: ./components/Faq/index.js

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsEvent/NewsEvent.vue?vue&type=template&id=3be1b36c&scoped=true&


var NewsEventvue_type_template_id_3be1b36c_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_c(VContainer["a" /* default */], [_c('div', {
    staticClass: "desc"
  }, [_c('title-main', {
    attrs: {
      "align": "center"
    }
  }, [_c('span', [_c('strong', [_vm._v("\n          " + _vm._s(_vm.$t('saasLanding.feature_title3')) + "\n        ")])])]), _vm._v(" "), _c('h4', {
    staticClass: "use-text-subtitle2",
    attrs: {
      "align": "center"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('saasLanding.feature_desc3')) + "\n          ")])], 1)]), _vm._ssrNode(" "), _vm.loaded ? _vm._ssrNode("<div class=\"carousel\" data-v-3be1b36c>", "</div>", [_c('slick', {
    attrs: {
      "options": _vm.settings
    }
  }, _vm._l(_vm.articles, function (item) {
    return _c('div', {
      key: item.slug
    }, [_c('div', {
      staticClass: "item"
    }, [_c('news-card', {
      attrs: {
        "img": item.coverImage,
        "text": item.title,
        "type": item.brief,
        "slug": item.slug
      }
    })], 1)]);
  }), 0)], 1) : _vm._e()], 2);
};

var NewsEventvue_type_template_id_3be1b36c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue?vue&type=template&id=3be1b36c&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(208);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/News.vue?vue&type=template&id=189c1842&scoped=true&


var Newsvue_type_template_id_189c1842_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "news"
  }, [_vm._ssrNode("<figure data-v-189c1842><img" + _vm._ssrAttr("src", _vm.img) + " alt=\"thumb\" data-v-189c1842></figure> "), _vm._ssrNode("<div class=\"desc\" data-v-189c1842>", "</div>", [_vm._ssrNode("<div class=\"text\" data-v-189c1842><p class=\"type caption\" data-v-189c1842>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t(_vm.text)) + "\n      ") + "</p> <p class=\"blog_details\" data-v-189c1842>" + _vm._ssrEscape(_vm._s(_vm.type)) + "</p></div> "), _c(VBtn["a" /* default */], {
    staticClass: "blog-readmore primary",
    attrs: {
      "small": "",
      "color": "primary",
      "href": 'https://blog.ibizatoken.com/' + _vm.slug,
      "target": "_blank"
    }
  }, [_vm._v("\n\n      " + _vm._s(_vm.$t('saasLanding.news_readmore')) + "\n\n    ")])], 2)], 2);
};

var Newsvue_type_template_id_189c1842_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Cards/News.vue?vue&type=template&id=189c1842&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/News.vue?vue&type=script&lang=js&
/* harmony default export */ var Newsvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/News.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Newsvue_type_script_lang_js_ = (Newsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/News.vue



function News_injectStyles (context) {
  
  var style0 = __webpack_require__(323)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var News_component = Object(componentNormalizer["a" /* default */])(
  Cards_Newsvue_type_script_lang_js_,
  Newsvue_type_template_id_189c1842_scoped_true_render,
  Newsvue_type_template_id_189c1842_scoped_true_staticRenderFns,
  false,
  News_injectStyles,
  "189c1842",
  "06d666a2"
  
)

/* harmony default export */ var News = (News_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsEvent/NewsEvent.vue?vue&type=script&lang=js&




/* harmony default export */ var NewsEventvue_type_script_lang_js_ = ({
  components: {
    'title-main': Title["a" /* default */],
    NewsCard: News,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 227, 7))
  },

  data() {
    return {
      loaded: false,
      articles: [],
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },

  mounted() {
    this.loaded = true;
    this.fetchArticles();
  },

  methods: {
    async fetchArticles() {
      const app = this;
      const query = `
      query GetUserArticles($page: Int!) {
          user(username: "ibizatoken") {
              publication {
                  posts(page: $page) {
                      title
                      brief
                      slug
                      coverImage
                  }
              }
          }
      }
  `;
      const variables = {
        page: 0
      };
      const articles = await external_axios_default.a.post('https://api.hashnode.com/', {
        query,
        variables
      });
      console.log('articles.data', articles.data);
      app.articles = articles.data.data.user.publication.posts;
      console.log('This is all articles', app.articles);
    }

  }
});
// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewsEvent_NewsEventvue_type_script_lang_js_ = (NewsEventvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue



function NewsEvent_injectStyles (context) {
  
  var style0 = __webpack_require__(325)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var NewsEvent_component = Object(componentNormalizer["a" /* default */])(
  NewsEvent_NewsEventvue_type_script_lang_js_,
  NewsEventvue_type_template_id_3be1b36c_scoped_true_render,
  NewsEventvue_type_template_id_3be1b36c_scoped_true_staticRenderFns,
  false,
  NewsEvent_injectStyles,
  "3be1b36c",
  "f14e6502"
  
)

/* harmony default export */ var NewsEvent = (NewsEvent_component.exports);
// CONCATENATED MODULE: ./components/NewsEvent/index.js

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWithDeco.vue?vue&type=template&id=5dbfadaa&scoped=true&




var FooterWithDecovue_type_template_id_5dbfadaa_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "footer-deco"
  }, [_vm._ssrNode("<div class=\"decoration\" data-v-5dbfadaa><svg class=\"left-deco\" data-v-5dbfadaa><use xlink:href data-v-5dbfadaa></use></svg> <svg class=\"right-deco\" data-v-5dbfadaa><use xlink:href data-v-5dbfadaa></use></svg></div> "), _vm._ssrNode("<div class=\"action\" data-v-5dbfadaa>", "</div>", [_vm._ssrNode("<h4 class=\"use-text-title2\" data-v-5dbfadaa>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('saasLanding.footer_waiting')) + "\n    ") + "</h4> "), _c(VContainer["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "market-buttons"
  }, _vm._l(_vm.logos, function (item) {
    return _c('div', {
      key: item,
      staticClass: "item"
    }, [_c(VBtn["a" /* default */], {
      staticClass: "market-coin",
      attrs: {
        "color": "secondary",
        "large": ""
      }
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "use-text-paragraph"
    }, [_vm._v("\n            " + _vm._s(item.text) + " ")])])])], 1);
  }), 0)], 1)], 2), _vm._ssrNode(" "), _c('footer-main')], 2);
};

var FooterWithDecovue_type_template_id_5dbfadaa_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue?vue&type=template&id=5dbfadaa&scoped=true&

// EXTERNAL MODULE: ./components/Footer/Footer.vue + 4 modules
var Footer = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWithDeco.vue?vue&type=script&lang=js&


/* harmony default export */ var FooterWithDecovue_type_script_lang_js_ = ({
  components: {
    'footer-main': Footer["a" /* default */]
  },

  data() {
    return {
      mounted() {
        this.loaded = true;
      },

      logos: [{
        url: 'https://www.coingecko.com/en/coins/ibiza-token',
        img: '/images/logos/coingecko-logo.png',
        text: 'Coingecko'
      }, {
        url: 'https://coinmarketcap.com/currencies/ibiza-token/',
        img: '/images/logos/coinmarket-logo.png',
        text: 'CoinMarketCap'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_FooterWithDecovue_type_script_lang_js_ = (FooterWithDecovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue



function FooterWithDeco_injectStyles (context) {
  
  var style0 = __webpack_require__(327)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FooterWithDeco_component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterWithDecovue_type_script_lang_js_,
  FooterWithDecovue_type_template_id_5dbfadaa_scoped_true_render,
  FooterWithDecovue_type_template_id_5dbfadaa_scoped_true_staticRenderFns,
  false,
  FooterWithDeco_injectStyles,
  "5dbfadaa",
  "7d5a8f82"
  
)

/* harmony default export */ var FooterWithDeco = (FooterWithDeco_component.exports);
// EXTERNAL MODULE: ./components/Notification/index.js + 5 modules
var Notification = __webpack_require__(252);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Blog.vue?vue&type=template&id=802c99e4&scoped=true&




var Blogvue_type_template_id_802c99e4_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(VContainer["a" /* default */], [_c('scroll-wrap', {
    attrs: {
      "target": "blog-list"
    }
  }, [_c('h3', {
    staticClass: "display-2 text-center mb-4"
  }, [_vm._v("\n      Blog and News\n    ")]), _vm._v(" "), _c('p', {
    staticClass: "body-1 text-center mb-4"
  }, [_vm._v("\n      Curabitur egestas consequat lorem, vel fermentum augue porta id.\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "blog-wrap",
    attrs: {
      "id": "blog-list"
    }
  }, [_c(VRow["a" /* default */], {
    attrs: {
      "justify": "center"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "md": "9",
      "cols": "12"
    }
  }, [_c(VRow["a" /* default */], _vm._l(_vm.blogData, function (item, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      staticClass: "px-4",
      attrs: {
        "md": "4",
        "cols": "12"
      }
    }, [_c('blog-card', {
      attrs: {
        "title": item.title,
        "desc": item.desc,
        "img": "https://hashnode.com/ibizatoken"
      }
    })], 1);
  }), 1)], 1)], 1)], 1)])], 1);
};

var Blogvue_type_template_id_802c99e4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Blog/Blog.vue?vue&type=template&id=802c99e4&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/BlogCard.vue?vue&type=template&id=2ffb0764&scoped=true&







var BlogCardvue_type_template_id_2ffb0764_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(VCard["a" /* default */], {
    staticClass: "mx-auto",
    attrs: {
      "max-width": "400"
    }
  }, [_c(VImg["a" /* default */], {
    staticClass: "white--text",
    attrs: {
      "src": _vm.img,
      "height": "200px"
    }
  }), _vm._v(" "), _c(components_VCard["c" /* VCardTitle */], [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c(components_VCard["b" /* VCardText */], [_c('span', {
    staticClass: "text--primary"
  }, [_c('span', [_vm._v(_vm._s(_vm.desc))])])]), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VBtn["a" /* default */], {
    staticClass: "read-more-btn",
    attrs: {
      "text": "",
      "color": "contrast"
    }
  }, [_vm._v("\n      Read more\n    ")])], 1)], 1);
};

var BlogCardvue_type_template_id_2ffb0764_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Cards/BlogCard.vue?vue&type=template&id=2ffb0764&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/BlogCard.vue?vue&type=script&lang=js&
/* harmony default export */ var BlogCardvue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/BlogCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_BlogCardvue_type_script_lang_js_ = (BlogCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/BlogCard.vue



function BlogCard_injectStyles (context) {
  
  var style0 = __webpack_require__(329)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BlogCard_component = Object(componentNormalizer["a" /* default */])(
  Cards_BlogCardvue_type_script_lang_js_,
  BlogCardvue_type_template_id_2ffb0764_scoped_true_render,
  BlogCardvue_type_template_id_2ffb0764_scoped_true_staticRenderFns,
  false,
  BlogCard_injectStyles,
  "2ffb0764",
  "20dd262e"
  
)

/* harmony default export */ var BlogCard = (BlogCard_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/ScrollWrap/ScrollWrap.vue?vue&type=template&id=edfbf9c0&


var ScrollWrapvue_type_template_id_edfbf9c0_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.loaded ? _c('div', {
    directives: [{
      def: directives_scroll["b" /* default */],
      name: "scroll",
      rawName: "v-scroll",
      value: _vm.handleScroll,
      expression: "handleScroll"
    }],
    staticClass: "scroll-wrap",
    class: {
      'active': _vm.active,
      'pending': !_vm.active
    }
  }, [_vm._t("default")], 2) : _vm._e();
};

var ScrollWrapvue_type_template_id_edfbf9c0_staticRenderFns = [];

// CONCATENATED MODULE: ./components/ScrollWrap/ScrollWrap.vue?vue&type=template&id=edfbf9c0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ScrollWrap/ScrollWrap.vue?vue&type=script&lang=js&
/* harmony default export */ var ScrollWrapvue_type_script_lang_js_ = ({
  props: {
    target: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      active: false,
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    offsetTop: function () {
      const elm = document.getElementById(this.target);
      return elm.getBoundingClientRect().y;
    }
  },
  methods: {
    handleScroll: function () {
      const top = this.offsetTop - window.innerHeight;

      if (window.scrollY > top) {
        return this.active = true;
      }

      return false;
    }
  }
});
// CONCATENATED MODULE: ./components/ScrollWrap/ScrollWrap.vue?vue&type=script&lang=js&
 /* harmony default export */ var ScrollWrap_ScrollWrapvue_type_script_lang_js_ = (ScrollWrapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/ScrollWrap/ScrollWrap.vue





/* normalize component */

var ScrollWrap_component = Object(componentNormalizer["a" /* default */])(
  ScrollWrap_ScrollWrapvue_type_script_lang_js_,
  ScrollWrapvue_type_template_id_edfbf9c0_render,
  ScrollWrapvue_type_template_id_edfbf9c0_staticRenderFns,
  false,
  null,
  null,
  "3a92d9cf"
  
)

/* harmony default export */ var ScrollWrap = (ScrollWrap_component.exports);
// CONCATENATED MODULE: ./components/ScrollWrap/index.js

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Blog.vue?vue&type=script&lang=js&


/* harmony default export */ var Blogvue_type_script_lang_js_ = ({
  components: {
    BlogCard: BlogCard,
    ScrollWrap: ScrollWrap
  },

  data() {
    return {
      blogData: [{
        title: 'Heading',
        desc: 'This is a media card. You can use this section to describe the content.'
      }, {
        title: 'Heading',
        desc: 'This is a media card. You can use this section to describe the content.'
      }, {
        title: 'Heading',
        desc: 'This is a media card. You can use this section to describe the content.'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Blog/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blog_Blogvue_type_script_lang_js_ = (Blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Blog/Blog.vue



function Blog_injectStyles (context) {
  
  var style0 = __webpack_require__(331)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Blog_component = Object(componentNormalizer["a" /* default */])(
  Blog_Blogvue_type_script_lang_js_,
  Blogvue_type_template_id_802c99e4_scoped_true_render,
  Blogvue_type_template_id_802c99e4_scoped_true_staticRenderFns,
  false,
  Blog_injectStyles,
  "802c99e4",
  "0c856aa2"
  
)

/* harmony default export */ var Blog = (Blog_component.exports);
// CONCATENATED MODULE: ./components/Blog/index.js

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature4/Feature4.vue?vue&type=template&id=f922a3e4&scoped=true&





var Feature4vue_type_template_id_f922a3e4_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_vm._ssrNode("<div class=\"decoration\" data-v-f922a3e4><svg class=\"wave\" data-v-f922a3e4><use xlink:href=\"/images/saas/deco-bg.svg#main\" data-v-f922a3e4></use></svg></div> "), _c(VContainer["a" /* default */], {
    class: {
      fixed: _vm.isDesktop
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "md": "6",
      "cols": "12"
    }
  }, [_c('u-animate-container', [_c('u-animate', {
    attrs: {
      "offset": 10,
      "name": "fadeInRightShort",
      "delay": "0.5s",
      "duration": "0.5s"
    }
  }, [_c('div', {
    staticClass: "desc"
  }, [_c('title-main', {
    attrs: {
      "align": _vm.isMobile ? 'center' : 'right'
    }
  }, [_c('span', [_vm._v("\n                    " + _vm._s(_vm.$t('saasLanding.feature_title1')) + "\n                    "), _c('strong', [_vm._v("\n                      " + _vm._s(_vm.$t('saasLanding.feature_titlestrong7')) + "\n                    ")])])]), _vm._v(" "), _c('h6', {
    staticClass: "use-text-subtitle2",
    class: [_vm.isMobile ? 'text-center' : 'text-right']
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('saasLanding.feature_desc7')) + "\n                ")]), _vm._v(" "), _c('div', {
    class: [_vm.isMobile ? 'text-center' : 'text-right']
  }, [_c(VBtn["a" /* default */], {
    staticClass: "btn",
    attrs: {
      "color": "primary",
      "large": "",
      "href": "https://nxt.ibizatoken.com/"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('saasLanding.see_detail2')) + "\n                  ")])], 1)], 1)])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "md": "6",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "illustration-right"
  }, [_vm.loaded ? _c('section', {
    staticClass: "parallax-wrap"
  }, [_c('parallax', {
    attrs: {
      "speed-factor": _vm.isMobile ? 0 : 0.15,
      "section-height": _vm.isMobile ? 0 : 200,
      "direction": "up"
    }
  }, [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "figure screen"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgAPI.saas[10],
      "alt": "illustration"
    }
  })])])])], 1) : _vm._e(), _vm._v(" "), _vm.loaded && !_vm.isMobile ? _c('section', {
    staticClass: "parallax-wrap"
  }, [_c('parallax', {
    attrs: {
      "speed-factor": _vm.isMobile ? 0 : 0.15,
      "section-height": 100,
      "direction": "down"
    }
  }, [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "graphic"
  })])])], 1) : _vm._e(), _vm._v(" "), _c('parallax-medium')], 1)])], 1)], 1)])], 2);
};

var Feature4vue_type_template_id_f922a3e4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Feature4/Feature4.vue?vue&type=template&id=f922a3e4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature4/Feature4.vue?vue&type=script&lang=js&





/* harmony default export */ var Feature4vue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a,
    ParallaxMedium: Medium,
    ParallaxLarge: Large,
    'title-main': Title["a" /* default */]
  },

  data() {
    return {
      tab: null,
      imgAPI: images_imgAPI,
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Feature4/Feature4.vue?vue&type=script&lang=js&
 /* harmony default export */ var Feature4_Feature4vue_type_script_lang_js_ = (Feature4vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Feature4/Feature4.vue



function Feature4_injectStyles (context) {
  
  var style0 = __webpack_require__(333)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Feature4_component = Object(componentNormalizer["a" /* default */])(
  Feature4_Feature4vue_type_script_lang_js_,
  Feature4vue_type_template_id_f922a3e4_scoped_true_render,
  Feature4vue_type_template_id_f922a3e4_scoped_true_staticRenderFns,
  false,
  Feature4_injectStyles,
  "f922a3e4",
  "7a28ebaf"
  
)

/* harmony default export */ var Feature4 = (Feature4_component.exports);
// CONCATENATED MODULE: ./components/Feature4/index.js

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Benefit/Benefit.vue?vue&type=template&id=186502de&scoped=true&




var Benefitvue_type_template_id_186502de_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_vm._ssrNode("<div class=\"decoration\" data-v-186502de><svg class=\"wave\" data-v-186502de><use xlink:href=\"/images/saas/deco-bg.svg#main\" data-v-186502de></use></svg></div> "), _c(VContainer["a" /* default */], {
    class: {
      fixed: _vm.isDesktop
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('u-animate-container', [_c(VRow["a" /* default */], {
    class: [_vm.isMobile ? 'column' : 'row']
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "illustration-left"
  }, [_vm.loaded ? _c('section', {
    staticClass: "parallax-wrap"
  }, [_c('parallax', {
    attrs: {
      "speed-factor": _vm.isMobile ? 0 : 0.15,
      "section-height": _vm.isMobile ? 0 : 120,
      "direction": "up"
    }
  }, [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "figure screen"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgAPI.saas[8],
      "alt": "screen"
    }
  })])])])], 1) : _vm._e(), _vm._v(" "), _vm.loaded && !_vm.isMobile ? _c('section', {
    staticClass: "parallax-wrap"
  }, [_c('parallax', {
    attrs: {
      "speed-factor": _vm.isMobile ? 0 : 0.15,
      "section-height": 100,
      "direction": "down"
    }
  }, [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "figure graphic"
  })])])], 1) : _vm._e(), _vm._v(" "), _c('parallax-medium')], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "md": "6",
      "cols": "12"
    }
  }, [_c('u-animate', {
    attrs: {
      "offset": -100,
      "name": "fadeInLeftShort",
      "delay": "0.5s",
      "duration": "0.5s"
    }
  }, [_c('div', {
    staticClass: "desc"
  }, [_c('title-main', {
    attrs: {
      "align": _vm.isMobile ? 'center' : 'left'
    }
  }, [_c('span', [_c('strong', [_vm._v("\n                        " + _vm._s(_vm.$t('saasLanding.feature_titlestrong6')) + "\n                      ")])])]), _vm._v(" "), _c('h6', {
    staticClass: "use-text-subtitle2",
    class: [_vm.isMobile ? 'text-center' : 'text-left']
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('saasLanding.feature_desc6')) + "\n                  ")]), _vm._v(" "), _c(VRow["a" /* default */], _vm._l(_vm.logos, function (item) {
    return _c('div', {
      key: "item",
      staticClass: "patch"
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })])]);
  }), 0)], 1)])], 1)], 1)], 1)], 1)])], 2);
};

var Benefitvue_type_template_id_186502de_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Benefit/Benefit.vue?vue&type=template&id=186502de&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Benefit/Benefit.vue?vue&type=script&lang=js&





/* harmony default export */ var Benefitvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a,
    ParallaxMedium: Medium,
    ParallaxLarge: Large,
    'title-main': Title["a" /* default */]
  },

  data() {
    return {
      tab: null,
      imgAPI: images_imgAPI,
      loaded: false,
      logos: [{
        'url': 'https://apps.apple.com/us/app/ibizapay/id1588697473',
        'img': '/images/logos/apple.png'
      }, {
        'url': 'https://play.google.com/store/apps/details?id=com.ibizatoken.wallet',
        'img': '/images/logos/google.png'
      }]
    };
  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Benefit/Benefit.vue?vue&type=script&lang=js&
 /* harmony default export */ var Benefit_Benefitvue_type_script_lang_js_ = (Benefitvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Benefit/Benefit.vue



function Benefit_injectStyles (context) {
  
  var style0 = __webpack_require__(335)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Benefit_component = Object(componentNormalizer["a" /* default */])(
  Benefit_Benefitvue_type_script_lang_js_,
  Benefitvue_type_template_id_186502de_scoped_true_render,
  Benefitvue_type_template_id_186502de_scoped_true_staticRenderFns,
  false,
  Benefit_injectStyles,
  "186502de",
  "3e61899f"
  
)

/* harmony default export */ var Benefit = (Benefit_component.exports);
// CONCATENATED MODULE: ./components/Benefit/index.js

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(253);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/SubscribeForm/SubscribeForm.vue?vue&type=template&id=3a415baa&scoped=true&






var SubscribeFormvue_type_template_id_3a415baa_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_c(VContainer["a" /* default */], {
    staticClass: "max-sm"
  }, [_c('h3', {
    staticClass: "subscribe-title use-text-title2"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('saasLanding.Subscribe_title')) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "form"
  }, [_c(VForm["a" /* default */], {
    ref: "form",
    attrs: {
      "accept-charset": "UTF-8",
      "method": "POST"
    },
    model: {
      value: _vm.valid,
      callback: function ($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c(VTextField["a" /* default */], {
    staticClass: "input light",
    attrs: {
      "placeholder": _vm.$t('saasLanding.footer_mail'),
      "rules": _vm.emailRules,
      "label": _vm.$t('common.form_email'),
      "color": "white",
      "solo": "",
      "filled": "",
      "required": "",
      "full-width": ""
    },
    model: {
      value: _vm.email,
      callback: function ($$v) {
        _vm.email = $$v;
      },
      expression: "email"
    }
  }), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "button",
    attrs: {
      "text": !_vm.isDesktop,
      "color": _vm.isDesktop ? 'primary' : 'white'
    },
    on: {
      "click": _vm.validate
    }
  }, [_vm.isDesktop ? _c('span', [_vm._v(_vm._s(_vm.$t('saasLanding.Subscribe')))]) : _vm._e(), _vm._v(" "), _vm.isMobile ? _c(VIcon["a" /* default */], [_vm._v("mdi-send")]) : _vm._e()], 1)], 1)], 1)])], 1);
};

var SubscribeFormvue_type_template_id_3a415baa_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/SubscribeForm/SubscribeForm.vue?vue&type=template&id=3a415baa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SubscribeForm/SubscribeForm.vue?vue&type=script&lang=js&

/* harmony default export */ var SubscribeFormvue_type_script_lang_js_ = ({
  data() {
    return {
      valid: true,
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      routeLink: '/'
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.onSubmit();
      }
    },

    onSubmit() {
      let data = {
        email: this.email
      };
      external_axios_default.a.post('https://getform.io/f/aafdaca9-58d8-4230-a138-837e34e3b909', data, {
        headers: {
          Accept: 'application/json'
        }
      }).then(response => {
        this.isSuccess = response.data.success ? true : false;
        this.$refs.form.reset();
      }, response => {
        // Error
        console.log('response', response);
      });
    }

  },
  computed: {
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp;
      return smUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/SubscribeForm/SubscribeForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var SubscribeForm_SubscribeFormvue_type_script_lang_js_ = (SubscribeFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/SubscribeForm/SubscribeForm.vue



function SubscribeForm_injectStyles (context) {
  
  var style0 = __webpack_require__(337)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SubscribeForm_component = Object(componentNormalizer["a" /* default */])(
  SubscribeForm_SubscribeFormvue_type_script_lang_js_,
  SubscribeFormvue_type_template_id_3a415baa_scoped_true_render,
  SubscribeFormvue_type_template_id_3a415baa_scoped_true_staticRenderFns,
  false,
  SubscribeForm_injectStyles,
  "3a415baa",
  "72507d8d"
  
)

/* harmony default export */ var SubscribeForm = (SubscribeForm_component.exports);
// CONCATENATED MODULE: ./components/SubscribeForm/index.js

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Roadmap/Feature.vue?vue&type=template&id=9dfcebd0&scoped=true&
var Featurevue_type_template_id_9dfcebd0_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "root"
  }, [_c('more-feature')], 1);
};

var Featurevue_type_template_id_9dfcebd0_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Roadmap/Feature.vue?vue&type=template&id=9dfcebd0&scoped=true&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/Roadmap/MoreFeature.vue?vue&type=template&id=61e9d644&scoped=true&





var MoreFeaturevue_type_template_id_61e9d644_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "more-feature"
  }, [_c(VContainer["a" /* default */], {
    class: {
      fixed: _vm.isDesktop
    }
  }, [_vm.loaded ? _c('div', {
    staticClass: "item",
    attrs: {
      "id": "statistic"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    directives: [{
      def: directives_scroll["b" /* default */],
      name: "scroll",
      rawName: "v-scroll",
      value: _vm.handleScroll,
      expression: "handleScroll"
    }],
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text",
    class: {
      'text-center': _vm.isMobile
    }
  }, [_c('title-main', {
    attrs: {
      "align": _vm.isMobile ? 'center' : 'center'
    }
  }, [_c('span', [_c('strong', [_vm._v("\n            " + _vm._s(_vm.$t('saasLanding.Roadmap_title')) + "\n            ")])])])], 1), _vm._v(" "), _vm.loaded ? _c('section', [_c('div', {
    staticClass: "viewport"
  }, [_c('figure', {
    staticClass: "figure screen"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgAPI.saas[12],
      "alt": "screen"
    }
  })])])]) : _vm._e()])], 1)], 1) : _vm._e()])], 1);
};

var MoreFeaturevue_type_template_id_61e9d644_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Roadmap/MoreFeature.vue?vue&type=template&id=61e9d644&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Roadmap/MoreFeature.vue?vue&type=script&lang=js&





/*const coinData = [
  {
    name: 'BTC',
    logo: '/images/crypto/btc.png',
    progress: 75,
    color: '#FBA630'
  },
  {
    name: 'DASH',
    logo: '/images/crypto/dash.png',
    progress: 40,
    color: '#21D3D7'
  },
  {
    name: 'NAN',
    logo: '/images/crypto/nan.png',
    progress: 90,
    color: '#548CCC'
  },
  {
    name: 'MNR',
    logo: '/images/crypto/mnr.png',
    progress: 35,
    color: '#FF6602'
  },
  {
    name: 'IOT',
    logo: '/images/crypto/iot.png',
    progress: 80,
    color: '#CE07D4'
  }
] */

/* harmony default export */ var MoreFeaturevue_type_script_lang_js_ = ({
  components: {
    'title-main': Title["a" /* default */]
  },
  data: () => ({
    loaded: false,
    imgAPI: images_imgAPI
  }),

  mounted() {
    this.loaded = true;
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  },
  methods: {
    handleScroll: function () {
      const top = this.offsetTop - window.innerHeight + 300;

      if (window.scrollY > top) {
        return this.play = true;
      }

      return false;
    }
  }
});
// CONCATENATED MODULE: ./components/Roadmap/MoreFeature.vue?vue&type=script&lang=js&
 /* harmony default export */ var Roadmap_MoreFeaturevue_type_script_lang_js_ = (MoreFeaturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Roadmap/MoreFeature.vue



function MoreFeature_injectStyles (context) {
  
  var style0 = __webpack_require__(339)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MoreFeature_component = Object(componentNormalizer["a" /* default */])(
  Roadmap_MoreFeaturevue_type_script_lang_js_,
  MoreFeaturevue_type_template_id_61e9d644_scoped_true_render,
  MoreFeaturevue_type_template_id_61e9d644_scoped_true_staticRenderFns,
  false,
  MoreFeature_injectStyles,
  "61e9d644",
  "728bb98e"
  
)

/* harmony default export */ var MoreFeature = (MoreFeature_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Roadmap/Feature.vue?vue&type=script&lang=js&

/* harmony default export */ var Roadmap_Featurevue_type_script_lang_js_ = ({
  components: {
    MoreFeature: MoreFeature
  }
});
// CONCATENATED MODULE: ./components/Roadmap/Feature.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Roadmap_Featurevue_type_script_lang_js_ = (Roadmap_Featurevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Roadmap/Feature.vue



function Roadmap_Feature_injectStyles (context) {
  
  var style0 = __webpack_require__(341)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Roadmap_Feature_component = Object(componentNormalizer["a" /* default */])(
  components_Roadmap_Featurevue_type_script_lang_js_,
  Featurevue_type_template_id_9dfcebd0_scoped_true_render,
  Featurevue_type_template_id_9dfcebd0_scoped_true_staticRenderFns,
  false,
  Roadmap_Feature_injectStyles,
  "9dfcebd0",
  "fa4352ba"
  
)

/* harmony default export */ var Roadmap_Feature = (Roadmap_Feature_component.exports);
// CONCATENATED MODULE: ./components/Roadmap/index.js

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&



















/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    Banner: Banner,
    CompanyLogo: CompanyLogo,
    Feature: Feature,
    Feature3: Feature3,
    Testimonials: Testimonials,
    PricingPlan: PricingPlan,
    Faq: Faq,
    NewsEvent: NewsEvent,
    FooterWithDeco: FooterWithDeco,
    PageNav: PageNav,
    Hidden: Hidden["a" /* default */],
    Notification: Notification["a" /* default */],
    Blog: Blog,
    Feature4: Feature4,
    Benefit: Benefit,
    Subscribe: SubscribeForm,
    Roadmap: Roadmap_Feature
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown'; // eslint-disable-line
    },

    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown';
    }

  },

  head() {
    return {
      title: brand["a" /* default */].saas.name + ' - Home Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(343)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  lib_vue_loader_options_pagesvue_type_template_id_2ebec6a6_scoped_true_render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "2ebec6a6",
  "636c5bde"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map