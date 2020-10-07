let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';
//console.log(text)
 
let obj = JSON.parse(text);

console.log(obj.employees);

let result = obj.employees.map(res =>{ return (console.log(res.firstName))}  );
