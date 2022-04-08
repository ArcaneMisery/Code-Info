"use strict"
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));



// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(); // ?

function sumTo(num) {
  let sum = 0;
  for(let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(25));

function recourseSumTo(n) {
  if(n === 1 )return 1;
  return n + recourseSumTo(n-1)
  
}
console.log(recourseSumTo(25));

function formSumTo(n) {
  return n * (n + 1) /2
}
console.log(formSumTo(25));


function factorial (n) {
  if(n == 1) return 1;
  return n * factorial(n - 1)
};
console.log(factorial(4));


function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);  
};
console.log(fib(1))

function fibonacci(n) {
  if(n <= 0){return[]};
  let a = [0, 1]
  for (let i = 2; i < n; i++ ){
    a.push(a[i - 1] + a[i - 2]);
  }
  return a[a.length - 1]
}
console.log(fibonacci(77));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  console.log(list.value);
  if(list.next){
    printList(list.next)
  }
}
printList(list);

function sum(a) {

  return function sum (b) {
    return a + b
  }
}
console.log(sum(3)(10));


function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b
  }
}
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

////////setTimeout,interval

function printNumbers(from, to) {
  let count = from;
  let timerid = setInterval(function() {
    console.log(count)
    if(count === to){ clearInterval(timerid)};
    count++;
  },1000);
}

printNumbers(2, 10);

function printTimeNumbers(from, to) {
  let count = from;
  setTimeout(function go (){
    console.log(count)
    if(count < to){
      setTimeout(go, 1000)
    }
    count++;
  },1000);
}

function factor(n){
  return n === 1 ? 1 : n * factor(n - 1) 
};
console.log(factor(5));

function fibonarik(n) {
  let a = [0, 1];
  for(let i = 1; i < n; i++) {
    a.push(a[i-1] + a[i]);
  }
  return a[a.length-1];
};
console.log(fibonarik(77));

function fibonarikRec(n) {
  return n <= 1 ? n :  fibonarik(n - 1) + fibonarik(n - 2)
};
console.log(fibonarikRec(40));

let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList2 (list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.next);
    tmp = tmp.next
  }
}
console.log(printList2(list2));
function printList3 (list) {
  console.log(list.value);
  if(list.next){
    printList3(list.next)
  }
}

console.log(printList3(list2));




function unique(arr) {
  return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O


let arrAnam = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let a = new Map;

  for(let word of arr) {
    let sort = word.toLowerCase().split('').sort().join('');
    a.set(sort, word);
  }
  return Array.from(a.values());
}




console.log( aclean(arrAnam) ); // "nap,teachers,ear" или "PAN,cheaters,era"

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys())
console.log(keys)
keys.push("more");



let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries (obj) {
  let sum = 0;
  for(let sal of Object.values(obj)){
    sum += sal
  }
  return sum
}

console.log( sumSalaries(salaries) ); 


let user = {
  name: 'John',
  age: 30
};

function count (obj){
  let counter = 0;
  for(let key of Object.keys(obj)){
    counter++
  }
  return counter
}
console.log( count(user) ); 

let fev20 = new Date(2012, 1, 20, 3, 12);
console.log(fev20)
let weekDate = new Date(2014, 0, 3);
function getWeekDate(date) {
  let days = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'];
  return days[date.getDay()];
}
console.log(getWeekDate(weekDate));
let dateAgo = new Date(2015, 0, 2);


function getDateAgo(date, days) {

  let ago = (date.getFullYear() * 365 + date.getMonth() * 30 + date.getDay() - days);
  console.log(Math.floor(ago / 365))
  let year = ago - 365 * Math.floor(ago / 365);
  console.log(Math.floor(year / 30)); 
  let day = year - 30 * Math.floor(year / 30);
  console.log(day)
  return new Date(Math.floor(ago / 365), Math.floor(year / 30)-1, day)
}
console.log(getDateAgo(dateAgo, 300))