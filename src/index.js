
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return []
  let array = []

    for (let i = 0; i < matrix.length; i++) {
        if ( i % 2 !== 0){
          matrix[i].reverse()
          array.push(matrix[i])
        }
        else {
          array.push(matrix[i])
      }
    }
    
    return array.flat()

  }
  
