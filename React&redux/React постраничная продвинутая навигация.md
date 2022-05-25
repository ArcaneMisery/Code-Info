# Реализация навигации в контексте React
## React Router
Это react библиотека работает как для web так и для react, предназначена для управления роутингом(навигацией в браузере) 
npm install react-router-dom
## реализация
Создаём папку в корне - pages - содержит в себе компоненты - страницы.  
Создаём новые jsx страницы
Туда же перенесём код из App.jsx
```jsx
// теперь там где были посты будет логика навигации
// При переносе нужно поменять ссылки в импорте той самой кучи хуков в приложении иначе будет ошибка на всю страницу
import {BrowserRouter, Link, Route, } from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
    <div classname = "navbar"> // навигационная панель
       // если использовать обычные ahref ссылки страница будет обновлятся при каждом переходе что ломает подход, воизбежание использовать Link из роут библиотеки, а весто ahref - пропс to = ''
       <Link to="/about">О сайте</Link>
       <Link to = "/posts">Посты</Link>
    </div>
      <Route path = "/about">
        <About/>
      </Route>
      <Route path = "/posts">
        <Posts/>
      </Route>
    </BrowserRouter>
  )

}
```
Перенесем navbar в компонент
```jsx
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div classname = "navbar"> // навигационная панель
       // если использовать обычные ahref ссылки страница будет обновлятся при каждом переходе что ломает подход, воизбежание использовать Link из роут библиотеки, а весто ahref - пропс to = ''
       <Link to="/about">О сайте</Link>
       <Link to = "/posts">Посты</Link>
    </div>
  )
}
export default Navbar
```
Вернемся обратно в приложение и опишем кейс если страницы не существует
```jsx
import {BrowserRouter, Link, Switch ,Route, Redirect} from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch> // конструкция использется как выборка из путей, но если ни один из них не отработал можно создать какой либо случай redirect
          <Route path = "/about">
            <About/>
          </Route>
          <Route path = "/posts">
            <Posts/>
          </Route>
          <Redirect to = 'Error' />
          // добавляется в конце switch переводит если страница не существует 
          </ Error> // предварительна созданная в компонентной pages страница с ошибкой
        </Switch>
    </BrowserRouter>
  )
}
```
Декомпозируем switch в компонентную UI в файл appRouter