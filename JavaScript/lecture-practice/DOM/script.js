const center = document.querySelector(".list-item");
const arrPic = [
    "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/jammanbo.png",
    "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/ev.png?raw=true",
    "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/mazayoung.png?raw=true",
    "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/mobugi.png",
    "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/nyaong.png",
    "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/pulin.png",
    "https://raw.githubusercontent.com/nugurejeil/sharingPhoto/main/weirdseed.png"
];

arrPic.forEach(item => {
    const elLi = document.createElement("li");
    elLi.innerHTML = `<img src="${item}" alt="">`
    center.appendChild(elLi);
})


const items = center.querySelectorAll("li");
const angle = 360 / items.length;
let currAngle = 0;
const radius = items[0].offsetWidth * items.length / 3.14 / 2;


items.forEach((item, index) => {
    item.style.transform = `rotateY(${angle*index}deg) translateZ(${radius}px)`;
});

document.addEventListener("click", function(event) {
    // 화면 오른쪽
    if(window.innerWidth / 2 < event.clientX) {
        currAngle += angle;
    // 화면 왼쪽
    } else {
        currAngle -= angle;
    }
    center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
});

