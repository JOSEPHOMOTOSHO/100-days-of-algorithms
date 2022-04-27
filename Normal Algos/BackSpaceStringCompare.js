/*
Given two strings s and t, return true if they are equal when both 
are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue 
empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
  //set pointers for each string
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  //set skip variable that keeps track of how many times you delete      //characters/delete
  let sSkip = 0;
  let tSkip = 0;

  while (sPointer >= 0 || tPointer >= 0) {
    //work on S string first
    while (sPointer >= 0) {
      if (s.charAt(sPointer) === "#") {
        sSkip++;
        sPointer--;
      } else if (sSkip > 0) {
        sSkip--;
        sPointer--;
      } else {
        break;
      }
    }

    while (tPointer >= 0) {
      if (t.charAt(tPointer) === "#") {
        tSkip++;
        tPointer--;
      } else if (tSkip > 0) {
        tSkip--;
        tPointer--;
      } else {
        break;
      }
    }

    if (sSkip >= 0 && tSkip >= 0 && s.charAt(sPointer) !== t.charAt(tPointer)) {
      return false;
    }

    //check that tPointer and sPointer are equal
    if (tPointer >= 0 !== sPointer >= 0) {
      return false;
    }

    sPointer--;
    tPointer--;
  }

  return true;
};

console.log(backspaceCompare("ab##", "c#d#"), true);
