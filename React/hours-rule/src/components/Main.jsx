import React from 'react';
import { useState } from 'react';

function Form({subject, time, setSubject, setTime}) {
    const handleForm = (e) => {
        e.preventDefault();
        if(subject === "" && time === 0) {
            alert("전문가가 되고 싶은 분야와 훈련시간를 작성해주세요!");
        } else if (subject === "") {
            alert("전문가가 되고 싶은 분야를 작성해주세요!");
        } else if (time === 0) {
            alert("훈련시간를 작성해주세요!");
        } 
        console.log(e.target);
        setSubject(e.target.inputSubject);
        setTime(e.target.inputTime);
    }

    return (
        <section className="section-form">
            <form onSubmit={handleForm} className="input-wrapper">
                <label>
                    나는
                    <input 
                        id="inputSubject" 
                        className="input-subject" 
                        type="text" 
                        placeholder="예)프로그래밍"
                    />
                    전문가가 될 것이다.
                </label>
                <br/>
                <label>
                    그래서 앞으로 매일 하루에 
                    <input 
                        id="inputTime" 
                        className="input-time" 
                        placeholder="예)5시간" 
                        type="number"
                    />
                    시간씩 훈련할 것이다.
                </label>
                <button className="btn-result" type="submit">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            </form>
        </section>
    )
}

function Result({onModalClick, subject, time}) {
    const openModal = () => {
        onModalClick(true);
    }
    const timeCalc = (parseInt(time) ? Math.ceil(10000/parseInt(time)) : "0");
    return (
        <section className="section-result">
            <h3>
                당신은 <strong className="expert">{subject || "00"}</strong> 전문가가 되기 위해서 대략 <strong className="hours">{timeCalc}</strong>일 이상 훈련하셔야 합니다! :)
            </h3>
            <div className="btn-wrapper">
                <button className="btn-go" type="button" onClick={openModal}>훈련하러 가기 GO!GO!</button>
                <button className="btn-share" type="button">공유하기</button>
            </div>
        </section>
    )
}

export default function Main(props) {
    // const [submit, handleSubmit] = useForm();
    const [subject, setSubject] = useState("");
    const [time, setTime] = useState(0);
    return (
        <main>
            <Form 
                subject={subject} 
                time={time} 
                setSubject={setSubject} 
                setTime={setTime}
                // submit={submit}
                // handleSubmit={handleSubmit}
            />
            <Result 
                onModalClick={props.onModalClick} 
                subject={subject} 
                time={time}
            />
        </main>
    )
}
