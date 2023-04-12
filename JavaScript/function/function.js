/* ------------------- function이 필요한 이유 */
// 1. 재사용성이 높아집니다.
function one(){
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
one()
one()
one()
one()
one()

// 2. 유지보수가 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 3. 구조 파악이 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄
// function func_name(para1, para2, ...) {
//     // context
//     return returnValue;
// }

/* ------------------- 함수의 일반적인 형태 */
// 파선아실
function one(a, b){     // 1
    let z = a + b       // 2
    return z ** 2       // 3
}
console.log(one(7, 3))  // 100

// 화살표 함수
const two = (a, b) => (a + b) ** 2
console.log(two(7, 3))
console.log(two(7, 3))

// 이름 없이 선언하는 함수
const three = function (a, b) { // 1
    let z = a + b // 2
    return z ** 2 // 3
}
console.log(three(7, 3))

/* ------------------- 콜백 함수 */
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게
function four(a, b, c) {
    let z = c(a, b) + c(a, b);
    return z * 2;
}

console.log(four(7, 3, one));   // 400

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없다. 
// 외부에서 직접 값을 가져오는 것을 지양하자.
function five(a, b) {
    let z = one(a, b) + one(a, b);
    return z * 2;
}


/* ------------------- 함수, 메서드 (클래스 안에 들어간 함수) */
// .을 찍어 접근할 수 있는 함수 => 메서드
let y = console.log;
y(hello);       // hello (y가 console.log의 일을 할 수 있다)


// 아래 3개는 같은 코드이다. return이 없으면 undefined 반환
function hello1() {
    console.log("hello");
}

function hello2() {
    console.log("hello");
    return;
}

function hello3() {
    console.log("hello");
    return undefined;
}

/* ------------------- console.log vs. return */
function hello(para) {
    console.log(para);
    return 100;
}
console.log(hello(10));
let z = console.log("hello");   // undefined

/* ------------------- return */
function hello4() {
    console.log('hello');
    console.log('hello');
    console.log('hello');
    return;
    console.log('hello');
    console.log('hello');
    console.log('hello');
}
hello4();

function hello5() {
    if (true) {
        if (false) { // 이 값을 바꿔보세요.
            if (true) {
                return;
            }
        }
    }
    console.log('hello');
}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아니다
const x = [10, 20, 30, 40];
x.forEach(function (el) {
    console.log(el);
    return;
    console.log('world');
});


/* ------------------- argument and parameter */
function func1(a, b, c){
    console.log(a+b+c);
    return a + b + c;
}

func1(10, 20, 30, 40);  // 에러가 발생하지 않는다. 
func1(10, 20);          // 에러가 발생하지 않는다. 

function func1(a=10, b=20, c=30) {
    return a + b + c;
}

func1(a=1, c=1);        // a와 c가 아닌 a와 b에 들어간다. 


// 화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
    return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => {
    return x + 10
}

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);

// 즉시 실행 함수
(function () {
    console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();




// 1. object처럼 사용되는 함수
function func1(a, b) {
    return a + b;
}

function func2(a, b, c) {
    return a + b + c;
}

function func3(a, b, c, d, e, f) {
    return a + b;
}

// length가 파라미터의 수
console.dir(func1);
console.dir(func2);
console.dir(func3);

// array, object, function가 모든 같은 방식으로 접근하거나 값을 변경할 수 있나?
func1["location"] = "jeju";
console.dir(func1); // location 속성 추가

func1["length"] = 5;    // 변경되지 않는다


function func4(a=10, b=20, c=30) {
    return a + b + c;
}

// 2. 아규먼트가 순서대로 들어가는 함수의 특성
console.log(func4(100, 200));   // 330
console.log(func4(c=300));      // 350
// 아규먼트는 순서대로 들어가므로 a=300이 된다

// 3. roro 기법 원리 설명
// roro: 입력되는 아규먼트가 매우 많음 함수의 경우 호출하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어렵다. 
hello("title", 20, 50, 100, 50, 100, true);
hello(
    title="title",
    xPos = 20,
    yPos = 50,
    width = 100,
    height = 50,
    radius = 100,
    clockwise = true
)
// 어떻게 사용히고 원리는 무엇인가
function user_info({
    level = "gold",
    writing = true,
    read = true,
    backup = "within 1 week",
    snslogin = true,
}){
    console.log(level, writing, read, backup, snslogin);
}

user_info();    // error
user_infor({}); // no error

user_info({
    level: "silver",
    snslogin: false,           // 순서 바뀜
    backup: "within 3 days"    // 빠진 정보도 있음
})
// 그러나 잘 들어감

// 원리(모르셔도 코딩하는데 지장있진 않습니다.)
let one;
let two;
let three;

let four = {one, two, three} 
// {one: undefined, two: undefined, three: undefined}
// 이렇게 사용할 수 있게 된 것이 최근입니다.
// '이렇게'는 변수 값을 object안에 넣으면 변수명이 key가되고 변수의 값이 object의 value가 되는 문법을 얘기합니다.

let {one, two, three} = {one:10, two:20, three:30}
let {one, two, three} = {two:20, one:10, three:30}

// 살짝 심화
function 함수({
    a = 1,
    b = 2,
    c = 3
} = {}){
    console.log(a, b, c)
    return a + b + c
}

함수()
함수({})
함수({b: 100})

// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined