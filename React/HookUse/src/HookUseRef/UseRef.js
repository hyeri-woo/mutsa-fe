import React, { useState, useEffect, useRef } from "react";

function UseRef() {
    const [num2, setNum2] = useState(0);
    const num = useRef(0);

    return (
        <>
        <button onClick={() => setNum2(num2 + 1)}>버튼</button>
        <div>{num2}</div>
        <button
            onClick={() => {
            num.current += 1;
            console.log(num.current);
            }}>
            버튼
        </button>
        <div>{num.current}</div>
        </>
    );
}

export default UseRef;