import React from 'react'
import { useState } from 'react';

export default function MyList() {
    const productList = {
        products: [
            {
                title: "개발자 무릎 담요",
                price: 17500,
                id: 101,
            },
            {
                title: "Hack Your Life 개발자 노트북 파우치",
                price: 29000,
                id: 102,
            },
            {
                title: "우당탕탕 라이켓의 실험실 스티커북",
                price: 29000,
                id: 103,
            },
            {
                title: "버그를 Java라 버그잡는 개리씨 키링",
                price: 29000,
                id: 104,
            },
        ],
    };
    const [products, setProduct] = useState(productList.products);
    // React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state 함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리합니다. 
    const deleteHandler = (key) => {
        return function() {
            if(window.confirm("삭제하시겠습니까?")) {
                // 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장한다. 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값 (버츄얼 돔)을 비교하여 처리할 수 있습니다. 
                setProduct((prev) =>
                    prev.filter((item) => item.id !== key)
                )
            }
        }
    }
    return (
        <ul style={{listStyle: "none"}}>
            {products.map((item, index) => {
                return (
                    <li key={item.id}>
                        <h2>{index+1}. {item.title}</h2>
                        <span>{item.price}</span>
                        <button onClick={deleteHandler(item.id)} type="button">삭제</button>
                    </li>
                )
            })}
        </ul>
    )
}
