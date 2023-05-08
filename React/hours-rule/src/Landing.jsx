import React from 'react'
import { Fragment } from 'react';
import './Landing.css';

function Header() {
    return (
        <header>
                <h1><img src={require("./img/title.png")} alt="1만 시간의 법칙 로고"/></h1>
                <h2>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</h2>
                <p>
                    <strong>1만 시간의 법칙</strong>은 
                    <br/>어떤 분야의 전문가가 되기 위해서는
                    <br/>최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                </p>
        </header>
    )
}

function Main() {
    function Form() {
        return (
            <section class="section-form">
                <div class="input-wrapper">
                    <p>나는 전문가가 될 것이다.</p>
                    <p>그래서 앞으로 매일 하루에 시간씩 훈련할 것이다.</p>
                    <input placeholder="예)프로그래밍"></input>
                    <input placeholder="예)5시간"></input>
                </div>
                <button class="btn-result" type="button">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            </section>
        )
    }

    function Result() {
        return (
            <section class="section-result">
                <h3>
                    당신은 <strong class="expert">프로그래밍</strong> 전문가가 되기 위해서<br/>대략 <strong class="hours">5110</strong>일 이상 훈련하셔야 합니다! :)
                </h3>
                <div class="btn-wrapper">
                    <button class="btn-go" type="button">훈련하러 가기 GO!GO!</button>
                    <button class="btn-share" type="button">공유하기</button>
                </div>
            </section>
        )
    }
    return (
        <main>
            <Form/>
            <Result/>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <h2><img src={require("./img/logo.png")} alt="위니브 로고"/></h2>
            <p>
                ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br/>
                수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
        </footer>
    )
}

export default function Landing() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}
