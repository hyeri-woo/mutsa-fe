import React from 'react'

export default function Result({onModalClick, data}) {
    const openModal = () => {
        onModalClick(true);
    }
    const timeCalc = (parseInt(data.time) ? Math.ceil(10000/parseInt(data.time)) : "0");
    return (
        <section className="section-result">
            <div className="result-wrapper">
                <p>
                    당신은 
                    <strong className="expert">{data.subject || "00"}</strong> 
                    전문가가 되기 위해서 
                </p>
                <p>
                    대략 
                    <strong className="hours">{timeCalc}</strong>
                    일 이상 훈련하셔야 합니다! :)
                </p>
            </div>
            <div className="btn-wrapper">
                <button className="btn-go" type="button" onClick={openModal}>훈련하러 가기 GO!GO!</button>
                <button className="btn-share" type="button">공유하기</button>
            </div>
        </section>
    )
}
