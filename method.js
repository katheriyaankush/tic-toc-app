const addTodo={

meetings: 3,
comleted:0,
addMeeting: function(num){  

   return this.meetings  = this.meetings+num;
},
summary: function(){

    return `Meeting ${this.meetings}`;
},
finishMeeting: function(num){
    return this.meetings = this.meetings -num;
}


};
console.log( addTodo.addMeeting(5));

console.log(addTodo.summary());
console.log(addTodo.finishMeeting(7));
