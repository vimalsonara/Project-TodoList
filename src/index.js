import './style.css';
import { Todo, TodoList } from './modules/todolist';

// crete todolist using class
const todoList = new TodoList;

const todoForm = document.querySelector('#todo-form');

// on submit add todo
todoForm.addEventListener('submit', e => {
    // prevent form to submit
    e.preventDefault();
    // getting form input
    const todoName = todoForm.todo.value;
    const dueDate = todoForm.dueDate.value;
    // dynamic todo using class 
    const todo = new Todo(todoName, dueDate);
    // add todo to todolist array
    todoList.addTodo(todo);
    // display todo
    todoList.displayTodo(todo);
    // reset form
    todoForm.reset();
})

// load todos from local storage
window.addEventListener('load', () => {
    // asign localstorage to variable
    const storedTodo = JSON.parse(localStorage.getItem('todos'));
    // check if localstorage todo available
    if(storedTodo != '') {
        // iterate through all todos
        storedTodo.forEach(element => {
            // display each local todo to DOM
            todoList.displayTodo(element);
            // check if todo is completed
            if (element.completed == true) {
                // select all todos
                const todos = document.querySelectorAll('.todo');
                // iterate through all todos
                todos.forEach(todo => {
                    // match localstorage todo & DOM todo
                    if (todo.childNodes[1].textContent === element.todo) {
                        // add class to completed todo
                        todo.childNodes[0].classList.add('markCheck');
                        // select all completed todo
                        const markCheck = document.querySelectorAll('.markCheck');
                        // iterate through all completed todo
                        markCheck.forEach(check => {
                            // mark checked all completed todo
                            check.checked = true;
                        })
                    }
                })
            }
        });
       } else {
        return
    }
})
