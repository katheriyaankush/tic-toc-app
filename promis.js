var promise = new Promise((resolve, reject)=> { 
    const x = "geeksforgeeks"; 
    const y = "geeksforgeek";
    if(x === y) { 
        resolve(); 
    } else { 
        reject(); 
    } 
    }); 
    
    promise. 
        then( ()=> { return  console.log('Success, You are a GEEK');   }). 
        catch( ()=> {  return  console.log('Some error has occured');  }).then(()=>{console.log('Something')}); 
    

