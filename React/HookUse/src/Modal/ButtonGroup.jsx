import React from 'react'
import styled, {css} from "styled-components";

const Common = css`
    border: none;
    box-shadow: 0px 0px 3px black;
    font-weight: bold;
`;

const Button1 = styled.button`
    background-color: royalblue;
    padding: 10px;
    color: white;
    margin: 10px;
`;

const Button2 = styled(Button1)`
    ${Common}
    border-radius: 10px;
    color: black;
`;

const Button3 = styled(Button1)`
    ${Common}
    border-radius: 15px;
    background-color: lightgreen;
`;

export default function ButtonGroup() {
    return (
        <>
            <Button1>버튼1</Button1>
            <Button2>버튼2</Button2>
            <Button3>버튼3</Button3>
        </>
    )
}
