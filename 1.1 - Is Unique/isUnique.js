/*

Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
Hints:
* Can you solve it in O(N log N) time? What might a solution like that look like?
** Could a bit vector be useful?
*** Try a hash table.

*/


//use an object to keep track if any element in the object has a value 1 or greater then it's a 
//duplicate
const IsUnique = (string) => {
  let trackerObj = {}
  for(let letter of string){
    if(trackerObj[letter] && trackerObj[letter] >=1) return false
    else trackerObj[letter] = 1
  }
  return true
}


//learn the other method later and mueeve





/* TESTS */
console.log(IsUnique('abcd'), 'true');
console.log(IsUnique('abccd'), 'false');
console.log(IsUnique('bhjjb'), 'false');
console.log(IsUnique('mdjq'), 'true');





/*
My Personal Method
const IsUnique = (passedString) => {
  let uniqueSet = Array.from(new Set(passedString))
  if(uniqueSet.length !== passedString.length) return false
  else return true
}
---------------------------------------------------------------
//O(n^2) approach. no additional data structure was used. Basically for each character check the rest of
//the character for duplicates
const IsUnique = (string) => {
  for(let i = 0; i < string.length; i++){
    for(let j=i+1; j< string.length; j++){
      if(string[i] === string[j]) return false
    }
  }
  return true
}
----------------------------------------------------------------
//use an object to keep track if any element in the object has a value 1 or greater then it's a 
//duplicate
const IsUnique = (string) => {
  let trackerObj = {}
  for(let letter of string){
    if(trackerObj[letter] && trackerObj[letter] >=1) return false
    else trackerObj[letter] = 1
  }
  return true
}

*/



