/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)
Hints:
1. You do not have to-and should not-generate all permutations. This would be very
inefficient.
2. What characteristics would a string that is a permutation of a palindrome have?
3. Have you tried a hash table? You should be able to get this down to 0( N) time.
4. Can you reduce the space usage by using a bit vector?
*/
function palinPerm(str){
  let cleanString = str.toLowerCase().split(" ").join("")
  cleanString
  const charCounter = {}
  let appearsMoreThanOnce = false
  let isPalindrome = true

  for(let char of cleanString){
      charCounter[char] = charCounter[char] + 1 || 1 
  }

  Object.keys(charCounter).forEach((char) => {
    if(charCounter[char] % 2 > 0){
      if(appearsMoreThanOnce){
        isPalindrome
          isPalindrome = false
      }else{
        appearsMoreThanOnce = true
      }
    }
    
  })

return isPalindrome
}

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
