"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(template) {
        _classCallCheck(this, View);

        this.templateHtml = template;
        this.ulElement = document.getElementsByClassName("todo-list")[0];
        this.addTodo = document.getElementsByClassName("add-todo")[0];
        this.newTodoInput = document.getElementsByClassName("new-todo")[0];
    }

    _createClass(View, [{
        key: "addItem",


        /**
         * Updates the template with items passed
         * @param {Array} items List of Todo instances
         */
        value: function addItem(items) {
            this.ulElement.innerHTML = this.templateHtml.showTodo(items);
        }
    }, {
        key: "removeTodo",


        /**
         * Removed todo element from the dom for which the index matches
         * @param  {String} index idenx of the todo to be deleted from the list
         */
        value: function removeTodo(index) {
            var liElement = document.getElementsByClassName("todo-li");
            var ul = this.ulElement;
            for (var i = 0; i < liElement.length; i++) {
                var todoElement = liElement[i];
                if (todoElement.getAttribute('data-id') == index) {
                    ul.removeChild(todoElement);
                }
            }
        }
    }, {
        key: "bindAddNodeClickHandler",


        /**
         * Registers click event on Add todo button and binding handler for that event.
         * @param  {Function} handler function to be called when click event for add button is fired.
         */
        value: function bindAddNodeClickHandler(handler) {
            var inputElement = this.newTodoInput;
            this.addTodo.addEventListener("click", function (event) {
                handler(inputElement.value);
            });
        }
    }, {
        key: "bindDeleteNodeClickHandler",


        /**
         * Registers click event on delete todo button and binding handler for that event.
         * @param  {Function} handler function to be called when click event for delete button is fired.
         */
        value: function bindDeleteNodeClickHandler(handler) {
            var ul = this.ulElement;
            this.ulElement.addEventListener("click", function (event) {
                var deleteButtons = this.getElementsByClassName("destroy");
                var targetElement = event.target || event.srcElement;
                for (var i = 0; i < deleteButtons.length; i++) {
                    if (deleteButtons[i] == targetElement) {
                        var index = targetElement.parentElement.getAttribute("data-id");
                        handler(index);
                    }
                }
            });
        }
    }]);

    return View;
}();

exports.default = View;