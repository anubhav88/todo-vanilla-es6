'use strict';

var TodoController = function TodoController(todoData, view) {
  this.store = todoData;
  this.todoView = view;
  this.todoView.bindDeleteNodeClickHandler(this.remove.bind(this));
  this.todoView.bindAddNodeClickHandler(this.addItem.bind(this));
};

TodoController.prototype.addItem = function (text) {
  this.store.addTodo({ 'text': text, 'status': 'Active' }, this.todoView.addItem.bind(this.todoView));
};

TodoController.prototype.remove = function (id) {
  this.store.removeTodo(id, this.todoView.removeTodo.bind(this.todoView));
};