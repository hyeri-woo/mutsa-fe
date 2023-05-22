// action 생성 함수
export const sale = () => {
    return { type: "SALE" }
}

export const sold = () => {
    return { type: "SOLD_OUT" }
}

// initial value
const initialState = {
    message: "on sale",
}

const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SALE":
            return {
                ...state,
                message: "on sale!"
            }
        case "SOLD_OUT":
            return {
                ...state,
                message: "sold out!"
            }
        default : 
            return state;
    }
}

export default stockReducer;
