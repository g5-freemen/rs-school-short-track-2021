/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const results = [];
  for (let i = 0; i < n.length; i++) {
    const newArr = arr.splice(i, 1);
    newArr.sort((a, b) => b - a);
    results.push(newArr.join(''));
  }
  return Math.max.apply(null, results);
}

module.exports = deleteDigit;
