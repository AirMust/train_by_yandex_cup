const productFib = num => {
  const f = Array(100)

  f[0] = 0
  f[1] = 1
  f[2] = 1
  const fib = n => {
    if (n < 2) return n
    if (f[n]) return f[n]
    f[n] = fib(n - 1) + fib(n - 2)
    return f[n]
  }
  let i = 1
  while (1) {
    if (f[i] * f[i - 1] > num) {
      break
    }
    i += 1
    fib(i)
  }
  if (f[i - 2] * f[i - 1] === num) {
    return [f[i - 2], f[i - 1], true]
  }
  return [f[i - 1], f[i], false]
}

console.log(productFib(5895))
