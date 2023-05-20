import { linearSearch } from './linear-search';

const arr = [0, 0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90];
const arrLen = arr.length;

describe('test linear search', function () {
  it('good search', function () {
    const target = 10;
    const result = linearSearch(arr, arrLen, target);
    expect(result).toBe(4);
  });

  it('bad search', function () {
    const target = 69;
    const result = linearSearch(arr, arrLen, target);
    expect(result).toBe(-1);
  });
});
