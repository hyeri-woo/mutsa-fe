let value;  // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(value2); // null

let score = [10, 20, 30, null, 40, 50];
let avg = 0;
for(const i of score) {
    avg += i;
}
console.log(avg/score.length)