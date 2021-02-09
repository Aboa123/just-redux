import { createStore } from 'redux';

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const num = document.querySelector("#num");

// num.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModify = (count = 0, action) => {
//     switch(action.type)
//     {
//         case ADD:
//             return count + 1;
//         case MINUS:
//             return count - 1;
//         default:
//             return count;
//     }
// }
// const countStore = createStore(countModify);

// const onChange = () => {
//     num.innerText = countStore.getState();
// }

// countStore.subscribe(onChange);

// const handleAdd = () => {
//     countStore.dispatch({type:ADD})
// }

// const handleMinus = () => {
//     countStore.dispatch({type:MINUS})
// }

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DEL = "DEL"

const addTodo = (text) => {
    return { type: ADD, text };
}

const delTodo = (id) => {
    return { type: DEL, id }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DEL:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

const dispatchAddTodo = (text) => {
    store.dispatch(addTodo(text))
}

const dispatchDeleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(delTodo(id));
}

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddTodo(toDo);
}

const paintTodos = () => {
    const toDos = store.getState();
    // ul 초기화
    ul.innerHTML = "";
    toDos.forEach(todo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        li.id = todo.id;
        li.innerText = todo.text;
        btn.innerText = `DEL ${li.id}`;
        btn.addEventListener("click", dispatchDeleteTodo);
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(paintTodos);

form.addEventListener("submit", onSubmit)

export default function VanilaRedux() {
    return (
        <>
            <button id="add">Add</button>
            <span id="num"></span>
            <button id="minus">Minus</button>
            <form>
                <input />
                <button>add to list</button>
            </form>
            <ul></ul>
        </>
    )
}