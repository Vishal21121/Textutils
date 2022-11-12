import './App.css';
import Navabar from './components/Navabar';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33,37,41)'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navabar mode={mode} toggleMode={toggleMode}>
      </Navabar>
      <Textform mode={mode} toggleMode={toggleMode}>

      </Textform>
    </>
  );
}

export default App;
