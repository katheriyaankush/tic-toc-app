// add array value   Question 1
//let arr = [1,2,5,7];
// total = 0;
// for(let key of arr){

// total +=key; 

// }
//console.log(arr.reduce((total, cur)=>total+cur));
// console.log(total);



//Second Ques add different numbers

// const add = function(a,b){
    
//     if(a && b){

//         return a+b;
//     }
//     return function(c){
//       return a + c;

//     }
// }

// const t1 = add(5,3);

// const t = add(5)(2);
// console.log(t1 ,"===",t);

//==================================================================================

// mising numbers Question


// ar = [1,2,3,4,5,6,7,8,9,11];

// len = ar.length;

// for(let i= 1 ; i<=len; i++){
//    if(i != ar[i-1]){
// console.log(i);
// return;
//    }


// }



///Interviw Resvers string every thing

// let str = "ihh love javascript OK";

// let OneLine = str.split("").reverse().join("");

// console.log(OneLine);
// let splitStr = str.split(" ");

// let Final = [];

// let strF='';
// for(let i = splitStr.length-1 ; i>=0 ; i--){

//    // Final.push(splitStr[i]);
//     strF='';
//    for(let key of splitStr[i]){

//          strF = key +strF;
       
//    }
//    Final.push(strF);


// }


// console.log(Final.join(' '));


//===-=====================================================================

///Interview take min and max values in array and addd



// let arr = [1,2,3,4];

// minMax(arr);


// function minMax(arr){
//     let sumMin = 0;
//     let sumMax=0;
// let min = Math.min.apply(null, arr);
// let max = Math.max.apply(null, arr);

//  sumMin = arr.reduce((t,c)=>t+c ) - min;
//  sumMax = arr.reduce((t,c)=>t+c ) - max;


// //1 st way
// // for(let key of arr){
// //     if(min !== key){
// //         sumMin +=key;


// //     }

// //     if(max !== key){
// //         sumMax +=key;
// //     }


// //}
// console.log(sumMin);
// console.log(sumMax);

//}





//length Without Function length 

// let x = 123455;
// //let y = x.toString();
// //console.log(y.length);

// let lenVal=0;
// while(x > 1){

// x= x/10;
// lenVal++;

// }

// console.log(lenVal);




const obj = {

 name:'abc',
 getName(){
    console.log(this.name);
}
}

obj.getName()




// Count of Max Number.


// let x  = [1,2,2,4,2,4,4,4,4];
// let  max = Math.max.apply(null, x);
// sum=0;
// y= x.filter((c)=> {if(c == max){sum = sum +1; }   );
// console.log(y)
// sum = 0;
// for(let key of x){

//     if(key == max){
// sum ++;

//     }
// }
// console.log(sum);


// let x= 17;

// console.log(x.toString(16));


// let n= 100;

// for(let i = 1; i<=100; i++){

//     if(i%3 === 0 && i%5 === 0  ){
//         console.log("FizzBuzz")
//     }

// else if(i%3 === 0){

//     console.log("Fizz");
// }
// else if(i%5===0){
//     console.log("Buzz")
// }


// else{
//     console.log(i);
// }

// }

// Sorting ====================

// const arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// const len  = arr1.length;
// res=[];

// for(let i = 0 ; i<len; i++){

// for(let j = 0; j<(len-i); j++){
// if(arr1[j] > arr1[j+1] ){
// temp = arr1[j+1];
// arr1[j+1]= arr1[j];
// arr1[j] = temp;

// }




// }

// }

// console.log(arr1);






//   Frequent Item.................


// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// var obj = {};
// max = 0 ;
// var val1 ='';


// for ( let key of arr1 )
// {

//     if(obj[key]){

//        obj[key]++;
//     }
//     else{
//         obj[key]=1;

//     }


// }

// for(let val in obj){


// if(obj[val] >max){

// max = obj[val];
// val1 = val;


// }

// }
// console.log(val1,":",max);

// console.log(obj);








// convert upper to lower and lower to upper

// var str = "The Quick Brown Fox";
// var res = [];
// const upperFunc =(str)=>{
// i=0;
// for(let key of str){

//     if(i==0){

//         res.push(key.toLowerCase());
//         i++

//     }
//     else if(key == ' ' ){

//        i=0;
//        res.push(key);


//     }
//     else{
//         res.push(key.toUpperCase());
//         i++;


//     }

// }

// return res.join('');

// }

// console.log(upperFunc(str));






// Nested Array


// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for(let key in  a){

// console.log("row:", key);
// for(let val of a[key]){

//     console.log(val);
// }

// }




//squre of array


// var a= [2,4,2,5];
// var res= [];

// for(let key of a){

// res.push(Math.pow(key,2));

// }
// console.log(res);






//// sum and Product


// var a= [2,4,2,5];

// let sum = a.reduce((t,c)=>(t+c));
// let mul = a.reduce((t,c)=>(t*c));

// console.log("Sum==",sum);
// console.log("Product==",mul);



// let a= [1,2,1,2,3,2,7,8,5,5,9];

// console.log([...new Set(a)]);
// res=[];

// for(let key of a){


    
// if(res.indexOf(key) === -1){

// res.push(key);

// }



// }
// console.log(res);



//Leap year;;===========================================================


// start = 2001;
// end = 2020;

// console.log(2020%400);
// for(i=start; i<=end ; i++){
// if((i%4 === 0 && i% 100 !== 0) || (i%4 === 0 && i%400 === 0)  ){
//     console.log(" Leap Year==",i);

// }
// else{
//     console.log("Not Leap Year==",i);

// }

//  }




// duplicate array===========================================================


// let a = [3,5,4,4,6,5,6,7,8,13];

// let res = [];
// let dup = [];
// for(let key of a){

//     if(res.indexOf(key) ===-1){
// res.push(key);

// }
// else{
// dup.push(key);
// }

// } 

// console.log(dup );


// let a= [1,2,5,6];
// let b=[2,3,7,8,0];
// let arr1=[];
// let arr = arr1.concat.apply(a,b)

// console.log(arr);



// remove array

// let a= [1,2,5,6];
// let rm = 5;
// let res = [];

// let index = a.indexOf(rm);
// console.log(a.splice(index,1))


// for(let key of a){

//     if(key!==rm){

// res.push(key);
//     }

// }
// console.log(res);


// Inheritence 

// const fun1 = function(a){

//     this.a = a;
//     this.b=6;

  
// }

// fun1.prototype.fun2 = function(){

//          return this.a;

// }

// const getCall = new fun1("7");

// console.log(getCall.fun2());



//Output

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar1: "hello"
//   };
// }

// console.log(foo1());
// console.log(foo2())





// Palindrome

// function pal(str){

//     let OString = str.toLowerCase()  ;

// return (OString === str.split("").reverse().join(""))

// }


// console.log(pal("levels"));





/// Function

// function sum(a){


//     if(arguments.length === 2){

//         return arguments[0]+arguments[1]


//     }
//     else{
// return function(b){
//   return a+b;

// }
//     }
// }


// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3)); 





// find the place

// function missingNum(arr) {

//     let sum = arr.reduce((a+b)=>a+b,0);
        
//         return 55-sum;
    
//          }
      
    
    
        
      
//     console.log( missingNum([1,5,3,4,8,6,7,2,10])) ;




//Anangrams 

// function isAnagram(a,b){

//   return b.toLowerCase().split("").sort().join("") === a.toLowerCase().split("").sort().join("")  ;
// }






// console.log( isAnagram("cristian", "Cristina"));



//Unique Number

// function findLetters(str) {

//     let str1 = str.toLowerCase();
//    const res= {};
// let fin = [];
    
//     for(let key of str1){

//         if(res[key] >= 1){

//            res[key] += 1 ;
//         }
//         else{
//     res[key] = 1;
//         }
  
//   }

//    for(let key in res){

// if(res[key] === 1){
//     fin.push(key);
// }
      

//    }

//   return fin;
// }
//   console.log(findLetters("Ballooonb"))
  






//dupliccate count:

// function duplicateCount(str) {
	

//     const res= {};;
//  let fin = 0;
     
//      for(let key of str){
 
//          if(res[key] >= 1){
 
//             res[key] += 1 ;
//          }
//          else{
//      res[key] = 1;
//          }
   
//    }
 
//     for(let key in res){
 
//  if(res[key] > 1){
//      fin +=1;
    
//  }
     
//     }
 
//    return fin;
//  }
 
//    console.log(duplicateCount("Ballooonb"))





//  First Unquie value


// function firstNonRepeatedCharacter(str) {
    

//     const res= {};;
//      let fin = 0;
         
//          for(let key of str.split(" ").join("")){
     
//              if(res[key] >= 1){
     
//                 res[key] += 1 ;
//              }
//              else{
//          res[key] = 1;
//              }
       
//        }
//         for(let key in res){
     
//      if(res[key] == 1){
    
//         return key;
 
        
//      }
//      else if (res[key] > 1 ) {
//          fin = false;
//      }
     

    

    
         
//         }
     
//       return fin;



// }

// console.log( firstNonRepeatedCharacter("hhwwvv"));





// function isPrime(arr, target) {
	
//     var start = 0 ;
 
//     var len =arr.length-1;
//     var endVal = len;
  
 
//  while(start <= endVal ){ 
 
//      let  mid =  Math.floor((start+endVal)/2 );
//      if(target === arr[mid]){
//          return true;
//      }
//      else if( target > arr[mid] ){
 
//          start = mid + 1;
//           }
//      else{       
//           endVal = mid-1;  
//      }
   
//       }
 
//  return false;
//  }
 
 
//  console.log( isPrime( [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 3));



// function fib(n) {
//     if (n < 2) {
//       return n;
//     }
//   console.log(n);
//     return fib(n - 1) + fib(n - 2);
//   }

//   console.log(fib(5))






//  

// function interview(arr, total){
//     let veryEasy ='';
// if( total > 120 &&  arr.length < 8){
//     return "disqualified";
// }
// for(let i = 0 ; i<arr.length; i++){

// if(i<= 1){

// if(arr[i] > 5 ){
//     return "disqualified";
// }

// }
// else if( i > 1 && i <= 3) {
//     if(arr[i] > 10 ){
//         return "disqualified";
//     }

// }
// else if( i > 3 && i <= 5) {
//     if(arr[i] > 15 ){
//         return "disqualified";
//     }

// }
// else if( i > 5 && i <= 7) {
//     if(arr[i] > 20 ){
//         return "disqualified";
//     }

// }



// }
// return "qualified";
// }
// Test.assertSimilar(interview([5, 5, 10, 10, 15, 15, 20], 120), 'disqualified')

// console.log(interview([5, 5, 11, 10, 15, 15, 20, 20], 120));