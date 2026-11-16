const now = new Date()

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

const myDate = new Date('2026-12-25')
console.log(myDate.toDateString())

let futureDate =new Date()
futureDate.setDate(futureDate.getDate()+7)

console.log(futureDate)