// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3




json = '{ "interactionAttribute": { "clientRefrenceId": "d225-5f1c477b-vce-daf-11","lastNode":"1201","firstOptionSelected":"1","connectedToAgent": false, "callDrop": true, "callMeBack": false, "ringTime": "0", "ivrTime": "46997", "waitingTime": "0", "campaignId": "1", "queueId": "null", "userId":"","repeated":["null"],"backToMainMenu":["null"],"backToPreviousMenu":["null"] ,"isMainMenuStatus":true, "callType": "inbound.dial.customer", "hangUpRate": "20", "callStartTime": "2020/07/28 15:20:32 +0530", "callEndTime": "2020/07/28 15:21:19 +0530", "avgWaitingTime": "", "connectedToAgent": false, "callMeBack": false, "preferredLanguage": "Hn", "isRegisteredUser": true, "isQueryViaHelpCenter": false, "isStylePlusUser": false, "customerSegment": 3, "stylePlusDetailsEntry": { "status": "active", "tier": "NotDefined" } }, "userJourney":[ { "node": "1000", "nodeName": "Existing Refund","timeSpent": "19.658","nextNode": "", "connectedToAgent": false,"callMeBack": false, "backToMainMenu": false, "repeated": false, "calEnded": false,"callDrop": false, "sequence": 1 }, { "node": "1200", "nodeName": "Refund status on Picked up Return","timeSpent": "0","nextNode": "", "connectedToAgent": false,"callMeBack":false, "backToMainMenu": false, "repeated": false, "calEnded": false,"callDrop": false, "sequence": 2 }, { "node": "8070240366", "nodeName": "HERE&NOW Tops",  "entitySelected":1, "count":null,"timeSpent": "0","nextNode": "", "connectedToAgent": false,"callMeBack":false, "backToMainMenu": false, "repeated": false, "calEnded": false,"callDrop": false, "sequence": 3 }, { "node": "1201", "nodeName": "Picked up, QC not done","timeSpent": "1595929865.941","nextNode": "", "connectedToAgent": false,"callMeBack":false, "backToMainMenu": false, "repeated": false, "calEnded": false,"callDrop": false, "sequence": 4 }]}';

json1 = json.replace(/[&]/g, 'and');
console.log(json1);




    
 
//     function fib(n, arr = [0, 1]) {
//         if (n === 1) return arr[n];
     
//         if (arr.length === n + 1) {
//             console.log(arr)
//             return;}
     
//         arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
//         fib(n, arr);
  
//         return arr[n];
//     }







// fib(5);

//module.exports = fib;





// function fib(n) {
//  const array = [];

// for(i=0; i<n; i++){
//   //  store = store+ i;
//   if(i == 0 ){
//     array.push(0);

//   }
//   else if(i==1){
//     array.push(1);
//   }
//   else{
//   array.push(array[i-2]+array[i-1]);
//   }

// }

// return(array);
// }