# Прототипы, наследование  
<hr/>

# Прототипное наследование  
## Основы
Это скрытый обьект в js на который ссылается любой созданный в ручную обьект.  
Все обьекты в js имеют скртое свойство ``[[Prototype]]``, оно либо равно null либо ссылается на обьект "прототип".  
Если попробовать прочитать отсутствующее свойство в обьекте, js автоматом попробует взять его из прототипа - Такое поведение называется ПРОТОТИПНЫМ НАСЛЕДОВАНИЕМ   
```javascript
// чтобы пользоваться прототипами следует использовать синтаксис
object.__proto__ = object
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;
// теперь мы можем найти оба свойства в rabbit:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true
// rabbit прототипно наследует animal
```
``__proto__`` - это скрытое свойство обьекта являющееся геттером/сеттером для прототипа этого обьекта(прототип обьект обьекта как бы родитель!).  
При таком прототиппизировании из обьекта который используется в качестве прототипа будет наследоваться абсолютно все что в него вписано.  
Цепочка прототипов  
```javascript
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
let longEar = {
  earLength: 10,
  __proto__: rabbit
};
// walk взят из цепочки прототипов
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (из rabbit)
```  
у прототипов есть лишь несколько важных ограничений  
- Нельзя назначить ``__proto__`` по кругу  (зациклить)
- __Значение ``__proto__`` может быть либо object либо null!!!!__
   
## Операции записи  
Операции записи не используют прототип, прототип используется только для чтения свойств  
Это значит если сделать прототипом обьект к примеру со свойством walk() а потом в обьекте наследнике вписать свой собственный walk, при вызове способы из наследника js возьмет значение из основного обьекта а не из прототипного.**Другими словами свойства вписанные перебивают свойства протоипные**  
```javascript
let animal = {
  eats: true,
  walk() {
    /* этот метод не будет использоваться в rabbit */
  }
};
let rabbit = {
  __proto__: animal
};
rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};
rabbit.walk(); // Rabbit! Bounce-bounce!
```  
Исключения из правила - это свойства аксессоры, т к в них есть функция сеттер и запись в в такие обьекты обьекты осуществляется сеттерами
```javascript
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
let admin = {
  __proto__: user,
  isAdmin: true
};
alert(admin.fullName); // John Smith (*)
// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.name); // Alice
alert(admin.surname); // Cooper
```  
## Значение this  
Все работает довольно прямолинейно, **прототипы никак не влияют на значение this**
**Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.**  
```javascript
// методы animal
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};
let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};
// модифицирует rabbit.isSleeping
rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)
```  
**Методы обьекта прототипного родителя - общие, но его состояние-нет**  
## Цикл for in  
Цикл проходит и по обычным и по унаследованным свойствам обьекта  
```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
// Object.keys возвращает только собственные ключи
alert(Object.keys(rabbit)); // jumps
// for..in проходит и по своим, и по унаследованным ключам
for(let prop in rabbit) alert(prop); // jumps, затем eats
```  
Можно отфильтровать свойства выводя только собственные используя ``obj.hasOwnProperty(key)`` вернет true если у obj есть собственное(не унаследованное) совойство с именем key.  
### Немного про obj.hasOwnProperty() (неочевидно)  
Это свойство является прототипным наследованием, но не перечисляется оно в цикле, ибо на нем стоит флаг enumerable: false(Смотри Обьекты: флаги и дескрипторы свойств).  
### Почти все остальные методы получения ключей, игнорируют унаследованные свойства(Object.keys/values)  
# F.prototype  
### **Описанное может встречаться и чаще всего встречается в старом коде**  
Новые обьекты могут создаваться с помощью конструктора new F(), но если присваивать в конструктор прототип при помощи ``.prototype``, то он автоматически становится прототипом для создающихся в коснструкторе обьектов.   
Такое осуществлялось раньше при помощи свойства ``.prototype`` что по сути тоже самое что и ``__proto__``
```javascript
let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
alert( rabbit.eats ); // true
```
Фактически тут кроме того что создаётся обьект конструктором так еще и присваивается к нему прототип  
### F.prototype используется только в момент вызова конструктора, после этого вызова F.prototype и обьект ничего не связывает, этот как единоразовый подарок обьекту. То есть если создать несколько обьектов и в конструкторе поменять прототип, в созданных обьектах он не поменяется.  
## F.prototype по умолчанию, св-во constructor  
У каждой функции по умолчанию уже есть свойство "prototype"  
По умолчанию prototype - обьект с единственным св-вом constructor, которое ссылается на функцию-конструктор
```javascript
function Rabbit() {}
/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/
```  
Соответственно если ничего не менять, свойство constructor будет доступно всем обьектам собранным через функцию.  
Можно использовать свойство constructor из собранного обьекта для создания другого обьекта  
```javascript
function Rabbit(name) {
  this.name = name;
  alert(name);
}
let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");
```  
Удобно использовать если неизвестно из какого конструктора выстроен обьект.  
### Важное упоминание свойство prototype в функция можно изменять, а значит js не гарантирует что получится именно то свойство которое ожидается увидеть, к примеру если оно изменено автором кода, либо каким либо сторонним кодом.  
Избежать этого можно если изменять лишь свойства в прототипе ``Func.prototype.свойство``, но не менять прототип целиком. Либо вручную воссоздать свойство protype целиком.  
# Встроенные прототипы  
В js все встроенные функции конструкторы используют прототипы  
## Object.prototype  
В js все время присутствуют прототипизированные свойства обьекта такие как toString()и остальные и в момент создания обьекта любым синтаксисом присваивается прототип со всеми такими прототипизированными свойствами в нем.  
Таким образом любые встроенные методы при вызове берутся из большого прототипа  
Хорошим примером является логирование пустого обьекта
```javascript
let obj = {};
console.log(obj) // '{object: Object}'
```
## Другие встроенные прототипы  
Другие встроенные обьекты как array date function и т д так же хранят свои методы в прототипах.  
**Наверху иерархии встроенных прототипов находится Object.prototype. Поэтому имеет смысл фраза "все наследуется от обьектов"**  

<image src = "imgs/photo_2022-05-13_14-03-26.jpg">    

Некоторые методы в прототипах пересекаются, к примеру toString() есть свой как у массива так и у обьекта, при использовании к массиву возьмется toString() именно из прототипного массива.  
### вызов console.dir покажет цепочку прототипного наследования в браузере.  
Все обьекты, даже функции работают аналогично грубо говоря абсолютно все берётся из их прототипа.  
## Примитивы  
Числа строки и булевые работают так что при попытке их создания появляется обьект обёртка с использованием встроенных конструкторов string number boolean, который предоставляет методы и исчезает.  
Эти обьекты создаются невидимо, методы находятся в их прототипах
### значения null и Undefined не имеют ни обьектов обёрток ни прототипов  
## Изменение встроенных прототипов  
Прототипы можно менять добовляя новое в ``Примитив.prototype.желаемыйметод``  
```javascript
String.prototype.show = function() {
  alert(this);
};
"BOOM!".show(); // BOOM!
```  
### Изменение встроенных прототипов не лучшая идея и крайняя мера!!  
Единственная возможность когда стоит изменять прототип это использование полифилов  
Полифил - это кодовое представление метода который есть в спецификации, но еще не поддерживается текущим движком js  
## Заимствование у прототипов  
Это применение прототипных методов к разным типам данных(к которым они не относятся)(из темы декораторов, call/apply)  
```javascript
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};
obj.join = Array.prototype.join;
alert( obj.join(',') ); // Hello,world!
```  
Самое главное чтобы входные данные подходили под используемый метод  
# Методы прототипов, обьекты без свойства ``__proto__``  
Свойство ``__proto__`` является устаревшим, свойства которые использовать стоит теперь  
- ``Object.create(proto, [descriptors])``- создает пустой обьект со свойством [[prototype]]  
  - proto - свойство [[prototype]]
  - descriptors - необязательные дескрипторы свойств.  
- Object.getPrototypeOf(obj) - вернет свойство [[Prototype]] обьекта obj 
- Object.setPrototypeOf(obj) - устанавливает свойство [[Prototype]] для obj как proto  

Эти методы используются вместо ``__proto__``.  
```javascript
let animal = {
  eats: true
};
// без дискрипторов
let rabbit = Object.create(animal);
Object.getPrototypeOf(rabbit) === animal // true
Object.setPrototypeOf(rabbit, {}) // замена рпототипа rabbit на {}

//использование create с дискриптором
let rabbit = Object.create(animel, {
  jumps: {
    value: true
  }
})
```
Object.create Очень удобно использовать для полного клонирования обьекта, по сути кроме того что он заменит цикл for in так еще и скопирует все геттеры сеттеры дискрипторы и скрытые свойства.  
### Если важна скорость нельзя менять прототип существубщего обьекта с помощью Object.setPrototypeOf() или ``obj.__proto__`` потому что изменения происходят на лету к чему js не оптимиирован.  
## Простеший обьект  
Простейший обьект - это обьект при создании которого протип его указан как null - То есть он отсутствует.  
Еще такие обьект могут называться как ассоциативный массив  
```javascript
let obj = Object.create(null);
let key = prompt('Whts the key?', '__proto__');
obj[key] = 'some value';
console.log(obj[key]) // some value

let obj2 = Object.create(null);
console.log(obj2) // error отсутствует toString()
```
obj2 показывает что в обьекте нет никаких методов и тд.

