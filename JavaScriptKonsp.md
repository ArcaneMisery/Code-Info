# Это конспект по JS 
# JS осонвы  
## Синтаксис js
Значния бывают 3 видов: фиксированные(литералы), значения констант и значения переменных.
```javascript
//Литералы  
25 // литерал числа
25.8 //дробного числа
`JavaScript` // строки
"JavaScript"// строки
[] // массива
[14,8,2] //массива
{}//  обьекта  
{
   name: `blabla`,
   surname: `alabai`  
}// обьекта
(ab|bc) // регулярного выражения  
// Константы и переменные
const max_value = 100;
var section = `info`
let arr = [html,css,js];
```  
Блоки инструкции
```javascript
//блок инструкций
function name(){
   console.log(`учу js`)
};
```
Разрывы инструкции нужно делать после оператора 
```javascript
document.getElementById(`text`).innerHTML = 
   `Текст для некого поля`
```  
"use strict" - строгий режим включает новые функции и изменения предыдущих начиная с EcmaScript5.
```javascript
"use strict"
console.log(blabala);
```  
<hr />  

## Переменные  
  
 - var
 - let
 - const  

! оправданное использование var может быть только в случае написания кода для старых браузеров из за своей видимости.Во всех остальных случая следует использовать let и const.  
**Переменные - это именованные контейнеры для хранения данных**  
```JavaScript
var singleVariable

let firstVariable, secondVariable, thirdVariable
```  
Чаще всего при обьявлении переменной ставится оператор =, тип данных может быть любым.  
```JavaScript
// Объявление переменной + присваивание
let string = 'foo'
const array = ['foo', 'bar', 'baz']
var number = 10

// Множественное объявление + присваивание
let firstNumber = 5,
  secondNumber = 10
```  
<hr />  

<hr />  
  
### Обьявление   
При помощи let можно обьявить переменную без значения тогда она будет undefined  
```javascript
let a
console.log(a)
// undefined

a = 5
console.log(a)
// 5
```
При помощи const так делать не получится 
```javascript
const a
// SyntaxError: Missing initializer in const declaration

// правильно
const b = 5
```  
К переменным let и const нельзя обращатся до их обьявления в коде
```javascript
console.log(a)
// ReferenceError: Cannot access 'a' before initialization
console.log(b)
// ReferenceError: Cannot access 'b' before initialization

let a = 5
const a = 5
```  
Оба типа переменных имеют блочную область видимости и не становятся частью глобального обьекта.Блочная область видимости не дает получить значение вне блока, где она была обьявлена.  
```javascript
if (true) {
  let a = 5
  const b = 10

  console.log(a)
  // 5
  console.log(b)
  // 10
}
// обращение вне блока
console.log(a)
// ReferenceError: a is not defined

console.log(b)
// ReferenceError: b is not defined
```
Нельзя подписывать одним и тем же именем более одной переменной(Ибо выдаст ошибку), однако если эти переменные будут в разных областях видимости такое можно и нужно делать.
```javascript
let name = 'Ольга'

if (true) {
  let name = 'Елена'
  console.log(name)
  // Елена
}

console.log(name)
// Ольга
```  
Стартовое значение const менять нельзя будь то что угодно.  
Однако обьект хранящийся в const можно **мутировать**(это потому что обьекты хранятся по ссылке и изменение обьекта не приводит к изменению ссылки на него)
```javascript
const obj = {
  a: 5,
}

obj.a = 10

console.log(obj)
// { a: 10 }
```  
### Переменные var  
Обьявить можно без значения(undefined).  
Переменные var имеют функциональную область видимости - они доступны только в пределах текущей функции или глобального обьекта, если функции нет то
```javascript
if (true) {
  var a = 5
}

function foo() {
  var b = 10
}

console.log(a)
// 5
console.log(b)
// ReferenceError: b is not defined
```  
Обьявления вне функции делают их глобальными.  
```javascript
var varVariable = 5

console.log(window.varVariable)
// 5
```  
К переменным var можно обращатся до их обьявления в коде(такую вещь называют всплытием).  
### Смена var значений  
Происходит 2 мя способами  
- обратится к переменной и присвоить новое значение  

```javascript
var a = 5
console.log(a)
// 5

a = 10
console.log(a)
// 10
```
- Обратится к имени переменной включая сово var  

```javascript
var a = 5
console.log(a)
// 5

var a = 10
console.log(a)
// 10
```  
## Типы данных  

```javascript
// чтобы вывести тип данных мы должны применить оператор typeof
let userName;
console.log(typeof userName);
//undefined  
```
- string
- number
- Boolean
- null
- undefined
- Bigint
- object
- symbol  

```javascript
//Undefined  
let userName;
console.log(typeof userName);
//undefined  
console.log(userName);
// undefined

//попытка получить несуществующий блок
let block = document.getElementById(`block`);
console.log(block)
//null 
console.log(typeof block);
// object - это фича не пугаться

//Boolean

let willYouHelpMe = true;
if (willYouHelpMe){
   console.log(`:)`);
   
}else{
   console.log(`:(`)
}
//:)
let trueOrFalse = 58 < 7;
console.log(trueOrFalse);
// false

//        NUMBER
let userAge = 65

let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
//type number, infiniti.

let getNan = `string` / 10;
console.log(getNan);
console.log(typeof getNan);
// NaN, number

//                       BigInt

const bigInteger = 321432451541423145321n;
//type bigint

//                       STRING

let userName = 'фвфывыф' // одинарные кавычки
let userSurName = "jlhlnh" // двойные, разницы нет но
let userName = `dasdsads` // обратные кавычки позволяют использовать функционал к примеру
let userAge = 36;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);
//Возраст: 36

//                         OBJECT
let userInfo = {
   name: 'Oleg'
   age: 36
}
//           ТАК ЖЕ ЕСТЬ ЕЩЕ ОДИН СПОРНЫЙ ТИП FUNCTION
let funcVariable = function name(params) {
   //телофункции
}
console.log(typeof funcVariable);
// function
```
### преобразование
```javascript
let userAge = 58;
// type number
// value 58
userAge = String(userAge);
//string
// value '58'


let userTrue = true
// boolean
userTrue = String(userTrue);
//string
//'true'

let age = '58'
//string
age = Number(age);
//number
let name = 'Oleg'
// string
name = Number(name);
//type number
//value NaN

//автоматическое преобразование
let userAge = '72' / '2';
console.log(userAge);
console.log(typeof userAge);
// 36
// number

let userAge = 58
userAge = Boolean(userAge)
//true, boolean
// ТАК ЖЕ ВАЖНО число 0 вернет false, но строка которая хоть как то заполнена(даже пробелом или нулем) вернет true, но пустая строка вернет false

```
      
## Операторы
```javascript

```  


## Порядок выполнения  
### Логика js при загрузке в браузере  
Перед выполнением скрипта js находит и загружает все переменные. Взависимости от браузера они равны undefined, либо как в safari не равны ничему и имеют состояние initialized. 
Порядок выполнения(control flow) - это порядок в котором JS выполняет код  
Стандартный порядок выполнения - последовательный(JS построчно читает и выполняет инструкции сверху-вниз).  
Порядок выполнения можно менять с помощью if...else, while, switch, for и т.д.  
Для написания программы нельзя использовать последовательный порядок кода.  
Для решания таких задач используют управляющие контсрукции.  
### Услованый переход(ветвление)  
if...else позволяет выполнить одну либо другую инструкцию исходя из условия  

![ifelseswitch](https://doka.guide/js/execution-order/images/conditional-1200w.webp)  
### Цикл  
Позволяет выполнить одну и ту же инструкцию с разными данными  
while()do{}, for(){}   

![cycles](https://doka.guide/js/execution-order/images/loop-1200w.webp)  