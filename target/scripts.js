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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todoController__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todoController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__todoController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todoData__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todoData___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__todoData__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__view__);




/**
 * Page initialization
 */
function init() {
    const todoData = new __WEBPACK_IMPORTED_MODULE_2__todoData___default.a([]);
    const template = new __WEBPACK_IMPORTED_MODULE_1__template___default.a();
    const view = new __WEBPACK_IMPORTED_MODULE_3__view___default.a(template);
    const controller = new __WEBPACK_IMPORTED_MODULE_0__todoController___default.a(todoData, view);
}

window.onload = function() {
    init(); 
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * @param {!TodoDate} todoData a TodoData instance
 * @param {!View} view a View instance
 */
class TodoController {
    constructor(todoData, view) {
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
    };

    /**
     * Adds a todo item to the data and updates the view
     * @param {String} text text the user entered
     */
    addItem(text) {
        this.store.addTodo({ 'text': text, 'status': 'Active' }, this.todoView.addItem.bind(this.todoView));
    };

    /**
     * Remove the item user clicked the delete button foe
     * @param  {String} id theid of the item to be deleted
     * @return {Function}    function to be called from the listener of the delete event
     */
    remove(id) {
        this.store.removeTodo(id, this.todoView.removeTodo.bind(this.todoView));
    };
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

class TodoTemplate {

    showTodo(todoList) {
        let template = todoList.reduce((temp, d)=>{
         return temp + 
        			'<li data-id="' 
        			+ d.id 
        			+ '" class="todo-li">' 
        			+ d.text 
        			+ '<button class="destroy">delete</button></li>';
        },'');         
        return template;
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Data store for the application
 * @param {Array} todoList list to initialize the store
 */
class TodoData {
    constructor(todoList) {
        this.todos = todoList;
    };

    /**
     * Function to add item to the data store
     * @param {Todo}   todo     a Todo instance
     * @param {Function} callback a callback to be called when the data store has been updated with the new data
     */
    addTodo(todo, callback) {
        todo.id = this.todos.length;
        this.todos.push(todo);
        if (callback) {
            callback(this.todos);
        }
    };

    /**
     * Function to remove the item from data store. 
     * @param  {String }   id       Id of the item to be deleted from the data store
     * @param  {Function} callback  function to be called when the item has been deleted from store
     */
    removeTodo(id, callback) {
        for (let i = this.todos.length - 1; i >= 0; i--) {
            if (this.todos[i].id == id)
                this.todos.splice(i, 1);
        }
        console.log(this.todos);
        if (callback) {
            callback(id);
        }
    };
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

class View {
    constructor(template) {
        this.templateHtml = template;
        this.ulElement = document.getElementsByClassName("todo-list")[0];
        this.addTodo = document.getElementsByClassName("add-todo")[0];
        this.newTodoInput = document.getElementsByClassName("new-todo")[0];
    };

    /**
     * Updates the template with items passed
     * @param {Array} items List of Todo instances
     */
    addItem(items) {
        this.ulElement.innerHTML = this.templateHtml.showTodo(items);
    };

    /**
     * Removed todo element from the dom for which the index matches
     * @param  {String} index idenx of the todo to be deleted from the list
     */
     removeTodo(index) {
        let liElement = document.getElementsByClassName("todo-li");
        let ul = this.ulElement;
        for (let i = 0; i < liElement.length; i++) {
            let todoElement = liElement[i];
            if (todoElement.getAttribute('data-id') == index) {
                ul.removeChild(todoElement);
            }
        }
    };

    /**
     * Registers click event on Add todo button and binding handler for that event.
     * @param  {Function} handler function to be called when click event for add button is fired.
     */
    bindAddNodeClickHandler(handler) {
        let inputElement = this.newTodoInput;
        this.addTodo.addEventListener("click", function(event) {
            handler(inputElement.value);
        });
    };

    /**
     * Registers click event on delete todo button and binding handler for that event.
     * @param  {Function} handler function to be called when click event for delete button is fired.
     */
    bindDeleteNodeClickHandler(handler) {
        let ul = this.ulElement;
        this.ulElement.addEventListener("click", function(event) {
            let deleteButtons = this.getElementsByClassName("destroy");
            let targetElement = event.target || event.srcElement;
            for (let i = 0; i < deleteButtons.length; i++) {
                if (deleteButtons[i] == targetElement) {
                    let index = targetElement.parentElement.getAttribute("data-id");
                    handler(index);
                }
            }
        });
    };
}

/***/ })
/******/ ]);