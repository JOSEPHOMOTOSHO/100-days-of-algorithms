/*
253. Meeting Rooms II
Medium
0 3340
754
Add to List
Share
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi),
return the minimum number of conference rooms required.
Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:
Input: intervals = [[7,10], [2,4]]
Output: 1
Constraints:
1 <= intervals.length <= 104
0 <= starti < endi <= 106

*/

const minimumNumberOfRooms = (intervals) => {
    if(intervals.length === 0) return 0
    let sortByStart = [...intervals].sort((a,b) => a[0] - b[0])
    let room = 1

    for(let index = 1; index<sortByStart.length ; index++){
        let currentInterval = sortByStart[index]
        let previousInterval = sortByStart[index - 1]
        if(currentInterval[0] < previousInterval[1]){
            room++
        } 
    }

return room 

}
console.log(minimumNumberOfRooms( [[10,30],[5,10],[15,20]]),2); 