import React from 'react';
import Button from './Button';
import ClearButton from './ClearButton';
import { evaluate } from 'mathjs'; 
import { connect } from 'react-redux';

const Keypad = (props) => {
return(
    <div>
        <div className="row">
            <Button handleClick={props.setInput}>7</Button>
            <Button handleClick={props.setInput}>8</Button>
            <Button handleClick={props.setInput}>9</Button>
            <Button handleClick={props.setInput}>/</Button>
        </div>
        <div className="row">
            <Button handleClick={props.setInput}>4</Button>
            <Button handleClick={props.setInput}>5</Button>
            <Button handleClick={props.setInput}>6</Button>
            <Button handleClick={props.setInput}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={props.setInput}>1</Button>
            <Button handleClick={props.setInput}>2</Button>
            <Button handleClick={props.setInput}>3</Button>
            <Button handleClick={props.setInput}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={props.setInput}>.</Button>
            <Button handleClick={props.setInput}>0</Button>
            <Button handleClick={() => props.calculate(props.input)}>=</Button>
            <Button handleClick={props.setInput}>-</Button>
        </div>
        <div className="row">
           <ClearButton handleClear={props.clear}>
               Clear
           </ClearButton>
        </div>
    </div>
)
}

const mapStateToProps = (state) => {
    return{
        input: state.input
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setInput: (value) => dispatch({ type: 'SET_VALUE', payload:  value}),
        calculate: (input) => dispatch({ type: 'CALCULATE', payload: evaluate(input) }),
        clear: () => dispatch({ type: 'CLEAR' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Keypad);


