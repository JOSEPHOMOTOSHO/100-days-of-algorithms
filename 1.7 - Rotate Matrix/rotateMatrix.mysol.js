/*

Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

Hints: #51, # 100
1. Try thinking about it layer by layer. Can you rotate a specific layer?
2. Rotating a specific layer would just mean swapping the values in four arrays. If you were
asked to swap the values in two arrays, could you do this? Can you then extend it to four
arrays?

https://www.youtube.com/watch?v=HehiIRa4geE
*/

const rotateMatrix = (matrix) => {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
  for (let row of matrix) {
    row.reverse();
  }
};

/* TEST */
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1],
];

console.log("before:");
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log("after:");
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

/*
  var edge = n - 1;
  
  pattern observed:
  i) col value becomes row value
  ii) row value is subtracted off edge and becomes col value
  
  0100
  0000
  0000
  0000
  
  position of 1 -> m[0][1]
  
  0000
  0001
  0000
  0000
  
  position of 1 -> m[1][edge]
  
  0000
  0000
  0000
  0010
  
  position of 1 -> m[edge][edge - 1]
  
  0000
  0000
  1000
  0000
  
  position of 1 -> m[edge-1][0]
  
  0100
  0000
  0000
  0000
  
  position of 1 -> m[0][1]
  
  flow of iteration:
  i) start from top left corner and move diagonally down
  ii) for each row, iterate pixels until edge - 1 
  (pixel at edge would have been transformed by the first pixel)
  iii) at each pixel iteration, iterate through 4 sides
  iv) do iteration in place, i.e. store a temp pixel for moving things around
  */
