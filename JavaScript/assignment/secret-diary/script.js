const modal = document.querySelector(".modal-wrapper");
const dateUpdate = document.querySelector(".heart time");
const dt = new Date();
dateUpdate.textContent = `${dt.getFullYear()}.${dt.getMonth()+1}.${dt.getDate()}`; 
dateUpdate.setAttribute("datetime", `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`);

let diaries = JSON.parse(localStorage.getItem("diaries"));
diaries = diaries ?? [];
render();

const btnSave = document.querySelector(".black-btn");
btnSave.addEventListener("click", function (e) {
    console.log("hello");
    save();
})

function save() {
    const title = document.querySelector("#diary-title").value;
    const content = document.querySelector(".diary-textarea").value;
    const dt = new Date();
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = `${dt.getFullYear()}.${dt.getMonth()+1}.${dt.getDate()}.${days[dt.getDay()]}`; 

    diaries.push({title, content, date, len: diaries.length });

    localStorage.setItem("diaries", JSON.stringify(diaries));
    render();
}

function render() {
    const listDiary = document.querySelector(".list-diary");
    listDiary.innerHTML = "";

    diaries.forEach((item, index) => {
        const saveTitle = document.createElement("h3");
        const saveDate = document.createElement("time");
        const saveContent = document.createElement("p");
        const buttonGroup = document.createElement("div");
        const btnEdit = document.createElement("button");
        const btnDelete = document.createElement("button");
        const saveItem = document.createElement("li");
        const saveArticle = document.createElement("article");

        saveTitle.textContent = item.title;
        saveTitle.setAttribute("class", "article-title");

        saveDate.textContent = item.date;
        saveDate.setAttribute("class", "article-time");
        saveDate.setAttribute("datetime", item.date.slice(0, -4).replace(/\./g, "-"));

        saveContent.textContent = item.content;
        saveContent.setAttribute("class", "article-content");

        btnEdit.setAttribute("class", "btn-edit");
        btnEdit.setAttribute("type", "button");
        btnEdit.innerHTML = '<img src="./img/icon-edit.svg" alt="수정 버튼">';

        btnDelete.setAttribute("class", "btn-delete");
        btnDelete.setAttribute("type", "button");
        btnDelete.innerHTML = '<img src="./img/icon-delete.svg" alt="삭제 버튼">';

        buttonGroup.setAttribute("class", "button-group");
        buttonGroup.appendChild(btnEdit);
        buttonGroup.appendChild(btnDelete);

        saveArticle.setAttribute("class", "diary-article");
        saveArticle.appendChild(saveTitle);
        saveArticle.appendChild(saveDate);
        saveArticle.appendChild(saveContent);
        saveArticle.appendChild(buttonGroup);

        saveItem.appendChild(saveArticle);

        btnDelete.addEventListener("click", () => {
            console.log(saveItem, index);
            if(confirm("정말 삭제하시겠습니까?")) {
                saveItem.remove();
                diaries.splice(index, 1);
                localStorage.setItem("diaries", JSON.stringify(diaries));
                render();
            }
        });

        btnEdit.addEventListener("click", () => {
            modal.classList.add("on");
            const changeTitle = modal.querySelector("#diary-title");
            const changeContent = modal.querySelector(".diary-textarea");
            changeTitle.value = item.title;
            changeContent.value = item.content;
            modal.querySelector(".black-btn").addEventListener("click", () => {
                if(confirm("정말 수정하시겠습니까?")) {
                    modal.classList.remove("on");
                    diaries[index].title = changeTitle.value;
                    diaries[index].content = changeContent.value;
                    localStorage.setItem("diaries", JSON.stringify(diaries));
                    render();
                } 
            });
        })
        listDiary.appendChild(saveItem);
    })
}
