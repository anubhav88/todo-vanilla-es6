"use strict";

var TodoData = function TodoData(todoList) {
  this.todos = todoList;
};

TodoData.prototype.addTodo = function (todo, callback) {
  todo.id = this.todos.length;
  this.todos.push(todo);
  if (callback) {
    callback(this.todos);
  }
};

TodoData.prototype.removeTodo = function (id, callback) {
  for (var i = this.todos.length - 1; i >= 0; i--) {
    if (this.todos[i].id == id) this.todos.splice(i, 1);
  }
  console.log(this.todos);
  if (callback) {
    callback(id);
  }
};