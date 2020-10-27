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

const toGo = () => {
  let max = 0

  const recur = (depth, maxDepth, maxTemp) => {
    if (depth < maxDepth) {
      return getLine(`${depth} : `).then(line => {
        if (line === '1') maxTemp += 1
        else maxTemp = 0
        if (maxTemp > max) max = maxTemp
        return recur(depth + 1, maxDepth, maxTemp)
      })
    }
  }

  getLine('N : ')
    .then(line => {
      return recur(0, isNaN(Number(line)) ? 0 : Number(line), 0)
    })
    .catch(error => {
      console.error('Error', error)
    })
    .finally(() => {
      console.log('Result:', max)
    })
}

toGo()

module.exports = toGo
