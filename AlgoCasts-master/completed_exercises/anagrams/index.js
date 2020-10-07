// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


const anagrams =(str1, str2)=>{

let strA= cleanString(str1);
let strB=cleanString(str2);


return strA === strB;

}
const cleanString =(str)=>{

return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();

}




console.log( anagrams("Hello There", "Hello There1"));









// function anagrams(stringA, stringB) {

//   let CharMapA = changeStringToObj(stringA);
//   let CharMapB = changeStringToObj(stringB);


// //console.log(Object.keys(CharMapA));

// if(Object.keys(CharMapA).length !== Object.keys(CharMapB).length ){
// return false;
// }

//        for(let char in CharMapA){
      
//         if(CharMapA[char] !== CharMapB[char]){

//           return false;

//         }
  
//       }

//       return true;
// }





// const changeStringToObj=(str)=>{
// const CharMap={};
 
//   for(let key of str.replace(/[^\w]/g, '').toLowerCase() ){
// //console.log(key);
//   CharMap[key] = CharMap[key] + 1 || 1;
     
//   }

// return(CharMap);

// }




// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
