const hyeri = {
    name: "우혜리", 
    address: "대구 수성구 수성로 71",
    phoneNum: "010-8983-5034",
    running: function(distance) {
        console.log(`${distance}을 뛰었습니다.`)
    },
    eatYogurt: function(myYogurt) {
        myYogurt.eaten(100);
    }
}

const yogurt = {
    amount: 1000,
    eaten: function (capacity) {
        this.amount -= capacity;
    }
}

hyeri.eatYogurt(yogurt);

function FoodPicker (menu) {
    this.menu = menu;
    this.sayMenu = function() {
        console.log(`오늘의 메뉴는 ${this.arrFood}가 있습니다.`);
    }
    this.randomPick = function() {
        return this.menu[Math.floor(Math.random()*arrFood.length)];
    }
};

const arr = ["스테이크", "치킨", "피자", "짜장면", "짬뽕", "탕수육"];
const food = new FoodPicker(arr);
food.randomPick();

function FoodPick (menu) {
    this.name = menu;
    this.sayMenu = function() {
        console.log(`오늘의 메뉴는 ${this.menu}가 있습니다.`);
    }
    this.randomPick = function() {
        console.log(`오늘은 ${this.menu[Math.floor(Math.random()*this.menu.length)]} 드세요~!`);
    }
};

const food = new FoodPick(arr);
food.menu;
food.sayMenu();
food.randomPick();
food.__proto__ === FoodPick.prototype