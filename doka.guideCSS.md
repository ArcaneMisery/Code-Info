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
Суть в том что в если мы пишем в теге стиль, то его область видимости минимальна а если мы откроем отдельно style в html либо отдельным файлом  
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
Это префиксы к параметрам, использующиеся в недоработанных, говорит о том что то или иное свойство относитя к определенному браузеру:
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
Последний подход рекомендуется использовать всего по умолчанию.  
  
# Селекторы  
Селекторы(обращения) бывают:
```css  
   div/*по тегу*/
   .class/*по классу */  
   #myid/*по интендификатору*/
   .news__card .text/*по потомку*/  
   */*обращается ко всем жлементам не включая псевдоэлементы, для них можно прописать отдельно *::before*/
   div[data-]/*по атрибуту тега*/  
   h1, h2, .code span, #id, ul/*Комбинированные (тут со вложенностью span)*/  
   /*Так же соеденение селекторов (+) элемент справа от + должен следовать сразу за элементом слева от +(не рабортает со вложенностью)*/
   /* > переключение вложенности */
```  
<hr />  

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
/* Позволяет получать значение любо */
```