// let array = [2,3,4,2,3,5,6,5,7,4];
// let b = [];



// for(let i in array )

// {

//      console.log(b.indexOf(array[i]));
//  if(b.indexOf(array[i]) === -1){

//       b.push(array[i]);

//  }
// }

// console.log(b);

const arr =[
     {place:"here",name:"stuff"},
     {place:"here",name:"stuff"},
     {place:"here",name:"stuffff"}

]
console.log(arr.filter((v,i,a)=> a.findIndex((t)=>(t.place === v.place && t.name === v.name )) === i ));

