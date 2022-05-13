/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
    // your code here ..
    const openParens = ["[","{","("]
    const parensMatch = {
      '}':'{',
      ']':'[',
     ')' :'('
    }
    let stack = []
    for(let paren of parens){
      if(openParens.includes(paren)){
        stack.push(paren)
      }else if(!openParens.includes(paren) && parensMatch[paren] === stack[stack.length - 1] ){
        stack.pop()
      }else{
        return false
      }
    }
    return stack.length === 0 ? true : false
  }

  console.log(validParentheses(['(',"(",")",")"]),true);