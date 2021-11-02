import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        console.log('Counter 생성자 호출됨');
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        return nextProps.number % 10 === 4;
    }*/

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.number);
        console.log(prevProps.number);
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>number : { this.props.number }</div>
                <button onClick={ this.props.handleIncrement }>+</button>
                <button onClick={ this.props.handleDecrement }>-</button>
            </div>
        );
    }
}

export default Counter;