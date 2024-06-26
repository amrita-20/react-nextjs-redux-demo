import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import data from "./pages/API/data.json";
import { act } from "react";

//initial state
const startState = {
    cards : []
}
//action

export const initialCards = () => {
    return  {
        type: 'INITIALCARDS',
        cards: data
    }
}

export const addItem = (item) => {
    return {
        type: "ADD",
        item
    }
}

//reducer

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards
            }
        case 'ADD':
            return {
                ...state,
                cards: [state.cards, action.item]
            }
        default: 
            return state
    }
}

const store = (initialState = startState) => {
    return createStore(reducer, initialState);
}

export const initStore = createWrapper(store);