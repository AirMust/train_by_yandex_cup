// // // // // // // ;('use strict')
// // // // // // // // ;('use strict')

// // // // // // // // const global = function () {
// // // // // // // //   const x = {
// // // // // // // //     a: 10,
// // // // // // // //     func: function () {
// // // // // // // //       console.log(this)
// // // // // // // //     },
// // // // // // // //     arrow: () => console.log(this)
// // // // // // // //   }

// // // // // // // //   function test (){
// // // // // // // //     console.log(this)
// // // // // // // //   }

// // // // // // // //   console.log(this)
// // // // // // // //   x.func()
// // // // // // // //   x.arrow()

// // // // // // // //   const func = x.func
// // // // // // // //   const arrow = x.arrow
// // // // // // // //   func()
// // // // // // // //   arrow()
// // // // // // // //   test()
// // // // // // // // }

// // // // // // // // const globalObj = {
// // // // // // // //   glob: 'glob'
// // // // // // // // }
// // // // // // // // global.bind(globalObj)()

// // // // // // // // // "use strict"

// // // // // // // // // function  ff () {
// // // // // // // // //   console.log(this, performance.now())
// // // // // // // // // }

// // // // // // // // // const obj = { a: 1 }

// // // // // // // // // ff.bind(obj)();
// // // // // // // // // (ff.bind(obj))();

// // // // // // // // // ff()

// // // // // // // // let user = {
// // // // // // // //   name: "Джон",
// // // // // // // //   hi() { console.log(this.name); },
// // // // // // // //   bye() { console.log("Пока"); }
// // // // // // // // };

// // // // // // // // user.hi();

// // // // // // // // // теперь давайте попробуем вызывать user.hi или user.bye
// // // // // // // // // в зависимости от имени пользователя user.name
// // // // // // // // (user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!

// // // // // // // const ff = function () {
// // // // // // //   const x = function() {
// // // // // // //     console.log(this)
// // // // // // //   }
// // // // // // //   setTimeout(x, 100)
// // // // // // // }

// // // // // // // const x2 = { a: 1 }

// // // // // // // ff.bind(x2)()

// // // // // // function f() {
// // // // // //   alert( this ); // ?
// // // // // // }

// // // // // // let user = {
// // // // // //   g: f.bind(null)
// // // // // // };

// // // // // // user.g();

// // // // // // const inc = (() => {
// // // // // //   let counter = 0

// // // // // //   return () => {
// // // // // //     return (counter += 1)
// // // // // //   }
// // // // // // })()
// // // // // // console.log(inc())
// // // // // // console.log(inc())

// // // // // let user = {
// // // // //   firstName: 'Вася',
// // // // //   sayHi () {
// // // // //     setTimeout(function () {
// // // // //       console.log(this.firstName)
// // // // //     }, 1000)
// // // // //   }
// // // // // }

// // // // // setTimeout(function () {
// // // // //   console.log(user.firstName)
// // // // // }, 1000)

// // // // const x = ['ab', 'bs', 'ab', 'bs', 'ds']

// // // // const obj2 = x
// // // //   .reduce((obj, val) => {
// // // //     let res = obj.find(ob => ob.key === val)
// // // //     if (!res) {
// // // //       res = { key: val, value: 1 }
// // // //       obj.push(res)
// // // //     } else {
// // // //       res.value += 1
// // // //     }
// // // //     return obj
// // // //   }, [])
// // // //   .sort((a, b) => (a.value < b.value ? 1 : -1))
// // // //   .map(obj => obj.key)

// // // // console.log(obj2)

// // // // const m = (...args) => {
// // // //   return args.map(obj => obj * 2)
// // // // }

// // // // console.log(m(1,2,3,4,5))


// // // const sum = () => {
// // //   console.log(arguments)

// // // }


// // // sum(2)(


// // const sum = (a, b) = кугетк


// function curry(func) {

//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };

// }

for(var i=0; i< 10; i++){
  var x = i;
  setTimeout(function(){
    console.log(x)
  }, 100 * i)
}

const x = Array.from(x + '');

