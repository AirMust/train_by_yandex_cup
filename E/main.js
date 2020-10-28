let x = {
  name: 'AirMust',
  name21: 'slynell',
  age: 21
}

function myGet (obj, name) {
  console.log(`Get my please ${name} in this element ...`)
  return obj[name]
}

function myGetThis (name) {
  console.log(`Get my please ${name} in this element ...`, this)

  // return(this[name])
}

let handler = {
  get: (obj, name) => myGet(obj, name)
}

// x = new Proxy(x, handler)

// console.log(x['name'])

myGetThis.bind(x)('name')
myGetThis.apply(x, ['age'])
myGetThis.call(x, 'age')

// ne('name')
// myGet.apply(x, 'name')

// Создадим простой объект, чтобы использовать его в качестве контекста
var context = { foo: 'bar' }

// Функция, которая возвращает свойство «foo» контекста «this»
function returnFoo () {
  // console.log(this)
}

// Свойства не существует в текущей области видимости, поэтому undefined
returnFoo() // => undefined

// Но если мы свяжем эту функцию с контекстом
var bound = returnFoo.bind(x)

// Свойство теперь в области видимости
bound() // => "bar"
