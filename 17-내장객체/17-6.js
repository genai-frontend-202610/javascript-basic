const numbers = [1, 2, 3, 4, 5]

console.log(numbers.map(x => x * 2));
console.log(numbers.filter(x => x > 2));
console.log(numbers.reduce((sum, x) => sum + x, 0));
console.log(numbers.some(x => x > 4 ));
console.log(numbers.every(x => x > 0 ));
