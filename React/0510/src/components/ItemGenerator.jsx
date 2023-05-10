import React from 'react'

export default function ItemGenerator(props) {
    
    return (
        <ul>
            {props.data.map((item) => {
                return (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <time>{item.date}</time>
                        <p>{item.food}</p>
                    </li>
                )
            })}
        </ul>
    )
}
