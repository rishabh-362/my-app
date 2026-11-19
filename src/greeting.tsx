import React from "react";


function Greeting(props: { name: string }   ) {
    return (
        <p>Hello, {props.name}</p>
    )
}

export default Greeting;