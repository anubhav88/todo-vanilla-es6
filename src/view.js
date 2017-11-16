class View {
    constructor(template) {
        this.templateHtml = template;
        this.ulElement = document.getElementsByClassName("todo-list")[0];
        this.addTodo = document.getElementsByClassName("add-todo")[0];
        this.newTodoInput = document.getElementsByClassName("new-todo")[0];
    };

    /**
     * Updates the template with items passed
     * @param {Array} items List of Todo instances
     */
    addItem(items) {
        this.ulElement.innerHTML = this.templateHtml.showTodo(items);
    };

    /**
     * Removed todo element from the dom for which the index matches
     * @param  {String} index idenx of the todo to be deleted from the list
     */
     removeTodo(index) {
        let liElement = document.getElementsByClassName("todo-li");
        let ul = this.ulElement;
        for (let i = 0; i < liElement.length; i++) {
            let todoElement = liElement[i];
            if (todoElement.getAttribute('data-id') == index) {
                ul.removeChild(todoElement);
            }
        }
    };

    /**
     * Registers click event on Add todo button and binding handler for that event.
     * @param  {Function} handler function to be called when click event for add button is fired.
     */
    bindAddNodeClickHandler(handler) {
        let inputElement = this.newTodoInput;
        this.addTodo.addEventListener("click", function(event) {
            handler(inputElement.value);
        });
    };

    /**
     * Registers click event on delete todo button and binding handler for that event.
     * @param  {Function} handler function to be called when click event for delete button is fired.
     */
    bindDeleteNodeClickHandler(handler) {
        let ul = this.ulElement;
        this.ulElement.addEventListener("click", function(event) {
            let deleteButtons = this.getElementsByClassName("destroy");
            let targetElement = event.target || event.srcElement;
            for (let i = 0; i < deleteButtons.length; i++) {
                if (deleteButtons[i] == targetElement) {
                    let index = targetElement.parentElement.getAttribute("data-id");
                    handler(index);
                }
            }
        });
    };
}