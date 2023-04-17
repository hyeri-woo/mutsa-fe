const arr = [10, 20, 30];
arr[0] = 100;
console.log(arr)    // [100, 20, 30];
// arr안의 값이 변화된다. arr의 값의 주소가 변화하지 않았지만 안의 값이 변화했다. arr의 값의 주소가 변하면 안될 뿐 그 외는 괜찮다. 

console.dir(arr);   // property와 method를 볼 수 있다. 

// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// 문자로 입력된 값은 .을 찍어서 호출할 수 있다. 
arr[1];
arr.length;
arr["length"];

// property를 추가하는 것도 가능하다. 
// property를 따로 추가해도 length가 늘어나지 않는다. 
arr['add'] = 100;
arr.add = 100;

/* -------------------- 배열의 특징 */
// 1. 배열은 빈 배열로 생성하거나 요소가 포함된 배열로 생성할 수 있다. 
let a = [];
let b = [1, 2, 3];
let c = new Array(4, 5, 6); // 4, 5, 6를 원소로 가진 array
let d = new Array(3);       // 빈 3개의 원소를 가진 array
let e = Array(10).fill(10); // 10의 원소를 10개 가진 array

// 2. 배열은 순서가 있다. 배열의 순서를 index, 이 순서를 호출하는 것을 indexing이라고 한다. 배열 안에 값은 원소 (element)라고 합니다
const arr2 = [10, 20, 30];
arr2[0] = 100;

// 3. 배열 안에 다른 원시타입과 객체타입을 포함할 수 있다. 
const arr3 = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arr6[1]); // [ 4, 5, 6 ]
console.log(arr6[1][2]); // 6

// 💡 0차원, 1차원, 2차원, 3차원, 다차원
const aa = 10; // 스칼라
const bb = [10, 20, 30]; // 벡터
const cc = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]; // 메트릭스
const dd = [
    [
        [1, 2],
        [1, 2],
        [1, 2],
    ],
    [
        [1, 2],
        [1, 2],
        [1, 2],
    ],
    [
        [1, 2],
        [1, 2],
        [1, 2],
    ],
]; // 텐서(3차원 이상의 다차원)


/* -------------------- 배열의 요소 추가 & 제거 */
const arr4 = [1, 2, 3];
arr4.push(4);
console.log(arr4);  // [1, 2, 3, 4]

arr4.unshift(0);    
console.log(arr4);  // [0, 1, 2, 3, 4]

// pop은 마지막 값을 삭제하고 반환한다. 
console.log(arr4.pop()) // 4
console.log(arr4);  // [0, 1, 2, 3]

// shift는 첫번째 값을 삭제하고 반환한다. 
console.log(arr4.shift());  // 0
console.log(arr4);  // [1, 2, 3]


/* -------------------- splice */
// arr.splice(start, deleteCount, items)
// splice를 사용해서 특정 인덱스부터 요소를 추가하기
const arr5 = [1, 2, 3];
arr5.splice(1, 0, 4);   // arr5의 첫번째에 아무것도 삭제하지 않고 4를 넣겠다. 
console.log(arr5)       // [1, 4, 2, 3]
arr5.splice(1, 0, ...[5, 6, 7]);    // arr5의 첫번째에 아무것도 삭제하지 않고 5, 6, 7 추가
console.log(arr5);                  // [1, 5, 6, 7, 4, 2, 3]
arr5.splice(1, 0, 8, 9, 10);         // arr5의 첫번째에 아무것도 삭제하지 않고 8, 9 ,10 추가
console.log(arr5);                  // [1, 8, 9, 10, 5, 6, 7, 4, 2, 3]

// splice를 사용해서 특정 인덱스부터 요소를 삭제하고 추가하기. 
arr5.splice(2, 1, 5);               // arr5의 인덱스 2부터 1개의 요소를 삭제하고 5를 추가
console.log(arr5);                  // [1, 8, 5, 10, 5, 6, 7, 4, 2, 3]

// splice를 사용해서 특정 인덱스부터 요소를 삭제하기
arr5.splice(2, 2);                  // arr5의 인덱스 2부터 2개의 요소를 삭제하기
console.log(arr5);                  // [1, 8, 5, 6, 7, 4, 2, 3]
arr5.splice(2);                     // arr5의 0부터 2개의 요소를 삭제하기
console.log(arr5);                  // [5, 6, 7, 4, 2, 3]


/* -------------------- slice */
// arr.slice(start, end)
const arr6 = [1, 2, 3, 4, 5];
console.log(arr6.slice(1, 3));      // arr6의 인덱스 1부터 2까지의 요소를 반환한다. 
console.log(arr6.slice(1));         // arr6의 인덱스 1부터 끝까지의 요소를 반환한다. 


/* -------------------- includes */
const arr11 = ["1", "2", "3", "4", "5"];
console.log(arr11.includes(1));         // false
console.log(arr11.includes("1"));       // true
console.log(arr11.includes("6"));       // false


/* -------------------- join */
console.log(arr11.join("!"));           // 1!2!3!4!5
const arr12 = [010, 5044, 2903];
console.log(arr12.join("-"));           // 8-5044-2903 (이진법 주의!)



/* --------------------  실무 팁 */
let tip1 = [1, 2, 3, 4, 5];
// 원본 수정없이 마지막 요소를 가져올 때
console.log(tip1[tip1.length-1]);
console.log([...tip1].pop());

// 한 가지 원소로 배열을 채워넣고 싶을 때
tip2 = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// 두 개의 배열을 하나로 합치고 중간의 값을 넣고 싶을 때
let tip3 = [1, 2, 3];
let tip4 = [5, 6, 7];
console.log([...tip3, 4, ...tip4]); // [1, 2, 3, 4, 5, 6, 7]

// 다차원 배열에서 최솟값, 최댓값 찾기
// flat을 사용하면 한 차원만 벗겨진다. 
const tip5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(Math.max(...tip5.flat())); // 9

const tip6 = [
    [[1, 2], [1, 2]],
    [[1, 2], [1, 2]]
]

console.log(tip6.flat())    // [[1,2], [1,2], [1,2], [1,2]
tip6.flat(1)                // [[1,2], [1,2], [1,2], [1,2]
tip6.flat(2)                // [1, 2, 1, 2, 1, 2, 1, 2]
tip6.flat(Infinity) // 다 펼쳐지면 스톱

const tip7 = Array.from("hello"); 
console.log(tip7);          //['h', 'e', 'l', 'l', 'o']

const tip8 = '.'.repeat(5).split('.');
console.log(tip8);          // ['', '', '', '', '', '']

const tip9 = [
    {
        "_id": "642ba3980785cecff3f39a8d",
        "index": 0,
        "age": 28,
        "eyeColor": "green",
        "name": "Annette Middleton",
        "gender": "female",
        "company": "KINETICA"
    },
    {
        "_id": "642ba398d0fed6e17f2f50c9",
        "index": 1,
        "age": 37,
        "eyeColor": "green",
        "name": "Kidd Roman",
        "gender": "male",
        "company": "AUSTECH"
    },
    {
        "_id": "642ba39827d809511d00dd8d",
        "index": 2,
        "age": 39,
        "eyeColor": "brown",
        "name": "Best Ratliff",
        "gender": "male",
        "company": "PRISMATIC"
    }
]
const ages1 = tip9.map((item) => item.age);
const ages2 = tip9.map((item) => {
    return item.age
});
console.log(tip9.reduce((a, b) => a + b.age, 0)/tip9.length);   // average of age