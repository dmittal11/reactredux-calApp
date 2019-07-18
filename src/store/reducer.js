import { evaluate } from 'mathjs'

const initialState = {
    input: ''
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){

        case 'SET_VALUE': {
        newState.input = newState.input + action.payload
        break;
        }

        case 'CALCULATE': {
            newState.input = action.payload
        break;
        }

        case 'CLEAR': {
            newState.input = ''
        break;
        }

    }

    return newState;
};

export default reducer;