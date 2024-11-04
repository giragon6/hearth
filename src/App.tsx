import React, { useState } from 'react'
import Streak from './components/Streak'
import NavBar from './components/NavBar';
import Settings from './components/Settings';
import Goal from './components/Goal';


const App = () => {
  const [ isSettingsActive, setIsSettingsActive ] = useState(false);
  const [ goal, setGoal ] = useState("None")

  return (
    <>
      <div className='grid p-4 min-w-[300px] bg-bgPrimary font-serif text-tBase'>
        <NavBar isSettingsActive={isSettingsActive} setIsSettingsActive={setIsSettingsActive} />
        
        { isSettingsActive && <Settings goal={goal} setGoal={setGoal} /> }

        <Goal goal={goal}/>

        <Streak />
      </div>
    </>
  )
}

export default App