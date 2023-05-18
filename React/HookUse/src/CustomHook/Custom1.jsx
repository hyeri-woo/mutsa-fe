import React, {useState, useEffect} from 'react'

function TestBox() {
    return (
        <div style={{height: 100, width: 100, backgroundColor: "royalblue"}}>
            TestBox
        </div>
    )
}

export default function Custom1() {
    const [mouseLocation, setMouseLocation] = useState({x:0, y:0});

    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            setMouseLocation({x: event.x, y: event.y})
        })
        // return () => {
            
        // }
    }, [])
    console.log(mouseLocation);
    return (
        <div>
            <h1>Custom1</h1>
            <TestBox/>
        </div>
    )
}
