import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid'

// use reducer
// const addTodoA = createAction("ADD_A");
// const delTodoA = createAction("DEL_A");

// const addTodoB = createAction("ADD_B");
// const delTodoB = createAction("DEL_B");

// const toDoA = createReducer([],{
//     [addTodoA]: (state = { toDoA: [] }, action) => {
//         state.push({ text: action.payload, id: v4() })
//     },
//     [delTodoA]: (state, action) => state.filter(item => item.id !== action.payload)
// });

// const toDoB = createReducer([],{
//     [addTodoB]: (state = { toDoB: [] }, action) => {
//         state.push({ text: action.payload, id: v4() })
//     },
//     [delTodoB]: (state, action) => state.filter(item => item.id !== action.payload)
// });

const toDos = createSlice({
    name: "toDosReducer",
    initialState: {
        toDoA:[],
        toDoB:[]
    },
    reducers: {
        addA: (state, action) => {
            state.toDoA.push({ text: action.payload, id: v4() })
        },
        delA: (state, action) => {
            return state = {
                ...state,
                toDoA: state.toDoA.filter(item => item.id !== action.payload)
            }
        },
        addB: (state, action) => {
            state.toDoB.push({ text: action.payload, id: v4() })
        },
        delB: (state, action) =>  {
            return state = {
                ...state,
                toDoB: state.toDoB.filter(item => item.id !== action.payload)
            }
        }
    }
});

// why use configure store not a createStore
// the reason is just for use debug on chrome tab (on F12 dev tool)
const store = configureStore({ reducer: toDos.reducer });

export const {
    addA,
    delA,
    addB,
    delB,
} = toDos.actions;

export default store;