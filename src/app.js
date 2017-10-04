var init = function() {
var todoData = new TodoData([]);
var template = new TodoTemplate();
var view = new View(template);
var controller = new TodoController(todoData, view);
};

window.onload = function() {
  init();
};
