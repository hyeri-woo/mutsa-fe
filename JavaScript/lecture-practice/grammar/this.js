// this (***)

/* 자신을 호출한 객체 */
function a() {
    console.log(this);  // window를 호출
}

function b() {
    console.log("hello world");
}
b();
window.b(); // window를 호출

let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
        // this가 누구인지 모르겠으면 console.log 해보자
    }
}

myObj.func1();  // myObj를 호출
let test = myObj.func1; 
test();         // window를 호출
// this를 포함하고 있는 객체가 있는 위치에 따라서 this의 의미가 달라진다. 

const aa = 123

const bb = {
    aa: 456,
    cc: function() {
        console.log(aa)         // 123
        console.log(this.aa)    // 456
    }
}

bb.cc()

function sayName(){
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = { // var b = {c}
    'c': c
}

var a = { // var a = {b}
    'b': b
}

// 문제를 조금 더 꼬아보겠습니다.
function sayName(){
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = { // var b = {c}
    'c': c,
    'say': sayName
}

var a = { // var a = {b}
    'b': b,
    'say': sayName
}

const button = document.querySelector("button");
button.addEventListener("click", myObj.func1);
// button은 myObj의 func1이 가르키고 있는 값의 주소를 가르킨다. 

/////////////////////////////////
/* 자신이 호출한 객체 */


// 문제 1) 전역 범위에서의 this
console.log(this)

function 함수(){
    console.log(this)
}
함수();

// 전역범위에서의 this
// 1. 일반 함수 범위에서 호출
function outside() {
    console.log(this); 

    // 2. 함수 안에 함수 내부에서 호출
    function inside() {
        console.log(this);
    }
    inside();
}
outside();
// 결과는 어떻게 나올까?

//  object 내부의 함수(메소드) 안에서의 this
const 오브젝트 = {
    name: 'Lee',
    함수 : function(){ console.log(this)}
}
오브젝트.함수() // 결과는 어떻게 나올까??

// 오브젝트 내부의 오브젝트 메소드로 this를 찍어보면?
const 오브젝트2 = {
    name : 'Kim',
data: {
    함수 : function() { console.log(this)}
}
}
오브젝트2.data.함수()
console.log(오브젝트2.data)

// function() 대신에 arrow function을 쓴다면?
const 오브젝트 ={
    name: 'Kim',
    data : {
        함수 : () => { console.log(this) }
    }
}
오브젝트.data.함수()

// constructor(생성자) 내부의 this
function 생성자(){
    this.이름 = 'Kim'
    this.성별 = '남'
}
const 오브젝트 = new 생성자()

// 이벤트리스너 내부 콜백함수에서의 this
// <button id='버튼'>버튼</button>
document.getElementById('버튼').addEventListener('click',function(e){
    console.log(this)
    console.log(e.currentTarget)
})

// 벤트리스너 안에서 콜백함수를 쓴다면 this는?
document.getElementById('버튼').addEventListener('click', function (e) {
    let arr = [1, 2, 3]
    arr.forEach(function () {
        console.log(this)
    })
})

//  오브젝트 내부 콜백함수에서의 this
var 오브젝트 = {
    이름: ['김', '이', '박'],
    함수: function () {
        console.log(this)
        오브젝트.이름.forEach(function () { console.log(this) })
    }
}
오브젝트.함수() // 어떤 결과가 나올까?

// arrow function 안에서의 this
const 오브젝트 = {
    이름: ['김', '이', '박'],
    함수: function () {
        console.log(this)
        오브젝트.이름.forEach(()=> { console.log(this) })
    }
}
오브젝트.함수()

// this 예제

var name = "hyeri";

function sayName() {
    console.log(this.name);
}

sayName();  // hyeri 

let peter = {
    name: "Peter Parker",
    say: sayName
}

let bruce = {
    name: "Bruce Wayne",
    say: sayName
}

peter.say();    // Peter Parker
bruce.say();    // Bruce Wayne


function attackBeam() {
    this.hp -= 20;
}

function attackKnife() {
    this.hp -= 5;
}

let zombie ={
    name: "zombie",
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 10000, 
    power: 2
}

let thanos ={
    name: "thanos",
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

zombie.damaged[0]();
zombie.damaged[1]();
zombie;     // hp = 9980


let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

/// 

function a() {
    console.log(this)
    function b() {
        console.log(this)
        function c() {
            console.log(this)
        }
        c() // window
    }
    b()  // window
} 
a()  // window

// a, b, c모두 window
// 위 함수는 a.b.c()이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다.