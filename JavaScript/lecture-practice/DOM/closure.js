function PersonGenrator() {
    let age = 25;

    function InnerPersonType() { };

    InnerPersonType.prototype.getAge = function () {
        return age;
    }

    return InnerPersonType;
}

const Person = PersonGenrator();
const myPerson = new Person();

const PersonGenerator2 = (function () {
    let age = 25;

    function InnerPersonType() { };

    InnerPersonType.prototype.getAge = function () {
        return age;
    }

    return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();