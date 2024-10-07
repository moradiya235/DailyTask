import React, { useReducer } from 'react';

const initialState = {
    options: [
        { id: 'option1', text: 'BJP', votes: 0 },
        { id: 'option2', text: 'Congress', votes: 0 },
        { id: 'option3', text: 'AAP', votes: 0 },
    ],
};
const ADD_VOTE = 'ADD_VOTE';
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_VOTE:
            return {
                ...state,
                options: state.options.map(option =>
                    option.id === action.payload ? { ...option, votes: option.votes + 1 } : option
                ),
            };
        default:
            return state;
    }
};
function Pollingapp() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleVote = (optionId) => {
        dispatch({ type: ADD_VOTE, payload: optionId });
    };
    return (
        <div>
            <div style={{ padding: '20px' }}>
                <h1>Real-Time Polling App</h1>
                <div>
                    {state.options.map(option => (
                        <div key={option.id} style={{ marginBottom: '10px',display:"flex",alignItems:"center",gap:"10px" }}>
                            <button onClick={() => handleVote(option.id)} className='btn btn-warning'>{option.text}</button>
                            <h5 className='text-black'> Votes: {option.votes}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Pollingapp;







