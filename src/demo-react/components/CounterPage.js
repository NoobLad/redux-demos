import React from 'react'
import {connect} from "react-redux"
import {increment, decrement} from "../store"


@connect(mapToProps, bindToActions)
export class CounterPage extends React.Component {
    render() {
        const {counter, increment, decrement} = this.props
        return (<div>
            <p>Je sais compter jusqu'à : {counter}</p>
            <button onClick={increment}>Compter</button>
            <button onClick={decrement}>Décompter</button>
        </div>)
    }
}

function mapToProps(counter) {
    return {
        counter: counter
    }
}

function bindToActions(dispatch) {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}