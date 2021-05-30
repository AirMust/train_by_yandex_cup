function squareDigits (num) {
  const nums = Array.from(num + '')
  let str = ''
  nums.map(obj => {
	str += (obj * 1) ** 2
  })
  return str * 1
}

squareDigits(10002)
