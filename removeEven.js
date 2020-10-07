    // let arr = [1,2,4,5,10,6,3];
    // let fArray = [];
    // for( let key of arr ){

    //     if( key%2 !== 0){
    //         fArray.push(key);
    //     }
    // }
    // console.log(fArray); remove even numbers
//object Values in array
    let ob = {     
        a: 3,
        b: 4
    };
    const sol2 = [];
const arr = Object.entries(ob);

console.log(arr);
    const ar = [];

    for(let key in ob){
        sol2.push(ob[key]);
 console.log(key);
     }
console.log(sol2);



// let str = 'anku';
// let rString ='';
// for(let key of str ){
//    rString =  key + rString;

// }
// console.log(str.split('').reverse().join(''));

// console.log(rString);