const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
const modalbg = document.querySelector(".dim");

const firstEl = article.querySelector("a");

openBtn.addEventListener("click", () => {
    article.classList.add("active");
    modalbg.classList.add("active");
    firstEl.focus();
});

closeBtn.addEventListener("click", () => {
    article.classList.remove("active");
    modalbg.classList.remove("active");
});

closeBtn.addEventListener("keydown", (e) => {
    // tab만 눌렀을때 (shift+tab일땐 실행되지 않음)
    if(e.key !== 'Shift' && e.key === 'Tab') {
        console.log("only tab");
        e.preventDefault();
        firstEl.focus();
    } else if(e.shiftKey && e.key === 'Tab') {
        console.log("shift + tab");
    }
});

firstEl.addEventListener("keydown", function(e) {
    // shift+tab 같이 눌렀을 때 실행
    if(e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        closeBtn.focus();
    }
});

modalbg.addEventListener("click", () => {
    if(modalbg.classList.contains("active")) {
        article.classList.remove("active");
        modalbg.classList.remove("active");
    }
})
