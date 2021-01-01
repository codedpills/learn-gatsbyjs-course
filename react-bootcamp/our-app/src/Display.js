import React from 'react';

// const name = "Zak";
// const profession = "Teacher";
// const company = "Udemy"

const Display = (props) => {
    return (
        <>
            <h1>Hello, welcome {props.name} </h1>
            <p>I'm a {props.profession} at {props.company} </p>
        </>
    )
}

export default Display;