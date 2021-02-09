import React, {  } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { actionCreator } from '../store';

function Todo({text,id, onBtnClick}) {
    return (
        <li key={id}>
            {text} <button onClick={onBtnClick}>DEL</button>
        </li>
    )
}

function mapDispatchProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreator.delTodo(ownProps.id))
    }
}

export default connect(null,mapDispatchProps) (Todo);