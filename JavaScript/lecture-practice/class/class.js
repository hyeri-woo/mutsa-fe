class FoodPicker {
    constructor(menu) {
        this.menu = menu;
    }
    sayMenu() {
        console.log(`오늘의 메뉴는 ${this.menu}가 있습니다.`);
    }
    randomPick() {
        console.log(`오늘은 ${this.menu[Math.floor(Math.random()*this.menu.length)]} 드세요~!`);
    }
}

const arr = ["스테이크", "치킨", "피자", "짜장면", "짬뽕", "탕수육"];
const food = new FoodPicker(arr);