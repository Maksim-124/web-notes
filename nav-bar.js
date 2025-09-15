class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="index.html">Конспект «Структура HTML-документа»</a>
            <a href="mnemonical.html">Мнемонический словарь</a>
            <a href="textmarkup.html">Разметка текста</a>
            <a href="linksandimages.html">Ссылки и изображения</a>
            <a href="css.html">Конспект: основы CSS</a>
            <a href="text-formatting.html">Конспект «Оформление текста»</a>
            <a href="selectors.html">Селекторы</a>
            <a href="backgrounds.html">Фоны</a>
        </nav>
        <aside class="helpful_links">
            <ul>
                <h4 style="margin: 0;">Полезные ссылки</h4>
                <li><a href="https://www.w3.org/TR/CSS22/propidx.html" target="_blank" rel="noopener noreferrer" title="CSS стандарты">Стандарты CSS</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements" target="_blank" rel="noopener noreferrer" title="Справочник HTML тегов">Справочник HTML тегов</a></li>
                <li><a href="https://github.com/yoksel/common-words" target="_blank" rel="noopener noreferrer" title="Слова часто используемые в CSS-классах">Common CSS words</a></li>
                <li><a href="https://www.w3schools.com/html/html_colors.asp" target="_blank">HTML Colors</a><br></li>
                <li><a href="https://habr.com/ru/articles/189766/" target="_blank">Теория цвета в цифрах | Хабр</a><br></li>
                <li><a href="https://www.toptal.com/developers/css/sprite-generator/" target="_blank">Генератор спрайтов</a><br></li>
                <li><a href="http://simonenko.su/32197993404/use-css3-box-sizing" target="_blank" rel="noopener noreferrer">Используйте box-sizing</a><br></li>
            </ul>
        </aside>
        `;
    }
}

customElements.define('nav-bar', Navbar);