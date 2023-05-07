import React from 'react';
import MenuListItem from './MenuListItem';

export default function MenuList(props) {
    const menus = [
        {id: 0, feeling: "좋아요! 😃"},
        {id: 1, feeling: "정말 좋아요! 😄"},
        {id: 2, feeling: "최고에요! 😍"},
        {id: 3, feeling: "미쳤어요! 🤩"},
    ];
    return (
        <ul className="list-feeling">
            {menus.map(item => {
                // mood : 기분의 텍스트
                // isSelected : 현재 사용자의 기분이 맞는지 전달 
                // onClick : 현재 기분을 변경하는 함수 
                return <MenuListItem mood={item.feeling} isSelected={props.mood === item.feeling} onClickEvent={props.onItemClick}/>
            })}
        </ul>
    )
}
