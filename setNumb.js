const N = 3
const arr = Array(N + 1).fill(0)
let i = 3
while (arr[0] == 0) {
  i = N
  while (arr[i] !== 0) {
    i -= 1;
  }
  arr[i] = 1;
  arr.fill(0, i + 1)
  console.log(arr.slice(1,))
}
