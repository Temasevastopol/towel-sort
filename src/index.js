
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (Array.isArray(matrix) !== true) { return []}
let arr = matrix
let resArr = [];
for (let i = 0; i < arr.length; i++){
  
    if (i%2 == 0) {
        for (let j = 0; j < arr[i].length; j++){
            resArr.push(arr[i][j])
        }
    } else{
        for (let j = (arr[i].length - 1); j >= 0; j--){
            resArr.push(arr[i][j])
        }
    }
}
return (resArr);
}