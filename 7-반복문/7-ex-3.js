// 1) 배열 arr 만들기
const arr = [1, 2, 3, 4, 5]
// 2) 곱을 담을 변수 result에 1 넣기 (0이 아닌 이유는?)
let result = 1

// 3) for...of로 arr의 값을 하나씩 꺼내 result에 곱하기
for (value of arr) {
  result *= value
}

// 4) '배열 요소의 곱: ' + result 출력하기
console.log(result);
