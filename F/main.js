const longFunction = nums => {
  if (nums.length === 0) return 0
  let prev = nums[0]
  let len = 1
  let way = 0
  nums.forEach(cur => {
    if (cur > prev) {
      if (way < 0) {
        len += 1
        prev = cur
        way = 1
      } else if (way > 0) {
        prev = cur
      } else {
        len += 1
        prev = cur
        way = 1
      }
    } else if (cur < prev) {
      if (way > 0) {
        len += 1
        prev = cur
        way = -1
      } else if (way < 0) {
        prev = cur
      } else {
        len += 1
        prev = cur
        way = -1
      }
    }
  })
  return len
}

const shortFunction = nums => {
  if (nums.length === 0) return 0
  let prev = nums[0]
  let len = 1
  let way = 0

  const iteration = (flag, cur) => {
    if (cur === prev) return
    if (
      ((way < 0) * flag || (flag == false && way < 0 == false)) ||
      !((way > 0) * flag || (flag == false && way > 0 == false))
    ) {
      len += 1
      way = flag ? 1 : -1
    }
    prev = cur
  }
  nums.forEach(cur => iteration(cur > prev, cur))
  return len
}
