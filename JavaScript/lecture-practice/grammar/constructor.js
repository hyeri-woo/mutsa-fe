let book = {
    title: "JavaScript",
    price: 1000,
    author: "Jason",
    date: "2023.04.12"
}

let newBook = {};
newBook["title"] = "JavaScript";
newBook["price"] = 100000;
newBook["authoer"] = "Jason";
newBook["date"] = "2023.04.12";

function Book(title, price, author, date) {
    this.title = title;
    this.price = price;
    this.author = author;
    this.date = date;
}

let newBook2 = Book(title, price, author, date);    // undefined = return 값 없다
let newBook3 = new Book(title, price, author, date); 
// new 키워드를 사용했을때 일어나는 일 => this를 return 한다

// this 출력
let newBook4 = new Book("JavaScript", 100000, "Jason", "2023.04.12");

// new 키워드를 사용했을 때 일어나는 일
function Book(title, price, author, date) {
    this.print = function (){
        console.log(this);
    }
    this.title = title;
    this.price = price;
    this.author = author;
    this.date = date;
}