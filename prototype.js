var Fun = function(x){

this.a = x;
this.b= 5;

}


Fun.prototype.getDtaA = function(){

    return this.a;
}


var x1 = new Fun('4');
var x2 = new Fun('77');

console.log(x1.getDtaA());

//console.log(x2.getDtaA());
