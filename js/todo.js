const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.innerText = newTodoObj.text;
    button.innerText = '✖️';
    button.addEventListener('click', deleteTodo);
    li.id = newTodoObj.id;
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();  
}

todoForm.addEventListener('submit', handleTodoSubmit);



const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos);
    toDos = parseTodos;
    parseTodos.forEach(paintTodo);
}