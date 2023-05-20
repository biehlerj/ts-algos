/**
 * Implementation of linear search algorithm
 *
 * @param {Array<number>} arr    - The array to search
 * @param {number}        arrLen - The length of the array to search
 * @param {number}        target - The item to find in the array
 * @returns {number}      The index of the target or -1 if the target isn't present
 */
export function linearSearch(
  arr: Array<number>,
  arrLen: number,
  target: number
): number {
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
