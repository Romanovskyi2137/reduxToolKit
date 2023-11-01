

const defaultState = {
    counter: 0
};

const COUNTER_INCREMENT = "COUNTER_INCREMENT";
const COUNTER_DECREMENT = "COUNTER_DECREMENT";

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {...state, counter: state.counter + 1}
        case COUNTER_DECREMENT:
            return {...state, counter: state.counter - 1} 
        // default: 
        //     return state       
    };
    return state
};

export const incrementAction = () => {
    return {type: COUNTER_INCREMENT, payload: null}
};

export const decrementAction = () => {
    return {type: COUNTER_DECREMENT, payload: null}
};