// 1) 변수 score에 85 넣기
const score =55

// 2) 90 이상 → "Grade: A" 출력
if(score>=90){
    console.log(`점수는 ${score}점 입니다. : GradeA`);
    
}
else if(score>=80){
    console.log(`점수는 ${score}점 입니다. : GradeB`);

}
else if(score>=70){
    console.log(`점수는 ${score}점 입니다. : GradeC`);
    
}else{
    console.log(`점수는 ${score}점 입니다. : GradeF`);

}


// 3) else if 80 이상 → "Grade: B"
// 4) else if 70 이상 → "Grade: C"
// 5) else → "Grade: F"
