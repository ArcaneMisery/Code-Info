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
