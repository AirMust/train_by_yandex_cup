const printerError = str => {
  const good = str.match(/[a-z]/gi)
  const error = str.match(/[^a-m]/gi)
  let g = 0
  let e = 0
  if (good) {
    g = good.length
  }
  if (error) {
    e = error.length
  }
  return `${e}/${g}`
}

console.log(
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
)
