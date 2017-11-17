'use strict';

var _todoController = require('./todoController');

var _todoController2 = _interopRequireDefault(_todoController);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _todoData = require('./todoData');

var _todoData2 = _interopRequireDefault(_todoData);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Page initialization
 */
function init() {
    var todoData = new _todoData2.default([]);
    var template = new _template2.default();
    var view = new _view2.default(template);
    var controller = new _todoController2.default(todoData, view);
}

window.onload = function () {
    init();
};