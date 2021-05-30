const uniqueInOrder = num => {
  const res = Array.from(num).reduce((res, val) => {
    if (!res.length || res[res.length - 1] !== val) {
      res.push(val)
    }
    return res
  }, [])
  return res
}

console.log(uniqueInOrder('dfdgdfgDDSVS'))
