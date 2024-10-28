import React, { useState } from 'react';
import Stage1Red from './assets/images/dragon-stages/stage-1-red.png';
import './App.css';
import { Button } from './components/button/Button';

function App() {
  const [streak, setStreak] = useState(0);
  const [color, setColor] = useState("red");
  const [stage, setStage] = useState(1);
  const incrementStreak = () => setStreak(s => s+1);
  return (
    <div className="App">
      Welcome to Hearth!
      <img src={ Stage1Red }></img>
      Streak: {streak}
      <Button
        onClick={incrementStreak} 
        label={"Increase streak"}
      />
    </div> 
  );
}

export default App;
