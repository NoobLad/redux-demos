import React from "react"
import {connect} from "react-redux"
import {decrement, increment} from "../store"
import "../../demo-simple/simple.css"


@connect(mapToProps, bindToActions)
export class CounterPage extends React.Component {
    render() {
        const {counter, increment, decrement} = this.props
        return (<div>
            <p>Je sais compter jusqu'à : <span className="counter" data-value={counter}/></p>
            <div className="buttons">
                <button className="counter-inc" onClick={increment}>Compter</button>
                <button className="counter-dec" onClick={decrement}>Décompter</button>
            </div>
        </div>)
    }
}

function mapToProps(counter) {
    return {
        counter: counter,
    }
}

function bindToActions(dispatch) {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}