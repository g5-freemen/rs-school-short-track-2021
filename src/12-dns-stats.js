/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const arr = domains.map((item) => item.split('.').map((el) => `.${el}`));

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 2; j >= 0; j--) {
      arr[i][j] = arr[i][j + 1] + arr[i][j];
    }
  }

  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (obj[arr[i][j]] === 1) {
        obj[arr[i][j]]++;
      } else obj[arr[i][j]] = 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
