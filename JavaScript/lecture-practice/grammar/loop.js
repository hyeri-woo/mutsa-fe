const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

const text = "";

for(let i=0; i<cars.length; i++) {
    document.write("<h2>" + cars[i] + "<br> </h2>");
}

for(let i=0; i<5; i++) {
    console.log(i); // 0 1 2 3 4
}

for(let i=0; i<5; ++i) {
    console.log(i); // 0 1 2 3 4 
}

for(let i=0; i<5; i+=2) {
    console.log(i); // 0 2 4
}

for(i=0; i<5; i++) {    // let을 생략하면 i가 전역으로 생성
    console.log(i)
}

// 무한반복: 의도한 무한반복은 매우 위험하다. 
// 무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체의 영향이 간다. 
// 1. 반복의 시간을 가능하면 정해주세요. 
// 2. 타출 조건을 명확히 해주세요
for(;;) {            
    console.log("실행하지 마세요");
}

// 무한반복 활용방법
let answer = Math.floor(Math.random() * 100)
// ~~(Math.random()*100)
let count = 0

for (;;) {
    count += 1
    let userInput = parseInt(window.prompt('값을 입력해주세요!'))
    if (answer > userInput) {
        window.alert('UP!')
    }
    else if (answer < userInput) {
        window.alert('DOWN!')
    }
    else if (Number.isNaN(userInput)) {
        window.alert('다시 입력하세요!')
    }
    else {
        window.alert('Correct!')
        break
    }
}

console.log(`${count}번째 맞추셨습니다!`);


// airbnb 컨벤션에 권장
// IE에서도 사용 가능
let arr = [10, 20, 30, 40, 50];
let obj = {"one": 10, "two": 20};
for(const i in arr) {
    console.log(arr[i]);
}

for(const i in obj) {
    console.log(obj[i]);
}

// airbnb 컨벤션에 권장
// IE에서도 사용 불가
// of 뒤에 iterable한 값이 나와야 합니다
for(const item of arr) {
    console.log(item);
}

// obj는 iterable 하지 않기에 에러가 난다. 
// for(const item of obj) {    
//     console.log(item);
// }

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i], s[i+1]) // 마지막 값을 확인해보세요.
    console.log(s[i+1] - s[i]) 
}

for (let i = 0; i < s.length-1; i++) {
    console.log(s[i], s[i+1]) // 마지막 값을 확인해보세요.
    console.log(s[i+1] - s[i])
}

for (let i = 1; i < s.length; i++) {
    console.log(s[i-1], s[i]) // 마지막 값을 확인해보세요.
    console.log(s[i] - s[i-1]) 
}

// 위보다 깔끔한 코드가 나오지 않는다
for(const i in s) {
    console.log(parseInt(i));
    console.log(s[i], s[parseInt(i) + 1]);
}

// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
    console.log(10);
} // error

{
    const x = 10
    console.log(x)
}
console.log(x)

for (const i in [1, 2, 3]) {
    console.log(i)
}

for (const i of [1, 2, 3]) {
    console.log(i)
}

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        // "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]

let avg = user.reduce((a, b) => a + b.age, 0)/user.length;

let sum = 0;
for(const i in user) {
    sum += (user[i].age || 0);
}
console.log(sum/user.length);


let x = 0
while (x < 10) {
    console.log('start')
    console.log(x)
    x += 1
    console.log('end')
}


let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

let i = 2;
let j = 1;
while(i < 10) {
    while(j < 10) {
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    i++;
}

// label은 특정한 곳으로 '점프'하게 만듭니다. 가독성을 해칩니다.
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            break outer;
        }
        console.log(i, j);
    }
}

hojun: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            break hojun;
        }
        console.log(i, j);
    }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
hojun: for (let i = 2; i < 3; i++) {
        for (let j = 1; j < 3; j++) {
            if (j === 3) {
                break hojun;
            }
            console.log(`${반복}. ${i} X ${j} = ${i * j}`)
        }
    }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
    hojun: for (let i = 2; i < 10; i++) {
                for (let j = 1; j < 10; j++) {
                    if (j === 3) {
                        break hojun;
                    }
                    console.log(`${반복}. ${i} X ${j} = ${i * j}`)
                }
            }
}

hojun: for (let 반복 = 0; 반복 < 3; 반복++) {
            for (let i = 2; i < 10; i++) {
                for (let j = 1; j < 10; j++) {
                    if (j === 3) {
                        break hojun;
                    }
                    console.log(`${반복}. ${i} X ${j} = ${i * j}`)
                }
            }
}