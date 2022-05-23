# React  
Реакт Это фреймворк библиотека для создания пользовательских интерфейсов  
Реакт независим от браузера.  
 - ### Multi page aplication Концепция создания сайтов путем добавления разных html файлов и использованием спец ссылок для перехода на них, загружая каждый раз занаво весь html код  
   - Долгая не всегда нужная подгрузка, сложность изменения контента, простота понимания и написания. 
- ### Single page aplication Это концепция а которой для реализации сайта используется один html файл index.html в котором есть лишь теги html head body а вся олстальная разметка как правило приходит из js`а
  - Большая и долгая первичная загрузка(отрисовка),Быстрая последущая подгрузка, гибкость изменения контента  
  
## React - компонентный подход 
Это реакт подход характеризующий созданием разного рода блоков информации(интерактивных в том числе), и позже как из кирпичиков формируя ими интерфейс  
## React DOM дерево  
Реакт предоставляет на замену стандартного DOM дерева более легковесное **ДЕРЕВО РЕАКТ ЭЛЕМЕНТОВ**   
Дерево реакт элементов - строится исходя из добавленных элементов и реального дом дерева.  
Основное разичие кроме легковесности двух деревьев заключаетсяв  том что в реакте после изменения элемента не требуется ничего вручную обновлять, реакт сам всегда возвращает актуальную информацию и состояние.  
Под копотом все работает в 2 стадии 
1. **Согласование** В каких то узлах реакт дерева происходят изменения, реакт отстраивает новое дерево элементов с изменёнными значениями, и сравнивает это реакт дерево с предыдущим За эту часть отвечает React CORE 
2. **Визуализация(отрисовка, react native, render)** После нахождения разницы, разница переходит в реальный DOM страницы, при этом для каждого изменения реакт вносит приоритетность - более приоритетные отрисовываются быстрее чем менее приоритетные.    
# Разработка Сайта в контексте React  
Реакт позволяет писать разметку прямо в js файле, такой синтаксис называется jsx  
```javascript
import React from 'react';
import reactDom from 'react-dom';
import App from './App';

reactDom.render(
  <div>
  sometext
  <button>React</button>
  </div>,
  document.getElementById('root')
)
```  
Пример создания элемента (кнопки)  с событием без использования синтаксиса jsx
```javascript
reactDom.render(
  React.createElement('button', {
    onClick: () => console.log('CLICK') 
  }, 'click on me'),
)
```
Простая функция счётчика
```javascript
import React from 'react';
funcion App(){
  let likes = 0;
  return (
    <div className = "App">
        <h1>{likes}</h1> // занося в обьектные скобки можно использовать переменные в теге
      <button onClick = {() => likes += 1}>Increment</button>
      <button onClick = {() => likes -= 1}>Decre ment</button>
    </div>
  );
}
```
Но функция не будет работать до конца так как страница не будет обновлять свое значение , для этого существует  
## State - состояние  
это отражение текущего состояния компонента  

```javascript
import React , {usestate} from 'react'; 
funcion App(){
  const [likes, setlikes] = useState(0);
  console.log(count, setCount)
  function increment () {
    setLikes(likes += 1);
  };

  function decrement () {
    setLikes(likes -= 1)
  }
  return (
    <div className = "App">
        <h1>{likes}</h1> // занося в обьектные скобки можно использовать переменные в теге
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
      // Внимание функции не нужно вызывать самостоятельно достаточно передать ссылкой
    </div>
  );
}
```
Связавание инпута в реакте
```javascript
import React , {usestate} from 'react'; 
funcion App(){
  const [value, setValue] = useState('TEXT IN INPUT');
  return (
    <h1>{value}</h1>
    <input type = "text" value = {value} onChange = {event => setValue(event.target.value)}/> 
  );
}
```
Такой приём называется двусторонним связываением, функцией onChange достаётся значение из input(event.target.value) и обновляется state и позже значение в заголовке, значение в инпуте всегда совпадают со стейтом  
## Создание компонентов  
Для того чтобы создать компонент нужно 
1. создать папку в которой будут содержаться все компоненты  
2. создать файл в котором будет лежать компонент с разширением jsx  
3. сам компонент  
```javascript
import React from 'react';
const Counter = function () {
  const [count, setCount] = useState(0);

    function increment () {
    setCount(count += 1);
  };

  function decrement () {
    setCount(count -= 1)
  }
  return (
    <div>
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
    </div>
  )
}
export default Counter;
// обратно в веб  
import React from 'react';
import Counter from "./components/Counter";

function App () {
  return (
    <div className = "App">
      <Counter/>
    <div>
  )

}
export default App;
```  
## React хуки  

  
   

