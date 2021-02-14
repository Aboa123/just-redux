import { createStore,combineReducers } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import { v4 } from 'uuid'

const addTodoA = createAction("ADD");
const delTodoA = createAction("DEL");

const addTodoB = createAction("ADD");
const delTodoB = createAction("DEL");

const toDoA = createReducer([],{
    [addTodoA]: (state = { toDoA: [] }, action) => {
        state.push({ text: action.payload, id: v4() })
    },
    [delTodoA]: (state, action) => state.filter(item => item.id !== action.payload)
});

const toDoB = createReducer([],{
    [addTodoB]: (state = { toDoB: [] }, action) => {
        state.push({ text: action.payload, id: v4() })
    },
    [delTodoB]: (state, action) => state.filter(item => item.id !== action.payload)
});

const reducer = combineReducers({
    toDoA,
    toDoB
})
const store = configureStore({ reducer });

export const actionCreator = {
    addTodoA,
    delTodoA,
    addTodoB,
    delTodoB,
}

export default store;