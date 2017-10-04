var TodoTemplate = function() {
  
};

TodoTemplate.prototype.showTodo= function(todoList){
  var template = '';
  _.each(todoList, function(todo) {
    template = template + '<li data-id="' + todo.id + '" class="todo-li">' + todo.text + '<button class="destroy">delete</button></li>';
  });
  return template;
};