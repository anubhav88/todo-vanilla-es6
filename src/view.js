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
        var targetElement = event.target || event.srcElement;
        var index = targetElement.parentElement.getAttribute("data-id");
        handler(index);
    });

};