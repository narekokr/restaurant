import {create, createHome} from './initial.js';
import {createMenu} from './menu.js';
const content = document.querySelector('#content');
function createContact() {
    
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('subpage3');
    div.innerHTML = `
    <h1>Contact Us!</h1>
    <form action="">
        <div><label>Name</label>
        <input type="text"></div>
        <div><label>Email</label>
        <input type="text"></div>
        <div><label>Subject</label>
        <input type="text"></div>
        <div><label>Message</label>
        <input type="text" class="mes"></div>
        <button>Submit</button>
    </form>`;
    content.appendChild(div);
}
create();
function helperFunction(key) {
    
    if(key === 'Menu') {
        
        createMenu();
    }
    else if(key === 'Home') {
        createHome();
    }
    else {
        createContact();
    }
}
function handleClick() {
    content.innerHTML = '';
    helperFunction(this.id);
    btns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    
}
const btns = Array.from(document.querySelectorAll('header>div'));
btns.forEach(btn => btn.addEventListener('click', handleClick))