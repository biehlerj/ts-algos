import { palindrome } from './palindrome';

describe('palindrome', () => {
  it('given palindrome should return given string', () => {
    expect(palindrome('anna')).toEqual('anna');
  });

  it('given a string that can be a palindrome return the correct palindrome', () => {
    expect(palindrome('kyaak')).toEqual('kayak');
  });

  it('return -1 for a non-palindrome', () => {
    expect(palindrome('palindrome')).toEqual('-1');
  });
});
