// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 4.0.0)

  var result = [];

  if (A.length === 1 || K === 0) {
    return A;
  }

  for (var i = 0; i < A.length; i++) {
    var newPos = (i + K) % A.length;

    result[newPos] = A[i];
  }

  return result;
}
