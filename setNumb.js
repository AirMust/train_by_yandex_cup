const N = 3
const K = 5;
const arr = Array(K + 1).fill(0)
let i = 3
while (arr[0] == 0) {
  i = K
  while (arr[i] !== 0) {
    i -= 1;
  }
  arr[i] = 1;
  arr.fill(0, i + 1)
  console.log(arr)
}
