const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');

const HIDDEN = "hidden";
const USERNAME_KEY = 'username';

function onLoginSubmit(e){
    e.preventDefault();
    const username = loginInput.value;
 
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN);
}

loginForm.addEventListener('submit', onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN);
} else {
    paintGreeting(savedUsername);
}