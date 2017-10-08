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