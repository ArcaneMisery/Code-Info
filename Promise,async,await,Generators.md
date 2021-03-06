# Введение, колбэки
Многие действия в js ассинхронны
к примеру загрузка нового скрипта
```javascript
function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}
loadScript('/my/script.js');
```
Когда конструкция script добавится в браузер браузер загрузит прочтёт и выполнит его, однако код находящий после вызова функции ждать не собирается и выполняется не дожидаясь закгрузки скрипта.  
Воизбежании ошибок по типу скрипт недогрузился а код уже пытается использовать переменные из него, придуманы функции колбэки.
```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}
// теперь для вызова функции из скрипта делать жто нужно в коллбэке
loadScript('/my/script.js', function()) {
  //вызовется сразу ПОСЛЕ загрузки скрипта
  newFunction()
}
```
в callback передается функция использование таких приёмов обзывается асинхронным программированием с использованием коллбэков.  
Смысл в том что передаётся функция которая выполняется по завершению действий предыдущей функции(здесь загрузка скрипта.).  
### Для загрузки большего количества скриптов по порядку можно использовать коллбэк в коллбэке
```javascript
loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...и так далее, пока все скрипты не будут загружены
    });
  })
});
```
Такое решение подходит лишь в случае когда надо подгрузить еще 1 -2 доп скрипта.  
## Перехват ошибок  
Монжно и нужно докидывать функционал в коллбэк который бы отслеживал ошибки  
```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error('не удалось грузануть скрипт ${src}'));
  document.head.append(script);
}
```
Теперь в случае ошибки загрузки, ошибка будет явно видна.
### Такой приём называет КОЛЛБЭК С ПЕРВЫМ АРГУМЕНТОМ-ОШИБКОЙ  
## Адская пирамида вызовов  
Возникает в случае когда нужно делать много асинхронных дествий друг за другом, вложенность растёт, пирамида растёт в право, читабельность сильно теряется.  
Такая большеуровневая вложенность крайне неприветствуется.
P.S. разбитие кода на блоки еще сильнее усугубит ситуацию, поэтому для решения этой проблемы придуманы промисы.
# Промисы
1. есть код который что либо создаёт, загружает(неважно) важно что он тратит на это время - СОЗДАЮЩИЙ  
2. Есть код который ожидает создание в создающем коде и обрабатывает какие либо данные из него - ПОТРЕБЛЯЮЩИЙ  

Promise – это специальный объект в JavaScript, который связывает код делающий какие либо действия определенное время и код получающий от предыдущего кода информацию вместе. В терминах нашей аналогии – это «список для подписки». «Создающий» код может выполняться сколько потребуется, чтобы получить результат, а промис делает результат доступным для кода, который подписан на него, когда результат готов.
Синтасис
```javascript
let promise = new Promise(function(resolve, reject){
// функция создающая(executor)
}); 
```
- В конструкцию new Promise вписывается функция создатель.  
- аргументы resolve и reject - коллбэки которые предоставляет сам js, код который нужно делать находится лишь внутри конструкции
  - resolve(value) - если работа завершилась успешно с результатом value
  -  reject(error) - не успешно с ошибкой error

Итак запускается автоматом код исполнитель а затем вызваает resolve или reject  
У получаемого обьекта ``promise`` от конструктора есть внутренние свойства
- state - (состояние) 
  - pending - ожидание
  - fulfilled - выполненно успешно
  - rejected - выполненно с ошибкой
- result - результат
  - undefined - 1 стадия
  - value - при вызове resolve(value)
  - error - при reject(error)

### Вернуть промис может лишь что то одно рзёльтат или ошибка!!
### resolve и reject можно вызывать мгновенно не дожидаюсь результатов функции.
### state и result внутренние свойства обьекта promise к ним нет прямого доступа  
## Потребители then catch finally
Функции ожидающие результатов от функции создающей прописываются при помощи методов .then .catch .finally
### then  
```javascript
promise.then{
  function(result){}// обработка успешного выполнения
  function(error) {}//обработка ошибки
};

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
);
```  
### catch
Метод catch обрабатывает ошибки
```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject (new Error('Ошибка!')), 1000);
});
promise.catch(alert);// выведет ошибку
```
### finally
по аналогии с try catch выполняется внезависимости от упеха выполнения промиса
```javascript
new Promise ((resolve, reject) => {
  //четоделать
})
.finally(() => сделать что либо(к примеру остановить индикатор загрузки));
.then(() => показать результат, err => показать ошибку)
```
### обработчик похож на then(f,f) но на деле имееет важные отличияfinally 
- пропускает результаты/ ошибку дальше к след обработчика
 - обработчик из finally не имеет аргументов 
- удобнее импользовать finally(f) чем then(f,f) ибо в первом передать надо меньше.

# Цепочка промисов
### Решение проблемы адской пирамиды
```javascript
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1) 1000)
}).then(function(result) {
  console.log(result);
  return result * 2;
}).then(function(result) {
  console.log(result);
  return result * 2;
}).then(function(result) {
  console.log(result);
  return result * 2;
});
```
Все как раз и получается по цепочке 
1. промис выполняется через 1 секунду
2. первый обработчик then
3. следующие обработчики then Один за другим
4. 1 - 2 - 4 , результат умножался на 2 в каждом из них.
### ВАЖНО прописывать .then в рамках обращения к 1 промису, если обращться по типу promise.then() используя много раз обращение promise, то цепочка не будет работать, а элементы .then будут действовать отдельно друг от друга, 
## Возвращение промисов
```javascript
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  alert(result); // 1
  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) { // (**)
  alert(result); // 2
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) {
  alert(result); // 4
});
```
Все то же что и в 1 примере но теперь есть паузы в 1 секунду. Таким образом можно строить цепочки из асинхронных действий
### Пример использование промиса во фронт разработке 
https://learn.javascript.ru/promise-chaining#bolee-slozhnyy-primer-fetch
# Промисы Обработка ошибок
Перехват осуществляется с помощью блока .catch
```javascript
fetch('https://bakcasc.com') // сервера не существует
.then(response => response.json())
.catch(err => console.log(err)) // выводит ошибку
```
Блок cath нужно распологать в конце кода, и он будет исправно работать.  
Если все в поряде catch не выполняется  
## Неявное наличие try catch
```javascript
new Promise((resolve, reject) => {
  throw new Error('Ошибка') 
}).catch(alert) //Error: Ошибка
// одно и тоже что и:
new Promise((resolve, reject) => {
  reject(new Error("Ошибка!"));
}).catch(alert); // Error: Ошибка!
```
Во всех промисах и блоках .then присутствует невидимый try catch Обработчик ошибок, то есть ошибки на автомате всегда перехватываются.
## Проброс ошибок
В обычном try..catch мы можем проанализировать ошибку и повторно пробросить дальше, если не можем её обработать. То же самое возможно для промисов.
```javascript
// the execution: catch -> catch -> then
new Promise((resolve, reject) => {
  throw new Error("Ошибка!");
}).catch(function(error) { // (*)
  if (error instanceof URIError) {
    // обрабатываем ошибку
  } else {
    alert("Не могу обработать ошибку");
    throw error; // пробрасывает эту или другую ошибку в следующий catch
  }
}).then(function() {
  /* не выполнится */
}).catch(error => { // (**)
  alert(`Неизвестная ошибка: ${error}`);
  // ничего не возвращаем => выполнение продолжается в нормальном режиме
});
```
## Необработанные ошибки
Если ошибка не обрабатвыается совсем(в плане того что не добавлен catch в конце), то ошибка застревает, она должна перейти к ближайшему обработчику ошибок но таковых нет, так что скрипт умирает с сообщением в консоли глобальной ошибки   
# Promise API
В классе Promise есть 5 методов
## Promise.all
Нужен для одновременности загрузки и выполнения всех промисов своего рода промис для промисов.  
``let promise = Promise.all(iterable)``  
Принимает массив промисов, Результат - массив результатов промисов.
```javascript
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива
```
Важно что в исходном массиве результаты промисов выстовляются по порядку записи, а не по скорости выполнения.  
Одно из хороших применений это map трюк с данными, смысл в том чтобы пропустить массив данных через map, который будет создавать для каждого элемента задачу промис, а затем обернуть в all полученный массив
```javascript
let urls = [1,2,3];
let reauest = urls.map(item => fetch(item));
Promise.all(requests)
  .then(respones => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));
```
### Если любой из промисов вернется ошибкой, то Promise.all немедленно завершается с этой ошибкой!!!  
### В случае ошибки остальные РЕЗУЛЬТАТЫ игнорируются(то есть промисы внутри скорее всего выполнятся но результаты их проигнорятся)  
# Promise.allSettled  
  ``let promise = Promise.allSttled(iterable)``  
  Всегда ждет завершения всех промисов в массиве результатов будет
  - {status:"fulfilled", value:результат} для успешных завершений,
 - {status:"rejected", reason:ошибка} для ошибок.

  
 как бы отдельно обрабатывает каждый промис
 ```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];
Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
 ```
 ## Promise.rase  
 Ждёт только первый выполненный промис и из него берет результат или ошибку.  
 ``let promise = Promise.rase(iterable)``
 ```javascript
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
 ```
 Первый помис выполнился за 1 секунду его результат вернет .rase а все что дальше будет проигнорированно.  
 ## Promise.resolve/reject  
 ### Promise.resolve - создает успешно выполненный промис с результатом value  
 То же что и    
 ``let promise = new Promise(resolve => resolve(value));``  
 Метод используется для совсместимости, когда ожидается что функция вернет именно промис  
 ### Promise.reject  
 ``Promise.reject(error)`` - создает промис с ошибкой error  
 тоже что и   
 ``let promise = new Promise((resolve, reject) => reject(error));``  
 # Промисификация  
 Это преобразование коллбэк функции в более привычную промисную форму.  
 Такой подходи прием полезен на практитке используется для библиотечных функций и функций с колбэками, для более удобного пользования и лучшей оптимизации.  
Для реализации этого приёма нужно создать функцию, передав в функцию нужный параметр, и в ней возвращать новый промис, в котором будет вызыаться коллбэкная фукция, а дальше работать с resolve/reject    
ПРИМЕР
 ```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));
  document.head.append(script);
};
//-------------------------------------------
let loadScriptPromise = function(src) {
  return new Promise((resolve, reject){
    loadScript(src, (err, script) =>{
      if (err) reject(err)
      else resolve(script)
    });
  })
}
 ```  
 Так же если в коде планируется частое использования такого приёма можно создать функцию помошник которая бы возвращала обёртку-конструктор, в котором происходило преобразование в промис.  
 ### ВАЖНО промисификация подходит только если коллбэк нужно было использовать один раз, если планируется множественное использования коллбэкной функции нужно все оставлять как есть, ведь промис вернет результат лишь единожды  
 # Микрозадачи  
 Обработчики промиса then catch finally всегда асинхронны с внешним кодом, таким образом если расположить микрофункцию не требующую времени к примеру alert после обработчика а в обработчике еще какую либо подобную микрофункцию, микрофункция внешняя выполнится быстре той которая в обработчике хотя и обработчик будет расположен раньше функции внешней.  
 ### Для эффективного управления встроена  
 ## Очередь микрозадач  
 Очередь микрозадач присутствует всегда из спецификации следует что  
 - Очередь определяется как первым пришел - первым ушел(задачи попавшие первыми, выполнятся первыми)  
 - Выполнение задач происходит лишь в случае если ничего больше не запущенно  

Проще говоря все промисные задачи выполняются после выполнения задач внешнего кода, а позже движок js берёт задачи по очереди из обработчиков и выполняет их.  
Решить пролему порядка вывода можно лишь засунув функцию внешнуюю в обработчик then  
# Async/Await  
Спец синтаксис для работы с промисами  
## Асинхронные функции async  
async  
```javascript
async function f() {
  return 1;
}

// явное возвращение  
async function f() {
  return Promise.resolve(1);
}
f().then(console.log(result)) // 1
// Одно и то же что и первое
```  
У слова async один смысл - всегда вернуть промис, в данном ключе возвращается успешной выполненный промисс результатом 1.  
## await  
используется только внутри async функций  
``let value = await promise``  
ключевое слово заставляет js ждать до того момента пока промис в паре с этим словом не будет выполнен и дальше продолжить выполнение кода.
```javascript
async function f(){
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ready'), 1000)
  });

  let result = await promise;
  console.log(result);
}
f();
```  
В этом примере await использовался как будто вместо .then относительно console.log().  
### await можно использовать тлько внутри async функций, остальное дает SyntaxError  
## Обработка ошибок  
Если промис завершился ошибкой, она будет вынесена в исключение как будто в коде стоял бы throw()
```javascript
async function f() {
  await Promise.reject(new Error('wow'));
};
// тоже что и  
async function f() {
  throw new Error('wow')
}  
// Отличие одно лишь в том что в await ошибкой может завершится промис несколько позже    

// ошибки можно ловить и обрабатывать try catch
async function f() {
  try {
    let response = await fetch('https://error404');
  } catch(err){
    console.log(err)
  }
}
f()
// В БЛОК TRY МОЖНО ЗАПИСАТЬ И БОЛЬШЕ ДЕЙСТВИЙ  
```
Если try catch отсутствует асинк функция вернёт звершённый ошибкой промис (reject) в таком случае можно дописать по стандарту catch блок в самом конце    

<hr/>

### По итогу обычно в асинхронном коде используется вместо блоков then и catch async await, НО по скольку вне диапозона async await не работает, как правило используют catch и then вне этого диапозона   

<hr/>  

### async await отлично работает с Promise.all  
```javascript
let results = await Promise.all([
  fetch(url1), fetch(url2)
]);
```  
В случае ошибки сначало срабатывает все как в promise.all а позже генерируется исключение как в await  
<hr/>
<hr/>  

# Генераторы  
Обычный return в обычных function вернет 1 значение, когда function* генераторы yield вернет множество значений одно за другим.  
## Функции генераторы  
```javascript
function* generateSequance () {
  yield 1;
  yield 2;
  return 3
}
let generator = generateSequence();
alert(generator); // [object Generator]
```
Функции генераторы не выполняют свой код, а возвращают спец обьект - генератор, для управления своим выполнением.    
Основной метод генератора  - next(), при вызове запускает выполнение кода до ближайшего ``yield <значение>``(если значения нет - undefined), По достижении yield выполнение приостанавливается , а значение возвращается во внешний код.  
Результат метода next() - обьект с 2 свойствами  
- value: - значение из yield
- done: true - если выполнение завершено, иначе false  

```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
let one = generator.next();
console.log(JSON.stringify(one)); // {value: 1, done: false}ж
let two = generator.next();
alert(JSON.stringify(two)); // {value: 2, done: false}
let three = generator.next();
alert(JSON.stringify(three)); // {value: 3, done: true}
```
Выполнение функции приостановленно на 2 строке - потому и false, следующий next() выполнит 2 строку и переступит на 3, и третий вызов завершит выполнение сделав done: true.  
Генератор полностью выполнен , можно обработать конечный результат value.  
## Перебор генераторов  
Генераторы являются перебираемыми обьектами
```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();
for(let value of generator){
  console.log(value) // 1 2 
}
// перебор не вернет последнее значение 3 тк done : true . ессли поменять return на yield done: false , values - 1 2 3  

// Можно использовать весь функционал связанный с перебираемым обьектами  
let sequence = [0, ...generateSequence()];
alert(sequence); // 0, 1, 2, 3
```
## Генераторы для перебора обьектов  
Для перебора обьектов теперь не нужна создавать  кучу свойств и функции достаточно все похожие действия помостить в функцию генератор фнутри обьекта  
```javascript
let range = {
  from: 1,
  to: 5,

  *[symbol.iterator]() {
    for(let value = this.from; value <= this.to; value++>) {
      yield value
    } 
  }
}

console.log(...range) // [1 2 3 4 5]
```
Метод next() так же сохранился и весь прочий функционал в частности.  
## Композиция генераторов 
это особенная возможность генераторов, которая позволяет прозрачно «встраивать» генераторы друг в друга.  
```javascript
function* generatesequance() {
  for(let i = start; i <= end; i++){
    yield i;
  }
}
function* generateSmth (){
  yield* generateSequance(48, 57);
  yield* generateSequance(65, 90);
  yield* generateSequance(97, 122);
}
let str = '';
for(let code of generateSmth){
  str += String.fromCharCode(code)
}
console.log(str)// 0..9A..Za..z
```
Особый синтаксис yield* позволяет вкладывать генераторы друг в друга на автомате сохраняя промежуточные результаты в общей функции генераторе .  
Директива yield* делегирует выполнение другому генератору  
 ## Универсальность и гибкость yield  
 yield  не только возвращает результаты, но и может передать результат внутрь фукнции.  
 Для этого нужен вызов generator.next(arg) некст с аргументом, жтот аругмент будет результатом yield  
 ```javascript
function* gen(){
  let result = yield '2 + 2 = ?'
  console.log(result)
}
let generator = gen();
let auestion = generator.next().value; yield вернул значение
generator.next(4) // передача результата в генератор
 ```
 Результат первого выхзова yield - '2 + 2 = ?' далее yield выходит во внешний код в переменную question, а след действием происходит выхов next(4) и 4 выходит из присваивания в результат.  
 ### В отличие от обычных функций генератор может обмениватся значениями с внешним кодом  
 ## Generator.throw  
 Как значение в генератор можно и передать ошибку
 ```javascript
functon* gen() {
  try {
    let result = yield '2 + 2 = ?'
    console.log('код не дойдет до этой строки')
  }catch(e) {
    console.log(e)
  }
}
let generator = gen();
let auestion = generator.next().value;
generator.throw(new Error('Ответа не найден'))
 ```
 Ошибка пробрасывается как результат выполнения и поэтому выполнение сразу переходит в блок catch
ошибку так же можно отловить и во внешнем коде
```javascript
function* generate() {
  let result = yield "2 + 2 = ?"; // Ошибка в этой строке
}

let generator = generate();

let question = generator.next().value;

try {
  generator.throw(new Error("Ответ не найден в моей базе данных"));
} catch(e) {
  alert(e); // покажет ошибку
}
```  
# Асинхронные итераторы и генераторы  
Асинхронные итераторы позволяют перебирать данные поступающие асинхронно
## Асинхронные итераторы  
Похожи на обычные но имеют некоторые синтаксические отличия  
Чтобы сделать обьект итерируемым асинхронно нужно 
1. Использоать Symbol.asyncIterator вместо Symbol.iterator  
2. next() - возвращает промис  
3. Чтобы перебрать такой обьект используется цикл for await(let item of iterable)

Пример
```javascript
let range = {
  from: 1,
  to: 5,
  // for await вызовет этот метод лишь 1 раз
  [Symbol.asyncIterator]() {
    // 1 возвращение обьект итератор
    //2 for await работает только с этим обьектом
    // 3 запрашивает у него след значения вызовом next()
    return {
      current: this.from,
      last: this.to,


      async next() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        if(this.current <= this.last){
          return { done:false, value: this.current++};
        }else{
          return {done: true}
        }
      }
    }

  }
}
(async () => [
  for await (let value of range){
    console.log(value);
  }
])()
```  
Метод next() не обязательно должен быть асинхронным тут асинхронность в нем по причине ожидиния таймаута в 1 секунду  
### Оператор расширения ``console.log([...range])`` не работает асинхронно, вызовет ошибку  
## Асинхронные генераторы  
В обычных генераторах нельзя использовать асинхронность, и в цикле перебора for of нет места await  
Синтаксис для асинхронной работы  
```javascript
async function* generateSequance (start, end) {
  for (let i = start; i <= end; i++){

    yield i;
  }

}
let generator = generateSequance(1, 5)
(async () => {
  for await (let value of generator){
    console.log(value)
  }
})();
```
Добовляется async к самому генератору, оборачивается в async вызов for of, после for добовляется await. Так же теперь появился метод next() возвращающий промисы =>  
``result = await generator.next()`` result = {value: ..., done: true;}  
## Асинхронно перебираемые обьекты  
Теперь используя все описанное выше можно перебрать асинхронно обьект в разы проще  
```javascript
let range = {
  from: 1,
  to: 5,

  async *[Symbol.asyncInerator]() {
    for(let value = this.from; value <= this.to; value++){
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield value
    }
  }
}

(async => [
  for await (let value of range){
    console.log(value)
  }
])();
```
Пример использования в реальной практике  
https://learn.javascript.ru/async-iterators-generators#primer-iz-realnoy-praktiki  
p.s. в нем есть недочеты(смотри комменты)