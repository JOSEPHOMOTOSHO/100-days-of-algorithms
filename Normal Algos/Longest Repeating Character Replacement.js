/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 
*/
var characterReplacement = function (s, k) {
  let map = new Map();
  let result = 0;
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < s.length) {
    let rightChar = s[rightPointer];
    if (!map.get(rightChar)) {
      map.set(rightChar, 1);
    } else {
      map.set(rightChar, map.get(rightChar) + 1);
    }
    let lengthOfWindow = rightPointer - leftPointer + 1;
    let possibleReplacements = lengthOfWindow - Math.max(...map.values());
    if (possibleReplacements <= k) {
      result = Math.max(result, lengthOfWindow);
      rightPointer++;
    } else {
      let leftChar = s[leftPointer];
      while (possibleReplacements > k) {
        if (map.get(leftChar) > 1) {
          map.set(leftChar, map.get(leftChar) - 1);
        } else {
          map.delete(leftChar);
        }
        possibleReplacements--;
      }
      leftPointer++;
      rightPointer++;
    }
  }
  return result;
};
console.log(characterReplacement("AABABBA", 1), 4);
