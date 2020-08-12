function createHome() {
    const content = document.querySelector('#content');
    const img = document.createElement('img');
    img.src = 'img1.jpg';
    content.appendChild(img);
    const main = document.createElement('main');
    main.innerHTML = `<p> Welcome to Nareki Mot</p>
    <p>Nareki Mot is a restaurant that specifies in Armenian Cuisine</p>
    <section>
        <div class="bbq">
        <img src="img2.jpg" alt="">
            <p>Our Menu ranges from traditional barbeque....</p>
        </div>
        <div class="dolma">
            <p>...To traditional Dolma</p>
            <img src="img3.jpg" alt="">
        </div>
        <p>Also be refreshed by our drinks - alcoholic and non-alcholic</p>
        <div class="drinks">
            <img src="drink1.jpg" alt="">
            <img src="drink2.png" alt="">
            <img src="drink3.jpg" alt="">
        </div>
    </section>`;
    content.appendChild(main);
}

export {createHome};