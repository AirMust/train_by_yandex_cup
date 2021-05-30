// // console.log('simple log')

// // promise = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve(), 1000)
// //   console.log('promise3')
// // })

// // promise
// // 	.then(() => console.log('promise1'))
// // 	.then(() => console.log('promise2'))

// // console.log('simple log 2')

// // fun(1)

// // async function fun (n) {
// // 	const x = {
// // 		a: 'ab',
// // 		c: n,
// // 	}
// // 	setTimeout(() => console.log('await' + n, x), 1000)
// // }

// // fun(2)

// // c
// function Rabbit() {}

// Rabbit.prototype = {
//   eats: true
// };

// Rabbit.prototype = null

// let rabbit = new Rabbit();

// console.log(rabbit.eats)

console.log('log1')

setTimeout(() => {
  console.log('timeout1')
}, [0])

for (let i = 0; i < 100000; i++) {
  i++
}

new Promise(async (resolve, reject) => {
  console.log('promise1')
  setTimeout(() => {
    resolve()
    console.log('timeout2')
  }, [0])
}).then(() => {
  console.log('promise2')
})

setTimeout(() => {
  console.log('timeout3')
}, [0])

console.log('log2')
