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