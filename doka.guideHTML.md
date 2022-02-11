# Конспект по HTML

HTML(HyperText Markup Language) - это язык разметки страницы.

В HTML Пристутствует множетсво различных тегов каждый со своими особенностями,
о них больше можно узнать на сайте [MDN](https://developer.mozilla.org/en-US/).

HTML теги по порядку включаемые в верстку:
##  1. начально используемые теги. 1

```html
<!DOCTYPE html><!--Тег обьясняющий браузеру как обработать старницу   --> 1
<html lang="ru"> <!-- открывает контейнер, в котором находится всё содержимое -->
  <head><!-- контейнер в который вписываются теги для браузера -->
    <meta charset="UTF-8"><!-- Данные говорящие как обрабатывать документ.  -->
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Дока</title><!-- указывает название страницы на вкладке  -->
    <link rel="stylesheet" href="/assets/styles/main.css"><!-- Указывает ссылку файл стилей, другиее файлы -->
  </head>
  <body></body><!--контейнер  котором распологается лейаут сайта.-->
</html>
```

## 2.теги делящие страницу на ее составные части (семантические).

```html
<!-- Шапка -->
<header>
  <nav> <!-- навигационный тег для меню -->
    <a href="#">Мои работы</a><!-- превращает текст в ссылку -->
    <a href="#">Мои навыки</a>
    <a href="#">Контакты</a>
  </nav>
</header>
<!-- Основная часть -->
<main>
  <h1>Портфолио Ольги Сасквоч</h1><!--h1-h6 заголовки разных уровней  -->
  <p>Добро пожаловать!</p><!-- тег для абзацев текста -->
  <p>Рада приветствовать вас на своём сайте...</p>
  <section><!-- блок для нотносящихся к основной части вещей -->
  <h1>Заголовок первого блока</h1>
  <p>Съешь ещё этих мягких французских булок, да выпей чаю.</p>
</section>
<aside><!-- для блока с дополнительным содержимым -->
   <div>Это боковая колонка!</div><!-- строительный блок сайта с контентом -->
</aside>
</main>
<!-- Подвал -->
<footer>
  <p>Ольга Сасквоч</p>
  <p>2021</p>
</footer>
```
 
## 3. В HTML есть деление на блоки сточные и блочные.  

Строчные:

```html
<p>Я здесь</p>
<p>Нет, <span>Я здесь</span></p><!-- спан для оборота части текста -->
<a href="№">какая то ссылка</a><!-- так же строчный -->
```

### Различие строчных и блочных.  
<details>
<summary>Их различие заключается в том что:</summary>  

Строчные теги имеют длину и ширину полностью привязанную к размеру контента в нем, в то время как у блочных тегов можно менять эти параметры. У строчных тегов нет вложенности кроме оборотов span в отличиет от блочных элементов.  

  Наглядные примеры:  
Код:

```html
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <style>
      .block{
      }
      .text{
         display: inline;
         width:150px;
         height:50px;
         background: red;
         text-align: center;
         padding-top:20px;
      }
   </style>
</head>
<body>
   <p class="text">ch<div class="block">Это блочный тегuuuuuuuuuuuuuuuuuuuuuuuuuu</div></p>
  
</body>
</html>

```  
## Результат:  

<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <style>
      .block{
      }
      .text{
         display: inline;
         width:150px;
         height:50px;
         background: red;
         text-align: center;
         padding-top:20px;
      }
   </style>
</head>
<body>
   <p class="text">ch<div class="block">Это блочный тегuuuuuuuuuuuuuuuuuuuuuuuuuu</div></p>
  
</body>
</html>

</details>

 
## 4. Разделительные теги.

+ Тег br/ 

```html
<p>
  Мой дядя самых честных правил,<br><!-- Тег используется для разделения текста -->
  Когда не в шутку занемог,<br>
  Он уважать себя заставил<br>
  И лучше выдумать не мог.
</p>
```

+ тег hr/  
  
```html
<p>Первый абзац</p>
<hr><!-- проводит горизонтальную черту так же ее размером можно управлять артибутом size -->
<p>Второй абзац</p>
```
___

<details>
<summary style="font-size:18px;"> Возможно полезные редкие теги</summary>    

Тег pre

```html

<pre aria-label="Изображение кота, собранное из текстовых символов.">
  ../\„„./\.
  .(='•'= ) .
  .(") „. (").
  . \,\„„/,/
  . │„„. „│
  . /„/„ \„\
  .(„)''l l''(„)
  . .. ((...
  . . . ))..
  . . .((..
</pre><!-- тег pre убирает схлопывание и разрешает переносы -->

```
   Тег sub
```html
<p>
  Вода — бинарное неорганическое
  соединение с химической
  формулой H<sub>2</sub>O<!-- заводит символ в нижний индекс -->
</p>
```  
Так же существует тег Sup заводящий верхний индекс

</details>  

___  

### Тег форматирования code

```html 
<pre><code><!-- для корректной работы тега обязательная вложенность в тег pre -->
  for(let i = 0; i < 10; i++){
    console.log(i)
  }
</code></pre>
```
### Механика работы тега code 

```html
<pre class="block-code font-theme font-theme--code" data-lang="html">
  <code class="block-code__highlight">
    <span class="token keyword">const</span>
    element
    <span class="token operator">=</span>
    <span class="token dom variable">document</span>
    <span class="token punctuation">.</span>
    <span class="token method function property-access">getElementById</span>
    <span class="token punctuation">(</span>
    <span class="token string">'#some-id'</span>
    <span class="token punctuation">)</span>
  </code>
</pre>
```
Что увидит пользователь
```JavaScript
const element = document.getElementById('#some-id')
```

---

# Формы

Тег form  

```html
<form action="" method="get"><!-- контейнер с его интерактивными частями,существует 2 метода get и post get- ответы вписываются в ссылку(для небольших форм), post- пакует данные и отправляет на сервер(для больших обьемов информации)  -->
  <p>
    <label for="name">Введите имя:</label><!-- для названия части формы, в атрибут вписывается атрибут name называемого обьекта -->
    <input type="text" name="name" id="name" required><!-- Тег для ввода информаци имеющий множество различных видов зависящих от атрибута type, атрибут required делает поле обязательным -->
  </p>
  <p>
    <label for="email">Введите email:</label>
    <input type="email" name="email" id="email" required>
  </p>
  <label for="story">Расскажите о себе:</label>
<textarea id="story" name="story" rows="5" cols="33"> Frontend-разработчик со стажем</textarea><!-- Поле для текста -->
  <button type="submit">Отправить</button><!-- Используется для создания кнопок, атрибут  type указывает как совладать с кнопкой -->
</form>
<!-- Форма с радиокнопками -->
<form action="" method="post">
<fieldset> <!-- группирует элементы формы -->
    <legend>Выберите прожарку</legend><!-- добовляет заголовок к fieldlist -->
    <label>
      <input type="radio" name="level">
      Rare
    </label>
    <label>
      <input type="radio" name="level"checked><!-- уже выбранная кнопка  -->
      Medium
    </label>
  </fieldset>
</form>
<form>
   <form>
  <label for="city-select">Ваш город</label>
   <select name="city" id="city-select"><!--создает выпадающий список  -->
    <option value="">-- Выберите город --</option><!--варианты выпадающего списка  -->
    <option value="petersburg">Санкт-Петербург</option>
  </select>
</form>
</form>
```
### Атрибуты

1. Autocomplete="on/off"
Создан для разрешения вставки запомненной браузером информации.
2. Novalidate - вставляется внутри тега form, разрешает браузеру не проверять верность заполнения.
3. Type основные значения.
   1. Для ввода: email, text, search, tel, password.
   2. Для кнопок sumbit(отправка), reset(отчистка).
   3. Для ввода дат: date, datime-local, month, week,time.
   4. Для элементов checkbox, radio, range, color, file.

# Вставка картинок 

```html
<img src="some.png" alt="сомепнг" loading="lazy"
    srcset="
      logo-small.png 320w,
      logo-medium.png 480w,
      logo-large.png 800w"
    sizes="
      (max-width: 320px) 280px,
      (max-width: 480px) 440px,
      800px"> <!--в атрибут alt вписывается текст выводящийся если картинка недоступна, атрибут loading со стандартным значением eager(немедленно),
      srcset добовляет адаптивности картинкам меняя их на более большие или маленькие версии, в sizes указываются медиазапросы -->

      <picture><!--используется когда нужны разные варианты картинок  -->
    <source srcset="320.jpg" media="(max-width: 800px)"><!--ссылка на картинку для меньшего разрешения, так же source как ссылка для других медиафайлов -->
  <img src="640.jpg" alt="Абстрактное изображение"><!--ссылка на картинку для любого разрешения до 800px-->
</picture>  

<!-- Практический пример тега picture -->
<picture>
  <!-- Картинка для тёмной темы -->
  <source srcset="image-dark.png" media="(prefers-color-scheme: dark)">
  <!-- Картинка по умолчанию для светлой темы -->
  <img src="image-light.png" alt="">
</picture>

<!-- svg - векторный формат графики  -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill-rule="evenodd"
  clip-rule="evenodd"
  viewBox="0 0 24 24"
>
  <path
    d="M16 12a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0
      114.001.001A2 2 0 0117 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0
      01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0110 12zm-8 0a3.001 3.001 0 016
      0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 013 12z"
  />
</svg>
```




