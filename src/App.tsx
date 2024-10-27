import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/button/Button';

function App() {
  const [streak, setStreak] = useState(0);
  const incrementStreak = () => setStreak(s => s+1);
  return (
    <div className="App">
      Welcome to Hearth!
      Streak: {streak}
      <Button
        onClick={incrementStreak} 
        label={"Increase streak"}
      />
    </div> 
  );
}

export default App;
