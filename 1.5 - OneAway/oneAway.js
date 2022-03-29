/*
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false

Hints:
1. Start with the easy thing. Can you check each of the conditions separately?
2. What is the relationship between the "insert character" option and the "remove character"
option? Do these need to be two separate checks?
3. Can you do all three checks in a single pass?
*/

const oneAway = (string1, string2) => {
  const checkSingleMissingCharacter = (firstString, secondString) => {
    if (firstString.length !== secondString.length - 1) {
      return false;
    } else {
      let previousMismatch = false;
      let fp = 0;
      let sp = 0;
      while (fp < firstString.length) {
        if (firstString[fp] !== secondString[sp]) {
          if (previousMismatch) {
            return false;
          } else {
            previousMismatch = true;
          }
          sp++;
        } else {
          fp++;
          sp++;
        }
      }
      return true;
    }
  };
  const checkForSingleDifference = (firstString, secondString) => {
    if (firstString.length !== secondString.length) {
      return false;
    } else {
      let previousMismatch = false;
      let fp = 0;
      let sp = 0;
      while (fp < firstString.length) {
        if (firstString[fp] !== secondString[sp]) {
          if (previousMismatch) {
            return false;
          } else {
            previousMismatch = true;
          }
        }
        fp++;
        sp++;
      }
      return true;
    }
  };

  return (
    checkSingleMissingCharacter(string1, string2) ||
    checkSingleMissingCharacter(string2, string1) ||
    checkForSingleDifference(string1, string2)
  );
};

// Test
console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);
