/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  for (let i = 1; i < 6; i++) {
    if (n[i * 3 - 1] !== '-') return false;
  }
  const arrFiltered = n.filter((el) => el !== '-');
  for (let i = 0; i < arrFiltered.length; i++) {
    if (!arrFiltered[i].match(/[0-9A-F]/i)) return false;
  }
  return true;
}

module.exports = isMAC48Address;
