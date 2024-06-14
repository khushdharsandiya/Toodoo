import React, { useState } from 'react';

export default function Event() {
    const [state, setState] = useState({
        list: []
    });

    const handleInputChange = (e) => {
        setState({
            ...state,
            inputValue: e.target.value
        });
    };

    const addToList = () => {
        setState({
            ...state,
            list: [state.inputValue, ...state.list.slice(1)],
        });
    };

    return (
        <div>
            <input
                type="text"
                onChange={handleInputChange}
            />
            <button onClick={addToList}>Add to List</button>
            <div>
                {state.list.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))}
            </div>
        </div>
    );
}