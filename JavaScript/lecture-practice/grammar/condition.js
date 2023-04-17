// 1. 나이가 18세 이상이면 "안녕하세요!"를
// 2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 
// 3. 10세 미만이면 “부럽다…” 를 출력합니다.
let age = prompt("나이를 입력해주세요");

if(age >= 18) {
    console.log("안녕하세요!");
} else if(age >= 10) {
    console.log("안녕! 반가워 꼬마친구!");
} else {
    console.log("부럽다...");   
}

// 사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요. 
// 1. 성적이 90점 이상이면 "A", 
// 2. 80점 이상이면 "B", 
// 3. 70점 이상이면 
// 4. "C", 60점 이상이면 "D", 
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.
const score = prompt("성적을 입력해주세요");
if(score >= 90) console.log("A");
else if(score >= 80) console.log("B");
else if(score >= 70) console.log("C");
else if(score >= 60) console.log("D");
else console.log("강해져서 돌아와라");

console.log(score >= 90 ? "A" : 
            (score >= 80 ? "B" : 
            (score >= 70 ? "C" : 
            (score >= 60 ? "D" : "강해져서 돌아와라"))));

/* -------------- switch */
const value3 = "four";
switch(value3) {
    case 'one':
        console.log("one");
        break;
    case 'two':
        console.log("two");
        break;
    case 'three':
        console.log("three");
        break;
    case 'four':
        console.log("four");
        break;
}

// 여러줄 복사하고 싶을 때에 Alt + Shift + 위 아래
// 같은 단어 찾고 싶을 때 Ctrl + D
// 같은 모든 단어 Ctril + Shift + 1
// 자동정렬 cmd + a, cmd k + f
// 전체 줄 선택: shift + cmd + ㅣㄷㄹㅅ
switch(new Date().getDay()) {
    case 0:
        console.log("일요일");
        break;
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
        break;
}

// switch 대신 사용할 수 있다
const week = new Date().getDay();
const weekObject = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

// default는 단락평가나 nullish 연산자 사용
console.log(weekObject(week) ?? "no week");
console.log(weekObject(week) || "no week");