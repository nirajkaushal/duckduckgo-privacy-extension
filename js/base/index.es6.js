// create global $
window.$ = window.jQuery = require('./../../node_modules/jquery');

// base dependencies
const mixins = require('./mixins/index.es6.js');
const BaseModel = require('./model.es6.js');
const BasePage = require('./page.es6.js');
const BaseView = require('./view.es6.js');
const store = require('./store.es6.js');

// init base
// TODO: make this a constructor and init from outside of here?
window.DDG = window.DDG || {};
window.DDG.base = {
    mixins: mixins,
    Model: BaseModel,
    Page: BasePage,
    store: store,
    utils: {},
    View: BaseView,
};

console.log(window.DDG.base);
