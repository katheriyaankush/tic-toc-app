// 






// const promise = new Promise(()=>


// axios("api/data").then((res)=>{


// return( resolve(res))

// }).catch((err)=>{


//   return(reject(err))
// })


// ) 


// promise.then((data)=>{

//   console.log(data)
// }).catch((err)=>{
// console.log(err)

// })



// <Route path="home"+?data=${data}


// Coponent A 


// import {connect } from 'react-redux'
 

// class App extends {


//   const savedata=(data)=>{


// this.props.ondataSave(data)

//   }


// render() {


//   return(
// <p>{this.props.data1}
// )</p>
    
// }

// }

// const onStatetoProps=()=>{

// return(

//   data1: state.data1,
//   date2: state.date2
// );


// const mapStateToAction=()=>{

//   return(

//     ondataSave: (data)=>(action.ADDD, data.data)


//   )
// }

// }


// export default connect(onStatetoProps,mapStateToAction)(App)




// const json = {a:1, b:4 };

// const json2 = JSON.stringify(json);


// console.log(json2)




//clousre


// const Darex = function(){

//  let a=1;

// function inner(){

//   console.log(a + 4);

// }

// inner();


// }

// Darex()




 //function Inh



 // const Parent = function(ab){

//  this.a = ab;


// }

// Parent.prototype.child = function(){

// return(this.a)

// }

// const method = new Parent("Annjjj")

// console.log(method.child()); 





//class Inh


// class Parent {

//   constructor(){    
//      this.a = 5;     
//   }

  
// }

// class Child extends Parent{

// constructor(b){
//   super();
//   this.b = 7;

// }

//  add(){
//   return(this.a + this.b)
// }

// }

// const method = new Child(5);

// console.log( method.add())





// const obj={

// a:2,
// b:5,

// add (){
//   var that = this;
// return  function () {

 
//  return(that.a) 
// }
// }
// }

// const val = Object.create(obj)

// val.c = 7;

// console.log(val.add()(), "======", obj)


// let {a,b,c} = obj;


// console.log(a,",",b)



// const promise = new Promise((resolve,reject)=>{

// setTimeout(()=>resolve("Passs1"), 2000);


// });
// const promise3 = new Promise((resolve,reject)=>{

//   setTimeout(()=>resolve("Passs3"), 4000);
  
  
//   });
  

// const promise2 = new Promise((resolve,reject)=>{

//       return resolve("Fail2")
// })



// Promise.all([promise, promise3, promise2]).then(((val)=>{console.log(val)})).catch((err)=>{console.log(err)});
// console.log("fui")






// console.log("Hello I am first");

// console.log("Hello I am Second  ");


// const apiFunc = async ()=>{

// const ticketR = new Promise((resolve,reject)=>{

//   setTimeout(()=> resolve("Get Ticket"), 2000)

// })
// const popcornR = new Promise((resolve,reject)=>{ 
//   setTimeout(()=> resolve(" Popcorn"), 6000)
// },5000)


// const butterR = new Promise((resolve,reject)=>{ 
//   setTimeout(()=> resolve("Butter"))
// },3000)

// // let ticket = await ticketR;

// // let popcorn = await popcornR;

// // console.log("Get ", popcorn)



// // let butter = await butterR;

// // console.log(`Get ${butter}`)


// let [butter, ticket, popcorn] = await Promise.all([butterR,ticketR,popcornR]);
// console.log("Get ", popcorn)
// console.log(`Get ${butter}`)

// return (ticket);

// }

// apiFunc().then((t)=>{console.log(t)});

// console.log("Hello I am 3rd")
















// const request= require('request');

//  console.log("Hello I am first");
//  console.log("Hello I am Second  ");

//  const apiCall = async ()=>{
//    let location = "bengaluru";
  
//   const url =  'https://us1.locationiq.com/v1/search.php?key=0d6dcc046059a2&q='+location+'&format=json';

// const promise = new Promise((resolve,reject)=>{

// request({url, json: true}, (error, response)=>{

// resolve(response);
// console.log("Hi",response)

// })


// })
// let  data = await promise;

// console.log(data)

//  }

 //apiCall()
//  const https = require('https')
//  let location = "bengaluru";
  
//   const url =  'https://us1.locationiq.com/v1/search.php?key=0d6dcc046059a2&q='+location+'&format=json';
// const request = https.request(url ,response=>{
//   let data='';
//   response.on('data', (chunk) => {
//     data = data + chunk.toString()
// })

// response.on('end', () => {
//     const body = JSON.parse(data)
//     console.log(body)
// })


// }
// )
// request.end()



// var deSelectedRows = [
//   { PoHeaderKey: 129, OrderNo: "WS1", LineNo: 1, id: "BRIC01"},
//   { PoHeaderKey: 129, OrderNo: "WS1", LineNo: 1, id: "BRIC02"},
//   { PoHeaderKey: 129, OrderNo: "WS1", LineNo: 1, id: "BRIC03"},
//   { PoHeaderKey: 129, OrderNo: "WS1", LineNo: 1, id: "BRIC04"}
//   ];
  
//   var selectedRows = [
//   { PoHeaderKey: 129, OrderNo: "WS1", LineNo: 1, id: "BRIC01"},
//   { PoHeaderKey: 129, OrderNo: "WS1", LineNo: 1, id: "BRIC02"},
//   { PoHeaderKey: 129, OrderNo: "WS1", LineNo: 1, id: "BRIC03"},
//   { PoHeaderKey: 129, OrderNo: "WS1", LineNo: 1, id: "BRIC05"}
//   ];


//   ids = new Set(deSelectedRows.map(({ id }) => id));

//   selectedRows = selectedRows.filter(({ id }) => !ids.has(id));
  
//   console.log(selectedRows);




// const first =  [
//   {
//     "id": "040",
//     "name": "Sprouts",
//     "unitPrice": 5,
//     "sold": 2
//   },
//   {
//     "id": "041",
//     "name": "Atemoya",
//     "unitPrice": 5,
//     "sold": 2
//   },
//   {
//     "id": "042",
//     "name": "Mulberries",
//     "unitPrice": 5.48,
//     "sold": 2
//   }
// ]


// const sec = [
//   {
//     "id": "046",
//     "name": "Sprouts",
//     "unitPrice": 5,
//     "sold": 2
//   },
//   {
//     "id": "041",
//     "name": "Atemoya",
//     "unitPrice": 5,
//     "sold": 2
//   },
//   {
//     "id": "048",
//     "name": "Mulberries",
//     "unitPrice": 5,
//     "sold": 2
//   },
//   {
//     "id": "130",
//     "name": "Atemoya",
//     "unitPrice": 5,
//     "sold":2
//   },
// ];



// let combinedData = [...first, ...sec ];



// const newCombinedData = [];
// const len = combinedData.length;
// for(let i=0; i < len; i++){
// 	if(newCombinedData[combinedData[i].id] == undefined) {
//     if(combinedData[i].id >= 100)
//     {
//     //  combinedData[i].id = "0"+ combinedData[i].id ;
//       newCombinedData["0"+combinedData[i].id] = combinedData[i];

//     }
//     newCombinedData[combinedData[i].id] = combinedData[i];
//     }
//     else {
//       newCombinedData[combinedData[i].id].sold = newCombinedData[combinedData[i].id].sold + combinedData[i].sold;

//       }
// }

// const arrFinal = [];
// let sum = 0;
// for(let key in newCombinedData ){
// arrFinal.push(newCombinedData[key])
// sum  += newCombinedData[key].unitPrice  * newCombinedData[key].sold ;
// }

// arrFinal.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
// console.log(arrFinal ,"SUM==",sum);


// let final = marge.filter((v,i,a)=> a.findIndex((t)=>{
  
//   if( t.id === v.id){
//     console.log("jjhu", v )
//     return true

 
//   }
//   else{

//   return false

//   }
//    } ) === i );


//    console.log("Final==",final)




// let set = new Set();

// let unionArray = marge.filter(item => {
//   if (!set.has(item.id)) {
//       // console.log(set)

//     set.add(item.id);
//     return true;
//   }
//   console.log("44",set) 

//   return false;
// },  set);



//console.log(marge ,"===", unionArray)













// const obj={

// name:10,
// last:"script",
// testFunc:()=>{
// console.log("Hi")

// },
// obj2:{
//    a:2,
//    obj8:{
//      b:3
//    }
// }


// }
// const arr = [];
// const solveFun = function(){

// //console.log("Obj2:",obj.obj2.a ,"Obj3:", obj.obj2.obj3.b    )
// for( let key in obj){

// if(typeof(obj[key]) == 'object'){

  
// arr.push( obj[key].a) 
// if(Object.keys( obj[key]).length > 1){

//  Object.entries(obj[key]).reduce((acc,[key, val]) => {

// //

// arr.push(val.b)


//  })

// }


// }

// else if (typeof(obj[key]) == 'string') 

// {

// arr.push(obj[key])
// }

// else if (typeof(obj[key]) == 'number') 

// {

// arr.push(obj[key])
// }


// }
// console.log(arr)
// }



// solveFun.call(obj)







// const arr = [ 1,9,5,1,5,3,1,2,1];
// // 2,3,9,5,5,1,1,1,1,1

// const freq = {};
// const sortArr = [];
// const finArr = [];

// for(let key of arr) {
// if( freq[key] ){

//   freq[key] += 1
// }

// else{

//   freq[key] = 1
// }


// }

// for(let key1 in freq){

// sortArr.push([key1, freq[key1]])

// }

// sortArr.sort((a,b)=>{

// if(a[0] === b[0] ){

//   return( b[1]-a[1])
// }

// else{

//   return( a[0]-b[0])
// }
// })


// sortArr.forEach((obj)=>{

// for(let i=0 ; i <obj[1] ;i++ ){


// finArr.push(obj[0])

// }
// //console.log(obj)
// })

// console.log(finArr);











