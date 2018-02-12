import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    increment,
    decrement,
    add,
    subtract,
    storeResult,
    deleteResult
} from '../../store/actions/';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter }  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter( 5 )}  />
                <hr />
                <button onClick={ () => this.props.onStoreResult(this.props.ctr) }>Store Result</button>
                <ul>
                    { this.props.results.map((result, index) => {
                        return <li onClick={() => this.props.onDeleteResult(index)} key={ index }>{ result }</li>
                    }) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        results: state.results.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: (value) => dispatch(add(value)),
        onSubtractCounter: (value) => dispatch(subtract(value)),
        onStoreResult: (value) => dispatch(storeResult(value)),
        onDeleteResult: (value) => dispatch(deleteResult(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);