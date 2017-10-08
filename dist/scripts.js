/**
 * Page initialization
 */
function init() {
    var todoData = new TodoData([]);
    var template = new TodoTemplate();
    var view = new View(template);
    var controller = new TodoController(todoData, view);
}

window.onload = function() {
    init(); 
};
var TodoTemplate = function() {
  
};

TodoTemplate.prototype.showTodo= function(todoList){
  var template = '';
  _.each(todoList, function(todo) {
    template = template + '<li data-id="' + todo.id + '" class="todo-li">' + todo.text + '<button class="destroy">delete</button></li>';
  });
  return template;
};
/**
 * Data struncture for the todo instance.
 * @param {String} text   Text user entered for a particular todo
 * @param {String} status Status of a todo
 */
var Todo = function(text, status) {
  this.text = text;
  this.status = status;
};
/**
 * @param {!TodoDate} todoData a TodoData instance
 * @param {!View} view a View instance
 */
var TodoController = function(todoData, view) {
   this.store = todoData;
   this.todoView  = view;

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
TodoController.prototype.addItem= function(text){
  this.store.addTodo({'text': text, 'status':'Active'}, this.todoView.addItem.bind(this.todoView));
};

/**
 * Remove the item user clicked the delete button foe
 * @param  {String} id theid of the item to be deleted
 * @return {Function}    function to be called from the listener of the delete event
 */
TodoController.prototype.remove= function(id){
  this.store.removeTodo(id, this.todoView.removeTodo.bind(this.todoView)); 
};
/**
 * Data store for the application
 * @param {Array} todoList list to initialize the store
 */
var TodoData = function(todoList) {
    this.todos = todoList;
};

/**
 * Function to add item to the data store
 * @param {Todo}   todo     a Todo instance
 * @param {Function} callback a callback to be called when the data store has been updated with the new data
 */
TodoData.prototype.addTodo = function(todo, callback) {
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
TodoData.prototype.removeTodo = function(id, callback) {
    for (var i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].id == id)
            this.todos.splice(i, 1);
    }
    console.log(this.todos);
    if (callback) {
        callback(id);
    }
};
var View = function(template) {
    this.templateHtml = template;
    this.ulElement = document.getElementsByClassName("todo-list")[0];
    this.addTodo = document.getElementsByClassName("add-todo")[0];
    this.newTodoInput = document.getElementsByClassName("new-todo")[0];
};

/**
 * Updates the template with items passed
 * @param {Array} items List of Todo instances
 */
View.prototype.addItem = function(items) {
    this.ulElement.innerHTML = this.templateHtml.showTodo(items);
};

/**
 * Removed todo element from the dom for which the index matches
 * @param  {String} index idenx of the todo to be deleted from the list
 */
View.prototype.removeTodo = function(index) {
    var liElement = document.getElementsByClassName("todo-li");
    var ul = this.ulElement;
    for (var i = 0; i < liElement.length; i++) {
        var todoElement = liElement[i];
        if (todoElement.getAttribute('data-id') == index) {
            ul.removeChild(todoElement);
        }
    }
};

/**
 * Registers click event on Add todo button and binding handler for that event.
 * @param  {Function} handler function to be called when click event for add button is fired.
 */
View.prototype.bindAddNodeClickHandler = function(handler) {
    var inputElement = this.newTodoInput;
    this.addTodo.addEventListener("click", function(event) {
        handler(inputElement.value);
    });
};

/**
 * Registers click event on delete todo button and binding handler for that event.
 * @param  {Function} handler function to be called when click event for delete button is fired.
 */
View.prototype.bindDeleteNodeClickHandler = function(handler) {
    var ul = this.ulElement;
    this.ulElement.addEventListener("click", function(event) {
        var deleteButtons = this.getElementsByClassName("destroy");
        var targetElement = event.target || event.srcElement;
        for(var i=0;i<deleteButtons.length; i++){
          if(deleteButtons[i]==targetElement){
            var index = targetElement.parentElement.getAttribute("data-id");
            handler(index);
          }
        }
    });

};