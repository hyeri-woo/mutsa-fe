import React from 'react'

export default function MenuListItem(props) {
    const onItemClick = () => {
        props.onClickEvent(props.mood);
    }
    return (
        <li>
            <button className={props.isSelected?"active":""} onClick={onItemClick}>기분이 : {props.mood}</button>
        </li>
    )
}
