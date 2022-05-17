# простые операции
eval(a+b+c...)
посчитает все что угодно
```javascript
let operator = '-';
let a = 2;
let b = 3;
console.log(eval(a + operator + b))
// -1
```


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

```javascript
//                          ПЕРЕВОРОТ СТРОКИ
let str = 'hello world!'

str.split('');// разбиваем строку на буквы и заносим в массив
str.reverse(); // переворачиваем массив
str.join(' ');// собираем из массива строчку
console.log(str);// !dlrow olleh   


//                        Регулярные выражения для replace()
str.replace('!', '') // поменяет знак на пустую строку(удалит первый который найдет)
str.replace(/!$/, '') // удалит последний ! /...$/ говорит удалить последнее вхождение
str.replace(/!/g, '') // удалит все ! /.../g удаляет все вхождения  


//                            ДЕЙСТВИЯ С СИМВОЛАМИ
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


                          // ПРОВЕРКА СТРОКИ НА НАЛИЧИЕ
let str = '21que';
console.log(str.includes('21')) // true
console.log(str.includes('21', 2))// false так как на позиции [2] нет 21.
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
Задачи в которых не даны арггументы в функцию
```javascript
// для их решения нужно использовать обьект arguments
// в него будут передаваться все данные
//пример
function sum() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  };
  return sum;
}
console.log(sum(12, 1, 1, 1, 1, 1, 1)) // 18
```





# Массивы
Создание независимой копии массива

```javascript
let arrOne = [1, 2, 3];
let arr = arrOne.slice();

console.log(arr)// [1, 2, 3]

```
Поиск чисел в массиве
```javascript
//находит наименьшее число в массиве
Math.min.apply(null, numArr);
// находитнаибольшее число в массиве
Math.max.apply(null, numArr);

```  
### формирование массива из заданного количества элементов и состоящего из них
```javascript
let arrPush = () => {
  return [...Array(n)].map((x, i) => i + 1)
}
// arrPush(5)
console.log(arrPush(5)) // [1, 2, 3, 4, 5]

```





# На разбор

```javascript
https://www.codewars.com/kata/58ee4db3e479611e6f000086/train/javascript
function bitMarch (n) {
	let a = [0,0,0,0,0,0,0,0];
  let ans = [];
  for(let i = 0; i < n; i++){
    a.shift()
    a.unshift(1);
  }
  console.log(a)
  while(a[7] !== 1){
//     console.log(a)
    for(let i = 0; i < a.length; i++ ){
      if(a[i] === 1){
        a.splice(i, 1, 0)
        a.splice(i+1, 1, 1)
        console.log(a)
        i++;
      }
    }
     ans.push(a)
  }
  console.log(ans);
  return ans
}
// WHY DOES NOT WORK??????? -----------------------------------------------------------------------------------------------------


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


// bread sendwich 6 dan
// мое решение
https://www.codewars.com/kata/622a6a822494ab004b2c68d2/solutions/javascript

// сокращенное
function slicesToName(n) {
  if (!(n >= 2)) return null;
  let r = new Array(Math.floor(n / 2)).fill("sandwich");
  return n % 2 ? ["bread", ...r].join(" ") : r.join(" ");
}
function nameToSlices(name) {
  return String(name)
    .split(" ")
    .reduce((a, c, i, arr) => {
      if (a === null) c = null;
      if (c === "bread" && i === 0 && arr.length !== 1) return (a += 1);
      return c === "sandwich" ? (a += 2) : (a = null);
    }, 0);
}




//      MUSIC ENCODER 5 dan

https://www.codewars.com/kata/58db9545facc51e3db00000a/train/javascript

function compress(music) {
  let str = 0
  let a
  for (let i = 0; i < music.length; i++){
    if(music[i] === music[i + 1]){
      console.log(music[i]);
      str = `${music[i]}*${music[i]}`;
      a = music.splice(i, 1 + i, str);
    }else if(music[i] === (music[i])){
      console.log(music[i])
      str = `${music[i]}-${music[i + i]}`;
      music.splice(i, 1 + i, str);
      }
    };
    console.log(music)
  let answer = music.join(',');
  console.log(answer)
    return answer;
  }



// function compress(music) {
//   let comboStack = []
//   let compressed = []
//   console.log(music)
//   for (let i = 0; i<music.length; i++) {
//     let cur = music[i];
//     if (comboStack.length < 2) {
//       comboStack.push(cur)
//     } else {
//       // something is on the combostack, do something
//       let prev = comboStack[comboStack.length-1];
//       let prevPrev = comboStack[comboStack.length-2];
//       if (prev === prevPrev) {
//         if (cur === prev) {
//           comboStack.push(cur)
//         } else {
//           compressed.push(comboStack[0]+'*'+comboStack.length)
//           comboStack = [cur];
//         }
//       } else if (prev === prevPrev+1 || prev === prevPrev-1) {
//         if (cur === prev+1 && prev === prevPrev+1) {
//           comboStack.push(cur)
//         } else if(cur === prev-1 && prev === prevPrev-1) {
//           comboStack.push(cur)
//         } else if (comboStack.length === 2) {
//           compressed.push(''+comboStack.shift());
//           comboStack.push(cur)
//         } else {
//           compressed.push(comboStack[0] + '-' + prev)
//           comboStack = [cur]
//         }
//       } else {
//         if (cur-prev === prev-prevPrev) {
//           comboStack.push(cur)
//         } else if (comboStack.length === 2) {
//           compressed.push(''+comboStack.shift()); 
//           comboStack.push(cur)
//         } else {
//           compressed.push(comboStack[0] + '-' + comboStack[comboStack.length-1]+'/'+Math.abs(prev-prevPrev))
//           comboStack = [cur]
//         }
//       }
//     }
    
//   }
//   if(comboStack.length &&comboStack[0] === comboStack[1]) {
//     compressed.push(comboStack[0]+'*'+comboStack.length)
//     comboStack = []
//   } else if (comboStack.length > 2 && Math.abs(comboStack[0]-comboStack[1]) === 1) {
//     compressed.push(comboStack[0] + '-' + comboStack[comboStack.length-1])
//     comboStack = []
//   } else if (comboStack.length > 2) {
//     compressed.push(comboStack[0] + '-' + comboStack[comboStack.length-1]+'/'+Math.abs(comboStack[0]-comboStack[1]))
//     comboStack = []
//   }
//   compressed.push(...comboStack)
//   return compressed.join(',');
// }

//  --------------------------------------------------------------------------------
function isNice(arr){
  if(arr <= 1){return false}
  let isNice;
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(i === j){continue}
      
       if(arr[i] + 1 === arr[j] || arr[i] - 1 === arr[j]) {
         isNice = true;
         console.log(arr[i])
         break;
        }
    }
    if (!isNice) {
      return false;
    }
  }
  return true;
}

function isNice(arr){
  if (arr.length <= 0) {
    return false;
  }
  const result = arr.every((item) => {
    return arr.some((current) => {
      return item === current + 1 || item === current - 1;
    });
  });
  return result;
}



```