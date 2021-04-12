/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value) {
  let first = 0;
  let last = arr.length - 1;
  let position;
  let middle;

  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] === value) {
      position = middle;
      break;
    } else if (value < arr[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}

module.exports = findIndex;
