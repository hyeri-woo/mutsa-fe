import React, {useState, useEffect} from 'react'

export default function useScrollBottom(iniVal) {
    const [isBottom, setBottom] = useState(iniVal || false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            const innerHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            setBottom(Math.ceil(scrollTop + innerHeight) >= scrollHeight);
        })
    }, [])
    return isBottom;
}