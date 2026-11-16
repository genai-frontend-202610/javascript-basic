const fruits = ["Banana", "Apple", "Orange"]
console.log(fruits.sort());
console.log(fruits.reverse());


const scores = [40, 100, 1, 5]


console.log(scores.sort())
console.log(scores.sort((a,b)=>a-b))
console.log(scores.sort((a,b)=>b-a))

console.log( ["다람쥐", "가지", "나비"].sort((a,b)=>a.localeCompare(b)))

