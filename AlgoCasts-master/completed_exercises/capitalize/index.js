// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {

    let strArr = str.split('');
    let FinnString = strArr[0].toUpperCase();

    for(let i = 1 ; i <strArr.length ; i++ ){
    
      if(strArr[i-1] == ' '){

        FinnString = FinnString + strArr[i].toUpperCase();
      }
      else{
        FinnString = FinnString + strArr[i];
        
      }
      

    }
    console.log(FinnString);




}



capitalize('this, is first');







//function capitalize(str) {


  // let Fstring =[];
  // let i = 0;
  // for (let char of str ){
   
         
  //      if(i == 0  ){
  //        i++;  
  //       Fstring.push(char.toUpperCase());
  //      }
  //      else{
  //       Fstring.push(char)
  //      }
      
  //      if(char == ' '){
  //       console.log("space")
  //       i=0;
  //     }
  //   }
  
  
  
  // console.log(Fstring.join(''));
  
  // } My Solution









// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

module.exports = capitalize;

// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }
