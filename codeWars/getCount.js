function getCount (str) {
  const count = str.match(/([aeiou])/gi)
  if (count) {
    return count.length
  }
  return 0
}
