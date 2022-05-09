/*
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
*/


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 const insert = (intervals, newInterval) => {
    let result = []
    for(let [index,interval] of intervals.entries()){
        let currentStart = interval[0]
        let currentEnd = interval[1]
        if(Math.max(currentStart,newInterval[0]) <= Math.min(currentEnd,newInterval[1])){
           newInterval = [Math.min(currentStart,newInterval[0]), Math.max(currentEnd,newInterval[1])]
            continue
        }
        if(newInterval[1] < currentEnd){
            result.push(newInterval,...intervals.slice(index))
            return result
        }
        result.push(interval)
    }
    result.push(newInterval)
    return result
    
};

//[[1,5],[6,9]]
console.log(insert([[1,3],[6,9]],[2,5]));