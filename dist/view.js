"use strict";

var View = function View(template) {
  this.templateHtml = template;
  this.ulElement = document.getElementsByClassName("todo-list")[0];
  this.addTodo = document.getElementsByClassName("add-todo")[0];
  this.newTodoInput = document.getElementsByClassName("new-todo")[0];
};

View.prototype.addItem = function (items) {
  this.ulElement.innerHTML = this.templateHtml.showTodo(items);
};

View.prototype.removeTodo = function (index) {
  var liElement = document.getElementsByClassName("todo-li");
  var ul = this.ulElement;
  console.log(liElement);
  for (var i = 0; i < liElement.length; i++) {
    var todoElement = liElement[i];
    if (todoElement.getAttribute('data-id') == index) {
      ul.removeChild(todoElement);
    }
  }
};

View.prototype.bindAddNodeClickHandler = function (handler) {
  var inputElement = this.newTodoInput;
  this.addTodo.addEventListener("click", function (event) {
    handler(inputElement.value);
  });
};

View.prototype.bindDeleteNodeClickHandler = function (handler) {
  var ul = this.ulElement;
  this.ulElement.addEventListener("click", function (event) {
    var targetElement = event.target || event.srcElement;
    var index = targetElement.parentElement.getAttribute("data-id");
    handler(index);
  });
};