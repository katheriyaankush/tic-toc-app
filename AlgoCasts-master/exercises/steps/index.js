// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 

//Recursion Method
function steps(n , row = 0, stair='') {
 if(n === row){
     return;
    }


    if(n === stair.length){
        console.log(stair);
       return steps(n, row+1, '');

    }

    if(stair.length <= row){
        
        stair+='#';

    }
    else{
        stair+=' ';
    }

    return steps(n, row, stair);
 

}


steps(5);


module.exports = steps;




//function steps(n) {

    // for(let i=0; i<n; i++){
    //     let stair = '';
    
    // for(let j=0; j<=n; j++){
    //     if (i >= j ){
    //     stair+='#';       //or stair = stair+'#'
    //     }
    // else{
    //     stair+=' ';
    // }
    
    // }
    
    // console.log(stair);
    // }
    
    
    // }
    
    
    // steps(8);
    