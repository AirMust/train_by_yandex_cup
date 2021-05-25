function partition (arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[end]

  let pivotIndex = start

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex)
      pivotIndex += 1
    }
  }

  swap(arr, end, pivotIndex)
  return pivotIndex
}

function swap (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

const qsort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return
  index = partition(arr, start, end)
  qsort(arr, start, index - 1)
  qsort(arr, index + 1, end)
  return arr
}

console.log(qsort([3, 4, -4, 10, 7, 8, 5, 2, 1, 9, 5, 4]))
