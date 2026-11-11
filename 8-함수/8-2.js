// 1) 상수 greet에 익명 함수 넣기 (매개변수 name)
const greet=function(name){
    return `Hello ${name} !`
}
//    → "Hello, " + name + "!" 반환

// 2) greet("Bob") 호출 결과 출력 → Hello, Bob!
console.log(greet('Bob'));

