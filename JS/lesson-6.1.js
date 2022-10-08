'use strict';
console.log('this is lesson 6.1 ');
//add "id" to tag, by the setAttribute

const magicBtn = document.querySelector('.magic-btn');
//---Document object model - есть только в браузере
//---Browser object model - плюшки для работы с браузером и вкладкой в целом
// console.log(window); // - описывает окно, вкладки и все что в нем есть
// console.dir(document); // - описывает весь наш документ

// const navReference;

// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nav');
//     console.log(navEl);
//     const navItemEl = document.querySelectorAll('.site-nav .site-nav__item');
//     console.log(navItemEl);
// // });

//`````````````````````!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// magicBtn.addEventListener('click', () => {
//     const imgEl = document.querySelector('.hero__image');

//     // console.log(imgEl.alt);
//     imgEl.alt = 'Cat is beautiful';
//     // console.log(imgEl.alt);
//     imgEl.width = '240';

//     const heroTitleEl = document.querySelector('.hero__title');

//     // console.dir(heroTitleEl);
//     heroTitleEl.textContent = 'This is a cat';
//     heroTitleEl.style.fontSize = '43px';
// });

// const imgEl = document.querySelector('.hero__image');
// imgEl.removeAttribute('width');
// // console.log(imgEl.hasAttribute('src '));
// imgEl.width = '240';

// const actionsEl = document.querySelectorAll('.js-actions button');

// // actionsEl.addEventListener('click', () => {
// //     const btnAddEL = document.querySelector(
// //         '.js-actions button[data-action="add"]',
// //     );
// //     console.log(btnAddEL.dataset.action);
// // });
// console.log(actionsEl);
// console.log(actionsEl[1].dataset);
// console.log(actionsEl[1].dataset.action);
// console.log(actionsEl[1].getAttribute('data-action'));
// actionsEl[0].dataset.modal = 'open';
// console.log(actionsEl[0].dataset);

//``````````````````````````!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//1 разметка в HTML

// const magicBtn = document.querySelector('.js-magic-btn');

// const navEl = document.querySelector('.site-nav');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**ClassList
 * add(class)
 * remove(class)
 * toggle(class)
 * replace(oldClass, newClass)
 * contains(class) */
//У каждого элемента есть специальный интерфейс classList
// console.log(navEl.classList);

// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nav');
//     navEl.classList.add('js-site', 'super-cool');

//     navEl.classList.replace('js-site', 'js-site-nav');
//     navEl.classList.remove('super-cool');
// console.log(navEl.classList.contains('site-nav'));

// navEl.classList.toggle('site-nav__link--current');

// console.log(navEl);
// });

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const currentPageUrl = '/portfolio';
// const linkEl = document.querySelector(
//     `.site-nav__link[href="${currentPageUrl}"]`,
// ); //получился селектор атрибута для элемента с классом site-nav__link
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Навигация по DOM-узлам (взять список)

const navEl = document.querySelector('.site-nav');

// const firstNavItem = navEl.firstElementChild;
// const lastNavItem = navEl.lastElementChild;
// console.log(navEl.children[2]);
// console.log(lastNavItem);
// console.log(navEl.children.length - 1);
// console.log(navEl.children[navEl.children.length - 1]);
// console.log(navEl.children[2] === lastNavItem);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Создание элементов
//Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elements), prepend(...elements)

const titleEl = document.createElement('h1');
titleEl.textContent = 'This is my first title';
titleEl.classList.add('title-h1');
titleEl.dataset.modal = 'open';
const imgRef = document.createElement('img');
imgRef.classList = 'hero-img';
imgRef.alt = 'This is a cat';
imgRef.src =
    'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imgRef.width = 240;
// console.log(imgRef);

// console.log(titleEl);
// document.body.appendChild(titleEl);
const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
heroEl.append(titleEl, imgRef);
/*
 *создаем и добавляем новый пункт меню
 */

const navItemRef = document.createElement('li');
navItemRef.classList.add('site-nav__item');
navItemRef.style.color = 'red';

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'My room';
navLinkEl.href = '/room';

// console.log(navLinkEl);

navItemRef.appendChild(navLinkEl);

// console.log(navItemRef);

// const siteNavEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemRef);

const firstItemEl = document.querySelector('.site-nav__item');
// navEl.insertBefore(navItemRef, firstItemEl);
// navEl.insertBefore(navItemRef, document.querySelector('.site-nav__item'));
// navEl.insertBefore(navItemRef, navEl.children[0]);
// navEl.insertBefore(navItemRef, navEl.firstElementChild);
navEl.insertBefore(navItemRef, navEl.lastElementChild);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**
 * Создание коллекции элементов
 */

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];

/**
 * Пишем функцию для создания разметки
 */

// const option = colorPickerOptions[0];
const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.textContent = option.label;
//     buttonEl.classList.add('button');
//     buttonEl.style.backgroundColor = option.color;
//     buttonEl.style.marginLeft = '20px';
//     return buttonEl;
// });

// colorPickerContainerEl.append(...elements);

const makeColorPickerOptions = options => {
    return options.map(option => {
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.textContent = option.label;
        buttonEl.classList.add('button');
        buttonEl.style.backgroundColor = option.color;
        buttonEl.style.marginLeft = '20px';
        return buttonEl;
    });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);

/**
 * Создаем карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

const products = [
    {
        name: 'Soft',
        description: 'Другой текст',
        price: 3000,
        available: false,
        onSale: true,
    },
    {
        name: 'Server',
        description: 'Тут текст ',
        price: 2000,
        available: true,
        onSale: true,
    },
];
/**
 * <article class="product">
 *      <h2 class="product__name">Name</h2>
 *      <p class="product__description">Description</p>
 *      <p class="product__price">Price</p>
 * </article>
 */
const productContainerEl = ({ name, description, price }) => {
    const productRef = document.createElement('article');
    productRef.classList.add('product');

    const productTitleRef = document.createElement('h2');
    productTitleRef.classList.add('product__name');
    productTitleRef.textContent = name;

    const descriptionRef = document.createElement('p');
    descriptionRef.classList.add('product__description');
    descriptionRef.textContent = description;

    const priceRef = document.createElement('p');
    priceRef.classList.add('product__price');
    priceRef.textContent = `Price: ${price}`;

    productRef.append(productTitleRef, descriptionRef, priceRef);

    return productRef;
};

const productsEl = products.map(productContainerEl);

const containerRef = document.querySelector('.js-products');
containerRef.append(...productsEl);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**
 * Свойство innerHTML
 * чтение
 * разметка
 *
 */

const titleRef = document.querySelector('.title-innerHtml');
console.log(titleRef.textContent); // всю текстовую разметку
console.log(titleRef.innerHTML); //вся вложенная разметка в виде строки
// titleRef.innerHTML = '<a href="">This is link)))</a>';
// titleRef.innerHTML = '';

//innerHTML - применять только тогда, когда нужно очистить что-то, или заменить полностью

titleRef.insertAdjacentHTML(
    'beforeend',
    ' <a href="" class="title__link">This is link</a><br><span>TEXT</span>',
);

// console.log(titleRef);

//elem.insertAdjacentHTML() - если что-то добавить
//когда разметку создаем через строку, то к переменной нужно вешать имя Markup

/**    
        name: 'Soft',
        description:
            'Другой текст " Тут текст Lorem на очень много символов и всякой хрени" вот',
        price: 3000,
        available: false,
        onSale: true,
 */

const getProductTableRowMarkup = ({
    name,
    description,
    price,
    available,
    onSale,
}) => {
    return `
    <tr>
        <td>${name}</td>
        <td>${description}</td>
        <td>${price}</td>
        <td>${available}</td>
        <td>${onSale}</td>
    </tr>    
    `;
};

const getProductTableRow = products.map(getProductTableRowMarkup).join('');
console.log(getProductTableRow);

const markup = document.querySelector('.product-table');
markup.insertAdjacentHTML('beforeend', getProductTableRow);
