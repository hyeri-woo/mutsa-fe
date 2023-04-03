/* -------------------- 할당 연산 */
let x = 10;
x += 10;        // x = x + 10; 와 같다

/* -------------------- 단항 연산 */
console.log(-(2));      // -2
console.log(-(-2));     // +2
console.log(+(-2));     // -2
console.log(+(+2));     // +2
console.log(+(+"2"));   // +2 (숫자로 변환됨)

/* -------------------- 증감 연산 */
let num = 3;
// 선 증가 후 할당
++num;      // num = num + 1;  
--num;      // num = num - 1;
// 선 할당 후 증가
num++;      // num = num + 1;
num--;      // num = num - 1;
// 실무에서는 이것을 구분하는 것이 큰 의미가 없다. 

/* -------------------- 단락 회로 평가 */
// true: 1
// false: 0
// and(&&): 곱
// or(||): 합
// not(!): 부정
console.log(!"false");  // false 문자열은 not연산자가 안됨
console.log(!"0");      // false
console.log("abc" / 2); // NaN

console.log(!!NaN);         // false
console.log(!!undefined);   // false
console.log(!!null);        // false

// username이 false일 경우 뒤의 값을 저장
let username = "";
username = username || "이름 미입력";

/* -------------------- 삼항 연산자 */
// 2개 이상 중첩하지 말자 
// 3개 이상 사용은 가독성이 떨어진다. 
let sale = true;
let price = sale ? 100 : 200;   // 100
// if sale = true, 100
// if sale = false, 200

price = 7000;
let message = price >= 5000 ? "비싸다" : "괜찮다";  // 비싸다

price = 7500;
message = (price >= 9000) ? "비싸다" : ((price >= 7000) ? "적절해요" : "저렴해요");

// 실습 1
// 통장에 10000원 이상있으면 부자
// 통장에 10000원 미만있으면 부를 바라는 자
let money = 9000;
let wealth = money >= 10000 ? "부자" : "부를 바라는 자"; 

// 실습 2
// 통장에 100000원 초과했으면 초부자
// 통장에 10000원 초과했으면 부자
// 통장에 10000원 이하있으면 부를 바라는 자
money = 9000;
wealth = money > 100000 ? "초부자" : ((money > 10000) ? "부자" : "부를 바라는 자"); 

/* -------------------- 드모르간 법칙 DeMorgan's law */
// 드모르간 법칙을 이용해서 무조건 true가 되는 곳이나 무조건 false가 되는 구간을 발견할 수 있다. 또는 조건을 단순화 할 수 있다. 
x = 0;
y = 0;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

/* -------------------- 헷갈리는 연산 모음 */
// nullish 병합 연산자 
// https://ko.javascript.info/nullish-coalescing-operator
// 최신 문법 => 구식 브라우저는 풀리필 (최신 문법을 구식 브라우저에도 사용할 수 있도록 하는 기술)이 필요
// null 인지 아닌지 판단하고 아닌 값을 반환한다. 
let firstName = null;
let lastName = null;
let nickName = "licat";
console.log(firstName ?? lastName ?? nickName >> "익명 사용자");

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100)
console.log(height ?? 100)

let height2;
console.log(height2 || 100)
console.log(height2 ?? 100)

let height3 = '';
console.log(height3 || 'hello')
console.log(height3 ?? 'world')

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined

