/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

var checkInclusion = function (s1, s2) {
  let s1Obj = {};
  let s2Obj = {};
  if (s1.length > s2.length) return false;

  let leftPointer = 0;
  let rightPointer = 0;
  //create an equal length of the two strings/and frequencies in an object using the length      //of s1
  while (rightPointer < s1.length) {
    let rightCharForS1 = s1[rightPointer];
    let rightCharForS2 = s2[rightPointer];
    s1Obj[rightCharForS1] = s1Obj[rightCharForS1] + 1 || 1;
    s2Obj[rightCharForS2] = s2Obj[rightCharForS2] + 1 || 1;
    s2Obj;
    rightPointer++;
  }
  s1Obj;
  s2Obj;
  rightPointer--;
  while (rightPointer < s2.length) {
    s1Obj;
    s2Obj;
    if (compareHashMap(s1Obj, s2Obj)) return true;
    rightPointer++;
    s2Obj[s2[rightPointer]] = s2Obj[s2[rightPointer]] + 1 || 1;
    if (s2Obj[s2[leftPointer]] > 1) {
      s2Obj[s2[leftPointer]]--;
    } else {
      delete s2Obj[s2[leftPointer]];
    }
    leftPointer++;
  }
  return false;
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

console.log(checkInclusion("adc", "dcda"), true);
