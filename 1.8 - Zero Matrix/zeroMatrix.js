/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.
Hints:#17, #74, #102
1. If you just cleared the rows and columns as you found Os, you'd likely wind up clearing
the whole matrix. Try finding the cells with zeros first before making any changes to the
matrix.

2.Can you use O(N) additional space instead of O(N2)? What information do you really
need from the list of cells that are zero?

3.You probably need some data storage to maintain a list of the rows and columns that
need to be zeroed. Can you reduce the additional space usage to 0(1) by using the
matrix itself for data storage?

https://www.youtube.com/watch?v=djt9mwch-Xo => explained it
*/

function ZeroMatrix(matrix) {
  let rowCount = matrix.length;
  let colCount = matrix[0].length;
  let isColumnZero = false;
  let isRowZero = false;
  //check the first column to see if any cell has zero if yes set isColumnZero to true
  for (let i = 0; i < rowCount; i++) {
    if (matrix[i][0] === 0) {
      isColumnZero = true;
      Break;
    }
  }
  //check the first row to see if any cell has zero if yes set isRowZero to true
  for (let j = 0; j < colCount; j++) {
    if (matrix[0][j] === 0) {
      isRowZero = true;
      Break;
    }
  }
  //using the first row and first column as markers to know how we'd spread the zero's around the
  //colmns and rows,
  //we start from the second row and second column to look for zero
  for (let i = 1; i < rowCount; i++) {
    for (let j = 1; j < colCount; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  //loop through the column marker anywhere you see a zero go through the column and set to 0
  for (let i = 0; i < colCount; i++) {
    if (matrix[0][i] === 0) {
      for (let j = 0; j < rowCount; j++) {
        matrix[j][i] = 0;
      }
    }
  }
  //loop through the row marker anywhere you see a zero go through the row and set to 0

  for (let i = 0; i < rowCount; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < colCount; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  //if the first row has any zero before we started turn the entire row to 0
  if (isRowZero) {
    for (let i = 0; i < colCount; i++) {
      matrix[0][i] = 0;
    }
  }

  //if the first column has any zero before we started turn the entire column to 0
  if (isColumnZero) {
    for (let i = 0; i < rowCount; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

let inputArr = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(ZeroMatrix(inputArr));
