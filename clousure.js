// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }

//   console.log( makeAdder(2)(3) );




// Closure Innner Function

// function makeAdder() {
//     var i =1;

//     return function() {
//       console.log(i+3);
//     };
//   }

// makeAdder()() ;





for(var i=0; i<4; i++){

( (i)=>setTimeout(()=>{console.log(i,"set")}, 1000))(i);

console.log(i);

}