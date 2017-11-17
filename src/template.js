export default class TodoTemplate {

    showTodo(todoList) {
        let template = todoList.reduce((temp, d)=>{
         return temp + 
        			'<li data-id="' 
        			+ d.id 
        			+ '" class="todo-li">' 
        			+ d.text 
        			+ '<button class="destroy">delete</button></li>';
        },'');         
        return template;
    }
}