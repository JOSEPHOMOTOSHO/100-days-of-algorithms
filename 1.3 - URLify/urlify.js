/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith"

hint:
1. It's often easiest to modify strings by going from the end of the string to the beginning.
2. You might find you need to know the number of spaces. Can you just count them?
*/


const urlify = (stringParam,length) => {
  const trimmedString = stringParam.trim()
  let split = trimmedString.split(' ')
  let final = []
  for(let char of split){
    if(split.indexOf(char) === split.length - 1){
      final.push(char)
    }else{
      final.push(char+"%20")
    }
   
  }
 return final.join("")
}

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
console.log(urlify("Sai Charan P"));
