// apply, call, bind

// call
var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName();            // Peter Parker
peter.sayName.call(bruce);  // Bruce Wayne
// call은 내가 사용할 this를 아규먼트를 this로 설정한다. 

var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사) {
        console.log(this.name + 감탄사);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!'); // Bruce Wayne!
peter.sayName("!");             // Peter Parker!
peter.sayName();                // Peter Pakerundefined

// apply
var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);  // Bruce Wayne is batman or richman

// call과 apply 비교
// apply는 배열로 파라미터를 넘겨줬을 경우 작동

// bind
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}

var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)    // 누가 부르든 this == bruce
}

peter.sayName();    // bruce
bruce.sayName();    // bruce