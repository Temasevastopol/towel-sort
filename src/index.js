
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const resArray = ([].concat(...(matrix))).sort((a, b)=> (a-b))
  return resArray;
}
