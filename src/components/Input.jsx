import React from 'react';
import './input.css';
import { connect } from 'react-redux';



// Import module allowing the component to be connected with the store

// A functional component
const Input = (props) => {
    return(
        <div className="input">
            {props.input}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        input: state.input
    }
}

export default connect(mapStateToProps)(Input) 