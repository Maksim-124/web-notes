class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            nav {
            display: flex;
            justify-content: center;
            
        }

            nav ul {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                list-style: none;
                margin: 10px;
                padding: 0;
            }

            nav ul li {
                margin: 0;
                padding: 0;
                }

            .helpful_links ul {
                display: grid;
                grid-template-columns: 1fr 3fr;
                column-gap: 10px;
            }
            .helpful_links li {
                margin-bottom: 10px;
        </style>
        <nav>
            <ul>
                <li><a href="index.html">Конспект «Структура HTML-документа»</a></li>
                <li><a href="mnemonical.html">Мнемонический словарь</a></li>
                <li><a href="textmarkup.html">Разметка текста</a></li>
                <li><a href="linksandimages.html">Ссылки и изображения</a></li>
                <li><a href="css.html">Конспект: основы CSS</a></li>
                <li><a href="text-formatting.html">Конспект «Оформление текста»</a></li>
                <li><a href="selectors.html">Селекторы</a></li>
                <li><a href="backgrounds.html">Фоны</a></li>
                <li><a href="block-model.html">Блочная модель</a></li>
                <li><a href="grid.html">Гриды</a></li>
                <li><a href="microgrids.html">Микро-сетки</a></li>
                <li><a href="checklist-styling-guide.html">Чек-лист по стилизации</a></li>
            </ul>
        </nav>
        <aside class="helpful_links">
            <h4 style="margin: 0;">Полезные ссылки</h4>
            <ul class="helpful_links-list">
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