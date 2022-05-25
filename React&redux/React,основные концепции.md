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
Предназначены для управления функциональными компонентами, это функции которые забинжены в реакте при этом их можно использовать и в своих хуках кроме функц. элементов.  
###  Хуки можно использовать только на верхнем уровне вложенности  
Примеры хуков  
- useState() - состояние
- useEffect()
- useRef() - явное указание ссылки
- useMemo()
- useCallback()
- useContext()    

## добовление стилей css  


```javascript
import React from 'react';

import './styles/style.css';

function App() {

  return (
    <div className = "App">
      <div calssName = "post">
        <div className = "post__content">
          <strong>1. Javascript</strong>
        </div>
        Javascript - its a programming language
      </div>
        <div className = "post__btns">
          <button>Delete</button>
        </div>
    </div>
  )
}

export default App;
```
<div className = "App">
      <div calssName = "post">
        <div className = "post__content">
          <strong>1. Javascript</strong>
        </div>
        Javascript - its a programming language
      </div>
        <div className = "post__btns">
          <button>Удалить</button>
        </div>
    </div>
<br />


По стандарту создаётся папка с css файлом и стилями в нем все как по классике, а дальше нужно импортировать папку в приложение.  ``import './styles/style.css';``  

Прописав стили и добавив структуру в компонент мы теперь можем все удобно использовать НО.  
Теперь нужно все это модернизировать чтобы можно было менять текст в посте  
Для того чтобы компоннент принимал в себя данные нужно использовать ключевое слово ``props``, используется оно как обычный аргумент функции, передаёт пустой обьект если ничего не передать  
```javascript
// КОМПОНЕНТНЫЙ ФАЙЛ
const PostItem = (props) => {

  return (
    <div className = "App">
      <div calssName = "post">
        <div className = "post__content">
          <strong>1. Javascript</strong>
        </div>
        Javascript - its a programming language
      </div>
        <div className = "post__btns">
          <button>Delete</button>
        </div>
    </div>
  )
}

// ПЕРЕДАЧА ДАННЫХ В ПРОПС
// ФАЙЛ РЕАЛЬНОГО ПРИЛОЖЕНИЯ
import PostItem from './components/PostItem'
function App() {
  return (
    <div className = "App">
      <PostItem post = {{id: 1, title: 'Javascript', body: 'Description'}}/>
    </div>
  )
}
//  ПРИЁМКА ДАННЫХ В КОМПОНЕНТЕ ИЗ ПРОПСА
// КОМПОНЕНТНЫЙ ФАЙЛ

const PostItem = (props) => {

  return (
    <div className = "App">
      <div calssName = "post">
        <div className = "post__content">
          <strong>{props.post.id}{props.post.title}</strong>
        </div>
        {props.post.body}
      </div>
        <div className = "post__btns">
          <MyButton>Delete</MyButton>
        </div>
    </div>
  )
}
```
Теперь данные передаваемые в пропс будут работать но такое хорошо лишь при небольшом количестве скопированных компонентов  
### Реализация большоого количества постов через массив с хуком  
Для реализации в хук состояния передаётся массив обьектов постов, следующим шагом массив обьектов преобразовавыетсяво множество реакт элементов при помощи arr.map, преобразование идёт прямо в компонент с передачей в пропс компонента обьекта массива, дальше все будет работать, но при использовании такого приёма следует добовлять ключи на сделанные обьекты, или реакт а) предупредит в косноли б) будет дольше рндерить, ключи должны быть уникальны, но можно и использовать индексы массива(только если не предпологается изменений массива)



```jsx
// Приложение 
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ])

return (
  <div classname = "App">
  <h1 style = {{textAlign: 'center'}}>Список постов</h1> /* можно писать стили прямо в теге как будто передавая их в пропс */
    {posts.map(post => 
      <PostItem post = {post} key = {post.id}/>
    )}
  </div>
)
}
// теперь можно то что описано выше в returne ззаписать как новый компонент
// Новый файл компонентов
import PostItem from './PostItem';

// деструктуризация пропса или простыми словами {posts} сразу же вытаскиваем нужную информацию из пропса
  const PostList = ({posts, title}) => {
    return (
        <div classname = "App">
  <h1 style = {{textAlign: 'center'}}>
    {title}
  </h1>
    {posts.map(post => 
      <PostItem post = {post} key = {post.id}/>
    )}
  </div>
    )
  }
export default PostList
// Приложение
import PostList from './components/PostList';
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ])

return (
  <div classname = "App">
    <PostList  posts = {posts} title = "Список постов 1"/>
  </div>
  )
}
// теперь можно везде использовать разные листы и тд с роазным кол вом постов называнием и содержанием как компонент, меняя все непосредственно из реакта
```  
### Часть 2 реализация списка с интерактивностью  


```jsx
import PostList from './components/PostList';
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ])

return (
  <div classname = "App">
    <form>
    <input type = "text" placeholder = "Название поста"> </input>
    <input type = "text" placeholder = "Описание поста"> </input>
    <button>Создать пост</button>
    </form>
    <PostList  posts = {posts} title = "Список постов 1"/>
  </div>
  )
}
```
Создаём отдельную папку UI для графческих компонентов а в ней папку button для кнопки, внутри этой же папки создаётся файл со стилем кнопки, пропись стилей, а дальше нужно импортировать стили с классом(в примере класс myBtn).  
```jsx
// компонент кнопки
import classes from './MyButton.module.css' 

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className = {classes.myBtn}> //(*)
      {children} // для того чтобы получить текст из кнопки и приложения
   </button>
  )

}
// * все пропсы переданные в App, в строке * будут передавать в кнопку
// компонент инпута  
import calsses from './MyInput.module.css'
const MyInput = (props) => {
  return (
    <input  className = {classes.myInput} {...props}/>
  )
}


// приложение 
import PostList from './components/PostList';
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ])



  // делаем хук состояния для получения информации(тайтла) в функцию конструктор поста
  const [title, settitle] = useState('');
  // const bodyInputRef = useRef(); // хук для доступа к дом элементам 
  const [body, setBody] = useState('')
  const addNewPost = () => {
    e.preventDefault() // для того чтобы остановить обновление страницы тк кнопка всегда с submit тут обновления страницы ни к чему
    const newPost = {
      id: Date.now()
      title,
      body
    }

    setPosts([...post, newPost]); // закидываем конструкторные посты 
    // для автоочистки формы
    setTitle('');
    setBody('');
    console.log(title) // то что вписано в инпут тайтла
    console.log(bodyInputRef.current.value)
  }
  // если элемент не вязать есть другой способ получения значения из элемента, с использованием соответствующего хука
  


return (
  <div classname = "App">
    <form>
    <MyInput  // инпут способом с вязкой
    // вяжем по старой схеме со стейтом
    value = {title} 
    // функция для отслеживания что пользователь вводит  
    onChange ={e => setTitle(e.target.value)}
    type = "text" 
    placeholder = "Название поста" /> 
    
    <MyInput // инпут способом с дом элементами
       value = {body}
    onChange ={e => setBody(e.target.value)}
    ref = {bodyInputRef}
    type = "text" 
    placeholder = "Описание поста"/> 
    <MyButton onClick = {addNewPost}>Создать пост</MyButton>
    </form>
    <PostList  posts = {posts} title = "Список постов 1"/>
  </div>
  )
}


// такой пример будет работать не совсем корректно так как под каждую форму создаётся новый стейт, вместо того чтобы делать новые стейты можно все поместить в один обьект, и работать в его рамках


import PostList from './components/PostList';
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ])

  const [post, setPost] = useState({title: '', body: ''});
  const [body, setBody] = useState('');

  const addNewPost = () => {
    e.preventDefault()
    setPosts([...post, {...post, id: Date.now()}]);  
    setPost({title: '', body: ''})
  }

return (
  <div classname = "App">
    <form>
    <MyInput 
    value = {post.title} 
    onChange ={e => setPost({...post, title: e.target.value})}
    type = "text" 
    placeholder = "Название поста" /> 
    
    <MyInput 
       value = {post.body}
    onChange ={e => setPost({...post, body: e.target.value})}
    ref = {bodyInputRef}
    type = "text" 
    placeholder = "Описание поста"/> 
    <MyButton onClick = {addNewPost}>Создать пост</MyButton>
    </form>
    <PostList  posts = {posts} title = "Список постов 1"/>
  </div>
  )
}

```
 Для того чтобы все работало в примере с инпутом по домэлементу нужно менять его компонент, так как Реакт не поймет куда шла ссылка, нужно ее явно указать в компоненте  
 Для этого весь компонент оборачивается в функцию ``React.forwardRef()``
### Неуправляемый элемент
```jsx
import calsses from './MyInput.module.css'
const MyInput = React.forwardRef((props, ref) => {
  return (
    <input  ref = {ref} className = {classes.myInput} {...props}/>
  )
});


```
### Важная ремарка классы из реакта применяются так как будто использован бэм, такое поведение используется для изоляции, но теперь об этом не нужно сильно беспокоится  
И так форма сделана все работает, но теперь к оптимизации, ведь весь form также следует запереть как компонент, в итоге получится свовсем маленький код для неплохого Уже кое как работающего приложения.  
Создаётся компонент файл для всей формы, переносим туда всю форму.  
Немного о пропсах: их передача идет с верху вниз то есть из app в компонент, но не наоборот, исходя из этого нельзя в лоб сделать так конструктор ведь форма должна себя передать на верх(в app).  
Для реения подобных проблем нужно использовать callback функцию из родительского в дочерний компоненты, эта функция подождёт пока post закончит работу и получит в себя значения компонента!    
```jsx
//Компонент формы
import MyInput from './UI/input/MyInput';
  import MyButton from './UI/button/MyButton';

  const postForm = ({create}) => {
      const [post, setPost] = useState({title: '', body: ''}); // так же выполняется перенос стейта из приложения

  const addNewPost = () => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({tite:'', body: ''})
  }
    <form>
    <MyInput 
    value = {post.title} 
    onChange ={e => setPost({...post, title: e.target.value})}
    type = "text" 
    placeholder = "Название поста" /> 
    
    <MyInput 
       value = {post.body}
    onChange ={e => setPost({...post, body: e.target.value})}
    ref = {bodyInputRef}
    type = "text" 
    placeholder = "Описание поста"/> 
    <MyButton onClick = {addNewPost}>Создать пост</MyButton>
    </form>
}
export default PostForm

// итоговое приложение
import PostList from './components/PostList';
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
return (
  <div classname = "App">
      <PostForm create={createPost}/>
    <PostList  posts = {posts} title = "Список постов 1"/>
  </div>
  )
}
```
Ура теперь можно создавать посты как угодно сколько угодно и все максимально оптимизированно работает! Остался последний функционал их удаление.  
Реализация будет по тому же принципу с обратным вызовом  
```jsx
//Компонент PostList (был ранее, отвечает за обычные списки)
const PostList = ({posts, title, remove}) => {
    return (
    <div>
  <h1 style = {{textAlign: 'center'}}>
    {title}
  </h1>
    {posts.map((post, index) => 
      <PostItem remove = {remove} number = {index + 1} post = {post} key = {post.id}/>
    )}
  </div>
    )
  }
export default PostList
// компонент кнопки обычного списка так же ранее
const PostItem = (props) => {

  return (
    <div className = "App">
      <div calssName = "post">
        <div className = "post__content">
          <strong>{props.post.id}{props.post.title}</strong>
        </div>
        {props.post.body}
      </div>
        <div className = "post__btns">
          <MyButto onClick = {() => props.remove(props.post)}>Delete</MyButto>
        </div>
    </div>
  )
}


// приложение
import PostList from './components/PostList';
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  //передаётся post из дочернего компонента
  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
  }
return (
  <div classname = "App">
    <PostForm create={createPost}/>
    // условная отрисовка
      {posts.length !== 0 ?
       PostList  remove = {removePost} posts = {posts} title = "Список постов 1"/> :
       <h1 style = {{textAlign = "center"}}>Постов не найдено</h1>
      }

    <
  </div>
  )
}
```
## Сортировка постов  
```jsx

import PostList from './components/PostList';
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort.localCompare(b[sort])]))
  }
return (
  <div classname = "App">
    <PostForm create={createPost}/>
    <div> 
      <MySelect
      value = {selectedSort}
      onChange= {sort => setSelectedSort(sort)}
        defaultValue = 'Сортировка'
        option = {[
          {value :'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
      />
    </div>
      {posts.length !== 0 ?
       PostList  remove = {removePost} posts = {posts} title = "Список постов 1"/> :
       <h1 style = {{textAlign = "center"}}>Постов не найдено</h1>
      }

    <
  </div>
  )
}

// компонент  seleкта

const MySelect = ({option, defaultValue, value, onChange}) =>{
  return (
    <select 
    value = {value}
    onChange = {event => onChange(event.target.value)}
    >
        <option disabled value = "">{defaultValue}</option>
        {options.map(option =>
          <option key= {option.value} value = {option.value}>
            {option.name}
          </option>
        )}
    </select>
  );
}; 
```
## Механизм поиска 
```jsx
import PostList from './components/PostList';
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchqQuery] = useState('');

  function getSortedPosts() = {

  }
  const sortedPosts = useMemo(() => {
    if(sectedSort){
      return [...posts].sort((a, b) => a[selectedSort].localCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = UseMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [serchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
  }
  const sortedPosts = (sort) => {
    setSelectedSort(sort);
  }
return (
  <div classname = "App">
    <PostForm create={createPost}/>
    <div>
    <MyInput
    value = {searchQuery}
    onChange= {e => setSearchQuery(e.target.value)}
      placeholder = "поиск"
    /> 
      <MySelect
      value = {selectedSort}
      onChange= {sort => setSelectedSort(sort)}
        defaultValue = 'Сортировка'
        option = {[
          {value :'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
      />
    </div>
      {sortedAndSearchedPosts.length !== 0 ?
       PostList  remove = {removePost} posts = {sortedAndSearchedPosts} title = "Список постов 1"/> :
       <h1 style = {{textAlign = "center"}}>Постов не найдено</h1>
      }

    <
  </div>
  )
}
```
UseMemo(callback, deps) - хук который 1 параметром принимает функцию обратного вызова и массив зависимости.  
Работает так что callback должен вернуть свои вычисления.
В массив зависимостей передаются переменные поля обьекта и тд.  
Хук работает так что он вычисляет,запоминает результат вычислений, кеширует.На каждый следующий вызов достайтся массив из кеша.  
Но если меняется переменная зависимостей то функция вновь пересчитает все и кеширует.  
Если массив пуст функция отработает лишь единожды и больше не вызовется  

Стадия уже по классике итоговая декомпозиция
```jsx
// создаем компонент для поиска и фильтра
const PostFilter = ({filter, setFilter}) => {
  return (
      <div classname = "App">
    <PostForm create={createPost}/>
    <div>
    <MyInput
    value = {filter.query}
    onChange= {e => setFilter({...filter, query: e.target.value})}
      placeholder = "поиск"
    /> 
      <MySelect
      value = {filter.sort}
      onChange= {selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue = 'Сортировка'
        option = {[
          {value :'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]};
      />
    </div>
  );

};


function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ]);
const [filter, setFilter] = useState({sort: '', query: ''})

  function getSortedPosts() = {

  }
  const sortedPosts = useMemo(() => {
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = UseMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
  }
return (
  <div classname = "App">
    <PostForm create={createPost}/>
      <PostFilter 
      filter = {filter}
      setFilter = {setFilter}
      />
      {sortedAndSearchedPosts.length !== 0 ?
       PostList  remove = {removePost} posts = {sortedAndSearchedPosts} title = "Список постов 1"/> :
       <h1 style = {{textAlign = "center"}}>Постов не найдено</h1>
      }

    <
  </div>
  )
}
```
## Модальное окно  
Перемещение формы для создания в модальное окно
```css
// в UI делаем папку для модального окна, в ней компонент файл и css стили
// MyModal.module.css
.myModal {
  position: fixed;
  top: 0;
  bottom: 0;
  right:0;
  left: 0;
  display: none;
  background: rgba(0,0,0, 0.5);
}

.myModalContent{
  background: white;
  min-width: 250px;
}

.myModal.active{
  display: flex;
  justify-content:center;
  align-items: center;
}
```
```jsx
// модальный компонент
import cl from './MyModal.module.css'
  const MyModal = ({children, visible, setVisible}) =>{
    const rootClasses = [cl.myModal];
    if(visible){
      rootclasses.push(cl.active)
    }
    return (
      <div className = {[rootClasses].join(' ')} onClick = {() => setVisible(false)}>
        <div className ={cl.myModalContent} onClick = {(e) => e.StopPropagation()}>
          {children}
        </div>
      </div>

    )
  }
```
```jsx
// приложение
function App () {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'}
    {id: 2, title: 'Javascript 2', body: 'Description'}
    {id: 2, title: 'Javascript 3', body: 'Description'}
  ]);
const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setmodal] = useState(false); // состояниемодального окна(закрыто)
  function getSortedPosts() = {

  }
  const sortedPosts = useMemo(() => {
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = UseMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false); // закрыть модальное окно после события создания поста
  }
  
  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
  }
return (
  <div classname = "App">
  <MyButton onClick = {() => setModal{true}} >
  Создать пользователя
  </MyButton>
    <MyModal visible = {modal} setVisible = {setModal}>
      <PostForm create={createPost}/>
    </MyModal>
      <PostFilter 
      filter = {filter}
      setFilter = {setFilter}
      />
      {sortedAndSearchedPosts.length !== 0 ?
       PostList  remove = {removePost} posts = {sortedAndSearchedPosts} title = "Список постов 1"/> :
       <h1 style = {{textAlign = "center"}}>Постов не найдено</h1>
      }

    <
  </div>
  )
}
```
## Добавление анимации
Для этого в реакте есть библиотека reactTransitionGroup  
npm install react transition-group --save,  
npm start  
**Все про анимацию смотри в промежутке**  
[1:30:00(ссылка)](https://youtu.be/GNrdg3PzpJQ?t=5447) - 1:33:00
## Создание кастомных хуков  
1. создать папку для хуков
2. а в ней файл usePosts  
Пример: перенос логики сортировки по поиску и фильтру в отдельный хук(sortedPosts, sortedAndSearchedPosts)  
Пользовательские(кастомные хуки) обязательно используют в себе классические реакт хуки  
```jsx
// usePosts
import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);
  return sortedPosts:
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = UseMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(.query.toLowerCase()))
  }, [query, sortedPosts]);
  return sortedAndSerachedPosts;
}

// что в итоге записать вместо логики поиска сортировки и хука в приложении
// ПРИЛОЖЕНИЕ
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
```
Основы окончены!
