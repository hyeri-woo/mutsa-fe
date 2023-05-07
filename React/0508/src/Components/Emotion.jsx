import React, { useState } from 'react';
import './Emotion.css';
import MenuList from '../Mood/MenuList';
import DisplayMood from '../Mood/DisplayMood';

const feelingList = [
    {id: 0, feeling: "좋아요! 😃"},
    {id: 1, feeling: "정말 좋아요! 😄"},
    {id: 2, feeling: "최고에요! 😍"},
    {id: 3, feeling: "미쳤어요! 🤩"},
]


export default function Emotion() {
    const [currentFeeling, setFeeling] = useState(feelingList[0].feeling);
    function Button({id, feeling}) {
        function clickFeeling() {
            setFeeling(feelingList[id].feeling);
        }
        return (
            <button onClick={clickFeeling}>기분이: {feeling}</button>
        )
    }

    function ButtonList() {
        return (
            <ul className="list-feeling">
                {feelingList.map((item) => {
                    return (<>
                        <li><Button id={item.id} feeling={item.feeling}/></li>
                    </>)
                })}
            </ul>
        )
    }

    function DisplayEmotion() {
        return (
            <p className="display-emotion">기분이 {currentFeeling}</p>
        )
    }

    // return (
    //     <div className="feeling-wrapper">
    //         <h1>오늘의 기분을 선택해주세요 😄</h1>
    //         <ButtonList/>
    //         <DisplayEmotion/>
    //     </div>
    // )

    const [currentMood, setCurrentMood] = useState("");

    return (
        <div className="feeling-wrapper">
            <h1>오늘의 기분을 선택해주세요 😄</h1>
            <MenuList mood={currentMood} onItemClick={setCurrentMood}/>
            <DisplayMood mood={currentMood}/>
        </div>
    )
}
