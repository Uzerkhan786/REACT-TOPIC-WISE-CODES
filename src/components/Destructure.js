//Extracting the name of the object key and uses in function and other things is called destructuring.

const obj = { name: 'uzer', sub: 'maths' };
const { sub } = obj;
console.log(sub)

//or 

const objArray = [{ name: 'uzer', sub: 'maths' }, { name: 'umer', sub: 'commerce' }];
const { name } = objArray;

objArray.map((val) => (console.log(val.name)))
