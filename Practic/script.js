"use strict"
/*
let name = 'Ilya';

alert(`hello ${1}`);
alert(`hello ${"name"}`);
alert(`hello ${name}`);
*/
//let age = prompt(`Как вас зовут`, ` `);
//alert(`вас зовут ${age}`);  
//----------------------------------------------  
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
// a = 2, b = 2.  

a = 2;

let x = 1 + (a *= 2);
// a = 4, x = 5.
//"10"  +
//-1 +
//1 +
//2 +
//6 +
//"9px"  +
//"$45"  +
// 2     +
// NaN   +
// infinity  +

a = "  -9  " + 5 // итог "  -9  5"
//"-95" - 

//-14 +
//1 +
// NaN +

//NaN  -
let k = " \t \n" - 2// итог -2, потому что \t и \n, являются пробельными символами,
// а они счищаются, значит остается 0 - 2.  
//a = prompt("Первое число?", 1);
//b = prompt("Второе число?", 2);

//alert(+a + +b);
//alert(0 == null);  
//---------------------------------------------  
// true
// false
"2" > "12" // true
// тк посимвольное сравнение символ 2 больше чем символ 1
// true
// false 
// false
// false  
// --------------------------------------------------
//let name = prompt(`Какое официальное название js?`, "");
//if(name == `ECMAscript`) {
//   alert(`right`)
//} else {
//   alert(`false`)
//};  

//let num = +prompt(`Выбери число`, '');
//if(num > 0) {
 //  alert(1);
//} else if(num < 0) {
//   alert(- 1)
//} else {
 //  alert(0);
//};
/* 
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
};

*/
/*let result 
//(a + b < 4) ? result = `toomactch` : result = `nottoomatch`;
result = (a + b < 4) ? `toomactch` : `nottoomatch`;
console.log(result);*/
// ---------------------------------------
/*let login = prompt(`Введите должность`, ``);
let message
message = (login == `Сотрудник`) ? `Hello` :
   (login == `Директор`) ? `Здравствуйте` :
   (login = ``) ? `Нет логина` :
   ``;
   alert(message);*/

/*age = 15;
if(age >= 14 && age <= 90){
   alert(`в районе от 14 до 90`)
};

if(!(age >= 14 && age <= 90)) {
   alert(`вне диапозона`);
};
if(age < 14 || age > 90){
   alert(`вне диапозонв`);
};*/
// -----------------------------

/*let whoAreYou = prompt(`Кто вы`, ``);
let password;
if(whoAreYou == `Админ`){
   password = prompt(`Введите пороль`,``);
}else if(whoAreYou == null){
   alert(`отменено`)
}else {
   alert(`я вас не знаю`)
}
if(password == `123`){
alert(`Зравствуй Админ`);
}else if (password == null){
   alert(`отменено`)
}else{
   alert(`неверный пороль`)
};  

let emptyString = '';
console.log(typeof emptyString);

let userName = prompt(`Кто вы?`, ``);
if(userName === `Админ`){
   let userPass = prompt(`Пороль?`, ``);
   if(userPass === `123`){
      alert(`Здравствйте!`);
   }else if(userPass === `` || userPass === null) {
      alert(`Отменено`);
   }else{
      alert(`Неверно введен пороль`)
   };
}else if(userName === `` || userName === null){
   alert(`Отменено`);
}else{
   alert(`Я вас не знаю`)
};*/
let i = 3;

while (i) {
  console.log( i-- );
}
//нуль на котором будет false не выведется  
i = 0;
while (++i < 5) console.log(i);
// вывод от 1 до 4, i увеличивается на 1 и дальше сравнивается
i = 0
while (i++ < 5) console.log(i);
// вывод от 1 до 5 т.к в сравнении будет возвращатся старое значение i
// то есть i увеличилась на единицу, а в сравнении вернулась прошлым значением.
for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 5; ++i) console.log(i);
// от 0 До 4 в обоих случаях тк for изначально определяет новую i 
for(let i = 0; i <= 10; i++){
   if(i % 2 !== 0 || i == 0)continue;
   console.log(i);
};
for (let i = 0; i < 3; i++) {
   console.log( `number ${i}!` );
 };
 i = 0
   while (i < 3){
      console.log(`number ${i}!`);
      i++; 
   }
for(let i = 0; ;i++ ){
   let a = 2;
   if(a > 100 || a == 0)break;
}

let n;
n = 20;
nextValue: 
for (let i = 2 ; i <= n; i++){
   
   for(let j = 2; j < i; j++){
      if(i % j == 0)continue nextValue;
   }
   console.log(i);
};  

let bigger = -13;
let m = bigger < 0;
console.log(m);  

function checkAge(age){  

   return (age > 18) ?  true :  confirm(`Mom?`); 

};
function checkAge(age){

   return ((age > 18) || confirm(`Parents?`))
};

function min (a, b){
   if (a > b){
      return b;
   }else{
      return a; 
   } 
};

function pow (x, n){
   if (n < 1 || n % 1 !== 0){
      // return alert(`Число не натурально!`);
   };
   
   let degree = x ** n;
   return degree; 
} 
console.log(pow (3, 3));  

let user = {
   name: `Admin`,
   age: 30
}
// alert(user.age);
// delete user.age;
// alert(user.age);  
//---------------------------------------------------------------





let menu = {
   width : 200,
   hight : 300,
   title : `my menu`
};

/*function multiplyNumeric(menu) {

   for (let key in menu) {
      typeof (menu[key]) === 'number' ? menu[key] = menu[key] * 2 : null;
      console.log(menu[key]);
   };
};

multiplyNumeric(menu);  
//console.log(menu[key] * 2);
console.log(menu[key]);*/




function multiplyNumericTwo(menu) {

   for (let key in menu) {
      if (typeof(menu[key]) === 'number'){
         menu[key] = menu[key] * 2;
         console.log(menu[key]);
      }else{
         null;
      }
   };
};

multiplyNumericTwo(menu);



// if (n === 0 || m === 0 || n < 0 || m < 0) {
//    return 'INVALID'
// };
// let counter = 0
// for (let i = 1; i < m; i++) {
//    let mulNumber = n * i;
//    if (mulNumber % n === 0 && mulNumber < m) {
//       counter += mulNumber;
//    } else {
//       continue;
//    };
// };
// return counter;
// }  


// games.forEach(function(item, i, arr){
//    let points = item.replace( ':', '');
//    //console.log(points);
//    x = +points.slice(0,1);
//    y = +points.slice(1,2);
//      console.log(x);
//      console.log(y);
//    if(x > y){
//      counter + 3;
//    }else if(x === y){
//      counter + 1;
//    };
//    console.log (counter)
//  });
//  if(x > y){
//    counter += 3;
//  }else if(x === y){
//    counter += 1;
//  };  



a = {
   name: 'wasya',
   age: 30
};
b = {}
Object.assign(b,(a));
console.log(b);  


// function well(x) {
//    let b = 0;
//    for (let i = 0; i < x.length; i++) {
//       console.log(x);
//       if (x[i] === 'good') {
//          ++b;
//       }
//    }
//    return b === 0 ? 'Fail!' :
//       (b === 1 || b === 2) ? 'Publish!' :
//          (b > 2) ? 'I smell a series!' : null
// }  
// let pin = '1123'
// let numbPin = (Number(pin));
// console.log(typeof numbPin);
// if (typeof Number(pin) === Number){
//    console.log('it is num')
// }

let variable = '1234'
console.log(variable == Number);
console.log(typeof +variable === 'number');

function validatePIN (pin) {
   console.log(pin == Number)
   let jet = typeof +pin;
   console.log(jet);
   console.log(typeof pin);
   console.log(pin);
   if (pin.length >= 4 && pin.legth <= 6 && jet === 'number'){
     console.log(true);
   }else{
     console.log(false);
   }
 }

validatePIN(`1234`);





function validatePIN (pin) {
  
   let a = /^[0-9]+$/.test(pin);
   if (pin.length >= 4 && pin.legth <= 6 && a == 1){
     return true;
   }else{
     return false;
   }
 }  
 function solution(digits){
   let numArr = [];
   let newArr
   for(let i = 0; i < digits.length; i++)
     if (i > 9999 && i < 100000){
       numArr.Push(i);
     };
   console.log(numArr);
   return Math.max.apply(null, numArr);
 }
 console.log(solution('22222222222222222222222222222222'));


//  function solution(digits){
//    let numArr = digits.split('')
//    let newArr = []
//    let search
//  for(let i = 0; i < numArr.length; i++){
//    search =  numArr[0 + i] + numArr[1 + i] + numArr[2 + i] + numArr[3 + i] + numArr[4 + i];
//    newArr.push(+search);
   
//    console.log(+search);
//  }
//    console.log(newArr);
//    for(let i = 0; i < newArr.length; i++){
//      console.log(newArr[i]);
//      if(newArr[i] === NaN){
//         console.log(newArr[i]);
//        newArr.splice(i, 1);
//      }  
//    }
//    return Math.max.apply(null, newArr);
//  }
// console.log(solution('22222222222222'))
 // https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript  

//  let answer = 0; // сюда присвоить ответ
//  for(let i = 0; i < digits.length; i++){ перебор длинного числа
//    let number = digits.substr(i, 5); идет по 5 символов один за другим и присваивает в number
//    if(Number(number) > answer){  если числовой вариант number больше того что лежит в answer
//  мы записываем туда новое 5 значное число
//      answer = Number(number)
//    }
//  }
//  return answer;



// for (let i = 0; i < xArr.length; i++) {
//    console.log(xArr[i])
//    for(let j = 0; j < arr_EN.length; j++){
//      if(xArr[i] === arr_EN[j]){
//        console.log(xArr[i])
//        xCount += ++j;
//      };  
//    }
//  }



//return (Math.floor(Date.parse(date)) / 1000 === (Math.floor((Math.floor(Date.now(date)) / 1000)))) ? true : false
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2]();