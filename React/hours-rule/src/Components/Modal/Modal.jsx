import React from 'react';
import './Modal.css';

export default function Modal({closeModal}) {
    
    return (
        <div className="modal-backdrop">
            <article className="modal">
                <h3>화이팅!!♥♥♥</h3>
                <p>당신의 꿈을 응원합니다!</p>
                <img src={require("../../img/licat.png")} alt="라이캣"/>
                <button onClick={closeModal}>
                    <span>종료하고 진짜 </span>
                    <span>훈련하러 가기 GO!GO!</span>
                </button>
            </article>
        </div>
    )
}
