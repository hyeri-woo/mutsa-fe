// 유저가 등록되었는지 확인
searchUser(userName, password, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            const result = JSON.parse(xhr.responseText).user.find((item) => {
                return item.userName === userName && item.password === password
            });

            if (result) {
                onSuccess(userName);
            } else {
                onError(new Error('user not found'));
            }
        }
    }

    xhr.send();
}

const userStorage = new UserStorage();

const userName = prompt('이름을 입력하세요');
const password = prompt('비밀번호를 입력하세요');

userStorage.searchUser(
    userName,
    password,
    (name) => {
        userStorage.sayHi(
            name,
            (result) => {
                alert(`당신에게 인사합니다! ${result.name}님 ${result.greetings}`);
            },
            (error) => {
                console.log(error);
            }
        )
    },
    (error) => {
        console.log(error);
    }
);