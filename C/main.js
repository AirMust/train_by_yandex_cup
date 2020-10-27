const readline = require('readline')

function getLine (param) {
  const stream = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(function (resolve, reject) {
    stream.question(param, function (line) {
      if (!line) {
        stream.close()
        reject('Error')
      } else {
        stream.close()
        resolve(line)
      }
    })
  })
}

const generate = (n, str = '', l = 0, r = 0) => {
  if (str.length >= 2 * n) {
    console.log(str)
  }
  if (r < l) generate(n, str + ')', l, r + 1)
  if (l < n) generate(n, str + '(', l + 1, r)
}

let N = 6
generate(0, 0, N, [...Array(N)])
getLine('N : ')
  .then(line => {
    generate(isNaN(Number(line)) ? 0 : Number(line))
  })
  .catch(error => console.error('Error : ', error))
