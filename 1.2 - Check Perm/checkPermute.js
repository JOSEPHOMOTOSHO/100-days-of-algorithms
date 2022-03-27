/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other
Hints:
1. Describe what it means for two strings to be permutations of each other. Now, look at
that definition you provided. Can you check the strings against that definition?
2. There is one solution that is 0( N log N) time. Another solution uses some space, but
isO(N) time.
3. Could a hash table be useful?
4.Two strings that are permutations should have the same characters, but in different
orders. Can you make the orders the same?
*/

/*
A Permutation of a string is another string that contains same characters, 
only the order of characters can be different. 
For example, “abcd” and “dabc” are Permutation of each other
*/

const checkPermutation = (strOne, strTwo) => {
  if(strOne.length !== strTwo.length) return false
  let strOneMap = {}
  for(let char of strOne){
    strOneMap[char] = strOneMap[char] + 1 || 1
  }
  for(let char of strTwo){
    if(!strOneMap[char]) return false
    else strOneMap[char] - 1
  }
  return true
}

// Tests
console.log(checkPermutation('aba', 'aab'), true);

console.log(checkPermutation('aba', 'aaba'), false);

console.log(checkPermutation('aba', 'aa'), false);