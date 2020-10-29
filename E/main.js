// let x = {
//   name: 'AirMust',
//   name21: 'slynell',
//   age: 21
// }

// function myGet (obj, name) {
//   console.log(`Get my please ${name} in this element ...`)
//   return obj[name]
// }

// function myGetThis (name) {
//   console.log(`Get my please ${name} in this element ...`, this)

//   // return(this[name])
// }

// let handler = {
//   get: (obj, name) => myGet(obj, name)
// }

// // x = new Proxy(x, handler)

// // console.log(x['name'])

// myGetThis.bind(x)('name')
// myGetThis.apply(x, ['age'])
// myGetThis.call(x, 'age')

// // ne('name')
// // myGet.apply(x, 'name')

// // Создадим простой объект, чтобы использовать его в качестве контекста
// var context = { foo: 'bar' }

// // Функция, которая возвращает свойство «foo» контекста «this»
// function returnFoo () {
//   // console.log(this)
// }

// // Свойства не существует в текущей области видимости, поэтому undefined
// returnFoo() // => undefined

// // Но если мы свяжем эту функцию с контекстом
// var bound = returnFoo.bind(x)

// // Свойство теперь в области видимости
// bound() // => "bar"

// CAll

let obj1 = {
  id: 'id1',
  value: 10,
  children: [1, 2, 3],
  getInfo: function (name) {
    console.group('Info: ' + name)
    console.error(`id: ${this.id}`)
    console.error(`value: ${this.value}`)
    console.group('children: ')
    this.children.forEach(item => {
      console.error(`${this.id}-${item}`)
    })
    console.groupEnd()
    console.groupEnd()
  }
}

let obj2 = {
  id: 'id2',
  value: 20,
  children: [10, 20, 30]
}

obj1.getInfo('1')

// obj1.getInfo.call(obj2, '2')
obj1.getInfo.call(obj2, '2')


// obj2.getInfo('3');
// obj1.getInfo.apply(obj2, ['2'])

function funct () {
  console.log(arguments, Object.values(arguments))
  return [].slice.call(arguments)
}

console.log(funct(1, 2, 3, [1, 3, 3]))

arg = [10, 32, 53, 45]

console.log(Math.min.apply(null, arg))
