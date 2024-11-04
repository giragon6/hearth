import React from 'react'
import Streak from './components/Streak'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const App = () => {
  return (
    <>
    <Tabs>
        <TabList>
          <Tab>Main</Tab>
          <Tab>Settings</Tab>
        </TabList>

        <TabPanel>
          <div className='grid min-h-[100px] min-w-[300px] place-items-center p-4 bg-bgPrimary'>
            <Streak />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid min-h-[100px] min-w-[300px] place-items-center p-4 bg-bgPrimary'>
            <h1>settings, eventually</h1>
          </div>
        </TabPanel>
      </Tabs>
    </>
  )
}

export default App