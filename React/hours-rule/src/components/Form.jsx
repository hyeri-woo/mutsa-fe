import React, {useState} from 'react'

export default function Form({setData}) {
    const [subject, setSubject] = useState("");
    const [time, setTime] = useState("");
    const resetForm = () => {
        setSubject("");
        setTime("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(subject === "" && time === "") {
            alert("전문가가 되고 싶은 분야와 훈련시간를 작성해주세요!");
        } else if (subject === "") {
            alert("전문가가 되고 싶은 분야를 작성해주세요!");
        } else if (time === "") {
            alert("훈련시간를 작성해주세요!");
        } else {
            setData({subject:subject, time:time});
            resetForm();
        }
    }

    return (
        <section className="section-form">
            <form className="input-wrapper" onSubmit={handleSubmit}>
                <label>
                    나는
                    <input 
                        type="text" 
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                        className="input-subject" 
                        placeholder="예)프로그래밍"
                    />
                    전문가가 될 것이다.
                </label>
                <br/>
                <label>
                    <p>그래서 앞으로 매일 하루에</p>
                    <input 
                        type="number"
                        value={time}
                        onChange={(e)=>setTime(e.target.value)}
                        className="input-time" 
                        placeholder="예)5시간" 
                    />
                    시간씩 훈련할 것이다.
                </label>
                <br/>
                <button className="btn-result" type="submit">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            </form>
        </section>
    )
}
