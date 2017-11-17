'use strict';

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