var obj = {
    num: 5
};

var Fun = function(a,b){
    return a+b+this.num;

}

//2nd way
// var Fun = {
    
//     sum:function (a){



//  return this.summary = 2+a+this.num;

// },
// summary: 0
// }


// var val = Fun.call(obj,5,2);
// //var val = Fun.apply(obj ,[5,2]);

// //var bound = Fun.bind(obj);

// console.log(val);


class Parent {

    constructor(){
    this.a = "Ankush";

    }
}

class Child extends Parent{

constructor(b){ 
   super();
this.b= b;
}

 name() {
    console.log(this.a, " ", this.b )
}

}
    

 method = new Child("Kathria");

 method.name();



    

