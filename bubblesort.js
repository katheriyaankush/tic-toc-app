// bubbleSort = (array) => {
//     let swapped = false 
//     do {
//       swapped = false
//       array.forEach((current, i) => {
//          // console.log(current,"i=",i);
//         console.log(array.join(' '))
//         if (current > array[i + 1]) {
//           const temp = current
//          console.log(array.join(' '))
          
//           array[i] = array[i + 1]
//           array[i + 1] = temp
//           swapped = true
//           console.log(swapped)
//         }
//       })
//     } while(swapped)
//     console.log("Final",array.join(' '))
//     return array
//   }
  
  const numbers = [8, 1, 5, 2, 9]
  bubbleSort(numbers)

  function bubbleSort(array){
  
    len = array.length;
    console.log(len);

    for(let i = 0 ; i<len; i++){

for(j=0; j<(len-i); j++){

    if(array[j]> array[j+1]){
      
     let temp = array[j+1];
     array[j+1] = array[j];
     array[j] = temp;

    }
    console.log(array);
}
console.log("loop="+i);


    }
    console.log(array);
  }