function duplicateCount (text) {
  const chars = Array.from(text.toLowerCase())
  const temp = Object.values(
    chars.reduce((obj, ch) => {
      obj[ch] = obj[ch] ? obj[ch] + 1 : 1
      return obj
    }, {})
  ).filter(obj => obj > 1)
  return temp.length
}

duplicateCount('Indivisibilities')

const duplicateCountNice = (text) => (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length;
