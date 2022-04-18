/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 
*/
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  let sObj = {};
  let pObj = {};
  let leftPointer = 0;
  let rightPointer = 0;
  let indicesKeeper = [];

  while (rightPointer < p.length) {
    sObj[s[rightPointer]] = sObj[s[rightPointer]] + 1 || 1;
    pObj[p[rightPointer]] = pObj[p[rightPointer]] + 1 || 1;
    rightPointer++;
  }
  rightPointer--;
  sObj;
  pObj;
  while (rightPointer < s.length) {
    sObj;
    if (compareHashMap(sObj, pObj)) {
      leftPointer;
      indicesKeeper.push(leftPointer);
    }
    rightPointer++;
    if (sObj[s[rightPointer]] >= 1) sObj[s[rightPointer]]++;
    else sObj[s[rightPointer]] = 1;

    if (sObj[s[leftPointer]] > 1) sObj[s[leftPointer]]--;
    else delete sObj[s[leftPointer]];
    leftPointer++;
  }
  return indicesKeeper;
};

const compareHashMap = (obj1, obj2) => {
  const keys1 = Object.keys(obj1),
    keys2 = Object.keys(obj2);
  let match = true;
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      match = false;
      break;
    }
  }
  return match;
};
console.log(findAnagrams("abab", "ab"));
