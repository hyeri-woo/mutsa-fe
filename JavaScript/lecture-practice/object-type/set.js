// 집합, 합집합, 교집합, 차집합, 여집합
// 실무에서는 많이 사용 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형

let s = new Set("aabbcccddd");  // 중복 제거
s.size                          //  4

names = ["hyeri", "hyeri", "haliey", "haliey", "harriet", "harriet"];

// 몇 명이 게시판에 게시물을 썼나
let num_writer = new Set(names);  // 중복 제거
num_writer.size                   // 3

// 각각 몇 개의 게시물을 작성했나
for(const i of num_writer) {
    console.log(i, names.filter(item => item === i));
}

let map = new Map();
for (const i of names) {
    map.set(i, (map.get(i) || 0)+1);
}

/// set 연습 /// 
let s = new Set('aabbbccccdd')
s.size
s.has('a')
s.has('f')
s.add('z')
s

for (const i of s) {
    console.log(i)
}

let s = new Set('aabbbccccdd'.split(''))
let s = new Set(['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd'])

// 교집합
let a = new Set('abc')
let b = new Set('cde')
let cro = [...a].filter(e => b.has(e))

// 합집합
let union = new Set([...a].concat(...b));
let union = new Set([...a, ...b]);


// 차집합
let dif = [...a].filter(e => !b.has(e));