const identify = function() {


   const inner = ()=>{
    return this.name;
   }
  

   return inner();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( this );
}

let me = {
    name: "Kyle",
    age: "two"
};

var you = {
    name: "Reader",
    age:"one"
};

console.log(identify.call(me )) ; // KYLE
console.log(identify.call( you )) ; // READER

//console.log(speak.call( me )) ; // Hello, I'm KYLE
//console.log(speak.call( you )) ; // Hello, I'm READERå