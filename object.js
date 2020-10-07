let objectValue = {

    name:'Ankush'
};

Object.freeze(objectValue); //for stop the update of object

objectValue.age = 8;


console.log(objectValue);
