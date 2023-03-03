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
const storedTodo = JSON.parse(localStorage.getItem('todos'));
if(storedTodo !== '') {
    storedTodo.forEach(element => {
        todoList.displayTodo(element);
    });
} 