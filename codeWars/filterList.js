function filter_list (arr) {
  return arr.filter(obj => typeof obj === 'number')
}

console.log(filter_list([1, 343, 'dfdfg']))
