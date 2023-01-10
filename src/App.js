import React,{useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enablesd or not
  
  //for changing the text of radio button
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#092c3b';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const [alert, setalert] = useState(null);
  const showAlert=(message, type)=>{
    setalert({
      msg: message,
      type:type
    })
  }
  setTimeout(() => {
    setalert('null');
    
  }, 2000);
 
  return (

    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
          <Route path="/about" element={<About/>} >
          </Route>
          <Route path="/" element={<TextForm title="Lets Play with words" mode={mode}/>}>  
          </Route>
      </Routes>  
    </Router>

  )
}

export default App;
