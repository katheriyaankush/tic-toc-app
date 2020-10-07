// Object Inheritense   

const obj={
 
 name: "Ankush",
 age: 23,
 getFunc: function(){ 
    
 console.log(this.name);
return(this.country);

 }
}

var p = Object.create(obj);
p.country="Moradabad";

console.log (p.getFunc());



// Object Constractor


// const ConstractorObj = function(name, city, state){

//     this.name = name;
//     this.city = city;
//     this.state = state;

// }

// ConstractorObj.prototype.country="India";
// const parent = new  ConstractorObj("Ankush", "MBD", "UP")

// console.log(parent.country);




// Function Inhertence


// function Car (){

//     this.model = "TATA"
// }

//  Car.prototype.getCar = function(){

//     console.log(this.model);
// }

// const method = new Car();
// method.getCar();

  



// clousere   


// function clousere(){
//     let car = "TATA1";
   
//  function inner(){
//      car = "Huyndai"
//     console.log(car)
// }

// inner()
// }

// clousere(); 


//Promise

// console.log("1st Number ");

// const promise = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//          resolve("2nd Number");
//     }, 1000)
// }
// );

// const promise2 = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//          reject("3rd Number");
//     }, 1)
// }
// );
// promise.then((resolve)=> console.log(resolve) );
// promise2.catch((res)=> console.log(res) );


// console.log("4th Number");
