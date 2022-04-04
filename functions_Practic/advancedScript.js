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