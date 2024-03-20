import { createStore } from "redux"

const initialState = {
    products: [],
    card: {},
    city: "",
    authorization: "",
}

const shopReducer=(state = initialState , action)=>{
if(action.type === "GET_PRODUCTS"){
    return {...state, products : action.products}
} else{
    return state
}
}


export const Store = createStore(shopReducer)