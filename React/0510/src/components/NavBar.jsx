import React, { useState } from 'react'

const Detail = () => {
    return (
        <>
            <p>detail</p>
        </>
    )
}

const Question = () => {
    return (
        <>
            <p>question</p>
        </>
    )
}

const Review = () => {
    return (
        <>
            <p>review</p>
        </>
    )
}

const ContentContainer = ({listName}) => {
    if(listName === "detail") {
        return <Detail/>
    } else if (listName === "question") {
        return <Question />
    } else if (listName === "review") {
        return <Review/>
    }
}

export default function NavBar() {
    const textStyle = (name) => {
        return listName === name ? {color:"red"} : {color:"black"};
    }
    const [listName, setListName] = useState("detail");
    const checkId = (e) => {
        setListName(e.target.id);
    }
    return (
        <>
            <nav>
                <ul>
                    <li id="detail" 
                    style={textStyle("detail")}
                    onClick={checkId}
                    >상세정보</li>
                    <li id="question" 
                    style={textStyle("question")}
                    onClick={checkId}
                    >Q&A</li>
                    <li id="review" 
                    style={textStyle("review")}
                    onClick={checkId}
                    >리뷰</li>
                </ul>
            </nav>
            <ContentContainer listName={listName}/>
        </>
    )
}
