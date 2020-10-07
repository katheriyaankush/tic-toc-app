// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
const charMap={};
maxCh = '';
max=0

for(let char of str)
{
  if(charMap[char]){
  charMap[char]++;

  }
  else{
charMap[char] = 1;
  }
}

console.log(charMap);

  for (let charVal in charMap){

    

         if(charMap[charVal] >max){
            max = charMap[charVal] ;
            maxChar= charVal;
            

         }
  }

console.log("max",maxChar);

}


maxChar("DDDDshhh")



// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

module.exports = maxChar;
