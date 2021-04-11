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
  for (let i = 0; i < arr.length; i++) {
    const newArr = [...arr];
    newArr.splice(i, 1);
    results.push(newArr);
  }
  const res = results.map((el) => +el.join('').replace(',', ''));

  return Math.max.apply(null, res);
}

module.exports = deleteDigit;
