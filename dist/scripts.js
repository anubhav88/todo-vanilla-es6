/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _todoController = __webpack_require__(1);

var _todoController2 = _interopRequireDefault(_todoController);

var _template = __webpack_require__(2);

var _template2 = _interopRequireDefault(_template);

var _todoData = __webpack_require__(3);

var _todoData2 = _interopRequireDefault(_todoData);

var _view = __webpack_require__(4);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @param {!TodoDate} todoData a TodoData instance
 * @param {!View} view a View instance
 */
var TodoController = function () {
  function TodoController(todoData, view) {
    _classCallCheck(this, TodoController);

    this.store = todoData;
    this.todoView = view;

    /**
     *  Binding the remove function of this controller with click handler of the view. 
     */
    this.todoView.bindDeleteNodeClickHandler(this.remove.bind(this));

    /**
     *  Binding the add function of this controller with click handler of the view. 
     */
    this.todoView.bindAddNodeClickHandler(this.addItem.bind(this));
  }

  _createClass(TodoController, [{
    key: 'addItem',


    /**
     * Adds a todo item to the data and updates the view
     * @param {String} text text the user entered
     */
    value: function addItem(text) {
      this.store.addTodo({ 'text': text, 'status': 'Active' }, this.todoView.addItem.bind(this.todoView));
    }
  }, {
    key: 'remove',


    /**
     * Remove the item user clicked the delete button foe
     * @param  {String} id theid of the item to be deleted
     * @return {Function}    function to be called from the listener of the delete event
     */
    value: function remove(id) {
      this.store.removeTodo(id, this.todoView.removeTodo.bind(this.todoView));
    }
  }]);

  return TodoController;
}();

exports.default = TodoController;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoTemplate = function () {
    function TodoTemplate() {
        _classCallCheck(this, TodoTemplate);
    }

    _createClass(TodoTemplate, [{
        key: 'showTodo',
        value: function showTodo(todoList) {
            var template = todoList.reduce(function (temp, d) {
                return temp + '<li data-id="' + d.id + '" class="todo-li">' + d.text + '<button class="destroy">delete</button></li>';
            }, '');
            return template;
        }
    }]);

    return TodoTemplate;
}();

exports.default = TodoTemplate;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Data store for the application
 * @param {Array} todoList list to initialize the store
 */
var TodoData = function () {
    function TodoData(todoList) {
        _classCallCheck(this, TodoData);

        this.todos = todoList;
    }

    _createClass(TodoData, [{
        key: "addTodo",


        /**
         * Function to add item to the data store
         * @param {Todo}   todo     a Todo instance
         * @param {Function} callback a callback to be called when the data store has been updated with the new data
         */
        value: function addTodo(todo, callback) {
            todo.id = this.todos.length;
            this.todos.push(todo);
            if (callback) {
                callback(this.todos);
            }
        }
    }, {
        key: "removeTodo",


        /**
         * Function to remove the item from data store. 
         * @param  {String }   id       Id of the item to be deleted from the data store
         * @param  {Function} callback  function to be called when the item has been deleted from store
         */
        value: function removeTodo(id, callback) {
            for (var i = this.todos.length - 1; i >= 0; i--) {
                if (this.todos[i].id == id) this.todos.splice(i, 1);
            }
            console.log(this.todos);
            if (callback) {
                callback(id);
            }
        }
    }]);

    return TodoData;
}();

exports.default = TodoData;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(template) {
        _classCallCheck(this, View);

        this.templateHtml = template;
        this.ulElement = document.getElementsByClassName("todo-list")[0];
        this.addTodo = document.getElementsByClassName("add-todo")[0];
        this.newTodoInput = document.getElementsByClassName("new-todo")[0];
    }

    _createClass(View, [{
        key: "addItem",


        /**
         * Updates the template with items passed
         * @param {Array} items List of Todo instances
         */
        value: function addItem(items) {
            this.ulElement.innerHTML = this.templateHtml.showTodo(items);
        }
    }, {
        key: "removeTodo",


        /**
         * Removed todo element from the dom for which the index matches
         * @param  {String} index idenx of the todo to be deleted from the list
         */
        value: function removeTodo(index) {
            var liElement = document.getElementsByClassName("todo-li");
            var ul = this.ulElement;
            for (var i = 0; i < liElement.length; i++) {
                var todoElement = liElement[i];
                if (todoElement.getAttribute('data-id') == index) {
                    ul.removeChild(todoElement);
                }
            }
        }
    }, {
        key: "bindAddNodeClickHandler",


        /**
         * Registers click event on Add todo button and binding handler for that event.
         * @param  {Function} handler function to be called when click event for add button is fired.
         */
        value: function bindAddNodeClickHandler(handler) {
            var inputElement = this.newTodoInput;
            this.addTodo.addEventListener("click", function (event) {
                handler(inputElement.value);
            });
        }
    }, {
        key: "bindDeleteNodeClickHandler",


        /**
         * Registers click event on delete todo button and binding handler for that event.
         * @param  {Function} handler function to be called when click event for delete button is fired.
         */
        value: function bindDeleteNodeClickHandler(handler) {
            var ul = this.ulElement;
            this.ulElement.addEventListener("click", function (event) {
                var deleteButtons = this.getElementsByClassName("destroy");
                var targetElement = event.target || event.srcElement;
                for (var i = 0; i < deleteButtons.length; i++) {
                    if (deleteButtons[i] == targetElement) {
                        var index = targetElement.parentElement.getAttribute("data-id");
                        handler(index);
                    }
                }
            });
        }
    }]);

    return View;
}();

exports.default = View;

/***/ })
/******/ ]);