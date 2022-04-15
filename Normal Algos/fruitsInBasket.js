/*
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.
*/
var totalFruit = function(fruits) {
    let leftPointer = 0
    let fruitTracker = new Map()
    let max = 0
    
    for(let index = 0; index< fruits.length ; index++){
        let rightFruit = fruits[index]
        if(!fruitTracker.get(rightFruit)){
            fruitTracker.set(rightFruit, 1)
        }else{
            fruitTracker.set(rightFruit, fruitTracker.get(rightFruit) + 1)
        }
        while( fruitTracker.size > 2 ){
            let leftFruit = fruits[leftPointer]
            if(fruitTracker.get(leftFruit) > 1){
                  fruitTracker.set(leftFruit, fruitTracker.get(leftFruit) - 1)
            }else{
                fruitTracker.delete(leftFruit)
            }
            leftPointer++
        }
        max = Math.max(max, index - leftPointer + 1)
    }
    return max
};

console.log(totalFruit([1,2,3,2,2]));