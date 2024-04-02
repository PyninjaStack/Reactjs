import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
}
   const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enable","success");
      document.title = 'TextUtils - Dark Mode';
      /*setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      },2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      },1500);*/
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/*<Navbar Title="TextUtiles" AboutTilte="About TextUtiles" Home="Home" />*/}
    {/*/<Navbar/>*/}
    <Navbar Title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/>
    {/*<About/>*/}
    </div>
    
    </>
  );
}

export default App;
