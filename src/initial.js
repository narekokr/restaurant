import {createHome} from './home.js'
function create() {
    const content = document.querySelector('#content');
    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.innerHTML = `<header>
    <div id="Menu"><p>Menu</p></div>
    <div id="Home" class="active"><p>Home</p></div>
    <div id="Contact"><p>Contact Us</p></div>
    </header>`;
    content.insertAdjacentElement('beforebegin', header);
    createHome(content);
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div><h2>Reservations</h2>
        <p>More info on "Contact" page</p>
    </div>
    <div><h2>Open Hours</h2>
        <p>Open EVERY day, EVERY hour! Get your food 24/7</p>
    </div>
    <div><h2>Address</h2>
        <p>Armenia, Yerevan, Random Street 45</p>
    </div>`;
    body.appendChild(footer);

}

export {create, createHome};