const x = 10;
const y = 20;
console.log("x 값은 10이고 y 값은 20이고 두 개를 곱한 값은 200입니다.");
console.log("x 값은 ", x, "이고 y 값은 ", y, "이고 두 개를 곱한 값은 ", x*y, "입니다.");
console.log("x 값은 ${x}이고 y 값은 ${y}이고 두 개를 곱한 값은 ${x*y}입니다.");  // template literal 중괄호 안에 연산을 넣는 것은 권장하지 않는다. 

const x2 = 10;
const y2 = 20;
const result = x2*y2;
console.log("x2 값은 ${x2}이고 y2 값은 ${y2}이고 두 개를 곱한 값은 ${result}입니다.");  


// 중간에 개행문자를 넣기 위해 ` 사용 가능
console.log(`h
e
l
l
o
`);

const s = "hello";
const ss = "world";
const result2 = s + "\n" + ss;

// 단점을 굳이 뽑자면 가독성이 떨어진다. 
if(true) {
    if(true) {
        if(true) {
            console.log(`h
            e
            l
            l
            o
            `);
        }
    }
}

// h
//             e
//             l
//             l
//             o