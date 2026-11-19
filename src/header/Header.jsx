import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode == false ? 'dark' : 'light'}  bg-${props.mode == false ? 'dark' : 'light'}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#" >{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">{props.abouttext}</Link>
                    </li>
                </ul>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioRed" value="option1" onClick={props.changeColor} defaultChecked/>
                    <label className={`form-check-label text-${props.mode == false ? 'light' : 'dark'}`} htmlFor="inlineRadioRed">Red</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioGreen" value="option2" onClick={props.changeColor}/>
                    <label className={`form-check-label text-${props.mode == false ? 'light' : 'dark'}`} htmlFor="inlineRadioGreen">Green</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioOrange" value="option3" onClick={props.changeColor}/>
                    <label className={`form-check-label text-${props.mode == false ? 'light' : 'dark'}`} htmlFor="inlineRadioOrange">Orange</label>
                </div>
                <div className={`form-check form-switch text-${props.mode == false ? 'light' : 'dark'}`}>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Header;