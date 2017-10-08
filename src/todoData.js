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