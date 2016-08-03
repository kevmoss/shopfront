const { createStore } = require('redux');
const appReducer = require('./reducer/reducer');

let store = createStore(appReducer);

module.exports = store;
