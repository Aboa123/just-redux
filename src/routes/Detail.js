import React from 'react';
import { connect } from 'react-redux';

function Detail({toDo}) {
    return (
        <div>
            <h1>{toDo?.text}</h1>
            <h1>Created At : {toDo?.id}</h1>
        </div>
    )
}

function mapStateToProps(state,ownProps) {
    const { match: {params:{id}} } = ownProps;
    return { toDo: state.toDos.find(toDo => toDo.id === parseInt(id)) }
}

export default  connect(mapStateToProps) (Detail);