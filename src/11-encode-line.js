/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 * ('aaaatttt'), '4a4t');
 */
function encodeLine(str) {
  if (str.length === 0) return str;
  const res = [];
  let lastLetter = str.charAt(0);
  let countLast = 1;
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) === lastLetter) {
      countLast++;
      if (i === str.length - 1) {
        if (countLast > 1) res.push(countLast + lastLetter);
        if (countLast === 1) res.push(lastLetter);
      }
    } else if (i < str.length - 1) {
      if (countLast > 1) res.push(countLast + lastLetter);
      if (countLast === 1) res.push(lastLetter);
      lastLetter = str.charAt(i);
      countLast = 1;
    } else if (i === str.length - 1) {
      if (countLast > 1) res.push(countLast + lastLetter);
      if (countLast === 1) res.push(lastLetter);
      if (str.charAt(i) !== lastLetter) res.push(str.charAt(i));
    }
  }
  return res.join('');
}

module.exports = encodeLine;
