const obj = { name: "Alice", age: 25 }

const jsonStr = JSON.stringify(obj)

console.log(jsonStr);

const jsonObj = JSON.parse(jsonStr)

console.log(jsonObj);
console.log(JSON.stringify(obj,null,2));
