import React, {  } from 'react';
import { connect } from 'react-redux';
import { delA, delB } from '../store';
import { Link } from 'react-router-dom';

function Todo({Ltype, text, delA, delB, id}) {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={Ltype === "A" ? delA : delB}>DEL</button>
        </li>
    )
}

function mapDispatchProps(dispatch, ownProps) {
    return {
        delA: () => dispatch(delA(ownProps.id)),
        delB: () => dispatch(delB(ownProps.id))
    }
}

export default connect(null,mapDispatchProps) (Todo);