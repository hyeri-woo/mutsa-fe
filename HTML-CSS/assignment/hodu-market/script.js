// modal controller
const targetModal = document.querySelector(".modal-wrapper");
document.querySelector('.form-subscribe').addEventListener('submit', (e) => {
    e.preventDefault()
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.querySelector(".input-email").value = null;
    toggleModal();
});
document.querySelector('.article-modal .btn-close').addEventListener('click', (e) => {
    toggleModal();
});
function toggleModal() {
    targetModal.classList.toggle('on');
}

// mobile ver. navigation controller
const targetNav = document.querySelector(".nav-wrapper-mobile");
document.querySelector(".nav-wrapper .btn-nav").addEventListener("click", 
(e) => {
    toggleNav();
});
document.querySelector(".article-nav .btn-close").addEventListener("click", 
(e) => {
    toggleNav();
});
function toggleNav() {
    targetNav.classList.toggle("on");
}

// download button
const downloadBtn = document.querySelectorAll(".btn-download");
for(let i=0; i<downloadBtn.length; i++) {
    downloadBtn[i].addEventListener("click", (e) => {
        alert("Nothing to download! Sorry!");
    });
}

// learnMore butotn
document.querySelector(".btn-learnMore").addEventListener('click', (e) => {
    alert("More Hodu will be updated soon!");
});


// scroll top button 
document.querySelector(".btn-scroll").addEventListener('click', (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});