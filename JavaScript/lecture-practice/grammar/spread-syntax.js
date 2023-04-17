// 전개구문
// 배열의 전개 구문
const 과일들 = ['사과', '파인애플', '수박'];
const 생선들 = ['조기', '갈치', '다금바리'];
const 합치면 = [...과일들, ...생선들];
const 합치면2 = [과일들, 생선들];

console.log(합치면);
console.log(합치면2);

// 객체의 전개 구문
const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브1, ...위니브2 };

console.log(위니브3);


const 위니브임직원1 = {
    개리: '재직중',
    빙키: '재직중',
    라이켓: '재직중',
    뮤라: '재직중',
    해골왕: '재직중'
};

const 위니브임직원2 = {
    ...위니브임직원,
    라이켓: '휴가',
    해골왕: '퇴사'
}

const 위니브임직원3 = {
    ...위니브임직원
}

위니브임직원1


// 구조분해할당
for (const [i, j] of [[1, 2], [3, 4], [5, 6]]) {
    console.log(i, j);
}

const 위니브임직원 = {
    개리: '재직중',
    빙키: '재직중',
    라이켓: '재직중',
    뮤라: '재직중',
    해골왕: '재직중'
};
Object.entries(위니브임직원)

for (const [i, j] of Object.entries(위니브임직원)) {
    console.log(i, j);
}

let [a, b] = [10, 20]
let [one, two, three] = '010-5044-2903'.split('-')
let [one, two, ...three] = '010-5044-2903-123-123'.split('-')

//////////////////////////////

const test1 = [
    [1, 2, [10, 20]],
    [3, 4, [30, 40]],
    [5, 6, [50, 60]]
]
for (const [i, j] of test1) {
    console.log(i, j);
}

const test2 = [
    [1, 2, [10, 20]],
    [3, 4, [30, 40]],
    [5, 6, [50, 60]]
]
for (const [i, j, k] of test2) {
    console.log(i, j, k);
}

const test3 = [
    [1, 2, [10, 20]],
    [3, 4, [30, 40]],
    [5, 6, [50, 60]]
]
// i, j, k, l, m, n
for (const [i, j, [k, l]] of test3) {
    console.log(i, j, k, l);
}

// 이것은 기억해주세요.
const test4 = [
    [1, 2, 10, 20],
    [3, 4, 30, 40],
    [5, 6, 50, 60]
]
for (const [i, j, ...k] of test4) {
    console.log(i, j, k);
}

function hello(a, b, ...c) {
    console.log(a, b, c)
}

hello(1, 2, 3, 4, 5, 6, 7)

Math.max(...[10, 20, 30]);
Math.max(...[10, 20, 30, [11, 12, 13, [30, 40, 50]]].flat(Infinity));

// 자주 사용되는 코드
const s = "hello world";
console.log([...s]);    // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
console.log({...s});    // {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o', 5: ' ', 6: 'w', 7: 'o', 8: 'r', 9: 'l', 10: 'd'}