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
   let a = +prompt(`Введите число больше 100`, ``);
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
