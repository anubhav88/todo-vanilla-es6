import TodoController from './todoController';
import TodoTemplate from './template';
import TodoData from './todoData';
import View from './view';
/**
 * Page initialization
 */
function init() {
    const todoData = new TodoData([]);
    const template = new TodoTemplate();
    const view = new View(template);
    const controller = new TodoController(todoData, view);
}

window.onload = function() {
    init(); 
};