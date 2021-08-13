
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
      return [];
  }  
  let result = [];
  let matrixElem = [];
  for (let i = 0; i < matrix.length; i++){
      if (i % 2 === 0) {
        matrixElem = matrix[i].sort(function(a, b){return a-b});
      }
      else {
        matrixElem = matrix[i].sort(function(a, b){return b-a}); 
      }
      for (let j = 0; j < matrixElem.length; j++){
        result.push(matrixElem[j]);
      }
  }
  return result;
}
