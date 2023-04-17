const person = {
    name: "hyeri",
    age: 25,
    from: "daegu",
    askingHim: function(){
        console.log("hello world!");
    },
    0: "hey"
};

console.log(person.name);       // hyeri
console.log(person.age);        // 25
console.log(person["name"]);    // hyeri
console.log(person["age"]);     // 25

console.log(person[0])      // hey
console.log(person["0"])    // hey
// console.log(person.0)    // error


// 유사배열객체, 배열은 아니다. 
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠르다. 
const arr = {
    0: 10,
    1: 20, 
    2: 30,
    length: 3
};

console.log(arr[0]);        // 10
console.log(arr[1]);        // 20
console.log(arr[2]);        // 30
console.log(arr.length);    // length

person.name = "rihye";
console.log(person.name);       // rihye
person.askingHim();             // hello world!

console.log("age" in person);   // true
// in 연산자가 키값만 순회하기 때문에 value값은 순회하지 않는다. 
console.log(20 in [10, 20]);    // false


const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function(){
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};

console.log(aespa.hasOwnProperty('sing'));  // true
console.log(aespa.hasOwnProperty('itzy'));  // false

// 다른 언어에 비해 불편한 코드이다. 
console.log(Object.keys(aespa));    // ['members', 'from', 'sing']
console.log(Object.values(aespa));    // [Array(4), '광야', ƒ]