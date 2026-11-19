import React from "react";

function Alert(props){
    return(
        <div className={`alert alert-${props.modeAlert == 'Light' ? 'success' : 'secondary'} d-${props.toggleAlert == true ? 'block' : 'none'}`} role="alert">
           <b>{props.modeAlert}</b> Mode has been enabled.
        </div>
    )
}

export default Alert; 