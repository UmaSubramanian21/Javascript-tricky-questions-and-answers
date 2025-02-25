let a = { foo: 'bar' };
let b = { foo: 'bar' };
console.log(a == b);
console.log(a === b);
// objects compare pandrathukku JSON.stringify use pannanum
// bcoz a === b 
console.log(JSON.stringify(a) === JSON.stringify(b))