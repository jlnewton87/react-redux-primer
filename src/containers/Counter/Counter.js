import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../store/actions';
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
                <button onClick={ this.props.onStoreResult }>Store Result</button>
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
        ctr: state.counter,
        results: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actions.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actions.DECREMENT }),
        onAddCounter: (value) => dispatch({ type: actions.ADD, value }),
        onSubtractCounter: (value) => dispatch({ type: actions.SUBTRACT, value }),
        onStoreResult: () => dispatch({ type: actions.STORE_RESULT }),
        onDeleteResult: (value) => dispatch({ type: actions.DELETE_RESULT, value })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);