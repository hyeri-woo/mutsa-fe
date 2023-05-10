import React, {useState} from 'react';
import '../style/Landing.css';
import Form from './Form.jsx';
import Result from './Result.jsx'

function Header() {
    return (
        <header>
                <h1><img src={require("../img/title.png")} alt="1만 시간의 법칙 로고"/></h1>
                <h2>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</h2>
                <p>
                    <strong>1만 시간의 법칙</strong>은 
                    <br/>어떤 분야의 전문가가 되기 위해서는
                    <br/>최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                </p>
        </header>
    )
}

function Main(props) {
    const [data, setData] = useState({});
    return (
        <main>
            <Form 
                setData={setData}
            />
            <Result 
                onModalClick={props.onModalClick} 
                data={data}
            />
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <h2><img src={require("../img/logo.png")} alt="위니브 로고"/></h2>
            <p>
                ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br/>
                수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
        </footer>
    )
}

export default function Landing(props) {
    
    return (
        <>
            <Header/>
            <Main onModalClick={props.onModalClick}/>
            <Footer/>
        </>
    )
}
