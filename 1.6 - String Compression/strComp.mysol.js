/*

String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).

Hints:
Do the easy thing first. Compress the string, then compare the lengths.
Be careful that you aren't repeatedly concatenating strings together. This can be very
inefficient.

*/

const strComp = (str) => {
  let compressedString = "";
  let currentCount = "";
  let currentChar = "";
  let maxCount = 1;

  for (let i = 0; i < str.length; i++) {
    if (currentChar !== str[i]) {
      compressedString = compressedString + currentChar + currentCount;
      maxCount = Math.max(maxCount, currentCount);
      currentChar = str[i];
      currentCount = 1;
    } else {
      currentCount++;
    }
  }
  compressedString = compressedString + currentChar + currentCount;
  maxCount = Math.max(maxCount, currentCount);
  return maxCount !== 1 ? compressedString : str;
};

// Test
console.log("aaaaaa", strComp("aaaaaa"), "a6");
console.log("aabcccccaaa", strComp("aabcccccaaa"), "a2b1c5a3");
