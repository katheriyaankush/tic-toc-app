var getTimeVal = new Date;
var hour =  getTimeVal.getHours();


if(hour > 9 && hour < 21 )
{

var conChat = true;

}
else{

    var conChat = false;
}
console.log(conChat);
console.log(hour);