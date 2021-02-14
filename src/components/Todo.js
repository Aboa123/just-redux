import React, {  } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { Link } from 'react-router-dom';

function Todo({Ltype, text, delTodoA, delTodoB, id}) {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={Ltype === "A" ? delTodoA : delTodoB}>DEL</button>
        </li>
    )
}

function mapDispatchProps(dispatch, ownProps) {
    return {
        delTodoA: () => dispatch(actionCreator.delTodoA(ownProps.id)),
        delTodoB: () => dispatch(actionCreator.delTodoB(ownProps.id))
    }
}

export default connect(null,mapDispatchProps) (Todo);