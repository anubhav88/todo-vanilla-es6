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