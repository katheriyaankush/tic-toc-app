// const promise = new Promise((resolve,reject)=>{

// let val =33;
// let val2 = 333;
// if(val == val2){

//     resolve();
// }
// else{
//     reject();
// }



// });

// promise.then(()=>{ return console.log("Sucesss")}).catch(()=>{ return console.log("Failed")});


// async function ES7

// async function asyFun(){
//     throw new Error('Problem!');

//     return(67);

// }

// asyFun().then(x=>console.log(x)).catch(y=>console.log(y));





//---------------------------------------------------

//promise Working Example

// console.log("Person1 Ticket");
// console.log("Person2 Ticket");
// console.log("Person3 Ticket");

// const bringTicket = new Promise((resolve, reject) =>{ 
    
//     setTimeout(()=>{resolve("Ticket")}, 3000);

// });

// const proPopKorn= bringTicket.then((val)=>{
//     console.log(`Person4 ${val} `);
// console.log("Lets Go In Cinema");
// console.log("Wife Need Popcorn");

// return new Promise((resolve, reject)=>{

// resolve( `${val} and popcorn`)

// })

// });

// proPopKorn.then((pop)=>{ 

//     console.log(`Now Lets go ${pop}`);
// });
// console.log("Person5 Ticket");
// console.log("Person6 Ticket");




/////////-------------------------------

// Async Awail Example

// console.log("Person1 Ticket");
// console.log("Person2 Ticket");

// const preMovie = async ()=>{   

//    const bringTicket = new Promise ( (resolve, reject) =>
//    {
//        setTimeout(()=>{resolve("Tickets")}, 2000)
    
//     });
// const ticket =  await bringTicket;

// console.log("Wife: I need popcorn ");
// console.log("Husband: Ok I going to purchase Popcorn");

// const getPopcorn = new Promise ( (resolve, reject) => {  resolve("POPCORN")   });

// const popcorn = await getPopcorn;
// console.log(`Husband: Ok I got the ${popcorn}`);
// console.log("Wife: Its good but I also need butter ");
// console.log("Husband: Ok I going to purchase  Butter");

// const getButter = new Promise((resolve,reject)=>{resolve("BUTTER")});

// const butter = await getButter;

// console.log(`Husband: Baby I got the ${butter}`);
// console.log("Wife: Its good, Lets go to in Cinema")







// return ticket

    
// }

// preMovie().then((t)=>{console.log(`Person 3 Ticket`)});

// console.log("Person4 Ticket");
// console.log("Person5 Ticket");










/////////Second way =============================

console.log("Person1 Ticket");
console.log("Person2 Ticket");

const preMovie = async ()=>{   

   const bringTicket = new Promise ( (resolve, reject) =>
   {
       setTimeout(()=>{resolve("Tickets")}, 2000)
    
    });
const getPopcorn = new Promise ( (resolve, reject) => {  resolve("POPCORN")   });
const getButter = new Promise((resolve,reject)=>{resolve("BUTTER")});



let [ticket,popcorn,butter] = await Promise.all([bringTicket, getPopcorn, getButter])

console.log("Wife: I need popcorn ");
console.log("Husband: Ok I going to purchase Popcorn");


console.log(`Husband: Ok I got the ${popcorn}`);
console.log("Wife: Its good but I also need butter ");
console.log("Husband: Ok I going to purchase  Butter");



console.log(`Husband: Baby I got the ${butter}`);
console.log("Wife: Its good, Lets go to in Cinema")







return ticket

    
}

preMovie().then((t)=>{console.log(`Person 3 ${t}`)});

console.log("Person4 Ticket");
console.log("Person5 Ticket");
