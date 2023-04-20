class Sausage {
    constructor(ingredients) {
        this.ingredients = ingredients;
    }

    taste() {
        console.log(`${this.ingredients.join("와 ")} 맛이 난다!`);
    }
}

class FiresSausage extends Sausage {
    constructor(ingredients) {
        super(ingredients);
    }

    taste() {
        console.log(`${this.ingredients.join("와 ")}와 불 맛이 난다!`);
    }
}

const s1 = new Sausage(["파", "소고기"]);
s1.taste();

const s2 = new FiresSausage(["파", "소고기"]);
s2.taste();

