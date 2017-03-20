import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./store";
import {CounterPage} from "./components/CounterPage";



class App extends React.Component {
    render () {
        return (<Provider store={store}>
            <CounterPage/>
        </Provider>);
    }
}

render(<App/>, document.querySelector('.container'));