const countries = {
    canada: "america",
    usa: "america",
    mexico: "america",
    france: "europe",
    germany: "europe",
    spain: "europe",
    poland: "europe",
    india: "asia",
    china: "asia",
    japan: "asia",
    thailand: "asia",
    kenya: "africa",
    sudan: "africa",
    mali: "africa",
    algeria: "africa",
};

const data = {
    france: {
        orders: 1860,
        customers: 89
    },
    spain: {
        orders: 459,
        customers: 34
    },
    india: {
        orders: 5398,
        customers: 678
    }
};

// Expected output:
// {
//     europe: {
//         orders: 2319,
//         customers: 123
//     },
//     america: {
//         orders: 0,
//         customers: 0
//     },
//     asia: {
//         orders: 5398,
//         customers: 678
//     },
//     africa: {
//         orders: 0,
//         customers: 0
//     }
// }


const result = {};
const resultOb={};
let order =0;
let orderA= 0;
let orderAM= 0;
let orderAf= 0;

for(let key in countries){




  if(data[key]){
      let val = data[key];
        order = order+val.orders ;
      result[countries[key]] = { orders: 1 };
}
else{
    result[countries[key]] = { orders : 0 };
      
}

   }
   




   




console.log(result);
//console.log(resultOb);

    // for(let obj in resultOb){
    //     let value = resultOb[obj].split(',')
    //        let len = value.length;
      
    //      for(let i =0 ; i <= len ; i++){
    //   //console.log(value[i]);
    
    //                if(obj == 'europe' ){
                   
    //                 eorder = sumOrder + data[val].orders ;
    //                   result[obj] = { sumOrder  };

    //                }
    //                else if(obj == 'asia' ){

    //                 sumOrder = sumOrder + data[val].orders ;
    //                 result[obj] = { sumOrder  };
    //                }
    //                if(obj == 'america' ){

    //                 sumOrder = sumOrder + data[val].orders ;
    //                 result[obj] = { sumOrder  };
    //                }
    //                if(obj == 'africa' ){

    //                 sumOrder = sumOrder + data[val].orders ;
    //                 result[obj] = { sumOrder  };
    //                }
                 
                
                  
               
            
    //             }
              
            
            
            
    //         }
         

 

    





//

// Your code here

//console.log(result);

