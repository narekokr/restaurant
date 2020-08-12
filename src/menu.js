function createMenu() {
    
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('subpage1');
    div.innerHTML = `
    <h1>MENU</h1>
    <div class="menu">
        <div><h4>Main Dishes</h4>
        <p>Barbeque</p>
        <p>Kashlama</p>
        <p>Khash</p>
        <p>Khapama</p>
        <p>Dolma</p>
        <p>Armenian Kebab</p>
        </div>
        <div><h4>Salads</h4>
            <p>Ceasar</p>
            <p>Summer</p>
            <p>Tabule</p>
            <p>Narek's Special Salad</p>
            <p>Spicy</p>
            <p>Eggplant with pomegranates</p>
        </div>
        <div><h4>Drinks</h4>
            <p>Armenian Lemonade</p>
            <p>Apple juice</p>
            <p>Mokhito</p>
            <p>Compote</p>
            <p>Cognac</p>
            <p>Vodka</p>
        </div>
    </div>`;
    content.appendChild(div);
}
export {createMenu};