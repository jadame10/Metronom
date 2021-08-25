import React from 'react';
import { useState} from 'react';
import './App.css';
import click11 from './click1.wav';

function App() {

  const [playing, setPlaying]  = useState(false);
  const [count, setCount] = useState(0);
  const [bpm, setBpm] = useState(100);
  const [beatsPerMeasure, setBeatsPerMeasure]  = useState(4);
  const [timer, setTimer] = useState(0);
  const click1 = new Audio(click11);
  const [intervalId, setIntervalId] = useState(0);
  
const playClick = () => {
  click1.play();
}

const handleClick = () => {
  if (intervalId) {
    clearInterval(intervalId);
    setPlaying(false);
    setIntervalId(0);
    return;
  }

  const newIntervalId = setInterval(playClick, (60 / bpm) * 1000);
  setIntervalId(newIntervalId);
  setPlaying(true);
};

  const handleBpmChange = (event) =>{
   setBpm(event.target.value);
  }

  return (
    <div className="App">
      <h3 className = 'm1'>Metronom</h3>
      <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input type="range" min="60" max="240" value={bpm} onChange={handleBpmChange} />
        </div>
        <button onClick={handleClick}>{playing ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default App;
