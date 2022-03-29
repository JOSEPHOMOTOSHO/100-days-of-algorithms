var oneAway = function (string1, string2) {
  // insert a char for str1 -> remove a char for str2
  var checkOneMissing = function (first, second) {
    if (first.length !== second.length - 1) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
            sP++; // second length is longer
          }
        } else {
          fP++;
          sP++;
        }
      }
      return true;
    }
  };

  var checkOneDiff = function (first, second) {
    if (first.length !== second.length) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false; // more than one mismatch
          } else {
            mulligan = true; // use up mulligan
          }
        }
        fP++;
        sP++;
      }
      return true;
    }
  };
  // insert a char for str1 -> remove a char for str2
  // check one diff

  // console log checks
  // console.log(string1, string2, 'checkMiss', checkOneMissing(string1, string2));
  // console.log(string2, string1, 'checkMiss', checkOneMissing(string2, string1));
  // console.log(string1, string2, 'checkDiff', checkOneDiff(string1, string2));

  return (
    checkOneMissing(string1, string2) ||
    checkOneMissing(string2, string1) ||
    checkOneDiff(string1, string2)
  );
};

// Test
console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);

/*
Explanation:
There is a "brute force" algorithm to do this. We could check all possible strings that are one edit away by
testing the removal of each character (and comparing), testing the replacement of each character (and
comparing), and then testing the insertion of each possible character (and comparing).
That would be too slow, so let's not bother with implementing it.
This is one of those problems where it's helpful to think about the "meaning" of each of these operations.
What does it mean for two strings to be one insertion, replacement, or removal away from each other?
Replacement: Consider two strings, such as bale and pale, that are one replacement away. Yes, that
does mean that you could replace a character in bale to make pale. But more precisely, it means that
they are different only in one place.
• Insertion: The strings apple and aple are one insertion away. This means that if you compared the
strings, they would be identical-except for a shift at some point in the strings.
• Removal: The strings apple and aple are also one removal away, since removal is just the inverse of
insertion.
We can go ahead and implement this algorithm now. We'll merge the insertion and removal check into one
step, and check the replacement step separately.
Observe that you don't need to check the strings for insertion, removal, and replacement edits. The lengths
of the strings will indicate which of these you need to check.

This algorithm (and almost any reasonable algorithm) takes O ( n) time, where n is the length of the shorter
string.
I Why is the runtime dictated by the shorter string instead of the longer string? If the strings are
the same length (plus or minus one character), then it doesn't matter whether we use the longer
string or the shorter string to define the runtime. If the strings are very different lengths, then the
algorithm will terminate in 0( 1) time. One really, really long string therefore won't significantly
extend the runtime. It increases the runtime only if both strings are long.
We might notice that the code for one Edi tReplace is very simtlar to that for one Edi tinsert. We can
merge them into one method.
To do this, observe that both methods follow similar logic: compare each character and ensure that the
strings are only different by one. The methods vary in how they handle that difference. The method
one Edi tReplace does nothing other than flag the difference, whereas one Edi tinsert increments
the pointer to the longer string. We can handle both of these in the same method.

Some people might argue the first approach is better, as it is clearer and easier to follow. Others, however,
will argue that the second approach is better, since it's more compact and doesn't duplicate code (which
can facilitate maintainability).
You don't necessarily need to "pick a side:'You can discuss the tradeoffs with your interviewer.
*/
