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
  let str1 = {}
  let str2 = {}

  const getFreq = (obj, line) => {
    ;[...line].forEach(ch => {
      ch in obj ? (obj[ch] += 1) : (obj[ch] = 1)
    })
  }

  getLine('First String: ')
    .then(line => {
      getFreq(str1, line)
      return getLine('Second String: ')
    })
    .then(line => getFreq(str2, line))
    .catch(error => console.error('Error', error))
    .finally(() => {
      let result = 1
      if (Object.keys(str1).length !== Object.keys(str2).length) result = 0
      Object.keys(str1).forEach(ch => {
        if (!(ch in str2) || str2[ch] !== str1[ch]) result = 0
      })
      console.log(result)
    })
}

toGo()

module.exports = toGo
