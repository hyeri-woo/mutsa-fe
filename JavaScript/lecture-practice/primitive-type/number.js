/* -------------------- 2진법 */
let n1 = 10000;
let n2 = 10.123123;
let n3 = 31;
let n4 = 1001;
let n5 = 1111;

console.log(parseInt(n1));
console.log(parseInt(n2)); // 소숫점이 없어짐, 권장
console.log(~~n2); // 소숫점이 없어짐, 코테 정도에서만 권장.
console.log(parseInt(n4, 2)); // 2진법 -> 10진법
console.log(parseInt(n4, 8)); // 8진법 -> 10진법
console.log(parseInt(n4, 10)); // 10진법 -> 10진법
console.log(n2.toFixed(3));    // 소수점 3번째 자리까지

/* -------------------- parseInt vs. Number  */
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(parseInt(true));  // NaN
console.log(parseInt(false));  // NaN

console.log(Number(" "));   // 0
console.log(Number(""));    // 0
console.log(Number("hello"));   // NaN
console.log(Number("10 20"));   // NaN
console.log(Number("10abc"));   // Nan
// 권장
// 텍스트가 숫자로 시작하지 않을 때 NaN
// 텍스트가 숫자로 시작했을 경우 숫자까지만 변환
console.log(parseInt(" "));   // NaN
console.log(parseInt(""));    // NaN
console.log(parseInt("hello"));   // NaN
console.log(parseInt("10 20"));   // 10
console.log(parseInt("10abc"));   // 10

// console.log(Number(10 20));  // error
console.log(Number("   10"));   // 10
console.log(Number("10     ")); // 10


/* -------------------- Math */
Math.abs(-10);      // 10 절대값
Math.ceil(4.5);     // 5 올림
Math.floor(4.5);    // 4 내림
Math.round(4.5);    // 5 반올림   
Math.round(4.4);    // 4 반올림   
Math.sqrt(4);       // 2 square root
Math.pow(2, 3)      // 2^3
Infinity;           // 양수 무한값
-Infinity;          // 음수 무한값
Math.PI             // PI 값 3.14를 사용하는 경우가 많다

Math.min(1, 2, 3);  // 1 최소값
Math.max(1, 2, 3);  // 3 최댓값
Math.min(...[1, 2, 3]) // 배열은 ...사용 필수
Math.min(...[1, 2, 3], ...[4, 5, 6]);

Math.random();  // 0 이상 1 미만
// (Math.random() * (최댓값 - 최솟값)) + 최솟값
parseInt(Math.random()*10 + 1) // 1 ~ 10까지 난수 생성

// 부동소수점
// Computer에서 10진수 연산은 정확하지 않다
0.1 + 0.2   // 0.3000000000000004;
0.1 * 3     // 0.3000000000000004;
0.3 + 0.6   // 0.8999999999999999;
// 문제가 되는 경우
let width = 0.3;
let height = 0.6;
if(width + height >= 0.9) {
    console.log("실행");
}


// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.(추가된지 2년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비 필수
// 정상 작동이 잘 안 되는 경우도 있다. 
9007199254740991        // = 2^53 - 1
9007199254740991 + 1    // 9007199254740992
9007199254740991 + 2    // 9007199254740992
9007199254740991 + 3    // 9007199254740994
9007199254740991 + 4    // 9007199254740996

// 제대로 나오게 하려면 n을 붙혀야 한다
9007199254740991n + 1n  // 9007199254740992n
9007199254740991n + 2n  // 9007199254740993n
9007199254740991n + 3n  // 9007199254740994n
9007199254740991n + 4n  // 9007199254740995n

// 또는 BigInt를 사용하면 된다. 
BigInt(9007199254740991) + BigInt(1)    //9007199254740992n
BigInt(9007199254740991) + BigInt(2)    // 9007199254740993n
BigInt(9007199254740991) + BigInt(3)    // 9007199254740994n
BigInt(9007199254740991) + BigInt(4)    // 9007199254740995n

BigInt(5) + 5n
BigInt(5) + 5 // error
BigInt(5) / 2n // 2n (소수 표현 안됨)
BigInt("10") + BigInt("10") // 큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 함

// 상식으로 알아두면 좋은 것
let x = 10;
console.log(x.toString());
// console.log로 출력하게 되면 문자열의 경우 ""없이 출력한다.
// 10.toString() // .을 소수점으로 인식
