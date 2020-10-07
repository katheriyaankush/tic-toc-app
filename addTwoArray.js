let a  = [1,2,3,4,5,19,33];
let b  = [1,2,5,4,6,17,30];




let con = a.concat(b);
console.log(con);   
let len = con.length;
res = [];

for(let i=0; i<len; i++){

    for(let j=0; j< (len-i); j++){

        if(con[j]>con[j+1]){

         let tmp = con[j+1];
        
          con[j+1] = con[j];
          con[j] = tmp;

        }
        
    }

   
}

console.log(con);   


