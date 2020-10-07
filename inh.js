// function Test(name, age){

//     this.age= age;
//     this.name=name;

// }

// Test.prototype.city = "Moradabad";
// var CallFunc = new Test("Ankush", "23");




// console.log("This"+CallFunc.age+" City"+CallFunc.city);



///Inheritence=============/

// const car = function(model){

//     this.model=model;
// }


//  car.prototype.getModel = function(){

//     return this.model;
//  }

//  let method = new car("Suzuki");

//  console.log(method.getModel());




    // return function createBase(b){
         
    //  return a+b;

    // }


// const obj={
 
//  name: "Ankush",
//  age: 23,
//  getFunc: function(){ 
    
//  console.log(this.name);
// return(this.country);

//  }
// }

// var p = Object.create(obj);
// p.country="Moradabad";

// console.log (p.getFunc());



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



// let Latitude = 12.937870 

// let Longitude = 80.235046


// let data = [{"latitude": "11.016844", "user_id": 1, "name": "Sachin", "longitude": "76.955833"},
//        {"latitude": "13.001177", "user_id": 2, "name": "Dravid", "longitude": "80.256493"},
// {"latitude": "12.001177", "user_id": 3, "name": "Dhoni", "longitude": "80.246493"}];

 
// let filterValue = data.filter((a)=> 
// {

// Math.abs(a.latitude) >
// }

// )

// let len = data.length;

// //console.log(len)
// for(let i = 0 ; i<len ; i++ ){

//     for(let j=0; j<(len-i) ; j++   ){

//        console.log(data[j+1].user_id)
// if(data[j].user_id > data[j+1].user_id){

//     let temp = data[j+1];
//         data[j+1] = data[i];
//        data[i] = temp;

//  }

//     }


// }
//console.log(data)

//console.log(filterValue);
//data.filter((a)=> a.latitude  )

//getDistance(sourceLat,sourceLong,DestLat,destLong);




// let obj={
//     a:1
// }


// function setFun(obj){
// console.log(obj)
//     return(obj === { a: 1 })

// }
// console.log(setFun(obj))






// function parent (){

//      this.a= "Ankush";


// }

//  parent.prototype.child=function (){


//    console.log(this.a)
// }

// const method = new parent();

// method.child();



// const Obj ={
// a:1,
// b:2,
// cfunc: function(){
//     console.log(this.b)
//     return (this.d+this.b);
// }

// }

// var add = Object.create(Obj);
// add.d = 6;
// console.log(add.cfunc());



// const arr = [2,[3,5],[66,7,[4,6],7],[8,33]]
 
// console.log(arr.flat(Infinity));
  

// let Obj = {
//     b:2,
//     a:3
    
//     }


// function add(c,d){

// console.log(c+d+this.a+this.b);

// }




// let bindV = add.bind(Obj)
// bindV(2,5)



// class parent {

// constructor(a){

//     this.a = "Ankush";
// }

// getParent(){

//     console.log(this.a)
// }

// }


// class child extends parent{

//     constructor(b){
//         super();
//       this.b =b;

//     }

//     getChild(){

//         console.log(this.a ," ", this.b)
//     }
// }


// const met = new child("Katharia");

// met.getChild();



// let arr = [3,4,23,6,20, 21];
// let target = 22;

// let res = arr.reduce((pre, cur)=>{

//     return ( Math.abs(pre-target) < Math.abs(cur-target) ? pre : cur)

// })
// console.log(res);


fizzFunc=(n)=>{


   for(let i = 1 ; i<=n; i++)

   
   if(i%3===0 && i%5===0){
    console.log("fizzbuzz");
   }
   else if(i%3  === 0 ){

    console.log("fizz");
   }

   else if(i%5 === 0){
    console.log("buzz");

   }
   else{
       console.log(i)
   }



}



fizzFunc(100)




