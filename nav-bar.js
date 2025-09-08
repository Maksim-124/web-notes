class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="index.html">Конспект «Структура HTML-документа»</a>
            <a href="mnemonical.html">Мнемонический словарь</a>
            <a href="textmarkup.html">Разметка текста</a>
            <a href="linksandimages.html">Ссылки и изображения</a>
            <a href="css.html">Конспект: основы CSS</a>
            <a href="css.html">Конспект «Оформление текста»</a>
        </nav>
        <aside class="helpful_links">
            <ul>
                <li><a href="https://www.w3.org/TR/CSS22/propidx.html" target="_blank" rel="noopener noreferrer" title="CSS стандарты">Стандарты CSS</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements" target="_blank" rel="noopener noreferrer" title="Справочник HTML тегов">Справочник HTML тегов</a></li>
                <li><a href="https://github.com/yoksel/common-words" target="_blank" rel="noopener noreferrer" title="Слова часто используемые в CSS-классах">Common CSS words</a></li>
            </ul>
        </aside>
        `;
    }
}

customElements.define('nav-bar', Navbar);