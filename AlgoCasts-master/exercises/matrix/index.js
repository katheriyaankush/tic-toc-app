// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
   const matrixArray =[];

   for (let i = 0; i < n; i++) {
      matrixArray.push([]);
    }
  
   let startRow = 0;
   let endRow= n-1;
   let startCol = 0;
   let endCol= n-1;
  let count = 1;

   while (startRow <= endRow && startCol <= endCol) {
      //Top    
      debugger;     
      for(let i= startCol; i<= endCol; i++ ){

         matrixArray[startRow][i] = count;

         count++;
    
    
      }
      startRow++    //1


      //Right row

      for(let i= startRow; i<= endRow; i++ ){

         matrixArray[i][endCol] = count;
         count++;
      
      }
      endCol--; //1
//Bottom     
     for(let i =endCol ; i >= startCol ; i-- ){
      matrixArray[endRow][i] = count;
      
      count++;
     

     }
     endRow--; //1
   

     //left row

     for(let i =endRow ; i >= startRow ; i-- ){
      matrixArray[i][startCol] = count;
      count++;
  
     }
     startCol++

      

   }

   console.log(matrixArray);
  
   
     
 
   
}


matrix(3);
module.exports = matrix;
