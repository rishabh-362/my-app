    import React, { useState } from 'react';

    function Form(props){
        const [text, setText] = useState("");
        const [changeText, setChangeText] = useState(false);
        const handleChange =(e) => {
            setText(e.target.value);    
        }
        const handleToggleText = () => {
            if(changeText){
                let newText = text.toLocaleLowerCase();
                setText(newText);
                setChangeText(false);
            } else {
                let newText = text.toLocaleUpperCase();
                setText(newText);
                setChangeText(true);
            }
        }
        const handleClearText = () => {
            setText("");
            setChangeText(false);    
        }
        const handleCopyToClipboard = () => {
            var text = document.getElementById("exampleInputEmail1");
            text.select();
            navigator.clipboard.writeText(text.value);
            alert("Copied to clipboard " + text.value);
            console.log("Copied to clipboard", text.value);
        }
        
        
        return (
            <>
            <form className="mt-4">
                <label htmlFor="exampleInputEmail1" className="form-label text-start font-semibold">{props.label}</label>
                <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" value={text} onChange = {handleChange}/>
                <button type="button" className="btn btn-primary mt-4" onClick={handleToggleText}>{changeText? 'Change to Lower Case' : 'Change to Upper Case'}</button>
                <button type="button" className="btn btn-primary mt-4 ms-3" onClick={handleClearText}>Clear Text</button>
                <button type="button" className="btn btn-primary mt-4 ms-3" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
            </form>
            <div className="container mt-4" style={{textAlign: 'left'}}>
                <h4>Text Summary</h4>
                <p>{text.split(' ').filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(' ').filter(word => word.length > 0).length} per minute word read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
            </>
        );
    }

    export default Form;