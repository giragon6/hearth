import React, { useState } from 'react'
import Streak from './components/Streak'
import Button from './components/Button';
import NavBar from './components/NavBar';


const App = () => {
  const [ isSettingsActive, setIsSettingsActive ] = useState(false);

  return (
    <>
      <NavBar isSettingsActive={isSettingsActive} setIsSettingsActive={setIsSettingsActive} />
      
      { isSettingsActive 
        && <div className='grid min-h-[100px] min-w-[300px] place-items-center p-4 bg-bgPrimary'>
          <h1>settings, eventually</h1>
        </div>
      }
      <div className='grid min-h-[100px] min-w-[300px] place-items-center p-4 bg-bgPrimary'>
        <Streak />
      </div>
    </>
  )
}

export default App