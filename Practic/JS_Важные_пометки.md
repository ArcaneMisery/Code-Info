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


// Регулярные выражения для replace()
str.replace('!', '') // поменяет знак на пустую строку(удалит первый который найдет)
str.replace(/!$/, '') // удалит последний ! /...$/ говорит удалить последнее вхождение
str.replace(/!/g, '') // удалит все ! /.../g удаляет все вхождения  


// действия с символами
str.toLowerCase()// - переводит все символы в нижний регистр и возвращает получившуюся строчку
str.toUpperCase()// - переводит в верхний регистр и возвращает строчку
let str = 'johN'
str.toLowerCase() 
console.log(str) // johN этот метод не меняет исходную строку
let newStr = str.toLowerCase() 
console.log(newStr) // john теперь то что вернулось записалось в переменную
let bigWord = str[0].toUppercase()
console.log(bigWord) // J Вывело и присвоило в переменную лишь что то изменило  

//        ВЫЧИСЛЕНИЯ ИЗ СТРОКИ ЧИСЛА СОГЛАСНО ИСПОЛЬЗУЕМОЙ СИСТЕМЫ ВЫЧИСЛЕНИЙ
function parse (string) {
 return parseInt(string, 16) // выведет передоваемую строку в функцию в числе шестнадцатиричной системы
}
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





# На разбор

```javascript
const modifiedSum = (a, n) => a.reduce((sum, e) => sum + e ** n - e, 0)

const modifiedSum = (a, n) => a.reduce((a,v) => a + v ** n, 0) - a.reduce((a,v) => a + v, 0)


function modifiedSum(a, n) {
  let degreeCounter = 0
  let minusCount = 0
  a.forEach(function (item, i, arr) {
     degreeCounter += item ** n;
     minusCount += item;
  });
  return degreeCounter - minusCount;
}
//--------------------------------------------------------------------


function validatePIN (pin) {
  a = /^[0-9]+$/.test(pin);
      if(a && (pin.length == 4 || pin.length == 6)) {
        return true;
      }else{
      	return false;
      }
    }

    function validatePIN(pin) {
  const preparedPin = pin.replace(/\D/g, '');
  
  return preparedPin === pin && (pin.length === 4 || pin.length === 6);
}

function validatePIN (pin) {
  //return true or false
  var n = pin.length;
  if( n != 4 && n != 6)
      return false;
  for (var i in pin)
      if (pin[i] > '9' || pin[i] < '0')
          return false;
  return true;
}

//--------------------------------------------------------------------

function abbrevName(name){
  let arr = name.split(' ');
  let first = arr[0];
  let second = arr[1];
  let secondCase = second[0];
  let firstCase = first[0];
  return `${firstCase.toUpperCase()}.${secondCase.toUpperCase()}`;
}



function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

```