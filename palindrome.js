let num = 125213;
// camp = num.toString().split("").reverse().join("");

// if(camp == num){
//     console.log(true);
// }
// else{
//     console.log(false);

// }
// console.log(camp);

let pal = [] ;




function pald(num1){
while (num1 >0) {
    pal.push( num1 % 10);

    num1 = Math.trunc(num1/ 10);
}

return pal;
}


console.log(pald(num).join('') ==  num);