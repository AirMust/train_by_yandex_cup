function findOdd (arr) {
  const x = arr
    .reduce((res, val) => {
      let temp = res.find(obj => obj.key === val)
      if (!temp) {
        temp = { key: val, value: 1 }
        res.push(temp)
      } else {
        temp.value += 1
      }
      return res
    }, [])
    .find(obj => obj.value % 2 !== 0)
  return x.key
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))


const findOddNice = (xs) => xs.reduce((a, b) => a ^ b);


