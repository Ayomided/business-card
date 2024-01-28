import React from 'react'
import Picture from './components/Picture'
import Info from './components/Info'
import Buttons from './components/Buttons'
import Decription from './components/Decription'
import SocialIcons from './components/SocialIcons'

function App() {
  return (
    <div className='py-4'>
      <Picture />
      <Info />
      <Buttons />
      <Decription />
      <SocialIcons />
    </div>
  )
}

export default App