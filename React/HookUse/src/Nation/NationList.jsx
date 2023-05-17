import React, {useState, useEffect} from 'react'
import styled from "styled-components"

const Item = styled.div`
    margin: 60px auto;

    ul{
        padding: 10px;
    }

    li{
        margin: 20px 0;
        padding: 10px;
        border: 1px solid black;
        box-sizing: border-box;
        border-radius: 10px;
        list-style: none;
        box-shadow: 4px 4px 6px rgba(0,0,0,0.1);
    }

`

export default function NationList() {
    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/nations");
    useEffect( () => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error("문제");
                }
                const json = await response.json();
                setNations(json);
            } catch(error) {
                console.error(error);
            }
        }
        getData();
    }, [url])
    
    console.log(nations);
    return (
        <Item>
            <h2>나라 목록</h2>
            <ul>
                {nations.map((nation) => {
                    return <li key={nation.id}>
                        <h3>나라 이름 : {nation.title}</h3>
                        <p>인구 수 : {nation.population}</p>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={() => { setUrl("http://localhost:3000/nations?loc=europe") }}>유럽 목록</button>
                <button onClick={() => { setUrl("http://localhost:3000/nations") }}>전체 목록</button>
            </div>
        </Item>
    )
}
