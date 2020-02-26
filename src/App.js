import React from 'react'

import MainIntro from './components/MainIntro'
import Introduction from './components/Introduction'
import CompareAlt from './components/CompareAlt'
import Dancer from './components/Dancer'
import RuneUtilizer from './components/RuneUtilizer'
import Last from './components/Last'

import './index.css'

const App = () => {
  return (
    <div>
      <MainIntro />
      <div className='scroll'>
        <Introduction />
        <CompareAlt />
        <Dancer />
        <RuneUtilizer />
        <Last />
      </div>
    </div>

  )
}

export default App 