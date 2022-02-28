# Тернарный оператор циклы и директива continue в тернарнике
```javascript
// в этом примере мы должны умножить на 2 все свойства обьекта значения в которых числа и в тоже время ничего не делать с теми которые не числа
let menu = {//обьявление обьекта
   width: 200,
   height: 300,
   title: 'mymenu'
}

function multiplyNumeric(menu) {
   //создаем функцию которая перебирает обьет
   for (let key in menu) {
      typeof (menu[key]) === 'number' ? menu[key] = menu[key] * 2 : null;
      console.log(menu[key]);// если мы хотим использовать директиву continue в тернарнике стоит записать после : null что означает ничего не делать.
   };
};

multiplyNumeric(menu);  
```  









# Отладка кода  
## debugger
```javascript

function getName () {
   let name = alert('wasya');

   debugger // приостанавливает выполнение кода
   say(name);
}

```  
# Строки
## Переворот строки
```javascript
let str = 'hello world!'

str.split('');// разбиваем строку на буквы и заносим в массив
str.reverse(); // переворачиваем массив
str.join(' ');// собираем из массива строчку
console.log(str);// !dlrow olleh 
```






# Обьекты
Создание независимой копии обьекта
```javascript
let a = {
   name: 'wasya',
   age: 30
};
let b = {}
Object.assign(b,(a));
console.log(b) // name wasya age 30
```






# Массивы
Создание независимой копии массива

```javascript
let arrOne = [1, 2, 3];
let arr = arrOne.slice();

console.log(arr)// [1, 2, 3]

```