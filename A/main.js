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

const toGo = async () => {
  let str1 = []
  let str2 = {}
  getLine('First String: ')
    .then(line => {
      str1 = [...new Set([...line])]
      return getLine('Second String: ')
    })
    .then(line => {
      ;[...line].forEach(ch => {
        ch in str2 ? (str2[ch] += 1) : (str2[ch] = 1)
      })
    })
    .catch(error => {
      console.error('Error', error)
    })
    .finally(() => {
      let result = 0
      str1.map(ch => (result += ch in str2 ? str2[ch] : 0))
      console.log('Result:', result)
    })
}

toGo()

module.exports = toGo
