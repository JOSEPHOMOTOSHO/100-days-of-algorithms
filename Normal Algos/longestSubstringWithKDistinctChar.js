/*
Given a string s and an integer k, return the length of the longest substring of s that contains at most k
distinct characters
*/
//eceba
let lengthOfLongestSubstringDistinct = (s, k) => {
  let leftPointer = 0;
  let charTracker = new Map();
  let maxLength = 0;

  for (let index = 0; index < s.length; index++) {
    let rightChar = s[index];

    if (!charTracker.get(rightChar)) charTracker.set(rightChar, 1);
    else charTracker.set(rightChar, charTracker.get(rightChar) + 1);

    //when we have more than k distinct chars
    while (charTracker.size > k) {
      let leftChar = s[leftPointer];
      if (charTracker.get(leftChar) > 1)
        charTracker.set(leftChar, charTracker.get(leftChar) - 1);
      else charTracker.delete(leftChar);
      leftPointer++;
    }
    maxLength = Math.max(maxLength, index - leftPointer + 1);
  }
  return maxLength;
};
console.log(lengthOfLongestSubstringDistinct("eceba", 2));
