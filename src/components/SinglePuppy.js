import React from 'react';
import { createRoot } from 'react-dom/client';

export const SinglePuppy = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Every Puppy</h1>
            <h2>This puppy is {props.puppy.name}</h2>
        </div>)
};

export default EveryPuppy;