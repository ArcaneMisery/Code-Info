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