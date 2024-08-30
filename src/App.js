import {
    BrowserRouter,
    // RouterProvider,
    Route, 
    Routes
  } from "react-router-dom";
import Navbar from './Navbar';
import './App.css';
import Form from './Form';
import About from './About';
import React, {useState} from 'react';
import Alert from './Alert'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,
  //   },
  // ]);

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      qisim: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode1 = () => {
    if(mode==='light' /*|| 'blue'*/){
      setMode('dark');
      document.body.style.backgroundColor = '#0d1117';
      showAlert('Dark Mode has been Enabled', 'success');
      document.title = 'Dark Mode Enabled'
      setInterval(() => {
        document.title = 'Savbar - Your Text Solutions';
      }, 2000);
    }
    else /*if(mode==='dark')*/{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
      document.title = 'Light Mode Enabled'
      setInterval(() => {
        document.title = 'Savbar - Your Text Solutions';
      }, 2000);
    }
  }
  // const toggleMode2 = () => {
  //   if(mode==='light' || 'dark'){
  //     setMode('blue');
  //     document.body.style.backgroundColor = '#00008B';
  //     showAlert('Blue Mode has been Enabled', 'success');
  //   }
  //   else if(mode==='blue'){
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert('Light Mode has been Enabled', 'success');
  //   }
  // }

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Savbar" 
          mode={mode} /*toggleMode2={toggleMode2}*/ toggleMode1={toggleMode1} 
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Form heading="Enter Your Text Here"
                mode={mode} 
                showAlert={showAlert}
          /> */}
        </div>
        <Routes>
          <Route path="/about" element={<About mode={mode} />}>
          </Route>
          <Route exact path="/" element={<Form heading="Enter Your Text Here"
                mode={mode} 
                showAlert={showAlert}
          />}>
          </Route>
        </Routes>
      </BrowserRouter>
        {/* <About mode={mode} /> */}
    </>
  );
}

export default App;
