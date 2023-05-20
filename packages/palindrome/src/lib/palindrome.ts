/**
 * Checks if a given string can be a palindrome
 *
 * @param {string}   str - The string to check
 * @returns {string} The string as a palindrome or the string "-1" if not able to create a palindrome
 */
export function palindrome(str: string): string {
  if (isPalindrome(str)) return str;
  const strMap = new Map<string, number>();
  for (let i = 0; i < str.length; i++) {
    if (!strMap.has(str[i])) strMap.set(str[i], 1);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    else strMap.set(str[i], strMap.get(str[i])! + 1);
  }

  let odd = 0;
  let oddChar;

  for (const [x, y] of strMap) {
    if (y % 2 !== 0) {
      odd++;
      oddChar = x;
    }
  }

  if (odd > 1 || (odd === 1 && str.length % 2 === 0)) return '-1';
  let [firstHalf, secondHalf] = '';
  for (const [x, y] of strMap) {
    let s = '';
    for (let i = 0; i < Math.floor(y / 2); i++) s += x;
    firstHalf = firstHalf + s;
    secondHalf = s + secondHalf;
  }

  return odd === 1
    ? firstHalf.replace('undefined', '') +
        oddChar +
        secondHalf.replace('undefined', '')
    : firstHalf + secondHalf;
}

/**
 * Checks if a given string is a palindrome
 *
 * @param {string}    str - The string to check
 * @returns {boolean} Returns true if the string is a palindrome otherwise false
 */
function isPalindrome(str: string): boolean {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}
