function addBinary (a, b) {
  let sum = a + b
  let x = ''
  while (sum > 0) {
    x += sum % 2
    sum = sum % 2 !== 0 ? (sum - 1) / 2 : sum / 2
  }
  return Array.from(x).reverse().join('')
}

console.log(addBinary(0, 1))
