import React from 'react'
import Streak from './components/Streak'

const App = () => {
  return (
    <>
      <div className='grid min-h-[100px] min-w-[300px] place-items-center p-4 bg-bgPrimary'>
        <Streak />
      </div>
    </>
  )
}

export default App