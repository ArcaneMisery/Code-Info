# Обьекты
**Обьект** - используется для хранения коллекций различных значений и более сложных вещей. 
Обьект создается при помощи {} с необязательным списком свойств в них.Свойтво это пара ключ значение ( isObject: True), значением может быть что угодно.
```javascript
let user = new Object(); // создание обьекта при помощи конструктора обьекта
let user = {}// создание обьекта при помощи литерала {} - литерал
// так обьект без свойств и значений в нем является пустым обьектом, но обьектом
let user = {// создаем обьект
   name: `John`,// под ключом name хранится john
   age: 30// под ключом age находится 30
}
// можно сказать что этот обьект как ящик под именем user с папками name и age в ней.
// в обьектах есть свойства подписанные под ключами.
// заметить что чтобы обратится к папке мы должны след образом обьект.папка
alert(user.name);//   john
alert(user.age);// 30
// Добавление нового свойства
user.isAdmin = true;
//заметить что в этом случае используется оператор присваевания
alert(user.isAdmin)//true
//удаление свойства
delete user.age
alert(user.age)// undefined

// имя свойства можно дать несколькими словами тогда синтаксис такой
let user = {
   name: `John`,
   "likes birds": true// имя свойства из нескольких слов должно быть в кавычках
}
// последнее свйство обьекта может закканчиватся запятой или это висячая запятая
let user = {
   name: `wasya`,
}
// оставляя так запятую можно не боятся ошибок при добавлении новых свойств.
```
<details><summary>Обьект который обьвлен через const можно менять</summary>  

```javascript
const user = {
   name: `wasya`
};
user.name = `Petya`
alert(user.name)// Petya
// так происходит из за того что const запрещает менять саму переменную а не ее содержимое 
```
</details>  

## доступ к переменным в несколько слов
```javascript
let user = {};

user["likes birds"] = true; // присваиваем свойство и значение в обьект
alert(user["likes birds"]); // true
delete user["likes birds"]; // удаление свойства

// квадратные скобки позволяют обратится к свойству имя которого результат выражения
// например хранение имени свойства в переменной
let key = "likes birds"
user[key] = true;// тоже самое что и user["likes birds"] = true  
// переменная key может быт вычисленна во время выполнения кода или зависеть от какого либо ввода из вне
let user = {
   name: `John`,
   age: 30,
};

let key = prompt(`Что вы ххотели узнать о нем?`, "name");
//доступ к свойству 
alert( user[key] ) ;// john если введено name 
// значит ли это что описанные свойства являются строчками??????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//зпись через точку вернет undefined  
```
## Вычисляемые свойства
```javascript
let fruit = prompt(`What fruit do you want?`,`apple`)

let bag = {
   [fruit] = 5,//имя свойства будет взято из переменной fruit
};
alert( bag.apple ) // 5 если введено `apple`
// смысл во всем этом заключается в том что надо взять свойство из переменной которая вычисляется в процессе
// более сложный вариант применения []
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```
## Свойство из переменной
```javascript
function makeUser(name, age) {
   return {
      name: name
      age: age
      // another property
   };
}

let user = makeUser(`John`, 30);
alert(user.name); //john
// мы сделали конструктор юзеров, такая конструкция настолько популярна что существует в на много упрощенных формах
function makeUser(name, age) {
   return {
      name, // Тоже самое что и name: name
      age // тоже самое что и age: age
   };
}
```  
## Имена свойств
Имя переменных не может совпадать с зарезервированными словами такими как for, function, let  и т.д.
Одноко для оьектов такое ограничение отсутствует
```javascript
let obj = {
   for: 1,
   let: 2,
   return: 3
}
alert( obj.for + obj.let + obj.return );  // 6
// нет никаких ограничений к именам свойств
// по дефолту все имена свойств - сроки либо символы(с ними позже)

let obj = {
  0: "Тест" // то же самое что и "0": "Тест"
};

// обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
alert( obj["0"] ); // Тест
alert( obj[0] ); // Тест (то же свойство)
```  
## Проверка существования свойства оператор in
В принципе получить безошибочно доступ к любому несуществующему свойству можно просто такое свойство будет undefined.  
И это будет носить хзарактер проверки
```javascript
let user = {}; // литерал

alert( user.noSuchProperty === undefined ); // true 
// оператор in

`key` in object

let user = {name: `wasya`, age: 30};
alert( `age` in user); // true такой есть
alert(`dfageds` in user); // false user.dfageds не существует
// кавычки означают образение именно по свойству(ибо они строки)
// обращение же без ковычек означает обращение по переменной
let user = { age: 30 };

let key = "age";
alert( key in user ); // true, имя свойства было взято из переменной key
```  
На деле оператор in нужен для замены обычной проверки на undefined только в случае если одной из свойств и есть undefined  

```javascript
let obj = {
  test: undefined
};

alert( obj.test ); //  выведет undefined, значит свойство не существует?
alert( "test" in obj ); // true, свойство существует!
```  
## Цикл for...in
Используется для перебора всех свойств и отличается от for
```javascript
for (key in object){
   ...
   // выполняется для каждого свойства обьекта
}
let user = {
   name: `John`,
   age: 30,
   isAdmin: true
};

for(let key in user) {
   // алертаем ключи
   alert( key );// name age isAdmin
   // алертаем их значения
   alert(user[key]);// john 30 true
};
// такой порядок вывода означает что свойства в обьекте неким образом упорядочены об этом нижу
```
## Упорядолчение свойств обьекта
```javascript
let codes = {
   `49`: `Germany`
   `375`: `Belarus`
   `8`: `Russia`
   //...
   `1`: `USA`
};
for (let code in codes) {
   alert( code ); // 1, 8, 49, 375
};
//номера пойдут по возрастанию ибо являются целыми числами 
// такое еще называется целочисленным свойством 
// целый числа идут от 1 до бесконечности в порядке возрастания всегда
// но если свойства будут не целочисленными то они будут идти в порядке создания
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // добавим ещё одно свойство

// не целочисленные свойства перечислены в порядке создания
for (let prop in user) {
  alert( prop ); // name, surname, age
}
// таким образом если мы поставим унарный плюс перед каждым свойством они не будут целочисленными ибо "375" не тоже самое что и "+375"
let codes = {
   `49`: `Germany`
   `375`: `Belarus`
   `8`: `Russia`
   //...
   `1`: `USA`
};
for (let code in codes) {
   alert( +code ); // 49 375 8 1
};
// теперь все работает
```
 # копирование обьектов и ссылки  
 Одним из главных отличий обьектов от примитивов являчется то что они хранятся по ссылке  
 ```javascript
 // переменные присвиваются и копируются по значению(к примеру по строке в них)
let message = 'Hi'

//переменная хранит не сам обьект а его адресс в памяти или ссылку на него
let user = {
   name: 'wasya'
};
// обьект находится где то в памяти, а в переменной лежит ссылка на эту область памяти
// когда переменная копируется, сам обьект не дублируется, дублируется сама ссылка на обьект
let user = {
   name: 'wasya'
   status: 'admin'
};
let admin = user;
admin.name = 'Petya';
alert(user.name)// `Petya`
 ```
 ## сравнение
 ```javascript
// два обьекта равны только в том случае если это один и тот же обьект
let a = {};
let b = a;
alert(a == b); // true
alert(a === b); // true

let a = {};
let b = {};
a == b; // false
a === b; // false
// оба пусты но не равны
 ```
 ## Клонирование и обьединение. Object.assign  
Для того чтобы создать независимого клона обьекта мы должны перебрать свойства основного и копировать каждое.
 ```javascript
let user = { // основной обьект
   name: 'Isac',
   age: 30
};
let clone = {}; // место куда скопируется основной обьект

for (let key in user) { 
   clone[key] = user[key];
   // перебираем свойства оснвного обьекта и каждое присваиваем в пустой новый обьект
};

clone.name = 'Petya';
alert(user.name); // 'Isac' в основном свойство name не изменилось

// так же для реализации такого можно использовать метод Object.assign
Object.assign(dest, [src1, src2, src3....]);
// dest - целевой обьект
//остальные аргументы - исходные обьекты
// метод копирует все свойства исходныых обьектов в целевой обьект dest
// возвращает dest
let user = { name: 'Isac' };

let permission1 = { canView: true };
let permission2 = { canEdit: true };
//копируем свойсва обьектов выше в обект user
Object.assign(user, [permission1, permission2]);
// теперь user name isac, canView:true, canEdit: truel

// если целевой обьект уже имееет копируемоемое в него свойствоБ то оно будет перезаписанно.
let user = { name: "Иван" };
Object.assign(user, { name: "Пётр" });

alert(user.name); // теперь user = { name: "Пётр" }
 ```
 ## Вложенное клонирование  
 ```javascript
let user = {
   name: 'Isac',
   sizes: {
      hight: 182,
      width: 50
   }
};

alert(user.sizes.height) // 182
// недостаточно сделать предыдущие дествия т.к. теперь скопируется ссылка sizes на вложенный обьект а не сам вложенный обьект.
let user = {
   name: 'Isac',
   sizes: {
      hight: 182,
      width: 50
   }
};
let clone = Object.assign({}, user);

alert(user.sizes === clone,sizes) // true
// чтобы исправить это нужно в цикле клонирования сделать проверку не является ли свойство обьектом и если да, скопировать его сруктуру так же
// для таких действий можно использовать метод .cloneDeep(obj) из библиотеки lodash
 ```  
 # Сборка мусора  
 Обьекты непосредственно связаны с памятью и поэтому все манипуляции внутри происходят неведамо для глаза поэтому надо знать как это работает в корне.
 ## Достижимость
 Достижимые значения это те которые доступны или используются.Они гарантированно находятся в памяти  
   1. значения которые не могут быть удалены:  
+ Локальные переменные и параметры текущей функции
+ Переменные и параметры других функций в текущей цепочке вложенных вызовов.
+ Глобальные переменные
+ некоторые другие внутренние значения

Такие значения называются корнями  

   2. Любое другое значение является достижимым если оно доступно по ссылке из корня или цепочке ссылок.

В js есть фоновый процесс который называется **сборщик мусора**
Пример
```javascript
let user = {
   name: 'Isac'
};
//<global> -user- Object, name: 'Isac'

//-user- обозачает ссылку на обьект соответственно если перезаписать обьект будет потерян

user = null;
// теперь обьект isac стал недостижимым сборщик удалит его и освободит память
// но если скоприровать ссылку в другую переменную обьект не удалится
let admin = user
// теперь у нас остался доступ по друггой ссылке
```
## Взаимосвязанные обьекты
```javascript

function marry(man, woman) {// функция marry женит 2 обьекта
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});
// функция marry женит 2 обьекта а так же возвращает новый обьект family со ссылками на оба предыдущих что же получится в итоге
// все обьекты буду взаимосвязанны ссылками друг с другом
delete family.father;
delete family.mother.husband;
// теперь у нас нет ни одной входящей ссылки к обьекту john, поэтому сборщик удалит его
```
**только входящие ссылки могут сделать обьект достижимым**
## Недостижимый остров
Если взять предыдущий обьект и удалить ссылку family мы удалим все ссылки на обьекты ниже wife и husband.  
Таким образом они станут недостижимы хотя и будут связаны друг с другом, как будто мы удалили целый остров данных.  
## Алгоритм работы сборщика мусора  

+ Сборщик мусора «помечает» (запоминает) все корневые объекты.
+ Затем он идёт по их ссылкам и помечает все найденные объекты.
+ Затем он идёт по ссылкам помеченных объектов и помечает объекты, на которые есть ссылка от них. Все объекты запоминаются, чтобы в будущем не посещать один и тот же объект дважды.
+ …И так далее, пока не будут посещены все ссылки (достижимые от корней).
+ Все непомеченные объекты удаляются. 

# Метод обьекта this
Методы существуют для совершения определенных действий над обьектом
## Примеры методов  
```javascript

let user = {
  name: "Джон",
  age: 30
};
//создаем и применяем метод к обьекту
user.sayHi = function() {
  alert("Привет!");
};

user.sayHi(); // Привет!

// сокращенный способ написания метода
//форма записи в литерале
user = {
  sayHi: function() {
    alert("Привет");
  }
};

// сокращённая запись выглядит лучше, не так ли?
user = {
  sayHi() { // то же самое, что и "sayHi: function()"
    alert("Привет");
  }
};
// обьекты выполнят одинаковые действие однако одно тонкое отличие есть связанное с наследованием обьектов
```
## Ключевое слово this в методах
```javascript
// this будет нормально работать только имея доступ к информации обьекта.
let user = {
  name: "Джон",
  age: 30,

  sayHi() {
    // this - это "текущий объект"
    alert(this.name);
  }

};

user.sayHi(); // Джон
// использовать метод this надёжнее чем прямую ссылку user !!!!!!!!!!!!!!!!!!!      
```
## this не является фиксированным
то есть постоянно меняет свой фокус 
```javascript
function sayHi() {
   alert( this.name );
}// не будет ошибкой
// Значение this вычисляется во время исполнения кода и зависит от контекста
let user = { name: 'Isac' };
let admin = { name:'Admin' }; 

function sayHi() {
  alert( this.name );
};
// одна и та же функция в 2 обьектах
user.f = sayHi;
admin.f = sayHi;
// однако в каждом this разный
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user.f(); // Джон  (this == user)
admin.f(); // Админ  (this == admin)

admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

// вызов this без обьекта будет == undefined

// у стрелочных функций нет собственного this
// если использовать this внутри стрелочной функции то значения this берутся из внешней нормальной функции
let user = {
   firstNmae: 'Isac',
   sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
   }
};
// arrow() использует значение this из внешнего метода sayHi
user.sayHi(); // Isac 
```  
# Конструкторы создание обьектов через new
синтаксис литерала {} позволяет сделать лишь 1 обьект но порой надо сделать много однотипных обьектов в таком случае на помощь приходит оператор new
## Функция конструктор   
функция котснтруктор 1.**имя начинается с большой буквы** 2.**должна вызываться при помощи оператора new**.  
```javascript
function User(name) {
   this.name: name;
   this.isAdmin: false;
};

let user = new User('Wasya');
alert(user.name); // Wasya
alert(user.isAdmin); // false
// когда происходит выхов функции с помощью new происходит:
// создается пустой обьект и присваивается this
// выполняется код функции(обычно присваивает в this свойства)
// возвращает значение this
// грубо говоря вот что происходит

function User(name){
   // this = {}, неявно
   //добовляет свойства в this
   this.name: 'wasya';
   this.isAdmin: false;
   // return this неявно
}
// когда будет необходимо создать других пользователей можно просто использовать new User('igor') new User('Isac');
```
Нужно заметить что любую функцию можно вызвать через new и выполнится алгоритм описанный выше, большая буква просто подсказывает что функция является конструктором и ее следует вызывать через new.  
<details><summary>Оптимизация кода</summary>  

new function() {...}
```javascript
// если в коде много строк создающих один сложный обьект можно обернуть это в функцию конструктор
let user = new function() {
   this.name: 'wasya';
   this.age: 30;

 // ...другой код для создания пользователя
// возможна любая сложная логика и выражения
// локальные переменные и т. д.
}
//такой конструктор не может быть вызван дважды так как он нигде не сохраняется, просто создается и тут же вызывается. Таким образом он создает обьект но без возможности его повторного использования.
```

</details>  

## Провера на вызов new.target
Проверяет функция вызвана при помощи new или без него, если да вернет саму функцию в противном случае undefined.  
```javascript
function User() {
   alert(new.target);
};
User(); // undefined
new User(); // function User {...};
```  
## Возврат значения из конструктора return
Обычно return сам по себе происходит неявно  
Однако если все return есть, то применяется правило  
+ при вызове return с обьектом, будет возвращен обьект, а не this.
+ при вызове return с примитивным значением, примиивное значение будет отброшено.  

return с обьектом возвращает обьект, в любом другом случае коструктор вернет this
```javascript
function BigUser() {
   this.name = 'wasya';

   return {name: 'Godzilla'}; // возвращает этот обьект
}
alert(new BigUser().name) // Godzilla получили этот обьект  
function SmallUser() {
   this.name = 'Wasya';

   return; // вернет this
}
alert(new SmallUser().name) // Wasya  

// если аргументы передавать не нужно
```  
<details><summary>скобки при вызове new</summary>  

Можно не использовать скобки при вызове если не нужно передаваь аргументы
```javascript
let user = new User; // без тоже что и 
let user = new User();
```

</details>  

## Создание методов в конструкторе  
Можно передовать конструктору параметры как создавать обьект и что записывать

```javascript
function User(name) {
   this.name = name; // данное имя

   this.sayHi = fubction() { // метод sayHi
      alert('Меня зовут' + this.name);
   };
}
let vasya = new User('Wasya');
vasya.sayHi();// меня зовут Wasya
```  
# Опциональная цепочка "?.", несуществующее свойство  
Опциональная цепочка ?. это безопасный способ получения информации и доступа к свойству даже которого не существует
## Проблема несуществующего свойства
```javascript

let user = {}; // ползьватель без искомого свойство

console.log(user.address.street); // вернет error  
// если бы было возвращено undefined это было бы логично и можно было бы продолжать работу в js 
//для решения этой проблем можно использовать

let user = {};

console.log(user && user.address && user.address.street); // undefined без ошибки
```
Но можно использовать и менеее громоздкую контрукцию
## Опциональная цепочка
```javascript
// опциональная цепочка ?. останавливает вычисление и возвращает undefined если часть перед ?. имеет значение Undefined либо Null.

let user = {}  

console.log( user?.address?.street) // undefined без ошибки 
// такое чтение выполнится без ошибки даже если самого обьекта не будет существовать
let user = null;

console.log(user?.address); // undefined
console.log(user?.adress.street); // indefined
// НЕ СТОИТ ЗЛОУПОТРЕБЛЯТЬ ОПЦИОНАЛЬНОЙ ЦЕПОЧКОЙ
// стоит ставит ?. только перед тем в существовании чего мы сомневаемся

// ПЕРЕМЕННАЯ ПЕРЕД ? ДОЛЖНА БЫТЬ ОБЬЯВЛЕНА
yser?.adress // erorr yser is not defined
```
## Сокращёное вычисление

```javascript
let user = null;
let x = 0;

user?.sayHi(x++); // user == undefined поэтому оператор закончит на этом вычисление и не дойдет до x++

alert(x);
```  
## Другие варианты применения
**Опциональная цепочка это не оператор**, а специальная синтаксическая конструкция, также работает с [] и функциями ().
```javascript
let user1 = {
   admin() {
      alert('I/m Admin');
   }
}
let user2 = {};
user1.admin?.(); // I`m Admin
user2.admin?.();
// без ошибок

// Использвования при обращении к свойству через [];
let user1 = {
   name: 'Wasya'
};
let user2 = null;
let key = 'name';
alert( user1?.[key] ); // Wasya
alert( user2?.[key]); // undefined
alert( user1?.[key]?.something?.not?.existing); // undefined

// Можно использовать совместно с delete
delete user?.name; // удалит user.name если пользователь существует  

```
# Тип данных Symbol
Используется для создания ключей обьекта также как и строки
## Символы
Представляют собой уникальный итендификатор
```javascript
// создание нового символа id
let id = Symbol();
// при создании символу можно дать описание (так же называемое именем) в основном для отладки кода
let id = Symbol('id');
// символы гарантированно уникальны даже если мы будем в них хранить одинаковое описание
let id = Symbol('id');
let id2 = Symbol('id');
console.log(id == id2) // false

//                      ВАЖНО!!!!!!!!!
//  символы не преобразуются автоматомм в строки, к примеру если вывести символ через alert предварительно не превратив в строку будет ошибка
let id = Symbol('id');
alert(id) // TypeError cannot cover type symbol to string

// это языковая заита от путаницы ибо символы это символы а строки это строки и они не должны неконтралируемо преобразововаться друг в друга
let id = Symbol('id');
alert(id.toString()); // Symbol(id), все работает 
// либо можно обратится лишь к описанию с помощью description
alert(id.deskription); // id
```
## Скрытые свойства
Символы позволяют создать скрытые свойства обьектов, к которым нельзя случайно обратится и перезаписать их из других частей программы
```javascript
// обьект принадлежит стороннему коду
let user = {
   name: 'Wasya'
};
let id = Symbol('id');
user[id] = 1;

alert( user[id] ); // нельзя получить доступ к данным по ключ-свойству

// Соит использвать символ потому что это в разы безопаснее чем использовать стандартные строки, к символу сложно нечаянно обратится и сторонний код вряд ли вообще уидит его.

// стороний код может создать для этого свой Symbol('id')
let id = Symbol('id');
user[id] = "Их итендификатор";

// конфликта между моим символом и созданным сторонним не будет чего не сказать если бы это была строка
let user = { name: "Вася" };

// Объявляем в нашем скрипте свойство "id"
user.id = "Наш идентификатор";
// ...другой скрипт тоже хочет свой идентификатор...

user.id = "Их идентификатор"
// Ой! Свойство перезаписано сторонней библиотекой!
```  
## Символы в литерале и игнорирование символов циклом for in
```javascript
let id = Symbol('id');
let user = {
   name: 'Wasya',
   [id]: 123 //просто id не сработает ибо используем в качестве ключа 
}
```
```javascript
let id = Symbol("id");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123
};
for (let key in user) alert(key) // name, age. ( однако id нет)
// но прямой доступ работает
alert('inline' + user[id] );

// это часть общего сокрытия чтобы если другая библиотека или скрипт будут работать с нашим обьектом они не получили случайно наше свойство и не перезаписали его
// Object.keys также игнорирует
// Но Object.assign кропирует и стоковые и символьные свойства
let id = Symbol('id');
let user = {
   [id]: 123
};
let clone = Object.assign({}, user)
alert( clone[id] ); // 123
```  
## Глобальные свойства
Итак каждый символ является индивидуальным для себя но что если символ должен быть наоборот глобальным?  
Для это го испоьзуется **глобальный реестр символов**
```javascript
// Для чтения или создания используется вызов Symbol.for(key)
// Он проверяет реестр и при наличии символа со значением key возвращает его иначе же создает новый символ Symbol(key) и записывает его под ключом key
let id = Symbol.for('id');
let idAgain = Symbol.for('id');// прочитывает символ и присваивает его в новую переменную
console.log( id === idAgain )// true


// существет обратный метод Symbol.keyFor который наоборот принимает в себя символ и возвращает его имя

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

// если искать локальный символ метод не находит символ и вернет Undefined
// однако для кажлого символа доступно вышеописанное свойство description
let globSymbol = Symbol.for('name');
let LocalSymbol = Symbol('name');

alert(Symbol.keyFor(globalSymbol) ); // name
alert(Symbol.keyFor(localSymbol) ); // undefined
alert(localSymbol.desckription); // name
```  
## Системные символы
В js есть много зарезервированных системных символов по типу 
+ Symbol.hasInstance
+ Symbol.isConcatSpreadable
+ Symbol.iterator
+ Symbol.toPrimitive  

Но о них позже.
# Преобразование обьектов в примитивы
Эта часть посвященна таким же действиям как неявное изменение типа данных у примитивов только теперь это же происходит с обьектами.  
Автоматическое преобразование происходит на этапе obj1 + obj2 данные преобразуются в примитив а затем выполняются действия  
Из всего можно выписать уже 3 константы
1. все обьекты в логическом типе являются true, существуют лишь их численные и строковые преобразования
2. Численные преобразования происходят когда идет вычитание обьектов либо выполняются математические операции
3. Строковое преобразование происходит при выводе обьекта alert(obj) либо в других случая где обьект используется как строка  

## Преобразование к примитивам
Можно тонко настраивать строковые и численные преобразования используя специальные методы обьекта  
Существуют 3 варианта преобразований ( 3 хинта)  
'string'
```javascript
alert(obj)
// используем обьект в качестве имени свойства
anotherObj[obj] = 123
```
'number'
```javascript
// явное преобразование
let num = Number(obj);

// математическое преобразование(исключая бинарный +)
let n = +obj;// unarn
let delta = date1 - date2;
//сравнения
let grater = user1 > user2;
```  
'default'
```javascript
// происходит когда оператор не уверен какой тип стоит ожидать к примеру когда бинарный + и складываются строка и число либо нестрогое ==
let total = car1 + car2;
// obj == string/number/symbol
if (user == 1) {
   ...
};
// оператор <> так же работает с обоими типами данных но все равно по историческим причинамм выводит number
```
**Итого** существуют лишь 3 варианта во что преобразуется обьект (3 хинта)
## Процесс преобразования.
В процессе преобразования движок js пытается найти и вызвать след методы обьекта
1. Вызывает ``obj[Symbol.toPrimitive](hint)`` метод с символьным ключом ``Symbol.toPrimitive`` если такой метод существует и передает ему хинт.
2. Иначе, если хинт равен "string" - пытается вызвать ``obj.toString()``, а если его нет, то ``obj.ValueOf()``, если он существует.
3. если хинт равен "number"/"default" - пытается вызвать ``obj.ValueOf()``, а если его нет, то ``obj.toString()`` если он существует.  

Разберем поподробнее
### Symbol.toPrimitive
```javascript
obj[Symbol.toPrimitive] = function(hint) {
   // возвращает примитивное значение
   // hint равно чему то из string number default
}
let user = {
   name: 'John',
   money: 1000,

   [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == 'string' ? `name: ${this.name}` : this.money
   }
};
// результаты
alert(user); // hint: string--> {hame: 'John'}
alert(+user); // hint: number--> 1000
alert(user + 500) // hint: default --> 1500

// Symbol.toPrimitive смог обработать все варианты преобразования
```
### toString/valueOf
эти оба метода являются очень старыми, они не представляют символы, это просто обычные меотды обьектов со строковыми именами, если нет метода Symbol.toPrimitive движок js пытается найти toString и ValueOf и вызвать их след образом  
toString --> valueOf для хинта со значением string
valueOf --> toString в ином случае 
```javascript
let user = {
   name: 'John',
   money: 1000,

   // для хинта string
   toString() {
      return `{name: "${this.name}"}`;
   },
   // для хинта Number и  default
   valueOf() {
      return this.money;
   }

};
alert(user); //toString -> {name:'John'}
alert(+user); // valueOf -> 1000
alert(user +500); //valueOf -> 1500
// получилось тоже самое что и при применении универсального метода symbol.toPrimitive 
// если нужно создать одно универсальное преобразование обьекта к примитиву для всех ситуаций для этого достаточно дать один toString

let user = {
   name: 'John',

   toString() {
      return this.name;
   }
};
alert(user);// toString --> John
alert(user + 500) // toString --> john500
```  
## Последующие операции  
Операция инициировавшая преобразование получает примитив а затем продолжает работу с ним производя дальнейшие преобразования если это необходимо
```javascript
let obj = {
   // обработает все преобразования в случае отсутствия других мметодов
   toString() {
      return "2";
   }
};
alert(obj * 2); // 4 обьект был преобразован к примитиву "2" затем умножение сделало его числом
alert(obj + 2) // 22 сложились 2 строки
```




