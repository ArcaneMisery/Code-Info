# Конспект по CSS
## Основы
## Блочная модель box model  
Идея заключается в том что каждый блок выглядит следующим образом  
    
![box-model](https://doka.guide/css/box-model/images/box-model-725w.webp)  

То бишь на каждый блок имеет:
1. ядро с контентом и значениями width и height;
2. отступ внутри блока но до контента padding;
3. обводку border 
4. внешний отступ margin.  
   
При работе с размерностью нужно учитывать каждое из указанных выше значений для качественного построения контента по шаблону.  
### Важно знать что по умолчанию отступы padding прибоваляются к значениям width и height.  
Чтобы отменить сложение всех свойств в одно воизбежание неприятных сюрпризов в верстке нужно использовать **box-sizing: border-box**, так же применять его следует ко всем возможным типам браузеров отдельными значениями.  
## Специфичность  
Специфичность это алгоритм по которому браузер решает какие стили применить к конкретному элементу.(Простыми словами если мы к одному элементу написали разные стили в разных обращениях применятся те обращение которых самое важное.)
Селекотры по убыванию специфичности(важности).
1. По индентификатору id;
2. Селекторы по классу, атрибуту, селекторы с псевдоклассами;
3. Селекторы по тегу, селекторы с псевдоэлементами;    
    
```css
#123{
   /* Самый весомый по айдишнику */
}
.myclass:hover{
/* класс с псевдоклассом */
}
placeholder{
   /* по атрибуту */
}
div::before{
   /* по тегу с псевдоэлементом */
}
```  
Так же существуют комбинаторы + > ~ обращение ко всем *, веса они не имеют.  
Каждый из приведенных трех выше типов наращивают уровень специфичности в порядке 0.0.0   
к примеру в коде выше если бы мы обращались к одному элементу мы бы получим общую специфичность как  
1.2.2. и по итогу победу одержал бы id ибо имеет наивысший класс важности.  
!important - перебивает все описанные выше законы применяя стили в любом случае.  
# Каскад  
Каскад это совокупность свойтств находящихся в определенной иерархии(сюда относятся и специфичность, и правило что последнее написано то и важнее, и область видимости, так же источник этих правил имеет обратную форму чем выше тем важнее).  
## Область видимости  
Суть в том что в если мы пишем в теге стиль, то его область видимости минимальна а если мы откроем отдельно style в html либо отдельным файлом то его видимость будет убывать с утачнениями body > div > p  и т.д.
## Наследование  
Это означает что у некоторых элементов есть значения по умолчанию либо если подробнее inherit- наследуемые с тех что по умолчанию, для этого мы должны их отменить в обнуляющем стиле  
## Контекст Наложения  
Это про то что есть еще вложенность, глубина, блоков наложение друг на друга при помощи тега position и z-index а так же вложенности в html.  

##  Принцип Pixel Perfect  
Принцип заключается в том что бы заверстать в точности до пикселя с макета документ.  
Однако порой им можно слегка, в нескольких моментах принебрегать в целях адаптива.(однако обычнов таких целях дизайнер создает по макету на каждое разрешение).  
## CSS правило  
Это блок в CSS коде с обращением и как минимум одним параметром и значением в нем в нем.  
```css
div{
   color: white;
}
```  
## Вендорные префиксы  
Это префиксы к параметрам, использующиеся в недоработанных правилах, говорит о том что то или иное свойство относится к определенному браузеру:
```css
-webkit-/*Safari,Chrome,opera15+ другие браузеры на движке webkit, blink  */
-moz-/*Firefox*/
-o-/*Opera12 и меньше*/
-ms-/*internet Explorer и Microsoft Edge 12-18*/  

/* Одно из самых частых применений это */
@-webkit-keyframes animation {
  0% { left: 0; }
  100% { left: 100%; }
}

@keyframes animation {
  0% { left: 0; }
  100% { left: 100%; }
}
```  
## Подключение стилей  
Можно подключать:
   1. В теге;
   2. Тегом style;
   3. С помощью импорта
   4. С помощью нового документа и тега link в контейнере head  
     
Плюс первого подхода: ускорение загрузки, не нужно писать обращения(селекторы), удобно отлаживать код.  

Минсы первого подхода: Приорететность у такого подхода отменять стили получится лишь тегом !important, прописывать их придется слишком много, нечитабельность и наваленность кода, нельзя применять псевдо-.  
<hr />
         
Плюс второго подхода это скорость загрузки, изолированность работы.  

Минус в том что чем больше таким образом написано кода тем больше вес html документа, тем дольше он загружается.  
<hr />  
Плюс третьего подхода это разбивание большого css файла на маленькие(применимо в больших проектах).  
Минус третьего подхода в замедлении загрузки страницы.  

<hr />  
Последний подход рекомендуется использовать всегда по умолчанию.  
  
# Селекторы  
Селекторы(обращения) бывают:
```css  
   div/*по тегу*/
   .class/*по классу */  
   #myid/*по интендификатору*/
   .news__card .text/*по потомку*/  
   */*обращается ко всем элементам не включая псевдоэлементы, для них можно прописать отдельно *::before*/
   div[data-]/*по атрибуту тега*/  
   h1, h2, .code span, #id, ul/*Комбинированные (тут со вложенностью span)*/  
   /*Так же соеденение селекторов (+) элемент справа от + должен следовать сразу за элементом слева от +(не рабортает со вложенностью)*/
   /* > переключение вложенности */
```  
<hr />  

##  Переменные
```css  
:root {
  --card-color: lightblue;
}  
  /*Задаем переменную в корне документа*/
.card{
  background-color: var(--card-color);
}  
/*Включаем фон карточки заданный ранеее в корне, теперь если мы будем менять значение в корне значение сразу изменится во всех местах с данной переменнной, */  

/*Механика работы заключается в том что браузер двигается вверх по иерархии элементов в поисках значения заданного свойства если где либо он находит это значение, он останавливает поиск, если же нет он продолжает поиск в плоть до :root и если не находит ставит значение initial*/  

/*Переменные супер сильно сокращают работу а так же с помощью их и джса можно делать всякие штуки на подобие темной темы, просто меняя цвета в переменных*/  
  
 /*Резервное значение*/
 .card {
  padding: var(--card-padding, 10px);/*после запятой указано резервное значение*/
}
.navigation {
  --translate: var(--my-translate, 10px, 10px);/*Задаем резервное значение, (--основнаяпеременная: var(--названиезапасной, значение))*/
  transform: translate(var(--translate));/*задаем основную и если браузер не найдет ее значение, применит запасное*/
}
/* Пример использования с изменением переменной */
.element {
  --gap: 20;
  margin-top: calc(var(--gap) * 1px);
} 
/* указание url */
:root {
  --url: url("https://example.com/example.jpg");
}

.element {
  background: var(--url);
}
/* url переменная сама по себе работать будет но в указании бекгрунда не сработает так как конструкция url воспринимает var как url */
```

# Псевдоклассы  
Псевдокласс - вид селектора который уточняет состояие.  
```css
:hover/*Говорит что правила применятся при наведении*/  
:link/*Для оформления стиля ссылок еще никогда не открытых*/
:visited/*Для оформления ссылок уже посещенных*/
:active/*В состоянии зажатой мышки на элементе*/
:first-child, :last-child, :nth-child()/*обращения к элементам в родительском обьекте. Так же в nth-child() кроме порядкового номера можно указать odd- все нечетные even - все четные */
:focus/*При наведение на элемент при помощи TAB или мышью*/
:not()/*Все кроме одного*/
/*Хорошо сокращает строки кода хороший пример использования*/
li:not(:last-child) {
  margin-bottom: 1em;
}
/* даем все лишкам отступ снизу кроме последнего, где он не нужен, теперь на не надо дополнительно убирать отступ у последнего ли */
:checked/*При отметке чекбокса и тд*/
:in-range:out-of-range/*Работает с css свойствами может быть очень полезно для придумывания пороля*/
/* Пример применения такого псевдокласса */
```
<details><summary>Пример</summary>  

```html
<input class="with-range" type="number" min="10" max="20" step="1">
```
```css
.with-range {
  border: 1px solid black;
}

.with-range:in-range {
  border-color: green;
  background-color: rgb(0 255 0 / 20%);
}

.with-range:out-of-range {
  border-color: red;
  background-color: rgb(255 0 0 / 20%);
}  
```  
  Результат
  <style>
     .with-range {
  border: 1px solid black;
}

.with-range:in-range {
  border-color: green;
  background-color: rgb(0 255 0 / 20%);
}

.with-range:out-of-range {
  border-color: red;
  background-color: rgb(255 0 0 / 20%);
}
  </style>
  <input class="with-range" type="number" min="10" max="20" step="1">

</details>  

```css  
:invalid:valid/*используется для отметки правильности/неправильности заполнения форм*/
/* Пример использования */
```
<details><summary>Пример</summary>  

```html  
<form>
  <div class="form-row">
    <label for="first-name">Имя:</label>
    <input type="text" name="first-name" id="first-name" required>
    <span class="validity-icon"></span>
  </div>
  <div class="form-row">
    <label for="email">E-mail:</label>
    <input type="email" name="email" id="email">
    <span class="validity-icon"></span>
  </div>
  <div class="form-row">
    <label>
      <input type="checkbox" name="agree" id="agree" required>
      Я согласен с политикой обработки персональных данных
    </label>
  </div>
  <div class="form-row">
    <button type="submit">Отправить</button>
  </div>
</form>

```  
```css  
input:invalid {
  border: 2px solid red;
}

input:invalid + .validity-icon::before {
  content: '✖';
  color: red;
}

input:valid + .validity-icon::before {
  content: '✓';
  color: green;
}

[type="checkbox"]:invalid {
  outline: 2px solid red;
  outline-offset: 2px;
}

```  
Результат  
<style>
input:invalid {
  border: 2px solid red;
}

input:invalid + .validity-icon::before {
  content: '✖';
  color: red;
}

input:valid + .validity-icon::before {
  content: '✓';
  color: green;
}

[type="checkbox"]:invalid {
  outline: 2px solid red;
  outline-offset: 2px;
}

</style>  
<form>
  <div class="form-row">
    <label for="first-name">Имя:</label>
    <input type="text" name="first-name" id="first-name" required>
    <span class="validity-icon"></span>
  </div>
  <div class="form-row">
    <label for="email">E-mail:</label>
    <input type="email" name="email" id="email">
    <span class="validity-icon"></span>
  </div>
  <div class="form-row">
    <label>
      <input type="checkbox" name="agree" id="agree" required>
      Я согласен с политикой обработки персональных данных
    </label>
  </div>
  <div class="form-row">
    <button type="submit">Отправить</button>
  </div>
</form>  

</details>  
  
```css  
:root {
   /*Задаем всему документу шрифт и 2 переменныею*/
  font-family: 'Oswald', sans-serif;
  --button-size: 40px;
  --main-color: #bada55;
   }/*Обращается к корневому тегу элемента - html позволяет задовать всему документу кастомные свойства */
   /*так же нужно не забывать что специфичность такого обращения выше чем про сто по тегу html*/
```  
<hr />  

# Псевдоэлементы
Псевдоэлементы это обращения создающие несуществующий в html элемент разметки управляемый лишь при помощи css.  

```css
.element::before/*Создает контент до элемента к которому идет обращение*/
.element::after/*Создает контент после элемента к которому идет обращение*/  
.element::before::after{
   content: ' ' /*Такое свойство обязательно должно присутствовать*/
}
``` 
 
<details><summary>Пример подключения анимации через псевдоэлементы</summary>  

```html
<a href="#" class="link">выбери меня</a>
```  

```css
.link {
  position: relative;
}

.link::before,
.link::after {
  content: "";
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all 0.6s;
}

.link::before {
  top: 0;
  left: 0;
  border-top: 6px solid #000000;
  border-left: 6px solid #000000;
}

.link::after {
  bottom: 0;
  right: 0;
  border-bottom: 6px solid #000000;
  border-right: 6px solid #000000;
}

.link:hover::before,
.link:hover::after {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
```  
Результат  

<style>
.link {
  position: relative;
  display: block;
  width: 100px;
}

.link::before,
.link::after {
  content: "";
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all 0.6s;
}

.link::before {
  top: 0;
  left: 0;
  border-top: 6px solid #000000;
  border-left: 6px solid #000000;
}

.link::after {
  bottom: 0;
  right: 0;
  border-bottom: 6px solid #000000;
  border-right: 6px solid #000000;
}

.link:hover::before,
.link:hover::after {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}

</style>
<a href="#" class="link">выбери меня</a>

</details>

```css
::first-letter/*Выбирает первую букву первой строки блочного элемента*/
::first-line/*Выбирает первую строку бочного или внутри блочного элемента*/
```  
<hr />  

# Функции  
```css
.myclass{
   attr(atribute)
}
/* Позволяет получать значение любого атрибута тега, целесообразно использовать:*/
a::before{
   content:'attr(class)'
}  
calc() /*калькулятор в css*/
div{
   height: 70px;
   width: calc(100% / 3);
   margin-top: calc(50% - 70px);  
}  
linear-gradient()/*Используется для создания фона в виде градиента*/  
.element {
  background-image: linear-gradient(#2E9AFF, #F498AD);/*Самый простой вид градиента*/
}
/* Точки остановки цвета, после запятой можно указывать длину плавности перехода цвета, если точка конца и начала у цветов совпадают то линия будет четкой */
.element {
  background-image: linear-gradient(#F498AD 25%, #2E9AFF 25% 50%, #FFD829 75%);
}
```  
<details><summary>Результат</summary>  

<style>
   .element {
      min-width: 400px;
      min-height:200px;
  background-image: linear-gradient(#F498AD 25%, #2E9AFF 25% 50%, #FFD829 75%);
}
</style>  

<div class="element"></div>

</details>  

```css
/* Направление градиента */
.element1{
   background-image: linear-gradient(-30deg, #2E9AFF, #F498AD);
   /* Мы можем задавать направление градиента, используя ключевые слова с приставкой to: to left, to top, to right. */
}
.element2{
   background-image: repeating-linear-gradient( #2e4aff, #56aa34)
}/*Повторяющийся градиент*/
.element3{
       background: linear-gradient( 217deg, rgb(46 154 255 / 1), rgb(255 100 100 / 0) 70.71% ), linear-gradient( 127deg, rgb(244 152 173 / 1), rgb(100 255 100 / 0) 70.71% ), linear-gradient( 336deg, rgb(255 216 41 / 1), rgb(100 100 255 / 0) 70.71% );
       /* Множественный градиент */
}
```
<details><summary>Результат последнего градиента</summary>  

<style>
.element2 {
    width: 65%;
    height: 200px;
    background: linear-gradient( 217deg, rgb(46 154 255 / 1), rgb(255 100 100 / 0) 70.71% ), linear-gradient( 127deg, rgb(244 152 173 / 1), rgb(100 255 100 / 0) 70.71% ), linear-gradient( 336deg, rgb(255 216 41 / 1), rgb(100 100 255 / 0) 70.71% );
</style>  
<div class="element2"></div>

</details>  

```css
/*Круговой градиент задается в зависимости от значений circle и ellipse*/
.element {
  background-image: radial-gradient(circle, #09ff00, red);
}
.element {
  background-image: conic-gradient(#3590eb, #ee82cf);
}
/*В таком градиенте цвета вращаются вокруг центральной точки элемента, напоминая ход часов*/  

var()
/*Заводим в переменную стиль и применяем его на кнопке, так же если мы изменим цвет в переменной цвет в кнопке тут же изменится*/
:root {
   --color-cyan: #00fff; 
}

.button {
   background-color: var( --color-cyan);
}
.element{
   filter: opacity(0.3);
   /*Создает фильтр со свойством в нем как бы по итогу пропуская чере него элемент, можно перечислять несколько фильтров через пробел*/
}
/* CSS Transform */
.element{
   transform: ;
}
.element {
   transform: translate (x, y);
}/*сдвигает обьект по осям x y */
/* применение для центрирования обьекта любой ширины */
.element{
   transform: translate(-50%, 0);
   position: relative;
   left: 50%;
   /*Мы зацентрировали обьект по горзантали*/
   /*Важно помнить что translate использует проценты исходя из размеров блока*/
}
transform: scale(x, y);/*увеличит обьект как будто через лупу, единицы между 0 и 1 будут уменьшать обьект, а отрицательные значения зеркально разворачивать обьект по одной из осей */
Transform: rotate( 0deg);/* Разворачивает обьект на заданное кол во градусов обьект*/
Transform: skew( 0deg, 0deg);/*Ворочает обьект по разным углам одновременно*/
Transform: matrix(Масштаб по горзонтали, деформация по вертекали, деформация по горизонтали, масштаб по вертикали, смещение x, смещение y);/*Вписывает все свойства в одно анимационное движение*/
Transform-origin:center/top left/45px 20px/ 0 0;/*смещает центр происхождения трансформации*/
/* 3D трансформация */  
prespective-origin/*Работает так же как и ориджин в 2д трансформе*/
prespective: 321px;/* сместить обект назад в глубину с 3д эффектом*/
Transform: translate3D(x, y, z);
Transform: rotate3D(x, y, z, deg);/*3d разврот обьекта*/
/* Так же можно просто через запятую перечислить трансформационные свойства в универсальном свойстве Translate */
Transform-style: flat/preserve 3d;
backface-visibility: visible/hidden;/*Скрывает заднюю часть обьекста с помощью такого свойста можно перевернуть блок и как бы показать его заднюю часть*/
/* ----------------------------------------------------------------------- */
```  
# Директивы  

```css
@font-face {
  font-family: "Lexend Peta Regular";
  src: local("Lexend Peta Regular"),
    local("LexendPeta-Regular"),
    url("Lexend Peta-webfont.woff2") format("woff2"),
    url("Lexend Peta-webfont.woff") format("woff"),
    url("Lexend Peta-webfont.svg") format("svg");
}
/* Подключение шрифта */
@import "fonts.css";
@import "buttons.css";
@import url("https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap");
/* Импорт сисс кода и шрифта*/
@keyframes circle-to-square {
  from {
    border-radius: 50%;
    background-color: red;
  }
  to {
    border-radius: 0;
    background-color: blue;
  }
}
/*Создание анимационных кадров не забывать про 2 ключевых слова from, to */  
@media (min-width: 900px) {
  .block {
    display: flex;
  }
}
/* медиазапросы используются для решения задач адаптив и из них можно получать различную информацию о устройстве с которого сделан вход на сайт */
@supports (--foo: bar) {
  .block {
    color: var(--color);
  }
}
/* Проверяет поддерживает ли браузер данное свойство, можно использовать not() и таким образом добится замены кода если свойство не поддерживается браузером */  
/* ----------------------------------------------------------------------- */
```
# Единицы измерения  
```css
px
vh/*относительно высоты вьюпорта*/
vw/*относительно ширины вьюпорта*/
em/*относительно размера шрифта*/
rem/*относительна размера шрифта указанного в корне*/
/* В единицах rem сейчас верстается адаптив для мобилок и в принципе такие единицы часто применяются в верстке*/

html {
  /* 10px */
  font-size: 62.5%;/*указываем корневой размер шрифта*/
}

.title-block {
  /* 10rem * 10px = 100px */
  width: 10rem; /*устанавливаем зависимость шрифта и ширины блока*/
  /* 2rem * 10px = 20px */
  font-size: 2rem;/*указываем шрифт*/
}

@media (max-width: 640px) {
  html {
    /* 8px */
    font-size: 50%;/*создаем адаптивный медиазапрос*/
  }
}
```  
# Анимации

```css
/* для использования анимации мы должн использовать @keyframes описанные выше  */
Animation-name: (имя ключевых кадров),(имя ключевых кадров);
Animation-duration: 2s, 2s; /*время длительности анимаци*/
аnimation-timing-function: ease/linear/;/*устанавливает тип анимаций*/
animation-interation-count:3(infinite);/*указывает сколько раз проиграется анимация*/
animation-direction/*Определяет как двигается анимация*/
animation-play-state: paused;/*приостанавливает анимацию*/
animation-delay:; /*задержка перед анимацией*/
animation-fill-mode /*Определяет значения в конце анимации*/
/* Универсальное св-во animation */
animation:(name), (duration), (timing-function), (count), (direction), (delay), (fill-mode);


```
<a href="https://fls.guru/cssanimation.html" style="font-size:20px;">Шпаргалка по css анимациям</a>  

```css
/* TRANSITIONS */
transition-duration: ; /*Время перехода*/
transition-property: all/(нужное свойство); /*Устанавливает на какое из значений будут работать свойства transition*/
/* Универсальное свойство transition*/
transition:(property), (duration), (timing-function), (delay);
```
<a href="https://fls.guru/csstransition.html" style="font-size:20px;">Шпаргалка по css Транзишн переходам</a>  

# Background

```css
div {
  background: #000000 url("bkg.png") no-repeat center / cover;
}
/* универсальное свойство bg цвет, картника, повторность картинки, позиционирование, маштабирование по всей области родителя */
background-size: contain/cover;
/* cover для нормального маштабирования картинок */
```
<a href="hhttps://fls.guru/cssbackground.html" style="font-size:20px;">Шпаргалка по css BACKGROUND</a>  

# Позиционированние  

```css
position:relative, absolute, fixed, sticky;
/* relative открывает для элемента дополнительные возможности смещения left right top bottom а так становится позиционным родителем для вложенных в него блоков*/

/* absolute как будто вырывает из кода элемент распологая его поверх остальных на странице, если у родителя прописан relative то абсолютное позиционнирование будет относительно родителя, тогда как по умолчанию относительно документа.*/

/* fixed позиционирует элемент относительно окна браузера либо ближайшего родителя с прокруткой как и position absolute но прокрутить такой элемент не удастся */

/* sticky превращается из положения static в  fixed и прилипает к прокрутке так же при скролле каждый следующий блок sticky накроет предыдущий*/
``` 
```css
z-index - определяет порядок наложения спозицоннированных элементов
/* Пример использования - наложения полупрозраной темы через псведоэлемент ::after на фоновую картинку*/
```

<a href="https://fls.guru/cssposition.html" style="font-size:20px;">Шпаргалка по css POSITION</a> 

# Полезные теги для текста  

```css
/*Тег который регулирует перенос строк т.е. пробелы между ними и другие скрытые символы*/
white-space: normal/nowrap/pre/pre-wrap/pre-line/break-spaces;
```
Normal:
```html
<p>
  Однажды,    <!-- Перенос строки -->
  в студёную    <!-- Перенос строки -->
  зимнюю    <!-- Перенос строки -->
  пору
</p>
<p>Я     из     лесу    вышел;</p>
```
Результат:  
<p>
  Однажды,    <!-- Перенос строки -->
  в студёную    <!-- Перенос строки -->
  зимнюю    <!-- Перенос строки -->
  пору
</p>
<p>Я     из     лесу    вышел;</p>  

Это значит что по умолчанию форматирование заданное в html не работает.  
```css
white-space: nowrap;
/*Отменяет все переносы текста помещая все в одну строку, так же забывает про границы элемента*/
white-space: pre;
/*Сохраняет все форматирование в html, так же текст может выйти за границы элемента*/
white-space: pre-wrap;
/* В откличие от pre текст автоматически переносится достигая границ элемента */
white-sace: pre-line;
/*Подряд идущие пробелы схлопываются но все остальное остается, текст у границ автоматически переносится*/
white-space: break-spaces;
/*Работает аналогично pre-wrap однако пробелы не остаются в строчке, а дополняют точку до границы элемента и преносятся на следующую строку*/
```  
```css
word-wrap:normal/break-word;
word-wrap: normal;
/*По умолчанию слово не переносится */
word-wrap: break-word;
/*Слово переносится на любой букве при достижении края блока*/
```
```css
text-indent: 0.5rem;
/* Задаст отступ для первой троки(Красной) */
```
```css
p {
  text-overflow: ellipsis/clip;
  /* Указывает как будет выполнятся обрезка текста, работает только в купе с white-space: nowrap; и overflow: scroll/hidden/auto; */
  white-space: nowrap;
  overflow: hidden;
}
/* Elipsi задаст троеточее в конце обрезки, clip обрежет текст ровно у края родителя */
```
```css
letter-spacing: 0.1rem;
/* Устанавливает пробел между буквами */
word-spacing: 0.2rem;
/*Устанавливает ширину пробела между словами и тегами*/
```  

# Размерность и отступы  

```css
min-width,max-width-
/*Для решения задач адаптивности*/
/*Удобно указывать ширины в процентах*/
/*height работает ровно так же*/
margin: 0 auto;
/*равняет по горизонтальному центру*/
padding - внутренний отступ
/* можно саписать как */
padding: top, right, bottom, left;
/* либо */
padding-top/padding-bottom и тд...
/*У вертикальных отступов нет проблемы схлопывания как у margin*/
/*Пример реализации адаптива через padding*/
/*Адаптивная картинка*/
```
```html
<div class="box-image"></div>
```
```css
.box-image{
  width:100%;
  background-image: url('../dsadsa') no-repeat center / contain;
  padding: 56.25%;
}
/* теперь картинка будет всегда в формате 16:9 и менятся в месте с шириной родителя*/
/* 16:9	56.25%
   4:3	75%
   3:2	66.66%
   8:5	62.5% */
/* Другие разрешения */

margin
/* его написание идентично, контролирует внешний отступ */
/* не забывать про box-sizing описанный в начале */
```  
## Списки  
```css
ul {
  list-style-image: url("rocket.svg");
}
/*Добовляет вместо маркера картинку хорошо применимо для какой либо легкой подстановки картинки без ее позиционирования так же можно через hover сделать прикольную их смену */
```
# Flexbox   

```css
/*Для того чтобы пользоваться флексом мы должны а создать див кфлекс контейнер, б вложить в контрейнер блоки которые будут элементами флекса*/
/*как пишестся*/
display: flex;
/* изначально флекс элементы растянутся по всей ширине флекс контейнера и выстраются сверху*/
flex-direction: row/column/reverse;
/* задает тип того как расположаться элементы в контейнере row - ряд column в колонку(уместно для того чтобы прижать футер либо чтобы зацентрировать что либо) row/column-reverse выстроит блоки задом наперед*/
flex-wrap: nowrap/ wrap/ wrap-reverse;
/*убирает либо добавляет перенос флекс жлементов при нехватке места в контейнере, wrap-reverse элементы сначало заполняют нижний ряд а все остальное переносится на верх*/
justify-content: space-between/space-around/flex-start/flex-end/center;
/*важно помнить что все эти значения не добовляют отступы а лишь создают пространство между флекс элементами и могу спокойно двигаться друг к другу при уменьшении ширины контейнера*/
align-items: center/stretch/baseline/flex-start(end);
/*Управляет расположением контента по высоте, stretch - колонки растягиваются та чтобы заполнить всего родителя, baseline - по линии текста*/
.flex-item{order: 0/2/3;}
/* при помощи такого свойства можно менять порядок вывода флекс элементов */
.flex-item{flex-grow:1/0;}
/* 1-да,0-нет, отвечает за то может ли элмент занять как можно больше ширины контейнера или нет*/
.flex-item{flex-shrink:0/1;}
/*Отвечает за то как сильно будет уменьшатся флекс элемент при нехватке места для других флекс элементов*/
.flex-item{flex-basis: 321px/auto;}
/*отвечает за базовы минимальный размер флекс элемента*/
/* все можно написать одним универсальным свойством flex*/
flex:grow,shrink,basis;
.flex-container{
  gap: 1px 1px;
}
/*Gap задает отступы на элементах флесков, первое значение верх и низ, второе значение право и лево*/
```
## !important

```css
.header{
  color: green !important;
}
/*теперь стиль применится не смотря ни на что но делать такое можно только в самых крайних случаях(в нормальной верстке вообще такое использовать скорее не следует)*/
/* Используется такое в изменении старых сайтов, в создании браузерных расширений сайта */
/* Перебивка !important */
/* чтобы перебить импортант мы должны набрать специфичность выше простого импортанта вот пример */
#main-title span {
  font-size: 20px !important;
}
/* таким образом мы перебьем специфичность других обращений */
```  
# Общие правила  
```css
overflow: auto/visible/hidden/scroll;
/* отвечает за то как будет вести себя блок который переполнен контентом*/
float: right/left/none;  
/* обтекание текстом */
```
# Работа с изображениями

```css
object-fit: cover/contain/fill/none;
/*cover- картинка без нарушений пропорций заполнит всю область, обрезая все ненужное*/
/* contain - картинка подстроится под размеры так чтобы вместиться целиком не нарушая заданных пропорций*/
/* fill - картинка вписывается целиком без соблюдения своих пропорций*/
/* Такое правило с его основным значением cover придумано для того чтобы 1. картинки хорошо смотрелись на всех разрешениях 2.для вставки картинок просто не подходящих под размеры коробки*/
/*Так же этим правилом можно управлять заставкой в теге <video>*/
object-position: 20px, top;
/*управляет положением картинки в блоке*/
/* не работает без object-fit */
```
# Рамки, обводки, тени
```css
broder:width, type, color;
/*Универсальное свойство рамки*/
border-radius: 2px/50%;
/*обрезка углов рамки*/
/*Помнить что работает и без указания broder а так же при 50% мы получим круг*/
border-image: url();
/*Всятвляет картинку вместо простой заливки border*/
outline:px, type,color;
/*работает так же как бордер в общих чертах но не считается в ширину и высоту элемента , не ломая верстку */ 

 ```  
## box-shadow
 ```css                                 
.button {
  box-shadow: -15px 15px 0 0 #ED6742;
}
```
**Каждая тень состоит из:**  
   - от 2 до 4 размерных значений
     - Если задано 2 значения то смещение тени по осям x, y
     - Третье значение - радиус размытия
     - Четвертое значение радиус распространения
   - Дополнительно можно указать свойство inset которое превратит внешнюю тень во внутреннюю
   - Указывается цвет тени (будет работать и без него).  

Пример использования двух теней:  
<style>
  .button {
    width: 100px;
    height: 50px;
  box-shadow:
    0 5px 10px gray,
    -5px -10px 20px pink;
    border-radius:5px;
    text-align: center;
}
</style>
<div class="button">This button</div>  


<details><summary>Еще сложные примеры теней</summary>

```html
<button class="btn">Зажми</button>
```  
```css
.btn {
  box-shadow:
    5px 5px 10px #c9c9c9,
    inset -5px -5px 8px -4px #c9c9c9,
    -5px -5px 10px #fdfdfd,
    inset 5px 5px 8px -4px #fdfdfd;
}

.btn:active {
  box-shadow:
    5px 5px 10px #c9c9c9,
    inset -5px -5px 8px -4px #c9c9c9,
    inset -6px -6px 8px 0 #fdfdfd,
    -5px -5px 10px #fdfdfd,
    inset 5px 5px 8px -4px #fdfdfd,
    inset 6px 6px 8px 0 #c9c9c9;
}
```  
<style>
.body{
    background-color: #e6e6e6;
    width: 200px;
    height: 100px;
}
.btn {
    margin:15px 0 0 50px;
    padding: 15px 20px;
    border: none;
    border-radius: 25px;
    color: #979797;
    background-color: transparent;
    cursor: pointer;
    box-shadow: 5px 5px 10px #c9c9c9, inset -5px -5px 8px -4px #c9c9c9, -5px -5px 10px #fdfdfd, inset 5px 5px 8px -4px #fdfdfd;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 100;
    user-select: none;
}

.btn:active {
  box-shadow:
    5px 5px 10px #c9c9c9,
    inset -5px -5px 8px -4px #c9c9c9,
    inset -6px -6px 8px 0 #fdfdfd,
    -5px -5px 10px #fdfdfd,
    inset 5px 5px 8px -4px #fdfdfd,
    inset 6px 6px 8px 0 #c9c9c9;
</style>
<div class="body">
<button class="btn">Зажми</button>  
</div>

</details>  

## text-shadow  
```css
text-shadow: 5px 5px #ffe2e7;
```
Каждая тень состоит из:
  - От 2 до 3 размерных значений
    - Если задано 2 то это смещение по x,y.
    - Третье значение - размытие тени
  - Цвет тени  

# Интерфес и взаимодействия
```css

cursor: url(cat.png) 2 2, default;
/*cursor:url(картинка), смещение вниз, смещение вправо, значение которое применится если не будет работать картинка.*/
/*координаты могут быть только положительные и их обязательно 2*/
/*Другие значения:*/
/*default - обычная стрелка, pointer - палец над ссылками, none, и т.д.(еще есть очень много значений курсора)*/
pointer-events: none/auto;
/*отвечает за то будет ли мышь реагировать на любые события(вплолть до копирования текста)*/
scroll-behavior: smooth/auto;
/*Отвечает за плавность прокрутки внутри блока(плохо работает в safari)*/
scroll-padding-top-right-bottom-left
/*Управляет отступом полосы прокрутки, схоже с функцией в js с pageYOffset*/  

caret-color: #cc0000; 
/*позволяет менять цвет курсора ввода*/
/*Можно с его помощью сделать подобную интересную штуку*/
```
<details><summary>Интересная штука</summary>  

```html
<input type="text" class="rainbow">
```
```css
@keyframes rainbow {
  0% { caret-color: red; }
  20% { caret-color: orange; }
  40% { caret-color: yellow; }
  60% { caret-color: green; }
  80% { caret-color: blue; }
  100% { caret-color: purple; }
}

input {
  display: block;
  width: 60vw;
  height: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  caret-color: red;
  background: rgb(255 255 255 / .1);
  color: #eee;
  border-radius: 1rem;
  border: 2px dotted rgb(255 255 255 / .1);
}

input:focus {
  animation: 3s infinite rainbow;
}
``` 
Результат  
  
<style>
  @keyframes rainbow {
  0% { caret-color: red; }
  20% { caret-color: orange; }
  40% { caret-color: yellow; }
  60% { caret-color: green; }
  80% { caret-color: blue; }
  100% { caret-color: purple; }
}

.rainbow {
  display: block;
  width: 60vw;
  height: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  caret-color: red;
  background: rgb(255 255 255 / .1);
  color: #eee;
  border-radius: 1rem;
  border: 2px dotted rgb(255 255 255 / .1);
}

.rainbow:focus {
  animation: 3s infinite rainbow;
}
</style>
<input type="text" class="rainbow">  


</details>   
## overflow-wrap
Для переносов лучше всего использовать text-overflow: break-world, т.к. одновременно переносит обычные слова как word-wrap: normal, и ломает длинные строки.
