import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './header/Header.jsx'
import Form from './component/Form.jsx'
import About from './component/About.jsx'
import Alert from './component/Alert.jsx'
import Practice from './practice.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState(false);
  const [toggleAlert, setToggleAlert] = useState(false);
  const [color, setColor] = useState('danger');
  const [modeText, setModeText] = useState('Dark Mode');

  const toggleMode = () => {
    if(mode == false) {

      setMode(true)
      setModeText('Light Mode');
      document.title='Text Utils - Light Mode'
    }else{
      setMode(false)
      setModeText('Dark Mode');
      document.title='Text Utils - Dark Mode'

    }
    setToggleAlert(true);
    setTimeout(() => {
      setToggleAlert(false);
    }, 3000);
  }

  const changeColor = (e) => {
    if(e.target.value == 'option1'){
      setColor('danger');
    }
    else if(e.target.value == 'option2'){
      setColor('success');
    }
    else if(e.target.value == 'option3'){
      setColor('warning');
    }
  }


  return (
    <>
      <Router>
        <Header title="React app" abouttext="About" mode={mode} toggleMode={toggleMode} modeText={modeText} changeColor={changeColor}/>
        <Alert modeAlert={mode == false ? 'Dark' : 'Light'}  toggleAlert={toggleAlert}/>
          <div className={`container bg-${color} `}>
            <Routes>
                
                <Route path="/" element={<Form label="Enter text"/>} />
                <Route path="/About" element={<About/>} />
            </Routes>
          </div>
        {/* <Practice /> */}
      </Router>
    </>
  )
}

export default App
