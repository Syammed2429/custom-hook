import './App.css';
import { useTimeOut } from './util/useTimeOut';
import logo from './logo.svg'
import { useEffect, useState, useRef } from 'react';


function App() {

  const ready = useTimeOut(5000);
  const [timer, setTimer] = useState(5);
  const id = useRef(0);
  const clear = () => {
    window.clearInterval(id.current);
  };


  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);


  return (
    <div className="App">
      <img src={logo} alt="logo" className="App-logo" />

      <h1>Custom Hook</h1>
      <h4>The text "Not Ready" will become "Ready" after {timer} {timer <= 1 ? "Second" : "Seconds"}  </h4>

      {!ready ? "Ready " : "Not Ready"}

    </div>
  );
}


export default App;
