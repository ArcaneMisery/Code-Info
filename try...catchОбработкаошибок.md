# try..catch  
## Синтаксис  
```javascript
try{


} catch (err){


}
```
1. Выполнение ``try {}``
2. Ошибок нет?  
   - блок ``catch (err)`` игнорится,``try`` полностью выполняется.
 3. Ошибки есть  
     - ``try`` прерывается выполнение переходит в блок ``catch``, ``err`` содержит обьект ошибки.

### Чтобы try catch работал код обязательно должен быть выполним, то есть не должен содержать всяких очевидно неврных, глупых ошибок.
```javascript
try{
  {{{{
} catch (err) {
  // я не то что ошибку не могу понять, я не могу понять что ты хочешь до меня донести(движок не понимает код)
}
```
### синхронность try catch (связана с setTimeout и тд)
Если в блоке try функция вызывается через время то как правило try catch не будет вызван через это же время будет асинхронность, движок вышел из кода а код там дальше через время сам по себе выполняыется.  
```javascript
// пример правильного использования асинхроной функции
setTimeout(function() {
  try {
    noSuchVariable; // try..catch обрабатывает ошибку!
  } catch {
    alert( "ошибка поймана!" );
  }
}, 1000);
```
## Обьект ошибки  
Обьект имеет свойства 
- name - имя ошибки
- message - текст о деталях ошибки
- stack - текущий стек вызовов(их последовательность)

## Применение   
Хорошо применять при наличии ошибок в работе с JSON а частности метод JSON.parse()
```javascript
let json = "{ некорректный JSON }";
try {
  let user = JSON.parse(json); // <-- тут возникает ошибка...
  alert( user.name ); // не сработает

} catch (e) {
  // ...выполнение прыгает сюда
  alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
  alert( e.name );
  alert( e.message );
}
```
## Генеация собственных ошибок. неточности работы try catch, оператор throw
К примеру json.parse распарсил обьект в котором мы предпологали наличие свойств age и name, одно из свойств есть а второго нет и при пробе обращения к нему(и получения undefined) try не посчитает это ошибкой.
```javascript
let json = '{ "age": 30 }'; // данные неполны
try {
  let user = JSON.parse(json); // <-- выполнится без ошибок
  alert( user.name ); // нет свойства name!
} catch (e) {
  alert( "не выполнится" );
}
```
### Оператор throw
Приходит на помощь и генеррует ошибку  
``throw <Обьект ошибки>``  
Передать можно либые данные, но желательно использовать обьект.
Для генерации ошибок необходимо обязательно использовать их тип.
```javascript
let error = new Error(message);
let error = new SyntaxError(message);
let error = new ReferenceError(message);
```
Обьект выше получал syntaxError тк обьект должен содержать св-во name,
```javascript
let json = '{ "age": 30 }'; // данные неполны
try {
  let user = JSON.parse(json); // <-- выполнится без ошибок
  if(!user.name) {
    throw new SyntaxError('нет чегонибудь(имени)')
  }
console.log(user.name);
} catch(e) {
  console.log('ошибка найдена' + e.message)
}
```
## Проброс ошибок и правила применения try catch
### Блок catch должен обрабатывать только те ошибки которые ему известны, и пробрасывать все остальные
Техника проброса
1. блок catch получил все ошибки 
2. анализ ошибок в catch(err) 
3. Если не понятно что это и откуда, тогда throw err

Проброс ошибки это создание дополнительного if или еще одного уровня try catch с целью выловить непонятную ошибку ровно там где она нашлась и ровно с тем ее типом ошибки.
## try..catch..finally
третий блок блок finally выполняется в конце внезависимости от резулдьтатов проверки на ошибки
### блок finally сработает даже в случае указания return в блоках выше.  
# Глобальные ошибки и глобальный catch
Так же случаются глобальные ошибки и падение скрипта в таком случае можно воспользоваться window.oneerror и вывести ошибку
```javascript
window.onerror = function(message, url, line, col, error) {
  // ...
};
```
 - message Сообщение об ошибке.
 - url URL скрипта, в котором произошла ошибка.
 - line, col Номера строки и столбца, в которых произошла ошибка.
 - error Объект ошибки