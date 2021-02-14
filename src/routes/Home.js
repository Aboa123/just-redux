import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import Todo from '../components/Todo';

function Home({ toDosA, addTodoA, toDosB, addTodoB }) {
    const [textA,setTextA] = useState();
    const [textB,setTextB] = useState();
    function onChangeA(e) {
        setTextA(e.target.value);
    }
    function onSubmitA(e) {
        e.preventDefault();
        addTodoA(textA)
        setTextA("");
    }
    function onChangeB(e) {
        setTextB(e.target.value);
    }
    function onSubmitB(e) {
        e.preventDefault();
        addTodoB(textB)
        setTextB("");
    }
    return (
        <>
            <h1>Home</h1>
            <div style={{border:"1px solid black",display:"inline-block",width:"40%",margin:25,verticalAlign:"top"}}>
                <h1>TodoA List</h1>
                <form onSubmit={onSubmitA}>
                    <input value={textA} onChange={onChangeA}/>
                    <button>Add</button><br/>
                </form>
                <ul>
                    {toDosA.map(item => <Todo Ltype={"A"} key={item.id} {...item} />)}
                </ul>
            </div>
            <div style={{border:"1px solid black",display:"inline-block",width:"40%",margin:25}}>
                <h1>TodoB List</h1>
                <form onSubmit={onSubmitB}>
                    <input value={textB} onChange={onChangeB}/>
                    <button>Add</button><br/>
                </form>
                <ul>
                    {toDosB.map(item => <Todo Ltype={"B"} key={item.id} {...item} />)}
                </ul>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return { 
        toDosA : state.toDoA,
        toDosB : state.toDoB
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoA: (text) => dispatch(actionCreator.addTodoA(text)),
        addTodoB: (text) => dispatch(actionCreator.addTodoB(text))
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);