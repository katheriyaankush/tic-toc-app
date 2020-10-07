

// var obj = {

//     fname:"Ankush",
  

// }

// const  {fname , lname ="Katheria" } = obj;

// console.log(fname + lname)


// //[ , ,c]= [1,2,3]

// var str = "AAAnkush"
// var str2 = "husnkA"

// const comp =(str1, str2 )=>{
// newArr = [];
// for(let key of str2 ){
// if( newArr.indexOf(key) === -1 ){

//     newArr.push(key)
// }

// }



// return str1.split("").sort().join("") === newArr.sort().join("")


// }


// console.log(comp(str,str2));

// var arr = [[0,1], [2,3] , [4,5]]

// var result =arr.reduce(function(a,b){

//     return a.concat(b)
// }, [])

// console.log(result)

// var x=21;
// var test_result = function(){


//     console.log(x)
//     var x =20;

// };
// test_result()



// function leap(starting , ending ){

// var range=[];

// for(var i=starting; i<=ending;i++){

// range.push(i)

// }
// var replace_array =[];

// range.forEach(
// function(year){
//     if(check_year(year)){

//         replace_array.push(year)
//     }
// }

// );

// return replace_array;
// }

// function check_year(year){

//     if((year%4===0&& year%100!==0)|| (year%4===0&& year%400===0)){
//         return year;
//     }
//     else{
//         return false
//     }

// }
// console.log(leap(5000,5012))




for(var i = 0 ; i<3; i++ ){

((i) =>{ setTimeout(()=>{
    console.log("===",i)
}, 200)}) (i)


console.log(i)

}









// for(let i = 0 ; i<=5; i++){
//     var sum="";
// for(let j = 5 ; j>=i; j--){
//    sum += " "
// }

// for(let k = 0 ; k<=i; k++){

//     sum += "*"

// }
// console.log(sum)
// }
// const a=()=>{

// var obj = {
// A:45
// }

// }

// a.bind(obj);

