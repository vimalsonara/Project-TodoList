import trashIcon from '../icons/trash-solid.svg'

export class Todo {
    constructor(todo, dueDate) {
      this.todo = todo;
      this.dueDate = dueDate;
      this.completed = false;
    }
  }
  
export class TodoList {
    constructor() {
      this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    }
  
    addTodo(newTodo) {
      this.todos.push(newTodo);
      this.saveTodo();
    }
  
    delteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      this.saveTodo();
    }
  
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      if (todo.completed !== true) {
        this.todos[todoIndex].completed = true;
        this.saveTodo();
      } else {
        this.todos[todoIndex].completed = false;
        this.saveTodo();
      }  
    }
  
    displayTodo(todo) {
        const todoListElem = document.querySelector('#todo-list');
        // create div for todo element container
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo')
        // create <p> tag
        const todoName = document.createElement('p');
        todoName.classList.add('todoName');
        todoName.innerText = todo.todo;
        // create <p> tag
        const todoDueDate = document.createElement('p');
        todoDueDate.classList.add('todoDueDate');
        todoDueDate.innerText = todo.dueDate;
        // create input element
        const todoCheck = document.createElement('input');
        todoCheck.classList.add('check');
        todoCheck.type = 'checkbox';
        // add created todo element to todo container
        todoContainer.appendChild(todoCheck);
        todoContainer.appendChild(todoName);
        todoContainer.appendChild(todoDueDate);
        // create img tag 
        const deleteIcon = document.createElement('img');
        // set trashIcon src to img tag
        deleteIcon.src = trashIcon;
        deleteIcon.alt = 'trash icon';
        deleteIcon.classList.add('trashIcon')
        // add img tag to container
        todoContainer.appendChild(deleteIcon);
        // delete todo when trash icon clicked 
        deleteIcon.addEventListener('click', e => {
          this.delteTodo(todo);
          e.target.parentElement.remove();
          this.saveTodo();
        })
        // mark todo complete
        todoContainer.addEventListener('click', e => {
          if (e.target.classList.contains('check')) {
            this.completeTodo(todo);
          }
        })
        // add container to DOM
        todoListElem.appendChild(todoContainer);
    }

    saveTodo() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
}