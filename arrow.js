// var a = function(){


//     console.log(arguments[0]);
// }

// a(1,2,3,);



// var a = (...arg)=>{


//     console.log(arg[0]);
// }

// a(1,2,3,4);



// use of arow function we us the value of uper function value

const Obj = {

x:2,
getX(){
inner=()=>{

        console.log(this.x);
    }
    inner()
}

}
Obj.getX();
console.log(Obj.x) ;



//without using Arrow function

// const Obj = {

//     x:2,
//     getX(){
//         that = this;
//         const inner = function() {
            
//             console.log(that.x);
//         }
//         inner();
//     }
    
//     }
//     Obj.getX();
//     console.log(Obj.x) ;