let array = [2,3,4,2,3,5,6,5,7,4];

//let res = array.find(myFunc);   //for find the number with condition
// let res = array.findIndex(myFunc);  //for index
// console.log(res); 
// function myFunc (value,index,array){
// return value>6;

// }


//let res = array.find((value)=> value < 6   )

let res = array.findIndex(value=>value>6)
console.log(res); 

// var data = '{"newLangSuffix":"En","registered_status":"true","isStylePlusUserDump":"true","stylePlusTier":"Select","repeated":[null],"backToMainMenu":[null],"backToPreviousMenu":[null],"isMainMenuStatus":true,"mobileNo":"8588834317","promoVal":"null"}';



// eval('PostJson ='+data+';');

// var firstOptionSelected=PostJson.newLangSuffix123456;

// console.log(firstOptionSelected);