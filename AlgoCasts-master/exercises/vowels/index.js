// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    const matches = str.match(/[aeoius]/gi);
    console.log(matches);
    matches ? console.log(matches.length) : console.log('0')

}



vowels('Ankush');
module.exports = vowels;


//function vowels(str) {

    //    const  checkString = 'aeious';
    //    let count=0;
    
    //     for(let char of str.toLowerCase() )
    //       if(checkString.includes(char)){
    //              count++;
    
    //       }
    //       console.log(count);
    
    // }