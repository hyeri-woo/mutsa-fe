/* -------------------- forEach */
// arr.forEach(함수)
// 함수(callbackfn): (value: number, index: number, array: number[])
const arr7 = [1, 2, 3, 4, 5];
arr7.forEach(function(item) {
    console.log(item);              // 1 2 3 4 5
});
arr7.forEach((item, idx) => {
    console.log(item, idx);              // 1 0, 2 1, 3 2, 4 3, 5 4
});
arr7.forEach((item, idx, arr7) => console.log(item, idx, arr7));

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다.

/* -------------------- map */
// 면접 단골 질문: map은 데이터를 뽑을려고 많이 사용한다. 
// map은 forEach와 다르게 새로운 배열을 생성한다. 
const arr8 = [1, 2, 3];
arr8.map(function(x) {
    return x ** 2;
});
console.log(arr8);          // [1, 4, 9]
console.log(Array(5).fill(0).map((item, idx) => idx)); // [0, 1, 2, 3, 4]


/* -------------------- filter */
// Array.filter((item, index, arr) => function)
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 짝수만 필터
console.log(arr9.filter((item) => item%2 === 0));   // [2, 4, 6, 8, 10]
// 홀수만 필터
console.log(arr9.filter((item) => item%2 !== 0));   // [1, 3, 5, 7, 9]
// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v));


/* -------------------- reduce */
// Array.reduce((accumulator, currentValue) => function, initialValue)
// initialValue를 넣지 않을 시 오류가 날 수 있다. 
const arr10 = [1, 2, 3, 4, 5];
arr10.reduce((a, c) => a + c, 0);   // 15


/* -------------------- sort */
// https://paullabworkspace.notion.site/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd
// sort를 어떤 알고리즘을 할 것인지는 브라우저의 자유이다. 
const nums = [3, 1, 8, 6];
console.log(nums.sort());        // [1, 3, 6, 8]
nums.push(11);
// 숫자의 경우 제대로 정렬되지 않을 수도 있다. 
console.log(nums.sort());        // [1, 11, 3, 6, 8]
console.log(nums.sort((a, b) => a - b));    // 오름차순 [1, 3, 6, 8, 11]
console.log(nums.sort((a, b) => b - a));    // 내림차순 [11, 8, 6, 3, 1]

// 실무사용코드
function sort(key){
    if (click){
        click = false
        var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
    }
    else{
        click = true
        var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
    }
}

