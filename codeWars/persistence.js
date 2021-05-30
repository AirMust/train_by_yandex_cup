const persistence = (num, depth = 0) => {
  if (num < 10) {
    return depth
  }
  const chars = Array.from(num + '').reduce((num, val) => {
    num *= val * 1
    return num
  }, 1)
  return persistence(chars, depth + 1)
}

console.log(persistence(999))
