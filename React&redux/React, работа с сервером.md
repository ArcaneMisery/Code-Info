# Работа с сервером 
## приёмка получение данных с сервера, основные приготовления

[сервер](https://jsonplaceholder.typicode.com/)  
Для того чтобы делать запросы нужна библиотека axios  
npm i axios  
Получение постов с сервера(использование fetch функций) 
```jsx
// приложение
const App = () => {


  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)// посты
    setPosts(response.data) // отрисовка постов прошлыми методами
  }
}
```
Посты в примере выше подгружаются по кнопке.  
Но а что если нужно сделать так чтобы посты загрзились сразу же, без кнопок и тд как коменты или что то в этом роде?  
Нужно загрузить все посты в момент рендеринга, на помощь приходит хук useEffect и жизненный цикл компонента 

## Жизненный цикл компонента хук useEffeect
1. монтирование(mount) - создание компонента и вставка его в dom дерево
2. Обновление(update) - Изменение состояния, перерендр другие действия с компонентом, активная жизнь компонента
3. Размонтирование(unmount) - компонент больше не нужен и по какой либо причине компонент удаляется(к примеру переход на другую страницу где компонент не нужен)

1 интересно когда нужно сделать первичную подгрузку, повесить события, запрос на сервер кинуть
2 на этом этапе чаще всего следят за изменением зависимостей, и производят какие либо действия
3 Полная очистка(очистка слушателей событий, очистка глобального хранилища)
Для слежки за всеми этими стадиями предназначен хук **useEffect(callback, deps)**, его можно испльзовать в компоненте столько раз сколько необходимо(каждый хук выполняет свою роль по отдельности).  
Эффект принимает в себя массив зависимостей и callback, естли массив зависимостей пустой callback сработает лишь единожды, в таком случае как раз можно отследить момент монтирования 
```jsx
useEffect(() => {
  fetchPosts()
}, []);
// отработает один раз в момент монтирования

// для очистки
useEffect(() => {
  return () => {
    //очистка
  }
}, [])
```  
## перенос на автоподгрузку данных
```javascript
// приложение
import useEfect from 'react';

const App = () => {

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)// посты
    setPosts(response.data) // отрисовка постов прошлыми методами
  }

  useEffect( () => {
    fetchPosts()

  }, [filter, posts, modal])
return (

  )
}
```
Все работает но теперь, надо улучшить все здесь
1. по ссылке другой разработчик может не понять что это за ссылка и что она даёт
2. запрос может использоваться в нескольких местах приложения, и не плохо бы иметь некий рычаг возвращающий массив этих постов.

Создаём в src папку API, в ней файл PostService.js
```javascript
// src/API/PostServise.js
export default class PostServise
  static async getAll() {
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data
    }catch(e) {
       console.log(e)
    }
  }

// Приложение
import useEfect from 'react';

const App = () => {

  async function fetchPosts() {
    const posts = await PostServise.getAll();
    setPosts(posts) 
  }

  useEffect( () => {
    fetchPosts()

  }, [filter, posts, modal])
return (

  )
}
// все адаптировалось, но в момент загрузки постов появляется надпись по дефолту - постов не найдено, такое надо исправить создание состояния загрузки
const [isPostsLoading, setIsPostsLoading] = useState(false); // 

  async function fetchPosts() {
    setIsePostsLoading(true); // перед отправкой запроса состояние - правда
    const posts = await PostServise.getAll();
    setPosts(posts) 
    setIsPostsLoading(false) // после окончания исполнения запроса состояние - ложь
  }

  // дорисуем в шаблон что то в шаблон что означало бы что идёт загрузка постов в момент когда состояние - верно то есть загрузка сейчас идёт
  return (
    {siPostsLoading
    ? <div style = {{display: 'flex', justifyContent: 'center'}}><Loader/></div>
    : <PostList/> // наш лист постов если загрузки нет
    }
  )
  
  // компонент loader --------------------------------------------------
  import cl from './Loader.module.css';

  const Loader = () => {
    return <div className = {cl.loader}></div>
  }
```
```css
// css компонента Loader
.loader{
  w:100px;
  h:100px;
  border-radius: 50%;
  border:3px dashed teal;
  animation: rotate 1s infinite linear;
}
@keyframes rotate {
  from {
    transform: rotate(0 deg) scale(1);
  }to{
    transform: rotate(360 deg)  scale(1.4);
  }
}
// вращающийс кружок загрузки
```  
### закидываем все в кастомный хук 
создаём еще один хук useFetching.js
```jsx
export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async() => {
    try{
      setIsLoading(true);
      await callback()
    }catch(e){
      setError(e.message);
    }finally{
      setIsLoading(false)
    }
  }
  return [fetching, isLoading, error];
}
// приложение ---------------------------------------------------------
const [fetchPosts, isPostLoading, postError] = useFetching (async() => {
   const posts = await PostServise.getAll();
   setPosts(posts) 

});

  useEffect( () => {
    fetchPosts()

  }, []);

  return (
    {postError &&
      <h1>Произошла ошибка ${postError}</h1> // обработка ошибки хуком (для того чтобы работала нужно убрать trycatch из сервиса)
    }
    {siPostsLoading
    ? <div style = {{display: 'flex', justifyContent: 'center'}}><Loader/></div>
    : <PostList/> // наш лист постов если загрузки нет
    }
  )
```
## Постараничное возвращение постов( разбивка большого кол-во постов по страницам)
1. Во первых надо настроить получение информации для этого надо
   1. открыть jsonplaceholder https://jsonplaceholder.typicode.com/posts
   2. Дописать прямо в ссылку query параметры limit и номер страницы
   3. https://jsonplaceholder.typicode.com/posts?_limit=10&page=1
2. Теперь если открыть в консоли разработчика Network => первая ссылочная вкладка => Headers => x-total-count:
3. Эта цифра покажет общее кол - во постов, на ее основании посчитать общее кол - во страниц, отрисовать, и пользователь будет нажимать и получать порцию данных
```javascript
  // src/API/PostServise.js
export default class PostServise
  static async getAll(limit = 10, page = 1)  { // теперь хук в себя включит порционные параметры
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params:{ // чтобы не хардкодить строку можно передать квери параметры вот так
        _lmit: limit,
        _page: page
      }
    });
    return response // меняем так чтобы получать всю информацию
  }
```
```jsx
// App
const [totalPages, setTotalpages] = useState(0) // состояние в котором будет общее кол во постов
const[lmit, sitLimit] = useState(10); // создаём отдельносостояния для страниц и постов
const [page, setPage] = useState(1);  
 let pagesArray = getPagesArray(totalPages) // вызов функции отсчитающей числа для кнопок

const [fetchPosts, isPostLoading, postError] = useFetching (async() => {
   const response = await PostServise.getAll(limit, page);
   setPosts(response.data) 
    const totalCount = response.headers['x-total-count'] // достаем инфу о кол во постов
    setTotalPages(getPageCount(totalCount, limit)) // вызываем функцию из стейта, а вней функцию из утилит с переданнымилимитом, и общим кол - вом страниц
});
useEffect( () => {
  fetchPosts()
}, [page]) 
const changePage = (page) =>{ // функция подгружающая изменяющиеся страницы 
  setPage(page);
}



 return (
   <div className = 'App'>
    {postError &&
      <h1>Произошла ошибка ${postError}</h1> // обработка ошибки хуком (для того чтобы работала нужно убрать trycatch из сервиса)
    }
    {siPostsLoading
    ? <div style = {{display: 'flex', justifyContent: 'center'}}><Loader/></div>
    : <PostList/> // наш лист постов если загрузки нет
    }
    <div className = 'page__wrapper'> // создаем коробку для кнопок страниц, отписываем классы в app.css, а так же анимации смены страниц
    {pagesArray.map(p => 
      <span  key = {p}classname = {page === p  ? 'page page__current' : 'page'}
        onClick = {() => changePage(p)}
      >{p}
      </span>
    )}
    </div>
    </div>
  )


```
```javascript
// теперь для того чтобы а) посчитать страницы б) использовать всегда функцию пересчёта как компонент создаём
// папку utils  а в ней pages.js
//utils/pages.js
export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount/limit)
}
// создадим функцию для того чтобы сосчитать кол во страниц и кнопок соответственно
export const getPagesArray = (totalPages) =>{
  let res = [];
  for(let i = 0; i < totalPages; i++){
    res.push(i + 1)
  }
  return res;
}
```
Дальше закинем page__wrapper (нумерацию) вместе с небольшой логикой их отчисления в компонент.  