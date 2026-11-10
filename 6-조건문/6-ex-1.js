// 1) 변수 fruit에 과일 이름 넣기
const fruit = 'apple'

// 2) switch (fruit)으로 case 'apple' / 'banana' / 'orange' 만들기
switch (fruit) {
    case 'apple':
        console.log('사과입니다');
        break
    case 'banana':
        console.log('바나나입니다');
        break
    case 'orange':
        console.log('오렌지입니다');
        break
    default:
        console.log('알수 없는 과일입니다');

}
//    (각 case마다 메시지 출력 후 break)

// 3) default에서 '알 수 없는 과일입니다.' 출력